import styles from "./Button.module.css";

export default function Button({ children, type = "button", variant = "primary", ...rest }) {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
