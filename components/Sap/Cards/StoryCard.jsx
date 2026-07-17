import Image from "next/image";
import styles from "./StoryCard.module.css";

export default function StoryCard({
  bannerColor,
  brandMark = "UNEECOPS",
  partnerLogo,
  eyebrow = "Customer Success Story",
  headline,
  personName,
  personRole,
  personImage,
  title,
  industry,
  revenue,
  employees,
  location,
  href,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.banner} style={{ background: bannerColor }}>
        <div className={styles.topRow}>
          <span className={styles.brandMark}>{brandMark}</span>
          {partnerLogo && (
            <span className={styles.partnerLogo}>
              <Image src={partnerLogo} alt="" width={22} height={22} />
            </span>
          )}
        </div>

        <span className={styles.eyebrow}>{eyebrow}</span>
        <h3 className={styles.headline}>{headline}</h3>

        <span className={styles.personName}>{personName}</span>
        <span className={styles.personRole}>{personRole}</span>

        {personImage && (
          <span className={styles.personImageWrap}>
            <Image src={personImage} alt={personName} fill sizes="110px" className={styles.personImage} />
          </span>
        )}
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>
          <a href={href}>{title}</a>
        </h4>

        <div className={styles.metaGrid}>
          <div>
            <p className={styles.metaLabel}>Industry</p>
            <p className={styles.metaValue}>{industry}</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Revenue</p>
            <p className={styles.metaValue}>{revenue}</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Employees</p>
            <p className={styles.metaValue}>{employees}</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Location</p>
            <p className={styles.metaValue}>{location}</p>
          </div>
        </div>

        <a href={href} className={styles.readMore}>
          Read More
        </a>
      </div>
    </article>
  );
}
