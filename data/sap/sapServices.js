// Content for /sap/services ("SAP Services"). Reuses the exact same section
// components as sapSolutions.js — only this sibling data file differs.

export const sapServices = {
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-2.png",
    align: "right",
    imagePosition: "15% center",
    textTheme: "dark",
    title: "SAP Services Tailored for Business Success",
    button: { label: "Get SAP Demo", href: "#" },
  },

  statsIntro: {
    title: "Unleash SAP Services and Technology Solutions\nPowered by Human Ingenuity",
    description:
      "At Ayushman Solution, we excel in crafting comprehensive ERP ecosystems fuelled by inventive solutions and cutting-edge enterprise modernization. By seamlessly integrating, innovating, and extending SAP applications, we revolutionize operations as a SAP services provider, enabling business leaders to oversee every aspect of their enterprise from a single, powerful software platform.",
    subtitle: "Discover Our Strengths as a Leading SAP Services Company",
    stats: [
      { icon: "handshake", value: "#1", label: "Platinum Partner" },
      { icon: "certificate", value: "600+", label: "Expert Consultants Certified in Their Field" },
      { icon: "puzzle", value: "25+", label: "Industry Packages" },
      { icon: "lightbulb", value: "1200+", label: "Successful SAP Services Implementations" },
    ],
  },

  // Integration copy/image below is transcribed verbatim from the reference
  // page (including the background photo it actually ships with, whatever
  // its filename suggests). The other five tabs reuse the same voice and the
  // same adventure-photography motif established on the Solutions page —
  // swap for dedicated per-service photography once available.
  serviceTabs: {
    tabs: [
      { id: "consultation", label: "Consultation" },
      { id: "implementation", label: "Implementation" },
      { id: "customization", label: "Customization" },
      { id: "managed", label: "Managed Services" },
      { id: "migration", label: "Migration Services" },
      { id: "integration", label: "Integration" },
    ],
    panels: {
      consultation: {
        image: "/assets/image2/drone-flyer-actual.png",
        imageAlt: "Person flying a drone on a mountain ridge",
        title: "Chart Your Course to SAP Success",
        titleAccent: "with Strategic SAP Consultation",
        description:
          "Every SAP journey starts with the right roadmap. Our consultants assess your current landscape, industry benchmarks, and business goals to recommend the SAP path — Business One, S/4HANA Cloud, or a hybrid approach — that fits your enterprise, not the other way around.",
        steps: [
          { label: "Assess", text: "We audit your current systems, processes, and pain points to understand where SAP can create the most value." },
          { label: "Strategize", text: "Our consultants map a phased roadmap aligned to your budget, timeline, and growth plans." },
          { label: "Recommend", text: "You walk away with a clear, prioritized SAP blueprint — no guesswork, no over-selling." },
        ],
        buttons: [
          { label: "Let's Talk", href: "#", variant: "primary" },
          { label: "SAP Consultation", href: "#", variant: "outlineLight" },
        ],
      },
      implementation: {
        image: "/assets/image2/SAP-Services-3.png",
        imageAlt: "Two mountaineers roped together climbing a snowy ridge",
        title: "Turn SAP Blueprints Into",
        titleAccent: "Live, Working Enterprise Systems",
        description:
          "A great SAP plan is only as good as its execution. Our certified implementation teams deploy SAP Business One and S/4HANA Cloud with proven methodologies, minimizing disruption while your teams keep running day-to-day operations.",
        steps: [
          { label: "Configure", text: "We tailor SAP modules, workflows, and roles to match how your business actually operates." },
          { label: "Deploy", text: "Our teams roll out in structured phases, testing at every milestone before go-live." },
          { label: "Adopt", text: "Hands-on training and support ensure your teams are confident from day one." },
        ],
        buttons: [
          { label: "Let's Talk", href: "#", variant: "primary" },
          { label: "SAP Implementation", href: "#", variant: "outlineLight" },
        ],
      },
      customization: {
        image: "/assets/image2/SAP-Services-1.png",
        imageAlt: "Snowboarder catching air against a bright sky",
        title: "Shape SAP Around",
        titleAccent: "Your Unique Business Processes",
        description:
          "Out-of-the-box SAP rarely fits every workflow. Our customization specialists extend and tailor SAP Business One and S/4HANA Cloud with add-ons, custom fields, and industry-specific logic, without compromising future upgrades.",
        steps: [
          { label: "Discover", text: "We map the exact gaps between standard SAP and your business-critical processes." },
          { label: "Build", text: "Our developers extend SAP safely, using supported customization frameworks." },
          { label: "Validate", text: "Every customization is tested against real workflows before it reaches production." },
        ],
        buttons: [
          { label: "Let's Talk", href: "#", variant: "primary" },
          { label: "SAP Customization", href: "#", variant: "outlineLight" },
        ],
      },
      managed: {
        image: "/assets/image2/sap-solution-banner.jpg",
        imageAlt: "Hiker looking out over a misty forest ridge",
        title: "Keep Your SAP Landscape",
        titleAccent: "Running at Peak Performance",
        description:
          "SAP doesn't stop needing attention after go-live. Our managed services team monitors, maintains, and optimizes your SAP environment around the clock, so your business runs smoothly while you focus on growth.",
        steps: [
          { label: "Monitor", text: "Proactive monitoring catches performance issues before they impact your business." },
          { label: "Maintain", text: "Regular patches, updates, and health checks keep your SAP landscape secure and current." },
          { label: "Optimize", text: "We continuously fine-tune performance and cost as your business scales." },
        ],
        buttons: [
          { label: "Let's Talk", href: "#", variant: "primary" },
          { label: "Managed Services", href: "/sap/business-one/managed-services", variant: "outlineLight" },
        ],
      },
      migration: {
        image: "/assets/image2/green-mountains.png",
        imageAlt: "Mountain peak rising through cloud",
        title: "Move to SAP S/4HANA",
        titleAccent: "Without Losing a Beat",
        description:
          "Migrating from legacy ERP or SAP ECC to S/4HANA Cloud is a major undertaking. Our migration specialists plan and execute the transition with zero data loss and minimal downtime, so your business keeps moving.",
        steps: [
          { label: "Plan", text: "We assess your legacy data, customizations, and integrations to build a risk-free migration path." },
          { label: "Migrate", text: "Data and processes move in controlled phases, validated at every step." },
          { label: "Stabilize", text: "Post-migration support ensures your new SAP environment performs exactly as promised." },
        ],
        buttons: [
          { label: "Let's Talk", href: "#", variant: "primary" },
          { label: "Migration Services", href: "#", variant: "outlineLight" },
        ],
      },
      integration: {
        image: "/assets/image2/SAP-Services-Customization-Segment-.webp",
        imageAlt: "Hikers helping each other climb a rocky ridge",
        title: "Synergize Your App and Data Ecosystems",
        titleAccent: "with Tailored SAP Integration Solutions",
        description:
          "Unlock the full potential of your business with Ayushman Solution's expertise in integrating heterogeneous SAP and external systems. Our tailored solutions enable more effective data management while reducing costs and resources on support. We specialize in data migration, consolidation, integration, and management across SAP and non-SAP applications, ensuring seamless connectivity and optimized data flow. From integrating cloud and on-premises apps to implementing SAP MII for real-time analytics, Ayushman Solution is your partner for achieving enhanced productivity and performance through comprehensive SAP integration services.",
        steps: [
          {
            label: "Evaluate",
            text: "We work with your team to map all your current SAP and non-SAP applications. We assess the data that needs to be integrated. Then, we plan integration without any data loss.",
          },
          {
            label: "Execute",
            text: "Our SAP experts extend your SAP platform's abilities along with addressing your unique business needs and requirements. We integrate processes, data, analytics, users, and assets – all keeping data security in mind.",
          },
          {
            label: "Enjoy",
            text: "Yes, we mean it. Now, you can enjoy all your data, apps and third-party systems connected on 1 single platform. Hyper-performance and simplified automation, now activated!",
          },
        ],
        buttons: [
          { label: "Let's Talk", href: "#", variant: "primary" },
          { label: "SAP Integrations", href: "#", variant: "outlineLight" },
        ],
      },
    },
  },

  ecoConscious: {
    title: "Eco-conscious Progress with Ayushman Solution - Leading SAP Service Provider",
    description:
      "What is your Go-Green Quotient? How deep-seated is sustainability in your Enterprise Value Chain? One of the crucial aspects of becoming a responsible entrepreneur is meeting environmental regulations and reporting requirements. Sustainability is a prime consideration in all human activity for Ayushman Solution - a leading SAP Service Provider. We stand by our motto of focused innovation, where technological progression and energy generation are in harmony with the environment. SAP + Ayushman Solution - Together we aim to take People and Planet together. Ayushman Solution aims to create a sustainable, transparent, and accountable ERP Solutioning environment that brings the greatest impact in terms of operational prowess. We aspire to chase 'Zero Journey' that aims for zero emissions and zero waste. As a progressive and aspiring SAP service provider, we are committed to collaborating and co-innovating with our diverse ecosystem of partners to help businesses achieve operational and financial excellence and drive sustainability at scale. Ready to be unlocked with Ayushman Solution Chasing Zero Journey with SAP Solutions?",
    background: "linear-gradient(120deg, #dff2e6 0%, #f4fbf6 60%)",
    buttons: [
      { label: "SAP Business One", href: "#", variant: "primary" },
      { label: "Talk to Service Provider", href: "#", variant: "outline" },
    ],
  },

  // TODO: dedicated per-industry photography doesn't exist yet — using
  // FeatureCard's icon treatment (matching FunctionalityGrid/BenefitsSection
  // conventions elsewhere) until real imagery is available.
  industries: {
    title: "Crafting Value-Centric ERP Solutions & SAP Services Rooted in Industry Expertise",
    description:
      "In a world where every industry faces distinct challenges, we possess the prowess to delve deep into the intricacies of these obstacles, offering tailored solutions to construct a future-ready ERP ecosystem. With a rich history of experience spanning over 21 diverse sectors, we've honed our ability to grasp the nuances of your domain challenges as a SAP services provider, ensuring the delivery of bespoke solutions that drive sustainable growth and success.",
    features: [
      {
        icon: "store",
        title: "Retail",
        description: "Gain comprehensive insights into your store's sales, orders, and operational tasks such as shift scheduling and time clock management.",
        action: { label: "Learn More", href: "#" },
      },
      {
        icon: "capsules",
        title: "Pharma",
        description: "Expedite decision-making processes and automate intricate Batch Manufacturing Records (MBR) for increased efficiency.",
        action: { label: "Learn More", href: "#" },
      },
      {
        icon: "boxes",
        title: "Food and Beverages",
        description: "Streamline supply chain operations by forecasting demand and managing material procurement efficiently.",
        action: { label: "Learn More", href: "#" },
      },
      {
        icon: "exchange",
        title: "Trading",
        description: "Gain real-time visibility into inventory, orders, and margins across every trading location from a single platform.",
        action: { label: "Learn More", href: "#" },
      },
      {
        icon: "car",
        title: "Automotive",
        description: "Synchronize production, dealer networks, and after-sales service with one connected SAP-powered ecosystem.",
        action: { label: "Learn More", href: "#" },
      },
      {
        icon: "industry",
        title: "Manufacturing",
        description: "Automate shop-floor processes and get real-time production visibility to hit delivery targets consistently.",
        action: { label: "Learn More", href: "#" },
      },
    ],
    showDots: false,
    buttons: [{ label: "Work With Us", href: "#", variant: "primary" }],
  },

  whyWeDo: {
    title: "This Is Why We Do, What We Do",
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
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
        background: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        partnerLogo: "/assets/image2/coldex-logo-1.png",
        eyebrow: "Customer Success Story",
        headline: "How Coldex Built Their L.I.V.E. Enterprise with Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Anubha Gupta",
        designation: "Director",
        company: "Gopal Corps Ltd",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Gcl Built Their L.I.V.E. Enterprise with Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Pramod Gokhale",
        designation: "General Manager",
        company: "Mankind Pharma",
        background: "linear-gradient(135deg,#0b3d91 0%,#1e73e8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Mankind Pharma Runs on Ayushman Solution's SAP Expertise",
        videoUrl: "#",
      },
      {
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
        background: "linear-gradient(135deg,#14304f 0%,#274972 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "SGS Tekniks' SAP Transformation Journey with Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How UMSL Scaled Operations with Ayushman Solution's SAP Services",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote:
          "Ayushman Solution brought the same energy to our SAP rollout that we bring to the ice — precise, fast, and built to perform under pressure.",
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
      },
      {
        quote:
          "From requirements to go-live, Ayushman Solution's SAP services team understood exactly what our operations needed.",
        name: "Anubha Gupta",
        designation: "Director",
        company: "Gopal Corps Ltd",
      },
      {
        quote:
          "Ayushman Solution helped us modernize our SAP landscape without disrupting day-to-day operations — the transition was smooth from day one.",
        name: "Pramod Gokhale",
        designation: "General Manager",
        company: "Mankind Pharma",
      },
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
    ],
  },

  news: {
    eyebrowTitle: "Stay connected to News, Events, and Announcements at Ayushman Solution",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "20 Mar 2024",
        title: "Ayushman Solution Scoops Two Top Awards at SAP Partner Summit 2024, Singapore",
        image: "/assets/image2/Partner-Summit-Singapore-2024.webp",
        href: "#",
      },
      {
        date: "01 Sep 2021",
        title: "Unveiled: 7 Ways to Increase ROI from Cloud ERP Implementation",
        source: "Hindustan Times",
        background: "#0a5f6b",
        href: "#",
      },
      {
        date: "01 Sep 2021",
        title: "Chitral Chadda & Siddhant Sharma – Solutions Expert – BI, Ayushman Solution Business Solutions Digital Technology Sabha",
        source: "Express Computer",
        background: "#0a0a0a",
        href: "https://www.expresscomputer.in/videos/digital-technology-sabha/chitral-chadda-siddhant-sharma-solutions-expert-bi-uneecops-business-solutions-digital-technology-sabha-2021/73273/",
      },
    ],
  },

  blogs: {
    title: "From Thinker's Desk",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get the most from every module.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "10 Mar 2025",
        title: "S/4HANA Cloud 2025: UX Enhancements That Are Taking...",
        description: "Cloud technology has seen massive technological advancements enabling even the most complex enterprise workflows.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
      {
        date: "08 Oct 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest...",
        description: "Ensuring consistent quality management is crucial for enhancing customer relationships, building lasting trust.",
        source: "AYUSHMAN SOLUTION",
        background: "var(--sap-navy)",
        href: "#",
      },
    ],
  },

  // TODO: no dedicated photography for Sevcon or Haryana Leathers exists yet
  // — Sevcon reuses an existing case-study thumb as a placeholder, and
  // Haryana Leathers' metadata is left as "—" (matching the convention
  // already used for unknown fields in sapSolutions.js).
  portfolio: {
    title: "Take a quick glance of our SAP application portfolio at Ayushman Solution",
    description: "Empowering Enterprises Through Technology and Innovation",
    action: { label: "Learn More", href: "#" },
    items: [
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
        title: "Energy Expert Sevcon Embraced Technology to Fuel Growth and Power Productivity with SAP Business One®",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Professional Services",
        revenue: "20 Cr",
        employees: "30",
        location: "Nehru Place, Delhi, India",
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

  faq: {
    title: "FAQs",
    items: [
      {
        question: "What is the time taken for SAP ERP implementation?",
        answer:
          "Timelines vary by scope, but a typical SAP Business One rollout takes 8-12 weeks, while a full S/4HANA Cloud implementation can run 4-6 months, depending on customization and data migration needs.",
      },
      {
        question: "What is the right approach to customize SAP?",
        answer:
          "Start with standard SAP functionality, then extend only where a genuine business gap exists — using supported customization frameworks so your system stays upgrade-safe over time.",
      },
      {
        question: "What is the cost of SAP ERP migration?",
        answer:
          "Migration cost depends on your current landscape's complexity, data volume, and the number of custom objects to carry forward. Ayushman Solution provides a detailed cost assessment after a free system audit.",
      },
      {
        question: "How Ayushman Solution will help you in ERP implementation & migration support?",
        answer:
          "As an SAP Platinum Partner, Ayushman Solution offers end-to-end support — from consultation and implementation to migration and 24/7 managed services — backed by 600+ certified SAP consultants.",
      },
    ],
  },

  innovation: {
    title: "Business Innovation is Necessary for Survival. Are you keeping up?",
    columns: [
      {
        heading: "SAP Business One Licensing and Costs",
        bullets: ["Implementation", "Training", "Support Pricing"],
        button: { label: "Get a Quote", href: "#" },
      },
      {
        heading: "SAP S/4HANA Cloud Pricing & Trial",
        bullets: ["Free 14-day trial", "Free 30-day trial"],
        button: { label: "Get a Quote", href: "#" },
      },
    ],
  },
};
