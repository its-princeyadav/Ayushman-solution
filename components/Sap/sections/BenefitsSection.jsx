import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Slider from "../Slider/Slider";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection({ title, description, features, showDots = true, buttons }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} description={description} align="center" />
        <Slider
          items={features}
          cardType="feature"
          slidesPerView={{ base: 1, sm: 2, lg: 3 }}
          showDots={showDots}
          ariaLabel="Benefits"
        />
        {buttons && buttons.length > 0 && (
          <div className={styles.buttons}>
            {buttons.map((btn) => (
              <Button key={btn.label} href={btn.href} variant={btn.variant || "primary"} className={styles.button}>
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
