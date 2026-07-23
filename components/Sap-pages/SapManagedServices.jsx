import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapManagedServices } from "../../data/sap/sapManagedServices";

export default function SapManagedServices() {
  const { intro, autoGear, solutions, testimonials, caseStudies } = sapManagedServices;

  return (
    <>
      <HeroBanner {...sapManagedServices.hero} />

      <CenteredSection
        title={intro.title}
        description={intro.description}
        buttons={intro.buttons}
        background={intro.background}
        theme={intro.theme}
      />

      <ImageTextSection {...sapManagedServices.keepRunning} />

      <CenteredSection title={autoGear.title} description={autoGear.description} background={autoGear.background} />

      <FunctionalityGrid title={solutions.title} items={solutions.items} compact />

      <TestimonialsSection {...testimonials} />
      <NewsSection {...sapManagedServices.news} />
      <BlogSection {...sapManagedServices.blogs} />
      <StoriesSection title={caseStudies.title} action={caseStudies.action} items={caseStudies.items} />

      <CTASection {...sapManagedServices.moreQuestions} />
      <FAQSection {...sapManagedServices.faq} />
      <CenteredSection {...sapManagedServices.contactTeaser} />
    </>
  );
}
