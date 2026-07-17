import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FAQAccordion from "../FAQ/FAQAccordion";
import styles from "./FAQSection.module.css";

export default function FAQSection({ title, items }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} align="center" />
        <div className={styles.grid}>
          {items.map((item) => (
            <FAQAccordion key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
