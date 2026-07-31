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
import { biDevelopment } from "../../data/analytics/biDevelopment";
import styles from "./BiDevelopment.module.css";

export default function BiDevelopment() {
  const {
    hero,
    intro,
    standard,
    customized,
    dataProblems,
    challenges,
    solutions,
    clients,
    expertise,
    testimonials,
    blogs,
    caseStudies,
    cta,
    contactTeaser,
  } = biDevelopment;

  return (
    <div className={styles.scope}>
      <HeroBanner {...hero} />

      <CenteredSection title={intro.title} description={intro.description} />

      <ImageTextSection {...standard} />

      <CenteredSection title={customized.title} description={customized.description} buttons={customized.buttons} />

      <CenteredSection title={dataProblems.title} />
      <ImageTextSection {...challenges} />
      <ImageTextSection {...solutions} />

      <ClientsSection {...clients} />

      <FunctionalityGrid title={expertise.title} items={expertise.items} />

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
