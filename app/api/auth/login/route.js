import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../lib/models/User";
import LoginActivity from "../../../../lib/models/LoginActivity";
import { withApiErrors } from "../../../../lib/errors";
import { createRateLimiter, getClientIp } from "../../../../lib/rateLimit";
import { isValidLoginInput } from "../../../../lib/validators";

// Tighter than registration - login is the more common brute-force target.
const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many login attempts. Please try again in a few minutes.",
});

export const POST = withApiErrors(async (request) => {
  const limited = loginLimiter.check(getClientIp(request));
  if (limited) return limited;

  await connectDB();

  const { email, password } = await request.json();

  if (!isValidLoginInput({ email, password })) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email and password." },
      { status: 400 }
    );
  }

  const normalizedEmail = email.trim().toLowerCase();

  // Same generic message whether the email doesn't exist or the password
  // is wrong - never let a caller distinguish the two (user enumeration).
  const invalidCredentials = () =>
    NextResponse.json({ success: false, message: "Invalid email or password." }, { status: 401 });

  const user = await User.findOne({ email: normalizedEmail }).select("+password");
  if (!user) return invalidCredentials();

  const passwordMatches = await user.comparePassword(password);
  if (!passwordMatches) return invalidCredentials();

  // Best-effort: a failure here must never turn a valid login into a failed
  // one, so it's caught locally rather than left to withApiErrors (which
  // would 500 the whole request).
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

  return NextResponse.json({
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
