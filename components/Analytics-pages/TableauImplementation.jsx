import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { tableauImplementation } from "../../data/analytics/tableauImplementation";

export default function TableauImplementation() {
  const {
    hero,
    pricing,
    industryFit,
    partner,
    expertGuidance,
    advantagesIntro,
    advantagesDetail,
    edge,
    clients,
    services,
    testimonials,
    blogs,
    caseStudies,
    cta,
    faq,
    contactTeaser,
  } = tableauImplementation;

  return (
    <>
      <HeroBanner {...hero} />

      <BenefitsSection title={pricing.title} features={pricing.items} showDots={false} />

      <ImageTextSection {...industryFit} />

      <CenteredSection title={partner.title} description={partner.description} buttons={partner.buttons} />

      <CenteredSection
        title={expertGuidance.title}
        description={expertGuidance.description}
        background={expertGuidance.background}
        theme="light"
        buttons={expertGuidance.buttons}
      >
        <StatsGrid items={expertGuidance.items} theme="light" />
      </CenteredSection>

      <CenteredSection title={advantagesIntro.title} description={advantagesIntro.description} />

      <ImageTextSection {...advantagesDetail} />

      <CenteredSection title={edge.title} description={edge.description} background={edge.background} buttons={edge.buttons} />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={services.title} description={services.description} items={services.items} />

      <TestimonialsSection {...testimonials} />

      <BlogSection {...blogs} />

      <StoriesSection {...caseStudies} />

      <CTASection {...cta} />

      <FAQSection {...faq} />

      <div id="contact">
        <CenteredSection {...contactTeaser} />
      </div>
    </>
  );
}
