import Image from "next/image";
import {
  HiOutlineUserGroup,
  HiOutlinePuzzlePiece,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineChartBarSquare,
  HiOutlineCloud,
  HiOutlineBriefcase,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { LuHandshake } from "react-icons/lu";
import styles from "./StatCard.module.css";

// Server Component, so mapping an icon name -> component here (instead of
// importing icon components inside the data file) keeps data/*.js plain,
// serializable content. Heroicons-outline set (not react-icons/fa's solid
// glyphs) to match the thinner, more premium icon treatment already used
// elsewhere in the SAP module (PremiumSplitSection, PremiumEditionSection);
// `handshake` pulls from Lucide instead since Heroicons has no literal
// handshake glyph, and Lucide's line weight already matches Heroicons'.
// Keys are unchanged from the old FA-based map, so every existing
// data/*.js file's `icon: "..."` value keeps working with zero edits.
const ICONS = {
  handshake: LuHandshake,
  certificate: HiOutlineUserGroup,
  puzzle: HiOutlinePuzzlePiece,
  lightbulb: HiOutlineLightBulb,
  rocket: HiOutlineRocketLaunch,
  chart: HiOutlineChartBarSquare,
  cloud: HiOutlineCloud,
  briefcase: HiOutlineBriefcase,
  location: HiOutlineMapPin,
};

// Colorful gradient accent, one per card. Each accent class defines
// --stat-accent/--stat-accent-dark, which the icon gradient, ring, dot and
// bottom divider (default theme only - see StatCard.module.css) all read
// via inheritance instead of repeating per-element color rules. A data
// item can opt into a specific accent with `color: "blue" | "emerald" |
// "purple" | "orange"`; omitting it (every existing data/*.js file today)
// falls back to cycling by card position, so nothing already wired up
// changes.
const ACCENTS_BY_NAME = {
  blue: styles.accentBlue,
  emerald: styles.accentEmerald,
  purple: styles.accentPurple,
  orange: styles.accentOrange,
};
const ACCENTS = Object.values(ACCENTS_BY_NAME);

// Traces the arc as a filled band (outer edge + reversed inner edge,
// closed into one path) rather than a stroked line, since SVG's
// `stroke-width` can't vary along a path - this is the standard technique
// for a true tapered stroke. Sweeps the top semicircle only (angle: pi -> 0,
// so y never exceeds cy), matching the previous CSS clip-path's top-half
// arc. Computed once at module scope (pure numeric/trig, no per-render
// cost) since every card's ring uses the same fixed geometry.
function buildTaperedArcPath(cx, cy, radius, startWidth, endWidth, segments) {
  const outer = [];
  const inner = [];
  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;
    const angle = Math.PI - Math.PI * t;
    const width = startWidth + (endWidth - startWidth) * t;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    outer.push([cx + (radius + width / 2) * cos, cy - (radius + width / 2) * sin]);
    inner.push([cx + (radius - width / 2) * cos, cy - (radius - width / 2) * sin]);
  }
  const outerPath = outer.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
  const innerPath = inner
    .reverse()
    .map(([x, y]) => `L${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
  return `${outerPath} ${innerPath} Z`;
}

// viewBox is 116x116 to match the ring's previous CSS footprint
// (inset: -8px inside the 100px .iconWrap); radius 55.5 keeps the tapered
// band's widest edge (3.5px) comfortably inside that box.
const ICON_RING_PATH = buildTaperedArcPath(58, 58, 55.5, 1, 3.5, 48);

export default function StatCard({ icon, value, label, theme = "dark", index = 0, color }) {
  const Icon = ICONS[icon];
  // Additive: an `icon` that isn't a known key (e.g. a "/assets/..." path) is
  // rendered as an image instead, so pages with their own icon artwork (no
  // matching react-icon) can still use this same card/grid.
  const isImageIcon = !Icon && typeof icon === "string" && icon.startsWith("/");
  const light = theme === "light";
  const accent = ACCENTS_BY_NAME[color] || ACCENTS[index % ACCENTS.length];

  const iconNode = Icon ? (
    <Icon aria-hidden="true" />
  ) : light ? (
    // On the light (white iconCircle) theme, inset the icon instead of
    // filling the circle so the white ring stays visible around it —
    // matching the reference design's two-tone badge look. unoptimized:
    // the Next.js image optimizer rejects SVG input unless
    // dangerouslyAllowSVG is set project-wide, and raster optimization has
    // nothing to offer a vector file anyway.
    <Image src={icon} alt="" width={56} height={56} unoptimized className={styles.iconImageInset} />
  ) : (
    // On the dark theme, the circle's own background already matches the
    // icon's baked-in circle closely enough that a full fill reads as one
    // seamless badge, same as the icon's native artwork intends.
    <Image src={icon} alt="" fill sizes="84px" unoptimized className={styles.iconImage} />
  );

  return (
    <div className={`${styles.card} ${accent} ${light ? styles.light : ""}`}>
      {(Icon || isImageIcon) && (
        <span className={styles.iconWrap}>
          {!light && (
            <svg className={styles.iconRing} viewBox="0 0 116 116" aria-hidden="true">
              <path d={ICON_RING_PATH} />
            </svg>
          )}
          {!light && <span className={styles.iconDot} aria-hidden="true" />}
          <span className={styles.iconCircle}>{iconNode}</span>
        </span>
      )}
      {value && <span className={styles.value}>{value}</span>}
      <span className={styles.label}>{label}</span>
      {!light && <span className={styles.bottomDivider} aria-hidden="true" />}
    </div>
  );
}
