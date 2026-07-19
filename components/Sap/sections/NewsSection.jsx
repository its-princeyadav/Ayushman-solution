import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Slider from "../Slider/Slider";
import styles from "./NewsSection.module.css";

export default function NewsSection({ eyebrowTitle, sectionTitle, action, items }) {
  return (
    <section className={styles.section}>
      <Container>
        {eyebrowTitle && (
          <SectionHeading title={eyebrowTitle} align="center" />
        )}

        <SectionHeading title={sectionTitle} action={action} titleAs="h3" />

        <Slider
          items={items}
          cardType="news"
          slidesPerView={{ base: 1, sm: 2, lg: 3 }}
          ariaLabel="Latest news"
        />
      </Container>
    </section>
  );
}
