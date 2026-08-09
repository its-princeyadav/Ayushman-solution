const express = require("express");
const { adminLogin, adminLogout, verifySession, getDashboardSummary } = require("../controllers/adminController");
const { verifyAdmin } = require("../middleware/adminAuth");
const createRateLimiter = require("../middleware/rateLimiter");

const router = express.Router();

// Tight - this is the single fixed admin credential, a prime brute-force
// target. skipSuccessfulRequests: only wrong-credential attempts count, so
// a legitimate admin logging in repeatedly (normal use, or local testing)
// never burns down the same budget a brute-force attacker's guesses do.
const adminLoginRateLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many login attempts. Please try again in a few minutes.",
    skipSuccessfulRequests: true,
});

router.post("/login", adminLoginRateLimiter, adminLogin);
router.post("/logout", adminLogout);
router.get("/verify", verifyAdmin, verifySession);
router.get("/dashboard", verifyAdmin, getDashboardSummary);

module.exports = router;
