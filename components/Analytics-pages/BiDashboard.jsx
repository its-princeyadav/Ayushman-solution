import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import ImageTextSection from "../Sap/common/ImageTextSection";
import CenteredSection from "../Sap/common/CenteredSection";
import StatsGrid from "../Sap/common/StatsGrid";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import BlogSection from "../Sap/sections/BlogSection";
import FAQSection from "../Sap/sections/FAQSection";
import CTASection from "../Sap/CTA/CTASection";
import { biDashboard } from "../../data/analytics/biDashboard";

export default function BiDashboard() {
  const { hero, tableauServices, hrOneServices, glance, industryVertical, blogs, faq, cta } = biDashboard;

  return (
    <>
      <HeroBanner {...hero} />

      <ImageTextSection {...tableauServices} />

      <ImageTextSection {...hrOneServices} />

      <CenteredSection title={glance.title} description={glance.description}>
        <StatsGrid items={glance.items} />
      </CenteredSection>

      <FunctionalityGrid title={industryVertical.title} description={industryVertical.description} items={industryVertical.items} />

      <BlogSection {...blogs} />

      <FAQSection {...faq} />

      <div id="contact">
        <CTASection {...cta} />
      </div>
    </>
  );
}
