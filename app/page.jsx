import Link from "next/link";
import {
  LuLayers,
  LuUsers,
  LuCloud,
  LuZap,
  LuArrowRight,
  LuChartColumn,
  LuMonitor,
  LuRefreshCw,
  LuShieldCheck,
  LuArrowUpRight,
  LuCompass,
} from "react-icons/lu";
import SectionLabel from "../components/Common/SectionLabel";
import Hero from "../components/Hero/Hero";
import WhyBusinessesChooseUs from "../components/Home2/WhyBusinessesChooseUs/WhyBusinessesChooseUs";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "../data/contactInfo";
import "./home-theme.css";
import styles from "./page.module.css";

const SERVICE_TAGS = ["SAP Implementation", "IT Consulting", "Digital Transformation", "Cloud Solutions"];

const SERVICE_CARDS = [
  {
    icon: LuLayers,
    title: "SAP Implementation",
    description: "End-to-end ERP deployment with industry best practices.",
  },
  {
    icon: LuUsers,
    title: "IT Consulting",
    description: "Strategic guidance for scalable enterprise transformation.",
  },
  {
    icon: LuCloud,
    title: "Cloud Solutions",
    description: "Secure cloud migration and intelligent infrastructure.",
  },
  {
    icon: LuZap,
    title: "Digital Transformation",
    description: "Automate processes and improve business efficiency.",
  },
];

// "About Us" section content - copy taken verbatim from the client's
// reference mockup (its id="services" section).
const ABOUT_SERVICE_CARDS = [
  {
    icon: LuCompass,
    title: "Digital Strategy",
    description: "Business process consulting and technology roadmaps aligned to measurable outcomes.",
    checklist: ["Process assessment", "Transformation roadmap", "Solution architecture"],
  },
  {
    icon: LuCloud,
    title: "Cloud & IT",
    description: "Secure, scalable infrastructure and managed technology services for modern enterprises.",
    checklist: ["Cloud hosting", "IT infrastructure", "Managed support"],
  },
  {
    icon: LuChartColumn,
    title: "Data & Analytics",
    description: "Turn operational data into dashboards, forecasts and decisions your teams can act on.",
    checklist: ["Power BI dashboards", "SAP reporting", "Business intelligence"],
  },
  {
    icon: LuZap,
    title: "Automation",
    description: "Connect applications and automate repetitive workflows for speed, control and scale.",
    checklist: ["API integration", "Workflow automation", "Custom add-ons"],
  },
];

// SAP Business One band - copy taken verbatim from the client's own
// reference mockup (its id="sap" section).
const SAP_B1_FEATURES = [
  {
    number: "01",
    title: "Implementation",
    description: "Fit-to-business SAP B1 deployment, configuration, data migration and user enablement.",
  },
  {
    number: "02",
    title: "Customization & Add-ons",
    description: "Tailored workflows, reports, approvals and integrations for your processes.",
  },
  {
    number: "03",
    title: "Integration",
    description: "Connect SAP with e-commerce, CRM, banking, logistics and custom applications.",
  },
  {
    number: "04",
    title: "AMC & Support",
    description: "Responsive support, upgrades, monitoring and continuous improvement after go-live.",
  },
];

// Cloud ERP section - copy taken verbatim from the client's reference
// mockup (its id="cloud" section).
const CLOUD_CARDS = [
  {
    icon: LuCloud,
    title: "Cloud ERP",
    description: "Access your business system securely from anywhere and scale as you grow.",
  },
  {
    icon: LuRefreshCw,
    title: "Backup & DR",
    description: "Business continuity planning, automated backups and recovery readiness.",
  },
  {
    icon: LuShieldCheck,
    title: "Security",
    description: "Identity, network and endpoint controls designed for enterprise operations.",
  },
  {
    icon: LuArrowUpRight,
    title: "Managed Cloud",
    description: "Monitoring, maintenance and technical support from a dedicated team.",
  },
];

