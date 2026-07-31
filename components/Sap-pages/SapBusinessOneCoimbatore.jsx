import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { sapBusinessOneCoimbatore } from "../../data/sap/sapBusinessOneCoimbatore";
import styles from "./SapBusinessOneCoimbatore.module.css";

export default function SapBusinessOneCoimbatore() {
  const {
    hero,
    intro,
    sapPartner,
    itSector,
    capability,
    topSap,
    clients,
    services,
    news,
    blogs,
    caseStudies,
    ctaBanner,
    contactTeaser,
  } = sapBusinessOneCoimbatore;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <CenteredSection title={intro.title} description={intro.description} buttons={intro.buttons} />
      </div>

      <div className={styles.tintLight}>
        <ImageTextSection {...sapPartner} />
      </div>

      <CenteredSection
        title={itSector.title}
        description={itSector.description}
        buttons={itSector.buttons}
        background={itSector.background}
        theme="light"
      />

      <div className={styles.tintWhite}>
        <CenteredSection title={capability.title} description={capability.description}>
          <StatsGrid items={capability.items} />
        </CenteredSection>
      </div>

      <div className={styles.tintWhite}>
        <CenteredSection title={topSap.title} description={topSap.description} compact />
      </div>

      <ClientsSection {...clients} />

      <div className={styles.tintLight}>
        <FunctionalityGrid title={services.title} description={services.description} items={services.items} />
      </div>

      <div className={styles.tintLight}>
        <NewsSection {...news} />
      </div>

      <div className={styles.tintLight}>
        <BlogSection {...blogs} />
      </div>

      <div className={styles.tintLight}>
        <StoriesSection {...caseStudies} />
      </div>

      <CTASection {...ctaBanner} />

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
