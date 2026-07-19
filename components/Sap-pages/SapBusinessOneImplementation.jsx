import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import ClientsSection from "../Sap/sections/ClientsSection";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOneImplementation } from "../../data/sap/sapBusinessOneImplementation";

export default function SapBusinessOneImplementation() {
  const {
    hero,
    whatIsImplementation,
    industryExpertise,
    packages,
    implementationsStats,
    awards,
    partnersIntro,
    s4hanaPartner,
    b1Partner,
    ecosystemAdoption,
    roadmap,
    roadmapClients,
    testimonials,
    blogs,
    moreQuestions,
    faq,
    contactTeaser,
  } = sapBusinessOneImplementation;

  return (
    <>
      <HeroBanner {...hero} />

      <CenteredSection {...whatIsImplementation} />
      <CenteredSection {...industryExpertise} />

      <BenefitsSection title={packages.title} features={packages.features} showDots={false} />

      <ImageTextSection {...implementationsStats} />

      <TimelineTabs {...awards} />

      <CenteredSection title={partnersIntro.title} description={partnersIntro.description} />
      <ImageTextSection {...s4hanaPartner} />
      <ImageTextSection {...b1Partner} />

      <CenteredSection title={ecosystemAdoption.title} buttons={ecosystemAdoption.buttons}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "left" }}>
          <RichContent description={ecosystemAdoption.description} bullets={ecosystemAdoption.bullets} theme="dark" />
        </div>
      </CenteredSection>

      <CenteredSection title={roadmap.title} description={roadmap.description} buttons={roadmap.buttons}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "left" }}>
          <RichContent bullets={roadmap.steps} theme="dark" />
        </div>
      </CenteredSection>
      <ClientsSection {...roadmapClients} />

      <TestimonialsSection {...testimonials} />
      <BlogSection {...blogs} />

      <CTASection {...moreQuestions} />
      <FAQSection {...faq} />
      <CenteredSection {...contactTeaser} />
    </>
  );
}
