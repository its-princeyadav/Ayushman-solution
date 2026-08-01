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
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { tableauLicense } from "../../data/analytics/tableauLicense";

export default function TableauLicense() {
  const {
    hero,
    pricing,
    partner,
    benefits,
    creatorLicense,
    explorerLicense,
    viewerLicense,
    clients,
    features,
    testimonials,
    blogs,
    cta,
    faq,
    contactTeaser,
  } = tableauLicense;

  return (
    <>
      <HeroBanner {...hero} />

      <div id={pricing.id}>
        <BenefitsSection
          title={pricing.title}
          description={pricing.description}
          features={pricing.items}
          showDots={false}
          buttons={pricing.buttons}
        />
      </div>

      <ImageTextSection {...partner} />

      <CenteredSection
        title={benefits.title}
        description={benefits.description}
        background={benefits.background}
        theme="light"
        buttons={benefits.buttons}
      >
        <StatsGrid items={benefits.items} theme="light" />
      </CenteredSection>

      <ImageTextSection {...creatorLicense} />

      <ImageTextSection {...explorerLicense} />

      <ImageTextSection {...viewerLicense} />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={features.title} description={features.description} items={features.items} />

      <TestimonialsSection {...testimonials} />

      <BlogSection {...blogs} />

      <CTASection {...cta} />

      <FAQSection {...faq} />

      <div id="contact">
        <CenteredSection {...contactTeaser} />
      </div>
    </>
  );
}
