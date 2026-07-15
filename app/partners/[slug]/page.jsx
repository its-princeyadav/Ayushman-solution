import { notFound } from "next/navigation";
import { FaArrowRight, FaLongArrowAltLeft } from "react-icons/fa";
import { PARTNERS, getPartnerBySlug } from "../../../data/whoWeAre";
import "../partners.css";

export function generateStaticParams() {
  return PARTNERS.map((partner) => ({ slug: partner.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) return {};
  return {
    title: `${partner.category} | Technology Partners | Ayushman Solutions`,
    description: partner.description,
  };
}

export default async function PartnerDetailPage({ params }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) notFound();

  return (
    <div className="partners-page">
      <nav className="partners-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/partners">Partners</a>
        <span>/</span>
        <span aria-current="page">{partner.category}</span>
      </nav>

      <div className="partners-hero">
        <span className="partners-hero__eyebrow">Technology Partners</span>
        <h1>{partner.category}</h1>
        <p className="partners-hero__tagline">
          {partner.logos.map((logo) => logo.name).join(" · ")}
        </p>
        <p className="partners-hero__summary">{partner.description}</p>
        {partner.note && <p className="partners-hero__note">{partner.note}</p>}
      </div>

      <div className="partners-cta">
        <div>
          <h3 className="partners-cta__title">Have a project in mind?</h3>
          <p className="partners-cta__desc">Reach out and our team will get back to you.</p>
        </div>
        <a href="mailto:hello@example.com" className="partners-cta__button">
          Contact Us <FaArrowRight aria-hidden="true" />
        </a>
      </div>

      <a href="/partners" className="partners-back-link">
        <FaLongArrowAltLeft aria-hidden="true" /> Back to Partners
      </a>
    </div>
  );
}
