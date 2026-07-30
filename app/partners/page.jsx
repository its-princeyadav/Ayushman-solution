import Link from "next/link";
import { PARTNERS } from "../../data/whoWeAre";
import "./partners.css";

export const metadata = {
  title: "Technology Partners | Ayushman Solutions",
  description:
    "Ayushman Solution's technology partnerships across ERP (SAP), Analytics (Power BI, Alteryx, Tableau), CRM (Salesforce), and Cloud (Microsoft Azure).",
};

export default function PartnersPage() {
  return (
    <div className="partners-page">
      <nav className="partners-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span aria-current="page">Partners</span>
      </nav>

      <div className="partners-hero">
        <span className="partners-hero__eyebrow">Technology Partners</span>
        <h1>Partnerships That Help Us Build LIVE Enterprises</h1>
        <p className="partners-hero__tagline">
          The ERP, analytics, CRM, and cloud partnerships behind our implementation and managed services work.
        </p>
      </div>

      <div className="partners-grid">
        {PARTNERS.map((partner) => (
          <Link key={partner.slug} href={`/partners/${partner.slug}`} className="partners-grid__card">
            <span className="partners-grid__card-title">{partner.category}</span>
            <span className="partners-grid__card-tagline">{partner.teaser}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
