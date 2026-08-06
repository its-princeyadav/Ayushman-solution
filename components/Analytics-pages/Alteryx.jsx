import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import FAQSection from "../Sap/sections/FAQSection";
import { alteryx } from "../../data/analytics/alteryx";

export default function Alteryx() {
  const {
    hero,
    pricing,
    overview,
    unifiedIntro,
    analyticsCloud,
    designerAddons,
    alteryxServer,
    impact,
    industries,
    testimonials,
    blogs,
    caseStudies,
    faq,
    contactTeaser,
  } = alteryx;

  return (
    <>
      <HeroBanner {...hero} />

      <BenefitsSection
        title={pricing.title}
        description={pricing.description}
        features={pricing.items}
        showDots={false}
        buttons={pricing.buttons}
      />

      <ImageTextSection {...overview} />

      <CenteredSection title={unifiedIntro.title} description={unifiedIntro.description} />

      <ImageTextSection {...analyticsCloud} />

      <ImageTextSection {...designerAddons} />

      <ImageTextSection {...alteryxServer} />

      <CenteredSection title={impact.title} description={impact.description} background={impact.background} buttons={impact.buttons}>
        <StatsGrid items={impact.items} />
      </CenteredSection>

      <FunctionalityGrid title={industries.title} description={industries.description} items={industries.items} />

      <TestimonialsSection {...testimonials} />

      <BlogSection {...blogs} />

      <StoriesSection {...caseStudies} />

      <FAQSection {...faq} />

      <div id="contact">
        <CenteredSection {...contactTeaser} />
      </div>
    </>
  );
}
