// Content for /sap/support ("SAP Support"). Reuses the exact same section
// components as sapSolutions.js / sapServices.js — only this sibling data
// file differs.

export const sapSupport = {
  // TODO: no dedicated hero photography exists yet for Support — reusing the
  // closest available adventure photo already established for this design
  // system (see sapServices.js's own TODOs for the same convention).
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-Customization-Segment-.webp",
    align: "right",
    title: "SAP Business One Support Services",
    button: { label: "Get Support", href: "#" },
  },

  roadblocks: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/SAP-Services-3.png",
    imageAlt: "Two mountaineers helping each other up a rocky ridge",
    title: "Roadblocks? Overcome Your Hurdles",
    titleAccent: "with SAP Support",
    description: [
      "Embark on your SAP journey with a partnership that truly gets your business. Our engagement model is built on a shared vision: unlocking the maximum potential of your SAP solution and internal expertise.",
      "With our tailored Annual Maintenance Contracts, we guarantee comprehensive support, whether you choose a fixed or flexible plan. Post-implementation, we're at your service through email, phone, or a ticket-based system, aligned with your selected support tier.",
      "Our elite team of SAP support specialists excels in tackling upgrades, implementation hurdles, and any other challenges you may encounter. From resolving critical functional issues to crafting new system functionalities and executing seamless upgrades, we've got you covered. Afterall, it's all about maximizing the value of your current investments and driving full business potential.",
    ],
    advantagesTitle: "Key Advantages-",
    advantages: [
      { icon: "handshake", title: "24 X 7 Support", description: "Dedicated portal to handle your queries and requests." },
      { icon: "puzzle", title: "Flexibility", description: "Onshore, offshore and mixed models to give you the best support, always!" },
      { icon: "shield", title: "Certified Experts", description: "SAP-certified consultants who know your landscape inside out." },
      { icon: "headset", title: "Proactive Monitoring", description: "We catch issues before they become downtime." },
    ],
    buttons: [
      { label: "Explore ERP", href: "#", variant: "primary" },
      { label: "Let's Talk", href: "#", variant: "outline" },
    ],
    background: "linear-gradient(120deg, #eaf5ee 0%, #ffffff 45%)",
  },

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

  challenges: {
    title: "Go from Challenges to Success with Ayushman Solution's SAP Support Services",
    description:
      "Experience the advantages of S/4 HANA SAP support services and SAP Business One support. Witness a boost in system uptime and reliability, a significant reduction in downtime, and minimized costs associated with outages. Our expert SAP Business One support ensures improved system performance efficiency, mitigating risks of errors and compliance issues. Elevate your SAP experience with Ayushman Solution and enjoy uninterrupted business operations.",
    buttons: [
      { label: "SAP Business One", href: "#", variant: "primary" },
      { label: "SAP S/4HANA Cloud", href: "#", variant: "outline" },
    ],
  },

  // TODO: real client logo image assets aren't available yet — rendered as
  // plain text marks (see ClientsSection.jsx) until real logo files exist.
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
      "ambrane",
      "Bakers Circle",
      "Bharat Petroleum",
      "BharatPe",
      "CARS24",
      "King Koil",
      "Clearpack",
      "DealShare",
      "esri",
      "FixDerma",
      "Legero",
      "Maharaja Whiteline",
      "Mankind",
      "Miller Fasteners",
      "NASSCOM",
      "ZEE",
      "Rajasthan Liquors Ltd.",
      "RMX Industries",
      "S.B. Packagings",
      "Seeds of Success",
    ],
  },

  supportServices: {
    title: "Our SAP Support Services",
    features: [
      {
        title: "Insights and Report Developments",
        description:
          "Unlock the power of data with personalized consultations that drive meaningful insights and strategic decision-making, taking your system to new heights. We're using the next level of SAP ERP support!",
      },
      {
        title: "Effective Data Migration Strategies:",
        description:
          "Navigate transitions effortlessly with our proven SAP support expertise, ensuring a seamless shift for your business operations.",
      },
      {
        title: "Swift Response for Issue Resolution:",
        description:
          "Rest easy knowing that your dedicated SAP Business One support consultant is always ready to swiftly tackle any challenges that may arise, keeping your operations running smoothly.",
      },
    ],
    showDots: false,
  },

  // TODO: OKAYA / SAR / Quantinox partner-logo images aren't available yet,
  // so those cards render without a partnerLogo circle (ColdEX's is real).
  testimonials: {
    title: "Testimonials",
    action: { label: "View All", href: "#" },
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Okaya",
        designation: "",
        company: "",
        background: "linear-gradient(135deg,#0e7a3e 0%,#3fbf72 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Okaya Digital Transformation And Automation Journey With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Anurag Choube",
        designation: "",
        company: "SAR",
        background: "linear-gradient(135deg,#c2410c 0%,#f5824a 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How SAR Transformed Their Journey With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Mr. Chandan Pandey",
        designation: "Co-Founder And CEO",
        company: "Quantinox",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Quantinox Automation Journey With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
        background: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        partnerLogo: "/assets/image2/coldex-logo-1.png",
        eyebrow: "Customer Success Story",
        headline: "How Coldex Built Their L.I.V.E. Enterprise With Ayushman Solution",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote: "Ayushman Solution's team understood our production floor before they touched a single screen — that made all the difference.",
        name: "Okaya",
        designation: "",
        company: "",
      },
      {
        quote: "The support we get from Ayushman Solution means we spend our time growing SAR, not firefighting SAP.",
        name: "Anurag Choube",
        designation: "",
        company: "SAR",
      },
      {
        quote: "Ayushman Solution automated the parts of our operations we didn't think were automatable.",
        name: "Mr. Chandan Pandey",
        designation: "Co-Founder And CEO",
        company: "Quantinox",
      },
      {
        quote: "Ayushman Solution brought the same energy to our SAP rollout that we bring to the ice — precise, fast, and built to perform under pressure.",
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
      },
    ],
  },

  // TODO: no dedicated photography exists yet for these three posts — reusing
  // already-established tech imagery from elsewhere in the design system.
  // /assets/images/Latets-Logo.png is this site's own "Ayushman Solutions"
  // mark, so it's now the correct badge to use post-rebrand.
  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "16 Sep 2025",
        title: "Understanding AI in SAP Business One: A Complete...",
        description: "The integration of AI in SAP has been a game-changer for manufacturers looking to automate routine decisions.",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "25 Aug 2025",
        title: "How SAP S/4HANA Finance Is Redefining Financial Management...",
        description: "If you think financial management is still all spreadsheets and slow month-end closes, it's time for an update.",
        image: "/assets/image2/solution-products-img-2.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "31 Jul 2025",
        title: "SAP NOW AI Tour New Delhi: Schedule and...",
        description: "It's going to be SAP-tember if you're in the capital city, with SAP NOW AI Tour making its way to New Delhi.",
        image: "/assets/image2/drone-flyer-actual.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // TODO: Fujikura and Haryana Leathers reused from sapServices.js's existing
  // asset set to give the carousel real depth beyond the 3 items confirmed in
  // the reference screenshots.
  caseStudies: {
    title: "Case studies",
    action: { label: "View All", href: "#" },
    items: [
      {
        title: "Bakers Circle Accelerated its Production & Distribution Processes with SAP Business One®",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        industry: "Wholesale Distribution",
        revenue: "~100cr",
        employees: "~300",
        location: "Jasola, Delhi, India",
        href: "#",
        download: { href: "#" },
      },
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
        bannerColor: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        partnerLogo: "/assets/image2/coldex-logo-1.png",
        eyebrow: "Customer Success Story",
        headline: "How Coldex Built Their L.I.V.E. Enterprise With Ayushman Solution",
        personName: "Gaurav Jain",
        personRole: "Managing Director, ColdEX Group",
        title: "ColdEX Logistics Improved Supply Chain Management, Warehouse and Fulfillment Management with SAP Business One®",
        industry: "Logistics",
        revenue: "400 Cr+",
        employees: "250",
        location: "Gurgaon, Haryana, India",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Fujikura Kasei Coating Painted a New Route to Success with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Coatings & Chemicals",
        revenue: "—",
        employees: "—",
        location: "India",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Haryana Leathers Transformed Its Manufacturing Operations with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Leather & Manufacturing",
        revenue: "—",
        employees: "—",
        location: "Haryana, India",
        href: "#",
        download: { href: "#" },
      },
    ],
  },

  // TODO: no underwater/reef photography exists in the project — reusing the
  // CTASection background already established for this design system.
  moreQuestions: {
    title: "Have more questions?",
    description:
      "For SAP Support Services, Count on Us. Ask about basic support to advanced SAP Business One support or S/4 HANA support services — you will always get a resolution!",
    button: { label: "Request Demo", href: "#" },
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "dark",
    compact: true,
<<<<<<< HEAD
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-dark) 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
=======
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-light) 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outline" }],
>>>>>>> develop
  },
};
