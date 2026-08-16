import { LuUsers, LuLogIn } from "react-icons/lu";
import StatCard from "../../components/UI/StatCard";
import styles from "./AdminDashboardScreen.module.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function formatRelativeTime(dateString) {
  const diffMs = Date.now() - new Date(dateString).getTime();
  const diffMin = Math.round(diffMs / 60000);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr} hr ago`;
  const diffDay = Math.round(diffHr / 24);
  if (diffDay === 1) return "Yesterday";
  if (diffDay < 7) return `${diffDay} days ago`;
  return formatDate(dateString);
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

export default function AdminDashboardScreen({ data, error }) {
  if (error || !data) {
    return (
      <div className={styles.wrap}>
        <p className={styles.welcome}>Welcome back, Admin.</p>
        <div className={styles.errorBanner}>Unable to load dashboard data. Please try again.</div>
      </div>
    );
  }

  const { totalUsers, totalLogins, recentUsers, recentMessages, recentActivity } = data;

  const stats = [
    { label: "Total Users", value: totalUsers, icon: LuUsers },
    { label: "Total Logins", value: totalLogins, icon: LuLogIn },
  ];

  return (
    <div className={styles.wrap}>
      <p className={styles.welcome}>Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className={styles.panels}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Recent Activity</h2>
          {recentActivity.length === 0 ? (
            <p className={styles.emptyState}>No recent activity</p>
          ) : (
            <ul className={styles.activityList}>
              {recentActivity.map((item, index) => (
                <li key={`${item.at}-${index}`} className={styles.activityItem}>
                  <span className={styles.activityDot} aria-hidden="true" />
                  <span className={styles.activityText}>{item.text}</span>
                  <span className={styles.activityTime}>{formatRelativeTime(item.at)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Recent Users</h2>
          {recentUsers.length === 0 ? (
            <p className={styles.emptyState}>No recent users</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Joined</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className={styles.userCell}>
                          <span className={styles.userAvatar}>{initials(user.name)}</span>
                          <div>
                            <div className={styles.userName}>{user.name}</div>
                            <div className={styles.userEmail}>{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className={styles.muted}>{formatDate(user.joinedAt)}</td>
                      <td>
                        <span className={`${styles.status} ${styles.statusActive}`}>Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>Recent Contact Messages</h2>
        {recentMessages.length === 0 ? (
          <p className={styles.emptyState}>No contact messages</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Received</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentMessages.map((message) => (
                  <tr key={message.id}>
                    <td>
                      <div className={styles.userCell}>
                        <span className={styles.userAvatar}>{initials(message.name)}</span>
                        <div>
                          <div className={styles.userName}>{message.name}</div>
                          <div className={styles.userEmail}>{message.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.muted}>{message.subject}</td>
                    <td className={styles.muted}>{formatDate(message.createdAt)}</td>
                    <td>
                      <span
                        className={`${styles.status} ${
                          message.status === "new" ? styles.statusPending : styles.statusActive
                        }`}
                      >
                        {message.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
