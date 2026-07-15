"use client";

import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaCogs, FaCloud, FaUsers, FaChartLine } from "react-icons/fa";
import { HERO, INTRO, LEADERS, STATS, CLIENTS, PARTNERS } from "../../data/whoWeAre";
import "./WhoWeAre.css";

const CATEGORY_ICONS = {
  erp: FaCogs,
  cloud: FaCloud,
  crm: FaUsers,
  analytics: FaChartLine,
};

// Dashed connector curves from each service node to the edge of the center
// circle. Coordinates live in a 0-100 viewBox so they scale with the
// responsive, percentage-positioned circle/nodes without any JS measuring.
const CONNECTOR_PATHS = {
  erp: "M11,33 Q14,44 17.1,35.6",
  cloud: "M11,77 Q9.7,73.8 20.4,70.5",
  crm: "M89,33 Q86,44 82.9,35.6",
  analytics: "M89,77 Q90.3,73.8 79.6,70.5",
};

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.25 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

export default function WhoWeAre() {
  const hasHeroOverlay = HERO.eyebrow || HERO.heading || HERO.subheading;
  const [impactRef, impactInView] = useInView();

  return (
    <>
      {/* ---------- Section 1: Hero Banner ---------- */}
      <section className="wwa-hero">
        <img src={HERO.image} alt={HERO.alt} className="wwa-hero__image" />
        {hasHeroOverlay && (
          <div className="wwa-hero__overlay">
            {HERO.eyebrow && <span className="wwa-hero__eyebrow">{HERO.eyebrow}</span>}
            {HERO.heading && <h1 className="wwa-hero__heading">{HERO.heading}</h1>}
            {HERO.subheading && <p className="wwa-hero__subheading">{HERO.subheading}</p>}
          </div>
        )}
      </section>

      {/* ---------- Section 2: Building L.I.V.E. Enterprises ---------- */}
      <section className="wwa-intro">
        <div className="wwa-intro__inner">
          <h2 className="wwa-intro__heading">{INTRO.heading}</h2>
          {INTRO.paragraphs.map((paragraph, index) => (
            <p className="wwa-intro__paragraph" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ---------- Section 3: Leadership Team Showcase ---------- */}
      <section className="wwa-leadership">
        <div className="wwa-section-head">
          <h2>People That Fuel Us Everyday</h2>
          <p>Our leaders behind the quest for excellence.</p>
        </div>
        <div className="wwa-leadership__grid">
          {LEADERS.map((leader) => (
            <LeaderCard key={leader.slug} leader={leader} />
          ))}
        </div>
      </section>

      {/* ---------- Section 4: Business Impact Statistics + Client Logos ---------- */}
      <section className="wwa-impact" ref={impactRef}>
        <div className={`wwa-impact__grid ${impactInView ? "is-visible" : ""}`}>
          <div className="wwa-impact__graphic">
            <svg className="wwa-impact__connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {STATS.categories.map((category) => (
                <path key={category.key} d={CONNECTOR_PATHS[category.key]} />
              ))}
            </svg>

            <div className="wwa-impact__circle">
              <span className="wwa-impact__circle-title">{STATS.circleTitle}</span>
              <span className="wwa-impact__badge">{STATS.circleBadge}</span>
              <span className="wwa-impact__metric">{STATS.metric}</span>
              <span className="wwa-impact__metric-label">{STATS.metricLabel}</span>
            </div>

            {STATS.categories.map((category, index) => (
              <ServiceNode key={category.key} category={category} index={index} />
            ))}
          </div>

          <div className="wwa-impact__logos">
            {CLIENTS.map((client, index) => (
              <div
                className="wwa-impact__logo-card"
                key={client.name}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} />
                ) : (
                  <span className="wwa-impact__logo-name">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Section 5: Technology Partners ---------- */}
      <section className="wwa-partners">
        <div className="wwa-section-head wwa-partners__head">
          <h2>Partnerships That Help Us Build LIVE Enterprises</h2>
          <p>Technology Partners</p>
        </div>
        <div className="wwa-partners__grid">
          {PARTNERS.map((partner) => (
            <a href={`/partners/${partner.slug}`} className="wwa-partners__card" key={partner.category}>
              <div className="wwa-partners__logo-zone">
                <div className="wwa-partners__logos">
                  {partner.logos.map((logo) =>
                    logo.image ? (
                      <img key={logo.name} src={logo.image} alt={logo.name} />
                    ) : (
                      <span key={logo.name} className="wwa-partners__logo-name">
                        {logo.name}
                      </span>
                    )
                  )}
                </div>
                {partner.note && <p className="wwa-partners__note">{partner.note}</p>}
                {partner.teaser && <p className="wwa-partners__teaser">{partner.teaser}</p>}
              </div>
              <div className="wwa-partners__label">{partner.category}</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceNode({ category, index }) {
  const Icon = CATEGORY_ICONS[category.key];
  return (
    <div
      className={`wwa-impact__node wwa-impact__node--${category.key}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="wwa-impact__node-icon" style={{ animationDelay: `${index * 0.3}s` }}>
        <Icon aria-hidden="true" />
      </span>
      <span className="wwa-impact__node-label">{category.label}</span>
    </div>
  );
}

function LeaderCard({ leader }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="wwa-leader"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((current) => !current)}
    >
      <img src={leader.photo} alt={leader.name} className="wwa-leader__photo" />

      <div className={`wwa-leader__overlay ${active ? "is-active" : ""}`}>
        <div className="wwa-leader__info">
          <span className="wwa-leader__name">{leader.name}</span>
          <span className="wwa-leader__title">{leader.title}</span>
        </div>

        {leader.bio && <p className="wwa-leader__bio">{leader.bio}</p>}

        {leader.linkedin && (
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="wwa-leader__linkedin"
            aria-label={`${leader.name} on LinkedIn`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}
