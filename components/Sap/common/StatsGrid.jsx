import StatCard from "./StatCard";
import styles from "./StatsGrid.module.css";

export default function StatsGrid({ items, theme }) {
  return (
    <div className={`${styles.grid} ${theme === "light" ? styles.light : ""}`}>
      {items.map((item, index) => (
        <StatCard key={item.label} {...item} theme={theme} index={index} />
      ))}
    </div>
  );
}
