// Content for /sap ("SAP ERP" hub page). This is the landing page the main
// navbar's "SAP ERP" mega-menu category links to (see components/Whatwedo.jsx,
// CATEGORIES[0].href) — it did not exist before, so that click 404'd. Reuses
// the exact same section components as every other data/sap/*.js page. The
// awards timeline, capability stats, client wall, testimonials, blogs, case
// studies, and FAQ are reused verbatim from sapSolutions.js — this project's
// own established, already-approved SAP content — rather than invented fresh
// for this page. The one page-specific block is `practiceAreas`, which links
// out to every real SAP sub-page already built in this project (no
// placeholder "#" hrefs).

export const sapHub = {
  hero: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    title: "Everything You Need to Succeed with SAP",
    description:
      "One partner for your entire SAP journey — from SAP Business One and SAP S/4HANA Cloud to implementation, support, and managed services.",
    buttons: [
      { label: "Explore SAP Solutions", href: "/sap/solutions", variant: "primary" },
      { label: "Talk to an Expert", href: "#", variant: "outlineLight" },
    ],
  },

  intro: {
    title: "Your Trusted SAP Partner for Every Stage of the Journey",
    description:
      "Whether you're evaluating SAP for the first time, implementing SAP Business One, or scaling into SAP S/4HANA Cloud, Ayushman Solutions brings over a decade of SAP Business One expertise to guide you — from consulting and implementation to customization, migration, and 24/7 support.",
  },

  // Links every card to a real, already-built page in this project — no
  // placeholder "#" hrefs, unlike the still-unbuilt Data Analytics/Salesforce
  // mega-menu categories.
  practiceAreas: {
    title: "Explore the Full SAP Practice",
    description: "Everything Ayushman Solutions offers across SAP, in one place.",
    items: [
      {
        label: "SAP Solutions",
        description: "Thrive with SAP Business One and SAP S/4HANA Cloud.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/solutions",
        button: { label: "Explore", href: "/sap/solutions", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One",
        description: "A scalable ERP solution built for growing SMEs.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "/sap/business-one",
        button: { label: "Explore", href: "/sap/business-one", variant: "migrationPrimary" },
      },
      {
        label: "SAP Services",
        description: "Application services and industry-specific deployment.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "/sap/services",
        button: { label: "Explore", href: "/sap/services", variant: "migrationPrimary" },
      },
      {
        label: "SAP Support",
        description: "Enabling IT modernization with SAP managed solutions.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
        button: { label: "Explore", href: "/sap/support", variant: "migrationPrimary" },
      },
      {
        label: "SAP Practices",
        description: "RISE with SAP and GROW with SAP solutions.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/practices",
        button: { label: "Explore", href: "/sap/practices", variant: "migrationPrimary" },
      },
      {
        label: "SAP Consulting",
        description: "Carve your SAP vision with dependable guidance.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/consulting",
        button: { label: "Explore", href: "/sap/consulting", variant: "migrationPrimary" },
      },
      {
        label: "SAP Near You",
        description: "Local, on-ground SAP experts across India and Nepal.",
        image: "/assets/image2/city-06.webp",
        href: "/erp/sap-near-you",
        button: { label: "Explore", href: "/erp/sap-near-you", variant: "migrationPrimary" },
      },
    ],
  },

  // Reused verbatim from sapSolutions.js / sapErp.js's own award timeline.
  timeline: {
    title: "Recognized by SAP",
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

  // Reused verbatim from sapSolutions.js's own "Empowering Businesses" stats
  // — the same approved capability figures already used site-wide.
  capability: {
    title: "Ayushman Solutions' Capabilities",
    description: "A CMMI Level 5 company with over a decade of experience in the SAP Business One vertical.",
    stats: [
      { icon: "handshake", value: "#1 SAP", label: "Platinum Partner" },
      { icon: "certificate", value: "600+", label: "Certified Consultants" },
      { icon: "puzzle", value: "25+", label: "Industry Packages" },
      { icon: "lightbulb", value: "1200+", label: "Implementations" },
    ],
    buttons: [
      { label: "Request Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  // Client wall mixes real logo assets already available in the project with
  // plain text marks for clients that don't have a dedicated logo file yet —
  // same convention already established for ClientsSection across every
  // sibling page.
  ecosystem: {
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
      { name: "BharatPe", logo: "/assets/image2/bharatpe.png" },
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      "DealShare",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      "King Koil",
      "Bakers Circle",
      { name: "ColdEX", logo: "/assets/image2/coldex-logo-1.png" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      { name: "Kimberly-Clark", logo: "/assets/image2/kimberly-clark.webp" },
    ],
  },

  // Reused verbatim from sapSolutions.js / sapErp.js's own testimonials —
  // the same real, already-approved Ayushman Solutions customer names used
  // site-wide.
  testimonials: {
    title: "Keeping Enterprises Ahead",
    description: "See what our clients have to say",
    action: { label: "Know More", href: "#" },
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Pramod Gokhale",
        designation: "General Manager",
        company: "Mankind Pharma",
        background: "linear-gradient(135deg,#0b3d91 0%,#1e73e8 100%)",
        videoUrl: "#",
      },
      {
        name: "Customer Success Story",
        designation: "How Coldex Built Their",
        company: "L.I.V.E. Enterprise with Ayushman Solutions",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        videoUrl: "#",
      },
      {
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
        background: "linear-gradient(135deg,#14304f 0%,#274972 100%)",
        videoUrl: "#",
      },
      {
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote:
          "Ayushman Solutions helped us modernize our SAP landscape without disrupting day-to-day operations — the transition was smooth from day one.",
        name: "Pramod Gokhale",
        designation: "General Manager",
        company: "Mankind Pharma",
      },
      {
        quote: "The team's SAP expertise and responsiveness gave us the confidence to go live on schedule.",
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
      },
      {
        quote: "From planning to go-live, Ayushman Solutions felt like an extension of our own team.",
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
      },
    ],
  },

  // Reused verbatim from sapSolutions.js's own News/Blogs.
  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "24 May 2024",
        title: "Ayushman Solutions Presents Cutting-edge SAP S/4HANA Cloud Solutions Portfolio at SAP NOW India 2024",
        source: "BUSINESS INSIDER",
        background: "#0a0a0a",
        href: "#",
      },
      {
        date: "24 May 2024",
        title:
          "Ayushman Solutions Embarks on SAP NOW 2024's Mission: Showcases Indian Businesses the SAP S/4HANA Cloud Pathway to Global...",
        source: "Deccan Herald",
        background: "#127877",
        href: "#",
      },
      {
        date: "20 Mar 2024",
        title: "Ayushman Solutions Scoops Two Top Awards at SAP Partner Summit 2024, Singapore",
        image: "/assets/image2/awards.webp",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "09 May 2025",
        title: "Are You Testing Your SAP S/4HANA Cloud Projects...",
        description: "Ensuring reliable, error-free SAP S/4HANA Cloud rollouts starts with rigorous testing across every business process.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get the most from every module.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "10 Mar 2025",
        title: "S/4HANA Cloud 2025: UX Enhancements That Are Taking...",
        description: "Cloud technology has seen massive technological advancements enabling even the most complex enterprise workflows.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
    ],
  },

  // Reused verbatim from sapSolutions.js's own case studies.
  stories: {
    title: "Want to Know More About SAP?",
    description: "Explore how we help businesses build intelligent enterprises.",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        bannerColor: "linear-gradient(135deg,#1c3a5e 0%,#2e6fc4 100%)",
        headline: "Sharika Life Science Transformation And Automation Journey With Ayushman Solutions",
        personName: "Anil Bali",
        personRole: "Founder & CEO At Sharika Life Science Ltd.",
        title: "Unveiling Innovation in Pharma: Sharika Life Science Limited's SAP Success Story",
        industry: "Pharma",
        revenue: "—",
        employees: "—",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        headline: "Fixderma Transformation And Automation Journey With Ayushman Solutions",
        personName: "Shaily Mehrotra",
        personRole: "CEO & Founder, Fix Derma",
        title: "Fixing Fix Derma's Digital Transformation Challenges | A Customer Success Story",
        industry: "Skincare",
        revenue: "100 Cr+",
        employees: "—",
        location: "Gurugram, Haryana, India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#123a63 0%,#3f7fd1 100%)",
        headline: "Inshorts Transformation And Automation Journey With Ayushman Solutions",
        personName: "Abhishek Bakshi",
        personRole: "GM - Finance/Inshorts",
        title: "Inshorts Goes Live with SAP ERP x Ayushman Solutions I A Customer Success Story",
        industry: "News & Publishing",
        revenue: "180 Cr+",
        employees: "700+",
        location: "India",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Rise with Ayushman Solutions",
    description: "Ready to unlock the full power of SAP for your business? Our team is ready to help.",
    button: { label: "Connect With Us", href: "#", variant: "primary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  // Reused verbatim from sapSolutions.js / sapErp.js's own FAQ.
  faq: {
    title: "FAQs",
    items: [
      {
        question:
          "Can SAP Business One be integrated with other solutions and is compatible with third-party systems?",
        answer:
          "Yes. SAP Business One is built with open APIs and a broad partner ecosystem, so it integrates cleanly with e-commerce platforms, CRM tools, banking systems, and other third-party applications your business already relies on.",
      },
      {
        question: "How does Ayushman Solutions help with SAP S/4HANA transformation?",
        answer:
          "As an SAP Platinum Partner through United VARs, Ayushman Solutions brings deep implementation, migration, and managed-services experience to every SAP S/4HANA transformation, backed by industry-specific accelerators and a dedicated support team.",
      },
      {
        question: "What functionalities does SAP Business One offer?",
        answer:
          "SAP Business One covers financials, sales, purchasing, inventory, production, project management, and reporting in a single, integrated application built for small and midsize businesses.",
      },
      {
        question: "What SAP practice areas does Ayushman Solutions cover?",
        answer:
          "Consulting, implementation, customization, integration, migration, licensing, add-ons, managed services, and 24/7 support — across SAP Business One and SAP S/4HANA Cloud.",
      },
      {
        question: "Do you offer local, on-ground SAP support?",
        answer:
          "Yes. Ayushman Solutions has on-ground SAP teams across multiple Indian cities and Nepal, offering local implementation, consulting, and support expertise — see SAP Near You for the full list.",
      },
      {
        question: "Who can use SAP software?",
        answer:
          "SAP software scales from small and midsize businesses using SAP Business One to large global enterprises running SAP S/4HANA, across virtually every industry.",
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
