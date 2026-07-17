import styles from "./FeatureCard.module.css";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.card}>
      {Icon && (
        <span className={styles.icon}>
          <Icon aria-hidden="true" />
        </span>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
