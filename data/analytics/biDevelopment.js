// Content for /analytics/bi-development. Follows the exact same
// architecture as data/analytics/dataVisualization.js, biDashboard.js,
// biManagedServices.js and biTraining.js: a single flat exported object, one
// key per section, consumed by components/Analytics-pages/BiDevelopment.jsx.
// Every section reuses an existing Sap/* component — no new components were
// introduced for this page. The client wall, blogs, case studies and CTA are
// reused verbatim from their existing sources, same convention already
// established across the sibling Analytics pages.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const biDevelopment = {
  // TODO: no dedicated BI Development photography exists in the project yet
  // — reusing the same established "BI" hero banner asset already
  // introduced for the sibling BI Dashboard page instead of sourcing a new
  // hero image.
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "right",
    title: "Kick Your Analytics Journey Into High Gear with BI Development",
    button: { label: "Find Out More", href: "#contact" },
  },

  intro: {
    title: "Embark on BI journey with Ayushman Solutions",
    description:
      "A company's business units and sales, supply chain, finance, IT and other departments often battle for meaningful data to make real-time analysis and decisions. Decision-makers and respective departments heads want to gain visibility into cash flow, gross margins, revenue, and operating expenses. Demand for 360-degree visibility to make actionable decisions has been the new normal; so is the speed. Ayushman Solutions aims to help your business become agile, future-ready and information-driven, where fact-based decision-making is embedded into daily operations. We help clients make informed decisions and convert their data into a strategic asset.",
  },

  // Content left / image right — reuses "drone-flyer-actual.png" the same
  // recurring way dataVisualization.js's `overview` and the sibling BI
  // Managed Services / BI Training pages already do.
  standard: {
    imagePosition: "right",
    title: "International-standard BI development solutions",
    description: [
      "Companies embrace business intelligence to unleash critical insights in their various business functions anytime and anywhere. Making that promise real is why we're the leading BI development and consulting partner. Over 120+ satisfied customers are a testament to our BI expertise, experience and value-driven approach. Whether you are from Pharma, retail, manufacturing, dairy, packaging, or any industry, we can address data issues faster before they become real problems.",
      "You can count on our world-class BI development solutions, thanks to our strategic partnership with Tableau software - a completed, integrated analytics platform. We aim to solve a comprehensive set of challenges and provide the desired BI development solutions within the timeline and as per the unique business demands.",
    ],
    button: { label: "BI Solution", href: "#contact" },
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Specialist scaling a rock face, representing BI development growth",
  },

  customized: {
    title: "Back your BI strategy with customized solutions",
    description:
      "We work with you every step of the way and provide the exact business BI development solutions rather than one-size-fits-all. We help all small, medium and large enterprises and diverse industry segments to shape the future of organizations with customized business intelligence solutions powered by Tableau. With a strong focus on the quality and security of the data, we follow industry-best protocols, testing methodologies, and security standards. We know what it takes to build a great BI software that meet your exact business needs without disrupting your business environment.",
    buttons: [{ label: "Explore Analytic Services", href: "#contact" }],
  },

  // Standalone centered heading above the two Challenges / Solutions rows
  // below — a lightweight CenteredSection with no description/buttons, same
  // pattern already used for erpSoftwareHyderabad.js's `telangana` heading.
  dataProblems: {
    title: "Addressing 360° Data Problems",
  },

  // Image left / checklist + button right — reuses ImageTextSection's
  // existing `checklistTitle` + `checklist` (rendered via the shared
  // CheckList component), same as biManagedServices.js and every other
  // checklist consumer.
  challenges: {
    imagePosition: "left",
    checklistTitle: "Challenges",
    checklist: [
      "Connects multiple data source – Single Source of Truth",
      "Real-time reporting & analysis helps in identifying trends and outliers",
      "Employee productivity with better visibility helps in benchmarking and performance management",
      "Proactive decision making with Deep & Actionable Insights",
    ],
    button: { label: "Find Out More", href: "#contact" },
    image: "/assets/image2/city-05.webp",
    imageAlt: "Athlete clearing a hurdle, representing overcoming data challenges",
  },

  // Checklist + button left / image right — the alternate ImageTextSection
  // layout, same component as `challenges` above.
  solutions: {
    imagePosition: "right",
    checklistTitle: "Solutions",
    checklist: [
      "Sheer volume of data",
      "Driving a data culture",
      "Fragmented data ownership",
      "Multiple data sources",
      "Centralized & report based role access",
      "Unstructured Data",
    ],
    button: { label: "Get Solution", href: "#contact" },
    image: "/assets/image2/banner-sap-migration.webp",
    imageAlt: "Volleyball players in action, representing coordinated data solutions",
  },

  // Client Statistics — reuses the exact same Statistics component
  // (ClientsSection) and content already established across every sibling
  // Analytics page.
  clients: dataVisualization.clients,

  // Our Expertise — reuses the exact same FunctionalityGrid +
  // ImageOverlayCard "Card Grid" combo already established for the Key
  // Service Offerings / Business Benefits grids on the sibling BI pages:
  // label always visible, description + button reveal on hover (the
  // component's existing default) — no permanently-expanded card.
  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead (same convention as the sibling BI pages' own grids).
  expertise: {
    title: "Our Expertise",
    items: [
      {
        label: "Requirement Analysis",
        description:
          "Every BI project is different, so we analyze, gather and assess your current business environment and data to determine the best-fit solution based on your exact business requirements. Our team identifies business challenges and recommends the right BI strategy within your industry and budget.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
        button: { label: "Find Out More", href: "#contact" },
      },
      {
        label: "Extract, Transform, Load",
        description:
          "Our BI experts extract raw data from multiple sources, transform it into a structured format and load it into a centralized warehouse for accurate reporting and business intelligence.",
        image: "/assets/image2/city-06.webp",
        href: "#",
        button: { label: "Find Out More", href: "#contact" },
      },
      {
        label: "Data Cleansing & Profiling",
        description:
          "Our BI experts clean, de-duplicate, standardize, verify and validate data of any complexity and size. We eliminate duplications or anomalies in data and ensure end to end encryption for added security. We also analyze data to ensure it meets quality standards.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
        button: { label: "Find Out More", href: "#contact" },
      },
      {
        label: "Customized Dashboards",
        description:
          "We build interactive, dynamic and feature-rich dashboards customized according to business goals and industry requirements, enabling real-time decision making.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
        button: { label: "Find Out More", href: "#contact" },
      },
      {
        label: "Analytical Processing",
        description:
          "Using OLAP and ROLAP technologies, our BI specialists process multidimensional datasets efficiently, reducing query time while improving analytical performance.",
        image: "/assets/image2/bi-dashboard-service-02.webp",
        href: "#",
        button: { label: "Find Out More", href: "#contact" },
      },
      {
        label: "Deployment & Support",
        description:
          "After development, testing and migration, we deploy your BI solution and provide continuous monitoring, maintenance and post-deployment support.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#",
        button: { label: "Find Out More", href: "#contact" },
      },
    ],
  },

  // Testimonials — reuses the exact same TestimonialsSection component and
  // real, already-approved customer stories already established for the BI
  // Managed Services / BI Training pages (sapManagedServices.js).
  testimonials: {
    ...sapManagedServices.testimonials,
    title: "Testimonials",
    description: undefined,
    action: { label: "View More", href: "#" },
  },

  // Blogs — reuses the exact same BlogSection component AND blog data
  // source already established across every sibling Analytics page.
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Case Studies — reused verbatim from dataVisualization.js's own
  // caseStudies content, same component (StoriesSection).
  caseStudies: dataVisualization.caseStudies,

  // Contact CTA — same background image, layout and component already used
  // across every Analytics page's own CTASection.
  cta: {
    ...dataVisualization.cta,
    title: "Let's Get in Touch",
    description: "Leverage our BI solutions to gain a holistic view of your business on the go.",
    button: { label: "Talk to Experts", href: "#contact", variant: "primary" },
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
