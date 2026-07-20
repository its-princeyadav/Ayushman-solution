// Content for /sap/practices ("SAP Practices"). Reuses the exact same section
// components as sapSolutions.js / sapServices.js / sapSupport.js — only this
// sibling data file differs.

export const sapPractices = {
  // TODO: no dedicated hero photography exists for Practices yet — reusing
  // the Solutions page's own hero photo, consistent with how every SAP page
  // in this project shares one small pool of adventure photography.
  hero: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    title: "Build Modern Intelligent Enterprises With Advanced SAP Practices",
    button: { label: "Explore Our SAP Work", href: "#" },
  },

  partner: {
    imagePosition: "right",
    image: "/assets/image2/SAP-Services-3.png",
    imageAlt: "Two mountaineers helping each other up a snowy ridge",
    title: "Preferred SAP Partner",
    titleAccent: "For Your Transformation Journey",
    description: [
      "We have been the leading ERP solutions provider and enabler. As a trusted SAP partner, we strive to deliver on-premise and cloud SAP software solutions- today and in the future using our vast expertise and systematic approach in the SAP ecosystem and methodology proven across industries.",
      { bold: true, text: "#1 SAP Platinum Partner in APJ" },
      "As a long-standing SAP partner, Ayushman Solution and SAP has been working as a strategic business partner to deliver enterprise application services from product innovation and development to delivery to help businesses digitize and modernize.",
    ],
    stats: [
      { icon: "location", value: "12+", label: "Center of Excellence (CoEs)" },
      { icon: "certificate", value: "50+", label: "SAP Awards" },
    ],
    buttons: [
      { label: "Let's Talk", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "outline" },
    ],
  },

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

  transformative: {
    title: "A transformative approach to reinvent leading solutions",
    description:
      "Our work with SAP does not end with mere implementation and support. We are reinventing these leading solutions to deliver quantifiable results.",
  },

  // TODO: no dedicated photography exists for these four rows yet — reusing
  // already-established assets from elsewhere in the design system rather
  // than introducing unrelated stock imagery.
  practiceRows: [
    {
      imagePosition: "left",
      image: "/assets/image2/drone-flyer-actual.png",
      imageAlt: "Person flying a drone on a mountain ridge",
      title: "RISE with SAP",
      description: "Unlock the true potential of an intelligent enterprise with SAP S/4HANA Cloud.",
      button: { label: "RISE with SAP", href: "#", variant: "primary" },
    },
    {
      imagePosition: "right",
      image: "/assets/image2/SAP-Services-Customization-Segment-.webp",
      imageAlt: "Hikers helping each other climb a rocky ridge",
      title: "SAP Business Technology Platform",
      description: "Serve your clients continuously with innovative and advanced solutions.",
    },
    {
      imagePosition: "left",
      image: "/assets/image2/SAP-Services-3.png",
      imageAlt: "Two mountaineers on a snowy ridge overlooking the valley",
      title: "Industry Transformation",
      description: "Discover specific solutions to reshape the industries of tomorrow.",
    },
    {
      imagePosition: "right",
      image: "/assets/image2/green-mountains.png",
      imageAlt: "Mountain peak rising through cloud",
      title: "SAP Solutions on Cloud",
      description: "Migrate from legacy, on-premise infrastructure to cloud easily.",
    },
  ],

  // TODO: no dedicated photography exists for these six functional tiles yet
  // (the Solutions page references the same missing filenames — those were
  // never real files) — reusing already-established real assets instead.
  functionalityGrid: {
    title: "SAP Solutions to Transform Every Industry",
    description:
      "Our entire SAP ecosystem can revolutionize how every industry functions, igniting a passion for data and insights-driven decision-making.",
    items: [
      { label: "Finance and accounting", image: "/assets/image2/solution-products-img-1.webp", href: "#" },
      {
        label: "Sourcing, procurement, and purchasing",
        description: "Make smarter buying decisions with detailed purchasing reports and dashboards.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      { label: "Supply chain and distribution", image: "/assets/image2/haryana-leathers-case-study-thumb.jpg", href: "#" },
      { label: "Operations and inventory", image: "/assets/image2/clearpack-thumb-1.jpg", href: "#" },
      { label: "Production and pricing", image: "/assets/image2/fujikura-thumb-1.jpg", href: "#" },
      {
        label: "Sales and services",
        description: "Seamlessly handle sales orders and order-to-payment process.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "#",
      },
    ],
  },

  testimonials: {
    title: "See What Our Clients Have To Say",
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
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
        background: "linear-gradient(135deg,#14304f 0%,#274972 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How SGS Tekniks Transform Their Journey With Ayushman Solution",
        videoUrl: "https://www.youtube.com/watch?v=lkj62ryHrFc",
      },
      {
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "UMSL's SAP Transformation Journey With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Saurabh Munjal",
        designation: "Co-Founder & CEO",
        company: "Archian Foods Pvt Ltd",
        background: "linear-gradient(135deg,#0e7a3e 0%,#3fbf72 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Archian Foods Scaled with Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Ankit Khandelwal",
        designation: "MD",
        company: "Usha Fasteners Pvt. Ltd.",
        background: "linear-gradient(135deg,#c88a12 0%,#f0b73f 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Usha Fasteners' SAP Journey With Ayushman Solution",
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
        quote: "The team's SAP expertise and responsiveness gave us the confidence to go live on schedule.",
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
      },
      {
        quote: "From planning to go-live, Ayushman Solution felt like an extension of our own team.",
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
      },
      {
        quote: "Ayushman Solution understood our production floor before they touched a single screen.",
        name: "Saurabh Munjal",
        designation: "Co-Founder & CEO",
        company: "Archian Foods Pvt Ltd",
      },
      {
        quote: "Our SAP rollout was smoother than we ever expected, thanks to Ayushman Solution's team.",
        name: "Ankit Khandelwal",
        designation: "MD",
        company: "Usha Fasteners Pvt. Ltd.",
      },
      {
        quote: "Ayushman Solution brought the same energy to our SAP rollout that we bring to the ice.",
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
      },
    ],
  },

  // TODO: no dedicated photography exists for this section yet — reusing an
  // already-established asset (a generic "modern enterprise" style photo
  // isn't in the project, so this keeps the same adventure-photography
  // motif used everywhere else on this page).
  partnership: {
    imagePosition: "right",
    image: "/assets/image2/SAP-Services-Customization-Segment-.webp",
    imageAlt: "Two colleagues reviewing a tablet together",
    theme: "light",
    background: "linear-gradient(135deg, #0a1e3c 0%, #163f73 100%)",
    title: "Leverage the Power of Partnership To Empower Your Modern Digital Enterprise",
    description:
      "Collaborate effectively across departments, identify areas of improvement with a real-time view, and ensure compliance with laws and regulations from a single place with the right ERP solution.",
    bullets: [
      "Bring cohesion and control across all business subsidiaries or branches.",
      "Run your business from anywhere with superfast and accurate reporting.",
    ],
    numberedBullets: true,
    buttons: [{ label: "Schedule A Call", href: "#", variant: "primary" }],
  },

  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News",
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
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "16 Jun 2025",
        title: "How SAP Business One Could Be Your Startups...",
        description: "Business is often the dream and baby of young entrepreneurs. But turning that dream into a scalable operation takes the right systems.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        date: "09 May 2025",
        title: "Are You Testing Your SAP S/4HANA Cloud Projects...",
        description: "What happens if your SAP S/4HANA Cloud system isn't tested properly before go-live? Here's what to check first.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get the most from every module.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
    ],
  },

  // TODO: Fujikura and Haryana Leathers reused from sapServices.js/sapSupport.js's
  // existing asset set to give the carousel real depth.
  caseStudies: {
    title: "Want to know more about SAP?",
    description: "Explore to dig deep to see how we help you build intelligent enterprises.",
    action: { label: "Learn More", href: "#" },
    items: [
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
        title: "Fujikura Kasei Coating Painted a New Route to Success with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Coatings & Chemicals",
        revenue: "—",
        employees: "—",
        location: "India",
        href: "#",
        download: { href: "#" },
      },
    ],
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
