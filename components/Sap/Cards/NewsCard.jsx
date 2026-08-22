import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import styles from "./NewsCard.module.css";

/**
 * Renders as a large "featured" article tile (bigger image, badge, bigger
 * headline) or a compact horizontal list-row (thumb + text side by side),
 * driven entirely by the `featured` flag - same data shape either way.
 */
export default function NewsCard({ date, title, href, image, source, background, featured = false }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : styles.compact}`}>
      <Link href={href} className={styles.thumb} style={{ background }}>
        {image ? (
          <Image
            src={image}
            alt={source || ""}
            fill
            sizes={featured ? "(max-width: 700px) 100vw, 600px" : "110px"}
            className={styles.image}
          />
        ) : (
          <span className={styles.sourceMark}>{source}</span>
        )}
        <span className={styles.thumbShade} aria-hidden="true" />
        {source && <span className={styles.sourceBadge}>{source}</span>}
        {featured && <span className={styles.featuredBadge}>Featured</span>}
      </Link>

      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <Link href={href} className={styles.readMore}>
          Read More
          <HiOutlineArrowRight aria-hidden="true" className={styles.readMoreIcon} />
        </Link>
      </div>
    </article>
  );
}
