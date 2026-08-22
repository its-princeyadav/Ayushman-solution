// Content for /erp/erp-software-gurgaon ("SAP Business One Partner in
// Gurgaon"). Sibling of sapBusinessOneNoida.js / sapBusinessOneDelhiNCR.js —
// reuses the exact same section components as every other data/sap/*.js
// page. Award history, capability stats, client wall, and the three case
// studies are reused verbatim from the Delhi NCR page (same company-wide
// facts / same NCR-region case studies, not fabricated Gurgaon-specific
// claims — Gurgaon/Gurugram is one of the NCR cities that page already
// names).

export const sapBusinessOneGurgaon = {
  hero: {
    // Generic city/business photography already established in the design
    // system (public/assets/image2) — no dedicated Gurgaon landmark photo
    // exists in the project, so no new asset was introduced.
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    textTheme: "light",
    title: "Ayushman Solutions - Leading SAP Partner in Gurgaon, Powering Business Transformation",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Redefine Growth with Gurgaon's Most Reliable SAP B1 Partners",
    paragraphs: [
      "Gurgaon's cutthroat business environment is thriving, and to survive, you need to be more than hungry. First, you need smart technology; second, efficient operations; and third, data-driven decisions. Together with SAP Business One and a trusted SAP implementation partner, your expanding business will grow faster, run smoother, and scale smarter. Find the right SAP Business One partners in Gurugram, and discover the premium performance hidden deep within your operation.",
    ],
  },

  // TODO: no dedicated Gurgaon skyline illustration exists in the project
  // yet — reusing an already-established real asset (same convention as
  // every sibling city page's own "no dedicated photography" notes).
  cityBusiness: {
    imagePosition: "left",
    imageStyle: "boxed",
    image: "/assets/image2/drone-img.webp",
    imageAlt: "Gurgaon business district",
    title: "Best SAP Business One Partners in Gurgaon:\nEmpowering Businesses Throughout the City",
    description: [
      "Once called the Cyber City of India, Gurugram today is an innovation nerve centre with Fortune 500 companies, fast-scaling start-ups, and a deep manufacturing footprint. As the city pivots from a start-up industrialization hub to a dynamic, leading commercial capital, the demand for efficient, high-quality, and scalable business processes is higher than ever. Ayushman Solutions, as a leading SAP implementation company in Gurgaon, takes businesses on a digital transformation with SAP Business One, adopted globally as the trusted ERP solution — helping manage your finance, sales, inventory, and operations seamlessly. We believe in growing sustainably together.",
    ],
  },

  // Reuses FeatureCard/BenefitsSection exactly as the SAP Implementation
  // page's "Packages" section does. Unlike the Noida page's 3-item local
  // benefits (which fit a single view with no scrolling), this page has 4
  // items, so the Slider's arrows genuinely let visitors reach the 4th card.
  localBenefits: {
    title: "Simplify, Automate, Succeed – With an Expert SAP Partner in Gurgaon",
    description:
      "So, whether you're located in Cyber City's glittering skyscrapers, the manufacturing districts of Udyog Vihar, the IT complexes of Golf Course Road, or the new growth centres on Sohna Road, Ayushman Solutions' local SAP Business One consultants can get to you fastest. As the leading SAP partners in Gurgaon, we know how being close to home is important. Our Gurgaon-based experts cut through the communication lag time that remote management creates — you receive quicker on-site support, in-person teamwork, and rapid problem-solving, helping keep projects moving smoothly and at the speed you require. Beyond this, a deep local expertise wins you cultural sensitivity, streamlined communication, and more efficient, relevant decision-making that aligns with your unique business culture. We're here, in tune with your needs.",
    subtitle: "Key Benefits of Our Local Presence as SAP Implementation Company in Gurgaon",
    items: [
      {
        icon: "headset",
        title: "Faster On-Site Support",
        description: "Immediate attendance to address complications or conduct staff training.",
      },
      {
        icon: "industry",
        title: "Profound Insight into Gurgaon's Entrepreneurial Climate",
        description: "Customized strategy focused on your local business activities.",
      },
      {
        icon: "car",
        title: "No Logistical/Travel Delays",
        description: "Faster, more immediate deployments at no additional cost or coordination issues.",
      },
      {
        icon: "handshake",
        title: "Better Communication & Trust",
        description: "Face-to-face consulting fosters clarity and collaboration.",
      },
    ],
    buttons: [
      { label: "SAP Implementation", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      { label: "Get Demo From Us", href: "#", variant: "migrationOutline" },
    ],
  },

  erpLifecycle: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Keep Your ERP Running Around the Clock with the Best SAP Business One Implementation Company in Gurgaon",
    description: [
      "At Ayushman Solutions, we reimagine ERP implementation as more than a tech project — it's a strategic transformation. As the leading SAP Business One partners in Gurgaon, our methodologies get your solution up and running fast, configured to your needs, and supported long-term so your ERP solution never holds your business back.",
      "As a dependable SAP implementation company in Gurgaon, we begin with a deep discovery and assessment of your existing landscape and align your unique business processes to SAP best practices. This gives us the opportunity to plan a thoughtful rollout with the least amount of disruption. Finally, we conduct extensive testing to confirm that every workflow is correct and as streamlined as possible. After deployment, we provide tailored training for your teams and the continued support needed for troubleshooting, optimization, and upgrades.",
    ],
    advantagesTitle: "Our End-to-End Services Include:",
    advantages: [
      {
        icon: "capsules",
        title: "Employee Training & Role-Based Support",
        description: "Empowering your teams to confidently use SAP B1.",
      },
      {
        icon: "exchange",
        title: "Fast Deployments with Zero Downtime",
        description: "Fast, not fragile deployments to avoid interruptions in which your business grinds to a halt.",
      },
    ],
  },

  // Plain text benefit grid (no card boxes) on a dark navy background,
  // matching every other dark-navy CenteredSection already used across the
  // SAP module (theme="light" = light/white text on a dark fill). Unlike
  // the Noida page, the reference has exactly 4 items here with no 5th
  // centred item, so this page's component renders the grid only.
  whySapStandsOut: {
    title: "Why SAP Business One Can Be the Best ERP for You?",
    description: [
      "SAP Business One gives you a complete view of your business with built-in analytics and the flexibility to grow. SAP Business One is a smart, scalable ERP solution that's ideally suited to fit the needs of small and midsize businesses. Retailers, manufacturers, traders, and professional service providers — SAP B1 delivers the real-time visibility you need, the end-to-end process integration you demand, and flexible deployment options your growing business requires.",
      "As the leading SAP implementation company in Gurgaon, we ensure your SAP B1 implementation unites finance, inventory, procurement, CRM, sales, and HR in a single platform, so you eliminate data silos and manual errors. Mobile access, dashboards, and automation put you one step ahead at all times in managing performance today and planning for growth tomorrow.",
    ],
    subtitle: "Top Reasons to Choose SAP Business One:",
    items: [
      {
        title: "All-in-One Integration",
        description: "Combines accounting, sales, CRM, inventory, and operations.",
      },
      {
        title: "Real-Time Visibility",
        description: "Improve the speed of data-enabled decision-making with on-demand reporting and KPIs.",
      },
      {
        title: "Flexible to Your Industry",
        description: "Flexible to your industry-specific and unique use cases and business objectives.",
      },
      {
        title: "Cost-Effective & Scalable",
        description: "Grows as your business expands — no need to switch later.",
      },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from the other city pages' own award timeline — same
  // established SAP Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solutions is Your Trusted SAP Partner in Gurgaon and Across India",
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
    title: "Ayushman Solutions: What Makes Us an Outstanding Choice as SAP Business One Partner in Gurgaon?",
    description:
      "Our company has carved its niche in the SAP Business One partner landscape operating in Gurgaon and has over a decade-long experience in combining efficiency with the most outstanding ERP systems in India.",
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
  // sibling page. Kept identical to the Nepal/Noida pages' own client wall
  // rather than adopting the unverified client names shown in the Gurgaon
  // reference screenshots.
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
    title: "Top SAP Business One Partners in Gurgaon: Discover the Full Array of Services Offered",
    description:
      "Ayushman Solutions, a reliable SAP partner in Gurgaon, provides a 360-degree ecosystem of SAP Business One services to help you derive maximum value from your ERP investment, from conceptualization to post-implementation perfection. Here's an overview of what each service entails and how it impacts your business.",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "We guide you in choosing the best SAP Business One license model — Professional, Limited, or Starter — according to your business size, industry, and users' functions. Our SAP service team in Gurgaon manages the entire procurement process, ensuring full compliance with SAP guidelines and the best possible cost structure, then handles installation with precision.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "No two businesses are alike, so why should your ERP run like one? Our SAP-certified consultants guarantee a standardized, accelerated implementation fitting your unique workflows, with extensive customization tailoring modules and dashboards to your reporting requirements from day one.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "If you're using SAP B1 on SQL Server today, we can get you migrated to SAP HANA, SAP's in-memory computing platform, for extreme-speed processing, real-time analytics, and increased scalability — with no data loss, no downtime, and full compatibility with your current setup.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "As a leading SAP solution provider in Gurgaon, we build industry-specific SAP B1 add-ons for manufacturing, retail, pharmaceuticals, logistics, and more — augmenting SAP B1's default capabilities so you can automate specific tasks and manage compliance without external platforms.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation of Standard Products and Add-Ons",
        description:
          "Updates are important to performance, security, and compliance. We handle core SAP B1 upgrades and custom add-on upgrades, making sure everything stays compatible and the user experience is seamless, all without interrupting your day-to-day business.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting Services",
        description:
          "With our secure cloud hosting for SAP Business One, you can run your ERP system from any location at any time. Our cloud services are flexible, economical, and managed by specialized staff, so you can stop worrying about data centre infrastructure, backups, or cybersecurity.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (Onsite and Offsite)",
        description:
          "To facilitate seamless ERP adoption, we offer role-based training programs onsite in Gurgaon as well as offsite and remotely, supported by extensive documentation, user manuals, and guided workflows designed around your team's processes.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
      {
        label: "Support and Maintenance",
        description:
          "Reach our support team any time through our dedicated portal, submit requests and queries, and track response and resolution around the clock. Trust Ayushman Solutions as your SAP partner in Gurgaon for strategic support and consultancy designed to improve operational efficiency and long-term business performance.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ],
  },

  // Reused from sapBusinessOneDelhiNCR.js's own blog set — generic SAP topics,
  // not location-specific, so reusing is consistent with how every sibling
  // page shares this same near-identical blog set.
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
    ],
  },

  // Reused from sapBusinessOneDelhiNCR.js's own case studies — Gurgaon sits
  // inside the same NCR region that page already names (Faridabad, Gurgaon,
  // Noida, Ghaziabad), so its existing, already-verified case studies apply
  // directly rather than inventing new Gurgaon-specific client names/figures.
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
        location: "Gurgaon, Delhi NCR, India",
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
      "Looking to unlock new potential for your small or midsize business with the power of SAP Business One? We'd love to engage with you on this opportunity — our local experts in Gurgaon are fully prepared to lead you every step of the way.",
    button: { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What are the benefits of choosing a local SAP Business One partner in Gurgaon?",
        answer:
          "A local partner means faster on-site support, no logistical or travel delays, and deep insight into Gurgaon's business climate — all backed by Ayushman Solutions' on-ground SAP consultants.",
      },
      {
        question: "Can SAP B1 integrate with other software?",
        answer:
          "Yes. SAP Business One integrates with e-commerce platforms, payment gateways, CRM, analytics, and statutory compliance tools through our in-house add-ons.",
      },
      {
        question: "How long does SAP Business One implementation take?",
        answer:
          "Timelines depend on your license count, modules, add-ons, and customization scope. Our rapid, structured implementation model is designed to get you live with minimal business disruption — book a call for a project-specific estimate.",
      },
      {
        question: "What type of post-implementation support do you provide to ensure successful program implementation and long-term sustainability?",
        answer:
          "We offer 24/7 support through onshore, offshore, and hybrid engagement models, backed by a dedicated support portal for ticketing, remote assistance, and on-site visits whenever required.",
      },
      {
        question: "If you're a small business, should you invest in SAP Business One?",
        answer:
          "Yes. SAP Business One is purpose-built and priced for SMBs, giving small and mid-sized businesses the same enterprise-grade finance, inventory, and CRM capabilities used by larger organizations.",
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
