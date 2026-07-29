// Content for /erp/erp-software-chennai ("SAP Business One Chennai").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from) and sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js /
// sapBusinessOneDelhiNCR.js / erpSoftwareBangalore.js (the other city pages
// in this family) — reuses the exact same section components as every other
// data/sap/*.js page, only this file's content differs. Page-scoped rebrand
// (navy heading / yellow accent) matches SapNearYou.module.css since this is
// a direct city-page sibling of that listing.

export const sapBusinessOneChennai = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/sap-migration-03.webp",
    align: "right",
    textTheme: "dark",
    title: "SAP Business One Partners in Chennai",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Elevate Your Business with Leading ERP Software Company in Chennai!",
    paragraphs: [
      "Positioned as the foremost SAP B1 partner in Asia, Ayushman Solution has earned a reputation as the go-to solution provider for industry leaders across Tamil Nadu. With a steadfast dedication to delivering excellence, we have become synonymous with trust and reliability among businesses of all sizes, spanning the vibrant cities of Madurai, Coimbatore, Vellore, Tiruchirappalli, and beyond, throughout the expansive landscapes of Chennai.",
      "At Ayushman Solution, we recognize that every organization is unique, with distinct needs and aspirations. That's why our tailored SAP solutions are meticulously crafted to address the specific challenges and requirements of each client, ensuring a seamless fit and maximum impact. Our comprehensive suite of services encompasses the entire spectrum of ERP software solutions, empowering businesses to streamline their operations, enhance productivity, and drive sustainable growth.",
      "We strive to forge enduring partnerships with our clients, guiding them through every stage of their digital transformation journey. Join the ranks of countless satisfied clientele who have experienced the transformative power of our services.",
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
    title: "Why SAP Business One is the Perfect Fit for Your Business",
    description: [
      "Join over 60,000 satisfied customers, including 2,400+ subsidiaries of major enterprises, who have chosen SAP B1 as their preferred ERP solution. Affordable and user-friendly, SAP ERP solution streamlines business processes and fulfils all your requirements with unparalleled efficiency in Chennai.",
      "With its integrated Business Intelligence solution, SAP B1 empowers you to seamlessly convert data into actionable insights, accessible anytime and anywhere. Say goodbye to guesswork and outdated methods like legacy software and Excel sheets – with SAP ERP solutions, you can make informed decisions based on real-time data.",
      "Experience unprecedented visibility and transparency across your business operations by embracing the services of a leading Cloud ERP software company in Chennai tailored to your specific needs. Transition to Cloud ERP and unlock savings of up to 80% with our cutting-edge cloud ERP solution. As one of the leading SAP Partners in Chennai, Ayushman Solution boasts a proven track record of successful ERP implementations, ensuring your journey towards digital transformation is smooth and rewarding.",
    ],
    buttons: [
      { label: "Know More", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  whyChooseUs: {
    title: "Unlock Success with Ayushman Solution: Your Trusted SAP Business One Partner in Chennai",
    description:
      "Experience the full potential of SAP B1 with Ayushman Solution, a trusted industry leader and SAP Platinum partner. Renowned as one of the top ERP software companies in Chennai, our comprehensive suite of services encompasses every aspect of SAP B1 implementation, ensuring a seamless and efficient transition for your organization. From initial consultation and meticulous planning to seamless migration, licensing, implementation, customization, integration and ongoing support, we provide end-to-end solutions tailored to your unique business needs. By understanding the nuances of your business sector, we tailor our approach to ensure maximum efficiency and effectiveness in addressing your challenges and opportunities. Experience the difference of working with a partner who prioritizes your success and empowers you to unlock the full potential of SAP ERP software.",
    buttons: [
      { label: "Request Demo", href: "#", variant: "migrationPrimary" },
      { label: "Book A Call", href: "#", variant: "migrationOutline" },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js
  // / sapBusinessOneDelhiNCR.js / erpSoftwareBangalore.js's own award
  // timeline — same established SAP Partner Award history already used
  // across this module.
  timeline: {
    title: "Ayushman Solution is your trusted SAP Business One Partner",
    description: "We're honored by SAP as the best SAP Business One Partner in India.",
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
    title: "Ayushman Solution Capabilities",
    description: "Ayushman Solution is a CMMI Level 5 company and one of the best Cloud ERP software companies in Chennai with 11+ years of experience in SAP B1 vertical.",
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

  checklist: {
    title: "Transform Your Business with SAP Business One: A Checklist",
    bullets: [
      { label: "Evaluate Your Business Needs", text: "Assess your current processes and identify areas for improvement." },
      { label: "Research SAP Business One", text: "Explore the features and benefits tailored to your industry." },
      { label: "Budget Considerations", text: "Determine your budget and explore available licensing options." },
      { label: "Consult with Experts", text: "Seek guidance from trusted SAP partners in Chennai like Ayushman Solution for personalized advice." },
      { label: "Customization Options", text: "Discuss customization possibilities to align SAP Business One with your specific requirements." },
      { label: "Implementation Plan", text: "Develop a timeline and strategy for seamless implementation." },
      { label: "Training and Support", text: "Ensure comprehensive training and ongoing support for smooth adoption." },
      { label: "Measure Success", text: "Define metrics to track the impact of SAP B1 on your business." },
    ],
    buttons: [
      { label: "Get Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
    background: "linear-gradient(120deg, #d9f2e3 0%, #eaf9f0 100%)",
  },

  // Client wall mixes real logo assets already available in the project
  // (public/assets/image2/) with plain text marks reused verbatim from
  // sapBusinessOne.js / sapBusinessOneAhmedabad.js / sapBusinessOneDelhiNCR.js
  // / erpSoftwareBangalore.js for the clients that don't have a dedicated
  // logo file yet — same "no image available" fallback convention already
  // established for ClientsSection.
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
      "CARS24",
      "King Koil",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      "NASSCOM",
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      "DealShare",
      "Acro Engineering",
      { name: "Addverb Technologies", logo: "/assets/image2/addverb-technologies.webp" },
      { name: "Aditya Birla Group", logo: "/assets/image2/aditya-nbirla-group.webp" },
      "Bakers Circle",
      "Britannia",
      "Butterfly",
      "Clearpack",
      { name: "ColdEX", logo: "/assets/image2/coldex-logo-1.png" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      { name: "Global", logo: "/assets/image2/Global.png" },
    ],
  },

  services: {
    title: "What We Offer: Elevate Your Business with Our SAP B1 Services in Chennai",
    description: "Along with comprehensive training and documentation services, whether on-site or off-site, Ayushman Solution ensures you receive the essential support needed to leverage this robust and scalable software effectively through a number of services:",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "Gain comprehensive insights into SAP ERP licensing, costs, and installation procedures. As a leading SAP Business One partner in Chennai, we provide expert guidance to ensure informed decision-making.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "Partner with Ayushman Solution for rapid and precise SAP Business One implementation. With a wealth of experience and a team of over 200 certified professionals, we guarantee a smooth journey tailored to your unique requirements.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Trust Ayushman Solution for a seamless transition from SAP Business One SQL to HANA. Our meticulous approach covers all stages, from assessment and readiness to migration and post-go-live support, ensuring a hassle-free experience.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "Explore our suite of 12+ SAP B1 add-ons, meticulously crafted to address diverse business needs. With a track record of implementing 500+ add-ons across various industries, we excel in exceeding expectations.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description: "Safely upgrade to the latest version of SAP B1 with minimal disruption. Rely on Ayushman Solution for seamless data migration and comprehensive support throughout the upgradation process.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting Services",
        description: "Experience superior cloud hosting and managed services tailored to your business needs. With Ayushman Solution, you gain access to innovative cloud ERP solutions designed to optimize cost and enhance efficiency.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
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

  // "Agro-Chemical Enterprise" reused verbatim from sapBusinessOneDelhiNCR.js
  // (adapted away from the reference's "Salesforce" mention to stay
  // SAP-only, consistent with the rest of this SAP-focused module). The
  // FixDerma and Inshorts banner cards reuse the exact same banner-card
  // pattern already established for Inshorts in sapBusinessOneAhmedabad.js,
  // and reuse the "FixDerma" client name already established in this page's
  // own client wall above.
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
    title: "Consult the Best SAP Business One Companies in Chennai",
    description: "Ayushman Solution is the best ERP software development company in Chennai. We are your trusted advisor today and into the future. Ayushman Solution has helped customers of all sizes, across all industries to transform and simplify their business in Tamil Nadu.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Why is SAP B1 the ideal choice for your business?",
        answer:
          "SAP Business One is purpose-built and priced for fast-growing businesses, giving you a single, real-time view of finance, inventory, and operations with built-in BI, so you can make informed decisions instead of relying on spreadsheets and guesswork.",
      },
      {
        question: "Who can reap the benefits of SAP B1?",
        answer:
          "Small, mid-sized, and growing enterprises across manufacturing, pharma, retail, distribution, and services benefit from SAP B1 — anywhere finance, inventory, sales, and customer relationships need to be managed on one connected platform.",
      },
      {
        question: "How can you purchase SAP B1 licenses in Chennai?",
        answer:
          "Ayushman Solution, as a SAP Platinum Partner with a local Chennai presence, guides you through license selection, procurement, and installation, helping you choose the right licensing model for your business size and budget.",
      },
      {
        question: "Why is Ayushman Solution the top SAP Business One implementation partner in Chennai?",
        answer:
          "With 1000+ implementations, 300+ SAP consultants, and 11+ years of SAP B1 experience, Ayushman Solution combines the ASAP implementation methodology with deep industry vertical expertise to deliver successful, on-time ERP rollouts across Chennai and Tamil Nadu.",
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
