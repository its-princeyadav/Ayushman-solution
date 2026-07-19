import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import CenteredSection from "../Sap/common/CenteredSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import { sapPractices } from "../../data/sap/sapPractices";

export default function SapPractices() {
  const { transformative, practiceRows, functionalityGrid, caseStudies } = sapPractices;

  return (
    <>
      <HeroBanner {...sapPractices.hero} />
      <ImageTextSection {...sapPractices.partner} />
      <TimelineTabs {...sapPractices.timeline} />

      <CenteredSection title={transformative.title} description={transformative.description} />
      {practiceRows.map((row) => (
        <ImageTextSection key={row.title} {...row} />
      ))}

      <FunctionalityGrid
        title={functionalityGrid.title}
        description={functionalityGrid.description}
        items={functionalityGrid.items}
      />

      <TestimonialsSection {...sapPractices.testimonials} />
      <ImageTextSection {...sapPractices.partnership} />
      <NewsSection {...sapPractices.news} />
      <BlogSection {...sapPractices.blogs} />
      <StoriesSection
        title={caseStudies.title}
        description={caseStudies.description}
        action={caseStudies.action}
        items={caseStudies.items}
      />
      <CenteredSection {...sapPractices.contactTeaser} />
    </>
  );
}
