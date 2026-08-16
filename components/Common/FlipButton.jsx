import Link from "next/link";
import "./FlipButton.css";

/**
 * Reusable 3D "flip" CTA button - a front face (always the accessible
 * label) that rotates away on hover/focus to reveal a back face rotating in
 * from behind, built from real DOM nodes (not the ::before/::after +
 * content: attr() trick from the original demo) so both faces can hold
 * arbitrary text/markup and the back face can be hidden from assistive tech
 * without duplicating the announced label. Renders a next/link <Link> when
 * `to`/`href` is given, otherwise a plain <button>.
 */
export default function FlipButton({
  frontText,
  backText,
  onClick,
  to,
  href,
  className = "",
  style,
  type = "button",
  disabled = false,
}) {
  const link = to || href;
  const classes = `flipbtn ${className}`.trim();

  const inner = (
    <span className="flipbtn-flip">
      <span className="flipbtn-face flipbtn-face-front">{frontText}</span>
      {backText && (
        <span className="flipbtn-face flipbtn-face-back" aria-hidden="true">
          {backText}
        </span>
      )}
    </span>
  );

  if (link) {
    return (
      <Link href={link} className={classes} style={style} onClick={onClick} aria-disabled={disabled || undefined}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} style={style} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
