import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Slider from "../Slider/Slider";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection({ title, description, features }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} description={description} align="center" />
        <Slider
          items={features}
          cardType="feature"
          slidesPerView={{ base: 1, sm: 2, lg: 3 }}
          ariaLabel="Benefits"
        />
      </Container>
    </section>
  );
}
