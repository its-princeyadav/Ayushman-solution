// Content for /analytics ("Data Analytics"). Structured the same way as every
// data/sap/*.js page (a plain, serializable data object consumed by a single
// composer component) so the Analytics practice follows the exact same
// architecture as the completed SAP module, while carrying its own distinct
// content and a blue/azure accent (see components/Analytics/Analytics.module.css).
//
// This is the real page the sitewide mega-menu's "Data Analytics" category
// already links to (components/Whatwedo.jsx, CATEGORIES[1].href = "/analytics")
// — that link previously 404'd. The sub-items listed there (Data Visualization,
// BI Dashboard, BI Managed Services, BI Training, BI Development, BI Consulting,
// Tableau, Power BI, Alteryx, QuickSight) are this page's real, already-approved
// service list and drive the Solutions section below; anchors match the ids
// that Whatwedo.jsx's column hrefs now point at.
//
// No Gartner ratings, partner tiers, or client counts are invented here for
// the analytics practice specifically — the one company-wide figure reused
// (1800+ businesses / 21+ industries) is the same real, already-established
// cross-practice metric already used verbatim in data/sap/sapSolutions.js,
// data/sap/sapHub.js and data/sap/erpSoftwareHyderabad.js's own ClientsSection.

export const analytics = {
  hero: {
    // TODO: no dedicated analytics/office photography exists in the project
    // yet — reusing an already-established generic mood banner (same
    // "placeholder stock photo behind a heavy scrim" convention already used
    // for sapSolutions.js's own hero).
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "left",
    textTheme: "light",
    title: "Turn Data Into Decisions That Move Your Business Forward",
    description:
      "Transform fragmented business data into clear, actionable intelligence with modern BI, analytics, AI and data engineering solutions built for smarter decision-making.",
    buttons: [
      { label: "Let's Connect", href: "#contact", variant: "primary" },
      { label: "Explore Analytics", href: "#solutions", variant: "outlineLight" },
    ],
  },

  intro: {
    imagePosition: "right",
    eyebrow: "DATA & ANALYTICS",
    title: "Your Data Has",
    highlight: "More to Say",
    description: [
      "Every business decision is only as good as the data behind it. Most organizations already have the data — what's missing is a clear, connected way to read it.",
      "Ayushman Solutions builds the analytics layer that turns scattered spreadsheets, ERP records and CRM activity into one dependable source of truth — dashboards your teams trust, models that predict what's next, and reporting that keeps pace with the business instead of lagging behind it.",
    ],
    button: { label: "Explore Analytics", href: "#solutions" },
    // Real photo already used on the homepage (components/Hero/Hero.jsx-
    // adjacent asset) showing an actual BI-style dashboard overlay — a
    // genuine fit for PremiumSplitSection's "monitor" mockup, not a stock
    // substitute.
    image: "/assets/images/graph-with-img.png",
    imageAlt: "Weekly analytics dashboard overlaid on a team reviewing data on a laptop",
    features: [
      { icon: "chart", title: "Actionable Insights", description: "Dashboards built around decisions, not just data" },
      { icon: "cloud", title: "Cloud-Ready", description: "Runs on the infrastructure you already use" },
      { icon: "shield", title: "Secure by Design", description: "Role-based access on every dashboard and dataset" },
    ],
  },

  // Section 02 — credibility, expressed as qualitative capability tiles
  // rather than invented ratings/partner-tier claims.
  trust: {
    title: "Trusted Analytics Expertise for Data-Driven Businesses",
    description: "Four disciplines, one connected analytics practice.",
    items: [
      {
        label: "Business Intelligence",
        description: "Dashboards and reporting built around how your teams actually work.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#solutions",
      },
      {
        label: "Data Engineering",
        description: "Clean, connected pipelines from every source system you run.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#solutions",
      },
      {
        label: "AI-Ready Analytics",
        description: "Predictive models and automation layered on a solid data foundation.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "#solutions",
      },
      {
        label: "Decision Intelligence",
        description: "Turning reporting into recommendations your teams can act on.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#solutions",
      },
    ],
  },

  dataStory: {
    title: "Your Data Has a Story. We Help You Understand It.",
    description:
      "Raw records don't drive decisions on their own. We connect, clean and model your data so it becomes something your business can actually act on.",
    steps: ["Raw Data", "Connected Data", "Intelligence", "Decisions", "Growth"],
  },

  capabilities: {
    title: "Core Analytics Capabilities",
    description: "Four building blocks behind every dashboard, model and report we deliver.",
    items: [
      {
        label: "Data Literacy",
        description: "Give every team the confidence to read, question and act on data.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#solutions",
      },
      {
        label: "Artificial Intelligence",
        description: "Apply AI and machine learning to spot patterns humans would miss.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#solutions",
      },
      {
        label: "Data Science",
        description: "Mining, mapping, cleansing and modelling data at enterprise scale.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "#solutions",
      },
      {
        label: "Business Intelligence",
        description: "Bring analysis and visualization together into one connected view.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "#solutions",
      },
    ],
  },

  powerUp: {
    imagePosition: "right",
    title: "Power Up Business Success with Analytics",
    description:
      "Data in the digital era is more than valuable — it's decisive. Getting the full value out of it means being able to reveal what's hidden inside it and put it to work across the business, not just report on it after the fact.",
    advantagesTitle: "Built around how your business actually decides",
    advantages: [
      { icon: "boxes", title: "Data Discovery", description: "Surface the patterns hiding in your existing systems." },
      { icon: "exchange", title: "Predictive Analytics", description: "Forecast demand, risk and revenue ahead of time." },
      { icon: "shield", title: "AI Insights", description: "Machine learning models tuned to your business context." },
      { icon: "industry", title: "Real-Time BI", description: "Dashboards that update as the business moves." },
      { icon: "store", title: "Self-Service Analytics", description: "Let teams explore data without waiting on IT." },
      { icon: "car", title: "Data Visualisation", description: "Turn dense reporting into something instantly readable." },
    ],
    buttons: [
      { label: "Let's Talk", href: "#contact", variant: "primary" },
      { label: "Request A Demo", href: "#contact", variant: "outline" },
    ],
    image: "/assets/image2/man-drone-fly.png",
    imageAlt: "Analyst reviewing business data",
  },

  journey: {
    title: "From Raw Data to Confident Decisions",
    description: "Our analytics engagements move through three connected stages.",
    stages: [
      {
        id: "discover",
        label: "Discover",
        title: "Discover",
        description:
          "Start by finding the value hiding in legacy systems and scattered spreadsheets — before anything is visualized, it has to be connected and trusted.",
        items: ["Data Integration", "Data Cleansing", "Data Visualization"],
      },
      {
        id: "decide",
        label: "Decide",
        title: "Decide",
        description: "Turn connected data into dashboards and forecasts your teams can actually act on day to day.",
        items: ["BI Dashboards", "Predictive Analytics", "Decision Intelligence"],
      },
      {
        id: "transform",
        label: "Transform",
        title: "Transform",
        description: "Move from reporting on the business to automating and continuously improving it.",
        items: ["AI Automation", "Data Governance", "Continuous Optimisation"],
      },
    ],
  },

  authority: {
    title: "Data-Driven Decision Making, Made Intelligent",
    description:
      "Ayushman Solutions combines business intelligence and data engineering under one roof, so your dashboards, models and reporting stay connected instead of scattered across tools.",
    buttons: [{ label: "Let's Talk", href: "#contact", variant: "primary" }],
    stats: [
      { icon: "chart", label: "Analytics Expertise" },
      { icon: "cloud", label: "Scalable Architecture" },
      { icon: "handshake", label: "Business-Focused Insights" },
      { icon: "puzzle", label: "End-to-End Delivery" },
    ],
  },

  // Section 08-12 — alternating solution blocks. Anchors (#bi-services,
  // #tableau, #power-bi, #automation, #data-science) match the hrefs
  // components/Whatwedo.jsx's "Data Analytics" mega-menu column now points at.
  solutions: {
    title: "Analytics Intelligence Built Around Your Business",
    description: "One connected practice across BI consulting, platform delivery and data science.",
    biServices: {
      id: "bi-services",
      imagePosition: "left",
      title: "BI Consulting, Delivery & Managed Services",
      titleAccent: "End-to-end analytics, not just dashboards",
      description:
        "Beyond building dashboards, we help you define the right BI strategy, design intuitive reporting, and keep it running — from initial roadmap through day-two monitoring and data security.",
      bullets: [
        { label: "BI Consulting", text: "Define an effective BI strategy and roadmap." },
        { label: "BI Development", text: "Design simple, intuitive dashboards people actually use." },
        { label: "BI Managed Services", text: "Ongoing dashboard monitoring and data security." },
        { label: "BI Training", text: "Teach your teams the core analytics concepts behind the tools." },
      ],
      button: { label: "Explore BI Services", href: "#contact" },
      image: "/assets/image2/SAP-Services-1.png",
      imageAlt: "Business intelligence dashboard illustration",
    },
    tableau: {
      id: "tableau",
      imagePosition: "left",
      title: "Enterprise Analytics with Tableau",
      description:
        "Tableau turns dense, disconnected reporting into visual analysis your whole business can read at a glance — from first implementation through licensing built around how your teams grow.",
      bullets: ["Tableau Implementation — advanced analytics software installation.", "Tableau License — products and pricing for teams and enterprise."],
      button: { label: "Explore Tableau", href: "#contact" },
      image: "/assets/image2/solution-products-img-1.webp",
      imageAlt: "Tableau-style analytics dashboard",
    },
    powerBi: {
      id: "power-bi",
      imagePosition: "right",
      title: "Transform Business Data with Microsoft Power BI",
      description:
        "Power BI brings your data, dashboards and reporting into one Microsoft-native workspace — built-in AI features, immersive dashboards and Excel integration your finance and ops teams already know.",
      bullets: ["Cloud-native BI with built-in AI features", "Immersive dashboards with native Excel integration", "Scales from a single team to the whole enterprise"],
      button: { label: "Explore Power BI", href: "#contact" },
      image: "/assets/image2/solution-products-img-2.webp",
      imageAlt: "Power BI-style dashboard on a laptop",
    },
    automation: {
      id: "automation",
      imagePosition: "left",
      title: "Automate Analytics Workflows with Alteryx",
      description:
        "Alteryx automates the unglamorous parts of analytics — data prep, blending and repetitive reporting — so your team spends time on decisions, not spreadsheets.",
      bullets: ["Automated data preparation and blending", "Repeatable, auditable analytics workflows", "Faster turnaround from request to report"],
      button: { label: "Explore Alteryx", href: "#contact" },
      image: "/assets/image2/drone-flyer-actual.png",
      imageAlt: "Automated data workflow illustration",
    },
    dataScience: {
      id: "data-science",
      imagePosition: "right",
      title: "Data Science & Data Governance Consulting",
      description:
        "Map out your business, systems and data architecture to find insights that hold up — backed by governance that keeps that data quality and compliance intact as you scale.",
      bullets: ["Machine learning and predictive models", "Data quality, architecture and governance", "Cloud BI on AWS QuickSight for lightweight, low-cost rollouts"],
      button: { label: "Talk to a Data Consultant", href: "#contact" },
      image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
      imageAlt: "Data governance and consulting session",
    },
  },

  // Reused verbatim from data/sap/sapSolutions.js / sapHub.js / erpSoftwareHyderabad.js's
  // own ClientsSection — the same real, already-approved company-wide client
  // wall and "1800+ businesses / 21+ industries" figure used across every
  // practice, not an analytics-specific number invented for this page.
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
      { name: "BharatPe", logo: "/assets/image2/bharatpe.png" },
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      { name: "Kimberly-Clark", logo: "/assets/image2/kimberly-clark.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      { name: "Aditya Birla Group", logo: "/assets/image2/aditya-nbirla-group.webp" },
      "DealShare",
      "Inshorts",
    ],
  },

  industries: {
    title: "Analytics Built for Every Industry",
    description: "The same connected analytics practice, tuned to how each industry actually runs.",
    items: [
      {
        label: "Manufacturing",
        description: "Production, quality and supply-chain analytics in one view.",
        image: "/assets/image2/city-05.webp",
        href: "/industries",
      },
      {
        label: "Pharma & Healthcare",
        description: "Compliance-ready reporting across plants and distributors.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "/industries",
      },
      {
        label: "Retail & Trading",
        description: "Demand forecasting and inventory intelligence at scale.",
        image: "/assets/image2/city-06.webp",
        href: "/industries",
      },
      {
        label: "Professional Services",
        description: "Utilization, project and revenue dashboards in real time.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "/industries",
      },
    ],
  },

  benefits: {
    title: "Why Businesses Choose Ayushman Solutions for Analytics",
    description: "Six reasons data-forward teams build their analytics practice with us.",
    features: [
      { icon: "chart", title: "Faster Decision-Making", description: "Cut the time between a question and an answer your team trusts." },
      { icon: "database", title: "Connected Data", description: "One dependable source of truth instead of scattered spreadsheets." },
      { icon: "robot", title: "AI-Powered Insights", description: "Predictive models layered on top of solid, governed data." },
      { icon: "layers", title: "Scalable Analytics", description: "Architecture that grows with your data volume, not against it." },
      { icon: "dashboard", title: "User-Friendly Dashboards", description: "Reporting built for the people using it, not just IT." },
      { icon: "shieldCheck", title: "Secure Data Architecture", description: "Role-based access and governance on every dataset." },
    ],
  },

  // Illustrative, industry-framed outcomes rather than claims attributed to
  // specific named individuals — this page's own content, not reused from
  // any other page's client attributions.
  caseStudies: {
    title: "Analytics That Creates Measurable Business Impact",
    description: "A look at how connected analytics changes day-to-day decision-making.",
    action: { label: "Learn More", href: "#contact" },
    items: [
      {
        bannerColor: "linear-gradient(135deg, var(--color-neutral) 0%, var(--color-primary-darker) 100%)",
        eyebrow: "Case Study",
        headline: "Renewable Energy Asset Manager Modernizes Portfolio Reporting",
        title: "A Multi-Billion Dollar Renewable Portfolio Aces Data Analytics with Tableau",
        industry: "Renewable Energy",
        revenue: "—",
        employees: "1000+",
        location: "India",
        href: "#contact",
      },
      {
        bannerColor: "linear-gradient(135deg, var(--color-primary-darker) 0%, var(--color-neutral-light) 100%)",
        eyebrow: "Case Study",
        headline: "Skincare Manufacturer Connects Sales & Production Data",
        title: "Fixing Fragmented Reporting: A Skincare Manufacturer's BI Turnaround",
        industry: "Skincare Manufacturing",
        revenue: "100 Cr+",
        employees: "—",
        location: "Gurugram, Haryana, India",
        href: "#contact",
      },
      {
        bannerColor: "linear-gradient(135deg, var(--color-neutral-dark) 0%, var(--color-primary-dark) 100%)",
        eyebrow: "Case Study",
        headline: "Publishing Platform Automates Editorial & Revenue Reporting",
        title: "From Manual Reports to Real-Time BI: A Digital Publisher's Analytics Journey",
        industry: "News & Publishing",
        revenue: "180 Cr+",
        employees: "700+",
        location: "India",
        href: "#contact",
      },
    ],
  },

  // Generic role/company-type attribution rather than reusing named
  // individuals whose existing quotes (in data/sap/*.js) are specifically
  // about SAP work, to avoid misattributing them to a different practice.
  testimonials: {
    title: "What Our Clients Say",
    description: "See what teams say after putting Ayushman Solutions' analytics practice to work.",
    action: { label: "Know More", href: "#contact" },
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "IT Director",
        designation: "Manufacturing Client",
        company: "Ayushman Solutions Analytics",
        background: "linear-gradient(135deg, var(--color-neutral) 0%, var(--color-primary-darker) 100%)",
        videoUrl: "#",
      },
      {
        name: "Head of Finance",
        designation: "Renewable Energy Client",
        company: "Ayushman Solutions Analytics",
        background: "linear-gradient(135deg, var(--color-neutral-darker) 0%, var(--color-neutral) 100%)",
        videoUrl: "#",
      },
      {
        name: "Operations Lead",
        designation: "Retail Client",
        company: "Ayushman Solutions Analytics",
        background: "linear-gradient(135deg, var(--color-neutral-darkest) 0%, var(--color-primary-dark) 100%)",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote:
          "We went from waiting days for a report to watching the dashboard update in real time. That alone changed how our leadership team makes decisions.",
        name: "IT Director",
        designation: "Manufacturing Client",
      },
      {
        quote: "The BI rollout was built around how our finance team actually works, not a generic template — adoption was immediate.",
        name: "Head of Finance",
        designation: "Renewable Energy Client",
      },
      {
        quote: "Our data was scattered across four systems before this. Now it's one connected view, and everyone trusts the same numbers.",
        name: "Operations Lead",
        designation: "Retail Client",
      },
    ],
  },

  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "24 Jul 2025",
        title: "Mid-Year Wake-Up Call: Top 5 BI Trends Ayushman Solutions Is Tracking for 2025",
        source: "AYUSHMAN INSIGHTS",
        background: "var(--color-neutral-darkest)",
        href: "#",
      },
      {
        date: "21 May 2025",
        title: "Decision Intelligence 2.0: How Agentic AI Is Reshaping Business Analytics",
        source: "AYUSHMAN INSIGHTS",
        background: "var(--color-primary-darker)",
        href: "#",
      },
      {
        date: "31 Mar 2025",
        title: "AI Meets BI: Why the Two Are Becoming One Analytics Practice",
        source: "AYUSHMAN INSIGHTS",
        background: "var(--color-neutral-dark)",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "09 May 2025",
        title: "Are Your BI Dashboards Actually Being Used?",
        description: "Dashboard adoption fails for predictable reasons — here's how to design around them from day one.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        date: "07 Apr 2025",
        title: "Tableau vs. Power BI: Choosing the Right Platform for Your Team",
        description: "Both are excellent — the right choice depends on your existing stack and how your teams already work.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "10 Mar 2025",
        title: "What Data Governance Actually Looks Like in Practice",
        description: "Governance isn't a policy document — it's the difference between a dashboard people trust and one they don't.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Build a Smarter Business with Data & AI",
    description:
      "Bring your data, dashboards, analytics and AI initiatives together with an analytics strategy designed around your business goals.",
    button: { label: "Let's Talk", href: "#contact", variant: "primary" },
    // TODO: no dedicated analytics photography exists yet — reusing an
    // already-established generic mood banner (same convention as
    // sapSolutions.js's own CTA section).
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is business analytics?",
        answer:
          "Business analytics is the practice of examining data to find patterns, measure performance and guide decisions — combining reporting, statistical analysis and increasingly AI/ML to turn raw data into recommendations a business can act on.",
      },
      {
        question: "How can business analytics improve decision-making?",
        answer:
          "By replacing guesswork with evidence: real-time dashboards surface what's happening now, predictive models forecast what's likely next, and consistent reporting means every team is working from the same numbers instead of conflicting spreadsheets.",
      },
      {
        question: "What is the difference between Business Intelligence and Data Analytics?",
        answer:
          "Business Intelligence focuses on reporting what has already happened — dashboards, KPIs, historical trends. Data Analytics goes further, using statistical and predictive methods to explain why it happened and what's likely to happen next. In practice, most modern analytics programs blend both.",
      },
      {
        question: "How do Power BI and Tableau support business analytics?",
        answer:
          "Both are enterprise-grade visualization platforms that connect to your existing data sources and turn them into interactive dashboards. Power BI leans into Microsoft/Excel-native workflows, while Tableau is known for flexible, exploratory visual analysis — we help you choose and implement the one that fits your stack.",
      },
      {
        question: "What business challenges can analytics solve?",
        answer:
          "Common examples include slow or unreliable reporting, data scattered across disconnected systems, inventory and demand forecasting, financial planning accuracy, and a lack of visibility into day-to-day operations across teams or locations.",
      },
      {
        question: "Can analytics solutions integrate with existing ERP and CRM systems?",
        answer:
          "Yes. Our analytics practice is built to connect directly to the ERP, CRM and other business systems you already run — including SAP Business One and SAP S/4HANA Cloud — so reporting reflects live operational data rather than manual exports.",
      },
      {
        question: "How can AI improve business analytics?",
        answer:
          "AI adds predictive and prescriptive capability on top of standard reporting — forecasting outcomes, flagging anomalies automatically, and increasingly recommending (or taking) next-best actions rather than just presenting historical charts.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Turn Your Data Into Your Next Competitive Advantage",
    description: "Talk to our analytics team about where your data can take your business next.",
    theme: "light",
    background: "linear-gradient(120deg, var(--color-neutral) 0%, var(--color-primary-darker) 100%)",
    buttons: [
      { label: "Start A Conversation", href: "#contact", variant: "outlineLight" },
      { label: "Contact Us", href: "#contact", variant: "primary" },
    ],
  },
};
