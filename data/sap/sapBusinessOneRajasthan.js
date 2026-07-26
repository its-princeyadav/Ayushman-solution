// Content for /erp/erp-software-rajasthan ("ERP Software Rajasthan").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from, which already lists this exact route/title/image) and
// sapBusinessOneDelhiNCR.js / sapBusinessOnePune.js (the other city pages in
// this family) — reuses the exact same section components as every other
// data/sap/*.js page, only this file's content differs. Page-scoped rebrand
// (navy heading / yellow accent) matches SapNearYou.module.css since this is
// a direct city-page sibling of that listing. Unlike most siblings, this
// page's own reference layout has no FAQ or separate office-address section,
// so those blocks are intentionally omitted here rather than padded in.

export const sapBusinessOneRajasthan = {
  // Reusing this state's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-1.png",
    align: "right",
    textTheme: "light",
    title: "ERP Software Rajasthan",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Automate Your Business with ERP Software in Rajasthan",
    description:
      "Trusted by industry leaders across the state, Ayushman Solution is an SAP Business One partner that offers robust ERP solutions to organizations of every size based in Jaipur, Jodhpur, Kota, Bikaner and other regions of Rajasthan, helping them simplify their business functions with a complete and modern ERP solution.",
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
      "An enterprise-ready and affordable business solution, SAP Business One helps your business run easier with a modern, fresh look and feel, sophisticated analytic charting capabilities, and end-to-end capabilities to streamline your business operations.",
      "Designed and priced for organizations of every size, it has everything your growing business needs, with in-built BI functionality and an in-memory platform to optimize decision-making across your business. You can also manage multiple business units or subsidiaries with intercompany integration solutions and make faster decisions based on unified data for the whole company.",
    ],
    advantagesTitle: "Designed to Support Business Growth",
    advantages: [
      {
        icon: "store",
        title: "Food & Service",
        description: "Streamlined recipe management, inventory control, and compliance tracking for food and service businesses.",
      },
      {
        icon: "boxes",
        title: "Warehouse & Logistics",
        description: "End-to-end inventory visibility, batch tracking, and route optimization for warehouse and logistics operations.",
      },
    ],
    buttons: [
      { label: "Know More", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Schedule A Call", href: "#", variant: "migrationOutline" },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Ayushman Solution as SAP Business One Implementation Partner?",
    description:
      "Ayushman Solution offers a full range of SAP Business One solutions to accelerate your journey to the Intelligent Enterprise. Having a rich history of servicing clients across 21+ verticals, we are one of the trusted ERP software companies in Rajasthan to service all your SAP Business One requirements seamlessly.",
    buttons: [
      { label: "Request Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneDelhiNCR.js / sapBusinessOnePune.js's
  // own award timeline — same established SAP Partner Award history already
  // used across this module.
  timeline: {
    title: "Ayushman Solution is Your Trusted SAP Business One Partner",
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
  // data/sap/*.js city page in this module - the reference screenshot's own
  // numbers are Uneecops-specific and are NOT reused here.
  capability: {
    title: "Ayushman Solution Capabilities",
    description: "Ayushman Solution is a CMMI Level 5 company with 11+ years of experience in the SAP B1 vertical.",
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
  },

  // Client wall mixes real logo assets already available in the project
  // (public/assets/image2/) with plain text marks reused verbatim from
  // sapBusinessOneDelhiNCR.js / sapBusinessOnePune.js for the clients that
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
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      "King Koil",
      "Acro Engineering",
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "Ajax Fiori", logo: "/assets/image2/ajax-fiori.webp" },
      { name: "Aditya Birla Group", logo: "/assets/image2/aditya-nbirla-group.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      "Butterfly",
      "Green Gas Limited",
      "Verka",
    ],
  },

  // Exactly six service cards, matching this page's own reference layout
  // (3 x 2 grid) rather than the eight-card set used on the other city
  // pages in this family.
  services: {
    title: "Services We Offer",
    description: "Ayushman Solution offers complete end-to-end ERP services which comprise:",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "Make smart business decisions as you partner with one of the leading ERP companies in Rajasthan. We guide you through SAP Business One licensing options, how you can use them, and everything else related to procurement.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "Ayushman Solution works on the best deployment practices. With extensive SAP Business One implementation expertise, we understand how to meet the exact demands of our customers.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Easily manage every aspect of your SAP Business One SQL to HANA migration. Our experts work closely with you on requirement analysis, roadmap planning, application readiness, data migration, thorough testing, and support from go-live to ongoing operations.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "Ayushman Solution provides SAP Business One add-on development to support unique business models and industry requirements, extending SAP Business One with capabilities such as digital integrations, POS, industry-specific workflows, and automation.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description:
          "Seamlessly upgrade to newer versions of SAP Business One with our experts by your side. Make a safe transition to the latest version while maintaining compatibility with your standard products and add-ons.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description:
          "Get maximum value from your SAP Business One implementation with structured training. We shorten the learning curve with the documentation and training your team needs to use the platform effectively.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
    ].map((item) => ({ ...item, forceVisible: true })),
  },

  // TODO: no dedicated photography exists for these four posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs",
    action: { label: "Find Out More", href: "#" },
    items: [
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
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // Reused verbatim from sapBusinessOneDelhiNCR.js's own case-study wall
  // (Raj Overseas) plus sapBusinessOneChennai.js's FixDerma/Agro-Chemical
  // stories — same already-established, already-Ayushman-branded customer
  // stories. The reference screenshot's own case studies for Sharika Life
  // Science and Acro Engineering are Uneecops customers and are NOT reused
  // here as full case studies ("Acro Engineering" appears only as a plain
  // logo mark in `clients` above, not as an endorsement/case study).
  caseStudies: {
    title: "Case Studies",
    action: { label: "Find Out More", href: "#" },
    items: [
      {
        bannerColor: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Raj Overseas Transformation and Automation Journey with Ayushman Solution",
        personName: "Shailin Smith",
        personRole: "CEO, Raj Overseas",
        title: "Weaving Raj Overseas' Operations Together with SAP ERP | A Success Story",
        industry: "Yarn Spinning & Carpet Weaving",
        revenue: "27 Cr+",
        employees: "600+",
        location: "Delhi, India",
        href: "#",
        download: { href: "#" },
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
        title: "Agro-Chemical Enterprise Achieved Better Demand and Production Forecasting with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Agro-Chemical",
        revenue: "100 Cr+",
        employees: "10,000+",
        location: "India",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Get In Touch",
    description:
      "Ayushman Solution is a trusted ERP implementation partner in Rajasthan - your advisor today and into the future. We've helped customers of all sizes, across all industries, transform and simplify their business in Rajasthan.",
    button: { label: "Contact Us", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #0d2c7d 0%, #178ae8 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
