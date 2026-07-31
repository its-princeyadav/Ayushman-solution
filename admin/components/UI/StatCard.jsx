import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";
import styles from "./StatCard.module.css";

export default function StatCard({ label, value, trend, trendDirection = "up", icon: Icon }) {
  const TrendIcon = trendDirection === "up" ? LuTrendingUp : LuTrendingDown;

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.label}>{label}</span>
        {Icon && (
          <span className={styles.iconWrap}>
            <Icon aria-hidden="true" />
          </span>
        )}
      </div>
      <div className={styles.value}>{value}</div>
      {trend && (
        <div className={`${styles.trend} ${trendDirection === "up" ? styles.up : styles.down}`}>
          <TrendIcon aria-hidden="true" />
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
}
