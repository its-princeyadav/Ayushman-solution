// Content for /analytics/bi-consulting. Follows the exact same architecture
// as data/analytics/dataVisualization.js, biDashboard.js, biManagedServices.js,
// biDevelopment.js and biTraining.js: a single flat exported object, one key
// per section, consumed by components/Analytics-pages/BiConsulting.jsx. Every
// section reuses an existing Sap/* component — no new components were
// introduced for this page. The client wall, blogs and case studies are
// reused verbatim from their existing sources, same convention already
// established across the sibling Analytics pages.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const biConsulting = {
  // TODO: no dedicated BI Consulting photography exists in the project yet —
  // reusing the same established "BI" hero banner asset already introduced
  // for the sibling BI Development / BI Training pages instead of sourcing a
  // new hero image.
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "right",
    title: "Seize Data Advantage with Strategic BI Consulting Services",
    button: { label: "Get Consultant", href: "#contact" },
  },

  intro: {
    title: "What Analytics Capabilities Do You Plan on Building in the Coming 3-5 Years?",
    description:
      "It is an ever-evolving landscape of data analytics; and hence envisioning the future is key. This forward-thinking approach sets the stage for transformative growth. At Ayushman Solutions, our BI consulting services are poised to be your strategic partner on this journey. We specialize in crafting bespoke analytics solutions that not only meet your current needs but also future proof your capabilities. Our seasoned experts are adept at foreseeing trends, implementing cutting-edge technologies, and ensuring your analytics infrastructure remains agile and robust. Let's collaborate to turn your analytics vision into reality. With Ayushman Solutions, tomorrow's capabilities are within reach today.",
    buttons: [
      { label: "Explore Analytics", href: "#contact", variant: "primary" },
      { label: "Let's Talk", href: "#contact", variant: "outline" },
    ],
  },

  // Content left / image right — reuses "drone-flyer-actual.png" the same
  // recurring way dataVisualization.js's `overview` and the sibling BI
  // Managed Services / BI Development / BI Training pages already do.
  realizeData: {
    imagePosition: "right",
    title: "Realize Your Data Power with Ayushman Solutions BI Consulting Services",
    description: [
      "In the age of rapid growth and bold visions, Ayushman Solutions stands by your side to turn scattered data into dynamic, real-time insights. As top BI consultants, we go beyond mere consulting, delving into data discovery, license optimization, comprehensive training, and seamless implementation, ensuring your BI investment pays off in full.",
      "Think of Ayushman Solutions as your dedicated BI Sherpa, guiding you through the transformative data visualization journey. With a wealth of experience spanning diverse industries, we're poised to deliver BI consulting services that fast-track your success. Unleash your data destiny with Ayushman Solutions and Tableau business intelligence consulting!",
    ],
    button: { label: "Get BI Solution", href: "#contact" },
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Hikers surveying the landscape, representing BI consulting vision",
  },

  // Light, full-bleed centered CTA block — reuses the same soft primary-tint
  // gradient already established for the light CenteredSection variant
  // across sapManagedServices.js's `autoGear` and every other SAP page.
  industryFit: {
    title: "Business Intelligence consultancy for Every Industry and Vertical: Small or Large",
    description:
      "Business Intelligence (BI) software isn't just data — it's a compass for competitive advantage. It unveils hidden opportunities, flags potential threats, and secures new market terrain. Savvy businesses recognize BI's transformative potential — it's the key to real-time action, customer delight, heightened productivity, and vigilant business monitoring. At Ayushman Solutions, we're not just BI consultants — we're your navigators in this journey. With Tableau, Alteryx and Microsoft Power BI as our partners, we're equipped to guide you towards the next breakthrough in your BI voyage with our BI dashboards. Our team of industry mavens, BI consultants, and data visualization wizards cater to 18+ verticals, offering instant insights at every level — individual, departmental, and enterprise-wide. Gear up for a data-driven revolution with Ayushman Solutions' business intelligence services!",
    buttons: [
      { label: "Explore Analytic Services", href: "#contact", variant: "primary" },
      { label: "Get Analytic Solution", href: "#contact", variant: "outline" },
    ],
  },

  roi: {
    title: "Derive Business Value and ROI with Ayushman Solutions' BI Consultants",
    description:
      "Data fuels tremendous competitive opportunities to organizations, but only when they can derive meaningful insights and act on those dynamics faster. As trusted Tableau business intelligence consultants, Ayushman Solutions empowers your business with dependable insights, empowering you to make decisions with unwavering confidence. With a team of over 50 certified business intelligence consultants armed with deep domain knowledge and a meticulous consulting approach, we swiftly transform your data into a strategic powerhouse. Our mission is simple: to ensure you realize the full ROI and potential of your BI platform. Whether you need deployment, support, licensing, or fine-tuning, our experts are primed and ready. Backed by dual proficiency in database management and analytics, Ayushman Solutions is the business intelligence consulting company you can rely on. Our cross-functional expertise caters to organizations of all sizes, helping them uncover the driving forces and remove the roadblocks to success.",
  },

  // Bulleted "approach" block — reuses CenteredSection's `children` slot with
  // the shared CheckList component (components/Sap/common/CheckList.jsx),
  // same pattern CenteredSection already supports for a stats/icon row.
  approach: {
    title: "Our Business Intelligence Consulting Approach",
    description:
      "Ayushman Solutions introduces a meticulously crafted step-up approach to educate and synchronize stakeholders throughout each phase of business intelligence consulting. This holistic end-to-end process empowers your team to accomplish their business intelligence objectives by:",
    bullets: [
      "Guaranteeing alignment among stakeholders regarding your existing state of BI maturity and your envisioned state.",
      "Creating an enterprise- or department-level BI Roadmap to guarantee business-centric planning, requirements, design, and oversight.",
      "Evaluating current data quality to identify discrepancies and establish expectations.",
      "Employing an agile and modular methodology.",
      "Devising an adaptable and scalable BI Solution Framework.",
      "Instituting a centralized governance framework.",
      "Ensuring comprehensive security and access.",
    ],
  },

  // Enterprise Statistics — reuses the exact same Statistics component
  // (ClientsSection) and content already established across every sibling
  // Analytics page.
  clients: dataVisualization.clients,

  // Our Business Intelligence Consultancy — reuses the exact same
  // FunctionalityGrid + ImageOverlayCard "Card Grid" combo already
  // established for the Key Service Offerings / Our Expertise grids on the
  // sibling BI pages: label always visible, description reveals on hover
  // (the component's existing default).
  // TODO: no dedicated photography exists for these nine tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead (same convention as the sibling BI pages' own grids).
  servicesGrid: {
    title: "Our Business Intelligence Consultancy",
    items: [
      {
        label: "Landscape Analysis",
        description:
          "BI design begins with a detailed assessment of your existing data ecosystem, business workflows, and engineering infrastructure. Our consultants evaluate every data source and business objective to build scalable, industry-specific Tableau solutions that align with long-term organizational goals.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
      },
      {
        label: "Data Discovery",
        description:
          "Modern businesses generate valuable information from multiple digital sources. Our BI consultants help uncover hidden insights from structured and unstructured datasets using Tableau's self-service analytics, enabling faster, smarter business decisions.",
        image: "/assets/image2/city-06.webp",
        href: "#",
      },
      {
        label: "Data Visualization",
        description:
          "We transform complex business information into interactive dashboards and visually compelling reports that help organizations identify trends, simplify analysis, and make confident data-driven decisions.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
      },
      {
        label: "License Selection",
        description:
          "Choosing the right Tableau licensing model can be challenging. We help organizations select the ideal Creator, Explorer, or Viewer licenses that maximize functionality while optimizing overall software investment.",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
      {
        label: "Server Care",
        description:
          "Our specialists continuously monitor and maintain Tableau Server performance, ensuring maximum availability, security, stability, and protection against unauthorized access through industry-standard security practices.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
      },
      {
        label: "Training",
        description:
          "We deliver comprehensive Tableau training programs designed for startups, SMEs, and enterprises, empowering every business user to confidently build dashboards, reports, and analytics independently.",
        image: "/assets/image2/man-drone-fly.png",
        href: "#",
      },
      {
        label: "Mobile Business Insights & Analysis",
        description:
          "Access dashboards and critical business insights anywhere through smartphones, tablets, iPads, and mobile devices, enabling faster decision-making while staying connected to your business.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Predictive Analysis",
        description:
          "Leverage historical business data to forecast future trends, identify opportunities, minimize risks, and improve profitability using advanced predictive analytics and intelligent forecasting models.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        label: "Data Analytics & Reporting Consulting",
        description:
          "Automate business reporting with customized dashboards, KPI monitoring, scheduled reports, and ad-hoc analytics that help organizations make faster and more informed decisions.",
        image: "/assets/image2/bi-dashboard-service-02.webp",
        href: "#",
      },
    ],
  },

  // Testimonials — reuses the exact same TestimonialsSection component and
  // real, already-approved customer stories already established for the BI
  // Managed Services / BI Development / BI Training pages
  // (sapManagedServices.js).
  testimonials: {
    ...sapManagedServices.testimonials,
    title: "Testimonials",
    description: undefined,
    action: { label: "View More", href: "#" },
  },

  // Blogs — reuses the exact same BlogSection component AND blog data source
  // already established across every sibling Analytics page.
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Case Studies — reused verbatim from dataVisualization.js's own
  // caseStudies content, same component (StoriesSection), same as every
  // sibling BI page.
  caseStudies: dataVisualization.caseStudies,

  // Contact CTA — same background image, layout and component already used
  // across every Analytics page's own CTASection.
  cta: {
    ...dataVisualization.cta,
    title: "Let's Get in Touch",
    description: "Leverage our business intelligence consulting services to gain a holistic view of your business on the go.",
    button: { label: "Talk to Experts", href: "#contact", variant: "primary" },
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar used
  // at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
