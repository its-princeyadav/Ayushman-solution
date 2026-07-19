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
} from "react-icons/fa";
import Button from "../common/Button";
import styles from "./FeatureCard.module.css";

// Server Component, so mapping an icon name -> component here (instead of
// importing icon components inside the data file) keeps data/*.js plain,
// serializable content that can still cross into the Slider Client Component.
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
};

export default function FeatureCard({ icon, title, description, action, compact = false }) {
  const Icon = ICONS[icon];
  return (
    <div className={`${styles.card} ${compact ? styles.compact : ""}`}>
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
