const express = require("express");
const { createContact } = require("../controllers/contactController");
const createRateLimiter = require("../middleware/rateLimiter");

const router = express.Router();

// 5 submissions per 15 minutes per IP - generous for a real visitor,
// tight enough to blunt basic spam/automation against a public form.
const contactRateLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many submissions. Please try again in a few minutes.",
});

router.post("/", contactRateLimiter, createContact);

module.exports = router;
