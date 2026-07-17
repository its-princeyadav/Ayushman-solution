import Image from "next/image";
import styles from "./ImageOverlayCard.module.css";

export default function ImageOverlayCard({ image, label, href = "#" }) {
  return (
    <a href={href} className={styles.card}>
      <Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" className={styles.image} />
      <span className={styles.overlay} />
      <span className={styles.label}>{label}</span>
    </a>
  );
}
