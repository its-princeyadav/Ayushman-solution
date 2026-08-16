import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import { withApiErrors } from "../../../../lib/errors";
import { requireAdmin } from "../../../../lib/adminAuth";
import { getUsersList } from "../../../../lib/adminLists";

export const GET = withApiErrors(async (request) => {
  const auth = await requireAdmin();
  if (!auth.ok) {
    return NextResponse.json({ success: false, message: auth.message }, { status: auth.status });
  }

  await connectDB();

  const { searchParams } = new URL(request.url);
  const data = await getUsersList({ page: searchParams.get("page"), limit: searchParams.get("limit") });

  return NextResponse.json({ success: true, ...data });
});
