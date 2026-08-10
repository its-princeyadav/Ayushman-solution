import { LuBriefcase, LuCloud, LuZap } from "react-icons/lu";
import "./EnterpriseSolutions.css";

const FEATURES = [
  {
    icon: LuBriefcase,
    title: "Enterprise SAP Strategy",
    description:
      "We help you plan and deploy SAP solutions that align with business goals, reduce risk, and accelerate digital transformation.",
  },
  {
    icon: LuCloud,
    title: "Cloud & Infrastructure",
    description:
      "Modernize your IT landscape with secure cloud architecture, hybrid SAP hosting, and managed infrastructure services.",
  },
  {
    icon: LuZap,
    title: "Business Automation",
    description:
      "Automate processes, improve collaboration, and deliver measurable ROI with intelligent enterprise workflows.",
  },
];

export default function EnterpriseSolutions() {
  return (
    <section className="enterpriseSolutions-section">
      <div className="enterpriseSolutions-content">
        <div className="enterpriseSolutions-header">
          <span className="enterpriseSolutions-label">Enterprise Solutions</span>
          <h2 className="enterpriseSolutions-title">
            Intelligent business systems for fast-growing enterprises.
          </h2>
          <p className="enterpriseSolutions-copy">
            Ayushman Solution delivers end-to-end SAP and technology services designed to make enterprise operations more agile, secure,
            and future-ready.
          </p>
        </div>

        <div className="enterpriseSolutions-grid">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="enterpriseSolutions-card" key={feature.title}>
                <span className="enterpriseSolutions-cardIcon">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="enterpriseSolutions-cardTitle">{feature.title}</h3>
                <p className="enterpriseSolutions-cardDesc">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
