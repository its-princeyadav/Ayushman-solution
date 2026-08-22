// Content for /analytics/amazon-quicksight. Follows the exact same
// architecture as data/analytics/alteryx.js and data/analytics/powerBi.js: a
// single flat exported object, one key per section, consumed by
// components/Analytics-pages/AmazonQuicksight.jsx. Every section reuses an
// existing Sap/* component — no new components were introduced for this
// page. The "capabilities" section composes CenteredSection (for the
// theme="light" dark-gradient heading) directly around a Slider
// (cardType="feature"), the same primitive pairing RichContent already uses
// internally for `advantages` — just applied at the page level for a
// standalone full-bleed grid instead of nested inside ImageTextSection.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const amazonQuicksight = {
  // TODO: no dedicated Amazon QuickSight photography exists in the project
  // yet — reusing the existing water-themed banner asset (already used as
  // dataVisualization.cta's background) instead of sourcing new photography.
  hero: {
    backgroundImage: "/assets/image2/service-water.webp",
    align: "left",
    title: "Amazon QuickSight BI Utility Enables SMBs to Take Smarter Data-Driven Decisions",
    description:
      "A fast, cost-effective, serverless BI service that scales with you — Amazon QuickSight turns scattered data into interactive dashboards your teams can explore themselves.",
    buttons: [
      { label: "Request A Demo", href: "#contact", variant: "primary" },
      { label: "Talk To An Expert", href: "#contact", variant: "outlineLight" },
    ],
  },

  intro: {
    title: "Decipher Data and Gain Insights for Better Business Decisions with Amazon QuickSight Consulting Partners",
    description: [
      "With digital transformation, businesses are moving from spreadsheet-based reporting to sophisticated, interactive tools. Business intelligence tools like Amazon QuickSight help enterprises analyze and visualize data and gain useful insights, even from unstructured data.",
      "Ayushman Solutions, with deep technical knowledge and proven customer success, helps SMBs drive innovation and unlock greater business value with proficiency in Amazon QuickSight. With QuickSight, we enable digital transformation and greater sustainability for SMBs using technologies like AI/ML, data and analytics.",
    ],
    buttons: [
      { label: "Request Demo", href: "#contact", variant: "primary" },
      { label: "Explore Analytics", href: "#contact", variant: "outline" },
    ],
  },

  // Intro + feature icon list, rendered as one ImageTextSection: the heading
  // and paragraphs sit above RichContent's `advantages` slider (Generative
  // BI / Embedded Analytics / Paginated Reports / QuickSight Q), all inside
  // the same content column, next to one image — same convention as
  // alteryx.js's own `overview` section.
  overview: {
    imagePosition: "right",
    title: "SMBs Can Now Effectively Implement Cloud Capabilities Using Intuitive BI Tool Amazon QuickSight",
    description: [
      "For small and medium businesses, Amazon QuickSight is a fast, cost-effective, easy and scalable cloud-powered business intelligence service that enables them to access and explore deeper insights in an interactive visual environment. With Amazon QuickSight, SMBs can narrow the field of focus and make use of the data that is most relevant to their organization.",
      "Put your data to work more efficiently with QuickSight dashboards, and partner with an experienced AWS partner like Ayushman Solutions. Our proficient data analytics experts help SMBs drive a cloud roadmap, onboard with Amazon QuickSight and optimize the setup so you can make more informed business decisions and scale up your data-driven decision-making.",
    ],
    advantages: [
      { icon: "robot", title: "Generative BI", description: "AI-powered insight generation with the same governance and security you expect from serverless QuickSight." },
      { icon: "puzzle", title: "Embedded Analytics", description: "Embed rich dashboards and interactive visualizations directly into your own applications." },
      { icon: "layers", title: "Paginated Reports", description: "Create and share highly formatted, printable reports at enterprise scale." },
      { icon: "chart", title: "QuickSight Q", description: "Ask questions in natural language and get instant, ML-powered visual answers." },
    ],
    image: "/assets/image2/bi-dashboard-service-02.webp",
    imageAlt: "Colleagues reviewing an Amazon QuickSight dashboard",
  },

  // Framework / Capability cards — dark, full-bleed gradient section. Same
  // gradient already established for tableauImplementation.js's own
  // `expertGuidance` / biManagedServices.js's own `benefits` sections
  // (CenteredSection theme="light"), paired with a Slider(cardType="feature")
  // for real icon+title+description+shadow feature cards — this page's
  // content needs a title AND a separate description per card (unlike the
  // sibling pages' single-line icon+label quotes), which only FeatureCard
  // supports, so the Slider is composed directly here instead of via
  // StatsGrid.
  capabilities: {
    title: "Create and Share Dashboards with Scalable Amazon QuickSight Framework",
    description: "Amazon QuickSight offers features like robust security, governance and global collaboration to manage your enterprise workloads using the capabilities of Generative BI, Embedded Analytics, Paginated Reports and QuickSight Q.",
    background: "linear-gradient(120deg, var(--color-neutral-darker) 0%, var(--color-neutral) 100%)",
    items: [
      {
        icon: "robot",
        title: "Generative BI Capabilities Using Amazon QuickSight",
        description: "Generate and control business insights while maintaining the governance, security and compliance benefits of serverless Amazon QuickSight.",
      },
      {
        icon: "puzzle",
        title: "Amazon QuickSight Embedded Analytics Solutions",
        description: "Deliver a seamless, data-driven user experience by embedding rich dashboards and interactive visualizations directly into any application.",
      },
      {
        icon: "layers",
        title: "Amazon QuickSight Paginated Reports",
        description: "Start creating and sharing customized, highly formatted documents with a free-flowing interface that scales with consumption-based pricing.",
      },
      {
        icon: "chart",
        title: "Amazon QuickSight Q with Visualizations",
        description: "Powered by machine learning, QuickSight Q answers your questions with relevant visualizations from a BI platform built on pretrained ML models.",
      },
    ],
  },

  // Business Intelligence Overview — light green gradient CenteredSection
  // with a dual CTA, same gradient already established for
  // tableauImplementation.js's own `edge` section.
  overviewCta: {
    title: "Incorporate BI and ML Into Your Decision-Making Process With Amazon QuickSight Consulting Partner",
    description: [
      "Our data experts know that enterprises which effectively derive critical insights from data and use them to make business decisions are far more likely to acquire customers and remain profitable than those that don't. Adopting business intelligence can feel like a daunting task, given the complexity and cost of implementing a BI platform on your own. Ayushman Solutions, as an AWS consulting and implementation partner, helps enterprises use Amazon QuickSight to quickly process and analyze data and unveil actionable insights. Our AWS visualization architects collaborate with your team to fetch better insights from intuitive, interactive dashboards.",
      "As an AWS partner in India, we have a proven track record of guiding enterprises with cloud-based consulting services. We help you implement the AWS Business Intelligence platform into your ecosystem, streamline processes and empower your workforce to unlock the true power of data. As a trustworthy Amazon QuickSight delivery partner, we help you use a robust self-service analytics platform — whatever your business use case, our AWS data engineering experts help you leverage every capability QuickSight offers.",
    ],
    buttons: [
      { label: "Analytic Services", href: "#contact", variant: "primary" },
      { label: "Let's Talk", href: "#contact", variant: "outline" },
    ],
  },

  // Industry Solutions — six named verticals, rendered via the existing
  // FunctionalityGrid + ImageOverlayCard combo, same pattern as alteryx.js's
  // own `industries` section. TODO: no dedicated photography exists for
  // these six tiles yet — reusing already-established generic corporate/
  // industrial imagery from across the project instead.
  industries: {
    title: "Amazon QuickSight for Purpose-Built Industry Services and Solutions",
    description:
      "Ayushman Solutions' industry-specific Amazon QuickSight services empower every department of your organization with a data-driven decision-making approach. Our industry-centered strategy helps businesses outwit the most complex challenges and gain faster results, blending your industry-specific needs with technology to achieve your desired business objectives.",
    items: [
      {
        label: "Consumer Packaged Goods",
        description: "Create an integrated view of consumers and unify every shopping experience using Amazon QuickSight. Gain real-time insights into purchasing behavior, improve forecasting accuracy, optimize operations, and increase organizational agility through intelligent data visualization.",
        image: "/assets/image2/city-05.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Production and Pricing",
        description: "Identify hidden trends across production and pricing data to make strategic business decisions. Amazon QuickSight helps organizations optimize manufacturing costs, improve profitability, and build accurate pricing strategies using interactive dashboards.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Supply Chain Management",
        description: "Improve supply chain visibility with real-time analytics. Detect bottlenecks, optimize inventory, enhance logistics planning, improve operational transparency, and build a faster, more resilient supply chain ecosystem.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Manufacturing",
        description: "Unlock complete industrial intelligence using Amazon QuickSight. Monitor production performance, reduce manual errors, improve quality control, optimize plant efficiency, and make faster manufacturing decisions through live operational dashboards.",
        image: "/assets/image2/city-06.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Energy, Power and Utility",
        description: "Modernize legacy utility operations with advanced dashboards and predictive analytics. Analyze energy consumption, monitor network performance, optimize resources, reduce operational costs, and accelerate digital transformation.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Sourcing, Procurement, Purchasing Inventory and Operations",
        description: "Streamline procurement, sourcing, inventory management and operational workflows using Amazon QuickSight. Reduce waste, eliminate surplus inventory, improve purchasing decisions and gain complete visibility across supply chain operations.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
    ],
  },

  // Testimonials — reused verbatim from sapManagedServices.js's own
  // TestimonialsSection content, same convention every sibling analytics
  // page follows ("Know What Our Clients Think Of Us").
  testimonials: sapManagedServices.testimonials,

  // Blogs — reuses the exact same BlogSection component AND blog data
  // source already established for Data Visualization / Power BI / Alteryx.
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Case Studies — reused verbatim from dataVisualization.js's own
  // caseStudies content, same component (StoriesSection).
  caseStudies: dataVisualization.caseStudies,

  faq: {
    title: "FAQs",
    items: [
      {
        question: "What browsers does Amazon QuickSight support?",
        answer:
          "Amazon QuickSight supports the latest versions of major browsers, including Chrome, Firefox, Safari and Edge. For the best experience, keep your browser updated to its most recent version.",
      },
      {
        question: "Can I upgrade from Standard Edition to Enterprise Edition?",
        answer:
          "Yes. You can upgrade from QuickSight Standard Edition to Enterprise Edition at any time to unlock additional features like row-level security, private VPC access and hourly data refresh.",
      },
      {
        question: "Can I use Amazon QuickSight on my mobile device?",
        answer:
          "Yes. Amazon QuickSight has native mobile apps for iOS and Android, so you can view, interact with and get alerts on your dashboards on the go.",
      },
      {
        question: "How is data transferred to Amazon QuickSight?",
        answer:
          "QuickSight connects directly to a wide range of AWS services and third-party data sources, either through live queries or by importing data into SPICE, QuickSight's in-memory calculation engine, over encrypted connections.",
      },
      {
        question: "What is SPICE in Amazon QuickSight?",
        answer:
          "SPICE (Super-fast, Parallel, In-memory Calculation Engine) is QuickSight's in-memory engine that accelerates interactive analysis on large datasets, so dashboards stay fast even as data volume grows.",
      },
      {
        question: "Does Amazon QuickSight support multi-factor authentication?",
        answer:
          "Yes. Amazon QuickSight supports multi-factor authentication through AWS Identity and Access Management (IAM) and integrates with your existing identity provider for secure single sign-on.",
      },
    ],
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
