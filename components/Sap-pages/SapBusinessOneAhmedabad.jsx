import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import CheckList from "../Sap/common/CheckList";
import RichContent from "../Sap/common/RichContent";
import ImageTextSection from "../Sap/common/ImageTextSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import { sapBusinessOneAhmedabad } from "../../data/sap/sapBusinessOneAhmedabad";
import styles from "./SapBusinessOneAhmedabad.module.css";

export default function SapBusinessOneAhmedabad() {
  const {
    hero,
    whyChooseUs,
    businessHub,
    localPresence,
    businessGrowth,
    growthCta,
    benefits,
    stats,
    clients,
    services,
    mobility,
    blogs,
    caseStudies,
    contactTeaser,
  } = sapBusinessOneAhmedabad;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <CenteredSection title={whyChooseUs.title} description={whyChooseUs.description} buttons={whyChooseUs.buttons} />
      </div>

      <div className={styles.tintLight}>
        <CenteredSection title={businessHub.title}>
          <div className={styles.centeredCopy}>
            <RichContent description={businessHub.paragraphs} theme="dark" />
          </div>
        </CenteredSection>
      </div>

      <div className={styles.tintWhite}>
        <ImageTextSection {...localPresence} />
      </div>

      <div className={styles.tintLight}>
        <CenteredSection title={businessGrowth.title} description={businessGrowth.description} />
      </div>

      <div className={styles.tintWhite}>
        <ImageTextSection {...growthCta} />
      </div>

      <CenteredSection
        title={benefits.title}
        description={benefits.description}
        buttons={benefits.buttons}
        background={benefits.background}
        theme="light"
      >
        <div className={styles.checklistBody}>
          <CheckList items={benefits.checklist} theme="light" />
          <p className={styles.checklistTrailing}>{benefits.trailingText}</p>
        </div>
      </CenteredSection>

      <div className={styles.tintWhite}>
        <CenteredSection title={stats.title} description={stats.description}>
          <StatsGrid items={stats.items} />
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

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
