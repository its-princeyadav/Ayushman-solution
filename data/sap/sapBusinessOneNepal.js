// Content for /erp/erp-software-nepal ("SAP Business One Nepal"). Sibling of
// sapBusinessOneDelhiNCR.js / sapBusinessOneMumbai.js (the other city/region
// pages in this family) — reuses the exact same section components as every
// other data/sap/*.js page, only this file's content differs. Award history,
// capability stats, and the client wall are reused verbatim from the sibling
// pages (same company-wide facts, not city-specific claims). "News & Articles"
// additionally reuses the NewsSection/NewsCard components, which exist in the
// Sap component tree but aren't wired into any sibling page yet.

export const sapBusinessOneNepal = {
  hero: {
    // Himalaya-appropriate photography already established in the design
    // system (used elsewhere as the Delhi NCR page's mobility hero) — no new
    // asset needed for a Nepal-themed banner.
    backgroundImage: "/assets/image2/green-mountains.png",
    align: "right",
    textTheme: "light",
    title: "ERP Software Nepal",
    description: "Automate and scale your business in Nepal with SAP Business One, backed by an SAP Platinum Partner.",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Automate your Business with #1 ERP Software in Nepal",
    paragraphs: [
      "Trusted by industry leaders across the region, Ayushman Solutions is a trusted SAP Business One implementation partner offering SAP Business One implementation services to organizations of every size based in Kathmandu, Birgunj, and other regions of Nepal — helping them simplify their business functions with robust ERP software.",
    ],
  },

  whyChooseSap: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Why SAP Business One is Ideal for my Business?",
    description: [
      "Designed for SMEs, SAP Business One is an affordable and easy-to-use solution that automates business processes, improves business operations, transforms finance functions, and handles the needs of every department.",
      "With an in-built BI solution, the software helps you derive meaningful insights, eliminate guesswork, and mitigate the complexities and delays that come with legacy software and spreadsheets.",
      "Bring high visibility to your business operations and steer your business forward with SAP Business One in Nepal, designed to fit the needs of your business. Move to cloud ERP and save up to 80% with our cloud ERP solution.",
    ],
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  whyChooseAyushman: {
    title: "Why Choose Ayushman Solutions as SAP Business One Implementation Partner?",
    description:
      "Ayushman Solutions helps you unlock the real power of SAP Business One in your business. As an ERP implementation partner, Ayushman Solutions begins its journey by analyzing the objectives and needs of its clients. As your SAP Business One implementation partner, we help you implement, manage, and configure SAP Business One across your business landscape — our implementation strategy addresses your frequent business requirements and real-life implementation challenges.",
    buttons: [{ label: "Request Demo", href: "#", variant: "migrationPrimary" }],
    background: "#0a1e3c",
    theme: "light",
  },

  // Reused verbatim from the other city pages' own award timeline — same
  // established SAP Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solutions is your trusted SAP Business One Partner",
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
    title: "Ayushman Solutions' Capabilities",
    description: "Ayushman Solutions is a CMMI Level 5 company having 11+ years of experience in the SAP B1 vertical",
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
      { label: "Connect With Us", href: "#", variant: "migrationOutline" },
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
    title: "SAP Business One",
    description: "We offer a wide array of SAP Business One services which include;",
    items: [
      {
        label: "Implementation & Customization",
        description:
          "Ayushman Solutions works on a rapid, structured implementation model. With 500+ successful SAP Business One implementations and 300+ SAP consultants, we guide you through a smooth SAP Business One journey without business disruption or risk.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "Add-ons Development",
        description:
          "Ayushman Solutions has developed 12+ SAP Business One add-ons to meet diverse business needs, such as digital signature and plant maintenance. Backed by expertise across 18+ industry verticals, we deliver solutions that best serve your needs within your budget.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-ons)",
        description:
          "Upgrade seamlessly to the newer version of SAP Business One with zero risk and no business disruption. Move securely to the latest version with our SAP Business One upgradation services.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting Services",
        description:
          "Ayushman Solutions offers specialized cloud hosting and managed services to keep your business applications and IT infrastructure up and running on the cloud — an innovative cloud hosting service custom-built to save cost and time.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description:
          "Maximize ROI on SAP Business One with our SAP Business One training. Get all the essential guidance and support to start using this smart, intelligent software from day one.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
      {
        label: "Support",
        description:
          "We render 24/7 support via our dedicated support portal to handle all your queries and requests — critical business support and the guidance you need to keep your business application up and running at all times.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ],
  },

  // No dedicated Nepal press coverage exists in the project yet — reusing the
  // same "no image available" source-mark convention NewsCard already
  // supports, plus the same placeholder-href convention every blog/news item
  // uses elsewhere in this module until real articles are supplied.
  news: {
    sectionTitle: "News & Articles",
    items: [
      {
        date: "05 Dec 2023",
        title: "SAP S/4HANA Is Not a Choice but a Necessity for the Insurance Industry",
        source: "TechsSlash",
        href: "#",
      },
      {
        date: "05 Dec 2023",
        title: "SAP Sustainability: Unlocking the Potential of S/4HANA for a Greener Future",
        source: "TechBehindIt",
        href: "#",
      },
      {
        date: "07 Feb 2022",
        title: "Ayushman Solutions – Your First Choice for ERP Software Solutions",
        source: "We Suggest Software",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "18 Jul 2025",
        title: "Why Leading Enterprises Choose SAP S/4HANA Extended Warehouse Management",
        description: "With the rapid advancement of technologies, including AI, companies of every size are rethinking warehouse operations...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "20 Jun 2025",
        title: "From GROWing to RISIng: Which SAP S/4HANA Model Fits Your Business?",
        description: "In the context of today's digital environment, companies of every size need to weigh their SAP S/4HANA options...",
        image: "/assets/image2/solution-products-img-2.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "16 Jun 2025",
        title: "How SAP Business One Could Be Your Startup's Best Ally",
        description: "Business is often the dream and baby of young entrepreneurs. But scaling it without the right systems is a challenge...",
        image: "/assets/image2/SAP-Services-1.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // Real clients already established in this module's own client wall
  // (Bakers Circle, ColdEX) paired with the same real photography already
  // reused for their tiles elsewhere in the design system — no fabricated
  // revenue/employee figures attached, per this module's case-study
  // convention of keeping unverifiable numbers out of the copy.
  caseStudies: {
    title: "Case Studies",
    items: [
      {
        title: "Bakers Circle Accelerated its Production & Distribution Processes with SAP Business One®",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        industry: "Wholesale Distribution",
        location: "Nepal",
        href: "#",
      },
      {
        title: "Clearpack Automation Managed their Production Cost and Timelines with SAP Business One®",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Machinery & Components",
        location: "Nepal",
        href: "#",
      },
      {
        title: "ColdEX Logistics Improved Supply Chain Management, Warehousing and Fulfillment with SAP Business One®",
        image: "/assets/image2/SAP-Services-1.png",
        industry: "Logistics",
        location: "Nepal",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Get In Touch",
    description: "Have questions? Ask our SAP Business One implementation experts.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
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
