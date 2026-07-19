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

export default function StatCard({ icon, value, label }) {
  const Icon = ICONS[icon];
  return (
    <div className={styles.card}>
      {Icon && (
        <span className={styles.iconCircle}>
          <Icon aria-hidden="true" />
        </span>
      )}
      {value && <span className={styles.value}>{value}</span>}
      <span className={styles.label}>{label}</span>
    </div>
  );
}
