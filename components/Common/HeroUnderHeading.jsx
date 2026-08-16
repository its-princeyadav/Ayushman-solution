import SectionLabel from "./SectionLabel";
import "./HeroUnderHeading.css";

/**
 * Standard "hero heading" pattern shared across every hero-style section on
 * the site (SAP pages, homepage, and future sections) - the same double-dash
 * eyebrow used on the homepage (via the shared SectionLabel), a compact
 * enterprise-weight heading that flows title/titleAccent/highlight inline
 * (wrapping naturally, not forced onto separate lines), and an optional
 * short subtitle. Content, highlighting and copy all vary per caller,
 * nothing here is hardcoded to any one page.
 */
export default function HeroUnderHeading({
  eyebrow,
  title,
  titleAccent,
  highlight,
  description,
  alignment = "left",
  maxWidth,
  theme = "light",
  className = "",
}) {
  return (
    <div
      className={`as-huh as-huh--${alignment} as-huh--${theme} ${className}`.trim()}
      style={maxWidth ? { maxWidth } : undefined}
    >
      {eyebrow && (
        <SectionLabel title={eyebrow} align={alignment} className="as-huh-eyebrow" />
      )}

      {title && (
        <h2 className="as-huh-title">
          {title}
          {titleAccent && ` ${titleAccent}`}
          {highlight && " "}
          {highlight && <span className="as-huh-highlight">{highlight}</span>}
        </h2>
      )}

      {description && <p className="as-huh-description">{description}</p>}
    </div>
  );
}