const WHY_US_CARDS = [
  {
    icon: LuUsers,
    title: "SAP Consulting Team",
    description: "Certified SAP professionals delivering implementation, migration, customization, upgrades, and support.",
  },
  {
    icon: LuMonitor,
    title: "Digital Transformation Team",
    description: "Experts in business process optimization, automation, cloud adoption, and enterprise modernization.",
  },
  {
    icon: LuCloud,
    title: "Managed IT Services",
    description: "End-to-end infrastructure management, cloud monitoring, security, and ongoing technical support for business continuity.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.expertise}>
        <div className={styles.expertiseInner}>
          <SectionLabel title="Our SAP Expertise" className={styles.expertiseLabelRow} />

          <div className={styles.expertiseIntro}>
            <h2 className={styles.expertiseTitle}>
              Transform Your Business with
              <br />
              Intelligent <span className={styles.expertiseTitleAccent}>SAP Solutions</span>
            </h2>
            <p className={styles.expertiseDesc}>
              We help organizations accelerate digital transformation through{" "}
              <strong className={styles.expertiseDescHighlight}>SAP Implementation</strong>,{" "}
              <strong className={styles.expertiseDescHighlight}>IT Consulting</strong>,{" "}
              <strong className={styles.expertiseDescHighlight}>Cloud Solutions</strong>, and{" "}
              <strong className={styles.expertiseDescHighlight}>Enterprise Automation</strong>. Our experts
              deliver scalable, secure, and future-ready SAP ecosystems tailored to your business.
            </p>
            <ul className={styles.expertiseTags}>
              {SERVICE_TAGS.map((tag) => (
                <li key={tag} className={styles.expertiseTag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.expertiseCta}>
            <Link href="#" className={styles.ctaPrimary}>
              Get Started Today
              <LuArrowRight aria-hidden="true" className={styles.ctaPrimaryArrow} />
            </Link>
            <Link href="#" className={styles.ctaSecondary}>
              Book a Free SAP Consultation
            </Link>
          </div>

          <div className={styles.expertiseCards}>
            {SERVICE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div className={styles.expertiseCard} key={card.title}>
                  <span className={styles.expertiseCardIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className={styles.expertiseCardTitle}>{card.title}</h3>
                  <p className={styles.expertiseCardDesc}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sapBand}>
        <div className={styles.sapBandInner}>
          <div className={styles.sapBandCard}>
            <div className={styles.sapBandGrid}>
              <div>
                <span className={styles.sapBandEyebrow}>SAP Business One</span>
                <h2 className={styles.sapBandTitle}>Run your business on one intelligent ERP.</h2>
                <p className={styles.sapBandDesc}>
                  Manage finance, sales, purchasing, inventory, production, CRM and reporting from one
                  integrated SAP Business One platform.
                </p>
              </div>
              <Link href="#" className={styles.sapBandCta}>
                Get SAP B1 Consultation
                <LuArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.sapFeatureGrid}>
            {SAP_B1_FEATURES.map((feature) => (
              <div className={styles.sapFeature} key={feature.number}>
                <span className={styles.sapFeatureIcon}>{feature.number}</span>
                <div>
                  <h3 className={styles.sapFeatureTitle}>{feature.title}</h3>
                  <p className={styles.sapFeatureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cloudSection}>
        <div className={styles.cloudHead}>
          <div>
            <span className={styles.cloudEyebrow}>Cloud ERP</span>
            <h2 className={styles.cloudTitle}>Enterprise capability. Without infrastructure complexity.</h2>
          </div>
          <p className={styles.cloudDesc}>
            Deploy SAP Business One on secure cloud infrastructure with flexible access, managed operations,
            backup and business continuity.
          </p>
        </div>

        <div className={styles.cloudCards}>
          {CLOUD_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div className={styles.expertiseCard} key={card.title}>
                <span className={styles.expertiseCardIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <h3 className={styles.expertiseCardTitle}>{card.title}</h3>
                <p className={styles.expertiseCardDesc}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.cloudHead}>
          <div>
            <span className={styles.cloudEyebrow}>What We Do</span>
            <h2 className={styles.cloudTitle}>One technology partner. Every business need.</h2>
          </div>
          <p className={styles.cloudDesc}>
            From ERP implementation to cloud, infrastructure, analytics and ongoing support, our services
            are designed to work together as one connected digital ecosystem.
          </p>
        </div>

        <div className={styles.cloudCards}>
          {ABOUT_SERVICE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div className={styles.expertiseCard} key={card.title}>
                <span className={styles.expertiseCardIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <h3 className={styles.expertiseCardTitle}>{card.title}</h3>
                <p className={styles.expertiseCardDesc}>{card.description}</p>
                <ul className={styles.aboutCardList}>
                  {card.checklist.map((item) => (
                    <li className={styles.aboutCardListItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.whyUs}>
        <div className={styles.whyUsInner}>
          <SectionLabel title="Why Ayushman Solution" className={styles.whyUsLabelRow} />
          <h2 className={styles.whyUsTitle}>Technology That Accelerates Business Growth</h2>
          <p className={styles.whyUsDesc}>
            Our ability to combine deep SAP expertise, industry knowledge, and innovative technologies enables
            businesses to operate smarter, faster, and more efficiently.
          </p>

          <div className={styles.whyUsCards}>
            {WHY_US_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div className={styles.whyUsCard} key={card.title}>
                  {/* Decorative only (dot-grid, rings, glow blob) - hidden from assistive tech */}
                  <span className={styles.whyUsCardDecor} aria-hidden="true" />
                  <span className={styles.whyUsCardIconWrap}>
                    <span className={styles.whyUsCardIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                  </span>
                  <h3 className={styles.whyUsCardTitle}>{card.title}</h3>
                  <p className={styles.whyUsCardDesc}>{card.description}</p>
                  <span className={styles.whyUsCardCta} aria-hidden="true">
                    <LuArrowRight />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyBusinessesChooseUs />

      <section className={styles.contactCta}>
        <div className={styles.contactCtaOuter}>
          <div className={styles.contactCtaCard}>
            <span className={styles.contactCtaEyebrow}>Let&apos;s start a conversation</span>
            <h2 className={styles.contactCtaTitle}>Ready to make your business more connected?</h2>
            <p className={styles.contactCtaDesc}>
              Tell us about your SAP, cloud, IT or analytics requirement and our team will help you identify
              the right next step.
            </p>
            <div className={styles.contactCtaActions}>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactCtaPrimary}>
                Email Us
                <LuArrowRight aria-hidden="true" />
              </a>
              <a href={CONTACT_PHONE_HREF} className={styles.contactCtaSecondary}>
                Call {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
