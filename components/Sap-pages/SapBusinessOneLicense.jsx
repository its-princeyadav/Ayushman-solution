import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOneLicense } from "../../data/sap/sapBusinessOneLicense";
import styles from "./SapBusinessOneLicense.module.css";

export default function SapBusinessOneLicense() {
  const {
    hero,
    intro,
    packages,
    licenseCost,
    awards,
    clients,
    licenseTypes,
    blogs,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOneLicense;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <CenteredSection title={intro.title} buttons={intro.buttons}>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "left" }}>
            <RichContent description={intro.paragraphs} theme="dark" />
          </div>
        </CenteredSection>
      </div>

      <div className={styles.tintWhite}>
        <BenefitsSection title={packages.title} features={packages.features} showDots={false} />
      </div>

      <ImageTextSection {...licenseCost} />

      <TimelineTabs {...awards} />

      <div className={styles.tintLight}>
        <ClientsSection {...clients} />
      </div>

      <div className={styles.tintWhite}>
        <FunctionalityGrid title={licenseTypes.title} description={licenseTypes.description} items={licenseTypes.items} />
      </div>

      <div className={styles.tintGradient}>
        <BlogSection {...blogs} />
      </div>

      <CTASection {...ctaBanner} />

      <div className={styles.tintWhite}>
        <FAQSection {...faq} />
      </div>

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
