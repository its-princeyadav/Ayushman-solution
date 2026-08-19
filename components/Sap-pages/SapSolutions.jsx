import { HiOutlineChatBubbleLeftRight, HiOutlineBolt, HiOutlineCheckCircle, HiOutlineShieldCheck } from "react-icons/hi2";
import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import PremiumSplitSection from "../Sap/common/PremiumSplitSection";
import PremiumEditionSection from "../Sap/common/PremiumEditionSection";
import ParallaxPromiseSection from "../Sap/common/ParallaxPromiseSection";
import CurvedCarousel from "../Common/CurvedCarousel/CurvedCarousel";
import SectionHeading from "../Sap/common/SectionHeading";
import SectionLabel from "../Common/SectionLabel";
import Container from "../Sap/common/Container";
import CenteredSection from "../Sap/common/CenteredSection";
import PillButton from "../Common/PillButton";
import StatsGrid from "../Sap/common/StatsGrid";
import FunctionalityGrid from "../Sap/sections/FunctionalityGrid";
import IndustryOrbit from "../Sap/Industries/IndustryOrbit";
import TestimonialsSection from "../Sap/sections/TestimonialsSection";
import CTASection from "../Sap/CTA/CTASection";
import NewsSection from "../Sap/sections/NewsSection";
import BlogSection from "../Sap/sections/BlogSection";
import StoriesSection from "../Sap/sections/StoriesSection";
import FAQSection from "../Sap/sections/FAQSection";
import { sapSolutions } from "../../data/sap/sapSolutions";

// The back half of every SAP page (Testimonials through FAQ) is identical
// across Solutions/Services/Support/Practices/Business One — only the data
// differs — so it stays a plain reusable list. Benefits is no longer part
// of it here: this page renders its own CurvedCarousel version instead of
// the shared BenefitsSection/Slider combo (see below) - the other 4 pages
// still use BenefitsSection unchanged, since they import their own
// separate data files, not this one. The front half is page-specific
// content (S/4HANA intro, awards timeline, editions, stats, industries,
// ...), so it's composed explicitly below in the same top-to-bottom order
// as the reference.
const BOTTOM_HALF = [
  [TestimonialsSection, sapSolutions.testimonials],
  [CTASection, sapSolutions.cta],
  [NewsSection, sapSolutions.news],
  [BlogSection, sapSolutions.blogs],
  [StoriesSection, sapSolutions.stories],
  [FAQSection, sapSolutions.faq],
];

// Maps the plain string key each data/sap/sapSolutions.js benefit carries
// (data files stay plain/serializable, per this project's convention) to an
// actual rendered icon element - CurvedCarousel is a Client Component, so
// `icon` has to already be an element (not a bare component reference) by
// the time it crosses the Server->Client boundary (see
// CurvedCarouselCard's own docblock for why).
const BENEFIT_ICONS = {
  bolt: <HiOutlineBolt />,
  checkCircle: <HiOutlineCheckCircle />,
  shieldCheck: <HiOutlineShieldCheck />,
};

