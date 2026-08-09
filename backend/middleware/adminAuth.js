const jwt = require("jsonwebtoken");

const ADMIN_COOKIE_NAME = "admin_token";

// Protects admin-only routes: valid session cookie + role "admin" in the
// token payload. Separate from normal user auth (there is none yet) - a
// registered MongoDB user's credentials can never satisfy this, since the
// token is only ever issued by adminController.adminLogin after a match
// against process.env.ADMIN_EMAIL/ADMIN_PASSWORD.
function verifyAdmin(req, res, next) {
    const token = req.cookies?.[ADMIN_COOKIE_NAME];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Admin authentication required.",
        });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (payload.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin access only.",
            });
        }

        req.admin = { email: payload.email, role: payload.role };
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Admin session expired or invalid. Please log in again.",
        });
    }
}

module.exports = { verifyAdmin, ADMIN_COOKIE_NAME };
