// Content for /analytics/alteryx. Follows the exact same architecture as
// data/analytics/powerBi.js and data/analytics/tableauImplementation.js: a
// single flat exported object, one key per section, consumed by
// components/Analytics-pages/Alteryx.jsx. Every section reuses an existing
// Sap/* component — no new components were introduced for this page.
// Hero/hook copy is seeded from the already-approved Alteryx voice used in
// data/analytics.js's own `solutions.automation` block, not invented fresh.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const alteryx = {
  // TODO: no dedicated Alteryx photography exists in the project yet —
  // reusing the same BI dashboard banner already established across the
  // sibling analytics pages (Tableau Implementation, BI Managed Services)
  // instead of sourcing a new hero image.
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "left",
    title: "Installing Advanced Automation Capabilities With Alteryx Software Solutions",
    description:
      "Alteryx brings self-service data prep, blending and advanced analytics together in one workflow designer, so your team spends less time wrangling data and more time acting on it.",
    buttons: [
      { label: "Request For Demo", href: "#contact", variant: "primary" },
      { label: "Talk To An Expert", href: "#contact", variant: "outlineLight" },
    ],
  },

  // Alteryx Products and Pricing — rendered via BenefitsSection's existing
  // Slider + FeatureCard combo, same "product card" pattern already
  // established by powerBi.js's / dataVisualization.js's own pricing blocks
  // (FeatureCard's `variant === "pricing"` style hook). showDots={false}
  // for a 3-card set, same convention as tableauImplementation.js's own
  // 3-tier `pricing` block.
  pricing: {
    title: "Alteryx Products and Pricing Options For Your Enterprise",
    description:
      "Alteryx cost depends on the edition you choose — Alteryx Designer Cloud or Alteryx Designer Desktop. Choose a suitable edition that best meets the specific needs of your business.",
    items: [
      {
        title: "Designer Cloud",
        description: "Includes 3 packages: Starter, Professional and Enterprise — cloud-native Alteryx analytics with out-of-the-box integrations.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Designer Desktop",
        description: "For data prep, blending and analytics, with a drag-and-drop workflow designer built to speed up every analytic process.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Other Products",
        description: "Intelligence Suite, Server, Machine Learning, Auto Insights, Location and Consumer Insights — extend Alteryx across your organization.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
    ],
    buttons: [{ label: "Download Alteryx For Free", href: "#contact", variant: "primary" }],
  },

  // Intro + icon list, rendered as one ImageTextSection: the heading and
  // paragraphs sit above RichContent's `advantages` slider (Scalable
  // analytics / Repeatable workflows / Intuitive UI / Multi-source
  // processing / Alteryx implementation), all inside the same content
  // column, next to one image — same convention as dataVisualization.js's
  // own `overview` section.
  overview: {
    imagePosition: "right",
    title: "Deliver Quick, Deeper Insights With Advanced Alteryx Automation Solutions",
    description: [
      "Markets today have become highly dynamic, with better-informed consumers and increasingly stringent regulations. Serving such volatile market conditions demands an intuitive, advanced analytics solution that can maximize efficiency and deliver success.",
      "Ayushman Solutions, with Alteryx implementation, offers modular, end-to-end analytics automation solutions to accelerate the digital transformation of your business. As a Gartner-recognized data analytics platform, Alteryx is a perfect fit to deliver actionable insights and make educated decisions, regardless of market fluctuations. Experience a code-free advanced analytics platform with built-in workflows and the ability to incorporate R or Python code.",
    ],
    advantages: [
      { icon: "chart", title: "Scalable, progressive analytics", description: "Grow from a single workflow to enterprise-wide analytics without switching platforms." },
      { icon: "exchange", title: "Repeatable workflows", description: "Build once, run repeatedly — automate the reporting your team redoes every cycle." },
      { icon: "dashboard", title: "Intuitive user interface", description: "A drag-and-drop designer that puts self-service analytics in the hands of every team." },
      { icon: "database", title: "Multi-source data processing", description: "Blend and prep data from spreadsheets, databases and cloud apps in one workflow." },
      { icon: "robot", title: "Alteryx implementation", description: "End-to-end implementation support from setup through enterprise rollout." },
    ],
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Analyst building an automated Alteryx data workflow",
  },

  // "Unified Alteryx Data Analytics Solutions" — centered intro, followed by
  // three alternating ImageTextSection blocks (Analytics Cloud / Designer
  // and Add-ons / Server), matching the reference layout's own alternating
  // left-right rhythm.
  unifiedIntro: {
    title: "Unified Alteryx Data Analytics Solutions To Accelerate Decision-making",
    description:
      "Data is everyone's business. That's why our advanced Alteryx software solutions are customized to provide your business with end-to-end analytics that enhance data-driven decision-making and deliver success.",
  },

  analyticsCloud: {
    imagePosition: "left",
    title: "Alteryx Analytics Cloud",
    description: "Get valuable insights with cloud-native analytics and experience out-of-the-box integrations across your business systems.",
    bullets: ["Designer Cloud", "Auto Insights", "Machine Learning"],
    button: { label: "Let's Talk", href: "#contact" },
    image: "/assets/image2/sap-migration-01.webp",
    imageAlt: "Alteryx Analytics Cloud dashboard preview",
  },

  designerAddons: {
    imagePosition: "right",
    title: "Designer and Add-ons",
    description: "Automate every step of self-service analytics with drag-and-drop capabilities that unlock hidden insights in your data.",
    bullets: ["Designer", "Designer FIPS", "Intelligence Suite", "Location and Business Datasets"],
    button: { label: "Let's Talk", href: "#contact" },
    image: "/assets/image2/sap-migration-02.webp",
    imageAlt: "Alteryx Designer workflow builder",
  },

  alteryxServer: {
    imagePosition: "left",
    title: "Alteryx Server",
    description: "Share and govern your workflow processes to maximize the efficiency of your entire team.",
    bullets: ["Server", "Server FIPS"],
    button: { label: "Let's Talk", href: "#contact" },
    image: "/assets/image2/sap-migration-03.webp",
    imageAlt: "Alteryx Server workflow governance",
  },

  // Business Impact Statistics — same CenteredSection + StatsGrid combo
  // already established for tableauImplementation.js's own `expertGuidance`
  // and biManagedServices.js's own `benefits` sections, on a light gradient
  // background matching the reference's soft green tone (tableauImplementation's
  // own `edge` gradient). value + label pairs (CMMI / Level 5 Company,
  // Authorized / Alteryx Partner, 120+ / Clients, 100+ / Data Experts,
  // 150+ / Successful BI implementations) — the CMMI Level 5 + years-of-
  // experience credential reused here is Ayushman Solutions' own, already
  // established verbatim across data/sap/*.js.
  impact: {
    title: "Drive Impactful Outcomes With Business Intelligence and Alteryx Data Analytics Expertise",
    description:
      "Alteryx software has the capacity to handle a large volume and variety of data. Ayushman Solutions is a leading Alteryx implementation and consulting partner with a track record of delivering the most advanced self-service analytics solutions. Our experienced, skilled data scientists quickly develop well-suited solutions to help you uncover the power of your business data. As Alteryx partners, we help you customize the data analytics platform and leverage self-service analytics to its fullest!",
    items: [
      { icon: "certificate", value: "CMMI", label: "Level 5 Company" },
      { icon: "handshake", value: "Authorized", label: "Alteryx Partner" },
      { icon: "briefcase", value: "120+", label: "Clients" },
      { icon: "lightbulb", value: "100+", label: "Data Experts" },
      { icon: "rocket", value: "150+", label: "Successful BI implementations" },
    ],
    buttons: [{ label: "Let's Talk", href: "#contact", variant: "primary" }],
  },

  // Alteryx For Each Business Vertical — six named verticals, rendered via
  // the existing FunctionalityGrid + ImageOverlayCard combo, same pattern
  // as every other "industries"/"services" tile grid across this project.
  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead, same convention as biManagedServices.js's `services`.
  industries: {
    title: "Alteryx For Each Business Vertical",
    description:
      "Empower each department of your organization with invaluable self-service business intelligence insights to maximize efficiency and deliver a powerful impact.",
    items: [
      {
        label: "Supply Chain",
        description: "Automate data across your supply chain to improve resilience, accelerate operations, optimize inventory, reduce delays, and build a faster, more connected logistics network with intelligent analytics.",
        image: "/assets/image2/city-05.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Human Resources",
        description: "Transform employee information into actionable insights that improve workforce planning, increase productivity, enhance employee engagement, and support data-driven HR decisions.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Marketing",
        description: "Leverage multi-channel analytics to understand customer behavior, improve campaign performance, maximize conversions, reduce churn, and optimize marketing investments.",
        image: "/assets/image2/city-06.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Sales Analytics",
        description: "Combine CRM, sales, and operational data into a single source of truth to streamline the sales cycle, improve forecasting accuracy, and increase revenue.",
        image: "/assets/image2/service-water.webp",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Operational Analytics",
        description: "Monitor operations in real time, identify bottlenecks, improve efficiency, automate reporting, and make faster business decisions using intelligent analytics.",
        image: "/assets/image2/man-drone-fly.png",
        href: "#",
        button: { label: "Let's Talk", href: "#contact" },
      },
      {
        label: "Customer Analytics",
        description: "Build stronger customer relationships by analyzing customer journeys, preferences, purchasing behavior, and engagement across every interaction channel.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
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
  // source already established for Data Visualization / Power BI.
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
        question: "How is Alteryx used in business?",
        answer:
          "Alteryx is used to automate data preparation, blending and analysis — connecting to spreadsheets, databases and cloud sources so business teams can build repeatable analytic workflows without writing code.",
      },
      {
        question: "Is Alteryx better than Excel?",
        answer:
          "Alteryx and Excel solve different problems. Excel works well for small, manual analysis, while Alteryx automates repeatable data prep and blending at scale, handles far larger datasets, and removes the manual, error-prone steps Excel workflows depend on.",
      },
      {
        question: "Is Alteryx a good business analytics platform?",
        answer:
          "Yes. Alteryx is a Gartner-recognized, code-free analytics platform built for self-service data prep, blending and advanced analytics, with the flexibility to incorporate R or Python for teams that need it.",
      },
      {
        question: "What is the implementation process of Alteryx?",
        answer:
          "Implementation typically covers requirements analysis, data source integration, workflow design, deployment onto Designer or Server, and user training — Ayushman Solutions handles this end-to-end as an authorized Alteryx partner.",
      },
      {
        question: "How does Alteryx improve business decision making?",
        answer:
          "By automating data prep and blending, Alteryx cuts the time between a question and a trustworthy answer, letting teams act on repeatable, auditable analytics instead of waiting on manual reporting cycles.",
      },
    ],
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
