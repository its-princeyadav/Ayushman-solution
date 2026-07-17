import Container from "./Container";
import Button from "./Button";
import styles from "./CenteredSection.module.css";

/**
 * Centered heading + copy + one-or-two CTA buttons, used stand-alone ("Who
 * Needs It", "Enhanced User Adoption") and as the wrapper around a stats
 * grid or icon row ("Empowering Businesses", "Digital Transformation").
 */
export default function CenteredSection({ title, description, buttons, children, background }) {
  return (
    <section className={styles.section} style={background ? { background } : undefined}>
      <Container>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

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
