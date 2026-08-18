import { LuLayoutDashboard, LuUsers, LuLogIn, LuMail, LuCalendarCheck } from "react-icons/lu";

// Single source of truth for the protected admin routes - both AdminSidebar
// (nav links + active state) and AdminHeader (page title) key off this list
// instead of each hardcoding their own copy.
export const ADMIN_NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LuLayoutDashboard, href: "/admin/dashboard" },
  { id: "users", label: "Users", icon: LuUsers, href: "/admin/users" },
  { id: "login-users", label: "Login Users", icon: LuLogIn, href: "/admin/login-users" },
  { id: "contact", label: "Contact", icon: LuMail, href: "/admin/contact" },
  { id: "consultations", label: "Consultations", icon: LuCalendarCheck, href: "/admin/consultations" },
];
