import { FaBullseye, FaCode, FaHeadset, FaPlug, FaChartLine, FaExpandArrowsAlt } from "react-icons/fa";
import CurvedCarousel from "../../../components/Common/CurvedCarousel/CurvedCarousel";

// Temporary, isolated preview route used only to visually verify
// CurvedCarousel phase-by-phase during development - not linked from
// anywhere, not part of the real site navigation. Safe to delete once the
// component is wired into its real destination.
const SAMPLE_ITEMS = [
  {
    id: 1,
    image: "/assets/image2/sap-hero.png",
    title: "Strategy & Planning",
    description: "Align roadmap, budget, and stakeholders before a single line of config is touched.",
    icon: <FaBullseye />,
    accentColor: "#2563eb",
    badge: "Step 1",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    id: 2,
    image: "/assets/image2/hero-sap-network.png",
    title: "Design & Development",
    description: "Solution architecture, custom builds, and integrations mapped to your process.",
    icon: <FaCode />,
    accentColor: "#7c3aed",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    id: 3,
    image: "/assets/image2/sap4hana.png",
    title: "Launch & Growth",
    // Intentionally no description/icon/badge/CTA - verifies the card
    // still renders cleanly with only image + title.
  },
  {
    id: 4,
    image: "/assets/image2/modern-sap-migration.webp",
    title: "Ongoing Support",
    description: "24/7 monitoring and a dedicated team for whatever comes up post-launch.",
    icon: <FaHeadset />,
    accentColor: "#059669",
    badge: "Popular",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    id: 5,
    image: "/assets/image2/sap-migration-01.webp",
    title: "Integration",
    description: "Connect SAP to the rest of your stack without brittle point-to-point hacks.",
    icon: <FaPlug />,
    accentColor: "#dc2626",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    id: 6,
    image: "/assets/image2/sap-migration-02.webp",
    title: "Optimization",
    description: "Tune performance and cost once the system is live and under real load.",
    icon: <FaChartLine />,
    accentColor: "#d97706",
  },
  {
    id: 7,
    image: "/assets/image2/sap-migration-03.webp",
    title: "Scale",
    description: "Extend to new regions, entities, and business units on the same foundation.",
    icon: <FaExpandArrowsAlt />,
    accentColor: "#0891b2",
    badge: "New",
    buttonText: "Learn more",
    buttonLink: "#",
  },
];

export default function CurvedCarouselPreviewPage() {
  return (
    <main style={{ padding: "80px 24px", background: "#0f172a", minHeight: "100vh" }}>
      <CurvedCarousel
        items={SAMPLE_ITEMS}
        visibleCards={7}
        cardWidth={280}
        cardHeight={420}
        autoPlay
        autoPlayDelay={4000}
        loop
        showNavigation
        showPagination
      />
    </main>
  );
}
