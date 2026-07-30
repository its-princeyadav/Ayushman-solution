import {
  FaStore,
  FaCapsules,
  FaBoxes,
  FaExchangeAlt,
  FaCarSide,
  FaIndustry,
  FaHandshake,
  FaPuzzlePiece,
  FaUserShield,
  FaHeadset,
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaLayerGroup,
  FaChartPie,
  FaShieldAlt,
} from "react-icons/fa";
import Button from "../common/Button";
import styles from "./FeatureCard.module.css";

// Server Component, so mapping an icon name -> component here (instead of
// importing icon components inside the data file) keeps data/*.js plain,
// serializable content that can still cross into the Slider Client Component.
// chart/database/robot/layers/dashboard/shieldCheck were added for the
// Analytics practice's benefit cards (data/analytics.js) — purely additive,
// every existing key above is untouched.
const ICONS = {
  store: FaStore,
  capsules: FaCapsules,
  boxes: FaBoxes,
  exchange: FaExchangeAlt,
  car: FaCarSide,
  industry: FaIndustry,
  handshake: FaHandshake,
  puzzle: FaPuzzlePiece,
  shield: FaUserShield,
  headset: FaHeadset,
  chart: FaChartLine,
  database: FaDatabase,
  robot: FaRobot,
  layers: FaLayerGroup,
  dashboard: FaChartPie,
  shieldCheck: FaShieldAlt,
};

export default function FeatureCard({ icon, title, description, action, compact = false, variant }) {
  const Icon = ICONS[icon];
  return (
    <div className={`${styles.card} ${compact ? styles.compact : ""} ${variant === "pricing" ? styles.pricing : ""}`}>
      {Icon && (
        <span className={styles.icon}>
          <Icon aria-hidden="true" />
        </span>
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {action && (
        <Button href={action.href} variant={action.variant || "outline"} className={styles.action}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
