import { LuBuilding2, LuServer, LuLayers3, LuChartColumn, LuNetwork, LuArrowRight } from "react-icons/lu";
import SectionLabel from "../../Common/SectionLabel";
import "./EnterpriseSolutions.css";

/**
 * "Enterprise Solutions" section for Home2 - a premium glassmorphism card
 * grid of SAP products.
 *
 * All styling lives in EnterpriseSolutions.css as plain (non-CSS-Modules)
 * classes, so class names stay exactly as written here - searchable in the
 * editor and readable in DevTools, with no build-time hashing.
 *
 * Layout is a deliberately asymmetric 6-column grid: the first two cards
 * span half the width each (the "featured" row), the remaining three
 * split the row below into thirds - a custom composition rather than a
 * uniform grid.
 */
const SOLUTIONS = [
  {
    icon: LuBuilding2,
    title: "SAP Business One",
    description: "Purpose-built ERP for small and midsize businesses, unifying finance, sales, inventory, and operations in one system.",
  },
  {
    icon: LuServer,
    title: "SAP S/4HANA",
    description: "The next-generation intelligent ERP suite, built on an in-memory database for real-time insight across the enterprise.",
  },
  {
    icon: LuLayers3,
    title: "SAP Business Technology Platform",
    description: "A unified platform to integrate, extend, and build intelligent applications on top of your SAP landscape.",
  },
  {
    icon: LuChartColumn,
    title: "SAP Analytics Cloud",
    description: "Business intelligence, planning, and predictive analytics combined in a single cloud-based solution.",
  },
  {
    icon: LuNetwork,
    title: "SAP Integration Suite",
    description: "Connect applications, data, and processes across cloud and on-premise systems with enterprise-grade integration tools.",
  },
];

export default function EnterpriseSolutions() {
  return (
    <section className="enterprise-section">
      <div className="enterprise-container">
        {/* Header: eyebrow label + title, styled to match the About Us heading */}
        <div className="enterprise-header">
          <SectionLabel title="Our Technology Expertise" />
          <h2 className="enterprise-title">Enterprise Solutions</h2>
        </div>

        {/* Description */}
        <p className="enterprise-description">
          Empowering businesses with industry-leading SAP technologies to build scalable, intelligent, and
          future-ready enterprise solutions.
        </p>

        {/* Technology Grid */}
        <div className="enterprise-grid">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              // Technology Card
              <div className="enterprise-card" key={solution.title}>
                <span className="enterprise-card-decoration" aria-hidden="true" />
                <span className="enterprise-card-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="enterprise-card-title">{solution.title}</h3>
                <span className="enterprise-card-divider" aria-hidden="true" />
                <p className="enterprise-card-description">{solution.description}</p>
                <span className="enterprise-card-arrow" aria-hidden="true">
                  <LuArrowRight />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
