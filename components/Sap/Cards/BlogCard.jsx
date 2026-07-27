import Image from "next/image";
import Link from "next/link";
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
        {badge && image && (
          <Image src={badge} alt="" width={110} height={26} className={styles.badge} />
        )}
      </Link>

      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={styles.description}>{description}</p>
        <Link href={href} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </article>
  );
}
