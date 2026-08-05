import Image from "next/image";
import Link from "next/link";
import { LuLayers, LuUsers, LuCloud, LuZap, LuArrowRight } from "react-icons/lu";
import Navbar2 from "../../components/common/Navbar2";
import "./home2-theme.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Home 2 (Preview) | Ayushman Solutions",
  robots: "noindex, nofollow",
};

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

export default function Home2Page() {
  return (
    <>
      <Navbar2 />
      <main>
        <div className={styles.heroWrap}>
          <section className={styles.hero}>
            <Image
              src="/assets/image2/sap-hero.png"
              alt=""
              fill
              priority
              sizes="90vw"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span>Transforming Businesses</span>
                <span className={styles.heroTitleSecondary}>with Intelligent SAP Solutions</span>
              </h1>
              <div className={styles.heroAccent} />
            </div>
          </section>
        </div>

        <section className={styles.expertise}>
          <div className={styles.expertiseInner}>
            <div className={styles.expertiseLabelRow}>
              <span className={styles.expertiseLabelLine} />
              <span className={styles.expertiseLabel}>Our SAP Expertise</span>
              <span className={styles.expertiseLabelLine} />
            </div>

            <div className={styles.expertiseIntro}>
              <h2 className={styles.expertiseTitle}>
                Transform Your Business with Intelligent{" "}
                <span className={styles.expertiseTitleAccent}>SAP Solutions</span>
              </h2>
              <p className={styles.expertiseDesc}>
                We help organizations accelerate digital transformation through SAP Implementation, IT
                Consulting, Cloud Solutions, and Enterprise Automation. Our experts deliver scalable, secure,
                and future-ready SAP ecosystems tailored to your business.
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
      </main>
    </>
  );
}
