// Content for /analytics/data-visualization. Follows the exact same
// architecture as every SAP sub-page and the /analytics landing page itself
// (data/analytics.js): a single flat exported object, one key per section,
// consumed by components/Analytics-pages/DataVisualization.jsx. Every
// section reuses an existing Sap/* component — no new components were
// introduced for this page.

export const dataVisualization = {
  // TODO: no dedicated data-visualization photography exists in the project
  // yet — reusing an already-established wide/high-res banner asset (same
  // convention as every SAP hero) instead of the previous city-06.webp,
  // which is only 400x477 and was being stretched full-bleed across the
  // entire viewport width, causing visible blur; it's also already used
  // lower down this same page as the "Manufacturing" industry tile.
  hero: {
    backgroundImage: "/assets/image2/modern-sap-migration.webp",
    align: "left",
    title: "Data Visualization Services that Unlock a Steady Stream of Insights",
    button: { label: "Request A Demo", href: "#contact" },
  },

  // Tableau plans — rendered via BenefitsSection's existing Slider +
  // FeatureCard combo. FeatureCard already has a `variant === "pricing"`
  // style hook (components/Sap/Cards/FeatureCard.jsx / .module.css), so no
  // new pricing-card component was needed — each item just sets
  // `variant: "pricing"` and an `action` button, exactly like every other
  // FeatureCard consumer.
  pricing: {
    title: "Tableau Plans",
    items: [
      {
        title: "Creator",
        description:
          "Every deployment requires at least one Creator. A powerful suite that supports the end-to-end analytics workflow and provides business insights. Includes: Tableau Desktop, Tableau Prep Builder, and one Creator license of Tableau Server.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Explorer",
        description:
          "Every deployment requires at least one Explorer. A full self-service analytics pack that lets you explore trusted data and answer your questions faster. Includes: one Explorer license of Tableau Server.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Viewer",
        description:
          "Every deployment requires at least one Viewer. An easy-to-use, secure visualization platform that lets you view and interact with dashboards. Includes: one Viewer license of Tableau Server.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
    ],
  },

  // Intro + the four-step process, rendered as one ImageTextSection: the
  // title/description sit above RichContent's `advantages` slider
  // (Analyze Processes / Create Story / Design Visualization / Training and
  // Go-live), all inside the same content column, next to one tall image —
  // matching the reference layout without a second section.
  overview: {
    imagePosition: "right",
    title: "Data Visualization Software Solutions to Help Businesses See Through Their Data",
    description: [
      "With more data available from disparate sources and streams, businesses need a better way to synthesize meaning from it. Telling a story with interactive charts, heat maps, histograms, cartograms, scatter plots and infographics can be a competitive differentiator — it quickly guides business leaders to identify and mitigate risks as well as uncover valuable opportunities at a glance.",
      "Our BI development experts understand that human minds process and grasp visual information more easily than rows in a report. As a data visualization partner, we help fast-growing organizations convey complex concepts and identify new patterns in their data — presenting the story in a \"short-attention-span\" world, in the simplest way possible.",
    ],
    advantagesTitle: "Here's How We Make It Happen",
    advantages: [
      {
        icon: "chart",
        title: "Analyze Processes",
        description: "Our data visualization experts start by analyzing business processes and interviewing leaders to understand goals and performance.",
      },
      {
        icon: "puzzle",
        title: "Create Story",
        description: "During the creation process, our team uses robust visualization techniques and experience to reflect the true enterprise story.",
      },
      {
        icon: "dashboard",
        title: "Design Visualization",
        description: "Our data visualization team understands the importance of user design, which is critical to achieving stunning, usable visuals.",
      },
      {
        icon: "handshake",
        title: "Training and Go-live",
        description: "Experts provide formal training so your team can simplify and synthesize complex data through dynamic, descriptive visualizations.",
      },
    ],
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Analyst exploring a data visualization dashboard",
  },

  mobileBiIntro: {
    title: "Take Your Data Anywhere and Unlock Insights On-the-Go With Mobile BI Dashboard Services",
    description:
      "Being able to gain critical business insights on the go is key to making better decisions. Our data visualization services help business users gain a complete, 360-degree view of the organization at their fingertips with Mobile BI functionality.",
    buttons: [{ label: "Know More", href: "#contact", variant: "primary" }],
  },

  mobileBiDetail: {
    imagePosition: "left",
    title: "Witness On-the-Go Tableau Data Visualization With Ayushman Solutions",
    description:
      "Optimized for touch, our Tableau data visualization experts help you select, filter, zoom, scroll and drill down with a tap of a finger.",
    checklist: [
      "One-click storytelling and automated discovery",
      "Make more informed, faster decisions wherever you are",
      "Gain access to data whether or not you're connected to your network",
      "Tableau data visualization solutions optimized for whatever device you're using",
    ],
    button: { label: "Explore Services", href: "#contact" },
    image: "/assets/image2/man-drone-fly.png",
    imageAlt: "Colleagues reviewing Tableau data visualization on a mobile device",
  },

  // Business Transformation Statistics — reuses the exact same real,
  // already-established cross-practice "1800+ businesses / 21+ industries"
  // figure and client wall used verbatim in data/analytics.js, data/sap/
  // sapSolutions.js, sapHub.js and erpSoftwareHyderabad.js's own
  // ClientsSection, rather than inventing a page-specific number.
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

  // Industry Vertical — six named verticals, real copy as supplied for this
  // page, rendered via the existing FunctionalityGrid + ImageOverlayCard
  // combo (components/Sap/sections/FunctionalityGrid.jsx), same pattern as
  // every other "industries" tile grid across this project — no new card
  // component.
  industryVertical: {
    title: "Data Visualization Services for Every Industry Vertical",
    description:
      "The journey to visualize your data with Alteryx, Power BI or Tableau dashboards is worth exploring by every entity in every industry that seeks to achieve deeper, faster and meaningful insights that can strengthen decision-making. As a data visualization partner, we help 21+ industry verticals transform the way they use data to solve their unique business hurdles and gain actionable insights.",
    items: [
      {
        label: "Retail",
        description:
          "Tableau data visualization solutions help our retail clients understand customer buying behaviour, perform purchase analysis, identify unique visitors, analyse products sold, average abandoned cart value, average sales value, conversion rates and customer insights.",
        image: "/assets/image2/city-05.webp",
        href: "/industries/retail",
      },
      {
        label: "Manufacturing",
        description:
          "Leading manufacturing firms use analytics to perform production analysis, identify root causes, forecast sales, analyse opportunities, monitor inventory levels, supplier quality, open orders and gain real-time operational visibility.",
        image: "/assets/image2/city-06.webp",
        href: "/industries/manufacturing-and-production",
      },
      {
        label: "Pharma",
        description:
          "Gain real-time visibility over stock, improve vendor collaboration, optimise manufacturing and distribution, analyse root causes, monitor expiry, improve quality and accelerate decision making.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "/industries/healthcare-pharma",
      },
      {
        label: "Banking",
        description:
          "Banks can analyse profitability, branch performance, loan portfolio, sales performance, risk analysis, spatial analysis, delinquency trends, forecasting and customer insights.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "/industries/banking-financial-services-and-insurance-bfsi",
      },
      {
        label: "High-Tech",
        description:
          "Technology companies can analyse huge datasets, monitor product performance, perform ad-hoc analysis, improve product planning, optimise departmental KPIs and discover hidden insights.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "/industries/high-tech-and-electronics",
      },
      {
        label: "Food & Beverage",
        description:
          "Predict demand spikes, reduce waste, monitor inventory, optimise supply chain, identify store issues, improve customer loyalty and make profitable decisions using Tableau, Power BI and Alteryx.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "/industries/fb-consumer-products",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "02 Sep 2025",
        title: "The Smart Combo: BI and IoT for Next-Gen Operations",
        description: "When combined, IoT and business intelligence can improve business operations and unlock insights standard reporting misses.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
      {
        date: "08 Aug 2025",
        title: "Old-School to Future-Proof: How Business Analytics Has Evolved",
        description: "Business analytics is not a new idea — here's how it has changed, and what that means for how you should invest in it today.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "26 Feb 2025",
        title: "Tableau Demo Dashboard: Exploring Features and Cost Benefits",
        description: "Business leaders increasingly use data to make strategic decisions — here's what a real Tableau dashboard can show you.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        date: "25 Dec 2024",
        title: "Best Business Intelligence Tools Comparison for 2025",
        description: "Navigating the vast landscape of BI tools can be overwhelming — a practical comparison to help you choose with confidence.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "18 Dec 2024",
        title: "Step Into a New Era of Generative AI for Analytics",
        description: "Where insights converse with you — conversational analytics, KPI monitoring, forecasting and more, powered by generative AI.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "#",
      },
      {
        date: "16 Dec 2024",
        title: "What Is Your Enterprise Analytics Fitness Level?",
        description: "Every organization strives for peak performance — here's how to benchmark where your analytics maturity actually stands.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "#",
      },
    ],
  },

  // Case studies reuse the exact same analytics-practice content already
  // established in data/analytics.js's own `caseStudies` block (same
  // component, same shape) rather than inventing new attributions for this
  // sub-page.
  caseStudies: {
    title: "Case Studies",
    action: { label: "Learn More", href: "#" },
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
        href: "#",
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
        href: "#",
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
        href: "#",
      },
    ],
  },

  cta: {
    title: "Find the Story Hidden in Your Data With Our Data Visualization Software",
    description: "Let's show you how.",
    button: { label: "Request Demo", href: "#contact", variant: "primary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Data Visualization: Frequently Asked Questions",
    items: [
      {
        question: "What is Data Visualization in Tableau?",
        answer:
          "Data visualization in Tableau is the practice of turning raw data into interactive charts, maps, and dashboards — letting business users explore trends and outliers visually instead of reading rows of a spreadsheet.",
      },
      {
        question: "Why use Tableau for data visualization?",
        answer:
          "Tableau is built specifically for fast, exploratory visual analysis — connecting directly to your existing data sources and letting you build interactive dashboards without writing code, with strong support for large, complex datasets.",
      },
      {
        question: "What are the main goals of data visualization?",
        answer:
          "The main goals are to make patterns and outliers immediately obvious, speed up decision-making, make dense data accessible to non-technical stakeholders, and replace static reports with dashboards people actually explore.",
      },
      {
        question: "Why is data visualization important in data analytics?",
        answer:
          "Analysis is only useful if people act on it. Visualization is the layer that turns statistical and analytical output into something decision-makers can understand and trust at a glance, which is what actually drives adoption.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-dark) 100%)",
    buttons: [{ label: "Connect With Us", href: "#contact", variant: "outlineLight" }],
  },
};
