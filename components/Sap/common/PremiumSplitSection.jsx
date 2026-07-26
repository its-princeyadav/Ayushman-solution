import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineCloud, HiOutlineShieldCheck, HiOutlineChartBar } from "react-icons/hi2";
import Container from "./Container";
import Button from "./Button";
import RichContent from "./RichContent";
import styles from "./PremiumSplitSection.module.css";

// Server Component, so mapping icon name -> component here (instead of
// importing icon components inside the data file) keeps data/*.js plain,
// serializable content - same convention already used by FeatureCard/StatCard.
// Thin Heroicons-outline set (not react-icons/fa's solid glyphs) to match
// this section's lighter, premium visual weight.
const ICONS = {
  cloud: HiOutlineCloud,
  shield: HiOutlineShieldCheck,
  chart: HiOutlineChartBar,
};

/**
 * Premium 50/50 split "intro" section: eyebrow badge, large Teko heading with
 * an inline highlighted accent, body copy, one CTA - paired with a floating
 * image card and a glass feature-strip overlapping its bottom edge. Built as
 * a generic, prop-driven alternative to ImageTextSection for pages that want
 * this more elevated treatment; content, image and feature count all vary
 * per caller, nothing here is hardcoded.
 */
export default function PremiumSplitSection({
  eyebrow,
  title,
  titleAccent,
  highlight,
  description,
  button,
  image,
  imageAlt = "",
  features,
  imagePosition = "right",
}) {
  return (
    <section className={styles.section} data-sap-reveal>
      <span className={styles.dotGrid} aria-hidden="true" />
      <span className={styles.accentBlock} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={`${styles.grid} ${imagePosition === "left" ? styles.imageLeft : ""}`}>
          <div className={styles.content}>
            {eyebrow && (
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>{eyebrow}</span>
              </div>
            )}

            <h2 className={styles.title}>
              {title}
              {(titleAccent || highlight) && (
                <>
                  <br />
                  {titleAccent}
                  {titleAccent && highlight ? " " : ""}
                  {highlight && <span className={styles.highlight}>{highlight}</span>}
                </>
              )}
            </h2>

            <span className={styles.accentDots} aria-hidden="true">
              {Array.from({ length: 10 }).map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={i} />
              ))}
            </span>

            <div className={styles.body}>
              <RichContent description={description} />
            </div>

            {button && (
              <Button
                href={button.href}
                variant={button.variant || "primary"}
                icon={FaArrowRight}
                className={styles.button}
              >
                {button.label}
              </Button>
            )}
          </div>

          <div className={styles.imageSide}>
            <div className={styles.monitor}>
              <span className={styles.monitorCamera} aria-hidden="true" />
              <div className={styles.imageCard}>
                {image && (
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.image}
                  />
                )}
              </div>
              <span className={styles.monitorStand} aria-hidden="true" />
              <span className={styles.monitorBase} aria-hidden="true" />
            </div>

            {features && features.length > 0 && (
              <div className={styles.featureCardClip} data-sap-reveal>
                <div className={styles.featureCard}>
                  {features.map((feature) => {
                    const Icon = ICONS[feature.icon];
                    return (
                      <div className={styles.feature} key={feature.title}>
                        {Icon && (
                          <span className={styles.featureIcon}>
                            <Icon aria-hidden="true" />
                          </span>
                        )}
                        <div>
                          <p className={styles.featureTitle}>{feature.title}</p>
                          <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
