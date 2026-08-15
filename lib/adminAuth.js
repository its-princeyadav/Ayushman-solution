import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "admin_token";

// NextResponse.cookies.set() maxAge is in SECONDS (unlike Express's
// res.cookie(), which takes milliseconds) - keep this constant in seconds.
const REMEMBER_MAX_AGE = 30 * 24 * 60 * 60; // 30 days

export function adminCookieOptions(remember) {
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

export function signAdminToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
}

// Reads/verifies the admin_token cookie from the current request. Callable
// from both Route Handlers and Server Components (both can use
// next/headers' cookies()), which is what lets app/admin/dashboard/page.jsx
// check the session without a self-fetch.
export async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;

  if (!token) {
    return { ok: false, status: 401, message: "Admin authentication required." };
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload.role !== "admin") {
      return { ok: false, status: 403, message: "Admin access only." };
    }

    return { ok: true, admin: { email: payload.email, role: payload.role } };
  } catch {
    return { ok: false, status: 401, message: "Admin session expired or invalid. Please log in again." };
  }
}
