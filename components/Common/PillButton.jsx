import Link from "next/link";
import "./PillButton.css";

/**
 * Reusable pill-shaped CTA button - a fixed icon "track" spanning the full
 * button width sits behind the (always-centered, never-shifting) label;
 * on hover the icon slides from its left-inset resting spot across to a
 * matching right inset via a single `transform: translateX()`, so the
 * whole animation is GPU-composited and needs no measured pixel widths at
 * runtime - the translate distance is expressed as `calc(100% - Npx)`,
 * which resolves against the track's own (=button's) width regardless of
 * how wide any given label makes the button.
 *
 * Renders a next/link <Link> when `to`/`href` is given (mirroring Button/
 * FlipButton's existing convention in this codebase), otherwise a plain
 * <button>. No client-side state needed - stays a Server Component.
 */
export default function PillButton({
  label,
  icon: Icon,
  href,
  to,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  style,
  ariaLabel,
}) {
  const link = to || href;
  const isDisabled = disabled || loading;
  const classes = `pillbtn ${className}`.trim();

  const content = (
    <>
      {Icon && (
        <span className="pillbtn-iconTrack" aria-hidden="true">
          <span className="pillbtn-icon">
            {loading ? <span className="pillbtn-spinner" /> : <Icon aria-hidden="true" />}
          </span>
        </span>
      )}
      <span className="pillbtn-label">{label}</span>
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        className={classes}
        style={style}
        aria-label={ariaLabel}
        aria-disabled={isDisabled || undefined}
        onClick={isDisabled ? (event) => event.preventDefault() : onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
