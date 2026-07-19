import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import CenteredSection from "../Sap/common/CenteredSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { sapSupport } from "../../data/sap/sapSupport";

export default function SapSupport() {
  const { supportServices, caseStudies } = sapSupport;

  return (
    <>
      <HeroBanner {...sapSupport.hero} />
      <ImageTextSection {...sapSupport.roadblocks} />
      <TimelineTabs {...sapSupport.timeline} />
      <CenteredSection {...sapSupport.challenges} />
      <ClientsSection {...sapSupport.clients} />

      <BenefitsSection
        title={supportServices.title}
        features={supportServices.features}
        showDots={supportServices.showDots}
      />

      <TestimonialsSection {...sapSupport.testimonials} />
      <BlogSection {...sapSupport.blogs} />
      <StoriesSection
        title={caseStudies.title}
        action={caseStudies.action}
        items={caseStudies.items}
      />
      <CTASection {...sapSupport.moreQuestions} />
      <CenteredSection {...sapSupport.contactTeaser} />
    </>
  );
}
