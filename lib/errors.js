// Centralized error mapping - keeps internal details (stack traces,
// connection strings, filesystem paths) out of every response body.
import { NextResponse } from "next/server";

export function toErrorResponse(err) {
  console.error(err);

  if (err?.name === "ValidationError") {
    return { status: 400, body: { success: false, message: "Please correct the highlighted fields." } };
  }

  if (err?.name === "CastError") {
    return { status: 400, body: { success: false, message: "Invalid request." } };
  }

  if (err?.code === 11000) {
    return { status: 409, body: { success: false, message: "An account with this email already exists." } };
  }

  return {
    status: err?.statusCode || 500,
    body: { success: false, message: "Something went wrong. Please try again later." },
  };
}

// Wraps a route handler so a thrown/rejected error becomes the same
// structured JSON response the old Express errorHandler produced.
export function withApiErrors(handler) {
  return async (request, ctx) => {
    try {
      return await handler(request, ctx);
    } catch (err) {
      const { status, body } = toErrorResponse(err);
      return NextResponse.json(body, { status });
    }
  };
}
