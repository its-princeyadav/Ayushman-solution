import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { powerBi } from "../../data/analytics/powerBi";

export default function PowerBi() {
  const {
    hero,
    intro,
    overview,
    whyPowerBi,
    products,
    growthCta,
    clients,
    departments,
    industries,
    credibility,
    testimonials,
    faq,
    contactTeaser,
  } = powerBi;

  return (
    <>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} />

      <ImageTextSection {...overview} />

      <ImageTextSection {...whyPowerBi} />

      <BenefitsSection
        title={products.title}
        description={products.description}
        features={products.items}
        buttons={products.buttons}
      />

      <CenteredSection
        title={growthCta.title}
        description={growthCta.description}
        background={growthCta.background}
        buttons={growthCta.buttons}
      />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={departments.title} description={departments.description} items={departments.items} />

      <FunctionalityGrid title={industries.title} description={industries.description} items={industries.items} />

      <CTASection {...credibility} />

      <TestimonialsSection {...testimonials} />

      <FAQSection {...faq} />

      <div id="contact">
        <CenteredSection {...contactTeaser} />
      </div>
    </>
  );
}
