// Lightweight in-memory sliding-window rate limiter (no extra dependency -
// the project doesn't already use express-rate-limit or similar). Good
// enough for a single-process deployment; swap for a shared-store limiter
// (Redis, etc.) if the backend ever scales to multiple instances.
//
// skipSuccessfulRequests: only count requests that end in an error response
// (status >= 400) toward the limit. Off by default (existing callers keep
// counting every request, unchanged). Login endpoints should turn this on -
// otherwise a legitimate user/admin who logs in repeatedly during a normal
// session eats into the same budget a brute-force attacker's wrong-password
// guesses do, even though only the latter is the actual threat.
function createRateLimiter({ windowMs, max, message, skipSuccessfulRequests = false }) {
    const hits = new Map();

    return function rateLimiter(req, res, next) {
        const key = req.ip;
        const now = Date.now();
        const windowStart = now - windowMs;

        const timestamps = (hits.get(key) || []).filter((timestamp) => timestamp > windowStart);
        hits.set(key, timestamps);

        if (timestamps.length >= max) {
            return res.status(429).json({
                success: false,
                message: message || "Too many requests. Please try again later.",
            });
        }

        if (skipSuccessfulRequests) {
            res.on("finish", () => {
                if (res.statusCode >= 400) timestamps.push(Date.now());
            });
        } else {
            timestamps.push(now);
        }

        next();
    };
}

module.exports = createRateLimiter;
