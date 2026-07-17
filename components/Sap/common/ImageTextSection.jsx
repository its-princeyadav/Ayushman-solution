import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
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
  button,
  image,
  imageAlt = "",
  background,
}) {
  const paragraphs = Array.isArray(description) ? description : [description].filter(Boolean);

  return (
    <section className={styles.section} style={background ? { background } : undefined}>
      <Container>
        <div className={`${styles.grid} ${imagePosition === "right" ? styles.imageRight : ""}`}>
          <div className={`${styles.imageWrap} ${styles[imageStyle]}`}>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.image} />
          </div>

          <div className={styles.content}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {titleAccent && <p className={styles.titleAccent}>{titleAccent}</p>}
            {paragraphs.map((paragraph) => (
              <p className={styles.description} key={paragraph}>
                {paragraph}
              </p>
            ))}
            {bullets && bullets.length > 0 && (
              <ul className={styles.bullets}>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {button && (
              <Button href={button.href} variant={button.variant || "primary"} className={styles.button}>
                {button.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
