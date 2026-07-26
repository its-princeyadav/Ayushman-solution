// Content for /erp/erp-software-coimbatore ("Leading SAP Business One
// Partner in Coimbatore"). Sibling of sapNearYouData.js (the "SAP Near You"
// directory this page is linked from, which already lists this exact
// route/title/image) and sapBusinessOneDelhiNCR.js / sapBusinessOnePune.js /
// sapBusinessOneRajasthan.js (the other city pages in this family) — reuses
// the exact same section components as every other data/sap/*.js page, only
// this file's content differs. Page-scoped rebrand (navy heading / yellow
// accent) matches SapNearYou.module.css since this is a direct city-page
// sibling of that listing. Like sapBusinessOneRajasthan.js, this page's own
// reference layout has no FAQ, so that block is intentionally omitted.

export const sapBusinessOneCoimbatore = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-2.png",
    align: "right",
    textTheme: "dark",
    title: "Leading SAP Business One Partner in Coimbatore",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Automate Your Business Operations with a Leading SAP Business One Partner in Coimbatore",
    description:
      "Coimbatore, one of the most industrialized districts of Tamil Nadu, is a prime textile, industrial, commercial, information technology, educational, healthcare and manufacturing hub. For the city's business belt, Ayushman Solution brings robust SAP solutions to organizations of every size to simplify their business functions. Now, digitally transform with your SAP Business One partner in Coimbatore.",
    buttons: [
      { label: "Explore SAP Solutions", href: "/sap/solutions", variant: "migrationPrimary" },
      { label: "Get Solution", href: "#", variant: "migrationOutline" },
    ],
  },

  // TODO: no dedicated "two professionals" photography exists in the project
  // yet — reusing an already-established real asset from elsewhere in the
  // design system. Dairy/Food & Service advantage cards reused verbatim from
  // sapBusinessOneDelhiNCR.js's own `whyChooseSap.advantages` — same
  // already-established, already-Ayushman-branded industry copy.
  sapPartner: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "SAP Partner in Coimbatore: Empowering the \"Manchester of South India\"",
    description: [
      "Coimbatore, often referred to as the \"Manchester of South India,\" boasts a thriving textile industry supported by the abundant cotton fields in the region. In addition to textiles, the city is home to many engineering industries, special economic zones, automobile units, electronics companies, and other successful manufacturing facilities.",
      "As the city's businesses move from \"textile hub\" to \"tech hub,\" Ayushman Solution is a trusted SAP Business One partner in Coimbatore to accelerate your journey to the Intelligent Enterprise. Having a rich history of servicing clients across 21+ verticals, we are one of the trusted SAP companies in Coimbatore to service all your SAP Business One requirements.",
    ],
    advantagesTitle: "Designed to Support Business Growth",
    advantages: [
      {
        icon: "boxes",
        title: "Dairy",
        description: "End-to-end batch tracking, expiry management, and quality control built for dairy production and distribution.",
      },
      {
        icon: "store",
        title: "Food & Service",
        description: "Streamlined recipe management, inventory control, and compliance tracking for food and service businesses.",
      },
    ],
    buttons: [
      { label: "Explore SAP Services", href: "/sap/services", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  itSector: {
    title: "IT Sector Set to Take a Big Leap in Coimbatore - Ayushman Solution Geared Up to Support with Tech Enablement as Your SAP Partner in Coimbatore",
    description:
      "With IT companies large and small setting up in Coimbatore, alongside a thriving manufacturing and automotive sector, Ayushman Solution serves as a one-stop shop for enterprises looking to keep pace with business automation. SAP Business One helps your business run easier with a modern, fresh look and feel, sophisticated analytic charting capabilities, and end-to-end capabilities to streamline your business operations. Designed and priced for organizations of every size, it comes with in-built BI functionality and an in-memory platform to optimize decision-making, so you can manage multiple business units or subsidiaries and make faster decisions based on unified data for the whole company.",
    buttons: [
      { label: "Request Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneDelhiNCR.js / sapBusinessOnePune.js /
  // sapBusinessOneRajasthan.js's own award timeline — same established SAP
  // Partner Award history already used across this module.
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
    description: "Ayushman Solution is a CMMI Level 5 company and one of the best Cloud ERP software providers in Coimbatore, with 11+ years of experience in the SAP B1 vertical.",
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

  topSap: {
    title: "Ayushman Solution Is Among the Top SAP Companies in Coimbatore!",
    description:
      "Ayushman Solution is a CMMI Level 5 company and one of the best SAP companies in Coimbatore, with 11+ years of experience in the SAP B1 vertical. With a local presence, we come to your business for an SAP demo and in-person meetings - your reliable SAP Business One consultant and end-to-end SAP Business One partner in Coimbatore.",
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
      { name: "BharatPe", logo: "/assets/image2/bharatpe.png" },
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      "Acro Engineering",
      "Green Gas Limited",
      "Inshorts",
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      "King Koil",
      { name: "ColdEX", logo: "/assets/image2/coldex-logo-1.png" },
      "DealShare",
      "NASSCOM",
      "Prakash Pipes Limited",
      "Raj Overseas",
      "Rajasthan Liquors Ltd",
      "Zee",
    ],
  },

  // Exactly six service cards, matching this page's own reference layout
  // (3 x 2 grid) rather than the eight-card set used on most other city
  // pages in this family.
  services: {
    title: "Services We Offer",
    description: "Ayushman Solution offers complete end-to-end solutions for SAP in Coimbatore which comprise:",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "Make smart business decisions as you partner with a leading SAP partner in Coimbatore. We will guide you through SAP Business One licenses, how you can use them, and everything else related.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "With 1000+ successful SAP Business One implementations, we know how to meet the exact demands of our customers. Our experience and expertise make us one of the best SAP partners in Coimbatore.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Easily manage every aspect of the SAP Business One SQL to HANA migration. Our SAP Business One consultants work closely with you on requirement analysis, roadmap planning, application readiness, data migration, thorough testing, go-live and ongoing support.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "Ayushman Solution provides a suite of SAP Business One add-ons tailored to fit unique business models across industries, covering areas such as digital integration, POS, pharma, and much more.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description:
          "Seamlessly upgrade to the newer version of SAP Business One with SAP Coimbatore experts by your side. Make a safe transition to the latest version with our SAP Business One upgradation services.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description:
          "Empower your team after SAP Business One implementation with training from our SAP Business One consultants in Coimbatore. Make the learning curve smaller with the documentation and training needed to use this smart, intelligent platform easily.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
    ].map((item) => ({ ...item, forceVisible: true })),
  },

  // Reused verbatim from erpSoftwareBangalore.js / erpSoftwareHyderabad.js /
  // sapBusinessOneKerala.js's own news feed — same already-established,
  // already-Ayushman-branded news content.
  news: {
    sectionTitle: "Read Our Latest News",
    action: { label: "Read More", href: "#" },
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
    ],
  },

  // TODO: no dedicated photography exists for these three posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
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
  // stories. The reference screenshot's own case studies for Select
  // CityWalk, Bakers Circle and Lahori Zeera are Uneecops customers and are
  // NOT reused here as endorsements.
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

  // Matches the separately supplied final "Get In Touch" reference screenshot
  // — underwater CTA composition already established and reused verbatim
  // across sapBusinessOnePune.js / sapBusinessOneRajasthan.js.
  ctaBanner: {
    title: "Get In Touch",
    description:
      "Ayushman Solution is a trusted ERP implementation partner in Coimbatore - your advisor today and into the future. We've helped customers across industries transform, automate and simplify their business operations in Coimbatore.",
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
