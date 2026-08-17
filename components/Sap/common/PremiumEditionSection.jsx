import {
  HiOutlineArrowPath,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineBanknotes,
  HiOutlinePresentationChartLine,
  HiOutlineTruck,
  HiOutlineArchiveBox,
  HiOutlineChartBarSquare,
  HiOutlineUserGroup,
  HiOutlineLockClosed,
  HiOutlineChartBar,
  HiOutlineCircleStack,
  HiOutlineArrowsRightLeft,
  HiOutlineCloudArrowUp,
} from "react-icons/hi2";
import Container from "./Container";
import HeroUnderHeading from "../../Common/HeroUnderHeading";
import FlipButton from "../../Common/FlipButton";
import styles from "./PremiumEditionSection.module.css";

// Same icon-per-index convention already used for PremiumSplitSection's
// description paragraphs - bullets are plain content strings (no icon
// field) so the mapping lives here, not in data/*.js.
const BULLET_ICONS = [HiOutlineArrowPath, HiOutlineSparkles, HiOutlineShieldCheck];

// icon name -> component, same "keep data/*.js plain" convention as
// PremiumSplitSection's own ICONS map.
const FEATURE_ICONS = {
  finance: HiOutlineBanknotes,
  sales: HiOutlinePresentationChartLine,
  procurement: HiOutlineTruck,
  inventory: HiOutlineArchiveBox,
  analytics: HiOutlineChartBarSquare,
  security: HiOutlineShieldCheck,
  tenant: HiOutlineUserGroup,
  access: HiOutlineLockClosed,
  monitoring: HiOutlineChartBar,
  data: HiOutlineCircleStack,
  integration: HiOutlineArrowsRightLeft,
  recovery: HiOutlineCloudArrowUp,
};

/**
 * Premium enterprise-dashboard-style alternative to ImageTextSection, for
 * pages that want a floating rounded card (content panel + icon-card
 * feature grid) instead of a plain side-by-side image split. Same content
 * contract as ImageTextSection for title/titleAccent/description/bullets/
 * button - titleAccent renders as HeroUnderHeading's yellow highlight
 * rather than a second black line, since that's the one visual difference
 * the two treatments need. `features` replaces `image`/`imageAlt`.
 * `backgroundVideo` (an mp4 path) is optional - the dark content panel's
 * background video/overlay only render when it's given, so callers that
 * don't want one just omit the prop.
 */
export default function PremiumEditionSection({
  imagePosition = "left",
  title,
  titleAccent,
  description,
  bullets,
  button,
  features,
  backgroundVideo,
}) {
  return (
    <section className={styles.section} data-sap-reveal>
      <Container>
        <div className={styles.card}>
          <div className={`${styles.grid} ${imagePosition === "right" ? styles.imageRight : ""}`}>
            <div className={styles.content}>
              {backgroundVideo && (
                <>
                  <video
                    className={styles.bgVideo}
                    src={backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                  />
                  <div className={styles.bgOverlay} aria-hidden="true" />
                </>
              )}

              <HeroUnderHeading
                title={title}
                highlight={titleAccent}
                theme="dark"
                className={styles.heading}
              />

              {description && <p className={styles.description}>{description}</p>}

              {bullets && bullets.length > 0 && (
                <div className={styles.bulletRow}>
                  {bullets.map((bullet, index) => {
                    const Icon = BULLET_ICONS[index % BULLET_ICONS.length];
                    return (
                      <div className={styles.bulletChip} key={bullet}>
                        <span className={styles.bulletIcon}>
                          <Icon aria-hidden="true" />
                        </span>
                        <span>{bullet}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {button && (
                <FlipButton
                  href={button.href}
                  frontText={button.label}
                  backText={button.label}
                  className={styles.button}
                  style={{ "--flipbtn-bg": "linear-gradient(135deg, #febe0e 0%, #f0ea69 100%)" }}
                />
              )}
            </div>

            {features && features.length > 0 && (
              <div className={styles.visual}>
                <div className={styles.featureGrid}>
                  {features.map((feature) => {
                    const Icon = FEATURE_ICONS[feature.icon];
                    return (
                      <div className={styles.featureCard} key={feature.title}>
                        {Icon && (
                          <span className={styles.featureCardIcon}>
                            <Icon aria-hidden="true" />
                          </span>
                        )}
                        <p className={styles.featureCardTitle}>{feature.title}</p>
                        <span className={styles.featureCardRule} aria-hidden="true" />
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
