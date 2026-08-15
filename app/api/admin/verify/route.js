import { NextResponse } from "next/server";
import { withApiErrors } from "../../../../lib/errors";
import { requireAdmin } from "../../../../lib/adminAuth";

export const GET = withApiErrors(async () => {
  const auth = await requireAdmin();
  if (!auth.ok) {
    return NextResponse.json({ success: false, message: auth.message }, { status: auth.status });
  }

  return NextResponse.json({ success: true, admin: auth.admin });
});
