import AdminUsersScreen from "../../../../admin/pages/Users/AdminUsersScreen";
import connectDB from "../../../../lib/db";
import { getUsersList } from "../../../../lib/adminLists";

export const metadata = {
  title: "Users | Ayushman Solutions Admin",
};

async function getUsersData(page) {
  try {
    await connectDB();
    const data = await getUsersList({ page });
    return { data };
  } catch {
    return { error: true };
  }
}

export default async function AdminUsersPage({ searchParams }) {
  const { page } = await searchParams;
  const { data, error } = await getUsersData(page);
  return <AdminUsersScreen data={data} error={error} />;
}