export default function SapSolutions() {
  const {
    eyebrow: cloudEditionsEyebrow,
    heading,
    background,
    public: publicEdition,
    private: privateEdition,
  } = sapSolutions.cloudEditions;
  const { background: dtBackground, intro: dtIntro, stats: dtStats } = sapSolutions.digitalTransformation;
  const benefitCarouselItems = sapSolutions.benefits.features.map((feature) => ({
    ...feature,
    icon: BENEFIT_ICONS[feature.icon],
  }));

  return (
    <>
      <HeroBanner {...sapSolutions.hero} />
      <PremiumSplitSection {...sapSolutions.s4hanaIntro} />

      <section style={{ background, paddingBlock: "var(--sap-section-gap)" }}>
        <Container>
          {cloudEditionsEyebrow && <SectionLabel title={cloudEditionsEyebrow} align="center" />}
          <SectionHeading title={heading} align="center" />
        </Container>
        <PremiumEditionSection {...publicEdition} />
        <PremiumEditionSection {...privateEdition} />
      </section>

      <CenteredSection {...sapSolutions.whoNeedsIt} />

      <CenteredSection
        eyebrow={sapSolutions.empowering.eyebrow}
        title={sapSolutions.empowering.title}
        highlight={sapSolutions.empowering.highlight}
        titleDivider={sapSolutions.empowering.titleDivider}
        decorative={sapSolutions.empowering.decorative}
        description={sapSolutions.empowering.description}
      >
        <StatsGrid items={sapSolutions.empowering.stats} />
        {/* Same action/href as before (sapSolutions.empowering.buttons[0])
            - only the visual implementation changed, from the shared
            Button (via CenteredSection's own `buttons` prop) to the new
            reusable PillButton. Rendered as a child instead of via
            `buttons` so this swap stays local to this one CTA instead of
            changing what CenteredSection's `buttons` prop renders
            everywhere else it's used. */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
          <PillButton
            label={sapSolutions.empowering.buttons[0].label}
            href={sapSolutions.empowering.buttons[0].href}
            icon={HiOutlineChatBubbleLeftRight}
          />
        </div>
      </CenteredSection>

      {/* Double-dash heading, "Digital Transformation" heading directly
          under it, then feature cards, then centered copy (image dropped
          - see CenteredSection below, which handles the paragraph on its
          own since the title now lives up here instead). paddingTop
          restores the top breathing room ImageTextSection used to provide
          back when it was the first element in this section. */}
      <section style={{ background: dtBackground, paddingTop: "var(--sap-section-gap)" }}>
        <Container>
          <SectionLabel title="Key Benefits" align="center" />
          {/* Gap between the headings and the cards below - scoped here via
              inline style rather than editing SectionHeading's shared CSS,
              since that class is reused by ~8 other sections that shouldn't
              be affected by a change meant for this one heading only. */}
          <div style={{ marginBottom: 112 }}>
            <SectionHeading title={dtIntro.title} align="center" />
          </div>
        </Container>
        <Container>
          {/* Tighter than the full section gap - this cards->paragraph gap
              is within one subsection, not between two sections. */}
          <div style={{ paddingBottom: 32 }}>
            <StatsGrid items={dtStats} />
          </div>
        </Container>
        {/* Title omitted here (already shown above) - CenteredSection
            renders just the centered paragraph(s), reusing the same
            premium typography already used for "Who Needs It"/"Empowering
            Businesses" instead of duplicating that CSS. `compact` (an
            existing opt-in prop on CenteredSection) trims its own
            padding-block so it doesn't add another full section-gap on
            top of the 32px above. */}
        <CenteredSection description={dtIntro.description} background="transparent" compact />
      </section>

      <ParallaxPromiseSection {...sapSolutions.enhancedAdoption} />

      <FunctionalityGrid {...sapSolutions.functionalityGrid} />
      <IndustryOrbit {...sapSolutions.industries} />

      {/* Same position/heading BenefitsSection used to render at (right
          before the shared Testimonials-through-FAQ block) - only the
          card layout changed, from the old white FeatureCard Slider to
          the reusable CurvedCarousel, per request. Reuses CurvedCarousel
          exactly as built (same math/props/engine); only the data + this
          page's own icon-key mapping are new. */}
      <section data-sap-reveal>
        <Container>
          <SectionHeading title={sapSolutions.benefits.title} align="center" />
        </Container>
        {/* visibleCards=7 (matching the preview route's own configuration,
            the visual benchmark) even though there are only 3 real
            benefits - CurvedCarousel pads short item lists with clones
            automatically (see ensureMinimumSlides) so the arc still forms
            properly instead of collapsing into 3 cramped cards. */}
        <CurvedCarousel items={benefitCarouselItems} visibleCards={7} cardWidth={340} cardHeight={440} />
      </section>

      {BOTTOM_HALF.map(([Section, props]) => (
        <Section key={Section.name} {...props} />
      ))}
    </>
  );
}
