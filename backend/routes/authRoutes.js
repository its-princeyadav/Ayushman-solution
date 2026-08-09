const express = require("express");
const { registerUser, loginUser, getLoginStats, getLoginHistory } = require("../controllers/authController");
const createRateLimiter = require("../middleware/rateLimiter");

const router = express.Router();

// 10 attempts per 15 minutes per IP - generous for a real visitor, tight
// enough to blunt basic account-creation spam/automation.
const registerRateLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many registration attempts. Please try again in a few minutes.",
});

// Tighter than registration - login is the more common brute-force target.
const loginRateLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many login attempts. Please try again in a few minutes.",
});

router.post("/register", registerRateLimiter, registerUser);
router.post("/login", loginRateLimiter, loginUser);
router.get("/login-stats", getLoginStats);
router.get("/login-history", getLoginHistory);

module.exports = router;
