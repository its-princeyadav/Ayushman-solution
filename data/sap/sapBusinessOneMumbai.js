// Content for /erp/erp-software-mumbai ("SAP Business One Mumbai").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from) and sapBusinessOneAhmedabad.js (the other city page in this
// family) — reuses the exact same section components as every other
// data/sap/*.js page, only this file's content differs. Page-scoped rebrand
// (navy heading / yellow accent) matches SapNearYou.module.css and
// SapBusinessOneAhmedabad.module.css since this is a direct city-page
// sibling of that listing.

export const sapBusinessOneMumbai = {
  // TODO: no dedicated Gateway of India / Mumbai landmark photography exists
  // in the project yet — reusing the same drone photo already used as this
  // city's own thumbnail on the "SAP Near You" listing page.
  hero: {
    backgroundImage: "/assets/image2/drone-img.webp",
    align: "right",
    textTheme: "light",
    title: "SAP Business One Partners in Mumbai",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Ayushman Solution is your trusted SAP Business One Partners in Mumbai",
    paragraphs: [
      "Ayushman Solution is a CMMI level 5 company that leads as one of the best SAP implementation companies in Mumbai. We are the preferred partner of choice for 18+ industry verticals based in the Mumbai region. Having serviced over 500+ clients, you can confide in us to service all your SAP Business One requirements end-to-end. As one of the most trusted ERP software companies in Mumbai, Ayushman Solution enables businesses across the region to gain the much-needed competitive edge in today's data-driven world.",
    ],
  },

  // TODO: no dedicated "two professionals" photography exists in the project
  // yet — reusing an already-established real asset from elsewhere in the
  // design system.
  businessGrowth: {
    imagePosition: "right",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Digitize your Business with the #1 Platinum SAP Business One Partner in Mumbai",
    description: [
      "Lay the foundation for digital transformation and automate your business completely, meeting all your unique business needs. We are among the leading SAP Business One partners in Mumbai, offering end-to-end solutions.",
      "Ayushman Solution is Asia's #1 SAP Business One partner and the top SAP Business One Platinum partner in Mumbai. We offer enterprise-ready ERP software in Mumbai to SMEs and large organizations. Industry leaders across Pune, Thane, Nasik, Nagpur & other regions of Maharashtra trust us.",
    ],
    buttons: [
      { label: "SAP Solution", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Schedule A Call", href: "#", variant: "migrationOutline" },
    ],
  },

  whySap: {
    title: "Why Do You Need SAP Implementation Companies in Mumbai?",
    description:
      "In Mumbai, everything is dynamic. The business world is fast-moving, and SMEs have to cope with the ever-evolving business world. Whatever the industry, niche or sector, organizations need SAP consulting companies in Mumbai to keep up with the pace. Ayushman Solution works with businesses to offer top-class ERP for small businesses in Mumbai. Our aim is to enable SMEs to grow bigger in terms of their technological prowess.",
    buttons: [
      { label: "Request Demo", href: "#", variant: "migrationPrimary" },
      { label: "Talk To Experts", href: "#", variant: "migrationOutline" },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneAhmedabad.js's own award timeline —
  // same established SAP Partner Award history already used across this
  // module.
  timeline: {
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

  capability: {
    title: "Ayushman Solution's Capabilities as a SAP company in Mumbai",
    description:
      "11+ years of in-depth industry domain expertise in SAP Business One makes Ayushman Solution one of the preferred ERP companies in Mumbai. We are among the only SAP Companies in Mumbai that offer a complete range of SAP solutions, including consulting, SAP B1 licensing, SAP implementation, SAP migration, integration, support and managed services. Our capability as ERP solution providers in Mumbai is becoming your go-to partner team. We are known as the SAP Business One Mumbai team that solves the complex business landscape of mid-market businesses. As a SAP B1 partner in Mumbai, we are guided by the purpose of addressing the mission-critical needs of companies with ERP, Analytics and Cloud Technologies. That is why we are the SAP Business One partners in Mumbai that SMEs count on!",
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
    buttons: [{ label: "Get Quote", href: "#", variant: "migrationPrimary" }],
  },

  // TODO: dedicated logo image assets for these Maharashtra clients aren't
  // available in the project yet — rendered as plain text marks, the same
  // "no image available" convention already established for ClientsSection.
  clients: {
    heading: "Our Esteemed Customers in Maharashtra",
    ribbon: "Transformed",
    stat: "500+",
    statLabel: "Businesses Across Maharashtra",
    badges: [
      { label: "ERP", position: "topLeft" },
      { label: "CRM", position: "topRight" },
      { label: "Cloud", position: "bottomLeft" },
      { label: "Analytics", position: "bottomRight" },
    ],
    clients: [
      "NOCIL",
      "Esdee Paints",
      "BHOR",
      "Ecoreco",
      "VIP",
      "Hamilton",
      "Balmer Lawrie - Van Leer",
      "LAXCON",
      "Star",
      "Amplicomm",
      "HAB Pharmaceuticals",
      "DIM",
      "mal",
      "nubeno",
      "TTP Tubacex Group",
      "MakSteel",
      "Labin Analytics",
      "Hindustan",
      "Runwal",
      "AG Petuela",
      "Mahadhan Agritech",
    ],
  },

  services: {
    title: "Scalable SAP Solutions Provided by Ayushman Solution: Our Offerings",
    description:
      "Ayushman Solution, recognized as a leading SAP company in Mumbai, provides comprehensive end-to-end ERP support for your business, boasting a diverse range of SAP Business One services.",
    items: [
      {
        label: "Business Requirement Documentation (BRD)",
        description:
          "Crafting a tailored Business Requirement Documentation (BRD) process, we capture your operations with precision, fostering transparency and highlighting improvement avenues through specialized industry insights.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/consulting",
      },
      {
        label: "License Expertise, Procurement, & Installation",
        description:
          "Guiding strategic license procurement and seamless installation, we empower you to maximize SAP Business One utilization with comprehensive understanding and detailed guidance.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "/sap/business-one/license",
      },
      {
        label: "Tailored Implementation & Customization",
        description:
          "Embracing the ASAP model of implementation, we leverage 500+ implementations and 18+ industry vertical expertise to deliver tailored SAP Business One solutions, earning your trust as your steadfast partner.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
      },
      {
        label: "Bespoke Add-On Solutions",
        description:
          "Harnessing our in-house development prowess, we offer a suite of 12+ industry-specific add-ons, including Engineering, Pharma, and Chemical solutions, alongside statutory compliance offerings including E-way Bill, GST Reports Bundle, and E-Invoicing for seamless integration.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
      },
      {
        label: "Seamless Upgradation Pathways (Standard Products & Add-Ons)",
        description:
          "Transition effortlessly to the latest SAP Business One version with our meticulous upgradation services, ensuring continuity and enhanced functionality without disruption.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
      },
      {
        label: "Training, Documentation, and Resource Access (On Site & Off Site)",
        description:
          "Accelerate your ROI with comprehensive SAP Business One training and documentation, equipping your team to optimize software functionality from day one, both on-site and remotely.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
      },
      {
        label: "Relentless Support Ecosystem",
        description:
          "Accessible round the clock via our dedicated portal, our support services, encompassing onshore, offshore, and hybrid models, ensure prompt resolution of queries and seamless operations.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
      },
      {
        label: "Expert Migration Management for SAP Business One SQL to HANA",
        description:
          "Navigating the intricate SAP Business One SQL to HANA migration, we offer end-to-end support, from assessment and planning to data migration and post-migration support, ensuring a smooth transition to in-memory computing and cost-effective cloud hosting solutions.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
      },
    ],
  },

  // Mobile app download links to be added; reusing the same adventure/outdoor
  // photography already established for full-bleed HeroBanner sections
  // elsewhere in this module.
  mobility: {
    backgroundImage: "/assets/image2/green-mountains.png",
    align: "left",
    textTheme: "light",
    title: "SAP Business One Mobility Solutions",
    description: "Mobile app download links to be added here",
    buttons: [
      { label: "Download For iOS", href: "#", variant: "migrationOutline" },
      { label: "Download For Android", href: "#", variant: "migrationPrimary" },
    ],
  },

  // TODO: no dedicated photography exists for these five posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs & Articles",
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
      {
        date: "18 Jan 2025",
        title: "How SAP S/4HANA Finance is Redefining Financial Management...",
        description: "If you think financial management is still all spreadsheets and slow...",
        image: "/assets/image2/SAP-Services-3.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },
  // TODO: no dedicated photography exists for the garment sourcing case
  // study's clothes-rack image — reusing an already-established real asset
  // from elsewhere in the design system.
  caseStudies: {
    title: "Case Studies",
    items: [
      {
        title: "Clearpack Automation Managed their Production Cost and Timelines with SAP Business One®",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Machinery & Components",
        revenue: "~100+cr",
        employees: "300",
        location: "Uttar Pradesh, India",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Haryana Leather Chemicals Synchronized their Inventory, MRP and Production Processes with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Chemicals, Wholesale Distribution",
        revenue: "~50cr",
        employees: "~60",
        location: "Jind, Haryana",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "One of India's Largest Garment Sourcing B2B Marketplaces Stitches its Multiple Data Sources on One Platform with Tableau + Ayushman Solution",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Garment Sourcing/Production",
        revenue: "INR 500 CR+",
        employees: "201-500",
        location: "Delhi",
        href: "#",
        download: { href: "#" },
      },
    ],
  },

  ctaBanner: {
    title: "Consult & Engage with Premier Consultancy Services for ERP Software in Mumbai",
    description: "We are your reliable partner of choice, committed to delivering successful ERP implementations within the specified timeframe and budget.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Why is SAP important for businesses in Mumbai?",
        answer:
          "Mumbai's business landscape moves fast across manufacturing, trading, pharma, and financial services. SAP Business One gives SMEs in the city a single, real-time view of finance, inventory, and operations, helping them compete with larger, more established players.",
      },
      {
        question: "How do I choose the best ERP partner in Mumbai?",
        answer:
          "Look for a partner with a strong local presence, a proven implementation track record, industry-specific expertise, and reliable post-go-live support. Ayushman Solution brings 11+ years of SAP Business One experience and 500+ implementations across 18+ industry verticals.",
      },
      {
        question: "Which industries in Mumbai commonly use SAP ERP software?",
        answer:
          "Manufacturing, chemicals, pharmaceuticals, garment sourcing, trading, logistics, and financial services are among the industries in and around Mumbai that rely on SAP Business One to manage their operations end-to-end.",
      },
      {
        question: "What kind of post-implementation support is offered by SAP partners in Mumbai?",
        answer:
          "Ayushman Solution offers 24/7 support through onshore, offshore, and hybrid engagement models, backed by a dedicated support portal for ticketing, remote assistance, and on-site visits whenever required.",
      },
      {
        question: "Are there SAP software providers or partners based in Mumbai?",
        answer:
          "Yes. Ayushman Solution maintains an on-ground team serving Mumbai and the wider Maharashtra region, including Pune, Thane, Nasik, and Nagpur, offering local implementation, consulting, and support expertise.",
      },
      {
        question: "Who Are The Best SAP Partners in Mumbai?",
        answer:
          "Ayushman Solution is recognized as a SAP Platinum Partner with 1000+ implementations, 300+ SAP consultants, and 75+ channel partners, making it one of the leading SAP Business One partners serving Mumbai.",
      },
      {
        question: "Why should a business in Mumbai choose SAP ERP over other solutions?",
        answer:
          "SAP Business One is purpose-built for SMEs, offering a unified platform for finance, inventory, CRM, and sales that reduces manual effort and overhead IT spending while scaling with your business as it grows.",
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
