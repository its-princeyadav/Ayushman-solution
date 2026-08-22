// Content for /analytics/power-bi. Follows the exact same architecture as
// data/analytics/tableauLicense.js and data/analytics/tableauImplementation.js:
// a single flat exported object, one key per section, consumed by
// components/Analytics-pages/PowerBi.jsx. Every section reuses an existing
// Sap/* component — no new components were introduced for this page.
//
// NOTE ON SOURCING: this page's section order was modeled on a competitor's
// (Uneecops) live Power BI page, but none of that page's copy, stock
// photography or business statistics (their client logos, "CMMI Level 5" /
// "120+ Clients" / "100+ Data Experts" credentials, cyclist/tennis/gym stock
// photos) were reused here. The CMMI Level 5 + years-of-experience claim
// below is Ayushman Solutions' own, already established verbatim across
// data/sap/*.js (erpSoftwareHyderabad.js, sapBusinessOneAhmedabad.js, etc.),
// not a lift from the competitor reference. All imagery is existing project
// assets already used across the analytics/SAP pages.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const powerBi = {
  hero: {
    backgroundImage: "/assets/image2/modern-bi-dashboard-bg-1.webp",
    align: "left",
    title: "Turn Business Data Into Decisions with Microsoft Power BI",
    button: { label: "Request A Demo", href: "#contact" },
  },

  intro: {
    title: "Power BI Consulting for Teams That Are Done Waiting on Reports",
    description:
      "Power BI brings your data, dashboards and reporting into one Microsoft-native workspace. Our Power BI consultants help you connect scattered data sources, build dashboards people actually trust, and put decision-making in the hands of the teams who need it most.",
  },

  // Power BI Overview — content left / image right, reusing the same
  // Power BI dashboard photography already associated with Power BI content
  // in data/analytics.js's own `solutions.powerBi` block.
  overview: {
    imagePosition: "right",
    title: "Microsoft Power BI: One Workspace for Data, Dashboards and Reporting",
    description:
      "Power BI connects to virtually any data source — spreadsheets, databases, cloud services and line-of-business apps — and turns it into interactive dashboards your teams can explore themselves, with native Excel integration your finance and ops teams already know.",
    bullets: [
      "Cloud-native BI with built-in AI-assisted analysis",
      "Immersive dashboards with native Excel integration",
      "Scales from a single team to the whole enterprise",
    ],
    button: { label: "Explore Power BI", href: "#contact" },
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "Power BI-style dashboard on a laptop",
  },

  // Why Choose Power BI — the alternate ImageTextSection layout, same
  // checklist pattern already established by dataVisualization.js's own
  // `mobileBiDetail` section.
  whyPowerBi: {
    imagePosition: "left",
    title: "Why Businesses Choose Power BI",
    description:
      "Power BI is built for fast, exploratory visual analysis without requiring a data team on standby for every question.",
    checklist: [
      "Self-service reporting — no dependency on IT for every new report",
      "Native integration with Excel, Teams and the Microsoft 365 stack",
      "Scales cleanly from a single department to enterprise-wide rollout",
      "Live, scheduled or on-premises data refresh options",
    ],
    button: { label: "Talk To An Expert", href: "#contact" },
    image: "/assets/image2/bi-dashboard-service-01.webp",
    imageAlt: "Analyst reviewing a Power BI report on a laptop",
  },

  // Power BI Products — rendered via BenefitsSection's existing Slider +
  // FeatureCard combo, same "product card" pattern already established by
  // dataVisualization.js's / tableauLicense.js's own `pricing` blocks
  // (FeatureCard's `variant === "pricing"` style hook).
  products: {
    title: "Power BI Products We Work With",
    description: "The right Power BI product depends on how your teams need to create, consume and share reports.",
    items: [
      {
        title: "Power BI Desktop",
        description: "A free authoring tool for building reports and data models before publishing them to your team.",
        action: { label: "Request Demo", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Power BI Pro",
        description: "Per-user licensing for publishing, sharing and collaborating on reports across your organization.",
        action: { label: "Request Demo", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Power BI Premium",
        description: "Dedicated capacity for larger datasets, faster refresh rates and advanced enterprise features.",
        action: { label: "Request Demo", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Power BI Mobile",
        description: "Native iOS, Android and Windows apps for checking dashboards and getting alerts on the go.",
        action: { label: "Request Demo", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Power BI Embedded",
        description: "Embed fully interactive reports and dashboards directly into your own applications.",
        action: { label: "Request Demo", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Power BI Report Server",
        description: "An on-premises report server for organizations that need to keep reporting inside their own network.",
        action: { label: "Request Demo", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
    ],
    buttons: [
      { label: "Explore Power BI", href: "#contact", variant: "primary" },
      { label: "Talk To An Expert", href: "#contact", variant: "outline" },
    ],
  },

  // Business Growth CTA — light gradient CenteredSection with a dual CTA,
  // same gradient already established for tableauImplementation.js's own
  // `edge` section.
  growthCta: {
    title: "Ready to Put Your Data to Work with Power BI?",
    description: "From first dashboard to enterprise-wide rollout, our Power BI consultants help you get there faster.",
    buttons: [
      { label: "Let's Talk", href: "#contact", variant: "primary" },
      { label: "See How It Works", href: "#contact", variant: "outline" },
    ],
  },

  // Achievement / Statistics — reuses the exact same Statistics component
  // (ClientsSection) and content already established for the Data
  // Visualization page, same convention every sibling analytics page follows.
  clients: dataVisualization.clients,

  // Department Intelligence — reuses the exact same FunctionalityGrid +
  // ImageOverlayCard combo already established for every sibling page's own
  // service/industry tiles.
  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead, same convention as biManagedServices.js's `services`.
  departments: {
    title: "Power BI Implementation Across Every Department",
    description: "Equip each department with the analytics capabilities it actually needs.",
    items: [
      {
        label: "Finance and Accounting",
        description:
          "Power BI turns financial data into actionable insights, freeing up time for strategic analysis instead of manual reporting.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
      },
      {
        label: "Sourcing, Procurement and Purchasing",
        description:
          "Get visibility across your complete procurement process, including purchase orders, invoices, receipts and vendor payments.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "#",
      },
      {
        label: "Supply Chain and Distribution",
        description:
          "Use real-time analytics to monitor supply chain data, forecast demand and respond to disruptions faster.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
      },
      {
        label: "Operations and Inventory",
        description: "Reduce excess stock, minimize waste and meet customer demand more efficiently with live inventory dashboards.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
      },
      {
        label: "Production and Pricing",
        description: "Sharpen strategic and pricing decisions through improved financial analysis and production visibility.",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
      {
        label: "Sales and Services",
        description:
          "Spend less time digging through data and more time acting on customer insights and business trends.",
        image: "/assets/image2/city-06.webp",
        href: "#",
      },
    ],
  },

  // Industry Solutions — reused verbatim from dataVisualization.js's own
  // `industryVertical` content (same component, same shape) rather than
  // inventing new industry copy for this page.
  industries: dataVisualization.industryVertical,

  // Credibility highlight — full-bleed CTASection, same component already
  // used for the Data Visualization page's own CTASection. The CMMI Level 5
  // + years-of-experience credential reused here is Ayushman Solutions' own,
  // already established verbatim across data/sap/*.js.
  credibility: {
    title: "11+ Years of Data & BI Delivery Experience, Backed by a CMMI Level 5 Company",
    description: "Ayushman Solutions brings over a decade of business intelligence delivery experience to every Power BI engagement.",
    button: { label: "Talk To Our Experts", href: "#contact", variant: "primary" },
    backgroundImage: "/assets/image2/modern-sap-migration.webp",
    textTheme: "light",
  },

  // Testimonials — reused verbatim from sapManagedServices.js's own
  // TestimonialsSection content, same convention every sibling analytics
  // page follows.
  testimonials: sapManagedServices.testimonials,

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is Microsoft Power BI?",
        answer:
          "Power BI is Microsoft's business analytics platform — it connects to your data sources, models and transforms the data, and turns it into interactive reports and dashboards that teams can explore themselves.",
      },
      {
        question: "Why should businesses use Power BI?",
        answer:
          "Power BI replaces static, manually built reports with live, interactive dashboards, integrates natively with Excel and the Microsoft 365 stack your teams already use, and scales from a single team to the whole enterprise.",
      },
      {
        question: "What industries benefit from Power BI?",
        answer:
          "Power BI is used broadly across retail, manufacturing, pharma, banking, high-tech and food & beverage, among others — any industry that needs faster, more reliable reporting benefits from it.",
      },
      {
        question: "Can Power BI integrate with ERP and CRM systems?",
        answer:
          "Yes. Power BI connects to most major ERP and CRM systems either directly or through connectors, letting you build unified dashboards across your existing business systems.",
      },
      {
        question: "Is Power BI suitable for small businesses?",
        answer:
          "Yes. Power BI Desktop is free to use for building reports, and licensing scales up only as you need to publish, share and collaborate — making it accessible for small teams as well as large enterprises.",
      },
      {
        question: "What is the difference between Power BI Pro and Premium?",
        answer:
          "Power BI Pro is per-user licensing for publishing and sharing reports. Power BI Premium adds dedicated capacity for larger datasets, faster refresh rates and advanced enterprise features on top of that.",
      },
    ],
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
