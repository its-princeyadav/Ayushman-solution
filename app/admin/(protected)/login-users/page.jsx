import AdminLoginUsersScreen from "../../../../admin/pages/LoginUsers/AdminLoginUsersScreen";
import connectDB from "../../../../lib/db";
import { getLoginUsersList } from "../../../../lib/adminLists";

export const metadata = {
  title: "Login Users | Ayushman Solutions Admin",
};

async function getLoginUsersData(page) {
  try {
    await connectDB();
    const data = await getLoginUsersList({ page });
    return { data };
  } catch {
    return { error: true };
  }
}

export default async function AdminLoginUsersPage({ searchParams }) {
  const { page } = await searchParams;
  const { data, error } = await getLoginUsersData(page);
  return <AdminLoginUsersScreen data={data} error={error} />;
}
