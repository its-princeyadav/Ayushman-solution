import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ImageOverlayCard from "../Grid/ImageOverlayCard";
import styles from "./FunctionalityGrid.module.css";

export default function FunctionalityGrid({ title, description, items, compact = false }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} description={description} align="center" />
        <div className={`${styles.grid} ${compact ? styles.compactGrid : ""}`}>
          {items.map((item) => (
            <ImageOverlayCard key={item.label} {...item} compact={compact} />
          ))}
        </div>
      </Container>
    </section>
  );
}
