import User from "./models/User";
import LoginActivity from "./models/LoginActivity";
import Contact from "./models/Contact";
import ConsultationBooking from "./models/ConsultationBooking";

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

// Mirrors the pagination shape already used by app/api/auth/login-history
// (page/limit/total/totalPages) so every admin list responds the same way.
function normalizePaging(page, limit) {
  return {
    page: Math.max(parseInt(page, 10) || 1, 1),
    limit: Math.min(Math.max(parseInt(limit, 10) || DEFAULT_LIMIT, 1), MAX_LIMIT),
  };
}

export async function getUsersList({ page, limit } = {}) {
  const paging = normalizePaging(page, limit);
  const skip = (paging.page - 1) * paging.limit;

  const [users, total] = await Promise.all([
    User.find().sort({ createdAt: -1 }).skip(skip).limit(paging.limit).select("name email phone createdAt"),
    User.countDocuments(),
  ]);

  // One grouped query instead of a per-user lookup - only against the
  // userIds actually on this page.
  const userIds = users.map((u) => u._id);
  const lastLogins = await LoginActivity.aggregate([
    { $match: { userId: { $in: userIds } } },
    { $group: { _id: "$userId", lastLoginAt: { $max: "$loginAt" } } },
  ]);
  const lastLoginMap = new Map(lastLogins.map((entry) => [String(entry._id), entry.lastLoginAt]));

  return {
    users: users.map((u) => ({
      id: String(u._id),
      name: u.name,
      email: u.email,
      phone: u.phone || "",
      joinedAt: u.createdAt,
      lastLoginAt: lastLoginMap.get(String(u._id)) || null,
    })),
    pagination: { ...paging, total, totalPages: Math.max(Math.ceil(total / paging.limit), 1) },
  };
}

export async function getLoginUsersList({ page, limit } = {}) {
  const paging = normalizePaging(page, limit);
  const skip = (paging.page - 1) * paging.limit;

  const [logins, total] = await Promise.all([
    LoginActivity.find().sort({ loginAt: -1 }).skip(skip).limit(paging.limit).select("name email loginAt"),
    LoginActivity.countDocuments(),
  ]);

  return {
    logins: logins.map((entry) => ({
      id: String(entry._id),
      name: entry.name,
      email: entry.email,
      loginAt: entry.loginAt,
    })),
    pagination: { ...paging, total, totalPages: Math.max(Math.ceil(total / paging.limit), 1) },
  };
}

export async function getContactsList({ page, limit } = {}) {
  const paging = normalizePaging(page, limit);
  const skip = (paging.page - 1) * paging.limit;

  const [contacts, total] = await Promise.all([
    Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(paging.limit)
      .select("fullName email phone company service subject message status createdAt"),
    Contact.countDocuments(),
  ]);

  return {
    contacts: contacts.map((c) => ({
      id: String(c._id),
      name: c.fullName,
      email: c.email,
      phone: c.phone || "",
      company: c.company || "",
      service: c.service,
      subject: c.subject,
      message: c.message,
      status: c.status,
      createdAt: c.createdAt,
    })),
    pagination: { ...paging, total, totalPages: Math.max(Math.ceil(total / paging.limit), 1) },
  };
}

export async function getConsultationsList({ page, limit } = {}) {
  const paging = normalizePaging(page, limit);
  const skip = (paging.page - 1) * paging.limit;

  const [bookings, total] = await Promise.all([
    ConsultationBooking.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(paging.limit)
      .select("fullName email phone company state solution turnover selectedDate selectedTime createdAt"),
    ConsultationBooking.countDocuments(),
  ]);

  return {
    consultations: bookings.map((b) => ({
      id: String(b._id),
      name: b.fullName,
      email: b.email,
      phone: b.phone,
      company: b.company,
      state: b.state,
      solution: b.solution,
      turnover: b.turnover,
      selectedDate: b.selectedDate,
      selectedTime: b.selectedTime,
      bookedAt: b.createdAt,
    })),
    pagination: { ...paging, total, totalPages: Math.max(Math.ceil(total / paging.limit), 1) },
  };
}
