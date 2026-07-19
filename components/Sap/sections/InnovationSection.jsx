import Container from "../common/Container";
import Button from "../common/Button";
import styles from "./InnovationSection.module.css";

/**
 * Two-column pricing/CTA banner ("Business Innovation is Necessary for
 * Survival"). Distinct enough from CTASection (single centered CTA over a
 * background photo) to warrant its own component rather than overloading
 * that one with a second, unrelated layout via props.
 */
export default function InnovationSection({ title, columns }) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.columns}>
          {columns.map((column) => (
            <div className={styles.column} key={column.heading}>
              <h3 className={styles.columnHeading}>{column.heading}</h3>
              <ul className={styles.bullets}>
                {column.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {column.button && (
                <Button href={column.button.href} variant="outlineLight" className={styles.button}>
                  {column.button.label}
                </Button>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
