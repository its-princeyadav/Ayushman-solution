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
import CTASection from "../Sap/CTA/CTASection";
import { erpSoftwareBangalore } from "../../data/sap/erpSoftwareBangalore";
import styles from "./ErpSoftwareBangalore.module.css";

export default function ErpSoftwareBangalore() {
  const {
    hero,
    intro,
    whyIdeal,
    whyChooseUs,
    karnataka,
    capability,
    clients,
    services,
    news,
    blogs,
    ctaBanner,
    address,
    contactTeaser,
  } = erpSoftwareBangalore;

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

      <div className={styles.tintLight}>
        <CenteredSection title={karnataka.title} description={karnataka.description} compact />
        {karnataka.cities.map((city) => (
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

      <CTASection {...ctaBanner} />

      <ImageTextSection {...address} />

      <CenteredSection {...contactTeaser} />
    </div>
  );
}
