// Content for /sap/business-one/implementation ("SAP Business One
// Implementation"). Reuses the exact same section components as
// sapSolutions.js / sapServices.js / sapSupport.js / sapPractices.js /
// sapBusinessOne.js — only this sibling data file differs.

export const sapBusinessOneImplementation = {
  // TODO: no dedicated hiker/implementation-team hero photo exists in the
  // project yet — reusing the same small pool of adventure photography
  // already established across every SAP page in this project.
  hero: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    title: "SAP Implementation Partner That Drives Digital Transformation",
    button: { label: "Get Implementation Support", href: "#" },
  },

  whatIsImplementation: {
    title: "What is SAP Implementation?",
    description:
      "SAP implementation is the structured process of deploying SAP ERP software in an organization to streamline business operations, enhance efficiency, and drive digital transformation. It involves various stages, including planning, system configuration, data migration, testing, and post-go-live support. Understanding what SAP implementation involves is crucial for businesses looking to integrate SAP solutions seamlessly while minimizing risks and disruptions. With an expert SAP implementation partner like Ayushman Solution, companies can ensure a smooth transition, leveraging industry best practices for maximum ROI.",
    buttons: [{ label: "SAP Implementation Methodology", href: "#", variant: "primary" }],
  },

  industryExpertise: {
    title: "Custom SAP Implementation Partner That Speaks Your Industry's Language",
    description:
      "Intelligence and innovation alone don't cut it. The third 'i' for a perfect SAP implementation is 'industry.' As a leading SAP implementation partner, Ayushman Solution carves out strategies that are unparalleled, backed by years of experience working with companies across 21+ industries. With a deep understanding of industry best practices, we offer a refined approach that sets us apart. Because every industry is different, we offer preconfigured integrations and industry-specific add-ons to jumpstart your digital transformation. Ayushman Solution offers SAP implementation services across a wide range of industries, leveraging deep domain expertise and tailored ERP solutions for Discrete Manufacturing, Process Manufacturing, Chemical, Food & Beverage, Retail & E-commerce, FMCG, Pharmaceutical & Life Sciences, Automotive & Auto Ancillary, Engineering & Construction, Professional Services, Education, Packaging, Textile & Apparel, and Real Estate.",
  },

  // Folded into FeatureCard's existing icon + title + description + action
  // shape rather than a new pricing-card component — "Subscription per
  // month/year" and the "Includes:" list live inside `description`.
  packages: {
    title: "SAP Implementation Packages by Ayushman Solution",
    features: [
      {
        icon: "boxes",
        title: "Basic Pack",
        description:
          "Subscription per month/year. A basic licensing pack to gain greater control over the most pressing business processes. Includes: Finance, CRM, Sales, Purchasing, Inventory, Bill of Materials, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#" },
      },
      {
        icon: "puzzle",
        title: "Professional Pack",
        description:
          "Subscription per month/year. Get access to all modules and features along with a software development kit. Includes: Administration, Financials, CRM, Sales, Purchasing, Banking, Inventory, Production, MRP, Service, HR, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#" },
      },
      {
        icon: "shield",
        title: "Financial User Pack",
        description:
          "Subscription per month/year. Seamlessly manage payroll, financials, and sales aspects, and more. Includes: Financials, Sales Aspects, Purchasing Aspects, Banking, Inventory Aspects, Production Aspects, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#" },
      },
    ],
  },

  // TODO: no dedicated "team celebrating on a summit" photo exists in the
  // project yet — reusing the drone-flyer image already established
  // elsewhere in this design system.
  implementationsStats: {
    imagePosition: "right",
    verticalAlign: "start",
    title: "1000+ SAP Implementations in India",
    description:
      "Ayushman Solution works on the SAP-certified Accelerated SAP (ASAP) model of implementation. With a team of more than 300 certified SAP consultants, we have offered SAP implementation services to thousands of clients, including SAP Business One implementation. Our longstanding experience as an SAP implementation partner makes us an accomplished business partner in advisory, implementation, and support.",
    checklistTitle: "How we do it? Let's have a close look at our SAP implementation steps.",
    checklist: [
      "Analyze: Analyze business processes and key requirements. It is one of the most significant SAP implementation project steps for any kind of business — ensuring consistent communication and collaboration to gain organization-wide clarity, budget, and timelines.",
      "Build and Implement: Install and configure the application with minimum business disruption and zero risk, performing software configuration, system, and integration testing.",
    ],
    buttons: [
      { label: "Explore SAP Business One", href: "/sap/business-one", variant: "primary" },
      { label: "Get Quote Today", href: "#", variant: "outline" },
    ],
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Team celebrating after a successful SAP implementation milestone",
  },

  awards: {
    title: "Ayushman Solution is among the most trusted SAP implementation companies",
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

  partnersIntro: {
    title: "SAP Implementation Partner for SAP Business One",
    description: "Ayushman Solution helps you devise an efficient roadmap for the SAP implementation process.",
  },

  // TODO: no dedicated S/4HANA implementation photography exists in the
  // project yet — reusing the same solution-products photography already
  // established across sapSolutions.js.
  s4hanaPartner: {
    imagePosition: "left",
    title: "SAP implementation services for S/4HANA",
    description:
      "Unlock the power of SAP S/4HANA with our seamless implementation services. Experience superior data analytics, enhanced processing capabilities, and the flexibility of a multi-cloud environment compared to standard SAP ERP.",
    buttons: [
      { label: "SAP S/4HANA", href: "/sap/solutions", variant: "primary" },
      { label: "Request Demo", href: "#", variant: "outline" },
    ],
    image: "/assets/image2/solution-products-img-1.webp",
    imageAlt: "Team reviewing SAP S/4HANA implementation plans",
  },

  b1Partner: {
    imagePosition: "right",
    title: "SAP B1 implementation",
    description:
      "Ensuring a smooth integration of SAP Business One into your existing systems. Benefit from enhanced visibility, streamlined processes, and real-time insights to drive business growth. Trust Ayushman Solution as your trustworthy partner for SAP implementation in India to unlock the full potential of SAP Business One.",
    buttons: [
      { label: "Get SAP Solution", href: "/sap/business-one", variant: "outline" },
      { label: "Get a Quote", href: "#", variant: "dark" },
      { label: "Call Us Now", href: "tel:+911204100500", variant: "outline" },
    ],
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One implementation team at work",
  },

  ecosystemAdoption: {
    title: "SAP Implementation Isn't Complete Without Total Ecosystem Adoption",
    description:
      "We are an SAP implementation partner that offers end-to-end SAP implementation support. That means we plan the complete deployment for you. Implementation does not end with software launch — it also means effective migration, integration, and complete technical support. Also, in modern days, the ROI of SAP implementation goes beyond support services. We also aim to offer you:",
    bullets: [
      {
        label: "Increased solution adoption speed",
        text: "Get SAP implementation done in record time (within weeks), along with guidance on technical roadblocks so you can enhance the time to value of your project.",
      },
      {
        label: "Leverage the latest SAP innovations",
        text: "In the era of AI, your business cannot afford to lag. Our SAP consultants have extensive knowledge of SAP solutions and can help you implement the latest SAP innovations to leverage cutting-edge business technology.",
      },
      {
        label: "Prepare for the future with AI innovation",
        text: "We help you empower your business for both today and tomorrow. Through our expertise, you'll improve productivity and gain deeper insights by integrating AI into your business processes effectively.",
      },
    ],
    buttons: [{ label: "Let's Talk", href: "#", variant: "outline" }],
  },

  roadmap: {
    title: "Our SAP Implementation Roadmap",
    description:
      "With decades of experience and a local understanding of business niches, our uniquely tailored SAP implementation approach can quickly transform your business, providing a bridge that fast-tracks your path to building a L.I.V.E. enterprise. Ayushman Solution's SAP implementation services, paired with SAP's software capabilities, build the kind of speed and strength today's businesses need. Here is a step-by-step process of how we do it:",
    steps: [
      "Project planning and scope defining",
      "Team leader allocation — your point of contact",
      "Team allocation and implementation kick-off",
      "Implementation service adaption to meet your business needs",
      "Actionable plans to address technical challenges",
    ],
    buttons: [{ label: "Let's Talk", href: "#", variant: "primary" }],
  },

  // TODO: real client logo image assets aren't available yet — rendered as
  // plain text marks (see ClientsSection.jsx) until real logo files exist,
  // reusing the exact same client list already established in
  // sapBusinessOne.js.
  roadmapClients: {
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
      "NASSCOM",
      "BharatPe",
      "ambrane",
      "Addverb Technologies",
      "Aditya Birla Group",
      "Ajax Fiori",
      "ColdEX",
      "DealShare",
      "EPSON",
      "Britannia",
      "Green Gas Limited",
      "Inshorts",
      "Bharat Petroleum",
      "FixDerma",
      "Lahori Zeera",
      "Prakash Pipes Limited",
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "Our clients share their SAP implementation experience with us.",
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
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        videoUrl: "#",
      },
      {
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
        background: "linear-gradient(135deg,#14304f 0%,#274972 100%)",
        eyebrow: "Customer Success Story",
        headline: "How SGS Tekniks Transformed Their Journey With Ayushman Solution",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote:
          "Ayushman Solution's structured implementation methodology meant we went live on schedule with zero disruption to daily operations.",
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
      },
      {
        quote: "The team's SAP expertise and responsiveness gave us the confidence to go live on schedule.",
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Read More", href: "#" },
    items: [
      {
        date: "07 Jan 2025",
        title: "2025 SAP Buzz: SAP Trends You'll Love",
        description: "SAP has always been at the forefront of enabling digital transformation...",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
      {
        date: "16 Sep 2025",
        title: "Understanding AI in SAP Business One: A Complete Guide",
        description: "The integration of AI in SAP has been a game-changer for...",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "31 Jul 2025",
        title: "SAP NOW AI Tour New Delhi: Schedule and Highlights",
        description: "It's going to be SAP-tember if you're in the capital city,...",
        image: "/assets/image2/SAP-Services-3.png",
        href: "#",
      },
    ],
  },

  // TODO: no underwater/coral photography exists in the project — reusing
  // the same CTASection background image already established across the
  // design system.
  moreQuestions: {
    title: "Have more questions?",
    description:
      "Ayushman Solution's relationship with SAP extends back decades. We have won a series of SAP awards that help validate our positioning to deliver quality and value. So, if you want to transform your business for the future with SAP Business One implementation or SAP S/4HANA implementation — we should talk.",
    button: { label: "Get Call From Us", href: "#" },
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is SAP B1 ERP implementation?",
        answer:
          "SAP B1 ERP implementation is the end-to-end process of deploying SAP Business One at a company — from requirements analysis and system configuration through data migration, testing, training, and go-live support — tailored to that company's specific processes.",
      },
      {
        question: "What are the phases of SAP implementation? I want to know the stages of an SAP implementation.",
        answer:
          "A typical SAP implementation follows the ASAP methodology: project preparation, business blueprint, realization (configuration and testing), final preparation, and go-live with post-implementation support.",
      },
      {
        question: "How long does it take to implement SAP ERP?",
        answer:
          "Timelines vary with scope, but a standard SAP Business One implementation typically takes 8-12 weeks, while larger SAP S/4HANA rollouts can take several months depending on customization and data complexity.",
      },
      {
        question: "How to choose an SAP implementation partner?",
        answer:
          "Look for a partner's SAP partnership level, industry-specific implementation experience, certified consultant strength, post-go-live support model, and references from businesses similar in size and industry to yours.",
      },
      {
        question: "What benefits do you get after implementing SAP Business One?",
        answer:
          "Benefits include unified financials, sales, and inventory data, real-time reporting, reduced manual errors, faster decision-making, and a scalable platform that grows with your business.",
      },
      {
        question: "What are the levels of SAP partnerships, and which one should I prefer?",
        answer:
          "SAP partnership levels range from Silver to Gold to Platinum. A Platinum Partner like Ayushman Solution (through United VARs) reflects the deepest implementation experience, largest certified consultant base, and strongest track record.",
      },
      {
        question: "Who is the leading SAP B1 Implementation Partner?",
        answer:
          "Ayushman Solution is recognized by SAP as a leading SAP Business One implementation partner in India, backed by 1000+ implementations, 300+ certified consultants, and multiple SAP Partner of the Year awards.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "dark",
    compact: true,
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-light) 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outline" }],
  },
};
