import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./Hero.module.css";

/**
 * Homepage hero - rebuilt to match a client-provided reference design (a
 * full static HTML/CSS mockup, not just a screenshot). No longer the
 * multi-slide image carousel this file used to be (drag/swipe, autoplay,
 * Ken Burns zoom, dots) - this is a static two-column layout: headline +
 * CTAs on the left, a "Business Command Center" dashboard mockup on the
 * right. No client-side state or interaction of any kind, so unlike the
 * carousel this replaces, this is a plain Server Component - the entrance
 * animation below is pure CSS (`animation: ... both`, replaying nothing,
 * triggered once on paint), not IntersectionObserver-driven, since this
 * content is always above the fold and visible immediately - there's
 * nothing to "reveal on scroll into view" here.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Fixed background layers, not `.aurora`/`.grid-bg` mounted globally
          in the reference - scoped to just this component (and therefore
          just the homepage) so other, not-yet-redesigned pages' navbars
          don't suddenly get a background they weren't designed against.
          aria-hidden: purely decorative, no content. */}
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            SAP • Cloud • IT • Analytics
          </span>

          <h1 className={styles.title}>
            Build a <span className={styles.titleGrad}>smarter business</span> with connected technology.
          </h1>

          <p className={styles.desc}>
            Ayushman Solutions helps growing businesses simplify operations with SAP Business One, cloud
            ERP, IT infrastructure, automation and real-time analytics — from strategy to support.
          </p>

          <div className={styles.actions}>
            {/* href="#": matches this site's own existing convention for
                not-yet-wired contact actions (the navbar's own "Contact Us"
                link is the same placeholder today). */}
            <Link href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
              Schedule a Consultation
              <LuArrowRight aria-hidden="true" />
            </Link>
            <Link href="/sap/solutions" className={`${styles.btn} ${styles.btnSecondary}`}>
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.heroOrb} aria-hidden="true" />
          <div className={styles.dashboard}>
            <div className={styles.dashTop}>
              <span className={styles.dashTitle}>Business Command Center</span>
              <span className={styles.dashPill}>LIVE INSIGHTS</span>
            </div>

            {/* CSS-only "chart" - a gradient box with a faint horizontal
                gridline pattern (.chart::before) plus one skewed,
                bottom-bordered div standing in for a rising trend line. No
                image/canvas/SVG, matching exactly how the reference itself
                builds this. */}
            <div className={styles.chart}>
              <div className={styles.chartLine} aria-hidden="true" />
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <b>₹48.6L</b>
                <span>Monthly Sales</span>
              </div>
              <div className={styles.stat}>
                <b>92%</b>
                <span>Order Fulfilment</span>
              </div>
              <div className={styles.stat}>
                <b>14.8K</b>
                <span>Inventory Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
