import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOneChennai } from "../../data/sap/sapBusinessOneChennai";
import styles from "./SapBusinessOneChennai.module.css";

export default function SapBusinessOneChennai() {
  const {
    hero,
    intro,
    whyIdeal,
    whyChooseUs,
    timeline,
    capability,
    checklist,
    clients,
    services,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOneChennai;

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
        title={whyChooseUs.title}
        description={whyChooseUs.description}
        buttons={whyChooseUs.buttons}
        background={whyChooseUs.background}
        theme="light"
      />

      <TimelineTabs {...timeline} />

      <div className={styles.tintWhite}>
        <CenteredSection title={capability.title} description={capability.description}>
          <StatsGrid items={capability.items} />
        </CenteredSection>
      </div>

      <CenteredSection title={checklist.title} buttons={checklist.buttons} background={checklist.background}>
        <div className={styles.centeredCopy}>
          <RichContent bullets={checklist.bullets} theme="dark" />
        </div>
      </CenteredSection>

      <ClientsSection {...clients} />

      <div className={styles.tintLight}>
        <FunctionalityGrid title={services.title} description={services.description} items={services.items} />
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
