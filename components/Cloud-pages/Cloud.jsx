// Page composer for /cloud ("What We Do -> Cloud"). Deliberately reuses the
// exact same section components as the SAP module (components/Sap/**)
// instead of a parallel "Cloud" component set - see data/cloud.js for why
// each block is shaped the way it is. Only the visual skin differs, via
// components/Cloud/cloud-tokens.css's scoped custom-property overrides.
import "../Sap/sap-tokens.css";
import "../Cloud/cloud-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import ServiceTabsSection from "../Sap/sections/ServiceTabsSection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { cloud } from "../../data/cloud";
import styles from "./Cloud.module.css";

export default function Cloud() {
  const { hero, intro, industries, servicePortfolio, news, blogs, caseStudies, ctaBanner, faq } = cloud;

  return (
    <div className={`${styles.scope} cloudPage`}>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} compact />

      <div className={styles.tintGlow}>
        <FunctionalityGrid title={industries.title} description={industries.description} items={industries.items} />
      </div>

      <ServiceTabsSection tabs={servicePortfolio.tabs} panels={servicePortfolio.panels} />

      <div className={styles.tintGlow}>
        <NewsSection {...news} />
        <BlogSection {...blogs} />
        <StoriesSection {...caseStudies} />
      </div>

      <CTASection {...ctaBanner} />

      <div className={styles.tintGlow}>
        <FAQSection {...faq} />
      </div>
    </div>
  );
}
