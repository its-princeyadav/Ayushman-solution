// Content for /analytics/bi-managed-services. Follows the exact same
// architecture as data/analytics/dataVisualization.js and
// data/analytics/biDashboard.js: a single flat exported object, one key per
// section, consumed by components/Analytics-pages/BiManagedServices.jsx.
// Every section reuses an existing Sap/* component — no new components were
// introduced for this page. Testimonials, the client wall, blogs and case
// studies are reused verbatim from their existing sources rather than
// re-authored, per the same "no duplicate content" convention already
// established across the sap/*.js data files.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const biManagedServices = {
  // TODO: no dedicated BI Managed Services photography exists in the project
  // yet — reusing an already-established, thematically-related BI banner
  // asset (introduced for the sibling BI Dashboard page) instead of
  // sourcing a new hero image.
  hero: {
    backgroundImage: "/assets/image2/modern-bi-dashboard-bg-1.webp",
    align: "right",
    title: "Your Extended Arm for BI Managed Services",
    button: { label: "Find Out More", href: "#contact" },
  },

  intro: {
    title: "We can be your extra set of hands!",
    description:
      "An extra set of hands, whether on-site or via remote support, Ayushman Solutions can be an extension of your business without hiring new staff. Clients invest their interest in Ayushman Solutions because we act as technology consultants to our clients, enabling them to capitalize on their investment. Our competencies in Tableau with 100+ data scientists attest to our commitment and focus. We can provide you a full suite of on-premise and cloud deployment solutions, backup & disaster recovery models, and enable all businesses to focus their interest on more strategic tasks while we take care of the rest.",
  },

  // Content left / image right — reuses "drone-flyer-actual.png" the same
  // way dataVisualization.js's own `overview` section already does.
  enterpriseFit: {
    imagePosition: "right",
    title: "Managed Services for Small, Mid-Sized and Large Enterprises",
    description: [
      "Successful business leaders make the necessary investment decisions to be ahead of the curve. They recognize that their BI software requires not only regular upkeep, continuous health checks but also complete BI portfolio management. Our goal as a managed service provider is to give you the flexibility and jump-start growth with a proven managed services model.",
      "With our Managed Services, you get configuration, customization, health checks, and audits, IT staff augmentation, and end-to-end support for your BI platform. Our data scientists bring industry expertise and best practices to reduce your BI management cost considerably. We ensure round-the-clock protection, safeguard your data against threats, and protect data from any physical intrusion.",
    ],
    button: { label: "Get Demo", href: "#contact" },
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Specialist scaling a rock face, representing enterprise BI growth",
  },

  // Dark, full-bleed icon grid — same gradient + theme="light" combo already
  // established for the dark CenteredSection in sapManagedServices.js's own
  // `intro` block, paired with StatsGrid's own theme="light" (white
  // iconCircle) variant. Icons cycle through the same 4 custom SVGs
  // introduced for the BI Dashboard "Inform in a Glance" section, matching
  // the reference layout's own 4-icon repeat.
  benefits: {
    title: "Benefit from Ayushman Solutions Managed IT Service offerings",
    background: "linear-gradient(120deg, var(--color-neutral-darker) 0%, var(--color-neutral) 100%)",
    items: [
      { icon: "/assets/image2/Group-106516.svg", label: "Access to top talent" },
      { icon: "/assets/image2/Group-106517.svg", label: "Rapid proof of value" },
      { icon: "/assets/image2/Group-106519.svg", label: "Expertise on Demand" },
      { icon: "/assets/image2/Group-106520.svg", label: "Customized Solutions" },
      { icon: "/assets/image2/Group-106516.svg", label: "On-shore & offshore outsourcing" },
      { icon: "/assets/image2/Group-106517.svg", label: "Proactive Support" },
      { icon: "/assets/image2/Group-106519.svg", label: "Full lifecycle of service" },
      { icon: "/assets/image2/Group-106520.svg", label: "Cost savings" },
      { icon: "/assets/image2/Group-106516.svg", label: "Optimize your existing BI investments" },
      { icon: "/assets/image2/Group-106517.svg", label: "Modern BI landscape" },
      { icon: "/assets/image2/Group-106519.svg", label: "Quality assurance and testing" },
      { icon: "/assets/image2/Group-106520.svg", label: "Enhanced data security" },
    ],
  },

  costEffective: {
    title: "Cost-Effective & On-Demand Managed Services",
    description:
      "When you outsource your Managed IT Services to Ayushman Solutions, you get a predictable pricing model, round the clock services, competitive software licenses, and a range of data analytics, visualization, and management experts at your service. We go beyond the routine to help you produce meaningful results with your BI application deployment. With real-time monitoring, always-on support, iterative enhancements, and a deep understanding of your business, industry, and cultural dynamics, we help you experience exponential value at every engagement.",
  },

  // Enterprise Statistics — reuses the exact same "Statistics" component
  // (ClientsSection) and content already established for the Data
  // Visualization page, per spec ("reuse existing Statistics component
  // already used in previous Analytics pages").
  clients: dataVisualization.clients,

  // Key Service Offerings — reuses the exact same FunctionalityGrid +
  // ImageOverlayCard "Card Grid" combo already established for the Data
  // Visualization / BI Dashboard industry tiles: label always visible,
  // description + button reveal on hover (the component's existing default),
  // same as every other tile. "Develop" additionally passes a `button` so
  // its hover state includes a CTA — no new card variant needed.
  // TODO: no dedicated photography exists for these ten tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead (same convention as sapHub.js / erpSoftwareHyderabad.js).
  services: {
    title: "Key Service Offerings",
    items: [
      {
        label: "Configure",
        description: "Business Intelligence software to meet your unique needs.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
      },
      {
        label: "Develop",
        description: "Customized software to meet your exact industry and business demands.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
      {
        label: "Monitor",
        description: "Ensure your BI software is running without any performance glitch and breakdown.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
      },
      {
        label: "Integrate",
        description: "Integrate BI into your other back office, ERP or home-grown systems.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
      },
      {
        label: "High Availability",
        description: "Help you keep the server at peak performance. Ensure there is no single point of failure or downtime.",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
      {
        label: "Staff Augmentation",
        description:
          "Reduce the pressure of hiring and maintaining in-house technical staff by extending your BI capabilities with experienced professionals.",
        image: "/assets/image2/city-06.webp",
        href: "#",
      },
      {
        label: "Disaster Recovery",
        description:
          "Take quick and precise action against hardware failures, software failures, infrastructure issues and human errors using robust disaster recovery strategies.",
        image: "/assets/image2/service-water.webp",
        href: "#",
      },
      {
        label: "Testing",
        description: "Perform functional testing, data load testing and automated data validation to ensure system accuracy and reliability.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Training",
        description: "Schedule end-user training sessions to ensure smooth transition, faster adoption and improved productivity.",
        image: "/assets/image2/man-drone-fly.png",
        href: "#",
      },
      {
        label: "Monitoring & Support",
        description:
          "Get the right mix of proactive monitoring, issue resolution, maintenance and technical support to keep your BI environment running efficiently.",
        image: "/assets/image2/bi-dashboard-service-02.webp",
        href: "#",
      },
    ],
  },

  // Testimonials — reused verbatim from sapManagedServices.js's own
  // TestimonialsSection content (same real, already-approved Ayushman
  // Solutions customer stories used site-wide), per spec ("Do NOT redesign
  // Testimonials... reuse the exact Testimonials section").
  testimonials: sapManagedServices.testimonials,

  // Blogs — reuses the exact same BlogSection component AND blog data
  // source already established for Data Visualization / BI Dashboard.
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Case Studies — reused verbatim from dataVisualization.js's own
  // caseStudies content, same component (StoriesSection).
  caseStudies: dataVisualization.caseStudies,

  // Final CTA — same background image, layout and component already used
  // for the Data Visualization page's own CTASection ("same background").
  cta: {
    ...dataVisualization.cta,
    title: "Ready to Maximize Your BI Investment?",
    description: "Let's show you how.",
    button: { label: "Let's Connect", href: "#contact", variant: "primary" },
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
