import AdminContactScreen from "../../../../admin/pages/Contact/AdminContactScreen";
import connectDB from "../../../../lib/db";
import { getContactsList } from "../../../../lib/adminLists";

export const metadata = {
  title: "Contact | Ayushman Solutions Admin",
};

async function getContactsData(page) {
  try {
    await connectDB();
    const data = await getContactsList({ page });
    return { data };
  } catch {
    return { error: true };
  }
}

export default async function AdminContactPage({ searchParams }) {
  const { page } = await searchParams;
  const { data, error } = await getContactsData(page);
  return <AdminContactScreen data={data} error={error} />;
}
