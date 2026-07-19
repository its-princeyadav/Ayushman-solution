import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import CheckList from "../Sap/common/CheckList";
import ImageTextSection from "../Sap/common/ImageTextSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOne } from "../../data/sap/sapBusinessOne";

export default function SapBusinessOne() {
  const { whatIsIt, addOnsIntro, addOnsRows, industryChallenges, deployment, testimonials, caseStudies } =
    sapBusinessOne;

  return (
    <>
      <HeroBanner {...sapBusinessOne.hero} />

      <CenteredSection title={whatIsIt.title} description={whatIsIt.description} background={whatIsIt.background} />

      <HeroBanner {...sapBusinessOne.keyFeatures} />
      <HeroBanner {...sapBusinessOne.whyChoose} />

      <CenteredSection title={addOnsIntro.title} description={addOnsIntro.description} />
      {addOnsRows.map((row) => (
        <ImageTextSection key={row.checklistTitle} {...row} />
      ))}

      <ClientsSection {...sapBusinessOne.clients} />

      <FunctionalityGrid title={industryChallenges.title} items={industryChallenges.items} />

      <CenteredSection title={deployment.title} background={deployment.background}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "left" }}>
          <CheckList items={deployment.checklist} />
          <p style={{ margin: 0, color: "var(--sap-text)", fontSize: "1.02rem", lineHeight: 1.75 }}>
            {deployment.description}
          </p>
        </div>
      </CenteredSection>

      <TestimonialsSection {...testimonials} />
      <NewsSection {...sapBusinessOne.news} />
      <BlogSection {...sapBusinessOne.insights} />
      <StoriesSection title={caseStudies.title} items={caseStudies.items} />

      <CTASection {...sapBusinessOne.industryBanner} />
      <FAQSection {...sapBusinessOne.faq} />
      <CenteredSection {...sapBusinessOne.contactTeaser} />
    </>
  );
}
