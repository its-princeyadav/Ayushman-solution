import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ImageTextSection from "../Sap/common/ImageTextSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { sapBusinessOneIntegration } from "../../data/sap/sapBusinessOneIntegration";

export default function SapBusinessOneIntegration() {
  const { intro, integrationRows, businessIntegrations, testimonials, caseStudies } = sapBusinessOneIntegration;

  return (
    <>
      <HeroBanner {...sapBusinessOneIntegration.hero} />

      <CenteredSection title={intro.title} description={intro.description} buttons={intro.buttons} background={intro.background} theme="light">
        <StatsGrid items={intro.stats} theme="light" />
      </CenteredSection>

      {integrationRows.map((row) => (
        <ImageTextSection key={row.title} {...row} />
      ))}

      <FunctionalityGrid title={businessIntegrations.title} description={businessIntegrations.description} items={businessIntegrations.items} />

      <TestimonialsSection {...testimonials} />

      <StoriesSection title={caseStudies.title} action={caseStudies.action} items={caseStudies.items} />

      <CTASection {...sapBusinessOneIntegration.moreQuestions} />
      <CenteredSection {...sapBusinessOneIntegration.contactTeaser} />
    </>
  );
}
