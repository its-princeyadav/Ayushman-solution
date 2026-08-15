// Lightweight in-memory sliding-window rate limiter (no extra dependency).
// Good enough for a single long-lived Node process (this app runs via
// `next start`/`next dev`, no serverless/edge deploy target exists today) -
// swap for a shared-store limiter (Redis, etc.) if that ever changes.
import { NextResponse } from "next/server";

export function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // No proxy header present (e.g. plain `next dev` with no reverse proxy in
  // front of it) - all traffic collapses into one shared bucket.
  return "unknown";
}

// skipSuccessfulRequests: only count requests that end in an error response
// (status >= 400) toward the limit. Login endpoints should turn this on -
// otherwise a legitimate user/admin who logs in repeatedly during a normal
// session eats into the same budget a brute-force attacker's wrong-password
// guesses do, even though only the latter is the actual threat.
export function createRateLimiter({ windowMs, max, message, skipSuccessfulRequests = false }) {
  const hits = new Map();

  return {
    // Returns a 429 NextResponse if the caller is over the limit, else null.
    // When skipSuccessfulRequests is false, this also records the hit.
    check(ip) {
      const now = Date.now();
      const windowStart = now - windowMs;
      const timestamps = (hits.get(ip) || []).filter((timestamp) => timestamp > windowStart);
      hits.set(ip, timestamps);

      if (timestamps.length >= max) {
        return NextResponse.json(
          { success: false, message: message || "Too many requests. Please try again later." },
          { status: 429 }
        );
      }

      if (!skipSuccessfulRequests) {
        timestamps.push(now);
      }

      return null;
    },
    // For skipSuccessfulRequests limiters: call once the response status is
    // known, right before returning it.
    record(ip, statusCode) {
      if (!skipSuccessfulRequests || statusCode < 400) return;
      const timestamps = hits.get(ip) || [];
      timestamps.push(Date.now());
      hits.set(ip, timestamps);
    },
  };
}
