import Container from "./Container";
import Button from "./Button";
import SectionLabel from "../../Common/SectionLabel";
import styles from "./CenteredSection.module.css";

// Wraps `highlight` (if it actually occurs in `title`) in a colored span.
// Purely additive - callers that don't pass `highlight` get the exact same
// plain-string render as before.
function renderTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className={styles.highlight}>{highlight}</span>
      {after}
    </>
  );
}

/**
 * Centered heading + copy + one-or-two CTA buttons, used stand-alone ("Who
 * Needs It", "Enhanced User Adoption") and as the wrapper around a stats
 * grid or icon row ("Empowering Businesses", "Digital Transformation").
 *
 * `eyebrow`/`highlight`/`titleDivider`/`decorative` are optional, additive
 * "premium" trimmings (double-dash label above the title, one highlighted
 * word inside it, a short accent rule under it, faint ambient background
 * ornaments) for callers that want the more elevated treatment - omitting
 * them renders identically to before, so every other usage of this shared
 * component is unaffected.
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
  eyebrow,
  highlight,
  titleDivider = false,
  decorative = false,
}) {
  return (
    <section
      className={`${styles.section} ${theme === "light" ? styles.light : ""} ${compact ? styles.compact : ""} ${
        decorative ? styles.decorative : ""
      }`}
      style={background ? { background } : undefined}
      data-sap-reveal
    >
      {decorative && (
        <>
          <span className={styles.ornamentDots} aria-hidden="true" />
          <span className={styles.ornamentRingLarge} aria-hidden="true" />
          <span className={styles.ornamentRingSmall} aria-hidden="true" />
        </>
      )}

      <Container>
        <div className={styles.copy}>
          {eyebrow && <SectionLabel title={eyebrow} align="center" className={styles.eyebrow} />}
          <h2 className={styles.title}>{renderTitle(title, highlight)}</h2>
          {titleDivider && <span className={styles.titleDivider} aria-hidden="true" />}
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
