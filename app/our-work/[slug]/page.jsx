import { notFound } from "next/navigation";
import { FaCogs, FaChartLine, FaUsers, FaCloud, FaMicrochip, FaArrowRight, FaLongArrowAltLeft } from "react-icons/fa";
import { OUR_WORK, getOurWorkBySlug } from "../../../data/ourWork";
import "../our-work.css";

const TOPICS = [
  { icon: FaCogs, title: "SAP ERP", description: "Integrated, advanced ERP for core operations.", href: "/sap" },
  { icon: FaChartLine, title: "Data Analytics", description: "Predictive, decision-ready reporting.", href: "/analytics" },
  { icon: FaUsers, title: "Salesforce CRM", description: "Unified, insight-rich customer journeys.", href: "/salesforce" },
  { icon: FaCloud, title: "Cloud", description: "Elastic, enterprise-grade infrastructure.", href: "/cloud" },
  { icon: FaMicrochip, title: "Technology", description: "Adaptive tech stacks for every workflow.", href: "/technology" },
];

export function generateStaticParams() {
  return OUR_WORK.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getOurWorkBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} | Our Work | Ayushman Solutions`,
    description: item.description,
  };
}

export default async function OurWorkDetailPage({ params }) {
  const { slug } = await params;
  const item = getOurWorkBySlug(slug);
  if (!item) notFound();

  return (
    <div className="our-work-page">
      <nav className="our-work-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/our-work">Our Work</a>
        <span>/</span>
        <span aria-current="page">{item.title}</span>
      </nav>

      <div className="our-work-hero">
        <span className="our-work-hero__eyebrow">Our Work</span>
        <h1>{item.title}</h1>
        <p className="our-work-hero__tagline">{item.tagline}</p>
        <p className="our-work-hero__summary">{item.description}</p>
      </div>

      <div className="our-work-empty-state">
        <p>
          New {item.title.toLowerCase()} are added regularly. Check back soon, or get in touch and
          we&apos;ll let you know as soon as fresh content is published.
        </p>
      </div>

      <h2 className="our-work-section-title">Explore by technology</h2>
      <div className="our-work-topics">
        {TOPICS.map((topic) => {
          const Icon = topic.icon;
          return (
            <a key={topic.title} href={topic.href} className="our-work-topics__card">
              <span className="our-work-topics__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="our-work-topics__title">{topic.title}</span>
              <span className="our-work-topics__desc">{topic.description}</span>
            </a>
          );
        })}
      </div>

      <div className="our-work-cta">
        <div>
          <h3 className="our-work-cta__title">Have a story or question for us?</h3>
          <p className="our-work-cta__desc">Reach out and our team will get back to you.</p>
        </div>
        <a href="mailto:hello@example.com" className="our-work-cta__button">
          Contact Us <FaArrowRight aria-hidden="true" />
        </a>
      </div>

      <a href="/our-work" className="our-work-back-link">
        <FaLongArrowAltLeft aria-hidden="true" /> Back to Our Work
      </a>
    </div>
  );
}
