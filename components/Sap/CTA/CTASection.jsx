import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import styles from "./CTASection.module.css";

export default function CTASection({
  title,
  description,
  button,
  backgroundImage,
  textTheme = "dark",
}) {
  return (
    <section className={styles.section}>
      <Image src={backgroundImage} alt="" fill sizes="100vw" className={styles.image} />

      <Container className={styles.container}>
        <div className={`${styles.content} ${textTheme === "light" ? styles.light : styles.dark}`}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          {button && (
            <Button href={button.href} variant={button.variant || "primary"} className={styles.button}>
              {button.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
