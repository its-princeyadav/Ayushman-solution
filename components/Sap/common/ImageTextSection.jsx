import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import RichContent from "./RichContent";
import styles from "./ImageTextSection.module.css";

/**
 * The split image+copy layout reused by every "intro" style block across SAP
 * pages (S/4HANA Cloud intro, Public/Private edition, Digital Transformation,
 * ...). Only content, image, and layout direction change per use.
 */
export default function ImageTextSection({
  imagePosition = "left",
  imageStyle = "boxed",
  title,
  titleAccent,
  description,
  bullets,
  numberedBullets = false,
  checklistTitle,
  checklist,
  stats,
  advantagesTitle,
  advantages,
  button,
  buttons,
  image,
  imageAlt = "",
  background,
  theme = "dark",
  verticalAlign = "center",
}) {
  const buttonList = buttons && buttons.length > 0 ? buttons : button ? [button] : [];

  return (
    <section
      className={`${styles.section} ${theme === "light" ? styles.light : ""}`}
      style={background ? { background } : undefined}
    >
      <Container>
        <div
          className={`${styles.grid} ${imagePosition === "right" ? styles.imageRight : ""} ${
            verticalAlign === "start" ? styles.alignStart : ""
          }`}
        >
          <div className={`${styles.imageWrap} ${styles[imageStyle]}`}>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.image} />
          </div>

          <div className={styles.content}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {titleAccent && <p className={styles.titleAccent}>{titleAccent}</p>}

            <RichContent
              description={description}
              bullets={bullets}
              numberedBullets={numberedBullets}
              checklistTitle={checklistTitle}
              checklist={checklist}
              stats={stats}
              advantagesTitle={advantagesTitle}
              advantages={advantages}
              theme={theme}
            />

            {buttonList.length > 0 && (
              <div className={styles.buttons}>
                {buttonList.map((btn) => (
                  <Button key={btn.label} href={btn.href} variant={btn.variant || "primary"} className={styles.button}>
                    {btn.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
