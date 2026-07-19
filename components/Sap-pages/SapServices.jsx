import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ServiceTabsSection from "../Sap/sections/ServiceTabsSection";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import FAQSection from "../Sap/sections/FAQSection";
import InnovationSection from "../Sap/sections/InnovationSection";
import { sapServices } from "../../data/sap/sapServices";

export default function SapServices() {
  const { statsIntro, industries, portfolio } = sapServices;

  return (
    <>
      <HeroBanner {...sapServices.hero} />

      <CenteredSection title={statsIntro.title} description={statsIntro.description} subtitle={statsIntro.subtitle}>
        <StatsGrid items={statsIntro.stats} />
      </CenteredSection>

      <ServiceTabsSection {...sapServices.serviceTabs} />

      <CenteredSection {...sapServices.ecoConscious} />

      <BenefitsSection
        title={industries.title}
        description={industries.description}
        features={industries.features}
        showDots={industries.showDots}
        buttons={industries.buttons}
      />

      <TestimonialsSection {...sapServices.whyWeDo} />
      <NewsSection {...sapServices.news} />
      <BlogSection {...sapServices.blogs} />
      <StoriesSection title={portfolio.title} description={portfolio.description} action={portfolio.action} items={portfolio.items} />
      <FAQSection {...sapServices.faq} />
      <InnovationSection {...sapServices.innovation} />
    </>
  );
}
