import AdminConsultationsScreen from "../../../../admin/pages/Consultations/AdminConsultationsScreen";
import connectDB from "../../../../lib/db";
import { getConsultationsList } from "../../../../lib/adminLists";

export const metadata = {
  title: "Consultations | Ayushman Solutions Admin",
};

async function getConsultationsData(page) {
  try {
    await connectDB();
    const data = await getConsultationsList({ page });
    return { data };
  } catch {
    return { error: true };
  }
}

export default async function AdminConsultationsPage({ searchParams }) {
  const { page } = await searchParams;
  const { data, error } = await getConsultationsData(page);
  return <AdminConsultationsScreen data={data} error={error} />;
}
