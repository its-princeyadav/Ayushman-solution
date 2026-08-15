import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../lib/models/User";
import LoginActivity from "../../../../lib/models/LoginActivity";
import { withApiErrors } from "../../../../lib/errors";

export const GET = withApiErrors(async () => {
  await connectDB();

  const [totalRegisteredUsers, totalLoginEvents, uniqueLoggedInUserIds] = await Promise.all([
    User.countDocuments(),
    LoginActivity.countDocuments(),
    LoginActivity.distinct("userId"),
  ]);

  return NextResponse.json({
    success: true,
    data: {
      totalRegisteredUsers,
      totalLoginEvents,
      uniqueLoggedInUsers: uniqueLoggedInUserIds.length,
    },
  });
});
