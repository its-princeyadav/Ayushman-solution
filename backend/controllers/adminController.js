const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const { ADMIN_COOKIE_NAME } = require("../middleware/adminAuth");
const User = require("../models/User");
const LoginActivity = require("../models/LoginActivity");
const Contact = require("../models/Contact");

const REMEMBER_MAX_AGE = 30 * 24 * 60 * 60 * 1000; // 30 days

function cookieOptions(remember) {
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    };
    // Omitting maxAge makes it a session cookie (cleared when the browser
    // closes) - that's the "not remembered" case.
    if (remember) options.maxAge = REMEMBER_MAX_AGE;
    return options;
}

// POST /api/admin/login
const adminLogin = asyncHandler(async (req, res) => {
    const { email, password, remember } = req.body;

    if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide an email and password.",
        });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const adminEmail = (process.env.ADMIN_EMAIL || "").toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD || "";

    // Plain equality is correct (not a bug) for this one fixed .env
    // credential - there is no hash to compare against, unlike User
    // passwords. Never log either side of this comparison.
    const isMatch = normalizedEmail === adminEmail && password === adminPassword;

    if (!isMatch) {
        return res.status(401).json({
            success: false,
            message: "Invalid admin credentials.",
        });
    }

    const token = jwt.sign({ email: adminEmail, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    res.cookie(ADMIN_COOKIE_NAME, token, cookieOptions(!!remember));

    res.status(200).json({
        success: true,
        message: "Admin login successful.",
    });
});

// POST /api/admin/logout
const adminLogout = asyncHandler(async (req, res) => {
    res.clearCookie(ADMIN_COOKIE_NAME, { path: "/" });
    res.status(200).json({
        success: true,
        message: "Admin logged out.",
    });
});

// GET /api/admin/verify (behind verifyAdmin middleware - reaching this
// handler at all already proves the session is valid)
const verifySession = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        admin: req.admin,
    });
});

const RECENT_LIMIT = 8;

// GET /api/admin/dashboard (behind verifyAdmin) - one consolidated query
// instead of a handful of small endpoints, since the dashboard needs all of
// this on every page load anyway.
const getDashboardSummary = asyncHandler(async (req, res) => {
    const [
        totalUsers,
        totalLogins,
        uniqueLoggedInUserIds,
        newMessages,
        recentUsersRaw,
        recentLoginsRaw,
        recentMessagesRaw,
    ] = await Promise.all([
        User.countDocuments(),
        LoginActivity.countDocuments(),
        LoginActivity.distinct("userId"),
        // Contact.status already exists (new/contacted/closed, defaults to
        // "new") - that's the existing schema's read/unread equivalent, no
        // new field needed.
        Contact.countDocuments({ status: "new" }),
        User.find().sort({ createdAt: -1 }).limit(5).select("name email createdAt"),
        LoginActivity.find().sort({ loginAt: -1 }).limit(RECENT_LIMIT),
        Contact.find().sort({ createdAt: -1 }).limit(5).select("fullName email subject status createdAt"),
    ]);

    // Merge three real event sources into one feed by actual timestamp -
    // no invented activity, only what these three collections already record.
    const recentActivity = [
        ...recentUsersRaw.map((u) => ({ text: `New user ${u.name} registered`, at: u.createdAt })),
        ...recentLoginsRaw.map((l) => ({ text: `${l.name} logged in`, at: l.loginAt })),
        ...recentMessagesRaw.map((m) => ({ text: `New message from ${m.fullName}`, at: m.createdAt })),
    ]
        .sort((a, b) => new Date(b.at) - new Date(a.at))
        .slice(0, RECENT_LIMIT);

    res.status(200).json({
        success: true,
        data: {
            totalUsers,
            totalLogins,
            uniqueLoggedInUsers: uniqueLoggedInUserIds.length,
            newMessages,
            recentUsers: recentUsersRaw.map((u) => ({
                id: u._id,
                name: u.name,
                email: u.email,
                joinedAt: u.createdAt,
            })),
            recentMessages: recentMessagesRaw.map((m) => ({
                id: m._id,
                name: m.fullName,
                email: m.email,
                subject: m.subject,
                status: m.status,
                createdAt: m.createdAt,
            })),
            recentActivity,
        },
    });
});

module.exports = { adminLogin, adminLogout, verifySession, getDashboardSummary };
