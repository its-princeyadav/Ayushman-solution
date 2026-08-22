import Image from "next/image";
import Link from "next/link";
import { HiOutlineBuildingOffice2, HiOutlineBanknotes, HiOutlineUserGroup, HiOutlineMapPin } from "react-icons/hi2";
import Button from "../common/Button";
import styles from "./StoryCard.module.css";

const METRICS = [
  { key: "industry", label: "Industry", icon: HiOutlineBuildingOffice2 },
  { key: "revenue", label: "Revenue", icon: HiOutlineBanknotes },
  { key: "employees", label: "Employees", icon: HiOutlineUserGroup },
  { key: "location", label: "Location", icon: HiOutlineMapPin },
];

export default function StoryCard({
  image,
  imageAlt = "",
  bannerColor,
  brandMark = "AYUSHMAN SOLUTION",
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
  download,
}) {
  const metricValues = { industry, revenue, employees, location };

  return (
    <article className={styles.card}>
      {image ? (
        <div className={styles.banner}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" className={styles.bannerImage} />
        </div>
      ) : (
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

          <div className={styles.personRow}>
            {personImage && (
              <span className={styles.personImageWrap}>
                <Image src={personImage} alt={personName} fill sizes="48px" className={styles.personImage} />
              </span>
            )}
            <span className={styles.personText}>
              <span className={styles.personName}>{personName}</span>
              <span className={styles.personRole}>{personRole}</span>
            </span>
          </div>
        </div>
      )}

      <div className={styles.body}>
        <h4 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h4>

        <span className={styles.divider} aria-hidden="true" />

        <dl className={styles.metaGrid}>
          {METRICS.map(({ key, label, icon: Icon }) => (
            <div className={styles.metaChip} key={key}>
              <span className={styles.metaIcon}>
                <Icon aria-hidden="true" />
              </span>
              <div>
                <dt className={styles.metaLabel}>{label}</dt>
                <dd className={styles.metaValue}>{metricValues[key]}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className={styles.actions}>
          {download && (
            <Button href={download.href} variant={download.variant || "outline"} className={styles.download}>
              Download
            </Button>
          )}
          <Link href={href} className={styles.readMore}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
