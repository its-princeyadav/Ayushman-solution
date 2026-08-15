import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { LuArrowUpRight, LuMail, LuClock } from "react-icons/lu";
import { CONTACT_EMAIL, BUSINESS_HOURS } from "../../data/contactInfo";
import styles from "./Footer.module.css";

const COMPANY_LINKS = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Careers", href: "/careers" },
  { label: "Our Work", href: "/our-work" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICE_LINKS = [
  { label: "SAP Business One", href: "/sap/business-one" },
  { label: "SAP Consulting", href: "/sap/consulting" },
  { label: "Data Analytics & BI", href: "/analytics" },
  { label: "Industries", href: "/industries" },
];

// href: "#" - no real social profiles exist yet for this project (same
// placeholder state the previous footer was already in); restyled here,
// not fabricated.
const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Twitter", href: "#", Icon: FaTwitter },
  { label: "Youtube", href: "#", Icon: FaYoutube },
  { label: "Linkedin", href: "#", Icon: FaLinkedinIn },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <span className={styles.ctaEyebrow}>Let&apos;s talk</span>
            <h2 className={styles.ctaTitle}>
              Ready to transform your business with intelligent SAP solutions?
            </h2>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact-us" className={styles.ctaButton}>
              Get in Touch
              <LuArrowUpRight aria-hidden="true" className={styles.ctaButtonArrow} />
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.ctaEmail}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              <Image
                src="/assets/image2/mini-logo.png"
                alt=""
                width={36}
                height={36}
                className={styles.brandIcon}
              />
              <span className={styles.brandText}>
                <span className={styles.brandPrimary}>Ayushman</span>{" "}
                <span className={styles.brandSecondary}>Solutions</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              SAP ERP, IT consulting, and business intelligence solutions that help enterprises operate
              smarter and grow faster.
            </p>
            <ul className={styles.social}>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.socialLink}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.linkCol} aria-label="Company">
            <h3 className={styles.linkColTitle}>Company</h3>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkCol} aria-label="Services">
            <h3 className={styles.linkColTitle}>Services</h3>
            <ul>
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.linkCol}>
            <h3 className={styles.linkColTitle}>Get in Touch</h3>
            <ul>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactItem}>
                  <LuMail aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className={styles.contactItem}>
                <LuClock aria-hidden="true" />
                {BUSINESS_HOURS}
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>
            &copy; {year} Ayushman Solutions. All rights reserved.
          </span>
          <ul className={styles.legalLinks}>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms &amp; Conditions</Link>
            </li>
            <li>
              <a href="/sitemap.xml">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
