import Container from "../common/Container";
import FAQAccordion from "../FAQ/FAQAccordion";
import styles from "./FAQSection.module.css";

export default function FAQSection({ title, description, items }) {
  return (
    <section className={styles.section} data-sap-reveal>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        <div className={styles.list}>
          {items.map((item) => (
            <FAQAccordion key={item.question} {...item} />
          ))}
        </div>

        <p className={styles.closing}>Still have questions?</p>
      </Container>
    </section>
  );
}
