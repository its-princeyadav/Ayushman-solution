import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import { withApiErrors } from "../../../../lib/errors";
import { requireAdmin } from "../../../../lib/adminAuth";
import { getDashboardSummary } from "../../../../lib/dashboard";

export const GET = withApiErrors(async () => {
  const auth = await requireAdmin();
  if (!auth.ok) {
    return NextResponse.json({ success: false, message: auth.message }, { status: auth.status });
  }

  await connectDB();
  const data = await getDashboardSummary();

  return NextResponse.json({ success: true, data });
});
