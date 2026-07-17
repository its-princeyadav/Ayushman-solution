import Image from "next/image";
import styles from "./BlogCard.module.css";

export default function BlogCard({ date, title, description, image, href }) {
  return (
    <article className={styles.card}>
      <a href={href} className={styles.thumb}>
        <Image src={image} alt="" fill sizes="360px" className={styles.image} />
      </a>

      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>
          <a href={href}>{title}</a>
        </h3>
        <p className={styles.description}>{description}</p>
        <a href={href} className={styles.readMore}>
          Read More
        </a>
      </div>
    </article>
  );
}
