import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import ImageTextSection from "../Sap/common/ImageTextSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { sapBusinessOneRajasthan } from "../../data/sap/sapBusinessOneRajasthan";
import styles from "./SapBusinessOneRajasthan.module.css";

export default function SapBusinessOneRajasthan() {
  const {
    hero,
    intro,
    whyIdeal,
    whyChooseUs,
    capability,
    clients,
    services,
    blogs,
    caseStudies,
    ctaBanner,
    contactTeaser,
  } = sapBusinessOneRajasthan;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <CenteredSection title={intro.title} description={intro.description} />
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

      <div className={styles.tintWhite}>
        <CenteredSection title={capability.title} description={capability.description}>
          <StatsGrid items={capability.items} />
        </CenteredSection>
      </div>

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

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
