// Content for /sap/consulting ("SAP Consulting Services"). Reuses the exact
// same section components as sapBusinessOne.js / sapBusinessOneLicense.js /
// sapBusinessOneMigration.js — only this sibling data file differs. Button
// variant "consultingPrimary" is an additive, page-scoped brand variant that
// only this page references — see components/Sap-pages/SapConsulting.module.css
// for the page-scoped color/spacing token overrides that pair with it.

export const sapConsulting = {
  // TODO: no dedicated "hiker overlooking snowy peaks" photo exists in the
  // project yet — reusing the same hiker/adventure photography already
  // established across this design system (proven safe for full-bleed hero).
  hero: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    textTheme: "light",
    title: "600+ Certified Experts Offering SAP Consulting Services",
    button: { label: "Request A Demo", href: "#", variant: "consultingPrimary" },
  },

  intro: {
    title: "Align Your Enterprise Architecture Today with SAP Consulting Services.",
    paragraphs: [
      "You are not planning SAP for immediate gains. You want your system to work for the next 5-10-15 years. But, you sure want to get your team adapted to it and reap the benefits as soon as possible. What's more, you don't want it to take forever to deploy the system, opt for unnecessary customizations, constant upgrades, or worse, think of re-implementation. No, we are not giving you your worst ERP nightmare. We're just reiterating the importance of SAP consultancy services in helping your business build a stable, robust and customized ERP system to fit your needs, abandoning yourself from taking on ad-hoc risks that come in the way of new technology, growth and innovation.",
      "Make your SAP system the foundation for new business innovation with Ayushman Solution's pre-planned, time-tested SAP consulting services. Extend the life of your SAP software up to 10-15 years to achieve top and bottom-line growth. At Ayushman Solution, we help you design a long-term ERP roadmap that aligns with your goals. Our seasoned SAP experts deliver vendor-agnostic strategy, uncover cost efficiencies, and build a smart path to modernization at your pace. Time to fast-track your SAP success with Ayushman Solution's SAP consultancy services!",
    ],
  },

  introCards: {
    features: [
      {
        title: "AI-era SAP Consulting",
        description: "Scale your SAP transformation project with AI adoption agility, so you can attain optimum performance and ROI.",
        variant: "pricing",
      },
      {
        title: "100% Innovation Acceleration",
        description:
          "Our SAP experts co-innovate to ensure competitive ERP differentiation as per your unique requirements and business optimization on your timeline.",
        variant: "pricing",
      },
      {
        title: "Sure-shot TCO Reduction",
        description:
          "Blueprint your ERP investment with SAP services consulting. Plan upgrades, compliance, compatibility, system functionality and more from stage 1, rather than incur added costs at every step.",
        variant: "pricing",
      },
    ],
    buttons: [{ label: "Talk To SAP Experts", href: "#", variant: "consultingPrimary" }],
  },

  overview: {
    title: "SAP Consultancy Services That Embed ERP in Your Digital Core And Truly Make You an Intelligent, L.I.V.E. Enterprise",
    description:
      "Only if you plan, can you build a real SAP-intelligent enterprise; otherwise, it will just be another system on the edge — requiring additional expertise and cost. Ayushman Solution's SAP consulting services ensure you carve a digital core and truly embed SAP in the heart of your business and the mindset of your people. We invest in tools and industry solutions to accelerate the business value of SAP, and all this starts with consulting. It's like the Google Map to reach the final destination. So, whether you are a small-medium business or a Fortune 500, our long-standing relationship with SAP that extends more than 30 years helps us to offer consulting that assures high-value, sustainable success.",
    subtitle: "Our Core SAP Consultancy Services",
    background: "linear-gradient(180deg, #fff8ea 0%, #ffffff 100%)",
  },

  coreServices: [
    {
      imagePosition: "left",
      title: "SAP Business One Consulting",
      description:
        "Consulting that fits the DNA of your business. We help you ideate, implement, and scale with speed, ensuring SAP Business One works exactly the way your operations need it to.",
      buttons: [
        { label: "Read more", href: "#", variant: "text" },
        { label: "SAP Business One", href: "/sap/business-one", variant: "consultingPrimary" },
        { label: "Get Expert Help", href: "#", variant: "outline" },
      ],
      image: "/assets/image2/city-05.webp",
      imageAlt: "Consultants collaborating in a modern office",
    },
    {
      imagePosition: "right",
      title: "SAP S/4HANA Cloud Consulting Services",
      description:
        "Improve time-to-market, lower the TCO of your SAP estate with Ayushman Solution's SAP consulting services in India. We uniquely tailor S/4HANA Cloud strategy to your industry and growth stage.",
      buttons: [
        { label: "Read more", href: "#", variant: "text" },
        { label: "SAP S/4HANA", href: "/sap/solutions", variant: "consultingPrimary" },
        { label: "Get Expert Help", href: "#", variant: "outline" },
      ],
      image: "/assets/image2/city-06.webp",
      imageAlt: "Consulting team discussing SAP S/4HANA strategy",
    },
  ],

  endToEnd: {
    title: "Activation to Value Realization\nUneecops Offers End-to-End SAP Consulting Services",
    description:
      "As India's #1 SAP consulting company, Ayushman Solution partners with SAP to drive client value, jointly co-innovating solutions, defining journey maps, and delivering on AI-powered transformations — future-proofing enterprises for the next 10-15 years. A look at our complete portfolio of SAP consulting services in India:",
    items: [
      {
        image: "/assets/image2/sap-migration-01.webp",
        label: "Strategy and Roadmap Services",
        description:
          "SAP Roadmap Planning and IT Strategy Alignment\nERP Readiness Assessment\nBusiness Process Assessment and Optimization\nVendor-Agnostic Advisory (Migration, Upgrade or Stay Options)",
        href: "#",
      },
      {
        image: "/assets/image2/sap-migration-02.webp",
        label: "Implementation and Deployment",
        description:
          "End-to-End SAP ERP Implementation\nSAP S/4HANA Implementation and Migration\nIndustry-Specific Solutions\nCloud, On-Premise and Hybrid Deployments",
        href: "#",
      },
      {
        image: "/assets/image2/sap-migration-03.webp",
        label: "Migration and Upgrade Services",
        description:
          "SAP ECC to S/4HANA Migration\nBrownfield Conversion\nGreenfield Implementation\nSelective Data Transition\nDatabase Migration",
        href: "#",
      },
      {
        image: "/assets/image2/banner-sap-migration.webp",
        label: "Analytics and Integration",
        description:
          "SAP Business Intelligence\nSAP Analytics Cloud\nSAP BTP Integration\nCustom Integrations\nMaster Data Governance",
        href: "#",
      },
      {
        image: "/assets/image2/modern-sap-migration.webp",
        label: "Innovation and Automation",
        description: "AI Use Cases\nMachine Learning\nRPA\nIoT\nWorkflow Automation",
        href: "#",
      },
      {
        image: "/assets/image2/drone-img.webp",
        label: "Application Management and Support (AMS)",
        description:
          "• Ongoing SAP Application Management\n• SAP Basis Administration and Monitoring\n• Performance Optimization\n• Custom Development and Enhancements\n• 24x7 Helpdesk and Incident Resolution",
        forceVisible: true,
        href: "#",
      },
      {
        image: "/assets/image2/solution-products-img-1.webp",
        label: "Advisory and Optimization",
        description:
          "SAP Licensing Optimization\nSecurity\nCompliance\nCustomization\nProcess Re-engineering",
        href: "#",
      },
      {
        image: "/assets/image2/solution-products-img-2.webp",
        label: "Specialized SAP Modules Consulting",
        description: "SAP FI/CO\nSAP MM\nSAP SD\nSAP PP\nSAP WM/EWM\nSAP CRM & CX",
        href: "#",
      },
    ],
  },

  methodology: {
    title: "A Unique 7-step 'CONSULT' Methodology for Providing Top-tier SAP Consulting Services in India",
    description:
      "Ayushman Solution's proprietary CONSULT methodology is our inimitable philosophy of delivering SAP consultancy services with clarity, control, and confidence. This distinct framework ensures ambitious enterprises can reclaim their SAP roadmap, modernize on their terms, and unlock tech transformation differentiation for the next decade and beyond.",
    steps: [
      {
        title: "C - 'Clarify' Business Objectives",
        description:
          "We start every engagement by clarifying what success actually looks like for your business, so every recommendation ties back to a measurable objective.",
      },
      {
        title: "O - 'Optimize' Current Landscape",
        description:
          "We assess your existing SAP and adjacent systems to uncover quick wins and structural gaps before recommending any change.",
      },
      {
        title: "N - 'Navigate' Vendor-Agnostic Options",
        description:
          "Whether the right path is to migrate, upgrade, or stay, we walk you through every option with an unbiased, vendor-agnostic lens.",
      },
      {
        title: "S - 'Streamline' Implementation and Migration",
        description:
          "We execute migrations and implementations with precision, leveraging accelerators to move you toward a composable, future-ready SAP ecosystem.",
      },
      {
        title: "U - 'Unlock' Continuous Optimization",
        description:
          "Consulting doesn't stop at go-live. We fine-tune performance, optimize licensing, and integrate emerging technologies so your SAP ecosystem keeps evolving with your business.",
      },
      {
        title: "L - 'Lead' with Unbiased Guidance, in Your 'Lingo'",
        description:
          "We recommend only what drives measurable outcomes, translating complex architectural and compliance decisions into simple narratives for Boards and CXOs.",
      },
      {
        title: "T - 'Transform' for the Long Term",
        description:
          "Every engagement ends with a roadmap, not just a report — a living plan your team can act on for years, not months.",
      },
    ],
  },

  testimonials: {
    title: "Client Success Stories",
    action: { label: "Know More", href: "#" },
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Himanshu Jain",
        designation: "CEO At ACRO Engineering",
        background: "linear-gradient(135deg,#1f7a4d 0%,#3fae7a 100%)",
        eyebrow: "Customer Success Story",
        headline: "ACRO Engineering Transformation & Automation Journey With Ayushman Solution",
        videoUrl: "#",
      },
      {
        name: "Gaurav Jain",
        designation: "Managing Director, ColdEX Group",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        eyebrow: "Customer Success Story",
        headline: "How ColdEX Built Their L.I.V.E. Enterprise With Ayushman Solution",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote:
          "Ayushman Solution's consulting-first approach meant every recommendation was tied to a measurable business outcome, not just a technical checkbox.",
        name: "Himanshu Jain",
        designation: "CEO",
        company: "ACRO Engineering",
      },
      {
        quote: "Their vendor-agnostic advisory gave us the confidence to choose the right SAP path for our growth stage.",
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
        date: "16 Sep 2025",
        title: "Understanding AI in SAP Business One: A Complete Guide",
        description: "The integration of AI in SAP has been a game-changer for...",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
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
    title: "Learn How Enhanced Engagements Are Reshaping Customer Experience",
    action: { label: "View All", href: "#" },
    items: [
      {
        bannerColor: "linear-gradient(135deg,#7fae2a 0%,#4d7a17 100%)",
        eyebrow: "Customer Success Story",
        headline: "Weaving Raj Group's Operations Together With SAP ERP",
        personName: "Shailin Smith",
        personRole: "CEO At Raj Groups",
        title: "Weaving Raj Group's Operations Together with SAP ERP | A Success Story",
        industry: "Yarn Spinning & Textiles",
        employees: "600+",
        revenue: "—",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#1c8fd1 0%,#0d4f82 100%)",
        eyebrow: "Customer Success Story",
        headline: "How ColdEX Built Their L.I.V.E. Enterprise With Ayushman Solution",
        personName: "Gaurav Jain",
        personRole: "Managing Director, ColdEX Group",
        title: "ColdEX Logistics Improved Supply Chain Management, Warehouse and Fulfillment Management with SAP Business One",
        industry: "Logistics",
        employees: "250",
        revenue: "—",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0d2c7d 0%,#123a63 100%)",
        eyebrow: "Customer Success Story",
        headline: "Fixderma Transformation and Automation Journey With Ayushman Solution",
        personName: "Shaily Mehrotra",
        personRole: "CEO & Founder, Fix Derma",
        title: "Fixing Fix Derma's Digital Transformation Challenges | A Customer Success Story",
        industry: "Skincare",
        employees: "—",
        revenue: "100 Cr+",
        location: "India",
        href: "#",
      },
    ],
  },

  // TODO: reusing the same office/meeting photo already established across
  // this design system for this closing CTA banner pattern.
  ctaBanner: {
    title: "Paint a Complete Picture In Your Mind. Before You Build the Complete Picture of Your Business with SAP.",
    description:
      "Ayushman Solution's business technology consulting and SAP consultancy services can help you make sense of it all, combining your diverse planning functions stepwise to create a wholesome picture that brings greater visibility, responsiveness and strategic value. As India's platinum partner and top SAP consulting company, we enable you to envision, plan, and implement transformative solutions.",
    button: { label: "Begin Transforming With SAP", href: "#", variant: "consultingPrimary" },
    backgroundImage: "/assets/image2/city-06.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions (FAQs)",
    items: [
      {
        question: "Why do I need a SAP consulting firm?",
        answer:
          "A SAP consulting firm brings vendor-agnostic strategy, industry benchmarks, and hands-on implementation experience that's hard to replicate in-house, reducing risk and accelerating time-to-value across your SAP journey.",
      },
      {
        question: "What all do Ayushman Solution's SAP consulting services include?",
        answer:
          "Our services span strategy and roadmap planning, implementation and deployment, migration and upgrades, analytics and integration, innovation and automation, application management and support, advisory and optimization, and specialized module consulting.",
      },
      {
        question: "How do SAP consultants add value if we already use SAP?",
        answer:
          "Even mature SAP landscapes accumulate technical debt, underused licenses, and missed automation opportunities. Our consultants continuously optimize performance, licensing, and processes long after go-live.",
      },
      {
        question: "Why should I choose Ayushman Solution for SAP services consulting?",
        answer:
          "With over 30 years of SAP partnership, 600+ certified experts, and our proprietary CONSULT methodology, we combine deep technical expertise with a vendor-agnostic, outcome-first approach.",
      },
      {
        question: "Can a SAP consulting company help us decide when to migrate to S/4HANA?",
        answer:
          "Yes — our Strategy and Roadmap Services include a vendor-agnostic assessment of migrate, upgrade, or stay options, so your S/4HANA timeline is driven by business readiness, not vendor pressure.",
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
