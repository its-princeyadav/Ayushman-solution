import { INDUSTRIES } from "../data/industries";
import { OUR_WORK } from "../data/ourWork";

// Set NEXT_PUBLIC_SITE_URL to the real production domain before deploying -
// this is the only thing standing between this sitemap and being live.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const staticRoutes = ["", "/industries", "/our-work", "/careers"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const industryRoutes = INDUSTRIES.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const ourWorkRoutes = OUR_WORK.map((item) => ({
    url: `${BASE_URL}/our-work/${item.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...industryRoutes, ...ourWorkRoutes];
}
