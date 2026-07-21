import Image from "next/image";
import Button from "../common/Button";
import styles from "./ImageOverlayCard.module.css";

// `button` + `forceVisible` + an optional solid `background` (in place of
// `image`) are additive, opt-in extras for cards that need permanently
// visible copy and a real CTA (e.g. the License page's "Other License"
// tile) — every existing caller (plain photo tile, click-through `href`)
// keeps its exact current markup and behavior.
export default function ImageOverlayCard({
  image,
  background,
  label,
  description,
  href = "#",
  compact = false,
  button,
  forceVisible = false,
}) {
  const Wrapper = button ? "div" : "a";

  return (
    <Wrapper
      {...(button ? {} : { href })}
      className={`${styles.card} ${compact ? styles.compact : ""} ${forceVisible ? styles.forceVisible : ""}`}
      style={!image && background ? { background } : undefined}
    >
      {image && <Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" className={styles.image} />}
      {image && <span className={styles.overlay} />}
      <span className={styles.textWrap}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
        {button && (
          <Button href={button.href} variant={button.variant || "primary"} className={styles.button}>
            {button.label}
          </Button>
        )}
      </span>
    </Wrapper>
  );
}
