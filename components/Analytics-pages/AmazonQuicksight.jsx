import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import Slider from "../Sap/Slider/Slider";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import FAQSection from "../Sap/sections/FAQSection";
import { amazonQuicksight } from "../../data/analytics/amazonQuicksight";

export default function AmazonQuicksight() {
  const {
    hero,
    intro,
    overview,
    capabilities,
    overviewCta,
    industries,
    testimonials,
    blogs,
    caseStudies,
    faq,
    contactTeaser,
  } = amazonQuicksight;

  return (
    <>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} buttons={intro.buttons} />

      <ImageTextSection {...overview} />

      <CenteredSection
        title={capabilities.title}
        description={capabilities.description}
        background={capabilities.background}
        theme="light"
      >
        <Slider
          items={capabilities.items}
          cardType="feature"
          slidesPerView={{ base: 1, sm: 2, lg: 4 }}
          showDots={false}
          ariaLabel="Amazon QuickSight capabilities"
        />
      </CenteredSection>

      <CenteredSection
        title={overviewCta.title}
        description={overviewCta.description}
        background={overviewCta.background}
        buttons={overviewCta.buttons}
      />

      <FunctionalityGrid title={industries.title} description={industries.description} items={industries.items} />

      <TestimonialsSection {...testimonials} />

      <BlogSection {...blogs} />

      <StoriesSection {...caseStudies} />

      <FAQSection {...faq} />

      <div id="contact">
        <CenteredSection {...contactTeaser} />
      </div>
    </>
  );
}
