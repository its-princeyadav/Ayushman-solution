import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Contact from "../../../lib/models/Contact";
import { withApiErrors } from "../../../lib/errors";
import { createRateLimiter, getClientIp } from "../../../lib/rateLimit";

// 5 submissions per 15 minutes per IP - generous for a real visitor, tight
// enough to blunt basic spam/automation against a public form.
const contactLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many submissions. Please try again in a few minutes.",
});

export const POST = withApiErrors(async (request) => {
  const limited = contactLimiter.check(getClientIp(request));
  if (limited) return limited;

  await connectDB();

  const { fullName, email, phone, company, service, subject, message, consent } = await request.json();

  // Schema (lib/models/Contact.js) handles trimming/lowercasing/required/
  // enum/length validation - Mongoose throws a ValidationError (caught by
  // withApiErrors) if anything is invalid.
  const contact = await Contact.create({
    fullName,
    email,
    phone,
    company,
    service,
    subject,
    message,
    consent,
  });

  return NextResponse.json(
    {
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: { id: contact._id },
    },
    { status: 201 }
  );
});
