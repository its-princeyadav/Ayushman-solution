import styles from "./Button.module.css";

const VARIANTS = {
  primary: styles.primary,
  outline: styles.outline,
  outlineLight: styles.outlineLight,
  dark: styles.dark,
  text: styles.text,
  // Page-scoped variants for the SAP Business One Migration page only —
  // no other page's data references these, so they can't change how any
  // other page looks.
  migrationPrimary: styles.migrationPrimary,
  migrationOutline: styles.migrationOutline,
  // Page-scoped variant for the SAP Business One License page only.
  licensePrimary: styles.licensePrimary,
  // Page-scoped variant for the SAP Consulting page only.
  consultingPrimary: styles.consultingPrimary,
  // Page-scoped variant for the SAP Business One Add-ons page only.
  addonsPrimary: styles.addonsPrimary,
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
