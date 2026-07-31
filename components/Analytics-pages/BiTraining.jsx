import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import ClientsSection from "../Sap/sections/ClientsSection";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import CTASection from "../Sap/CTA/CTASection";
import { biTraining } from "../../data/analytics/biTraining";
import styles from "./BiTraining.module.css";

export default function BiTraining() {
  const {
    hero,
    intro,
    businessAnalytics,
    personalized,
    clients,
    benefits,
    skillsBanner,
    inHouseBanner,
    expertsBanner,
    testimonials,
    blogs,
    caseStudies,
    cta,
    contactTeaser,
  } = biTraining;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} />

      <ImageTextSection {...businessAnalytics} />

      <CenteredSection title={personalized.title} description={personalized.description} buttons={personalized.buttons} />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={benefits.title} items={benefits.items} />

      <HeroBanner {...skillsBanner} />
      <HeroBanner {...inHouseBanner} />
      <HeroBanner {...expertsBanner} />

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
