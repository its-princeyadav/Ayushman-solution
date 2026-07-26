// Content for /erp/erp-software-kerala ("SAP Business One Kerala").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from, which already lists this exact route/title/image) and
// sapBusinessOneChennai.js / sapBusinessOneDelhiNCR.js / erpSoftwareHyderabad.js
// (the other city pages in this family) — reuses the exact same section
// components as every other data/sap/*.js page, only this file's content
// differs. Page-scoped rebrand (navy heading / yellow accent) matches
// SapNearYou.module.css since this is a direct city-page sibling of that
// listing.

export const sapBusinessOneKerala = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-3.png",
    align: "right",
    textTheme: "light",
    title: "Discover Top-Rated ERP Software in Kerala",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "ERP Software Kerala: Digitize Your Business with SAP Business One ERP Solutions",
    paragraphs: [
      "Ayushman Solution is a trusted SAP Business One partner known for delivering a top-rated ERP software in Kerala, helping clients cut expenses, improve business operations, and achieve exemplary results. We deploy a complete and all-inclusive ERP solution, backed by safe and pocket-friendly cloud options, to facilitate a smooth transition to SAP Business One.",
      "Kick off your automation journey with Ayushman Solution's expertise today to maximize the potential of SAP Business One ERP software in Kerala, for faster ROI and minimized costs.",
    ],
  },

  // TODO: no dedicated "two professionals" photography exists in the project
  // yet — reusing an already-established real asset from elsewhere in the
  // design system.
  whyIdeal: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Best ERP Software in Kerala: Reasons that Make SAP Business One the Leading Go-To Choice",
    description: [
      "Addressed to rapidly growing businesses, SAP Business One is a world-leading ERP deployment, helping companies achieve business success through advanced features and offerings. With business intelligence integration and an advanced cloud computing platform, it is well suited for routine decision-making in key functions such as inventory, CRM, sales, accounting, and logistics.",
      "In Kerala, Ayushman Solution is a trusted SAP Business One partner, including for businesses seeking dependable accounting software with in-built business intelligence tools and an in-memory platform to improve organizational decision-making. It supports functionalities like GST filing, e-way bills, GST returns, e-invoices, and TDS, helping you tackle organizational hurdles on a daily basis.",
    ],
    buttons: [
      { label: "Know More", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  // Same solid-navy CenteredSection pattern already used for this "dark
  // paragraph + single CTA" slot on every sibling page (see `whyChooseUs` /
  // `whyDelhiNcr` in the other data/sap/*.js files). Deliberately NOT a
  // photographic background: CTASection has no dark scrim over its image
  // (unlike HeroBanner), so light text over a bright photo like
  // green-mountains.png becomes unreadable — a solid background avoids that
  // contrast risk entirely and renders as an <h2>, keeping this page's one
  // <h1> in `hero` above intact.
  businessCta: {
    title: "Fast-Paced Kerala Businesses Need the Best ERP Software in Kerala",
    description:
      "Kerala's business environment is dynamic and fast-moving, and adapting to this fast-changing market matters no matter the industry, niche, or sector an SME belongs to. Ayushman Solution helps businesses in Kerala with ready-to-deploy ERP solutions targeted at small and growing companies, redefining their ambitions by integrating new technology.",
    buttons: [{ label: "Get ERP Quote", href: "#", variant: "migrationPrimary" }],
    background: "#0a1e3c",
  },

  // Reused verbatim from erpSoftwareHyderabad.js / erpSoftwareBangalore.js /
  // sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js / sapBusinessOneDelhiNCR.js's
  // own award timeline — same established SAP Partner Award history already
  // used across this module.
  timeline: {
    title: "Ayushman Solution is Your Trusted SAP Business One Partner in Kerala and Across India",
    description: "We're honored to be recognized by SAP that bears testimony to our pursuit of excellence.",
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

  // Same established capability figures used verbatim across every other
  // data/sap/*.js city page in this module (Ahmedabad/Mumbai/Delhi NCR/
  // Bangalore/Chennai/Hyderabad) — the reference screenshot's own numbers
  // (500+/150+/18+) are Uneecops-specific and are NOT reused here.
  capability: {
    title: "Ayushman Solution's Comprehensive Capabilities as a SAP Company in Kerala",
    description:
      "Ayushman Solution is a CMMI Level 5 company having 11+ years of experience in the SAP B1 vertical. That is why we are a trusted name for ERP software in Kerala.",
    items: [
      { icon: "handshake", value: "#1", label: "SAP Platinum Partner" },
      { icon: "rocket", value: "1000+", label: "Implementation" },
      { icon: "briefcase", value: "300+", label: "SAP Consultants" },
      { icon: "certificate", value: "75+", label: "Channel Partners" },
      { icon: "location", value: "20+", label: "Cities Presence" },
      { icon: "chart", value: "21+", label: "Industries" },
      { icon: "puzzle", value: "12+", label: "Add-Ons" },
      { icon: "lightbulb", value: "24/7", label: "Support" },
    ],
    buttons: [
      { label: "Get Quote", href: "#", variant: "migrationPrimary" },
      { label: "Book A Call", href: "#", variant: "migrationOutline" },
    ],
  },

  // Client wall mixes real logo assets already available in the project
  // (public/assets/image2/) with plain text marks reused verbatim from
  // erpSoftwareHyderabad.js / erpSoftwareBangalore.js for the clients that
  // don't have a dedicated logo file yet — same "no image available"
  // fallback convention already established for ClientsSection.
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
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      { name: "BharatPe", logo: "/assets/image2/bharatpe.png" },
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      "DealShare",
      "Acro Engineering",
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      "Inshorts",
      "Green Gas Limited",
      "Verka",
    ],
  },

  services: {
    title: "Our SAP Business One Services Portfolio in Kerala",
    description: "Being a leading SAP solutions provider in Kerala, our full range of service offerings includes ERP support from start to finish.",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "As a leading SAP company in Kerala, Ayushman Solution facilitates a smooth licensing and installation process. We provide SAP Business One licensing solutions aligned with specific business requirements and implementation needs.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation",
        description:
          "Ayushman Solution provides SAP Business One implementation services in Kerala using a structured implementation approach designed to understand business requirements, configure the solution effectively, and support a smooth ERP rollout.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "Customization",
        description:
          "Customize SAP Business One ERP software in Kerala according to your business needs, goals, operational challenges, processes, and budget with Ayushman Solution.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "Extend SAP Business One with purpose-built add-ons designed for specific operational and industry requirements. Ayushman Solution helps businesses enhance ERP capabilities through scalable SAP Business One add-on solutions.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description:
          "Ayushman Solution helps businesses seamlessly upgrade to newer SAP Business One versions while supporting standard products, integrations, and add-ons throughout the upgrade process.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On-site & Off-site)",
        description:
          "Maximize the value of SAP Business One ERP software in Kerala with structured documentation and practical training. Ayushman Solution supports both on-site and off-site training to help teams use their ERP solution effectively.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Support",
        description:
          "Ayushman Solution provides dependable, 24/7 SAP Business One support to help businesses resolve operational and technical issues and maintain stable ERP operations.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Ayushman Solution works closely with businesses throughout the SAP Business One SQL to HANA migration journey, including assessment, planning, data migration, go-live, validation, and post-migration support.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
    ].map((item) => ({ ...item, forceVisible: true })),
  },

  // Reused verbatim from erpSoftwareHyderabad.js / erpSoftwareBangalore.js /
  // sapSolutions.js's own news feed — same already-established,
  // already-Ayushman-branded news content.
  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News & Articles",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "24 May 2024",
        title: "Ayushman Solution Presents Cutting-edge SAP S/4HANA Cloud Solutions Portfolio at SAP NOW India 2024",
        source: "BUSINESS INSIDER",
        background: "#0a0a0a",
        href: "#",
      },
      {
        date: "24 May 2024",
        title: "Ayushman Solution Embarks on SAP NOW 2024's Mission: Showcases Indian Businesses the SAP S/4HANA Cloud Pathway to Global...",
        source: "Deccan Herald",
        background: "#127877",
        href: "#",
      },
      {
        date: "24 May 2024",
        title: "Ayushman Solution Presents Broad SAP S/4HANA Cloud Solutions Portfolio at SAP NOW India 2024",
        source: "newsX",
        background: "#e0242c",
        href: "#",
      },
      {
        date: "20 Mar 2024",
        title: "Ayushman Solution Scoops Two Top Awards at SAP Partner Summit 2024, Singapore",
        image: "/assets/image2/awards.webp",
        href: "#",
      },
    ],
  },

  // TODO: no dedicated photography exists for these four posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "10 Mar 2025",
        title: "S/4HANA Cloud 2025: UX Enhancements That Are Taking...",
        description: "Cloud technology has seen massive technological advancements enabling even the most...",
        image: "/assets/image2/solution-products-img-2.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "08 Oct 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest...",
        description: "Ensuring consistent quality management is crucial for enhancing customer relationships, building...",
        image: "/assets/image2/SAP-Services-1.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "05 Feb 2025",
        title: "Understanding AI in SAP Business One: A Complete...",
        description: "The integration of AI in SAP has been a game-changer for...",
        image: "/assets/image2/SAP-Services-2.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // Reused verbatim from sapBusinessOneChennai.js's own case-study wall —
  // same already-established, already-Ayushman-branded customer stories.
  // The reference screenshot's own case studies (Jivo, Gopal Corporation,
  // Revex Group) are Uneecops customers and are NOT reused here.
  caseStudies: {
    title: "Case Studies",
    items: [
      {
        title: "Agro-Chemical Enterprise Achieved Better Demand and Production Forecasting with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Agro-Chemical",
        revenue: "100 Cr+",
        employees: "10,000+",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0b2a78 0%,#178ae8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "FixDerma Transformation and Automation Journey with Ayushman Solution",
        personName: "Shaily Mehrotra",
        personRole: "CEO & Founder, FixDerma",
        title: "Fixing FixDerma's Digital Transformation Challenges | A Customer Success Story",
        industry: "Skincare",
        revenue: "100 Cr+",
        employees: "200+",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Inshorts Goes Live With SAP ERP x Ayushman Solution",
        personName: "Abhishek Bakshi",
        personRole: "GM - Finance, Inshorts",
        title: "Inshorts Goes Live with SAP ERP x Ayushman Solution | A Customer Success Story",
        industry: "News & Publishing",
        revenue: "180 Cr+",
        employees: "700+",
        location: "India",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Consult the Best SAP Business One Partner in Kerala",
    description:
      "We provide SAP Business One ERP solutions in Kerala designed around your business needs. Connect with Ayushman Solution to explore implementation, customization, support and ERP transformation opportunities.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "When does your organization need an ERP software?",
        answer:
          "Once manual processes, spreadsheets, or disconnected legacy tools start slowing down inventory, sales, accounting, or reporting, it's time for an ERP. SAP Business One brings all of these functions onto a single connected platform, so growing businesses can scale without operational bottlenecks.",
      },
      {
        question: "What is the implementation cost of SAP Business One in Kerala?",
        answer:
          "Implementation cost depends on your license count, modules, add-ons, and customization scope. Book a call with our SAP consultants for a tailored quote based on your business requirements in Kerala.",
      },
      {
        question: "Which ERP software is ideal for mid-market companies?",
        answer:
          "SAP Business One is purpose-built and priced for small and mid-sized businesses, giving them the same enterprise-grade finance, inventory, and CRM capabilities used by larger organizations, without unnecessary complexity or cost.",
      },
      {
        question: "Why choose Ayushman Solution for SAP ERP Solutions in Kerala?",
        answer:
          "Ayushman Solution is a CMMI Level 5 company with 11+ years of experience in the SAP Business One vertical, offering 12+ industry-specific add-ons and end-to-end support - from licensing and implementation to migration, training, and ongoing SAP Business One support in Kerala.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #0d2c7d 0%, #178ae8 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
