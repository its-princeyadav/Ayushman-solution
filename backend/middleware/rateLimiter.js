// Lightweight in-memory sliding-window rate limiter (no extra dependency -
// the project doesn't already use express-rate-limit or similar). Good
// enough for a single-process deployment; swap for a shared-store limiter
// (Redis, etc.) if the backend ever scales to multiple instances.
function createRateLimiter({ windowMs, max, message }) {
    const hits = new Map();

    return function rateLimiter(req, res, next) {
        const key = req.ip;
        const now = Date.now();
        const windowStart = now - windowMs;

        const timestamps = (hits.get(key) || []).filter((timestamp) => timestamp > windowStart);

        if (timestamps.length >= max) {
            return res.status(429).json({
                success: false,
                message: message || "Too many requests. Please try again later.",
            });
        }

        timestamps.push(now);
        hits.set(key, timestamps);
        next();
    };
}

module.exports = createRateLimiter;
