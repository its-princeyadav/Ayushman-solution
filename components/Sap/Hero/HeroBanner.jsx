import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import RichContent from "../common/RichContent";
import styles from "./HeroBanner.module.css";

/**
 * Full-bleed hero used at the top of every SAP page. Only the image, copy,
 * CTA, secondary overlay heading, and step markers change between pages.
 * Also reused (via full-bleed `bodyStyle`) for content-heavy full-bleed
 * sections further down a page: `bullets`/`checklist`/`stats`/`advantages`
 * render through the same RichContent used by ImageTextSection, and
 * `buttons` supports more than one CTA, both purely additive so existing
 * simple-hero callers (title + description + one button) are unaffected.
 */
export default function HeroBanner({
  backgroundImage,
  title,
  description,
  bullets,
  numberedBullets = false,
  checklistTitle,
  checklist,
  stats,
  advantagesTitle,
  advantages,
  button,
  buttons,
  overlayHeading,
  steps,
  activeStep = 0,
  align = "left",
  imagePosition = "center",
  textTheme = "light",
}) {
  const buttonList = buttons && buttons.length > 0 ? buttons : button ? [button] : [];

  return (
    <section
      className={`${styles.hero} ${align === "right" ? styles.alignRight : ""} ${
        textTheme === "dark" ? styles.dark : ""
      }`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className={styles.scrim} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}

          <RichContent
            bullets={bullets}
            numberedBullets={numberedBullets}
            checklistTitle={checklistTitle}
            checklist={checklist}
            stats={stats}
            advantagesTitle={advantagesTitle}
            advantages={advantages}
            theme={textTheme}
          />

          {buttonList.length > 0 && (
            <div className={styles.buttons}>
              {buttonList.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant || "primary"} className={styles.button}>
                  {btn.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {overlayHeading && (
          <p className={styles.overlayHeading}>{overlayHeading}</p>
        )}
      </Container>

      {steps && steps.length > 0 && (
        <ol className={styles.steps} aria-label="Slide progress">
          {steps.map((step, index) => (
            <li
              key={step.label || index}
              className={`${styles.step} ${index === activeStep ? styles.stepActive : ""}`}
            >
              <span className={styles.stepDot}>{index + 1}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
