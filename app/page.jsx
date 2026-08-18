import Image from "next/image";
import Link from "next/link";
import { LuLayers, LuUsers, LuCloud, LuZap, LuArrowRight, LuAward, LuChartColumn, LuBuilding2, LuMonitor } from "react-icons/lu";
import SectionLabel from "../components/Common/SectionLabel";
import Hero from "../components/Hero/Hero";
import WhyBusinessesChooseUs from "../components/Home2/WhyBusinessesChooseUs/WhyBusinessesChooseUs";
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

// First paragraph renders separately as a styled "lead" statement (see
// .aboutLead below) with its key service terms called out in bold - these
// two are the plain supporting paragraphs that follow it.
const ABOUT_PARAGRAPHS = [
  "We partner with organizations to simplify complex business processes, improve operational efficiency, and enable data-driven decision-making through intelligent enterprise solutions.",
  "Our experienced SAP consultants, solution architects, and technology experts work closely with clients to deliver scalable, secure, and future-ready digital solutions.",
];

const ABOUT_FLOAT_STATS = [
  { icon: LuChartColumn, number: "200+", label: "Satisfied Clients", position: "clients" },
  { icon: LuUsers, number: "15+", label: "Years of Experience", position: "experience" },
  { icon: LuBuilding2, number: "15+", label: "Industries Served", position: "industries" },
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
              Transform Your Business with Intelligent{" "}
              <span className={styles.expertiseTitleAccent}>SAP Solutions</span>
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
            <Link href="#" className={`as-nav2-login-btn ${styles.ctaPrimary}`}>
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

      <section className={styles.about}>
        <div className={styles.aboutHeader}>
          <SectionLabel title="About Us" />
          <h2 className={styles.aboutTitle}>
            Driving Business Excellence Through SAP & Digital Innovation
          </h2>
        </div>

        <div className={styles.aboutInner}>
          <div className={styles.aboutText}>
            <div className={styles.aboutStatCard}>
              <span className={styles.aboutStatIcon}>
                <LuAward aria-hidden="true" />
              </span>
              <div>
                <span className={styles.aboutStatNumber}>500+</span>
                <span className={styles.aboutStatLabel}>Successful Projects Delivered</span>
              </div>
            </div>

            <p className={styles.aboutLead}>
              At Ayushman Solution, we are a leading IT Services and IT Consulting company
              specializing in <strong className={styles.aboutLeadHighlight}>SAP ERP</strong>,{" "}
              <strong className={styles.aboutLeadHighlight}>Digital Transformation</strong>,{" "}
              <strong className={styles.aboutLeadHighlight}>Cloud Technologies</strong>, Enterprise
              Applications, and Business Automation.
            </p>

            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p className={styles.aboutParagraph} key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}

            <Link href="#" className={`as-nav2-login-btn ${styles.aboutCta}`}>
              Explore More
              <LuArrowRight aria-hidden="true" className={styles.aboutCtaArrow} />
            </Link>
          </div>

          <div className={styles.aboutMedia}>
            <div className={styles.aboutImageWrap}>
              {/* unoptimized: Next's image optimizer re-encodes this to
                  AVIF/WebP for browsers that accept it (per next.config.js),
                  and that specific re-encode drops every text label around
                  the ring while leaving the circle/icons/numbers intact -
                  confirmed by decoding the actual AVIF variant it serves.
                  Root cause sits in the optimizer's AVIF encoding of this
                  image's semi-transparent regions, not in this app's code -
                  bypassing optimization serves the original file byte-for-
                  byte, which has always rendered correctly. */}
              <Image
                src="/assets/image2/digital-transformation-wheel.png"
                alt="Digital Transformation wheel: Digitization, Modern Infrastructure, Business Application Transformation, Business Process Simplification, Break Application Silos, and Business Insight"
                width={1030}
                height={775}
                unoptimized
                className={styles.aboutImage}
              />
            </div>

            {ABOUT_FLOAT_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  className={`${styles.floatCard} ${styles[`floatCard--${stat.position}`]}`}
                  key={stat.position}
                >
                  <span className={styles.floatCardIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <span className={styles.floatCardNumber}>{stat.number}</span>
                    <span className={styles.floatCardLabel}>{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
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
    </>
  );
}
