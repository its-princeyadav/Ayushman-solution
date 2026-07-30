import { FaArrowRight } from "react-icons/fa";
import styles from "./DataFlowStrip.module.css";

/**
 * Small presentational strip for the "Your Data Has a Story" section:
 * Raw Data -> Connected Data -> Intelligence -> Decisions -> Growth.
 * Deliberately kept tiny (no new card/slider machinery) since CenteredSection
 * already supplies the heading/description/buttons around it as `children`.
 */
export default function DataFlowStrip({ steps }) {
  return (
    <div className={styles.flow} data-sap-reveal>
      {steps.map((step, index) => (
        <div className={styles.stepWrap} key={step}>
          <span className={styles.step}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            {step}
          </span>
          {index < steps.length - 1 && <FaArrowRight className={styles.arrow} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
