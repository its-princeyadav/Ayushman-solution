// Shared data source for the "Our Work" mega menu and the /our-work/[slug] pages.
// Keeping one source means every menu entry always resolves to a real route.

export const OUR_WORK = [
  {
    slug: "blogs",
    title: "Blogs",
    tagline: "Insights, innovation stories, and technology deep dives.",
    description:
      "Deep dive into our latest insights and innovation stories from the world of SAP, Salesforce, BI, and Cloud. Written by our own consultants and delivery teams.",
  },
  {
    slug: "topics",
    title: "Topics",
    tagline: "Curated themes shaping digital transformation.",
    description:
      "Discover trending themes, expert insights, and curated content shaping the future of digital transformation, organized by industry and technology.",
  },
  {
    slug: "whitepapers",
    title: "Whitepapers",
    tagline: "Thought leadership and downloadable guides.",
    description:
      "Download in-depth guides, research reports, and thought leadership content built from real implementation and advisory experience.",
  },
  {
    slug: "testimonials",
    title: "Testimonials",
    tagline: "Praise from the businesses we've worked with.",
    description:
      "Praise always speaks volumes, and our customers share their praise-worthy experiences here as new stories are published.",
  },
  {
    slug: "webcasts",
    title: "Webcasts",
    tagline: "Webinars and knowledge sessions on demand.",
    description:
      "Explore our growing collection of webinars, expert talks, and knowledge sessions where practical experience meets innovation.",
  },
  {
    slug: "case-studies",
    title: "Featured Case Studies",
    tagline: "Real implementation stories, real outcomes.",
    description:
      "Learn success stories built on customer trust, covering how organizations approached their transformation journey with us.",
  },
  {
    slug: "news",
    title: "News",
    tagline: "Announcements, milestones, and media coverage.",
    description:
      "Uncover the latest news, milestones, and developments as we continue automating and modernizing businesses across industries.",
  },
  {
    slug: "events",
    title: "Events",
    tagline: "Conferences, webinars, and industry gatherings.",
    description:
      "Engage in thought-provoking discussions, learn from experts, and stay updated on the conferences, workshops, and industry events we take part in.",
  },
];

export function getOurWorkBySlug(slug) {
  return OUR_WORK.find((item) => item.slug === slug);
}
