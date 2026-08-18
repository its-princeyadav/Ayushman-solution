import {
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineBanknotes,
  HiOutlinePresentationChartLine,
  HiOutlineTruck,
  HiOutlineArchiveBox,
  HiOutlineChartBarSquare,
  HiOutlineDocumentText,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
  HiOutlineArrowTrendingUp,
  HiOutlineBell,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import Container from "./Container";
import HeroUnderHeading from "../../Common/HeroUnderHeading";
import FlipButton from "../../Common/FlipButton";
import styles from "./PremiumSplitSection.module.css";

// Server Component, so mapping icon name -> component here (instead of
// importing icon components inside the data file) keeps data/*.js plain,
// serializable content - same convention already used by FeatureCard/StatCard.
// Thin Heroicons-outline set (not react-icons/fa's solid glyphs) to match
// this section's lighter, premium visual weight.
const ICONS = {
  cloud: HiOutlineCloud,
  shield: HiOutlineShieldCheck,
  chart: HiOutlineChartBar,
  flex: HiOutlineCog6Tooth,
};

const NAV_ICONS = {
  home: HiOutlineHome,
  finance: HiOutlineBanknotes,
  sales: HiOutlinePresentationChartLine,
  procurement: HiOutlineTruck,
  inventory: HiOutlineArchiveBox,
  analytics: HiOutlineChartBarSquare,
  reports: HiOutlineDocumentText,
  settings: HiOutlineCog6Tooth,
};

const KPI_ICONS = {
  revenue: HiOutlineChartBarSquare,
  orders: HiOutlineShoppingBag,
  profit: HiOutlineBanknotes,
  customers: HiOutlineUserGroup,
};

const INSIGHT_ICONS = {
  cashflow: HiOutlineBanknotes,
  inventory: HiOutlineArchiveBox,
  sales: HiOutlineArrowTrendingUp,
};

// One icon per description paragraph, cycled by index - description stays a
// plain array of strings in the data (no per-paragraph icon field to keep
// data/*.js content, not markup), so the icon choice lives here instead.
const INFO_ICONS = [HiOutlineChartBar, HiOutlineCloud];

/**
 * Premium 50/50 split "intro" section: shared HeroUnderHeading block
 * (eyebrow + compact heading with a highlighted accent), body copy, one CTA
 * - paired with a floating browser-window dashboard mockup and a glass
 * feature-strip overlapping its bottom edge. Built as a generic, prop-driven
 * alternative to ImageTextSection for pages that want this more elevated
 * treatment; content, dashboard data and feature count all vary per caller,
 * nothing here is hardcoded.
 */
export default function PremiumSplitSection({
  eyebrow,
  title,
  titleAccent,
  highlight,
  description,
  button,
  dashboard,
  features,
  imagePosition = "right",
}) {
  return (
    <section className={styles.section} data-sap-reveal>
      <span className={styles.dotGrid} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={`${styles.grid} ${imagePosition === "left" ? styles.imageLeft : ""}`}>
          <div className={styles.content}>
            <HeroUnderHeading
              eyebrow={eyebrow}
              title={title}
              titleAccent={titleAccent}
              highlight={highlight}
              className={styles.heroHeading}
            />

            <span className={styles.accentDots} aria-hidden="true">
              <span className={styles.accentDotsBar} />
              {Array.from({ length: 5 }).map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={i} />
              ))}
            </span>

            <div className={styles.body}>
              {(Array.isArray(description) ? description : [description])
                .filter(Boolean)
                .map((paragraph, index) => {
                  const text = typeof paragraph === "object" ? paragraph.text : paragraph;
                  const Icon = INFO_ICONS[index % INFO_ICONS.length];
                  return (
                    <div className={styles.infoCard} key={text}>
                      <span className={styles.infoCardIcon}>
                        <Icon aria-hidden="true" />
                      </span>
                      <p className={styles.infoCardText}>{text}</p>
                    </div>
                  );
                })}
            </div>

            {button && (
              <FlipButton
                href={button.href}
                frontText={button.label}
                backText={button.label}
                className={styles.button}
              />
            )}
          </div>

          <div className={styles.imageSide}>
            {dashboard && (
              <div className={styles.browserWindow}>
                <div className={styles.browserChrome}>
                  <span className={styles.trafficLights} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  <div className={styles.addressBar}>
                    <HiOutlineLockClosed aria-hidden="true" />
                    <span>{dashboard.url}</span>
                  </div>
                </div>

                <div className={styles.dashboard}>
                  <aside className={styles.dashSidebar}>
                    <div className={styles.dashBrand}>
                      <span className={styles.dashBrandMark}>SAP</span>
                      <span className={styles.dashBrandLabel}>{dashboard.brand}</span>
                    </div>
                    <nav className={styles.dashNav}>
                      {dashboard.nav.map((item) => {
                        const Icon = NAV_ICONS[item.icon];
                        return (
                          <span
                            key={item.label}
                            className={`${styles.dashNavItem} ${item.active ? styles.dashNavItemActive : ""}`}
                          >
                            {Icon && <Icon aria-hidden="true" />}
                            <span className={styles.dashNavLabel}>{item.label}</span>
                          </span>
                        );
                      })}
                    </nav>
                  </aside>

                  <div className={styles.dashMain}>
                    <div className={styles.dashHeader}>
                      <div>
                        <p className={styles.dashGreeting}>{dashboard.greeting} 👋</p>
                        <p className={styles.dashSubtitle}>{dashboard.subtitle}</p>
                      </div>
                      <span className={styles.dashBell} aria-hidden="true">
                        <HiOutlineBell />
                      </span>
                    </div>

                    <div className={styles.kpiGrid}>
                      {dashboard.kpis.map((kpi) => {
                        const Icon = KPI_ICONS[kpi.icon];
                        return (
                          <div className={styles.kpiCard} key={kpi.label}>
                            <div className={styles.kpiTop}>
                              <span className={styles.kpiLabel}>{kpi.label}</span>
                              {Icon && (
                                <span className={styles.kpiIcon}>
                                  <Icon aria-hidden="true" />
                                </span>
                              )}
                            </div>
                            <p className={styles.kpiValue}>{kpi.value}</p>
                            <span className={styles.kpiChange}>
                              <HiOutlineArrowTrendingUp aria-hidden="true" />
                              {kpi.change} vs last month
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className={styles.dashLower}>
                      <div className={styles.chartCard}>
                        <p className={styles.chartTitle}>{dashboard.chartTitle}</p>
                        <svg
                          className={styles.chartSvg}
                          viewBox="0 0 400 140"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id="dashChartFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            className={styles.chartFill}
                            d="M0,96 C22,70 40,110 62,92 C84,74 100,44 122,50 C144,56 158,88 180,84 C202,80 214,40 236,34 C258,28 272,58 294,52 C316,46 330,16 352,14 C368,12.5 384,20 400,24 L400,140 L0,140 Z"
                            fill="url(#dashChartFill)"
                            stroke="none"
                          />
                          <path
                            className={styles.chartLine}
                            d="M0,96 C22,70 40,110 62,92 C84,74 100,44 122,50 C144,56 158,88 180,84 C202,80 214,40 236,34 C258,28 272,58 294,52 C316,46 330,16 352,14 C368,12.5 384,20 400,24"
                            fill="none"
                            stroke="var(--color-primary-darker)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className={styles.insightsCard}>
                        <p className={styles.insightsTitle}>{dashboard.insightsTitle}</p>
                        {dashboard.insights.map((insight) => {
                          const Icon = INSIGHT_ICONS[insight.icon];
                          return (
                            <div className={styles.insightRow} key={insight.text}>
                              {Icon && (
                                <span className={styles.insightIcon}>
                                  <Icon aria-hidden="true" />
                                </span>
                              )}
                              <p>{insight.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {features && features.length > 0 && (
              <div className={styles.featureCardClip} data-sap-reveal>
                <div className={styles.featureCard}>
                  {features.map((feature) => {
                    const Icon = ICONS[feature.icon];
                    return (
                      <div className={styles.feature} key={feature.title}>
                        {Icon && (
                          <span className={styles.featureIcon}>
                            <Icon aria-hidden="true" />
                          </span>
                        )}
                        <p className={styles.featureTitle}>{feature.title}</p>
                        <p className={styles.featureDescription}>{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
