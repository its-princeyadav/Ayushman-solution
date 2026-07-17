import Image from "next/image";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import styles from "./IndustryOrbit.module.css";

/**
 * Bespoke circular layout: one hub circle, N satellite circles positioned by
 * percentage coordinates from data, connected with dashed SVG lines drawn in
 * the same 0-100 coordinate space so they always line up with the circles
 * regardless of viewport width.
 */
export default function IndustryOrbit({ title, center, items, buttons }) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={title} />

        <div className={styles.stage}>
          <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {items.map((item) => (
              <path
                key={item.label}
                d={`M ${center.left} ${center.top} L ${item.left} ${item.top}`}
                className={styles.line}
              />
            ))}
          </svg>

          <div className={styles.hub} style={{ top: `${center.top}%`, left: `${center.left}%` }}>
            <Image src={center.logo} alt="" width={120} height={28} className={styles.hubLogo} />
            <span className={styles.hubSub}>{center.subLabel}</span>
          </div>

          {items.map((item) => (
            <div
              key={item.label}
              className={styles.satellite}
              style={{ top: `${item.top}%`, left: `${item.left}%` }}
            >
              <a href={item.href || "#"} className={styles.satelliteCircle}>
                <Image src={item.image} alt="" fill sizes="140px" className={styles.satelliteImage} />
              </a>
              <span className={styles.satelliteLabel}>{item.label}</span>
            </div>
          ))}
        </div>

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
