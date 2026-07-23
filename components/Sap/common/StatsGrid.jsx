import StatCard from "./StatCard";
import styles from "./StatsGrid.module.css";

export default function StatsGrid({ items, theme }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <StatCard key={item.label} {...item} theme={theme} />
      ))}
    </div>
  );
}
