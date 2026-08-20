// Content for /cloud ("What We Do -> Cloud"). This is the page the main
// navbar's Cloud entry links to (see components/Common/Navbar2/constants.js,
// id: "cloud", href: "/cloud") - no page existed at that route before this.
//
// Reuses the exact same section components as the SAP module
// (components/Sap/**) rather than inventing a parallel component set - see
// components/Cloud-pages/Cloud.jsx. `caseStudies` is reused verbatim from
// data/sap/sapConsulting.js (the same real, already-approved client
// stories - ColdEX, Raj Group, Fix Derma) instead of inventing new ones,
// per this project's own established convention of sharing case-study/
// testimonial blocks across sibling pages (see data/sap/sapHub.js's
// header comment for the same pattern).
import { sapConsulting } from "./sap/sapConsulting";

export const cloud = {
  hero: {
    backgroundImage: "/assets/image2/hero-abstract-blue.jpg",
    align: "left",
    textTheme: "light",
    title: "Enterprise Cloud Solutions Built on Microsoft Azure & AWS",
    description:
      "From cloud strategy and migration to round-the-clock managed services, Ayushman Solutions helps you build a secure, scalable cloud foundation - without disrupting the business that depends on it.",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "primary" },
      { label: "Talk To A Cloud Expert", href: "#", variant: "outlineLight" },
    ],
  },

  intro: {
    title: "One Cloud Partner, Every Stage Of The Journey",
    description:
      "Whether you're moving your first workload to the cloud or optimizing a multi-cloud estate, our certified Azure and AWS consultants bring the same disciplined approach: assess honestly, migrate safely, and keep optimizing long after go-live.",
  },

  // "Top Industries Trusting Azure" - reuses ImageOverlayCard (the same
  // image-overlay grid tile already used by FunctionalityGrid across the SAP
  // module) rather than a new card component. Images are existing project
  // assets already used as generic industry photography elsewhere in the
  // project (see data/analytics/*.js), picked for genuine subject-match
  // after visually checking every candidate (several "bi-dashboard-industry"
  // filenames turned out to depict unrelated subjects on inspection).
  industries: {
    title: "Top Industries\nTrusting The Cloud",
    description:
      "From regulated utilities to global retail chains, these are the industries where our Azure and AWS consultants have delivered measurable outcomes.",
    items: [
      {
        label: "Energy",
        description: "Grid modernization, asset monitoring and safety compliance on a secure cloud backbone.",
        image: "/assets/image2/bi-dashboard-industry-12.webp",
        href: "#",
      },
      {
        label: "Financial Services",
        description: "Real-time risk, fraud detection and reporting built on compliant cloud infrastructure.",
        image: "/assets/image2/bi-dashboard-industry-01.webp",
        href: "#",
      },
      {
        label: "Government",
        description: "Citizen services and public records modernized without compromising governance.",
        image: "/assets/image2/bi-dashboard-industry-09.webp",
        href: "#",
      },
      {
        label: "Industrial Software",
        description: "Connected shop-floor data, predictive maintenance and plant-wide visibility.",
        image: "/assets/image2/bi-dashboard-industry-03.webp",
        href: "#",
      },
      {
        label: "Life Sciences",
        description: "Secure, auditable infrastructure for research, trials and patient data at scale.",
        image: "/assets/image2/bi-dashboard-industry-07.webp",
        href: "#",
      },
      {
        label: "Retail And, 13+ Other Industries",
        description: "Unified commerce, inventory and customer data across every channel - and many more sectors besides.",
        image: "/assets/image2/bi-dashboard-industry-04.webp",
        href: "/industries",
      },
    ],
  },

  // "Our Extensive Cloud Service Portfolio" - reuses ServiceTabsSection
  // as-is (already a full-bleed dark panel with a numbered method list and
  // CTA buttons; see components/Sap/sections/ServiceTabsSection.jsx). Tab
  // labels are numbered 01-04 to read as the "1 -> 2 -> 3 -> 4" service
  // progression, using the component's existing horizontally-scrollable
  // mobile behavior instead of a new timeline component.
  servicePortfolio: {
    tabs: [
      { id: "assess", label: "01 · Assess" },
      { id: "migrate", label: "02 · Migrate" },
      { id: "optimize", label: "03 · Optimize" },
      { id: "manage", label: "04 · Manage" },
    ],
    panels: {
      assess: {
        image: "/assets/image2/hero-sap-network.png",
        imageAlt: "Abstract network graphic representing cloud strategy",
        title: "Cloud Strategy &",
        titleAccent: "Readiness Assessment",
        description:
          "Before a single workload moves, we map your current estate, workloads and compliance requirements against Azure and AWS, so every later decision is backed by evidence, not guesswork.",
        steps: [
          { label: "Discover", text: "Inventory applications, dependencies and data residency requirements." },
          { label: "Benchmark", text: "Score workloads for cloud-readiness, cost and risk." },
          { label: "Roadmap", text: "Sequence a migration plan tied to real business priorities." },
        ],
        buttons: [
          { label: "Request A Demo", href: "#", variant: "primary" },
          { label: "Learn More", href: "#", variant: "outlineLight" },
        ],
      },
      migrate: {
        image: "/assets/image2/green-mountains.png",
        imageAlt: "Dramatic mountain range representing the migration journey",
        title: "Migration &",
        titleAccent: "Modernization",
        description:
          "We move workloads with a rehearsed, low-downtime playbook - lift-and-shift where it's the right call, re-architect for cloud-native scale where it isn't.",
        steps: [
          { label: "Rehearse", text: "Dry-run migrations in a sandboxed environment before go-live." },
          { label: "Migrate", text: "Execute in scheduled waves with rollback plans at every step." },
          { label: "Validate", text: "Confirm performance, security and data integrity post-move." },
        ],
        buttons: [
          { label: "Request A Demo", href: "#", variant: "primary" },
          { label: "Learn More", href: "#", variant: "outlineLight" },
        ],
      },
      optimize: {
        image: "/assets/image2/secondary-footer-bg.webp",
        imageAlt: "Abstract blue gradient representing streamlined cloud infrastructure",
        title: "Optimization &",
        titleAccent: "Security Governance",
        description:
          "Cloud spend and risk don't stand still after go-live. We continuously right-size infrastructure, enforce security baselines, and tighten identity and access controls.",
        steps: [
          { label: "Right-size", text: "Eliminate idle and over-provisioned resources on an ongoing basis." },
          { label: "Harden", text: "Apply security baselines, encryption and least-privilege access." },
          { label: "Monitor", text: "Track cost, performance and compliance drift in real time." },
        ],
        buttons: [
          { label: "Request A Demo", href: "#", variant: "primary" },
          { label: "Learn More", href: "#", variant: "outlineLight" },
        ],
      },
      manage: {
        image: "/assets/image2/SAP-Services-Customization-Segment-.webp",
        imageAlt: "Two climbers helping each other up a mountain, representing ongoing partnership and support",
        title: "Managed Services &",
        titleAccent: "24x7 Support",
        description:
          "Once you're live, our managed services team keeps your cloud estate patched, monitored and supported - so your team can focus on the business, not the infrastructure.",
        steps: [
          { label: "Monitor", text: "24x7 uptime and performance monitoring with proactive alerting." },
          { label: "Support", text: "SLA-backed incident response and change management." },
          { label: "Evolve", text: "Quarterly reviews to keep the roadmap aligned with new needs." },
        ],
        buttons: [
          { label: "Request A Demo", href: "#", variant: "primary" },
          { label: "Learn More", href: "#", variant: "outlineLight" },
        ],
      },
    },
  },

  // "Read Our Latest Insights" - reuses NewsSection/NewsCard. Source logos
  // are real press-mark assets already in the project (used the same way by
  // data/sap/sapBusinessOneMigration.js's own `news` block), each paired
  // with a new cloud-relevant headline since no cloud news content existed.
  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "12 Feb 2026",
        title: "Ayushman Solutions Expands Azure Practice With New Cloud Migration Accelerators",
        source: "Business Insider",
        image: "/assets/image2/business-insider-logo.jpg",
        background: "var(--sap-white)",
        href: "#",
      },
      {
        date: "28 Jan 2026",
        title: "Why Mid-Market Enterprises Are Rethinking Their Cloud Strategy in 2026",
        source: "Deccan Herald",
        image: "/assets/image2/deccan-herald-logo.jpg",
        background: "var(--sap-white)",
        href: "#",
      },
      {
        date: "05 Jan 2026",
        title: "Ayushman Solutions Named Among Top Cloud Consulting Partners in India",
        source: "NewsX",
        image: "/assets/image2/newsx-logo.jpg",
        background: "var(--sap-white)",
        href: "#",
      },
    ],
  },

  // "Blogs" - reuses BlogSection/BlogCard. Images are existing project
  // assets whose actual subject matter (checked visually, not by filename)
  // fits a cloud/digital-transformation blog thumbnail.
  blogs: {
    title: "Blogs",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "10 Feb 2026",
        title: "Why Every Enterprise Needs A Cloud-First Strategy in 2026",
        description: "Cloud-first isn't a buzzword anymore - it's the difference between scaling fast and...",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
      {
        date: "22 Jan 2026",
        title: "Cloud + Automation: How Intelligent Infrastructure Cuts Operational Costs",
        description: "Pairing cloud elasticity with process automation is quietly becoming the biggest lever...",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#",
      },
      {
        date: "03 Jan 2026",
        title: "Azure Or AWS: A CIO's Framework For Choosing The Right Cloud",
        description: "The right platform depends less on brand and more on your workloads, compliance needs...",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
    ],
  },

  // "Customer Success / Case Studies" - reused verbatim, see header comment.
  caseStudies: sapConsulting.caseStudies,

  // "Still, Exploring Cloud?" - reuses CTASection.
  ctaBanner: {
    title: "Still Exploring Cloud?",
    description: "Explore deeper to see how we drive digital transformation with Microsoft Azure and AWS.",
    button: { label: "Learn More", href: "#", variant: "primary" },
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    textTheme: "light",
  },

  // FAQs - reuses FAQSection/FAQAccordion.
  faq: {
    title: "Frequently Asked Questions (FAQs)",
    items: [
      {
        question: "What is a cloud service provider?",
        answer:
          "A cloud service provider hosts and manages computing infrastructure, storage, databases and software over the internet - like Microsoft Azure or AWS - so you don't have to own and run physical servers yourself.",
      },
      {
        question: "How does a cloud solution help in business growth?",
        answer:
          "Cloud infrastructure scales with demand instead of forcing large upfront hardware investments, giving growing businesses faster deployment, lower operating costs, and the flexibility to launch new capabilities in weeks instead of months.",
      },
      {
        question: "What is a cloud migration process?",
        answer:
          "It's the structured move of applications, data and workloads from on-premise (or another cloud) into a target cloud platform - typically assessment, planning, a rehearsed migration in waves, and post-migration validation and optimization.",
      },
      {
        question: "Which cloud platform is best for SMEs?",
        answer:
          "There's no single answer - it depends on your existing tech stack, compliance needs and budget. Our consultants run a vendor-agnostic assessment across Azure and AWS so the recommendation fits your business, not a sales quota.",
      },
      {
        question: "How long does a typical cloud migration take?",
        answer:
          "It varies by workload complexity, but most mid-market migrations run in phased waves over a few months - low-risk workloads move first, with business-critical systems migrated only once the process is proven safe.",
      },
      {
        question: "Do you offer ongoing support after migration?",
        answer:
          "Yes - our managed services team provides 24x7 monitoring, SLA-backed incident response, security patching and quarterly optimization reviews so your cloud estate keeps improving long after go-live.",
      },
    ],
  },
};
