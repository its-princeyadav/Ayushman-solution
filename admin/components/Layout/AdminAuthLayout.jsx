import styles from "./AdminAuthLayout.module.css";

export default function AdminAuthLayout({ children }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeOne}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeTwo}`} aria-hidden="true" />
      <div className={styles.stage}>{children}</div>
    </div>
  );
}
