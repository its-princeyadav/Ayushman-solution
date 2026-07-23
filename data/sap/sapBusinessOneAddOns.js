// Content for /sap/business-one/add-ons ("SAP Business One Add-ons"). Reuses
// the exact same section components as sapBusinessOne.js / sapBusinessOneLicense.js
// / sapBusinessOneMigration.js — only this sibling data file differs. Button
// variant "addonsPrimary" is an additive, page-scoped brand variant that only
// this page references — see components/Sap-pages/SapBusinessOneAddOns.module.css
// for the page-scoped color/spacing token overrides that pair with it.

export const sapBusinessOneAddOns = {
  // TODO: no dedicated "mountaineers roped together" photo exists in the
  // project yet — reusing the same hiker/adventure photography already
  // established across this design system (proven safe for full-bleed hero).
  hero: {
    backgroundImage: "/assets/image2/banner-sap-migration.webp",
    align: "right",
    textTheme: "dark",
    title: "Enlarge SAP Software Functionality with Personalized Add-Ons",
    button: { label: "Find Out More", href: "#", variant: "addonsPrimary" },
  },

  intro: {
    imagePosition: "right",
    imageStyle: "bleed",
    theme: "dark",
    title: "Expand the power of SAP Business One",
    description:
      "Ayushman Solution offers powerful industry-specific SAP Business One add-ons for 21+ industries and business types that are designed to meet customized business needs. Since 2007, we have successfully implemented 1000+ SAP Add-Ons across multiple industries. As a leading developer of SAP Business One add-ons, we sell best-in-class add-ons that will give your business a true competitive edge. All our add-ons are quality certified and easy to implement.",
    advantages: [
      {
        title: "SAP Add-on for Material Management",
        description: "Innovative enhancements for SAP Business One, ECC and S/4HANA systems in production and supply chain.",
      },
      {
        title: "SAP Add-on for Production",
        description: "Distinctive extensions for SAP ERP/ECC and S/4HANA systems within the supply chain and production.",
      },
      {
        title: "SAP Add-on for Compliance",
        description: "Stay aligned with current legal regulations in India, APAC and MEA Regions.",
      },
      {
        title: "SAP Add-on for Analytics",
        description: "Unlock deeper business insight by harnessing the power of SAP ERP.",
      },
    ],
    buttons: [{ label: "Know More", href: "#", variant: "addonsPrimary" }],
    image: "/assets/image2/modern-sap-migration.webp",
    imageAlt: "Hikers with arms raised on a snowy mountain",
  },

  awards: {
    title: "Recognized by SAP",
    image: "/assets/image2/awards.webp",
    imageAlt: "SAP partner award trophies",
    years: ["2023", "2022", "2021", "2020", "2019"],
    awardsByYear: {
      2023: [
        { prefix: "SAP Business One", bold: "APJ Partner of the Year (Asia Pacific & Japan)", year: "2023" },
        { prefix: "SAP Business One", bold: "Partner of the Year, India", year: "2023" },
      ],
      2022: [
        { prefix: "SAP Business One", bold: "Partner of the Year, India", year: "2022" },
        { prefix: "SAP", bold: "Best Places to Work", year: "2022" },
      ],
      2021: [{ prefix: "SAP Business One", bold: "Partner of the Year, North & East India", year: "2021" }],
      2020: [{ prefix: "SAP Business One", bold: "Top Partner, North & East India", year: "2020" }],
      2019: [{ prefix: "SAP", bold: "Partner Excellence Award", year: "2019" }],
    },
    background: "#0a1e3c",
  },

  addOnsIntro: {
    title: "Ayushman Plus+",
    description:
      "Because one size doesn't fit all, always. We believe that the above stands true because no two companies have the same needs. The constant requirement from SAP Business One buyers asking for a solution to their industry-specific problem was the key driving force behind the development of Ayushman Plus+.",
    buttons: [{ label: "Let's Talk", href: "#", variant: "outline" }],
  },

  // TODO: real client logo image assets aren't available for every client
  // named on the reference design — mixing the logo files that do already
  // exist in this project with plain text marks for the rest, following the
  // same "no image available" convention already used by NewsCard/BlogCard.
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
      "Bakers Circle",
      "Bharat Petroleum",
      "BharatPe",
      "CARS24",
      "ColdEX",
      "Green Gas Limited",
      { name: "inshorts", logo: "/assets/image2/inshorts.webp" },
      "JCB",
      "King Koil",
      "esri",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      "Miller Fasteners",
      "Mrs Bectors Food Specialities",
      "Prakash Pipes Limited",
      "NASSCOM",
      "Select CITYWALK",
      "Verka",
      "UFAST",
      "Zee",
      "Raj Overseas",
    ],
  },

  addOnsSuite: {
    title: "Ayushman Plus+ Suite",
    description: "12+ high-quality industry specific add-ons designed to integrate seamlessly with SAP Business One.",
    items: [
      {
        image: "/assets/image2/sap-migration-01.webp",
        label: "SAP Add-on for Process Manufacturing",
        description:
          "Ayushman Plus+ effectively manages multiple manufacturing units and helps in batch planning execution and monitoring. The add-on also helps calculate stage-wise production and stage-wise quality, and helps in scrap and by-product management, batch product forecasting and batch costing management.",
        href: "#",
      },
      {
        image: "/assets/image2/sap-migration-02.webp",
        label: "SAP Add-on for Plant Maintenance",
        description:
          "An extension to the core ERP software, our Plant Maintenance Add-On facilitates organizations to address multiple issues related to preventive action, material dent, machine breakdown action and shutdown action, alongside AMC and warranty tracking.",
        href: "#",
      },
      {
        image: "/assets/image2/sap-migration-03.webp",
        label: "Versatile SAP Add-ons: WhatsApp, Email & SMS",
        description:
          "These add-ons send notifications, alerts, status and transactional updates on WhatsApp and SMS — related to sales quotation, sales order, outgoing payments, incoming payments, purchase order, and payment reminders.",
        href: "#",
      },
      {
        image: "/assets/image2/banner-sap-migration.webp",
        label: "SAP Add-on for Quality Control",
        description:
          "This add-on facilitates organizations to address multiple issues related to quality checks, rejected stock, on-hold stock, and can easily perform individual items and multi-level, multi-version quality tests.",
        href: "#",
      },
      {
        image: "/assets/image2/modern-sap-migration.webp",
        label: "SAP Add-on for Sub Contracting",
        description:
          "Fully equipped to handle common industrial challenges of subcontracting like BOM level detailing and tracking & issuing receipts against job work orders.",
        href: "#",
      },
      {
        image: "/assets/image2/city-05.webp",
        label: "SAP Add-on in HR & Payroll",
        description:
          "This add-on empowers customers to automate and simplify HR operations with an easy-to-use and customizable dashboard in SAP Business One. With this add-on, it becomes simpler to meet all statutory compliances and manage all financial records right from hiring to FnF.",
        forceVisible: true,
        href: "#",
      },
      {
        image: "/assets/image2/drone-img.webp",
        label: "Auto-Email Scheduler",
        description: "Auto email scheduler allows scheduling automatic follow-up emails daily, weekly, monthly or at custom intervals.",
        href: "#",
      },
      {
        image: "/assets/image2/city-06.webp",
        label: "SAP Add-on for POS",
        description: "This point-of-sales SAP add-on helps businesses efficiently manage inventory, warehouses, vendors and retail transactions.",
        href: "#",
      },
      {
        image: "/assets/image2/solution-products-img-1.webp",
        label: "SAP Add-on for EXIM",
        description: "This add-on manages license handling, export promotion schemes, shipment documentation and the complete import-export workflow.",
        href: "#",
      },
      {
        image: "/assets/image2/solution-products-img-2.webp",
        label: "Online Payment Integration with SAP",
        description: "Automatically sync online payment transactions directly into SAP Business One.",
        href: "#",
      },
      {
        image: "/assets/image2/SAP-Services-1.png",
        label: "Online E-Way Bill in SAP",
        description: "Automatically generate and upload E-Way Bills from SAP Business One directly to the Government portal.",
        href: "#",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    action: { label: "View More", href: "#" },
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Shrinivas S",
        designation: "GM Finance & Accounts, Select CITYWALK",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        eyebrow: "Customer Success Story",
        headline: "How Select CityWalk Transform Their Journey With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Gaurav Jain",
        designation: "Managing Director, ColdEX Group",
        background: "linear-gradient(135deg,#0d2c7d 0%,#123a63 100%)",
        eyebrow: "Customer Success Story",
        headline: "How ColdEX Built Their L.I.V.E. Enterprise With Ayushman Solution",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote: "The add-ons Ayushman Solution built for us plugged directly into our existing SAP Business One setup with zero disruption.",
        name: "Shrinivas S",
        designation: "GM Finance & Accounts",
        company: "Select CITYWALK",
      },
      {
        quote: "Their industry-specific add-ons gave us capability our vanilla SAP Business One install never had.",
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Read More", href: "#" },
    items: [
      {
        date: "25 Aug 2025",
        title: "How SAP S/4HANA Finance Is Redefining Financial Management",
        description: "If you think financial management is still all spreadsheets and slow...",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "31 Jul 2025",
        title: "SAP NOW AI Tour New Delhi: Schedule and Highlights",
        description: "It's going to be SAP-tember if you're in the capital city,...",
        image: "/assets/image2/SAP-Services-3.png",
        href: "#",
      },
      {
        date: "18 Jul 2025",
        title: "Why Leading Enterprises Choose SAP S/4HANA Extended Warehouse Management",
        description: "With the rapid advancement of technologies, including AI and fearsome global...",
        image: "/assets/image2/Global.png",
        href: "#",
      },
    ],
  },

  caseStudies: {
    title: "Case Studies",
    action: { label: "View More", href: "#" },
    items: [
      {
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        imageAlt: "Field of yellow flowers with Jivo Wellness branding",
        title: "Jivo Wellness Streamlined its Import and Distribution Activities Globally with SAP Business One®",
        industry: "FMCG",
        revenue: "500 Cr+",
        employees: "300+",
        location: "India",
        href: "#",
      },
      {
        image: "/assets/image2/fujikura-thumb-1.jpg",
        imageAlt: "Pharmaceutical technician monitoring production line",
        title: "Mankind Pharma Managed BMR/BPR and Inventory with SAP Business One®",
        industry: "Manufacturing",
        employees: "10,000+",
        revenue: "5,000 Cr+",
        location: "Ponta Saheb, Punjab",
        download: { href: "#" },
        href: "#",
      },
      {
        image: "/assets/image2/clearpack-thumb-1.jpg",
        imageAlt: "Industrial steel pipes against a blue sky",
        title: "Haryana Leather Chemicals Synchronized their Inventory, MRP and Production Processes with SAP Business One®",
        industry: "Chemicals, Wholesale Distribution",
        employees: "~60",
        revenue: "~50cr",
        location: "Jind, Haryana",
        download: { href: "#" },
        href: "#",
      },
      {
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        imageAlt: "Coating production line",
        title: "Fujikura Kasei Coating Painted a New Route to Success with SAP Business One®",
        industry: "Manufacturing",
        employees: "25+",
        revenue: "25 cr",
        location: "Haryana",
        download: { href: "#" },
        href: "#",
      },
    ],
  },

  // TODO: reusing the same sprinters/stadium photo already established
  // across the design system for this closing CTA banner pattern.
  ctaBanner: {
    title: "Ready to give your business a boost?",
    description:
      "Let our industry trained and SAP certified experts show you proven industry-specific solutions designed to integrate seamlessly with SAP Business One.",
    button: { label: "Request Demo", href: "#", variant: "addonsPrimary" },
    backgroundImage: "/assets/image2/city-06.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What are SAP Business One add-ons?",
        answer:
          "SAP Business One add-ons are certified extensions that plug into your existing SAP Business One install to deliver industry- or function-specific capability — like process manufacturing, plant maintenance, or HR & payroll — without custom development.",
      },
      {
        question: "Will an add-on disrupt my existing SAP Business One setup?",
        answer:
          "No — every Ayushman Plus+ add-on is built to integrate seamlessly with your existing SAP Business One environment, so there's no disruption to your current processes or data.",
      },
      {
        question: "Can I combine multiple add-ons together?",
        answer:
          "Yes — most customers combine two or more add-ons (for example, Quality Control with Process Manufacturing) to cover their full operational workflow.",
      },
      {
        question: "Are these add-ons certified by SAP?",
        answer:
          "Yes, our add-ons are SAP-certified and quality tested, so they meet the same reliability and support standards as SAP Business One itself.",
      },
      {
        question: "How long does it take to implement an add-on?",
        answer:
          "Most add-ons can be configured and go live within a few days to a couple of weeks, depending on the complexity of your existing SAP Business One setup.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #0d2c7d 0%, #178ae8 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
