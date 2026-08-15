import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import LoginActivity from "../../../../lib/models/LoginActivity";
import { withApiErrors } from "../../../../lib/errors";

export const GET = withApiErrors(async (request) => {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const limit = Math.min(Math.max(parseInt(searchParams.get("limit"), 10) || 20, 1), 100);
  const page = Math.max(parseInt(searchParams.get("page"), 10) || 1, 1);
  const skip = (page - 1) * limit;

  const [entries, total] = await Promise.all([
    LoginActivity.find().sort({ loginAt: -1 }).skip(skip).limit(limit),
    LoginActivity.countDocuments(),
  ]);

  return NextResponse.json({
    success: true,
    data: entries.map((entry) => ({
      userId: entry.userId,
      name: entry.name,
      email: entry.email,
      loginAt: entry.loginAt,
    })),
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});
