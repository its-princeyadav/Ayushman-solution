import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import CTASection from "../Sap/CTA/CTASection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import FAQSection from "../Sap/sections/FAQSection";
import { dataVisualization } from "../../data/analytics/dataVisualization";

export default function DataVisualization() {
  const {
    hero,
    pricing,
    overview,
    mobileBiIntro,
    mobileBiDetail,
    clients,
    industryVertical,
    featureBanners,
    blogs,
    caseStudies,
    cta,
    faq,
    contactTeaser,
  } = dataVisualization;

  return (
    <>
      <HeroBanner {...hero} />

      <BenefitsSection title={pricing.title} features={pricing.items} showDots={false} />

      <ImageTextSection {...overview} />

      <CenteredSection title={mobileBiIntro.title} description={mobileBiIntro.description} buttons={mobileBiIntro.buttons} theme="light" />

      <ImageTextSection {...mobileBiDetail} />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={industryVertical.title} description={industryVertical.description} items={industryVertical.items} />

      {featureBanners.map((banner) => (
        <CTASection key={banner.title} {...banner} />
      ))}

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
