import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import styles from "./BlogCard.module.css";

export default function BlogCard({ date, title, description, image, href, source, background, badge }) {
  return (
    <article className={styles.card}>
      <Link href={href} className={`${styles.thumb} ${!image ? styles.thumbMark : ""}`} style={!image ? { background } : undefined}>
        {image ? (
          <Image src={image} alt="" fill sizes="360px" className={styles.image} />
        ) : (
          <span className={styles.sourceMark}>{source}</span>
        )}

        {/* Gradient scrim + date/title overlay, so the image itself carries
            the card's identity instead of sitting above a separate text
            block. */}
        <div className={styles.scrim} aria-hidden="true" />
        {badge && image && <Image src={badge} alt="" width={110} height={26} className={styles.badge} />}

        <div className={styles.overlay}>
          <span className={styles.date}>{date}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>

      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
        <Link href={href} className={styles.readMore}>
          Read More
          <HiOutlineArrowRight aria-hidden="true" className={styles.readMoreIcon} />
        </Link>
      </div>
    </article>
  );
}
