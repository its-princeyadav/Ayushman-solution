import styles from "./Button.module.css";

const VARIANTS = {
  primary: styles.primary,
  outline: styles.outline,
  outlineLight: styles.outlineLight,
  text: styles.text,
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  icon: Icon,
}) {
  const classes = `${styles.btn} ${VARIANTS[variant] || VARIANTS.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className={styles.icon} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
