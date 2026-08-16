import AdminDashboardScreen from "../../../../admin/pages/Dashboard/AdminDashboardScreen";
import connectDB from "../../../../lib/db";
import { getDashboardSummary } from "../../../../lib/dashboard";

export const metadata = {
  title: "Dashboard | Ayushman Solutions Admin",
};

async function getDashboardData() {
  try {
    await connectDB();
    const data = await getDashboardSummary();
    return { data };
  } catch {
    return { error: true };
  }
}

export default async function AdminDashboardPage() {
  const { data, error } = await getDashboardData();
  return <AdminDashboardScreen data={data} error={error} />;
}
