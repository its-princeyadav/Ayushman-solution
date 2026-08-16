import Link from "next/link";
import styles from "../../styles/adminTable.module.css";

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

export default function AdminLoginUsersScreen({ data, error }) {
  if (error || !data) {
    return (
      <div className={styles.wrap}>
        <div className={styles.errorBanner}>Unable to load login records. Please try again.</div>
      </div>
    );
  }

  const { logins, pagination } = data;

  return (
    <div className={styles.wrap}>
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Login Activity</h2>
          <span className={styles.panelCount}>{pagination.total} total</span>
        </div>

        {logins.length === 0 ? (
          <p className={styles.emptyState}>No login records found</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Login Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {logins.map((entry) => (
                  <tr key={entry.id}>
                    <td>
                      <div className={styles.userCell}>
                        <span className={styles.userAvatar}>{initials(entry.name)}</span>
                        <div className={styles.userName}>{entry.name}</div>
                      </div>
                    </td>
                    <td className={styles.muted}>{entry.email}</td>
                    <td className={styles.muted}>{formatDateTime(entry.loginAt)}</td>
                    <td>
                      <span className={`${styles.status} ${styles.statusActive}`}>Success</span>
                    </td>
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
              href={`/admin/login-users?page=${pagination.page - 1}`}
              className={`${styles.pageLink} ${pagination.page <= 1 ? styles.pageLinkDisabled : ""}`}
              aria-disabled={pagination.page <= 1}
            >
              Previous
            </Link>
            <Link
              href={`/admin/login-users?page=${pagination.page + 1}`}
              className={`${styles.pageLink} ${pagination.page >= pagination.totalPages ? styles.pageLinkDisabled : ""}`}
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
