import { notFound } from "next/navigation";
import Link from "next/link";
import { FaCheckCircle, FaCogs, FaChartLine, FaUsers, FaCloud, FaMicrochip, FaArrowRight, FaLongArrowAltLeft } from "react-icons/fa";
import { INDUSTRIES, getIndustryBySlug } from "../../../data/industries";
import "../industries.css";

const SOLUTIONS = [
  { icon: FaCogs, title: "SAP ERP", description: "Integrated, advanced ERP for core operations.", href: "/sap" },
  { icon: FaChartLine, title: "Data Analytics", description: "Predictive, decision-ready reporting.", href: "/analytics" },
  { icon: FaUsers, title: "Salesforce CRM", description: "Unified, insight-rich customer journeys.", href: "/salesforce" },
  { icon: FaCloud, title: "Cloud", description: "Elastic, enterprise-grade infrastructure.", href: "/cloud" },
  { icon: FaMicrochip, title: "Technology", description: "Adaptive tech stacks for every workflow.", href: "/technology" },
];

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.shortTitle || industry.title} Industry Solutions | Ayushman Solutions`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const displayTitle = industry.shortTitle || industry.title;

  return (
    <div className="industries-page">
      <nav className="industries-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/industries">Industries</Link>
        <span>/</span>
        <span aria-current="page">{displayTitle}</span>
      </nav>

      <div className="industries-hero">
        <span className="industries-hero__eyebrow">Industries</span>
        <h1>{displayTitle}</h1>
        <p className="industries-hero__tagline">{industry.tagline}</p>
        <p className="industries-hero__summary">{industry.summary}</p>
      </div>

      <h2 className="industries-section-title">Where we add value</h2>
      <ul className="industries-challenges">
        {industry.challenges.map((challenge) => (
          <li key={challenge}>
            <FaCheckCircle aria-hidden="true" />
            <span>{challenge}</span>
          </li>
        ))}
      </ul>

      <h2 className="industries-section-title">Solutions we bring</h2>
      <div className="industries-solutions">
        {SOLUTIONS.map((solution) => {
          const Icon = solution.icon;
          return (
            <a key={solution.title} href={solution.href} className="industries-solutions__card">
              <span className="industries-solutions__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="industries-solutions__title">{solution.title}</span>
              <span className="industries-solutions__desc">{solution.description}</span>
            </a>
          );
        })}
      </div>

      <div className="industries-cta">
        <div>
          <h3 className="industries-cta__title">Talk to our {displayTitle} team</h3>
          <p className="industries-cta__desc">Tell us about your goals and we&apos;ll map out the right approach.</p>
        </div>
        <a href="mailto:hello@example.com" className="industries-cta__button">
          Contact Us <FaArrowRight aria-hidden="true" />
        </a>
      </div>

      <Link href="/industries" className="industries-back-link" style={{ marginTop: 32 }}>
        <FaLongArrowAltLeft aria-hidden="true" /> Back to all industries
      </Link>
    </div>
  );
}
