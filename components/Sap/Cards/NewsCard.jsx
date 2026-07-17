import Image from "next/image";
import styles from "./NewsCard.module.css";

export default function NewsCard({ date, title, href, image, source, background }) {
  return (
    <article className={styles.card}>
      <a href={href} className={styles.thumb} style={{ background }}>
        {image ? (
          <Image src={image} alt={source || ""} fill sizes="360px" className={styles.image} />
        ) : (
          <span className={styles.sourceMark}>{source}</span>
        )}
      </a>

      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <a href={href}>{title}</a>
        </h3>
        <a href={href} className={styles.readMore}>
          Read More
        </a>
      </div>
    </article>
  );
}
