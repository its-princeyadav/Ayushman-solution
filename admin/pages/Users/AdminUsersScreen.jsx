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

export default function AdminUsersScreen({ data, error }) {
  if (error || !data) {
    return (
      <div className={styles.wrap}>
        <div className={styles.errorBanner}>Unable to load users. Please try again.</div>
      </div>
    );
  }

  const { users, pagination } = data;

  return (
    <div className={styles.wrap}>
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>All Users</h2>
          <span className={styles.panelCount}>{pagination.total} total</span>
        </div>

        {users.length === 0 ? (
          <p className={styles.emptyState}>No users found</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Joined</th>
                  <th>Status</th>
                  <th>Last Login</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className={styles.userCell}>
                        <span className={styles.userAvatar}>{initials(user.name)}</span>
                        <div className={styles.userName}>{user.name}</div>
                      </div>
                    </td>
                    <td className={styles.muted}>{user.email}</td>
                    <td className={styles.muted}>{user.phone || "—"}</td>
                    <td className={styles.muted}>{formatDate(user.joinedAt)}</td>
                    <td>
                      <span className={`${styles.status} ${styles.statusActive}`}>Active</span>
                    </td>
                    <td className={styles.muted}>{user.lastLoginAt ? formatDateTime(user.lastLoginAt) : "—"}</td>
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
              href={`/admin/users?page=${pagination.page - 1}`}
              className={`${styles.pageLink} ${pagination.page <= 1 ? styles.pageLinkDisabled : ""}`}
              aria-disabled={pagination.page <= 1}
            >
              Previous
            </Link>
            <Link
              href={`/admin/users?page=${pagination.page + 1}`}
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
