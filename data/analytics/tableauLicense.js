// Content for /analytics/tableau-license. Follows the exact same
// architecture as data/analytics/tableauImplementation.js and
// data/analytics/dataVisualization.js: a single flat exported object, one
// key per section, consumed by components/Analytics-pages/TableauLicense.jsx.
// Every section reuses an existing Sap/* component — no new components were
// introduced for this page. Clients, testimonials, blogs and the closing
// CTA/contact bar are reused verbatim from their existing sources rather
// than re-authored, per the same "no duplicate content" convention already
// established across the analytics data files.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const tableauLicense = {
  // TODO: no dedicated Tableau License photography exists in the project yet
  // — reusing the same BI dashboard banner already established across every
  // sibling analytics page (biConsulting, biDevelopment, biTraining,
  // tableauImplementation) instead of sourcing a new hero image.
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "right",
    title: "Tableau License Cost",
    button: { label: "Get Tableau Pricing", href: "#pricing" },
  },

  // Tableau Pricing — rendered via BenefitsSection's existing Slider +
  // FeatureCard combo, same pricing pattern already established by
  // dataVisualization.js's own `pricing` block and tableauImplementation.js's
  // own `pricing` block (FeatureCard's `variant === "pricing"` style hook).
  // The two CTAs below the cards reuse BenefitsSection's own `buttons` prop
  // (see BiManagedServices/TableauImplementation "advantagesDetail" usage of
  // the equivalent `button` on ImageTextSection for the same pattern).
  pricing: {
    id: "pricing",
    title: "Tableau Pricing",
    description: "Choose the right mix Tableau license types to meet the unique needs of your organization",
    items: [
      {
        title: "Tableau Creator",
        description:
          "Every deployment requires at least one Creator. Powerful Suite that supports end-to-end analytics workflow & provides business insights. Includes: Tableau Desktop, Tableau Prep Builder, and one Creator license of Tableau Server.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Tableau Explorer",
        description:
          "Every deployment requires at least one Explorer. Full self-service analytics pack that lets you explore trusted data & answer your questions faster. Includes: One Explorer license of Tableau Server.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
      {
        title: "Tableau Viewer",
        description:
          "Every deployment requires at least one Viewer. Ease to use & secure visualization platform that lets you view & interact with dashboard. Includes: One Viewer license of Tableau Server.",
        action: { label: "Contact Us For Pricing", href: "#contact", variant: "primary" },
        variant: "pricing",
      },
    ],
    buttons: [
      { label: "Know More", href: "#contact", variant: "primary" },
      { label: "Tableau Implementation", href: "/analytics/tableau-implementation", variant: "outline" },
    ],
  },

  // "Buy Tableau License from Ayushman Solutions" — content left / image
  // right, reusing "drone-flyer-actual.png" the same achievement-themed way
  // dataVisualization.js's `overview` and tableauImplementation.js's
  // `industryFit` sections already do.
  // NOTE: assets/image2/awards.webp was tried here but is a real photo of
  // physical trophy plaques engraved "Uneecops Technologies Ltd." / "Uneecops
  // Business Solutions" (a different, unrelated company) — using it next to
  // Ayushman Solutions copy would misrepresent whose awards they are, so it
  // must not be reused anywhere on this site.
  partner: {
    imagePosition: "right",
    title: "Buy Tableau License from Ayushman Solutions - Trusted by 100+ Leading Brands",
    description:
      "As a Tableau Gold Partner, Ayushman Solutions has built strong expertise in Business Intelligence and Analytics. Our certified Tableau consultants help organizations choose the ideal licensing model, maximize their Tableau investment, accelerate deployment and empower teams with data-driven decision making.",
    buttons: [
      { label: "Explore Analytics", href: "/analytics", variant: "primary" },
      { label: "Schedule a Call", href: "#contact", variant: "outline" },
    ],
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Consultant guiding an enterprise Tableau licensing engagement",
  },

  // Dark, full-bleed icon-quote grid — same gradient + theme="light" combo
  // already established for tableauImplementation.js's own dark
  // `expertGuidance` CenteredSection and biManagedServices.js's own dark
  // `benefits` CenteredSection, paired with StatsGrid's theme="light" (white
  // iconCircle) variant. Each StatCard's `label` carries the title and
  // supporting sentence as one flowing sentence, same convention already
  // used by biDashboard.js's own `glance` items (no separate title field on
  // StatCard).
  benefits: {
    title: "Tableau Benefits",
    description: "Tableau comes power-packed with an array of features to meet all your BI needs of your organization",
    background: "linear-gradient(120deg, var(--color-neutral-darker) 0%, var(--color-neutral) 100%)",
    items: [
      {
        icon: "chart",
        label: "Quick Analytics — Connect & visualize data at 10 to 100x faster than any other existing tool & gain access to insights.",
      },
      {
        icon: "cloud",
        label: "Any Data, Any Type — Explore any data in any format from excel sheets to databases to Hadoop to cloud services.",
      },
      {
        icon: "rocket",
        label: "Auto Updates — Get access to fresh data using a live connection to your database or schedule automatic updates.",
      },
      {
        icon: "lightbulb",
        label: "Ease to Use — Intuitive drag & drop methodology to analyse data. No programming knowledge required.",
      },
      {
        icon: "puzzle",
        label: "Smart Dashboards — Get rich data insights with the help of visualization using powerful dashboards.",
      },
      {
        icon: "handshake",
        label: "Share Instantly — Publish dashboards & share live updates on web & mobile in just a few clicks.",
      },
    ],
    buttons: [
      { label: "Let's Talk", href: "#contact", variant: "primary" },
      { label: "Analytics Services", href: "/analytics", variant: "outlineLight" },
    ],
  },

  // Tableau License Detail — three alternating ImageTextSection blocks, same
  // pattern already established by tableauImplementation.js's own
  // `advantagesDetail` section and dataVisualization.js's own
  // `mobileBiDetail` section.
  creatorLicense: {
    imagePosition: "left",
    title: "Tableau Creator License",
    description: [
      {
        bold: true,
        text: "Who is it for? Creator licenses are designed for professionals responsible for preparing data, creating dashboards, building reports and publishing analytics content for their organizations.",
      },
      {
        bold: true,
        text: "What can they do? Creators can clean data, build advanced visualizations, prepare datasets, create dashboards, publish reports and manage Tableau content efficiently.",
      },
    ],
    button: { label: "Request Demo", href: "#contact" },
    image: "/assets/image2/bi-dashboard-service-01.webp",
    imageAlt: "Analyst building a Tableau dashboard as a Creator license holder",
  },

  explorerLicense: {
    imagePosition: "right",
    title: "Tableau Explorer License",
    description: [
      {
        bold: true,
        text: "Who is it for? Explorer licenses are ideal for business users who want to perform deeper analysis using trusted data without creating data sources from scratch.",
      },
      {
        bold: true,
        text: "What can they do? Explorers can build workbooks from published data sources, interact with dashboards, answer business questions and generate valuable insights independently.",
      },
    ],
    button: { label: "Request Demo", href: "#contact" },
    image: "/assets/image2/man-drone-fly.png",
    imageAlt: "Business user exploring a published Tableau data source",
  },

  viewerLicense: {
    imagePosition: "left",
    title: "Tableau Viewer License",
    description: [
      {
        bold: true,
        text: "Who is it for? Viewer licenses are intended for business users who consume reports and dashboards to make informed decisions.",
      },
      {
        bold: true,
        text: "What can they do? Viewers can securely access dashboards, monitor KPIs, collaborate with teams and stay informed through interactive reports.",
      },
    ],
    button: { label: "Request Demo", href: "#contact" },
    image: "/assets/image2/bi-dashboard-service-02.webp",
    imageAlt: "Business manager reviewing dashboards with Viewer license access",
  },

  // Enterprise Statistics — reuses the exact same Statistics component
  // (ClientsSection) and content already established for the Data
  // Visualization page, same convention every sibling analytics page follows.
  clients: dataVisualization.clients,

  // Tableau Features — reuses the exact same FunctionalityGrid +
  // ImageOverlayCard combo already established for every sibling page's own
  // service/industry tiles.
  // TODO: no dedicated photography exists for these eight tiles yet —
  // reusing already-established generic corporate/tech imagery from across
  // the project instead, same convention as biManagedServices.js's `services`
  // and tableauImplementation.js's `services`.
  features: {
    title: "Tableau Features",
    description: "Tableau comes packed with an array of features to meet all your BI needs",
    items: [
      {
        label: "Self-Service BI",
        description:
          "No expertise required! Create and share compelling reports & interactive dashboards on your own in a matter of minutes. Easily find, monitor, explore and share actionable data insights.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
      },
      {
        label: "Data Visualization",
        description:
          "Create beautiful and insightful reports and dashboards with a simple drag-and-drop interface. Use its powerful visualization tool to unleash relevant business insights.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "#",
      },
      {
        label: "Powerful Analytics",
        description:
          "Meet the entire needs of your organization with powerful analytics. Quickly find answers to your company's most important questions anywhere, anytime.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
      },
      {
        label: "Data Source",
        description:
          "Effortlessly connect & import data from disparate data sources ranging from files, feeds, databases, cloud drives, myriad business applications & even in-house apps.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
      },
      {
        label: "Data Blending",
        description:
          "Create functional reports which are easy to comprehend and bring your data to life when you uncover new business opportunities.",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
      {
        label: "Beautiful Dashboards",
        description:
          "Create an aesthetically beautiful and intuitive dashboard with a few simple clicks and an exceptionally easy user interface. Easily format text, insert images and add widgets with a designer-friendly layout.",
        image: "/assets/image2/city-06.webp",
        href: "#",
        button: { label: "Know More", href: "#contact" },
      },
      {
        label: "Highly Secure",
        description:
          "Security is the first and most critical essential of Tableau. It helps organizations promote trusted data sources for all users to make the right decisions at the right time.",
        image: "/assets/image2/man-drone-fly.png",
        href: "#",
      },
      {
        label: "On-Cloud",
        description:
          "Get up and running in no time! Tableau is a fully hosted cloud solution which allows instant setup and is a highly scalable option for your evolving business needs.",
        image: "/assets/image2/modern-bi-dashboard-bg-1.webp",
        href: "#",
      },
    ],
  },

  // Testimonials — reused verbatim from sapManagedServices.js's own
  // TestimonialsSection content, same convention every sibling analytics
  // page follows ("do NOT redesign Testimonials... reuse the exact
  // Testimonials section").
  testimonials: sapManagedServices.testimonials,

  // Blogs — reuses the exact same BlogSection component AND blog data source
  // already established for Data Visualization / BI Managed Services /
  // Tableau Implementation.
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Final CTA — same background image, layout and component already used
  // for the Data Visualization page's own CTASection ("same background").
  cta: {
    ...dataVisualization.cta,
    title: "Can't Decide?",
    description:
      "Don't worry. Let our experts help you choose the right Tableau licensing option and demonstrate a proof of concept tailored to your business.",
    button: { label: "Request Demo", href: "#contact", variant: "primary" },
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is it expensive to buy a Tableau License?",
        answer:
          "Tableau's cost scales with the license mix you choose (Creator, Explorer, Viewer) and your deployment model, so it can be tailored to fit budgets of every size. Contact us for a quote based on your exact user mix.",
      },
      {
        question: "What would be the cost of Tableau Creator, Explorer & Viewer?",
        answer:
          "Creator licenses cost the most since they include Tableau Desktop, Prep Builder and full content-creation rights, Explorer sits in the middle for self-service analysis, and Viewer is the most affordable for dashboard consumption only. Reach out for current pricing for each tier.",
      },
      {
        question: "What is the best source to get Tableau?",
        answer:
          "Buying through a certified Tableau Gold Partner like Ayushman Solutions ensures the right licensing mix, faster deployment support, onboarding assistance and ongoing consulting alongside your purchase.",
      },
      {
        question: "How to buy a Tableau Cloud License?",
        answer:
          "Tableau Cloud (fully hosted) licenses are purchased the same way as Tableau Server licenses, based on the same Creator/Explorer/Viewer roles — talk to our team and we'll help you size and provision a cloud-based deployment.",
      },
      {
        question: "Can we use Tableau for less than 100 users?",
        answer:
          "Yes. Tableau licensing scales down to small teams as easily as it scales up to enterprises — every deployment simply needs at least one Creator license, plus Explorer or Viewer licenses for everyone else based on how they use it.",
      },
    ],
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
