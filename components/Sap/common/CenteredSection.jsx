import Container from "./Container";
import Button from "./Button";
import styles from "./CenteredSection.module.css";

/**
 * Centered heading + copy + one-or-two CTA buttons, used stand-alone ("Who
 * Needs It", "Enhanced User Adoption") and as the wrapper around a stats
 * grid or icon row ("Empowering Businesses", "Digital Transformation").
 */
export default function CenteredSection({
  title,
  description,
  subtitle,
  buttons,
  children,
  background,
  theme = "dark",
  compact = false,
}) {
  return (
    <section
      className={`${styles.section} ${theme === "light" ? styles.light : ""} ${compact ? styles.compact : ""}`}
      style={background ? { background } : undefined}
    >
      <Container>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {children}

        {buttons && buttons.length > 0 && (
          <div className={styles.buttons}>
            {buttons.map((btn) => (
              <Button key={btn.label} href={btn.href} variant={btn.variant || "primary"} className={styles.button}>
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
