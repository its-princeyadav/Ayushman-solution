import Link from "next/link";
import styles from "../../styles/adminTable.module.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function formatDateTime(dateString) {
  return new Date(dateString).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AdminConsultationsScreen({ data, error }) {
  if (error || !data) {
    return (
      <div className={styles.wrap}>
        <div className={styles.errorBanner}>Unable to load consultation bookings. Please try again.</div>
      </div>
    );
  }

  const { consultations, pagination } = data;

  return (
    <div className={styles.wrap}>
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Consultation Bookings</h2>
          <span className={styles.panelCount}>{pagination.total} total</span>
        </div>

        {consultations.length === 0 ? (
          <p className={styles.emptyState}>No consultation bookings found</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>State</th>
                  <th>Solution</th>
                  <th>Turnover</th>
                  <th>Consultation Date</th>
                  <th>Consultation Time</th>
                  <th>Booked At</th>
                </tr>
              </thead>
              <tbody>
                {consultations.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className={styles.userCell}>
                        <span className={styles.userAvatar}>{initials(booking.name)}</span>
                        <div className={styles.userName}>{booking.name}</div>
                      </div>
                    </td>
                    <td className={styles.muted}>{booking.email}</td>
                    <td className={styles.muted}>{booking.phone}</td>
                    <td className={styles.muted}>{booking.company}</td>
                    <td className={styles.muted}>{booking.state}</td>
                    <td className={styles.muted}>{booking.solution}</td>
                    <td className={styles.muted}>{booking.turnover}</td>
                    <td className={styles.muted}>{formatDate(booking.selectedDate)}</td>
                    <td className={styles.muted}>{booking.selectedTime}</td>
                    <td className={styles.muted}>{formatDateTime(booking.bookedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {pagination.totalPages > 1 && (
          <div className={styles.pagination}>
            <span className={styles.pageInfo}>
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <Link
              href={`/admin/consultations?page=${pagination.page - 1}`}
              className={`${styles.pageLink} ${pagination.page <= 1 ? styles.pageLinkDisabled : ""}`}
              aria-disabled={pagination.page <= 1}
            >
              Previous
            </Link>
            <Link
              href={`/admin/consultations?page=${pagination.page + 1}`}
              className={`${styles.pageLink} ${
                pagination.page >= pagination.totalPages ? styles.pageLinkDisabled : ""
              }`}
              aria-disabled={pagination.page >= pagination.totalPages}
            >
              Next
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
