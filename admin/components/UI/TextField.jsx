import styles from "./TextField.module.css";

export default function TextField({ id, label, type = "text", icon: Icon, endAdornment, ...rest }) {
  return (
    <div className={styles.field}>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
      <input id={id} type={type} placeholder=" " className={styles.input} {...rest} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {endAdornment && <div className={styles.end}>{endAdornment}</div>}
    </div>
  );
}
