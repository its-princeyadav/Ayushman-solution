import { LuUsers, LuFileText, LuWrench, LuMessageSquare } from "react-icons/lu";
import StatCard from "../../components/UI/StatCard";
import styles from "./AdminDashboardScreen.module.css";

const STATS = [
  { label: "Total Users", value: "1,284", trend: "+8.2%", trendDirection: "up", icon: LuUsers },
  { label: "Blog Posts", value: "42", trend: "+3.1%", trendDirection: "up", icon: LuFileText },
  { label: "Active Services", value: "16", trend: "0%", trendDirection: "up", icon: LuWrench },
  { label: "New Messages", value: "9", trend: "-2.4%", trendDirection: "down", icon: LuMessageSquare },
];

const RECENT_ACTIVITY = [
  { text: "New user Priya Sharma registered", time: "10 min ago" },
  { text: "Blog post \"SAP S/4HANA Migration Guide\" published", time: "1 hr ago" },
  { text: "Service \"Cloud Migration\" updated", time: "3 hr ago" },
  { text: "New contact message from Rohan Mehta", time: "5 hr ago" },
  { text: "User Ankit Verma updated their profile", time: "Yesterday" },
];

const RECENT_USERS = [
  { name: "Priya Sharma", email: "priya.sharma@example.com", joined: "29 Jul 2026", status: "Active" },
  { name: "Rohan Mehta", email: "rohan.mehta@example.com", joined: "27 Jul 2026", status: "Active" },
  { name: "Ankit Verma", email: "ankit.verma@example.com", joined: "24 Jul 2026", status: "Pending" },
  { name: "Neha Kapoor", email: "neha.kapoor@example.com", joined: "21 Jul 2026", status: "Active" },
];

export default function AdminDashboardScreen() {
  return (
    <div className={styles.wrap}>
      <p className={styles.welcome}>Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>

      <div className={styles.statsGrid}>
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className={styles.panels}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Recent Activity</h2>
          <ul className={styles.activityList}>
            {RECENT_ACTIVITY.map((item) => (
              <li key={item.text} className={styles.activityItem}>
                <span className={styles.activityDot} aria-hidden="true" />
                <span className={styles.activityText}>{item.text}</span>
                <span className={styles.activityTime}>{item.time}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Recent Users</h2>
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
                {RECENT_USERS.map((user) => (
                  <tr key={user.email}>
                    <td>
                      <div className={styles.userCell}>
                        <span className={styles.userAvatar}>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                        <div>
                          <div className={styles.userName}>{user.name}</div>
                          <div className={styles.userEmail}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.muted}>{user.joined}</td>
                    <td>
                      <span className={`${styles.status} ${user.status === "Active" ? styles.statusActive : styles.statusPending}`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
