import Container from "./Container";
import Button from "./Button";
import SectionLabel from "../../Common/SectionLabel";
import styles from "./ParallaxPromiseSection.module.css";

/**
 * Premium storytelling section: a fixed-attachment background image (same
 * parallax technique as ServiceTabsSection) with a centered frosted-glass
 * content panel scrolling naturally over it. Used by "Enhanced User
 * Adoption", but kept generic/reusable for any future promise/CTA section
 * that wants the same treatment.
 */
export default function ParallaxPromiseSection({
  eyebrow,
  title,
  titleDivider = true,
  description,
  buttons,
  backgroundImage,
  imageAlt = "",
}) {
  const paragraphs = (Array.isArray(description) ? description : [description]).filter(Boolean);

  return (
    <section className={styles.section} data-sap-reveal>
      <div
        className={styles.image}
        style={{ "--promise-bg-image": `url(${backgroundImage})` }}
        role="img"
        aria-label={imageAlt || undefined}
      />
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.panel}>
          {eyebrow && <SectionLabel title={eyebrow} align="center" className={styles.eyebrow} />}
          <h2 className={styles.title}>{title}</h2>
          {titleDivider && <span className={styles.divider} aria-hidden="true" />}

          {paragraphs.map((paragraph) => (
            <p className={styles.description} key={paragraph}>
              {paragraph}
            </p>
          ))}

          {buttons && buttons.length > 0 && (
            <div className={styles.buttons}>
              {buttons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant || "primary"}>
                  {btn.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
