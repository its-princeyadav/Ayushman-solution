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
import { erpSoftwareHyderabad } from "../../data/sap/erpSoftwareHyderabad";
import styles from "./ErpSoftwareHyderabad.module.css";

export default function ErpSoftwareHyderabad() {
  const {
    hero,
    intro,
    whyIdeal,
    whyChooseUs,
    timeline,
    telangana,
    capability,
    clients,
    services,
    news,
    blogs,
    caseStudies,
    ctaBanner,
    address,
    contactTeaser,
  } = erpSoftwareHyderabad;

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

      <div className={styles.tintLight}>
        <CenteredSection title={telangana.title} description={telangana.description} compact />
        {telangana.cities.map((city) => (
          <ImageTextSection key={city.title} {...city} />
        ))}
      </div>

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

      <ImageTextSection {...address} />

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
