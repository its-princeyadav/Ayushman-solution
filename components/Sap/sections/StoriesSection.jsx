import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Slider from "../Slider/Slider";
import styles from "./StoriesSection.module.css";

export default function StoriesSection({ title, description, action, items }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} description={description} action={action} />
        <Slider
          items={items}
          cardType="story"
          slidesPerView={{ base: 1, sm: 2, lg: 3 }}
          ariaLabel="Customer success stories"
        />
      </Container>
    </section>
  );
}
