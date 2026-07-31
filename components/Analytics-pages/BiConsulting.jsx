import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import CheckList from "../Sap/common/CheckList";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { biConsulting } from "../../data/analytics/biConsulting";
import styles from "./BiConsulting.module.css";

export default function BiConsulting() {
  const {
    hero,
    intro,
    realizeData,
    industryFit,
    roi,
    approach,
    clients,
    servicesGrid,
    testimonials,
    blogs,
    caseStudies,
    cta,
    contactTeaser,
  } = biConsulting;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} buttons={intro.buttons} />

      <ImageTextSection {...realizeData} />

      <CenteredSection
        title={industryFit.title}
        description={industryFit.description}
        buttons={industryFit.buttons}
        background={industryFit.background}
      />

      <CenteredSection title={roi.title} description={roi.description} />

      <CenteredSection title={approach.title} description={approach.description} background={approach.background}>
        <div className="sap-prose">
          <CheckList items={approach.bullets} />
        </div>
      </CenteredSection>

      <ClientsSection {...clients} />

      <FunctionalityGrid title={servicesGrid.title} items={servicesGrid.items} />

      <TestimonialsSection {...testimonials} />

      <BlogSection {...blogs} />

      <StoriesSection {...caseStudies} />

      <CTASection {...cta} />

      <div id="contact">
        <CenteredSection {...contactTeaser} />
      </div>
    </div>
  );
}
