import styles from "./SapAuroraBackground.module.css";

/**
 * Shared fixed background for every /sap/** page - the same aurora
 * (soft radial-gradient blooms + diagonal wash) and faint ruled grid
 * that the homepage Hero renders (components/Hero/Hero.module.css),
 * extracted here so the whole SAP module shares one implementation
 * instead of each page/component re-declaring it. `position: fixed`
 * pins both layers to the viewport so they stay put while page
 * content scrolls over them; negative z-index keeps them behind
 * every SAP section. aria-hidden: purely decorative, no content.
 */
export default function SapAuroraBackground() {
  return (
    <>
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />
    </>
  );
}
