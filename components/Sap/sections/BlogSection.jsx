import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Slider from "../Slider/Slider";
import styles from "./BlogSection.module.css";

export default function BlogSection({ title, action, items }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} action={action} />
        <Slider
          items={items}
          cardType="blog"
          slidesPerView={{ base: 1, sm: 2, lg: 3 }}
          ariaLabel="Blog posts"
        />
      </Container>
    </section>
  );
}
