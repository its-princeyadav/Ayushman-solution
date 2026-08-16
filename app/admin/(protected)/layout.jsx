import { redirect } from "next/navigation";
import AdminDashboardLayout from "../../../admin/components/Layout/AdminDashboardLayout";
import { requireAdmin } from "../../../lib/adminAuth";

// Single, server-side auth gate for every /admin/* page below this route
// group (dashboard, users, login-users, contact). Runs before any of them
// render - an unauthenticated request never reaches a page's own code, and
// none of those pages need to call requireAdmin() themselves anymore.
//
// Because this layout persists across navigations within the group, the
// sidebar/header (AdminDashboardLayout, a client component) is not
// unmounted and remounted on every Dashboard <-> Users <-> Login Users <->
// Contact click - only the page content underneath swaps.
export default async function ProtectedAdminLayout({ children }) {
  const auth = await requireAdmin();
  if (!auth.ok) {
    redirect("/admin");
  }

  return <AdminDashboardLayout>{children}</AdminDashboardLayout>;
}
