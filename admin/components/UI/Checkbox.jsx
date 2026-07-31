import styles from "./Checkbox.module.css";

export default function Checkbox({ id, label, ...rest }) {
  return (
    <label htmlFor={id} className={styles.wrap}>
      <input id={id} type="checkbox" className={styles.input} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <svg viewBox="0 0 16 16" className={styles.check}>
          <path d="M3.5 8.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
