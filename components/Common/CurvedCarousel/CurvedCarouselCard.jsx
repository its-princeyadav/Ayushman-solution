import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CurvedCarousel.module.css";

/**
 * Full slide-object rendering (image, dark gradient scrim, icon, title,
 * description, optional badge, optional CTA). `icon` is expected to be an
 * already-rendered element (e.g. `icon: <FaRocket />` in the caller's
 * data), NOT a bare component reference like Button/PillButton accept -
 * CurvedCarousel is a Client Component, and its typical caller is a Server
 * Component page (the default in this project). React can serialize a
 * rendered element across that Server->Client boundary but not a raw
 * unrendered function/component reference, so `icon: FaRocket` would throw
 * ("Functions cannot be passed directly to Client Components") the moment
 * any Server Component page tries to use this - `icon: <FaRocket />`
 * works because it's already an element by the time it crosses the
 * boundary.
 *
 * Every field except `image`/`title` is optional and simply omits its
 * markup when absent, so a partially-filled slide object (no badge, no
 * icon, no CTA, ...) still renders correctly instead of leaving gaps or
 * crashing.
 *
 * `loadImage` (Phase 5, set by CurvedCarousel per slot) skips the actual
 * <Image> when a slide is mounted only for smooth looping but is well
 * outside the currently visible window - the card still renders (just
 * without an image request), and next/image's own default lazy loading
 * covers everything else.
 *
 * Wrapped in React.memo: CurvedCarousel re-renders every slot's wrapper
 * style on each drag pointermove, but a card's own content props don't
 * change during a drag - memoizing this means that fast-firing update only
 * touches the cheap wrapping div, not each card's image/text/icon output.
 */
function CurvedCarouselCard({
  image,
  title,
  description,
  icon,
  accentColor,
  badge,
  buttonText,
  buttonLink,
  loadImage = true,
  active = false,
}) {
  return (
    <div
      className={`${styles.card} ${active ? styles.cardActive : ""}`}
      style={accentColor ? { "--curved-card-accent": accentColor } : undefined}
    >
      {image && loadImage && (
        <div className={styles.cardImageWrap}>
          <Image
            src={image}
            alt={title || ""}
            fill
            sizes="(max-width: 700px) 60vw, 400px"
            className={styles.cardImage}
          />
        </div>
      )}

      <div className={styles.cardScrim} aria-hidden="true" />

      {badge && <span className={styles.cardBadge}>{badge}</span>}

      <div className={styles.cardContent}>
        {icon && (
          <span className={styles.cardIcon} aria-hidden="true">
            {icon}
          </span>
        )}
        {title && <p className={styles.cardTitle}>{title}</p>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {buttonText && buttonLink && (
          <Link href={buttonLink} className={styles.cardButton}>
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}

export default memo(CurvedCarouselCard);
