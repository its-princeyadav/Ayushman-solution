import Button from "./Button";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  title,
  description,
  align = "left",
  action,
  titleAs: TitleTag = "h2",
}) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.center : ""}`}>
      <div className={styles.copy}>
        <TitleTag className={styles.title}>{title}</TitleTag>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && (
        <Button
          href={action.href}
          variant={action.variant || "outline"}
          className={styles.action}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
