import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import PremiumSplitSection from "../Sap/common/PremiumSplitSection";
import PremiumEditionSection from "../Sap/common/PremiumEditionSection";
import SectionHeading from "../Sap/common/SectionHeading";
import SectionLabel from "../Common/SectionLabel";
import Container from "../Sap/common/Container";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import IndustryOrbit from "../Sap/Industries/IndustryOrbit";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import CTASection from "../Sap/CTA/CTASection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapSolutions } from "../../data/sap/sapSolutions";

// The back half of every SAP page (Benefits through FAQ) is identical across
// Solutions/Services/Support/Practices/Business One — only the data differs —
// so it stays a plain reusable list. The front half is page-specific content
// (S/4HANA intro, awards timeline, editions, stats, industries, ...), so it's
// composed explicitly below in the same top-to-bottom order as the reference.
const BOTTOM_HALF = [
  [BenefitsSection, sapSolutions.benefits],
  [TestimonialsSection, sapSolutions.testimonials],
  [CTASection, sapSolutions.cta],
  [NewsSection, sapSolutions.news],
  [BlogSection, sapSolutions.blogs],
  [StoriesSection, sapSolutions.stories],
  [FAQSection, sapSolutions.faq],
];

export default function SapSolutions() {
  const {
    eyebrow: cloudEditionsEyebrow,
    heading,
    background,
    public: publicEdition,
    private: privateEdition,
  } = sapSolutions.cloudEditions;
  const { background: dtBackground, intro: dtIntro, stats: dtStats } = sapSolutions.digitalTransformation;

  return (
    <>
      <HeroBanner {...sapSolutions.hero} />
      <PremiumSplitSection {...sapSolutions.s4hanaIntro} />

      <section style={{ background, paddingBlock: "var(--sap-section-gap)" }}>
        <Container>
          {cloudEditionsEyebrow && <SectionLabel title={cloudEditionsEyebrow} align="center" />}
          <SectionHeading title={heading} align="center" />
        </Container>
        <PremiumEditionSection {...publicEdition} />
        <PremiumEditionSection {...privateEdition} />
      </section>

      <CenteredSection {...sapSolutions.whoNeedsIt} />

      <CenteredSection
        eyebrow={sapSolutions.empowering.eyebrow}
        title={sapSolutions.empowering.title}
        highlight={sapSolutions.empowering.highlight}
        titleDivider={sapSolutions.empowering.titleDivider}
        decorative={sapSolutions.empowering.decorative}
        description={sapSolutions.empowering.description}
        buttons={sapSolutions.empowering.buttons}
      >
        <StatsGrid items={sapSolutions.empowering.stats} />
      </CenteredSection>

      <section style={{ background: dtBackground }}>
        <ImageTextSection {...dtIntro} background="transparent" />
        <Container>
          <div style={{ paddingBottom: "var(--sap-section-gap)" }}>
            <StatsGrid items={dtStats} />
          </div>
        </Container>
      </section>

      <CenteredSection {...sapSolutions.enhancedAdoption} />

      <FunctionalityGrid {...sapSolutions.functionalityGrid} />
      <IndustryOrbit {...sapSolutions.industries} />

      {BOTTOM_HALF.map(([Section, props]) => (
        <Section key={Section.name} {...props} />
      ))}
    </>
  );
}
