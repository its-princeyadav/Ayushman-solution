import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { biManagedServices } from "../../data/analytics/biManagedServices";
import styles from "./BiManagedServices.module.css";

export default function BiManagedServices() {
  const {
    hero,
    intro,
    enterpriseFit,
    benefits,
    costEffective,
    clients,
    services,
    testimonials,
    blogs,
    caseStudies,
    cta,
    contactTeaser,
  } = biManagedServices;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} />

      <ImageTextSection {...enterpriseFit} />

      <CenteredSection title={benefits.title} background={benefits.background} theme="light">
        <StatsGrid items={benefits.items} theme="light" />
      </CenteredSection>

      <CenteredSection title={costEffective.title} description={costEffective.description} />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={services.title} items={services.items} />

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
