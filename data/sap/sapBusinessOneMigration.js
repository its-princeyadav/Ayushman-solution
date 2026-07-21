// Content for /sap/business-one/migration ("SAP Business One Migration").
// Reuses the exact same section components as sapBusinessOne.js /
// sapBusinessOneImplementation.js / sapSolutions.js — only this sibling data
// file differs. Button variants below (e.g. "migrationPrimary") are additive,
// page-scoped brand variants that only this page references — see
// components/Sap-pages/SapBusinessOneMigration.module.css for the
// page-scoped color/spacing token overrides that pair with them.
// FeatureCard's variant: "pricing" is a generic, shared pricing-card look
// (also used by the License page), not migration-specific.

export const sapBusinessOneMigration = {
  hero: {
    // Wide landscape photo with a light/plain patch on the right — needed
    // for object-fit:cover to hold up at any viewport height without
    // cropping into empty space (unlike the cutout-on-white assets below,
    // which have no background of their own to fall back on).
    backgroundImage: "/assets/image2/banner-sap-migration.webp",
    align: "right",
    textTheme: "dark",
    title: "Unlock Seamless Transition with Ayushman Solution's SAP Migration Services",
    button: { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
  },

  // Folded into FeatureCard's existing icon + title + description + action
  // shape (same convention as sapBusinessOneImplementation.js's packages) —
  // "Subscription per month/year" and the "Includes:" list live inside
  // `description`. variant: "pricing" opts each card into the shared
  // pricing-card look (radius/shadow/hover-lift) without touching the
  // default FeatureCard styling used on every other SAP page.
  packages: {
    title: "What Are Our SAP Migration Packages",
    features: [
      {
        icon: "boxes",
        title: "Basic Pack",
        description:
          "Subscription per month/year. A basic licensing pack to gain greater control over the most pressing business processes and SAP data migration. Includes: Finance, CRM, Sales, Purchasing, Inventory, Bill of Materials, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#", variant: "migrationPrimary" },
        variant: "pricing",
      },
      {
        icon: "puzzle",
        title: "Professional Pack",
        description:
          "Subscription per month/year. Get access to all modules, features along with a software development kit for SAP S/4HANA migration. Includes: Administration, Financials, CRM, Sales, Purchasing, Banking, Inventory, Production, MRP, Service, HR, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#", variant: "migrationPrimary" },
        variant: "pricing",
      },
      {
        icon: "shield",
        title: "Financial User Pack",
        description:
          "Subscription per month/year. Seamlessly manage payroll, financials, sales aspects, and more. Includes: Financials, Sales Aspects, Purchasing Aspects, Banking, Inventory Aspects, Production Aspects, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#", variant: "migrationPrimary" },
        variant: "pricing",
      },
    ],
  },

  businessIntro: {
    imagePosition: "right",
    theme: "dark",
    title: "Elevate Your Business with SAP Migration Services of Ayushman Solution",
    description:
      "Choose Ayushman Solution as your strategic ally to embrace the transformative power of SAP S/4HANA migration. Upgrading to SAP HANA promises unparalleled speed and performance, enabling enterprises to capitalize on new opportunities and enhance the ROI of their SAP infrastructure with rapid time-to-value. With our expertise in SAP cloud migration, businesses can maintain agility and competitiveness without compromising on essential factors such as business continuity, security, compliance, and performance.",
    buttons: [
      { label: "Explore SAP Business One", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Request Demo", href: "#", variant: "migrationOutline" },
    ],
    // Cutout-on-white photo, so "bleed" (taller 5:4 crop) holds the full
    // standing figure far better than the wide 4:3 "boxed" crop would.
    imageStyle: "bleed",
    image: "/assets/image2/modern-sap-migration.webp",
    imageAlt: "Person standing on a mountain summit with arms outstretched",
  },

  awards: {
    title: "Ayushman Solution is your trusted SAP Partner",
    description: "We're honored by SAP as the best SAP Partner in India.",
    image: "/assets/image2/awards.webp",
    imageAlt: "SAP partner award trophies",
    years: ["2023", "2022", "2021", "2020", "2019"],
    awardsByYear: {
      2023: [
        { prefix: "SAP Business One", bold: "APJ Partner of the Year (Asia Pacific & Japan)", year: "2023" },
        { prefix: "SAP Business One", bold: "Partner of the Year, India", year: "2023" },
      ],
      2022: [
        { prefix: "SAP Business One", bold: "Partner of the Year, India", year: "2022" },
        { prefix: "SAP", bold: "Best Places to Work", year: "2022" },
      ],
      2021: [{ prefix: "SAP Business One", bold: "Partner of the Year, North & East India", year: "2021" }],
      2020: [{ prefix: "SAP Business One", bold: "Top Partner, North & East India", year: "2020" }],
      2019: [{ prefix: "SAP", bold: "Partner Excellence Award", year: "2019" }],
    },
    background: "#0a1e3c",
  },

  // TODO: real client logo image assets aren't available for every client
  // named on the reference design — mixing the logo files that do already
  // exist in this project (rendered as <Image> via ClientsSection's new
  // { name, logo } support) with plain text marks for the rest, following
  // the same "no image available" convention already used by NewsCard/BlogCard.
  clients: {
    heading: "Join our clan of automated, L.I.V.E. enterprises",
    ribbon: "Transformed",
    stat: "1800+",
    statLabel: "Businesses Across 21+ Industries",
    badges: [
      { label: "ERP", position: "topLeft" },
      { label: "CRM", position: "topRight" },
      { label: "Cloud", position: "bottomLeft" },
      { label: "Analytics", position: "bottomRight" },
    ],
    clients: [
      "Bharat Petroleum",
      "esri",
      "King Koil",
      "NASSCOM",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      { name: "Addverb Technologies", logo: "/assets/image2/addverb-technologies.webp" },
      { name: "Aditya Birla Group", logo: "/assets/image2/aditya-nbirla-group.webp" },
      { name: "Ajax Fiori", logo: "/assets/image2/ajax-fiori.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      "DealShare",
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "Fix Derma", logo: "/assets/image2/fix-derma.webp" },
      "Global",
      { name: "Kimberly-Clark", logo: "/assets/image2/kimberly-clark.webp" },
      "Kyocera",
      { name: "L&T Construction & Mining Machinery", logo: "/assets/image2/lnt-construction.webp" },
      "Green Gas Limited",
      { name: "inshorts", logo: "/assets/image2/inshorts.webp" },
    ],
  },

  migrationProcess: {
    title: "How Ayushman Solution Performs SAP Migration",
    items: [
      {
        image: "/assets/image2/sap-migration-01.webp",
        label: "Engage in a Comprehensive Need Assessment",
        description:
          "Collaborating closely with you, we oversee every facet of SAP S/4HANA migration and upgrades. From meticulous assessment and strategic planning to ensuring application readiness, seamless data migration, meticulous functional testing, and successful go-live transition, our comprehensive support ensures a smooth and successful journey.",
        href: "#",
      },
      {
        image: "/assets/image2/sap-migration-02.webp",
        label: "Embrace Excellence in SAP Migration and Implementation",
        description:
          "In our SAP data migration projects, we uphold rigorous standards without compromise. Our dedicated migration experts invest the necessary time to ensure precision from the outset, striving for flawless execution. With a steadfast focus on maintaining superior implementation standards, our SAP team guarantees excellence at every step.",
        href: "#",
      },
      {
        image: "/assets/image2/sap-migration-03.webp",
        label: "Guarantee Comprehensive Backups and Uninterrupted Availability",
        description:
          "When it comes to migrating your database, our experts prioritize caution and thoroughness. We meticulously perform full backups to safeguard your data and fortify your business against any potential outages. With our proactive approach, we ensure seamless operations, minimizing any risk or interruption to your business during the SAP cloud migration.",
        href: "#",
      },
      {
        image: "/assets/image2/city-05.webp",
        label: "Expertise in Data Center Transformation",
        description:
          "Leveraging extensive expertise in data center transformation and SAP cloud migration, we specialize in tailoring solutions for custom applications and integrations. Our focus is on delivering modern business capabilities seamlessly on the cloud, ensuring your organization stays ahead in today's dynamic landscape.",
        href: "#",
      },
      {
        image: "/assets/image2/city-06.webp",
        label: "Premium White Glove SAP Migration Services with Expert Monitoring and Support",
        description:
          "Experience full transparency, continuous monitoring, and unwavering support for your systems from our team of SAP basis and cloud specialists during your SAP S/4HANA migration. Enjoy peace of mind knowing that your IT infrastructure is in expert hands, ensuring seamless operations and optimal performance at all times.",
        href: "#",
      },
    ],
  },

  news: {
    sectionTitle: "News & Articles",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "05 Dec 2023",
        title: "SAP S/4HANA Is Not a Choice but a Necessity for Insurance Industry",
        source: "TechsSlash",
        image: "/assets/image2/techsslash-logo.jpg",
        background: "#0d0d0d",
        href: "#",
      },
      {
        date: "05 Dec 2023",
        title: "SAP Sustainability: Unlocking the Potential of S/4HANA for a Greener Future",
        source: "TechBehindIT",
        image: "/assets/image2/techbehindit-logo.jpg",
        background: "#ffffff",
        href: "#",
      },
      {
        date: "05 Dec 2023",
        title: "10 Challenges and Strategies in SAP S/4HANA Implementation",
        source: "TechMagazines",
        background: "#0f2942",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "Blogs & Articles",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "18 Jul 2025",
        title: "Why Leading Enterprises Choose SAP S/4HANA Extended Warehouse Management",
        description:
          "With the rapid advancement of technologies, including AI and fearsome global competition, companies of every size need modern warehouse tools.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "20 Jun 2025",
        title: "From GROWing to RISIng: Which SAP S/4HANA Model Fits Your Business?",
        description:
          "In today's digital environment, companies of every size are evaluating which SAP S/4HANA edition best matches their growth stage.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
      {
        date: "16 Jun 2025",
        title: "How SAP Business One Could Be Your Startup's Best Growth Partner",
        description:
          "Business is often the dream and baby of young entrepreneurs, but scaling operations without the right systems can stall momentum fast.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "#",
      },
    ],
  },

  // TODO: reusing the same underwater CTA photo already established across
  // the design system for this "want to know more" pattern.
  ctaBanner: {
    title: "Want to Know More?",
    description: "Let our experts show you a full proof of concept (POC).",
    button: { label: "Request Demo", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #0B2A72 0%, #163d8f 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "migrationPrimary" }],
  },
};
