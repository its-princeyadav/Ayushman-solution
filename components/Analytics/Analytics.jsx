import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import PremiumSplitSection from "../Sap/common/PremiumSplitSection";
import CenteredSection from "../Sap/common/CenteredSection";
import Container from "../Sap/common/Container";
import SectionHeading from "../Sap/common/SectionHeading";
import StatsGrid from "../Sap/common/StatsGrid";
import ImageTextSection from "../Sap/common/ImageTextSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import DataFlowStrip from "./DataFlowStrip";
import JourneyTabs from "./JourneyTabs";
import { analytics } from "../../data/analytics";
import styles from "./Analytics.module.css";

// Every alternating solution block (BI Services / Tableau / Power BI /
// Alteryx / Data Science) shares the same ImageTextSection shape - only the
// content differs - so it stays a plain list, same convention as
// SapSolutions.jsx's BOTTOM_HALF.
const SOLUTION_BLOCKS = [
  analytics.solutions.biServices,
  analytics.solutions.tableau,
  analytics.solutions.powerBi,
  analytics.solutions.automation,
  analytics.solutions.dataScience,
];

export default function Analytics() {
  const {
    hero,
    intro,
    trust,
    dataStory,
    capabilities,
    powerUp,
    journey,
    authority,
    solutions,
    clients,
    industries,
    benefits,
    caseStudies,
    testimonials,
    news,
    blogs,
    ctaBanner,
    faq,
    contactTeaser,
  } = analytics;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <PremiumSplitSection {...intro} />
      </div>

      <CenteredSection title={dataStory.title} description={dataStory.description}>
        <DataFlowStrip steps={dataStory.steps} />
      </CenteredSection>

      <div className={styles.tintLight}>
        <FunctionalityGrid title={trust.title} description={trust.description} items={trust.items} />
      </div>

      <div className={styles.tintWhite}>
        <FunctionalityGrid title={capabilities.title} description={capabilities.description} items={capabilities.items} />
      </div>

      <div className={styles.tintLight}>
        <ImageTextSection {...powerUp} />
      </div>

      <JourneyTabs title={journey.title} description={journey.description} stages={journey.stages} />

      <div className={styles.tintLight}>
        <CenteredSection title={authority.title} description={authority.description} buttons={authority.buttons}>
          <StatsGrid items={authority.stats} />
        </CenteredSection>
      </div>

      <div className={styles.tintWhite} id="solutions">
        <div className={styles.solutionsIntro}>
          <Container>
            <SectionHeading title={solutions.title} description={solutions.description} align="center" />
          </Container>
        </div>

        <div className={styles.solutionsStack}>
          {SOLUTION_BLOCKS.map(({ id, ...block }) => (
            <div id={id} key={id}>
              <ImageTextSection {...block} />
            </div>
          ))}
        </div>
      </div>

      <ClientsSection {...clients} />

      <div className={styles.tintLight}>
        <FunctionalityGrid title={industries.title} description={industries.description} items={industries.items} />
      </div>

      <div className={styles.tintWhite}>
        <BenefitsSection {...benefits} />
      </div>

      <div className={styles.tintLight}>
        <StoriesSection {...caseStudies} />
      </div>

      <TestimonialsSection {...testimonials} />

      <div className={styles.tintWhite}>
        <NewsSection {...news} />
      </div>

      <div className={styles.tintLight}>
        <BlogSection {...blogs} />
      </div>

      <CTASection {...ctaBanner} />

      <FAQSection {...faq} />

      <div className={styles.tintLight} id="contact">
        <CenteredSection
          title={contactTeaser.title}
          description={contactTeaser.description}
          buttons={contactTeaser.buttons}
          background={contactTeaser.background}
          theme={contactTeaser.theme}
        />
      </div>
    </div>
  );
}
