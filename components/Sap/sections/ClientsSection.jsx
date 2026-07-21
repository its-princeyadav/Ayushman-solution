import Image from "next/image";
import { FaSync, FaUsers, FaCloud, FaChartLine } from "react-icons/fa";
import Container from "../common/Container";
import styles from "./ClientsSection.module.css";

const ICONS = {
  ERP: FaSync,
  CRM: FaUsers,
  Cloud: FaCloud,
  Analytics: FaChartLine,
};

/**
 * "Join our clan..." stat hub + client logo wall. No existing component
 * matches this shape (IndustryOrbit is photo-satellites around a hub, this is
 * icon-badges + a number around a hub, next to a plain logo grid), so it's a
 * new — but intentionally simple — section rather than forcing a fit.
 *
 * TODO: client logos aren't available as image assets yet: rendered as plain
 * text marks (same "no image available" convention as NewsCard/BlogCard's
 * sourceMark) until real logo files are supplied.
 */
export default function ClientsSection({ badges, stat, statLabel, ribbon, heading, clients }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.hubWrap}>
            <div className={styles.hub}>
              <p className={styles.heading}>{heading}</p>
              {ribbon && <span className={styles.ribbon}>{ribbon}</span>}
              <span className={styles.stat}>{stat}</span>
              <p className={styles.statLabel}>{statLabel}</p>
            </div>

            {badges.map((badge) => {
              const Icon = ICONS[badge.label];
              return (
                <span key={badge.label} className={`${styles.badge} ${styles[badge.position]}`}>
                  <span className={styles.badgeIcon}>{Icon && <Icon aria-hidden="true" />}</span>
                  {badge.label}
                </span>
              );
            })}
          </div>

          <div className={styles.logos}>
            {clients.map((client) => {
              const isObject = typeof client === "object" && client !== null;
              const name = isObject ? client.name : client;
              const logo = isObject ? client.logo : undefined;

              return (
                <span key={name} className={styles.logo}>
                  {logo ? (
                    <Image src={logo} alt={name} width={96} height={40} className={styles.logoImage} />
                  ) : (
                    name
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
