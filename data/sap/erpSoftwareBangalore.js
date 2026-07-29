// Content for /erp/erp-software-bangalore ("ERP Software Bangalore").
// Sibling of sapNearYouData.js (the "ERP Software Near You" directory this
// page is linked from) and sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js
// / sapBusinessOneDelhiNCR.js (the other city pages in this family) — reuses
// the exact same section components as every other data/sap/*.js page, only
// this file's content differs. Page-scoped rebrand (navy heading / yellow
// accent) matches SapNearYou.module.css since this is a direct city-page
// sibling of that listing.

export const erpSoftwareBangalore = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/sap-migration-02.webp",
    align: "right",
    textTheme: "light",
    title: "ERP Software in Bangalore",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Automate your business with ERP Company in Bangalore",
    paragraphs: [
      "Trusted by industry leaders across the state, Ayushman Solution is Asia's #1 SAP Business One partner which offers robust SAP Business One solutions to all sized organizations based in Bengaluru, Mangalore, Mysuru, Hubli & other regions of Karnataka state. Our ERP software in Bangalore simplifies business functions and automates all processes.",
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
      "Designed and priced for fast-growing businesses, SAP Business One is a smart and advanced ERP software to manage your key business functions from inventory, logistics, finance, procurement, sales accounting, human resources, customer relationship management and more.",
      "With an in-built BI solution, the software helps mitigate errors, confusion and delays occurring while using legacy software and excel sheets.",
      "So, bring high visibility over your business operations and improve your cash balance visibility and sales performance dramatically with SAP Business One Bangalore designed to fit the needs and the budgets of your business. Also, mitigate overhead IT costs by 80% using our cloud ERP solution.",
      "Ayushman Solution is one of the leading SAP Business One partners in Bangalore with decades of experience to make your SAP projects, migrations, and implementation journeys deliver the results you want for your business. When it comes to a SAP software company Bangalore, Ayushman Solution has a go-to team and is a trusted partner.",
    ],
    buttons: [
      { label: "ERP Solutions", href: "/sap/solutions", variant: "migrationPrimary" },
      { label: "Schedule A Call", href: "#", variant: "migrationOutline" },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Ayushman Solution as the best SAP software company in Bangalore?",
    description:
      "Ayushman Solution provides the best ERP software in Bangalore and ensures that your SAP projects, migration, on-premise, and cloud journey have the results you need for your business. As one of the best ERP software providers in Bangalore, we offer end-to-end SAP Business One solutions, including advisory, design and implementation, cloud hosting, support, and managed services. We also have 12+ industry-specific add-ons to fulfill the exact requirements of your growing business.",
    buttons: [{ label: "Request Demo", href: "#", variant: "migrationPrimary" }],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js
  // / sapBusinessOneDelhiNCR.js's own award timeline — same established SAP
  // Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solution is your trusted SAP Business One Partner in Bangalore",
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

  karnataka: {
    title: "The Ayushman Solution Edge - SAP Business One Karnataka",
    description:
      "Ayushman Solution plays an essential role in enabling Karnataka's businesses to integrate the SAP solution that supports 360° company functions. We are the SAP Business One Karnataka partners that industry leaders rely on. Our services extend to all the major cities in Karnataka, including but not limited to:",
    // TODO: no dedicated photography exists for Mangaluru/Hassan/Belagavi yet
    // — reusing already-established real assets from elsewhere in the design
    // system (existing landmark/city photography already proven safe for
    // this alternating image-content layout).
    cities: [
      {
        imagePosition: "left",
        image: "/assets/image2/city-05.webp",
        imageAlt: "Mangaluru coastal landmark",
        title: "SAP Business One Mangaluru/Mangalore",
        description:
          "With Ayushman Solution as an implementation partner and technical guide, Mangalore's SMEs are benefitting significantly from SAP Business One software. Now, they can efficiently manage the core business functions and integrate business intelligence into their processes.",
      },
      {
        imagePosition: "right",
        image: "/assets/image2/city-06.webp",
        imageAlt: "Hassan heritage temple",
        title: "ERP software Hassan",
        description:
          "Using ERP software Hassan, companies are able to manage their key business functions – from financials, logistics, finance, sales accounting, human resources, customer relationship management and more.",
      },
      {
        imagePosition: "left",
        image: "/assets/image2/sap-migration-01.webp",
        imageAlt: "Belagavi landmark",
        title: "SAP Business One Belagavi",
        description:
          "Belagavi's small, medium, and large businesses are getting onto the SAP Business One platform. The reason – need to digitize their business operations. Top Belagavi companies confide in Ayushman Solution to service their SAP Business One requirements end-to-end.",
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
      "Ayushman Solution is a CMMI Level 5 company having 11+ years of experience in SAP B1 vertical. That is why we are the leading name when it comes to ERP software Bangalore.",
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
  // sapBusinessOne.js / sapBusinessOneAhmedabad.js / sapBusinessOneDelhiNCR.js
  // for the clients that don't have a dedicated logo file yet — same "no
  // image available" fallback convention already established for
  // ClientsSection.
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
      "DealShare",
      "NASSCOM",
      "Acro Engineering",
      { name: "BharatPe", logo: "/assets/image2/bharatpe.png" },
      { name: "ColdEX", logo: "/assets/image2/coldex-logo-1.png" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      "Green Gas Limited",
      "Inshorts",
      "Maharaja Whiteline",
      "Prakash Pipes Limited",
      "Raj Overseas",
      "Rajasthan Liquors Ltd",
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      "Verka",
      "Zee",
      "Mrs. Bectors Food Specialities Ltd",
    ],
  },

  services: {
    title: "SAP Business One Bangalore Services we offer",
    description: "Ayushman Solution offers end-to-end ERP support in Bengaluru with a wide array of SAP Business One services which include.",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "Make smart investment decisions on license procurement and installation. We provide smart ERP solutions in Bangalore and guide businesses in selecting the right SAP Business One licenses, helping them maximize software utilization and long-term value.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "Ayushman Solution is recognized as one of the leading SAP software companies in Bangalore. Following the ASAP implementation methodology and backed by 500+ successful SAP Business One implementations, we deliver tailored ERP solutions that perfectly align with unique business requirements.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Our experts manage complete SAP Business One SQL to HANA migration, including assessment, planning, application readiness, secure data migration, testing, go-live, and post-migration support for a smooth and reliable transition.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "We offer 12+ SAP Business One add-ons across 18+ industries including WhatsApp Integration, Plant Maintenance, Manufacturing, and more. Our extensive implementation experience enables us to build highly customized ERP solutions for every business.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description: "Upgrade your SAP Business One environment to the latest version seamlessly with our secure upgrade services while maintaining business continuity and minimizing downtime.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting Services",
        description: "We provide enterprise-grade cloud hosting and managed infrastructure services that ensure high availability, security, scalability, backup management, and uninterrupted ERP performance.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description: "Maximize your SAP Business One investment through comprehensive user training, documentation, onboarding, and knowledge transfer sessions conducted both onsite and remotely.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Support",
        description: "Our dedicated support portal provides 24×7 assistance for issue resolution, business continuity, technical guidance, maintenance, monitoring, and continuous ERP optimization.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ],
  },

  // Reused verbatim from sapSolutions.js's own news feed — same
  // already-established, already-Ayushman-branded news content.
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

  ctaBanner: {
    title: "Consult the Best SAP Implementation Companies in Bangalore",
    description: "We are your trusted partner of choice who can carry out the successful ERP implementation in time and budget.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  // TODO: placeholder office address — replace with Ayushman Solution's
  // actual Bangalore office address before publishing. Left unfilled
  // rather than reusing a real third-party address found in reference
  // material, since publishing someone else's real business address as this
  // page's own office would misrepresent the company's actual location.
  address: {
    imagePosition: "right",
    image: "/assets/image2/who-we-are-hero-img.webp",
    imageAlt: "Ayushman Solution Bangalore office",
    title: "Address",
    description: ["Bangalore office address to be confirmed."],
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
