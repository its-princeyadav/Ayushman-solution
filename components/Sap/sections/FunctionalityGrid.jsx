import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ImageOverlayCard from "../Grid/ImageOverlayCard";
import styles from "./FunctionalityGrid.module.css";

export default function FunctionalityGrid({ title, items }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} align="center" />
        <div className={styles.grid}>
          {items.map((item) => (
            <ImageOverlayCard key={item.label} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
