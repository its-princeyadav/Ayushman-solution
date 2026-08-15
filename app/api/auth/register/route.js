import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../lib/models/User";
import { withApiErrors } from "../../../../lib/errors";
import { createRateLimiter, getClientIp } from "../../../../lib/rateLimit";
import { isValidRegisterInput } from "../../../../lib/validators";

// 10 attempts per 15 minutes per IP - generous for a real visitor, tight
// enough to blunt basic account-creation spam/automation.
const registerLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many registration attempts. Please try again in a few minutes.",
});

export const POST = withApiErrors(async (request) => {
  const limited = registerLimiter.check(getClientIp(request));
  if (limited) return limited;

  await connectDB();

  const { name, email, phone, password, confirmPassword } = await request.json();

  // Never trust the frontend - re-run the same checks the modal already did.
  if (!isValidRegisterInput({ name, email, phone, password, confirmPassword })) {
    return NextResponse.json(
      { success: false, message: "Please provide valid registration details." },
      { status: 400 }
    );
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    return NextResponse.json(
      { success: false, message: "An account with this email already exists." },
      { status: 409 }
    );
  }

  // Password is hashed by the User model's pre-save hook.
  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    phone: phone ? phone.trim() : "",
    password,
  });

  return NextResponse.json(
    {
      success: true,
      message: "Registration successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    },
    { status: 201 }
  );
});
