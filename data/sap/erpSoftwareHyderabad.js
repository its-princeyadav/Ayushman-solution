// Content for /erp/erp-software-hyderabad ("ERP Software Hyderabad").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from, which already lists this exact route/title/image) and
// erpSoftwareBangalore.js / sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js
// / sapBusinessOneDelhiNCR.js / sapBusinessOneChennai.js (the other city pages
// in this family) — reuses the exact same section components as every other
// data/sap/*.js page, only this file's content differs. Page-scoped rebrand
// (navy heading / yellow accent) matches SapNearYou.module.css since this is
// a direct city-page sibling of that listing.

export const erpSoftwareHyderabad = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/modern-sap-migration.webp",
    align: "right",
    textTheme: "light",
    title: "ERP Software Hyderabad",
    description:
      "Ayushman Solution helps businesses across Hyderabad streamline finance, inventory, sales and operations with SAP Business One — a single, connected ERP platform.",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Automate Your Business with Modern ERP Software in Hyderabad",
    paragraphs: [
      "Ayushman Solution is a trusted SAP Business One partner offering robust ERP solutions to organizations of every size across Hyderabad, Warangal, Karimnagar, Khammam and other regions of Telangana. We help businesses simplify their day-to-day operations with a complete and modern ERP solution built around SAP Business One.",
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
    title: "Why SAP Business One is Ideal for my Business?",
    description: [
      "An easy to use and affordable business solution, SAP Business One manages your key business functions from financials, logistics, finance, sales accounting, human resources, customer relationship management and more.",
      "Designed and priced for all sized organizations, it has everything your growing business needs, with in-built BI functionality and an in-memory platform to optimize decision-making across your business.",
      "The software helps you file GST, GST returns, e-way bills, e-invoicing and TDS, while helping you manage ongoing business challenges and reduce overhead IT costs by up to 80% as you move to SAP Business One Cloud.",
    ],
    buttons: [
      { label: "Know More", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Ayushman Solution as Your SAP Business One Partner in Hyderabad",
    description:
      "Ayushman Solution is a CMMI Level 5 company with 11+ years of experience in the SAP Business One vertical, servicing clients across 18+ industry verticals. When it comes to end-to-end SAP Business One requirements in Hyderabad, we are the partner businesses confide in.",
    buttons: [{ label: "Request Demo", href: "#", variant: "migrationPrimary" }],
    background: "#0a1e3c",
  },

  // Reused verbatim from erpSoftwareBangalore.js / sapBusinessOneAhmedabad.js /
  // sapBusinessOneMumbai.js / sapBusinessOneDelhiNCR.js's own award timeline —
  // same established SAP Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solution is Your Trusted SAP Business One Partner in Hyderabad",
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

  telangana: {
    title: "The Ayushman Solution Edge - SAP Business One Telangana",
    description:
      "Ayushman Solution plays an essential role in enabling Telangana's businesses to integrate the SAP solution that supports 360° company functions. We are the SAP Business One partner industry leaders rely on across the state, including but not limited to:",
    // TODO: no dedicated photography exists for Warangal/Karimnagar/Khammam
    // yet — reusing already-established real assets from elsewhere in the
    // design system (existing landmark/city photography already proven safe
    // for this alternating image-content layout).
    cities: [
      {
        imagePosition: "left",
        image: "/assets/image2/city-05.webp",
        imageAlt: "Warangal landmark",
        title: "SAP Business One Warangal",
        description:
          "With Ayushman Solution as an implementation partner and technical guide, Warangal's SMEs benefit significantly from SAP Business One. They can now efficiently manage their core business functions and integrate business intelligence into their processes.",
      },
      {
        imagePosition: "right",
        image: "/assets/image2/city-06.webp",
        imageAlt: "Karimnagar landmark",
        title: "ERP Software Karimnagar",
        description:
          "Using ERP software in Karimnagar, companies are able to manage their key business functions — from financials and logistics to sales accounting, human resources, customer relationship management and more.",
      },
      {
        imagePosition: "left",
        image: "/assets/image2/sap-migration-01.webp",
        imageAlt: "Khammam landmark",
        title: "SAP Business One Khammam",
        description:
          "Small, medium, and large businesses in Khammam are moving to the SAP Business One platform to digitize their operations. Top Khammam companies confide in Ayushman Solution to service their SAP Business One requirements end-to-end.",
        buttons: [
          { label: "Get Quote", href: "#", variant: "migrationPrimary" },
          { label: "Schedule A Call", href: "#", variant: "migrationOutline" },
        ],
      },
    ],
  },

  capability: {
    title: "Ayushman Solution Capabilities",
    description:
      "Ayushman Solution is a CMMI Level 5 company having 11+ years of experience in the SAP B1 vertical. That is why we are a trusted name for ERP software in Hyderabad.",
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
  // erpSoftwareBangalore.js / sapBusinessOneDelhiNCR.js for the clients that
  // don't have a dedicated logo file yet — same "no image available" fallback
  // convention already established for ClientsSection.
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
      { name: "Addverb Technologies", logo: "/assets/image2/addverb-technologies.webp" },
      { name: "Aditya Birla Group", logo: "/assets/image2/aditya-nbirla-group.webp" },
      { name: "Ajax Fiori", logo: "/assets/image2/ajax-fiori.webp" },
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      { name: "Global", logo: "/assets/image2/Global.png" },
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      "Inshorts",
      "Green Gas Limited",
      "Verka",
    ],
  },

  services: {
    title: "Services We Offer",
    description:
      "Ayushman Solution provides end-to-end SAP Business One services in Hyderabad, designed to support businesses throughout their ERP journey.",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "Why worry when you can make informed decisions on license procurement and installation? We are around to answer all your queries concerning SAP Business One licenses, how to use them, and standard ongoing support.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "We work on the international standard and ASAP model of implementation. With extensive SAP Business One implementation expertise, we understand the variables involved in ERP implementation and how to make it successful for your business.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Our team works with you to manage all aspects of SAP Business One SQL to HANA migration. This comprises detailed assessment, planning, application readiness, data migration, thorough testing, go-live and ongoing support.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "Our SAP Business One add-on development services help businesses address industry-specific requirements and simplify complex processes across manufacturing, logistics, retail, pharma and other business environments.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description:
          "We help you upgrade to newer versions of SAP Business One without unnecessary business disruption. Move securely to the latest version through a carefully planned, seamless and cost-effective upgrade process.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting Services",
        description:
          "We provide cloud hosting and managed services designed to keep your business applications and IT infrastructure available, secure and scalable. Our cloud solutions can be tailored around the operational requirements of your business.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description:
          "Maximize the value of SAP Business One with specialized training and documentation. Help your teams confidently work with important SAP B1 areas including Sales, Purchasing, Banking, Financials and other essential business functions.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Support",
        description:
          "We provide ongoing SAP Business One support to help maintain continuity of your business operations. Our support team can assist with critical issues, functional guidance, knowledge transfer and day-to-day SAP Business One requirements.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ].map((item) => ({ ...item, forceVisible: true })),
  },

  // Reused verbatim from erpSoftwareBangalore.js / sapSolutions.js's own news
  // feed — same already-established, already-Ayushman-branded news content.
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
    title: "Consult the Best SAP Implementation Partner in Hyderabad",
    description: "We are your trusted partner of choice who can carry out a successful ERP implementation on time and within budget.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  // TODO: placeholder office address — replace with Ayushman Solution's
  // actual Hyderabad office address before publishing. Left unfilled rather
  // than reusing a real third-party address found in reference material,
  // since publishing someone else's real business address as this page's own
  // office would misrepresent the company's actual location.
  address: {
    imagePosition: "right",
    image: "/assets/image2/who-we-are-hero-img.webp",
    imageAlt: "Ayushman Solution Hyderabad office",
    title: "Get In Touch",
    description: [
      "Contact us for end-to-end SAP Business One support in Hyderabad, or simply drop in for coffee. Hyderabad office address to be confirmed.",
    ],
    buttons: [{ label: "Contact Us", href: "#", variant: "migrationPrimary" }],
    background: "#0a1e3c",
    theme: "light",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #0d2c7d 0%, #178ae8 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
