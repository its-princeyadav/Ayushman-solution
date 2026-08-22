// Content for /erp/erp-software-noida ("SAP Business One Partners in Noida").
// Sibling of sapBusinessOneDelhiNCR.js (Noida is one of the NCR cities that
// page already names) — reuses the exact same section components as every
// other data/sap/*.js page. Award history, capability stats, client wall,
// and the three case studies are reused verbatim from the Delhi NCR page
// (same company-wide facts / same NCR-region case studies, not fabricated
// Noida-specific claims). FAQSection is additionally wired in here, unlike
// the Nepal page, per this page's own brief.

export const sapBusinessOneNoida = {
  hero: {
    // Generic city/business photography already established in the design
    // system (public/assets/image2) — no dedicated Noida landmark photo
    // exists in the project, so no new asset was introduced.
    backgroundImage: "/assets/image2/city-06.webp",
    align: "right",
    textTheme: "light",
    title: "SAP Business One Partners in Noida",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Collaborate with the Finest SAP Partners in Noida",
    paragraphs: [
      "Want to simplify your business and power productivity? Obtain the full potential of your company by joining hands with the most reliable SAP Business One partners in Noida. With an aim of providing top-notch SAP solutions, Ayushman Solutions, a well-established SAP solution provider in Noida, assists small and mid-sized businesses in automating, integrating, and enhancing through SAP B1. If you're a manufacturer, distributor, retailer, or service provider, we customize ERP solutions that work for you and scale with your business.",
    ],
  },

  // TODO: no dedicated Noida skyline illustration exists in the project yet —
  // reusing an already-established real asset (same convention as every
  // sibling city page's own "no dedicated photography" notes).
  cityBusiness: {
    imagePosition: "left",
    imageStyle: "boxed",
    image: "/assets/image2/drone-img.webp",
    imageAlt: "Noida business district",
    title: "Leading SAP Partners in Noida\nFuelling Businesses All Across the City",
    description: [
      "Noida's commercial ecosystem is flourishing, characterized by a vibrant startup culture, solid infrastructure, and increasing investment. As your company scales, so do the layers of operational challenges. That's where Ayushman Solutions steps in. As a trusted SAP Business One partner in Noida, we provide customized ERP solutions to suit Noida's energetic business environment. Need real-time insight? Operational efficiency? Less manual overhead? We'll get you there.",
    ],
  },

  // Reuses FeatureCard/BenefitsSection exactly as the SAP Implementation
  // page's "Packages" section does — showDots disabled since only 3 items
  // are supplied, so all three sit in view without needing to scroll.
  localBenefits: {
    title: "Based in Noida? Looking for SAP Partners in Noida? Ayushman Solutions is Just Around the Corner!",
    description:
      "At Ayushman Solutions, we know the importance of proximity to our clients. Wherever your business resides across Noida's sectors or industrial areas, our SAP Business One consultants are always close by.",
    items: [
      { icon: "headset", title: "Speedy On-Site Support" },
      { icon: "exchange", title: "Accelerated Problem-Solving" },
      { icon: "handshake", title: "A Cultural Affinity That Makes Communication Effortless" },
    ],
    closingParagraphs: [
      "Unlike remote consultants who might encounter delays or miscommunications, our close proximity as a trusted SAP partner in Noida lets us serve you without logistical issues or travel headaches.",
      "Beyond that, deep local expertise fosters cultural sensitivity, facilitates direct communication, and enables more efficient, relevant decision-making that aligns with your distinct business culture. Ayushman Solutions, a dependable SAP solution provider in Noida, stays in sync with you.",
    ],
    buttons: [
      { label: "Need Help?", href: "#", variant: "migrationPrimary" },
      { label: "Let's Connect", href: "#", variant: "migrationOutline" },
    ],
  },

  erpLifecycle: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Keep Your ERP Up and Running 24/7 with the Reliable SAP Partners in Noida",
    description: [
      "Ayushman Solutions, a trustworthy SAP service company in Noida, brings you an entire life cycle of SAP Business One services to make sure your ERP isn't just implemented — it's optimized for performance, every time. Our partnership with you starts with a business process gap analysis, then we customize and test SAP B1 for you, and follow through with comprehensive user training to energize your team once implemented.",
      "You can rely on our continuous support and troubleshooting to keep your ERP robust and current. With rapid deployments and trusted post-go-live support, Ayushman Solutions makes sure your ERP spend generates actual impact, no hassle.",
    ],
    advantagesTitle: "Our Comprehensive Services Include:",
    advantages: [
      {
        icon: "boxes",
        title: "Needs Assessment & Pilot Runs",
        description: "Structured system refinement before go-live, tailored to your business processes.",
      },
      {
        icon: "handshake",
        title: "Hands-On Team Enablement",
        description: "Role-specific guidance so every department gets comfortable with SAP B1 fast.",
      },
    ],
  },

  // Plain text benefit grid (no card boxes) on a dark navy background,
  // matching every other dark-navy CenteredSection already used across the
  // SAP module (theme="light" = light/white text on a dark fill).
  whySapStandsOut: {
    title: "Thinking ERP? Here's Why SAP Business One Stands Out",
    description:
      "SAP Business One is a scalable ERP system built for the unique needs of small and mid-sized companies. It unifies business processes, giving you live insight into every corner of your business so you can make quicker, data-driven decisions. It supports industry-specific modules, so it's relevant whether you're in manufacturing, pharma, trading, retail, or services — and its modular nature means you only pay for what you need while still being able to expand as your business grows.",
    subtitle: "Reasons Why SAP Business One is the Right Move:",
    items: [
      {
        title: "Unified Business Platform",
        description:
          "Manage everything — from finance and sales to customer relationships, inventory, and operations — within a single, fully integrated system.",
      },
      {
        title: "Instant Insights for Smarter Decisions",
        description: "Access real-time dashboards, analytics, and KPIs that help you make fast, data-driven decisions confidently.",
      },
      {
        title: "Tailored for Your Industry Needs",
        description: "Irrespective of your niche, SAP B1 adapts to your specific workflows, goals, and compliance requirements.",
      },
      {
        title: "Anytime, Anywhere Access",
        description: "Run your business on the go with cloud deployment and mobile-ready features that give your team the freedom to work seamlessly from anywhere.",
      },
    ],
    centeredItem: {
      title: "Built to Scale with You",
      description: "Start small and expand effortlessly. SAP Business One evolves with your workflows, removing the need for expensive platform changes down the road.",
    },
    background: "#0a1e3c",
    button: { label: "Request A Callback", href: "#", variant: "migrationPrimary" },
  },

  // Reused verbatim from the other city pages' own award timeline — same
  // established SAP Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solutions is your trusted SAP Partner in Noida and Across India",
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

  capability: {
    title: "Ayushman Solutions: What Makes Us an Outstanding Choice as SAP Business One Partner in Noida?",
    description:
      "Our company has carved its niche in the SAP Business One partner landscape and has over a decade-long experience in combining efficiency with the most outstanding ERP systems in India.",
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

  // Client wall mixes real logo assets already available in the project with
  // plain text marks for clients that don't have a dedicated logo file yet —
  // same convention already established for ClientsSection across every
  // sibling page.
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

  services: {
    title: "Top SAP Partners in Noida: Explore Comprehensive Services Offered by Ayushman Solutions",
    description:
      "Ayushman Solutions — a highly recommended SAP service company in Noida — offers a complete, 360-degree set of SAP Business One services. From strategic consultation to seamless implementation and continuous optimization, our methodology is crafted to encompass every phase of your SAP experience.",
    items: [
      {
        label: "License Advisory & Seamless Deployment",
        description:
          "Selecting the ideal SAP Business One license is important, and we simplify it. Be it Professional, Limited, or Starter licenses, our experts advise you according to your business size, industry, and user roles, then handle the full-stack purchasing and installation in a secure, finely-tuned environment.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Tailored Implementation & Deep Customization",
        description:
          "Your business is one of a kind — your ERP should be too. We deliver bespoke SAP B1 implementations built around your unique operational workflows, with rapid implementations plus module-level customizations, personalized dashboards, and custom reporting structures.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "Migration from SQL to SAP HANA",
        description:
          "Considering a leap from SAP B1 on SQL to the powerful SAP HANA platform? We make the move seamless, focusing on data integrity, business continuity, compatibility, and careful transition planning for faster analytics and real-time processing.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Industry-Specific Add-Ons",
        description:
          "Standard out-of-the-box ERP functionality doesn't fit every industry. We deliver industry-focused SAP B1 add-ons for sectors such as manufacturing, pharma, logistics, and retail that simplify compliance and automate specialized processes.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Product & Add-On Upgrades",
        description:
          "Keeping your ERP environment current is essential for performance and usability. We provide structured upgrades for SAP Business One and compatible custom add-ons, focused on system stability, compatibility, and user experience.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting for SAP Business One",
        description:
          "We provide secure, scalable, and professionally managed cloud hosting for SAP Business One, so your team can access ERP capabilities from anywhere without maintaining extensive physical server infrastructure on-site.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Onsite & Remote Training with Complete Documentation",
        description:
          "ERP success depends on empowering users. We provide role-specific SAP Business One training through onsite and remote formats, backed by documentation and workflow walkthroughs for finance, sales, warehouse, and operations teams.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
      {
        label: "Ongoing Support & Preventive Maintenance",
        description:
          "Our involvement doesn't end at go-live. We support your SAP Business One environment through proactive maintenance, health checks, issue resolution, and performance reviews, keeping your ERP secure, stable, and ready to evolve with your business.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ],
  },

  // TODO: no dedicated photography exists for these posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "10 Mar 2025",
        title: "S/4HANA Cloud 2025: UX Enhancements That Are Taking Over",
        description: "Cloud technology has seen massive technological advancements enabling even the most...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "08 Oct 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest Investment",
        description: "Ensuring consistent quality management is crucial for enhancing customer relationships, building...",
        image: "/assets/image2/SAP-Services-1.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "16 Sep 2025",
        title: "Understanding AI in SAP Business One: A Complete Guide",
        description: "The integration of AI in SAP has been a game-changer for...",
        image: "/assets/image2/SAP-Services-2.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // Reused from sapBusinessOneDelhiNCR.js's own case studies — Noida sits
  // inside the same NCR region that page already names (Faridabad, Gurgaon,
  // Noida, Ghaziabad), so its existing, already-verified case studies apply
  // directly rather than inventing new Noida-specific client names/figures.
  caseStudies: {
    title: "Case Studies",
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
        location: "Delhi NCR, India",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Schell India Integrated all Business Functions and Laid the Foundation of its Indian Subsidiary with SAP Business One®",
        image: "/assets/image2/SAP-Services-2.png",
        industry: "Wholesale Distribution, Manufacturing",
        revenue: "1500 Cr+",
        employees: "20",
        location: "Noida, Delhi NCR, India",
        href: "#",
      },
      {
        title: "Agro-Chemical Enterprise Achieved Better Demand and Production Forecasting with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Agro-Chemical",
        revenue: "100 Cr+",
        employees: "10,000+",
        location: "Gurugram, Haryana, India",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Let's Get Your Business Future-Ready",
    description:
      "Ready to unlock new potential for your SMB with SAP Business One? We'd enjoy working with you on this opportunity — our local experts in Noida are ready to guide you through it all.",
    button: { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What makes Ayushman Solutions a reliable SAP Business One partner in Noida?",
        answer:
          "Ayushman Solutions maintains an on-ground team serving Noida and the wider Delhi NCR region, offering local implementation, consulting, and support expertise backed by over a decade of SAP Business One experience.",
      },
      {
        question: "What kind of post-implementation support does Ayushman Solutions offer?",
        answer:
          "We offer 24/7 support through onshore, offshore, and hybrid engagement models, backed by a dedicated support portal for ticketing, remote assistance, and on-site visits whenever required.",
      },
      {
        question: "Can SAP Business One integrate with my existing software tools?",
        answer:
          "Yes. SAP Business One integrates with e-commerce platforms, payment gateways, CRM, analytics, and statutory compliance tools through our in-house add-ons.",
      },
      {
        question: "What is the SAP Business One cost for a small business?",
        answer:
          "Cost depends on your license count, modules, add-ons, and customization scope. Book a call with our SAP consultants for a tailored quote based on your business requirements.",
      },
      {
        question: "Is SAP Business One available on the cloud?",
        answer:
          "Yes. SAP Business One can be deployed on the cloud, letting you cut infrastructure costs while keeping the same enterprise-grade finance, inventory, and CRM capabilities.",
      },
      {
        question: "Do I need a full-time IT team to manage SAP Business One?",
        answer:
          "No. Our ongoing support and preventive maintenance services are designed so your business doesn't need a dedicated in-house IT team to keep SAP B1 running smoothly.",
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
