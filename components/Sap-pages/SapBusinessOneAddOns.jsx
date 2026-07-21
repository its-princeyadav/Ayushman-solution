import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import CenteredSection from "../Sap/common/CenteredSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOneAddOns } from "../../data/sap/sapBusinessOneAddOns";
import styles from "./SapBusinessOneAddOns.module.css";

export default function SapBusinessOneAddOns() {
  const {
    hero,
    intro,
    awards,
    addOnsIntro,
    clients,
    addOnsSuite,
    testimonials,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOneAddOns;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <ImageTextSection {...intro} />

      <TimelineTabs {...awards} />

      <div className={styles.tintWhite}>
        <CenteredSection title={addOnsIntro.title} description={addOnsIntro.description} buttons={addOnsIntro.buttons} />
      </div>

      <div className={styles.tintWhite}>
        <ClientsSection {...clients} />
      </div>

      <div className={styles.tintWhite}>
        <FunctionalityGrid title={addOnsSuite.title} description={addOnsSuite.description} items={addOnsSuite.items} />
      </div>

      <div className={styles.tintLight}>
        <TestimonialsSection {...testimonials} />
      </div>

      <div className={styles.tintWhite}>
        <BlogSection {...blogs} />
      </div>

      <div className={styles.tintLight}>
        <StoriesSection {...caseStudies} />
      </div>

      <CTASection {...ctaBanner} />

      <div className={styles.tintWhite}>
        <FAQSection {...faq} />
      </div>

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
