import Image from "next/image";
import Button from "../common/Button";
import styles from "./StoryCard.module.css";

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

          <span className={styles.personName}>{personName}</span>
          <span className={styles.personRole}>{personRole}</span>

          {personImage && (
            <span className={styles.personImageWrap}>
              <Image src={personImage} alt={personName} fill sizes="110px" className={styles.personImage} />
            </span>
          )}
        </div>
      )}

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

        <div className={styles.actions}>
          {download && (
            <Button href={download.href} variant={download.variant || "outline"} className={styles.download}>
              Download
            </Button>
          )}
          <a href={href} className={styles.readMore}>
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}
