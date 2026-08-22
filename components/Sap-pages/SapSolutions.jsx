import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineCloud,
} from "react-icons/hi2";
import "../Sap/sap-tokens.css";
import HeroBanner from "../Sap/Hero/HeroBanner";
import PremiumSplitSection from "../Sap/common/PremiumSplitSection";
import PremiumEditionSection from "../Sap/common/PremiumEditionSection";
import ParallaxPromiseSection from "../Sap/common/ParallaxPromiseSection";
import CurvedCarousel from "../Common/CurvedCarousel/CurvedCarousel";
import curvedCarouselStyles from "../Common/CurvedCarousel/CurvedCarousel.module.css";
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
  ["testimonials", TestimonialsSection, sapSolutions.testimonials],
  ["cta", CTASection, sapSolutions.cta],
  ["news", NewsSection, sapSolutions.news],
  ["blog", BlogSection, sapSolutions.blogs],
  ["stories", StoriesSection, sapSolutions.stories],
  ["faq", FAQSection, sapSolutions.faq],
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
  cpuChip: <HiOutlineCpuChip />,
  cloud: <HiOutlineCloud />,
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
  // href -> buttonLink: this data file's own convention for every other
  // link field is `href` (see cta/buttons/functionalityGrid/industries
  // above), but CurvedCarouselCard's real prop contract - confirmed against
  // its own dev-preview benchmark page - is `buttonLink`. Without this
  // rename each card's "Learn More" silently never renders, since
  // `{buttonText && buttonLink && <Link .../>}` never finds a buttonLink.
  // badge/accentColor: matches the Dribbble reference's numbered cards
  // (#01, #02, ...) - one shared accent (this page's own --sap-blue token,
  // not a different color per card) so the badges/icons read as on-brand
  // polish rather than an arbitrary rainbow across an otherwise
  // navy/blue SAP page.
  const benefitCarouselItems = sapSolutions.benefits.features.map(({ href, ...feature }, index) => ({
    ...feature,
    buttonLink: href,
    icon: BENEFIT_ICONS[feature.icon],
    badge: String(index + 1).padStart(2, "0"),
    accentColor: "var(--sap-blue)",
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
      {/* paddingBlock: unlike its siblings on this page (CenteredSection,
          PremiumSplitSection, etc.), this section has no shared .section
          class of its own supplying the page's usual vertical rhythm -
          without this the CTA sat flush against wherever
          TestimonialsSection's own top padding began. */}
      <section data-sap-reveal style={{ paddingBlock: "var(--sap-section-gap)" }}>
        <Container>
          {/* eyebrow/description: every other section on this page
              (Who Needs It, Empowering Businesses, Digital Transformation)
              leads with an eyebrow + heading + short description - this
              one previously jumped straight to a bare heading, the odd one
              out in the page's own established rhythm. */}
          {sapSolutions.benefits.eyebrow && (
            <SectionLabel title={sapSolutions.benefits.eyebrow} align="center" />
          )}
          <SectionHeading
            title={sapSolutions.benefits.title}
            description={sapSolutions.benefits.description}
            align="center"
          />
        </Container>
        {/* visibleCards=5, not the preview route's 7: there are 5 real
            benefits here (2 new ones added alongside the original 3), and
            ensureMinimumSlides pads short lists by cloning - 5 exactly
            matches the real item count, so nothing ever needs padding and
            no duplicate ever appears in the arc at once. cardWidth=340
            (the preview's own default) - a wider 380 was tried, but the
            arc's spacing scales off cardWidth, and at 380 the full
            5-card arc's total width (~1940px, computed from the actual
            arc-spacing formula) exceeded a typical 1920px viewport,
            which read as an asymmetric "missing card" on whichever side
            the browser's scrollbar happened to eat into - the geometry
            itself is symmetric, so this was a plain overflow, not a
            positioning bug. 340 keeps the whole arc comfortably within
            frame with margin on both sides. cardHeight (280, well short
            of the preview's 440) keeps these landscape rather than
            portrait - a tall card read as too vertically heavy for this
            section.
            autoPlay/autoPlayDelay bring this in line with the homepage
            hero carousel - the carousel already fully supports
            pause-on-hover/focus and skips autoplay under
            prefers-reduced-motion on its own. activeScale=1.3 (inactiveScale
            left at its default 1) makes the active card win out as the
            clear focal point - the engine's own CENTER_SCALE/EDGE_SCALE
            deliberately taper the *inactive* cards larger toward the
            outer edge (see CurvedCarousel.jsx's own docblock on that
            inverted-hierarchy choice), so leaving inactiveScale alone
            preserves that progression exactly as designed; boosting only
            activeScale pushes the active card's size past all of them
            without touching how the flanking cards taper relative to each
            other. */}
        {/* onLight: this section's background is plain white, not the
            dark/photo backdrop CurvedCarousel's pagination dots assume by
            default (near-white, ~40% opacity) - without this the dots
            render but are invisible against the page. The nav arrows
            don't need it; they already carry their own solid circle.
            curveIntensity=0.4 (default 1): the trapezoid clip-path's
            corner taper scales with this - at full intensity even the
            *active* card's own left/right edges lose ~40% of their
            height to the taper (confirmed numerically, not a guess),
            clipping the badge and title/description near those edges.
            0.4 caps the worst-case corner inset around 25px at this
            cardHeight, which .cardBadge/.cardContent's repositioning
            (see CurvedCarousel.module.css - recalculated whenever
            cardHeight changes here, both need to stay in sync) clears
            with margin - badge shows on every card, not just the active
            one, so it has to survive the worst taper case (the
            outermost visible cards), not just the active card's own
            (milder) one. Still a real curve/depth effect at 0.4, just
            not the full, most-aggressive taper. */}
        {/* animationDuration={600} - already the component's own default,
            made explicit here because CurvedCarousel.module.css's
            .onLight reduced-motion override hardcodes this same 600ms to
            match (see that file) - keep both in sync if this ever
            changes. */}
        <CurvedCarousel
          items={benefitCarouselItems}
          visibleCards={5}
          cardWidth={340}
          cardHeight={280}
          autoPlay
          autoPlayDelay={5500}
          activeScale={1.3}
          curveIntensity={0.4}
          animationDuration={600}
          className={curvedCarouselStyles.onLight}
        />
        {/* Each card's own "Learn More" is still a per-benefit link, but
            those are all `href: "#"` placeholders for now (see the data
            file) - a single section-level CTA gives visitors a real next
            step in the meantime. Same PillButton as the "Empowering
            Businesses" section above, but visibly smaller here via the
            --pillbtn-* size overrides (see PillButton.css) - full size
            reads as bloated directly under a fairly compact carousel;
            the other usage sits in a much more spacious section where
            the default size is proportionate. */}
        {sapSolutions.benefits.cta && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <PillButton
              label={sapSolutions.benefits.cta.label}
              href={sapSolutions.benefits.cta.href}
              icon={HiOutlineChatBubbleLeftRight}
              style={{
                "--pillbtn-min-width": "0px",
                "--pillbtn-padding-block": "11px",
                "--pillbtn-padding-inline": "22px",
                "--pillbtn-font-size": "0.8rem",
                "--pillbtn-icon-size": "26px",
              }}
            />
          </div>
        )}
      </section>

      {BOTTOM_HALF.map(([sectionKey, Section, props]) => (
        <Section key={sectionKey} {...props} />
      ))}
    </>
  );
}
