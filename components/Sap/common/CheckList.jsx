import { FaCheckCircle } from "react-icons/fa";
import styles from "./CheckList.module.css";

/**
 * Checkmark bullet list. Distinct visual from ImageTextSection's plain
 * <ul> bullets, so it's a small standalone piece reused both inside
 * ImageTextSection (as a `checklist`) and as CenteredSection's `children`,
 * rather than duplicating the markup in either place.
 */
export default function CheckList({ title, items, theme = "dark" }) {
  return (
    <div className={styles.wrap}>
      {title && <h3 className={`${styles.title} ${theme === "light" ? styles.light : ""}`}>{title}</h3>}
      <ul className={`${styles.list} ${theme === "light" ? styles.light : ""}`}>
        {items.map((item) => (
          <li className={styles.item} key={item}>
            <FaCheckCircle className={styles.icon} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
