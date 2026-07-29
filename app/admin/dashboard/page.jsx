import AdminDashboardLayout from "../../../admin/components/Layout/AdminDashboardLayout";
import AdminDashboardScreen from "../../../admin/pages/Dashboard/AdminDashboardScreen";

export const metadata = {
  title: "Dashboard | Ayushman Solutions Admin",
};

export default function AdminDashboardPage() {
  return (
    <AdminDashboardLayout title="Dashboard">
      <AdminDashboardScreen />
    </AdminDashboardLayout>
  );
}
