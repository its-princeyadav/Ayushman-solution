import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import CTASection from "../Sap/CTA/CTASection";
import CenteredSection from "../Sap/common/CenteredSection";
import { sapBusinessOneMigration } from "../../data/sap/sapBusinessOneMigration";
import styles from "./SapBusinessOneMigration.module.css";

export default function SapBusinessOneMigration() {
  const {
    hero,
    packages,
    businessIntro,
    awards,
    clients,
    migrationProcess,
    news,
    blogs,
    ctaBanner,
    contactTeaser,
  } = sapBusinessOneMigration;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <BenefitsSection title={packages.title} features={packages.features} showDots={false} />
      </div>

      <ImageTextSection {...businessIntro} />

      <TimelineTabs {...awards} />

      <div className={styles.tintLight}>
        <ClientsSection {...clients} />
      </div>

      <div className={styles.tintWhite}>
        <FunctionalityGrid title={migrationProcess.title} items={migrationProcess.items} />
      </div>

      <div className={styles.tintGradient}>
        <NewsSection {...news} />
      </div>

      <div className={styles.tintWhite}>
        <BlogSection {...blogs} />
      </div>

      <CTASection {...ctaBanner} />

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
