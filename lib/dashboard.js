import User from "./models/User";
import LoginActivity from "./models/LoginActivity";
import Contact from "./models/Contact";

const RECENT_LIMIT = 8;

// One consolidated query instead of a handful of small endpoints, since the
// dashboard needs all of this on every page load anyway. No auth check in
// here - that's the caller's job (route handler / page both call
// requireAdmin() first), same separation the old verifyAdmin middleware had
// from the controller.
export async function getDashboardSummary() {
  const [
    totalUsers,
    totalLogins,
    uniqueLoggedInUserIds,
    newMessages,
    recentUsersRaw,
    recentLoginsRaw,
    recentMessagesRaw,
  ] = await Promise.all([
    User.countDocuments(),
    LoginActivity.countDocuments(),
    LoginActivity.distinct("userId"),
    // Contact.status already exists (new/contacted/closed, defaults to
    // "new") - that's the existing schema's read/unread equivalent, no
    // new field needed.
    Contact.countDocuments({ status: "new" }),
    User.find().sort({ createdAt: -1 }).limit(5).select("name email createdAt"),
    LoginActivity.find().sort({ loginAt: -1 }).limit(RECENT_LIMIT),
    Contact.find().sort({ createdAt: -1 }).limit(5).select("fullName email subject status createdAt"),
  ]);

  // Merge three real event sources into one feed by actual timestamp - no
  // invented activity, only what these three collections already record.
  const recentActivity = [
    ...recentUsersRaw.map((u) => ({ text: `New user ${u.name} registered`, at: u.createdAt })),
    ...recentLoginsRaw.map((l) => ({ text: `${l.name} logged in`, at: l.loginAt })),
    ...recentMessagesRaw.map((m) => ({ text: `New message from ${m.fullName}`, at: m.createdAt })),
  ]
    .sort((a, b) => new Date(b.at) - new Date(a.at))
    .slice(0, RECENT_LIMIT);

  return {
    totalUsers,
    totalLogins,
    uniqueLoggedInUsers: uniqueLoggedInUserIds.length,
    newMessages,
    recentUsers: recentUsersRaw.map((u) => ({
      id: u._id,
      name: u.name,
      email: u.email,
      joinedAt: u.createdAt,
    })),
    recentMessages: recentMessagesRaw.map((m) => ({
      id: m._id,
      name: m.fullName,
      email: m.email,
      subject: m.subject,
      status: m.status,
      createdAt: m.createdAt,
    })),
    recentActivity,
  };
}
