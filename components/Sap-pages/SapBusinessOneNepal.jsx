import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import CenteredSection from "../Sap/common/CenteredSection";
import RichContent from "../Sap/common/RichContent";
import ImageTextSection from "../Sap/common/ImageTextSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { sapBusinessOneNepal } from "../../data/sap/sapBusinessOneNepal";
import styles from "./SapBusinessOneNepal.module.css";

export default function SapBusinessOneNepal() {
  const {
    hero,
    intro,
    whyChooseSap,
    whyChooseAyushman,
    capability,
    clients,
    services,
    news,
    blogs,
    caseStudies,
    ctaBanner,
    contactTeaser,
  } = sapBusinessOneNepal;

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
        <ImageTextSection {...whyChooseSap} />
      </div>

      <CenteredSection
        title={whyChooseAyushman.title}
        description={whyChooseAyushman.description}
        buttons={whyChooseAyushman.buttons}
        background={whyChooseAyushman.background}
        theme={whyChooseAyushman.theme}
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
        <NewsSection {...news} />
      </div>

      <div className={styles.tintLight}>
        <BlogSection {...blogs} />
      </div>

      <div className={styles.tintWhite}>
        <StoriesSection {...caseStudies} />
      </div>

      <CTASection {...ctaBanner} />

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
