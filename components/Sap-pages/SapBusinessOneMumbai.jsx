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
import { sapBusinessOneMumbai } from "../../data/sap/sapBusinessOneMumbai";
import styles from "./SapBusinessOneMumbai.module.css";

export default function SapBusinessOneMumbai() {
  const {
    hero,
    intro,
    businessGrowth,
    whySap,
    timeline,
    capability,
    clients,
    services,
    mobility,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOneMumbai;

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
        <ImageTextSection {...businessGrowth} />
      </div>

      <CenteredSection
        title={whySap.title}
        description={whySap.description}
        buttons={whySap.buttons}
        background={whySap.background}
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

      <HeroBanner {...mobility} />

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
