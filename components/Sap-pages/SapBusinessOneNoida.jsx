import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import ImageTextSection from "../Sap/common/ImageTextSection";
import BenefitsSection from "../Sap/sections/BenefitsSection";
import TimelineTabs from "../Sap/Timeline/TimelineTabs";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapBusinessOneNoida } from "../../data/sap/sapBusinessOneNoida";
import styles from "./SapBusinessOneNoida.module.css";

export default function SapBusinessOneNoida() {
  const {
    hero,
    intro,
    cityBusiness,
    localBenefits,
    erpLifecycle,
    whySapStandsOut,
    timeline,
    capability,
    clients,
    services,
    blogs,
    caseStudies,
    ctaBanner,
    faq,
    contactTeaser,
  } = sapBusinessOneNoida;

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

      <div className={styles.tintCream}>
        <ImageTextSection {...cityBusiness} />
      </div>

      <div className={styles.tintWhite}>
        <CenteredSection
          title={localBenefits.title}
          description={localBenefits.description}
          buttons={localBenefits.buttons}
        >
          <BenefitsSection features={localBenefits.items} showDots={false} />
          <div className={styles.centeredCopy}>
            <RichContent description={localBenefits.closingParagraphs} theme="dark" />
          </div>
        </CenteredSection>
      </div>

      <ImageTextSection {...erpLifecycle} />

      <CenteredSection
        title={whySapStandsOut.title}
        description={whySapStandsOut.description}
        subtitle={whySapStandsOut.subtitle}
        background={whySapStandsOut.background}
        buttons={[whySapStandsOut.button]}
        theme="light"
      >
        <div className={styles.whySapGrid}>
          {whySapStandsOut.items.map((item) => (
            <div className={styles.whySapItem} key={item.title}>
              <h3 className={styles.whySapItemTitle}>{item.title}</h3>
              <p className={styles.whySapItemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.whySapCentered}>
          <h3 className={styles.whySapItemTitle}>{whySapStandsOut.centeredItem.title}</h3>
          <p className={styles.whySapItemDescription}>{whySapStandsOut.centeredItem.description}</p>
        </div>
      </CenteredSection>

      <TimelineTabs {...timeline} />

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

      <div className={styles.tintWhite}>
        <FAQSection {...faq} />
      </div>

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
