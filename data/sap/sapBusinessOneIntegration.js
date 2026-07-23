// Content for /sap/business-one/integration ("SAP Business One
// Integration"). Reuses the exact same section components as
// sapSolutions.js / sapServices.js / sapSupport.js / sapPractices.js /
// sapBusinessOne.js / sapBusinessOneImplementation.js / sapBusinessOneCustomization.js
// — only this sibling data file differs.

export const sapBusinessOneIntegration = {
  // TODO: no dedicated "team on a summit" hero photo exists in the project
  // yet — reusing the same small pool of adventure photography already
  // established across every SAP page in this project. SAP-Services-1.png
  // is excluded here: at 375x530px it's a portrait thumbnail, not a
  // full-bleed hero asset, and blurs badly when stretched full-width.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-2.png",
    align: "right",
    title: "SAP Integration Services - Expediting Time-to-Value and Speed-to-Market",
    button: { label: "Request A Demo", href: "#" },
  },

  intro: {
    title: "Imagine. Integrate. Innovate.\nSAP Integration Services by Ayushman Solution",
    description:
      "Connect systems, automate processes and synchronize experiences with SAP Business One integration solutions. Any integration with SAP may seem complex. Ayushman Solution helps modern enterprises quickly integrate volumes of SAP and third-party data and applications with confidence – in the cloud or on-premises. Our prebuilt integration models, smooth SAP integration services and add-on offerings enable you to reimagine what's possible and innovate relentlessly.",
    stats: [
      { icon: "handshake", value: "#1", label: "SAP Platinum Partner" },
      { icon: "rocket", value: "500+", label: "Implementations" },
      { icon: "certificate", value: "21+", label: "Industry Vertical Experience" },
      { icon: "briefcase", value: "12+", label: "Add-ons" },
    ],
    buttons: [
      { label: "Request Demo", href: "#", variant: "primary" },
      { label: "SAP Solutions", href: "/sap/solutions", variant: "outlineLight" },
    ],
    background: "linear-gradient(120deg, #0a1e3c 0%, #123a63 100%)",
  },

  // TODO: no dedicated photography exists for these three rows yet — reusing
  // already-established real assets from elsewhere in the design system.
  integrationRows: [
    {
      imagePosition: "left",
      image: "/assets/image2/solution-products-img-1.webp",
      imageAlt: "Colleagues collaborating on a digital SAP integration workflow",
      title: "Digital Integrations",
      description:
        "As business dynamics change rapidly in the tech era, digital integrations with SAP enable enterprises to consolidate all online operations on one single platform. We offer the following digital SAP Business One integrations:",
      bullets: [
        { label: "Digital signature", text: "Ensures secure document handling and compliance with digital workflows" },
        { label: "WhatsApp communication", text: "Facilitates direct and immediate on-the-go action" },
        { label: "Bank integration", text: "Seamlessly connects financial transactions, enhancing payment processes and tracking" },
        { label: "Online payment", text: "Provides convenient and secure payment options for customers, boosting transaction completion rates" },
        { label: "Ecommerce", text: "Integrates online store operations within SAP, enabling unified inventory management and customer data" },
        { label: "QR code", text: "Enhances marketing and transactional processes with quick access to information and seamless interactions" },
        { label: "Weighbridge", text: "Automates weight measurement processes, optimizing logistics and compliance" },
        { label: "Machine integration", text: "Connects manufacturing and operational machinery with SAP, improving production monitoring and maintenance" },
      ],
      buttons: [{ label: "Request Demo", href: "#", variant: "primary" }],
    },
    {
      imagePosition: "right",
      image: "/assets/image2/solution-products-img-2.webp",
      imageAlt: "Team discussing SAP add-on capabilities around a conference table",
      title: "SAP Add-Ons",
      description: [
        "Depending on your niche or industry, you require specific, advanced functionalities and capabilities in your tech platform. We get it.",
        "Extend the functionality of your SAP ecosystem with custom, feature-rich add-ons offered by Ayushman Solution. We offer a large number of products that enhance the utilization of SAP ERP.",
      ],
      bullets: [
        "Streamline gate entry via Tablet integration",
        "Enhance quality control processes seamlessly",
        "Manage sub-contracting operations efficiently",
        "Maintain plant assets with integrated solutions on SAP",
        "Simplify EXIM (Export-Import) compliance and operations",
        "Optimize scheme management and implementation effortlessly",
      ],
      buttons: [{ label: "SAP Add-Ons", href: "/sap/business-one/customization", variant: "primary" }],
    },
    {
      imagePosition: "left",
      image: "/assets/image2/SAP-Services-2.png",
      imageAlt: "Colleagues reviewing GST compliance reports",
      title: "GST SAP Integration Services",
      description:
        "Automate GST regulatory compliance in a few clicks! It's possible with GST integration with SAP offered by Ayushman Solution. We give businesses a straight-forward and hassle-free means to manage all aspects of Goods & Services Tax management – from invoice processing and storage to GST calculation and filing with SAP Business One integration.",
      bullets: [
        { label: "GST Integration", text: "Simplify GST compliance with automated processes integrated into SAP for accurate invoicing, calculation, and filing" },
        { label: "GST Return Filing", text: "Streamline filing with automated data sync between SAP and GSTN" },
        { label: "Reconciliation", text: "Automate GST data reconciliation within SAP for accuracy and compliance" },
        { label: "E-way bill Management", text: "Generate and manage E-way bills directly from SAP for smooth transportation" },
        { label: "E-invoice Generation", text: "Automate E-invoice generation and integration to comply with GST regulations" },
      ],
      buttons: [{ label: "GST Compliance", href: "#", variant: "primary" }],
    },
  ],

  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established real assets from elsewhere in the design system.
  businessIntegrations: {
    title: "Business Integrations and Extensions",
    description:
      "Enhance your SAP platform with Ayushman Solution's versatile and personalized enterprise integrations and extensions. Tailor your environment to meet specific needs, ensuring seamless integration and efficiency when you deploy extensions that optimize workflows and enhance flexibility. Achieve your business goals confidently with our tailored solutions for SAP.",
    items: [
      {
        label: "Machine, AI and ML integration",
        description: "Build readiness to integrate machine learning and AI seamlessly within your SAP environment.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
      {
        label: "E-commerce ecosystem integration",
        description: "Your master guide to E-commerce ecosystem integration.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Dealer management ecosystem integration",
        description: "Optimize your SAP environment with seamless dealer management ecosystem integration.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#",
      },
      {
        label: "SAP S/4 HANA business network integrations",
        description: "Streamline SAP S/4HANA business network integrations effortlessly.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        label: "Integration with third party apps – Point of sale",
        description: "Facilitate seamless integration of third-party apps, enhancing Point of Sale efficiency.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        label: "Integration with third party apps – Web based applications",
        description: "Enable smooth integration with web-based applications, expanding operational capabilities effectively.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "#",
      },
    ],
  },

  // TODO: Select CityWalk video reuses the exact banner-style testimonial
  // pattern already established for ColdEX in sapBusinessOne.js; ColdEX
  // itself is reused verbatim from that same file.
  testimonials: {
    title: "Client Success Stories",
    description: "Success stories that demonstrate real-time benefits of working with the best SAP Business One integration partner.",
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
        background: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        partnerLogo: "/assets/image2/coldex-logo-1.png",
        eyebrow: "Customer Success Story",
        headline: "How Coldex Built Their L.I.V.E. Enterprise With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Shrinivas S",
        designation: "GM Finance & Accounts",
        company: "Select CityWalk",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Select CityWalk Transformed Their Integration Journey With Ayushman Solution",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote: "Ayushman Solution brought the same energy to our SAP rollout that we bring to the ice.",
        name: "Gaurav Jain",
        designation: "Managing Director",
        company: "ColdEX Group",
      },
      {
        quote: "The integration roadmap Ayushman Solution built connected every system we run on, seamlessly.",
        name: "Shrinivas S",
        designation: "GM Finance & Accounts",
        company: "Select CityWalk",
      },
    ],
  },

  // TODO: no dedicated photography exists for these tiles yet — reusing
  // already-established real assets and, where noted, verbatim copy from
  // sapBusinessOne.js / sapServices.js case-study entries.
  caseStudies: {
    title: "Learn How Enhanced Engagements Are Reshaping Customer Experience",
    action: { label: "Find Out More", href: "#" },
    items: [
      {
        title: "Clearpack Automation Managed their Production Cost and Timelines with SAP Business One®",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Machinery & Components",
        revenue: "~100+cr",
        employees: "300",
        location: "Uttar Pradesh, India",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "ColdEX Logistics Improved Supply Chain Management, Warehouse and Fulfillment Management with SAP Business One®",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Logistics",
        revenue: "400 Cr+",
        employees: "250",
        location: "(Gurgaon, Haryana, India)",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Energy Expert Sevcon Embraced Technology to Fuel Growth and Power Productivity with SAP Business One®",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Professional Services",
        revenue: "20 Cr",
        employees: "30",
        location: "(Nehru Place, Delhi, India)",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Fujikura Kasei Coating Painted a New Route to Success with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Manufacturing",
        revenue: "25 cr",
        employees: "25+",
        location: "(Haryana)",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Bakers Circle Accelerated its Production & Distribution Processes with SAP Business One®",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        industry: "Wholesale Distribution",
        revenue: "~100cr",
        employees: "~300",
        location: "Jasola, Delhi, India",
        href: "#",
        download: { href: "#" },
      },
    ],
  },

  // TODO: no dedicated underwater/coral photography exists in the project —
  // reusing the CTASection background already established for this design
  // system.
  moreQuestions: {
    title: "Ready to Connect Your Entire SAP Ecosystem?",
    description: "Let our experts show you a full proof of concept (POC) for SAP Business One integration services.",
    button: { label: "Request Demo", href: "#" },
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-dark) 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
