import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapHub } from "../../data/sap/sapHub";

export default function SapHub() {
  const {
    hero,
    intro,
    practiceAreas,
    timeline,
    capability,
    ecosystem,
    testimonials,
    news,
    blogs,
    stories,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapHub;

  return (
    <>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} />

      <FunctionalityGrid title={practiceAreas.title} description={practiceAreas.description} items={practiceAreas.items} />

      <TimelineTabs {...timeline} />

      <CenteredSection title={capability.title} description={capability.description} buttons={capability.buttons}>
        <StatsGrid items={capability.stats} />
      </CenteredSection>

      <ClientsSection {...ecosystem} />

      <TestimonialsSection {...testimonials} />

      <NewsSection {...news} />
      <BlogSection {...blogs} />
      <StoriesSection {...stories} />

      <CTASection {...ctaBanner} />

      <FAQSection {...faq} />
      <CenteredSection {...contactTeaser} />
    </>
  );
}
