import { NextResponse } from "next/server";
import { withApiErrors } from "../../../../lib/errors";
import { createRateLimiter, getClientIp } from "../../../../lib/rateLimit";
import { ADMIN_COOKIE_NAME, adminCookieOptions, signAdminToken } from "../../../../lib/adminAuth";

// Tight - this is the single fixed admin credential, a prime brute-force
// target. skipSuccessfulRequests: only wrong-credential attempts count, so
// a legitimate admin logging in repeatedly (normal use, or local testing)
// never burns down the same budget a brute-force attacker's guesses do.
const adminLoginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many login attempts. Please try again in a few minutes.",
  skipSuccessfulRequests: true,
});

export const POST = withApiErrors(async (request) => {
  const ip = getClientIp(request);
  const limited = adminLoginLimiter.check(ip);
  if (limited) return limited;

  const { email, password, remember } = await request.json();

  const response = await handleAdminLogin({ email, password, remember });
  adminLoginLimiter.record(ip, response.status);
  return response;
});

async function handleAdminLogin({ email, password, remember }) {
  if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
    return NextResponse.json(
      { success: false, message: "Please provide an email and password." },
      { status: 400 }
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const adminEmail = (process.env.ADMIN_EMAIL || "").toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "";

  // Plain equality is correct (not a bug) for this one fixed .env
  // credential - there is no hash to compare against, unlike User
  // passwords. Never log either side of this comparison.
  const isMatch = normalizedEmail === adminEmail && password === adminPassword;

  if (!isMatch) {
    return NextResponse.json({ success: false, message: "Invalid admin credentials." }, { status: 401 });
  }

  const token = signAdminToken({ email: adminEmail, role: "admin" });

  const response = NextResponse.json({ success: true, message: "Admin login successful." }, { status: 200 });
  response.cookies.set(ADMIN_COOKIE_NAME, token, adminCookieOptions(!!remember));
  return response;
}
