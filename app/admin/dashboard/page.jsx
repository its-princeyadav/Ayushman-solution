import { redirect } from "next/navigation";
import AdminDashboardLayout from "../../../admin/components/Layout/AdminDashboardLayout";
import AdminDashboardScreen from "../../../admin/pages/Dashboard/AdminDashboardScreen";
import connectDB from "../../../lib/db";
import { requireAdmin } from "../../../lib/adminAuth";
import { getDashboardSummary } from "../../../lib/dashboard";

export const metadata = {
  title: "Dashboard | Ayushman Solutions Admin",
};

// Server-side guard + data fetch in one, called directly (no self-fetch to
// our own /api/admin/dashboard route - that would need an absolute URL
// built from headers().get("host"), a Next.js anti-pattern). Keeps
// /admin/dashboard from ever rendering real content (or a flash of fake
// content) for an unauthenticated visitor.
//
// 401/403 (no/invalid session) is distinguished from any other failure
// (DB error, etc.) - only the former means "not authenticated, send to
// login". The latter means "probably still authenticated, query just
// failed" and should show the dashboard shell with an error banner instead
// (see AdminDashboardScreen's `error` prop), not bounce a real admin back
// to the login screen.
async function getDashboardData() {
  const auth = await requireAdmin();
  if (!auth.ok) {
    return { authenticated: false };
  }

  try {
    await connectDB();
    const data = await getDashboardSummary();
    return { authenticated: true, data };
  } catch {
    return { authenticated: true, error: true };
  }
}

export default async function AdminDashboardPage() {
  const { authenticated, data, error } = await getDashboardData();
  if (!authenticated) {
    redirect("/admin");
  }

  return (
    <AdminDashboardLayout title="Dashboard">
      <AdminDashboardScreen data={data} error={error} />
    </AdminDashboardLayout>
  );
}
