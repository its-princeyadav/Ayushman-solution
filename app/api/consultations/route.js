import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import ConsultationBooking from "../../../lib/models/ConsultationBooking";
import { withApiErrors } from "../../../lib/errors";
import { createRateLimiter, getClientIp } from "../../../lib/rateLimit";

// Same budget as /api/contact - a public, unauthenticated write endpoint
// with the same abuse profile.
const consultationLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many booking attempts. Please try again in a few minutes.",
});

export const POST = withApiErrors(async (request) => {
  const limited = consultationLimiter.check(getClientIp(request));
  if (limited) return limited;

  await connectDB();

  const { fullName, email, phone, company, state, solution, turnover, message, selectedDate, selectedTime } =
    await request.json();

  // Schema (lib/models/ConsultationBooking.js) handles trimming/lowercasing/
  // required/format validation - Mongoose throws a ValidationError (caught
  // by withApiErrors) if anything is invalid, same as /api/contact.
  const booking = await ConsultationBooking.create({
    fullName,
    email,
    phone,
    company,
    state,
    solution,
    turnover,
    message,
    selectedDate,
    selectedTime,
  });

  return NextResponse.json(
    {
      success: true,
      message: "Consultation booked successfully",
      data: { id: booking._id },
    },
    { status: 201 }
  );
});
