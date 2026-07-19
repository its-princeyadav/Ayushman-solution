import Link from "next/link";
import { INDUSTRIES } from "../../data/industries";
import "./industries.css";

export const metadata = {
  title: "Industries We Serve | Ayushman Solutions",
  description:
    "Explore how Ayushman Solutions supports organizations across healthcare, retail, manufacturing, fintech, BFSI, and 18 other industries with ERP, analytics, CRM, and cloud solutions.",
};

export default function IndustriesPage() {
  return (
    <div className="industries-page">
      <nav className="industries-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span aria-current="page">Industries</span>
      </nav>

      <div className="industries-hero">
        <span className="industries-hero__eyebrow">Industries</span>
        <h1>Industry Expertise Across 22 Sectors</h1>
        <p className="industries-hero__tagline">
          Showcasing our diverse experience across publicly listed, unicorn, fintech, digital-native,
          and SME companies across a wide range of niches.
        </p>
      </div>

      <div className="industries-grid">
        {INDUSTRIES.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="industries-grid__card"
          >
            <span className="industries-grid__card-title">{industry.shortTitle || industry.title}</span>
            <span className="industries-grid__card-tagline">{industry.tagline}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
