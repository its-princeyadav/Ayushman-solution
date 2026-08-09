import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboardLayout from "../../../admin/components/Layout/AdminDashboardLayout";
import AdminDashboardScreen from "../../../admin/pages/Dashboard/AdminDashboardScreen";

export const metadata = {
  title: "Dashboard | Ayushman Solutions Admin",
};

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

// Server-side guard + data fetch in one: this fetch goes server-to-server
// (Next -> Express), so it isn't a browser request and CORS/credentials:
// "include" don't apply - the incoming admin_token cookie is forwarded
// manually instead. Keeps /admin/dashboard from ever rendering real content
// (or a flash of fake content) for an unauthenticated visitor.
//
// 401/403 (no/invalid session) is distinguished from any other failure
// (network error, 500) - only the former means "not authenticated, send to
// login". The latter means "probably still authenticated, backend just
// failed" and should show the dashboard shell with an error banner instead
// (see AdminDashboardScreen's `error` prop), not bounce a real admin back
// to the login screen.
async function getDashboardData() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return { authenticated: false };

  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/dashboard`, {
      headers: { Cookie: `admin_token=${token}` },
      cache: "no-store",
    });

    if (response.status === 401 || response.status === 403) {
      return { authenticated: false };
    }
    if (!response.ok) {
      return { authenticated: true, error: true };
    }

    const json = await response.json();
    return { authenticated: true, data: json.data };
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
