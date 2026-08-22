import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import styles from "./Hero.module.css";

// Static mock data for the "Business Command Center" bar chart - purely
// decorative (no real analytics wired up), so this stays plain data on a
// Server Component rather than client state. Heights are hand-picked to
// read as a plausible monthly trend; May is the one highlighted/brand-
// yellow bar with a value tooltip, matching the reference design.
const CHART_DATA = [
  { month: "Jan", height: 55 },
  { month: "Feb", height: 68 },
  { month: "Mar", height: 35 },
  { month: "Apr", height: 50 },
  { month: "May", height: 87, highlight: true, value: "₹78.4K" },
  { month: "Jun", height: 58 },
  { month: "Jul", height: 30 },
  { month: "Aug", height: 52 },
  { month: "Sep", height: 72 },
  { month: "Oct", height: 46 },
  { month: "Nov", height: 92 },
  { month: "Dec", height: 62 },
];

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

            {/* CSS-only animated bar chart - each bar's live-data "pulse" is
                a pure CSS transform: scaleY() animation (GPU-friendly, no
                layout thrashing), desynced per bar via the --bar-i custom
                property feeding a negative animation-delay, so the 12 bars
                drift in and out of phase instead of breathing in unison.
                No JS/canvas/SVG - still a plain Server Component. */}
            <div className={styles.chart}>
              <div className={styles.gridLines} aria-hidden="true" />
              <div className={styles.bars} aria-hidden="true">
                {CHART_DATA.map((item, index) => (
                  <div
                    className={styles.barCol}
                    key={item.month}
                    style={{ "--bar-h": `${item.height}%`, "--bar-i": index }}
                  >
                    {item.highlight && (
                      <span className={styles.barTooltip}>
                        <b>{item.value}</b>
                        <span>{item.month}</span>
                      </span>
                    )}
                    <div className={`${styles.bar} ${item.highlight ? styles.barActive : ""}`} />
                    <span className={styles.barMonth}>{item.month}</span>
                  </div>
                ))}
              </div>
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
