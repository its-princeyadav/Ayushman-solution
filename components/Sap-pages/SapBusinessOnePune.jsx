import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import Container from "../Sap/common/Container";
import SectionHeading from "../Sap/common/SectionHeading";
import FeatureCard from "../Sap/Cards/FeatureCard";
import ImageTextSection from "../Sap/common/ImageTextSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOnePune } from "../../data/sap/sapBusinessOnePune";
import styles from "./SapBusinessOnePune.module.css";

export default function SapBusinessOnePune() {
  const {
    hero,
    intro,
    puneLandscape,
    consultingBenefits,
    implementation,
    whySap,
    capability,
    clients,
    services,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOnePune;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <div className={styles.tintWhite}>
        <CenteredSection title={intro.title} description={intro.description} buttons={intro.buttons} />
      </div>

      <div className={styles.tintLight}>
        <ImageTextSection {...puneLandscape} />
      </div>

      <div className={styles.tintWhite}>
        <Container>
          <SectionHeading title={consultingBenefits.title} description={consultingBenefits.description} align="center" />
          <div className={styles.benefitsGrid}>
            {consultingBenefits.items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
          <p className={styles.benefitsClosing}>{consultingBenefits.closingStatement}</p>
        </Container>
      </div>

      <div className={styles.tintLight}>
        <ImageTextSection {...implementation} />
      </div>

      <CenteredSection
        title={whySap.title}
        description={whySap.description}
        buttons={whySap.buttons}
        background={whySap.background}
        theme="light"
      />

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
