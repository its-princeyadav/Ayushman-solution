import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import CenteredSection from "../Sap/common/CenteredSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { sapBusinessOneCustomization } from "../../data/sap/sapBusinessOneCustomization";

export default function SapBusinessOneCustomization() {
  const { extendsToIntro, extendsToRows, customizationServices, caseStudies } = sapBusinessOneCustomization;

  return (
    <>
      <HeroBanner {...sapBusinessOneCustomization.hero} />
      <ImageTextSection {...sapBusinessOneCustomization.intro} />
      <TimelineTabs {...sapBusinessOneCustomization.awards} />

      <CenteredSection title={extendsToIntro.title} />
      {extendsToRows.map((row) => (
        <ImageTextSection key={row.title} {...row} />
      ))}

      <ClientsSection {...sapBusinessOneCustomization.clients} />

      <FunctionalityGrid title={customizationServices.title} items={customizationServices.items} />

      <NewsSection {...sapBusinessOneCustomization.news} />
      <BlogSection {...sapBusinessOneCustomization.blogs} />
      <StoriesSection title={caseStudies.title} action={caseStudies.action} items={caseStudies.items} />

      <CTASection {...sapBusinessOneCustomization.moreQuestions} />
      <CenteredSection {...sapBusinessOneCustomization.contactTeaser} />
    </>
  );
}
