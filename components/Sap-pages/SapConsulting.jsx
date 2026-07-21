import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapConsulting } from "../../data/sap/sapConsulting";
import styles from "./SapConsulting.module.css";

export default function SapConsulting() {
  const {
    hero,
    intro,
    introCards,
    overview,
    coreServices,
    endToEnd,
    methodology,
    testimonials,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapConsulting;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={`${styles.tintWhite} ${styles.tightIntro}`}>
        <CenteredSection title={intro.title}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "left" }}>
            <RichContent description={intro.paragraphs} theme="dark" />
          </div>
        </CenteredSection>

        <BenefitsSection features={introCards.features} buttons={introCards.buttons} showDots={false} />
      </div>

      <CenteredSection title={overview.title} description={overview.description} subtitle={overview.subtitle} background={overview.background} />

      {coreServices.map((row) => (
        <ImageTextSection key={row.title} {...row} />
      ))}

      <div className={styles.tintLight}>
        <FunctionalityGrid title={endToEnd.title} description={endToEnd.description} items={endToEnd.items} />
      </div>

      <div className={styles.tintWhite}>
        <BenefitsSection title={methodology.title} description={methodology.description} features={methodology.steps} showDots={false} />
      </div>

      <div className={styles.tintLight}>
        <TestimonialsSection {...testimonials} />
      </div>

      <div className={styles.tintWhite}>
        <BlogSection {...blogs} />
      </div>

      <div className={styles.tintLight}>
        <StoriesSection {...caseStudies} />
      </div>

      <CTASection {...ctaBanner} />

      <div className={styles.tintWhite}>
        <FAQSection {...faq} />
      </div>

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
