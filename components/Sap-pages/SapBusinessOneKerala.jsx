import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOneKerala } from "../../data/sap/sapBusinessOneKerala";
import styles from "./SapBusinessOneKerala.module.css";

export default function SapBusinessOneKerala() {
  const {
    hero,
    intro,
    whyIdeal,
    businessCta,
    timeline,
    capability,
    clients,
    services,
    news,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOneKerala;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <CenteredSection title={intro.title}>
          <div className={styles.centeredCopy}>
            <RichContent description={intro.paragraphs} theme="dark" />
          </div>
        </CenteredSection>
      </div>

      <div className={styles.tintLight}>
        <ImageTextSection {...whyIdeal} />
      </div>

      <CenteredSection
        title={businessCta.title}
        description={businessCta.description}
        buttons={businessCta.buttons}
        background={businessCta.background}
        theme="light"
      />

      <TimelineTabs {...timeline} />

      <div className={styles.tintWhite}>
        <CenteredSection title={capability.title} description={capability.description} buttons={capability.buttons}>
          <StatsGrid items={capability.items} />
        </CenteredSection>
      </div>

      <ClientsSection {...clients} />

      <div className={styles.tintLight}>
        <FunctionalityGrid title={services.title} description={services.description} items={services.items} />
      </div>

      <div className={styles.tintWhite}>
        <NewsSection {...news} />
      </div>

      <div className={styles.tintLight}>
        <BlogSection {...blogs} />
      </div>

      <div className={styles.tintWhite}>
        <StoriesSection {...caseStudies} />
      </div>

      <CTASection {...ctaBanner} />

      <div className={styles.tintLight}>
        <FAQSection {...faq} />
      </div>

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
