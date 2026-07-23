// Content for /sap/business-one ("SAP Business One"). Reuses the exact same
// section components as sapSolutions.js / sapServices.js / sapSupport.js /
// sapPractices.js — only this sibling data file differs.

export const sapBusinessOne = {
  // TODO: no dedicated hero photography exists for this page yet — reusing
  // the same small pool of adventure photography already established across
  // every SAP page in this project.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-3.png",
    align: "right",
    title: "SAP Business One: A Scalable ERP Solution for SMEs",
    button: { label: "Request A Demo", href: "#" },
  },

  whatIsIt: {
    title: "What is SAP Business One?",
    description:
      "SAP Business One is an integrated Enterprise Resource Planning solution offering efficient processes and numerous advantages connected to operations and activity optimization. Built specifically for small to midsize businesses and fast-growing companies, SAP Business One helps SMEs connect and automate core business functions—finance, sales, inventory, production, and everything else you need to run your business efficiently and effortlessly.\n\nThis solution, now run by over 70,000 companies worldwide and available in over 170 countries, helps businesses run better every day.",
    background: "linear-gradient(120deg, #fdf1ea 0%, #eaf5ee 60%, #ffffff 100%)",
  },

  // Full-bleed HeroBanner-style sections (image background + overlay +
  // left-aligned content), matching the site's main Hero pattern rather than
  // the side-by-side ImageTextSection layout — per explicit request.
  keyFeatures: {
    backgroundImage: "/assets/image2/SAP-Services-Customization-Segment-.webp",
    align: "left",
    title: "Key Features & Modules of SAP Business One",
    description:
      "From financials and accounting to inventory, sales, and production, SAP Business One software is the full-fledged, global solution you need to deliver real-time, actionable insights across your business. Features include:",
    bullets: [
      { label: "Financial Management", text: "Manage your accounting, budget, cash flow, and bank with fail-safe, in-built compliance." },
      { label: "Sales & Customer Management", text: "Take charge of the entire sales process from lead to invoice and maintain customer relations with linked CRM." },
      { label: "Purchasing & Inventory Control", text: "Turn every purchase into a reliable step in your supply chain and seize full control over your inventory." },
      { label: "Business Intelligence & Reporting", text: "Stay ahead with interactive dashboards, built-in analytics, and real-time reporting on a single platform." },
      { label: "Production & MRP", text: "Safeguard your manufacturing with BOMs, production orders, and materials requirement planning." },
      { label: "Project Management", text: "Plan, manage, and supervise all your projects without any quality compromise and with integrated time tracking, resource management, and costing tools." },
      { label: "Analytics & Mobility", text: "Access critical insights on the go via mobile apps and dashboards, ensuring your business stays agile anytime, anywhere." },
    ],
    buttons: [
      { label: "Explore SAP Solution", href: "#", variant: "primary" },
      { label: "Let's Talk", href: "#", variant: "outlineLight" },
    ],
  },

  whyChoose: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "left",
    title: "Why Choose SAP Business One Software?",
    bullets: [
      { label: "End-to-End Integration", text: "Unite all your relevant business processes on various levels – from finance to customers – within one tool." },
      { label: "Real-Time Data Access", text: "Utilize the benefits of visibility creation, insight consolidation, touchpoint setup, and informed decision-making." },
      { label: "Scalability", text: "Start smaller and then expand into larger markets, all without ever switching your systems." },
    ],
    advantagesTitle: "Key Differentiators of SAP B1",
    advantages: [
      { title: "Industry-proven functionalities" },
      { title: "Strong partner ecosystem" },
      { title: "Global support and continuous innovation by SAP" },
      { title: "Flexible deployment options" },
    ],
  },

  addOnsIntro: {
    title: "SAP B1 Add-Ons & Integrations",
    description: "Drive better productivity and performance across your operations with powerful add-ons and integrations that can be paired with SAP Business One:",
  },

  addOnsRows: [
    {
      imagePosition: "left",
      image: "/assets/image2/drone-flyer-actual.png",
      imageAlt: "Person flying a drone at sunset",
      checklistTitle: "Popular Add-Ons:",
      checklist: [
        "Job Work Management",
        "Gate Entry Management",
        "Barcode Scanning & Printing",
        "Quality Control",
        "Weighbridge Integration",
      ],
      verticalAlign: "start",
    },
    {
      imagePosition: "right",
      image: "/assets/image2/SAP-Services-2.png",
      imageAlt: "Snowboarder catching air against a bright sky",
      checklistTitle: "Third-Party Integrations:",
      checklist: [
        "CRM Platforms (e.g., Salesforce, Zoho)",
        "E-Commerce Systems (e.g., Shopify, Magento)",
        "Payment Gateways, logistics providers, and more",
      ],
      verticalAlign: "start",
    },
  ],

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
      "CARS24",
      "esri",
      "King Koil",
      "Mankind",
      "FixDerma",
      "Addverb Technologies",
      "ambrane",
      "Bakers Circle",
      "Clearpack",
      "Bharat Petroleum",
      "Green Gas Limited",
      "Inshorts",
      "JCB",
      "Ajax Fiori",
      "Aditya Birla Group",
      "Mrs. Bectors Food Specialities Ltd",
      "Prakash Pipes Limited",
      "Raj Overseas",
      "KYOCERA",
      "Lahori Zeera",
    ],
  },

  // TODO: no dedicated photography exists for these five tiles — reusing
  // already-established real assets from elsewhere in the design system.
  industryChallenges: {
    title: "SAP Business One is designed to cater to specific industry challenges",
    items: [
      {
        label: "Manufacturing",
        description: "Real-time production planning, quality control, and BOM tracking.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Retail",
        description: "Integrated POS, inventory management, and multi-location support.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Pharmaceuticals",
        description: "Batch tracking, compliance, and expiry management.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        label: "FMCG",
        description: "Demand planning, order management, and trade promotions.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        label: "Automotive",
        description: "Vendor management, parts traceability, and after-sales support.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#",
      },
    ],
  },

  deployment: {
    title: "SAP Business One Deployment",
    background: "linear-gradient(120deg, #fdf1ea 0%, #ffffff 60%)",
    checklist: [
      "On-Premise to have full control over hardware, data, and customizations",
      "Cloud for anytime, anywhere access and lower infrastructure costs",
      "Hosted for a medium alternative combining scalability and management.",
    ],
    description:
      "Enterprise-grade security, backup, and performance are guaranteed, and they can be scaled effortlessly as your company expands.",
  },

  testimonials: {
    title: "Client Testimonials",
    description: "Success stories that demonstrate real-time benefits of working with the best SAP Business One partner.",
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Dharmesh Garg",
        designation: "AVP IT",
        company: "Okaya Power Solutions Pvt. Ltd.",
        background: "linear-gradient(135deg,#0e7a3e 0%,#3fbf72 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Okaya Digital Transformation And Automation Journey With Ayushman Solution",
        videoUrl: "https://www.youtube.com/watch?v=RNCZTwRfr5k",
      },
      {
        name: "Anubha Gupta",
        designation: "Director",
        company: "Gopal Corps Ltd",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Gcl Built Their L.I.V.E. Enterprise With Ayushman Solution",
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
        quote: "The team's SAP expertise made our shift to SAP Business One completely painless.",
        name: "Dharmesh Garg",
        designation: "AVP IT",
        company: "Okaya Power Solutions Pvt. Ltd.",
      },
      {
        quote: "Ayushman Solution felt like an extension of our own team from day one.",
        name: "Anubha Gupta",
        designation: "Director",
        company: "Gopal Corps Ltd",
      },
      {
        quote: "Ayushman Solution brought the same energy to our SAP rollout that we bring to the ice.",
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
      },
    ],
  },

  news: {
    eyebrowTitle: "Read Our Latest News",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
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
        image: "/assets/image2/Partner-Summit-Singapore-2024.webp",
        href: "#",
      },
    ],
  },

  // TODO: no dedicated photography exists for these three posts — reusing
  // already-established real assets from elsewhere in the design system.
  insights: {
    title: "Read our latest insights",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "29 Feb 2024",
        title: "Ayushman Solution Powers PM Modi's 'Digital Bharat' Dream, Enables...",
        description: "India is the land of dreams and aspirations. We are a...",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
      {
        date: "27 Feb 2024",
        title: "A Brighter Future: Gen Z's Shift from Fairness...",
        description: "Beauty is beyond skin shade. It's about confidence, kindness, and authenticity....",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "13 Feb 2024",
        title: "Fueling Edible Oils Excellence Towards 'Aatmnirbharta' like B.P....",
        description: "Today, consuming palm oil has become a staple, but its health...",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "#",
      },
    ],
  },

  caseStudies: {
    title: "How We Helped Our Clients Take The Leap",
    items: [
      {
        title: "Standard to Stellar: Leading Industrial Machinery and Concrete Company Unleashes SAP ECC 6.0 for Reporting and Process Brilliance",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Industrial Machinery and Components",
        revenue: "—",
        employees: "200+",
        location: "Bangalore, Karnataka",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0e7a3e 0%,#3fbf72 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "ACRO Engineering Transformation And Automation Journey With Ayushman Solution",
        personName: "Himanshu Jain",
        personRole: "CEO At ACRO Engineering",
        title: "Turning the automation game for Acro Engineering with SAP ERP",
        industry: "—",
        revenue: "—",
        employees: "—",
        location: "—",
        href: "#",
      },
      {
        title: "SGS Tekniks Boosted Production by Real-Time Inventory Control with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Manufacturing",
        revenue: "~500cr",
        employees: "~1600",
        location: "HO: (Gurgaon, Haryana, India)",
        href: "#",
        download: { href: "#" },
      },
    ],
  },

  // TODO: no underwater/reef photography exists in the project — reusing the
  // CTASection background already established for this design system.
  industryBanner: {
    title: "Can't Find Your Industry Listed Above?",
    description:
      "Well! Our industry expertise is not just limited to these, but we cater to vast array of industries! Be assured, SAP Business One is tailor-made for small and mid-size businesses across every industry, ensuring a seamless fit no matter your business domain. Explore with us the limitless possibilities for your specific industry needs.",
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  faq: {
    title: "Frequently Asked Questions (FAQs)",
    items: [
      {
        question: "Is SAP Business One good for small businesses?",
        answer:
          "Yes. SAP Business One is purpose-built for small and midsize businesses, offering enterprise-grade financials, sales, inventory, and reporting without enterprise-grade complexity or cost.",
      },
      {
        question: "Does SAP Business One come with mobile applications?",
        answer:
          "Yes. SAP Business One includes mobile apps that give you access to dashboards, approvals, and key business data from anywhere, on iOS and Android.",
      },
      {
        question: "Can I modify SAP Business One ERP?",
        answer:
          "Yes. SAP Business One supports custom fields, workflows, and add-ons, letting you tailor the system to your exact business processes without compromising future upgrades.",
      },
      {
        question: "How will I be supported after the implementation process?",
        answer:
          "As an SAP Platinum Partner, Ayushman Solution provides ongoing managed services, 24x7 support portals, and a dedicated team for maintenance, troubleshooting, and upgrades.",
      },
      {
        question: "How long to implement SAP Business One?",
        answer:
          "A typical SAP Business One implementation takes 8-12 weeks, depending on the scope of customization, data migration, and the number of users and locations involved.",
      },
      {
        question: "Can I integrate SAP Business One with my existing solutions?",
        answer:
          "Yes. SAP Business One integrates with CRM platforms, e-commerce systems, payment gateways, and logistics providers through open APIs and pre-built connectors.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "dark",
    compact: true,
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-dark) 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
