import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import styles from "./HeroBanner.module.css";

/**
 * Full-bleed hero used at the top of every SAP page. Only the image, copy,
 * CTA, secondary overlay heading, and step markers change between pages.
 */
export default function HeroBanner({
  backgroundImage,
  title,
  description,
  button,
  overlayHeading,
  steps,
  activeStep = 0,
  align = "left",
}) {
  return (
    <section className={`${styles.hero} ${align === "right" ? styles.alignRight : ""}`}>
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.scrim} />

      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {button && (
            <Button href={button.href} variant="primary" className={styles.button}>
              {button.label}
            </Button>
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
