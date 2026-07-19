import Link from "next/link";
import { OUR_WORK } from "../../data/ourWork";
import "./our-work.css";

export const metadata = {
  title: "Our Work | Ayushman Solutions",
  description:
    "Explore our blogs, whitepapers, testimonials, case studies, webcasts, news, and events covering SAP, Salesforce, Cloud, and Data Analytics.",
};

export default function OurWorkPage() {
  return (
    <div className="our-work-page">
      <nav className="our-work-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span aria-current="page">Our Work</span>
      </nav>

      <div className="our-work-hero">
        <span className="our-work-hero__eyebrow">Our Work</span>
        <h1>Insights, Stories, and Resources</h1>
        <p className="our-work-hero__tagline">
          Showcasing our expertise, insights, success stories, industry knowledge, customer experiences,
          and business transformation initiatives across multiple industries and technologies.
        </p>
      </div>

      <div className="our-work-grid">
        {OUR_WORK.map((item) => (
          <Link key={item.slug} href={`/our-work/${item.slug}`} className="our-work-grid__card">
            <span className="our-work-grid__card-title">{item.title}</span>
            <span className="our-work-grid__card-tagline">{item.tagline}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
