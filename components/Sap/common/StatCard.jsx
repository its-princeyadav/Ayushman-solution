import Image from "next/image";
import {
  FaHandshake,
  FaCertificate,
  FaPuzzlePiece,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaCloud,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./StatCard.module.css";

// Server Component, so mapping an icon name -> component here (instead of
// importing icon components inside the data file) keeps data/*.js plain,
// serializable content.
const ICONS = {
  handshake: FaHandshake,
  certificate: FaCertificate,
  puzzle: FaPuzzlePiece,
  lightbulb: FaLightbulb,
  rocket: FaRocket,
  chart: FaChartLine,
  cloud: FaCloud,
  briefcase: FaBriefcase,
  location: FaMapMarkerAlt,
};

export default function StatCard({ icon, value, label, theme = "dark" }) {
  const Icon = ICONS[icon];
  // Additive: an `icon` that isn't a known key (e.g. a "/assets/..." path) is
  // rendered as an image instead, so pages with their own icon artwork (no
  // matching react-icon) can still use this same card/grid.
  const isImageIcon = !Icon && typeof icon === "string" && icon.startsWith("/");
  const light = theme === "light";
  return (
    <div className={`${styles.card} ${light ? styles.light : ""}`}>
      {(Icon || isImageIcon) && (
        <span className={styles.iconCircle}>
          {Icon ? (
            <Icon aria-hidden="true" />
          ) : light ? (
            // On the light (white iconCircle) theme, inset the icon instead
            // of filling the circle so the white ring stays visible around
            // it — matching the reference design's two-tone badge look.
            // unoptimized: the Next.js image optimizer rejects SVG input
            // unless dangerouslyAllowSVG is set project-wide, and raster
            // optimization has nothing to offer a vector file anyway.
            <Image src={icon} alt="" width={56} height={56} unoptimized className={styles.iconImageInset} />
          ) : (
            // On the dark theme, the circle's own background already
            // matches the icon's baked-in circle closely enough that a full
            // fill reads as one seamless badge, same as the icon's native
            // artwork intends.
            <Image src={icon} alt="" fill sizes="84px" unoptimized className={styles.iconImage} />
          )}
        </span>
      )}
      {value && <span className={styles.value}>{value}</span>}
      <span className={styles.label}>{label}</span>
    </div>
  );
}
