import StatCard from "./StatCard";
import CheckList from "./CheckList";
import Slider from "../Slider/Slider";
import styles from "./RichContent.module.css";

/**
 * The body content (paragraphs, bullets, checklist, stats, advantages) shared
 * by ImageTextSection's side-by-side layout and HeroBanner's full-bleed
 * layout, so a content-heavy section can be rendered either way without
 * duplicating this JSX in both components.
 */
export default function RichContent({
  description,
  bullets,
  numberedBullets = false,
  checklistTitle,
  checklist,
  stats,
  advantagesTitle,
  advantages,
  theme = "dark",
}) {
  const paragraphs = Array.isArray(description) ? description : [description].filter(Boolean);
  const light = theme === "light";

  return (
    <>
      {paragraphs.map((paragraph) => {
        const isBold = typeof paragraph === "object" && paragraph.bold;
        const text = isBold ? paragraph.text : paragraph;
        return (
          <p
            className={`${styles.description} ${light ? styles.descriptionLight : ""} ${
              isBold ? styles.descriptionBold : ""
            } ${isBold && light ? styles.descriptionBoldLight : ""}`}
            key={text}
          >
            {text}
          </p>
        );
      })}

      {bullets &&
        bullets.length > 0 &&
        (numberedBullets ? (
          <ol className={styles.numberedBullets}>
            {bullets.map((bullet, index) => (
              <li className={`${styles.numberedBullet} ${light ? styles.numberedBulletLight : ""}`} key={bullet}>
                <span className={`${styles.numberedBulletIndex} ${light ? styles.numberedBulletIndexLight : ""}`}>
                  {index + 1}.
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ol>
        ) : (
          <ul className={`${styles.bullets} ${light ? styles.bulletsLight : ""}`}>
            {bullets.map((bullet) => {
              const hasLabel = typeof bullet === "object" && bullet.label;
              return (
                <li key={hasLabel ? bullet.label : bullet}>
                  {hasLabel ? (
                    <>
                      <strong className={`${styles.bulletLabel} ${light ? styles.bulletLabelLight : ""}`}>
                        {bullet.label}:
                      </strong>{" "}
                      {bullet.text}
                    </>
                  ) : (
                    bullet
                  )}
                </li>
              );
            })}
          </ul>
        ))}

      {checklist && checklist.length > 0 && <CheckList title={checklistTitle} items={checklist} theme={theme} />}

      {stats && stats.length > 0 && (
        <div className={styles.stats}>
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      )}

      {advantages && advantages.length > 0 && (
        <div className={styles.advantages}>
          {advantagesTitle && (
            <h3 className={`${styles.advantagesTitle} ${light ? styles.advantagesTitleLight : ""}`}>
              {advantagesTitle}
            </h3>
          )}
          <Slider
            items={advantages}
            cardType="feature"
            cardProps={{ compact: true }}
            slidesPerView={{ base: 1, sm: 2, lg: 2 }}
            showArrows={false}
            ariaLabel="Key advantages"
          />
        </div>
      )}
    </>
  );
}
