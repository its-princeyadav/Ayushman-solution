const User = require("../models/User");
const LoginActivity = require("../models/LoginActivity");
const asyncHandler = require("../utils/asyncHandler");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;

function isValidRegisterInput({ name, email, phone, password, confirmPassword }) {
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) return false;
    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) return false;
    if (phone && (typeof phone !== "string" || !PHONE_RE.test(phone.trim()))) return false;
    if (typeof password !== "string" || password.length < 8) return false;
    if (password !== confirmPassword) return false;
    return true;
}

// POST /api/auth/register
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;

    // Never trust the frontend - re-run the same checks the modal already did.
    if (!isValidRegisterInput({ name, email, phone, password, confirmPassword })) {
        return res.status(400).json({
            success: false,
            message: "Please provide valid registration details.",
        });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "An account with this email already exists.",
        });
    }

    // Password is hashed by the User model's pre-save hook.
    const user = await User.create({
        name: name.trim(),
        email: normalizedEmail,
        phone: phone ? phone.trim() : "",
        password,
    });

    res.status(201).json({
        success: true,
        message: "Registration successful.",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        },
    });
});

function isValidLoginInput({ email, password }) {
    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) return false;
    if (typeof password !== "string" || !password) return false;
    return true;
}

// POST /api/auth/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!isValidLoginInput({ email, password })) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email and password.",
        });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Same generic message whether the email doesn't exist or the password
    // is wrong - never let a caller distinguish the two (user enumeration).
    const invalidCredentials = () =>
        res.status(401).json({
            success: false,
            message: "Invalid email or password.",
        });

    const user = await User.findOne({ email: normalizedEmail }).select("+password");
    if (!user) return invalidCredentials();

    const passwordMatches = await user.comparePassword(password);
    if (!passwordMatches) return invalidCredentials();

    // Best-effort: a failure here must never turn a valid login into a
    // failed one, so it's caught and logged rather than left to asyncHandler
    // (which would 500 the whole request).
    try {
        await LoginActivity.create({
            userId: user._id,
            name: user.name,
            email: user.email,
            loginAt: new Date(),
        });
    } catch (err) {
        console.error("Failed to record login activity:", err.message);
    }

    res.status(200).json({
        success: true,
        message: "You are successfully logged in.",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        },
    });
});

// GET /api/auth/login-stats
const getLoginStats = asyncHandler(async (req, res) => {
    const [totalRegisteredUsers, totalLoginEvents, uniqueLoggedInUserIds] = await Promise.all([
        User.countDocuments(),
        LoginActivity.countDocuments(),
        LoginActivity.distinct("userId"),
    ]);

    res.status(200).json({
        success: true,
        data: {
            totalRegisteredUsers,
            totalLoginEvents,
            uniqueLoggedInUsers: uniqueLoggedInUserIds.length,
        },
    });
});

// GET /api/auth/login-history?page=1&limit=20
const getLoginHistory = asyncHandler(async (req, res) => {
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 20, 1), 100);
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const skip = (page - 1) * limit;

    const [entries, total] = await Promise.all([
        LoginActivity.find().sort({ loginAt: -1 }).skip(skip).limit(limit),
        LoginActivity.countDocuments(),
    ]);

    res.status(200).json({
        success: true,
        data: entries.map((entry) => ({
            userId: entry.userId,
            name: entry.name,
            email: entry.email,
            loginAt: entry.loginAt,
        })),
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    });
});

module.exports = { registerUser, loginUser, getLoginStats, getLoginHistory };
