import { NextResponse } from "next/server";
import { withApiErrors } from "../../../../lib/errors";
import { ADMIN_COOKIE_NAME } from "../../../../lib/adminAuth";

export const POST = withApiErrors(async () => {
  const response = NextResponse.json({ success: true, message: "Admin logged out." });
  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
});
