// Single source of content for the "Who We Are" page (components/Who We Are/*).
// Swap image paths below with real files to update the page — nothing else
// needs to change.

export const HERO = {
  image: "/assets/image2/who-we-are-hero-img.webp",
  alt: "Building L.I.V.E. Enterprises",
  // Optional overlay copy — leave empty to show the banner image alone.
  eyebrow: "",
  heading: "",
  subheading: "",
};

export const INTRO = {
  heading: "Building L.I.V.E. Enterprises",
  paragraphs: [
    "Our communities are anticipating a better tomorrow - a tomorrow where technology and human ingenuity are the foundations of a brighter future. When we say, “We Build LIVE Enterprises,” we try to answer some of the most fundamental questions. Are we creating a sustainable future; are we making conscious decisions, are we building a better tomorrow?",
    "At Uneecops, the answer has always been Yes. For us, shaping modern enterprises goes beyond achieving business goals. Instead, we act as the missing piece in the beautiful mosaic, the final thread in the tapestry that builds LIVE enterprises.",
  ],
};

// TODO: replace `photo` with the real headshot path and `linkedin` with the
// real profile URL for each leader. `bio` is only shown in the hover/tap
// reveal — leave it out (or set to "") for leaders without one yet.
export const LEADERS = [
  {
    slug: "piyush-jain",
    name: "Piyush Jain",
    title: "Managing Director",
    photo: "/assets/images/who-we-are/piyush-jain.jpg",
    linkedin: "#",
    bio: "",
  },
  {
    slug: "ketan-jain",
    name: "Ketan Jain",
    title: "Executive Director",
    photo: "/assets/images/who-we-are/ketan-jain.jpg",
    linkedin: "#",
    bio: "Ketan Jain, the Executive Director of Uneecops, stands as a pivotal force propelling the company's sustainable growth. He invests significant effort in nurturing world-class talent capable of simplifying even the most intricate business challenges. With an MBA in Economics from the University of Manchester and a Bachelor of Arts in Economics with Honors from Shri Ram College of Commerce (SRCC).",
  },
  {
    slug: "karan-jain",
    name: "Karan Jain",
    title: "Executive Director",
    photo: "/assets/images/who-we-are/karan-jain.jpg",
    linkedin: "#",
    bio: "Karan Jain is the Executive Director of Uneecops, responsible for strategic decisions regarding the overall direction of Uneecops and its new initiatives. Having completed his Masters in Marketing from the University of Boston, he is overseeing the operations of HR-One, a subsidiary of Uneecops.",
  },
];

export const STATS = {
  circleBadge: "Transformed",
  circleTitle: "Join our clan of automated, L.I.V.E. enterprises",
  metric: "1800+",
  metricLabel: "Businesses Across 21+ Industries",
  categories: [
    { key: "erp", label: "ERP", side: "left" },
    { key: "cloud", label: "Cloud", side: "left" },
    { key: "crm", label: "CRM", side: "right" },
    { key: "analytics", label: "Analytics", side: "right" },
  ],
};

// TODO: add a `logo` (image path) per client once the real logo files are
// available. Until then the tile falls back to the company name as a
// clean text wordmark, so the grid still renders correctly.
export const CLIENTS = [
  { name: "Clearpack" },
  { name: "ColdEX" },
  { name: "Acro Engineering" },
  { name: "Addverb Technologies" },
  { name: "Ambrane" },
  { name: "Fix Derma" },
  { name: "GOA Medico" },
  { name: "Green Gas Limited" },
  { name: "Inshorts" },
  { name: "JCB" },
  { name: "Prakash Pipes" },
  { name: "Raj Overseas" },
  { name: "Kyocera" },
  { name: "Lahori Zeera" },
  { name: "Legero LED Lighting" },
  { name: "Zee" },
  { name: "Rajasthan Liquors" },
  { name: "RMX Industries" },
  { name: "S.B. Packagings" },
  { name: "Seeds of Success" },
];

// TODO: add a `logo` (image path) per partner once the real logo files are
// available; falls back to the product/partner name as text otherwise.
// `teaser` shows on card hover; `description` is the full text on the
// dedicated /partners/[slug] page each card links to.
export const PARTNERS = [
  {
    slug: "sap",
    category: "ERP Partners",
    logos: [{ name: "SAP" }],
    note: "Uneecops Business Solutions is a member of United VARs, which is an SAP Platinum Partner.",
    teaser: "SAP Business One & S/4HANA Cloud implementation, support, and managed services.",
    description:
      "Run smarter with an integrated, advanced ERP. As an SAP Platinum Partner through United VARs, we help businesses implement, customize, migrate, and support SAP Business One and SAP S/4HANA Cloud — from first rollout to ongoing managed services.",
  },
  {
    slug: "analytics",
    category: "Analytics Partner",
    logos: [{ name: "Power BI" }, { name: "Alteryx" }, { name: "Tableau" }],
    note: "",
    teaser: "BI dashboards, data visualization, and advanced analytics consulting.",
    description:
      "Enable decisive, predictive decision-making with Power BI, Alteryx, and Tableau. We design dashboards and reporting that turn raw data into insight, and provide the training and managed services to keep them running.",
  },
  {
    slug: "salesforce",
    category: "CRM Partner",
    logos: [{ name: "Salesforce" }],
    note: "",
    teaser: "Salesforce implementation, customization, and CRM consulting services.",
    description:
      "Orchestrate unified, insight-rich customer journeys on Salesforce. Our team handles implementation, integration with your existing systems, customization to your sales process, and ongoing support.",
  },
  {
    slug: "azure",
    category: "Cloud Partner",
    logos: [{ name: "Microsoft Azure" }],
    note: "",
    teaser: "Cloud migration, managed services, and Azure infrastructure consulting.",
    description:
      "Leverage elastic, enterprise-grade infrastructure on Microsoft Azure. We plan and execute cloud migrations, and provide the 24/7 managed services and DevOps support to keep workloads reliable.",
  },
];

export function getPartnerBySlug(slug) {
  return PARTNERS.find((partner) => partner.slug === slug);
}
