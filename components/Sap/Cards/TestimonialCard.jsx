import Image from "next/image";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import styles from "./TestimonialCard.module.css";

/**
 * Renders either a video-testimonial tile (thumbnail + play button) or a
 * text-testimonial tile (quote), driven entirely by `variant` + props so the
 * same slider and the same data shape can serve both tabs in TestimonialsSection.
 */
export default function TestimonialCard({
  variant = "video",
  thumbnail,
  videoUrl,
  personImage,
  name,
  designation,
  company,
  quote,
  badge,
  background,
  brandMark,
  partnerLogo,
  eyebrow,
  headline,
}) {
  if (variant === "text") {
    return (
      <div className={styles.textCard}>
        <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
        <p className={styles.quote}>{quote}</p>
        <div className={styles.person}>
          {personImage && (
            <Image
              src={personImage}
              alt={name}
              width={48}
              height={48}
              className={styles.personImage}
            />
          )}
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.designation}>
              {designation}
              {designation && company ? ", " : ""}
              {company}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Wrapper = videoUrl ? "a" : "div";
  const wrapperProps = videoUrl
    ? { href: videoUrl, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper className={styles.videoCard} style={{ background }} {...wrapperProps}>
      {thumbnail && (
        <Image src={thumbnail} alt={name} fill sizes="(max-width: 700px) 100vw, 50vw" className={styles.thumbnail} />
      )}
      <div className={styles.scrim} />
      {badge && (
        <Image src={badge} alt="" width={110} height={28} className={styles.badge} />
      )}

      {(brandMark || partnerLogo) && (
        <div className={styles.topRow}>
          {brandMark && <span className={styles.brandMark}>{brandMark}</span>}
          {partnerLogo && (
            <span className={styles.partnerLogo}>
              <Image src={partnerLogo} alt="" width={22} height={22} />
            </span>
          )}
        </div>
      )}

      {headline && (
        <div className={styles.headlineBlock}>
          <FaQuoteLeft className={styles.headlineQuoteIcon} aria-hidden="true" />
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <p className={styles.headline}>{headline}</p>
        </div>
      )}

      <span className={styles.playButton} aria-hidden="true">
        <FaPlay />
      </span>
      <div className={styles.caption}>
        <div className={styles.name}>{name}</div>
        <div className={styles.designation}>
          {designation}
          {company ? `, ${company}` : ""}
        </div>
      </div>
    </Wrapper>
  );
}
