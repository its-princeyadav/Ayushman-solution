import Image from "next/image";
import Link from "next/link";
import styles from "./NewsCard.module.css";

export default function NewsCard({ date, title, href, image, source, background }) {
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.thumb} style={{ background }}>
        {image ? (
          <Image src={image} alt={source || ""} fill sizes="360px" className={styles.image} />
        ) : (
          <span className={styles.sourceMark}>{source}</span>
        )}
      </Link>

      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <Link href={href} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </article>
  );
}
