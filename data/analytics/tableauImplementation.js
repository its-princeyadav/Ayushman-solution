// Content for /analytics/tableau-implementation. Follows the exact same
// architecture as data/analytics/dataVisualization.js and
// data/analytics/biManagedServices.js: a single flat exported object, one key
// per section, consumed by components/Analytics-pages/TableauImplementation.jsx.
// Every section reuses an existing Sap/* component — no new components were
// introduced for this page. Pricing items mirror dataVisualization.js's own
// Tableau `pricing` block (same three tiers, titles prefixed with "Tableau"
// per this page's own reference copy). Clients, testimonials, blogs, case
// studies and the closing CTA bar are reused verbatim from their existing
// sources rather than re-authored, per the same "no duplicate content"
// convention already established across the analytics/sap data files.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const tableauImplementation = {
  // TODO: no dedicated Tableau Implementation photography exists in the
  // project yet — reusing the same BI dashboard banner already established
  // across every sibling analytics page (biConsulting, biDevelopment,
  // biTraining, biDashboard) instead of sourcing a new hero image.
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "right",
    title: "Tableau Implementation: Begin Laying the Analytics Foundation",
    button: { label: "Request A Demo", href: "#contact" },
  },

  // Tableau Plans — rendered via BenefitsSection's existing Slider +
  // FeatureCard combo, same pricing pattern already established by
  // dataVisualization.js's own `pricing` block (FeatureCard's
  // `variant === "pricing"` style hook), just with "Tableau" prefixed onto
  // each tier title per this page's own reference copy.
  pricing: {
    title: "Tableau Plans",
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
          "Every deployment requires at least one Explorer. Full self-service analytics pack that lets you explore trusted data & answer your question faster. Includes: One Explorer license of Tableau Server.",
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
  },

  // "Tableau Implementation Consultant For Every Industry Vertical" — content
  // left / image right, reusing "drone-flyer-actual.png" the same way
  // dataVisualization.js's `overview` and biManagedServices.js's
  // `enterpriseFit` sections already do for this exact kind of achievement-
  // themed copy.
  industryFit: {
    imagePosition: "right",
    title: "Tableau Implementation Consultant For Every Industry Vertical, Small or Large",
    description: [
      "Tableau is the analytical power source for your fast-growing business. It delivers real-time data-driven insights, accelerates the pace of business, sparks innovation, and fosters collaboration and visibility over the entire business. However, implementing Tableau software could be challenging if the right partner is not engaged. Ayushman Solutions, as your Tableau implementation partner in India, can successfully implement Tableau in your business landscape with a high satisfaction score.",
      "As a trusted Tableau implementation company, Ayushman Solutions has delivered successful implementations across industry verticals, made smoother and more successful with a proven Tableau software implementation strategy. Our Tableau implementation consulting addresses your frequent business requirements as well as implementation challenges.",
    ],
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Tableau implementation consultant guiding an enterprise analytics rollout",
  },

  // "Ayushman Solutions is a Gold Tableau Implementation Partner" — centered
  // heading + copy + CTA, same CenteredSection pattern used stand-alone by
  // every sibling page's own "intro"/"costEffective" blocks.
  partner: {
    title: "Ayushman Solutions is a Gold Tableau Implementation Partner",
    description:
      "Ayushman Solutions, a distinguished leader in the realm of technology solutions, proudly stands as a gold Tableau implementation partner. With an unwavering commitment to excellence, we have attained this status by demonstrating exceptional expertise in deploying Tableau's cutting-edge data visualization and business intelligence solutions. As a Gold Partner, we not only showcase our deep understanding of Tableau's capabilities but also our proficiency in tailoring these solutions to meet the unique needs of diverse businesses, enabling clients to harness data-driven insights for informed decision-making and driving their success to new heights.",
    buttons: [{ label: "Connect With Us", href: "#contact", variant: "primary" }],
  },

  // Dark, full-bleed icon-quote grid — same gradient + theme="light" combo
  // already established for biManagedServices.js's own dark `benefits`
  // CenteredSection, paired with StatsGrid's theme="light" (white iconCircle)
  // variant. Each StatCard's `label` carries the quoted concern copy in place
  // of a numeric stat, which the shared card already supports (StatCard only
  // renders a `value` badge when one is passed).
  expertGuidance: {
    title: "Get Expert Guidance From Ayushman Solutions, The #1 Tableau Implementation Consultant",
    description: "Mitigate all your ongoing complexities with the best Tableau implementation partner in India",
    background: "linear-gradient(120deg, var(--color-neutral-darker) 0%, var(--color-neutral) 100%)",
    items: [
      { icon: "rocket", label: "“I want to embark on Tableau Journey but apprehensive about data integrity issues.”" },
      { icon: "chart", label: "“I am ready to make a switch from Excel to Tableau software but fear user adoption challenges.”" },
      { icon: "cloud", label: "“I want to play safe as I fear losing my enterprise data.”" },
      { icon: "puzzle", label: "“I want to implement Tableau but doubt it can meet my industry-specific requirements.”" },
    ],
    buttons: [{ label: "Talk To Experts", href: "#contact", variant: "primary" }],
  },

  advantagesIntro: {
    title: "Advantages of Tableau Implementation",
    description: "There are several benefits of getting Tableau implemented in your business, some of which include:",
  },

  // Image left / checklist right — same ImageTextSection + checklist pattern
  // already established by dataVisualization.js's own `mobileBiDetail`
  // section, immediately following its own centered intro block above.
  advantagesDetail: {
    imagePosition: "left",
    title: "Tableau Implementation",
    checklist: [
      "An automated, unified tool for data analysis",
      "A self-service BI platform – no tech expertise required!",
      "Dynamic, interactive and customizable dashboards",
      "Make forecasts, decisions, and strategies driven by data",
      "Leverage data visualization to understand complex data",
    ],
    button: { label: "Know More", href: "#contact" },
    image: "/assets/image2/bi-dashboard-service-01.webp",
    imageAlt: "Consultant presenting a Tableau implementation roadmap",
  },

  // "Our Edge" — light green gradient CenteredSection with a dual CTA, same
  // gradient already established for sapManagedServices.js's own `autoGear`
  // section.
  edge: {
    title: "Our Edge: Tableau Implementation Consulting and User Adoption",
    description:
      "Ayushman Solutions is a distinguished Tableau implementation company that operates as a seasoned Tableau service implementation partner, specializing in comprehensive consulting solutions across business intelligence, data visualization and analytics. Our Tableau implementation consulting encompasses requirements analysis, data source integration, architecture design, dashboard development, performance optimization and seamless integration with existing IT infrastructures, underpinned by a holistic understanding of data governance, security protocols and compliance standards. We are equally committed to user adoption — through methodical training programs, intuitive workshops and responsive user support, we ensure end-users derive maximal value from Tableau's capabilities and organizations experience heightened efficiency, agility and competitive advantage.",
    background: "linear-gradient(120deg, var(--color-primary-lightest) 0%, var(--sap-white) 60%)",
    buttons: [
      { label: "Request Quote", href: "#contact", variant: "primary" },
      { label: "Let's Talk", href: "#contact", variant: "outline" },
    ],
  },

  // Enterprise Statistics — reuses the exact same Statistics component
  // (ClientsSection) and content already established for the Data
  // Visualization page, same convention biManagedServices.js follows.
  clients: dataVisualization.clients,

  // Tableau Implementation Services grid, reusing the exact same
  // FunctionalityGrid + ImageOverlayCard combo already established for every
  // sibling page's own service/industry tiles.
  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead, same convention as biManagedServices.js's own `services`.
  services: {
    title: "Tableau Implementation Services",
    description: "Leverage data advantage with our leading Tableau software implementation solutions.",
    items: [
      {
        label: "Tableau Implementation Support",
        description:
          "As the best Tableau implementation partner, Ayushman Solutions offers complete Tableau implementation support. We address your complex data challenges to get you up and running quickly.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
      },
      {
        label: "Tableau Data Prep & Analytics Support",
        description:
          "Get a host of Tableau implementation services. Prep your data and integrate it with an automated data visualization platform for obtaining personalized analytics results.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "#",
      },
      {
        label: "Tableau Server & Tableau Desktop",
        description:
          "Employ the latest software version and leave your Tableau environment with our experts. As your Tableau implementation partner, we'll handle the server and desktop complexities.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
      },
      {
        label: "Tableau Dashboard Support",
        description:
          "Once you opt for Tableau implementation services, our team will help you create dashboards as per your requirements. Our experts guide you through creating beautiful, intuitive dashboards.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
      },
      {
        label: "Tableau Training",
        description:
          "Get inspired to make appealing dashboards with hands-on training by our Tableau implementation consultant. Get your analysts up to speed with our Tableau implementation consulting.",
        image: "/assets/image2/man-drone-fly.png",
        href: "#",
      },
      {
        label: "Tableau User Adoption",
        description: "Our Tableau implementation consultant can help drive user adoption to ensure you get the most out of your Tableau investment.",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
    ],
  },

  // Testimonials — reused verbatim from sapManagedServices.js's own
  // TestimonialsSection content, same convention as biManagedServices.js
  // ("Do NOT redesign Testimonials... reuse the exact Testimonials section").
  testimonials: sapManagedServices.testimonials,

  // Blogs — reuses the exact same BlogSection component AND blog data source
  // already established for Data Visualization / BI Managed Services (the
  // Tableau-relevant posts already live in this same array).
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Case Studies — reused verbatim from dataVisualization.js's own
  // caseStudies content, same component (StoriesSection), same convention as
  // biManagedServices.js.
  caseStudies: dataVisualization.caseStudies,

  // Final CTA — same background image, layout and component already used for
  // the Data Visualization page's own CTASection ("same background").
  cta: {
    ...dataVisualization.cta,
    title: "Connect with a Trusted Tableau Gold Partner",
    description: "Let our Tableau implementation consultant show you full proof of concept (POC).",
    button: { label: "Request Demo", href: "#contact", variant: "primary" },
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Why use Tableau?",
        answer:
          "Tableau is a powerful, easy-to-use business intelligence platform that connects to virtually any data source and turns raw data into interactive, shareable dashboards without requiring you to write code.",
      },
      {
        question: "What are the benefits of Tableau implementation?",
        answer:
          "A well-planned Tableau implementation gives you an automated, unified analytics tool, dynamic and customizable dashboards, faster data-driven decisions, and the ability to understand complex data through visualization.",
      },
      {
        question: "What is the cost of Tableau software implementation?",
        answer:
          "Tableau implementation cost depends on your license mix (Creator, Explorer, Viewer), deployment model, data complexity, and the scope of dashboard development and training required. Contact us for a tailored quote.",
      },
      {
        question: "How will Tableau dashboards be created?",
        answer:
          "Our Tableau implementation consultants work with you through requirements analysis, data source integration, dashboard design and performance optimization to build dashboards tailored to your specific business needs.",
      },
      {
        question: "Can we use Tableau without a licence?",
        answer:
          "Every deployment requires at least one Creator license, along with Explorer or Viewer licenses for other users depending on how they need to interact with your dashboards. A free trial is available to evaluate the platform.",
      },
      {
        question: "Which is the Tableau implementation company?",
        answer:
          "Ayushman Solutions is a Gold Tableau implementation partner, helping businesses of every size plan, deploy and adopt Tableau across their organization.",
      },
    ],
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar used
  // at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
