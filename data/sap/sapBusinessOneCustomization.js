// Content for /sap/business-one/customization ("SAP Business One
// Customization"). Reuses the exact same section components as
// sapSolutions.js / sapServices.js / sapSupport.js / sapPractices.js /
// sapBusinessOne.js / sapBusinessOneImplementation.js — only this sibling
// data file differs.

export const sapBusinessOneCustomization = {
  // TODO: no dedicated "team celebrating on a summit" hero photo exists in
  // the project yet — reusing the same small pool of adventure photography
  // already established across every SAP page in this project.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-1.png",
    align: "right",
    title: "Avant-grade Business Specific Solution with SAP Customization",
    button: { label: "Request A Demo", href: "#" },
  },

  intro: {
    imagePosition: "right",
    verticalAlign: "start",
    image: "/assets/image2/SAP-Services-3.png",
    imageAlt: "Climber ascending a rock face",
    background: "linear-gradient(120deg, #eaf5ee 0%, #ffffff 60%)",
    title: "Get SAP Customization for YOUR enterprise: Avail 12+ Tailored Add-Ons",
    description: [
      "Why should your business adapt to the SAP software? Ideally, the system is designed to meet the unique needs of YOUR business. As your strategic SAP partner, Ayushman Solution crafts custom ERP solutions that don't just function but fit your needs precisely. We offer SAP ERP customization solutions in the form of tailored add-ons. These tailored products are ready for acquisition, designed to align with the precise demands of your business operations.",
      "Our adept team invests the effort to thoroughly grasp your industry, workflows, and expansion goals. We are committed to comprehensively assessing your distinct business prerequisites and tailoring SAP customization accordingly. Our aim is to refine the essence of your business by providing ERP customization services that operate with optimum effectiveness and efficiency.",
    ],
    advantagesTitle: "How we do it?",
    advantages: [
      {
        icon: "boxes",
        title: "Build & Implement",
        description: "Develop the solution as per the documented business requirements.",
      },
      {
        icon: "puzzle",
        title: "Transition & Support",
        description: "Give a complete lifecycle support from design to implementation to enhancements.",
      },
    ],
    buttons: [
      { label: "Request Demo", href: "#", variant: "primary" },
      { label: "Explore Add-Ons", href: "#", variant: "outline" },
    ],
  },

  awards: {
    title: "Ayushman Solution is your trusted partner for SAP Business One and S4/HANA Cloud",
    description: "We're consistently honored by SAP as the best SAP Business One and S4/HANA Cloud Partner in India and APJ region.",
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

  extendsToIntro: {
    title: "Our SAP Customization Extends to",
  },

  // TODO: no dedicated photography exists for these two rows yet — reusing
  // already-established real assets from elsewhere in the design system.
  extendsToRows: [
    {
      imagePosition: "left",
      image: "/assets/image2/solution-products-img-1.webp",
      imageAlt: "Colleagues reviewing a SAP customization plan at a cafe table",
      title: "SAP Business One Customization",
      description:
        "For SAP Business One, we tailor solutions that seamlessly integrate with your existing framework, ensuring a harmonized and efficient workflow. Whether it's custom modules, apps, or reports, our SAP customization services are designed to elevate your business processes and drive cost efficiency. To know more about SAP Business One customization or request a SAP Business One customization quote, reach out to team Ayushman Solution.",
      buttons: [
        { label: "SAP Business One", href: "/sap/business-one", variant: "primary" },
        { label: "Get Pricing", href: "#", variant: "outline" },
      ],
    },
    {
      imagePosition: "right",
      image: "/assets/image2/solution-products-img-2.webp",
      imageAlt: "Colleagues discussing a SAP S/4HANA Cloud customization roadmap",
      title: "SAP S/4HANA Cloud ERP Customization Services",
      description:
        "When it comes to SAP S/4HANA Cloud, we offer a suite of SAP ERP customization services geared towards maximizing the potential of this powerful platform. Our team specializes SAP software customization service, including tailoring modules like SAP MM, SAP SD, and SAP PP. These adaptations are meticulously designed to align with your unique business requirements, empowering you to unlock the full capabilities of customization in SAP.",
      buttons: [
        { label: "SAP S/4HANA Cloud", href: "/sap/solutions", variant: "primary" },
        { label: "Get Pricing", href: "#", variant: "outline" },
      ],
    },
  ],

  // TODO: real client logo image assets aren't available yet — rendered as
  // plain text marks (see ClientsSection.jsx) until real logo files exist,
  // reusing the exact same client list already established in
  // sapBusinessOne.js / sapBusinessOneImplementation.js.
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
      "NASSCOM",
      "DealShare",
      "ACRO Engineering",
      "CARS24",
      "Bharat Petroleum",
      "esri",
      "Clearpack",
      "ColdEX",
      "DADA Motors",
      "FixDerma",
      "Miller Fasteners",
      "Prakash Pipes Limited",
      "Raj Overseas",
      "inshorts",
      "JCB",
      "Verka",
      "ZEE",
      "Select CityWalk",
      "Rajasthan Liquors Ltd.",
      "RMX Industries",
    ],
  },

  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established real assets from elsewhere in the design system.
  customizationServices: {
    title: "Our SAP Customization Services",
    items: [
      {
        label: "Custom Development",
        description: "Purpose-built modules and apps written from scratch to match a workflow SAP doesn't cover out of the box.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        label: "Customizing Standard SAP Functionality",
        description: "Extend and adapt existing SAP modules so they mirror how your business actually operates.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        label: "Enhancements",
        description: "Incremental improvements layered onto your current SAP landscape without disrupting what already works.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        label: "User Interface Customizations",
        description: "Simplified, role-based screens that cut clicks and training time for every user.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Reports Customization in SAP",
        description: "Purpose-built reports and dashboards that surface exactly the numbers your teams need.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#",
      },
      {
        label: "Enhanced System Functionality",
        description: "Bridge gaps between SAP and your broader tech stack with tailored integrations and logic.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
    ],
  },

  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News & Articles",
    action: { label: "Find Out More", href: "#" },
    items: [
      {
        date: "05 Dec 2023",
        title: "10 Challenges and Strategies in SAP S/4HANA Implementation",
        source: "TechMagazines",
        background: "#0a0a0a",
        href: "#",
      },
      {
        date: "01 Sep 2021",
        title: "The SME and the SAP Business One Difference",
        source: "TechWire Asia",
        background: "#0a0a0a",
        href: "#",
      },
      {
        date: "24 May 2024",
        title: "Ayushman Solution Embarks on SAP NOW 2024's Mission: Showcases Indian Businesses the SAP S/4HANA Cloud Pathway to Global...",
        source: "Deccan Herald",
        background: "#127877",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Find Out More", href: "#" },
    items: [
      {
        date: "08 Oct 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest...",
        description: "Ensuring consistent quality management is crucial for enhancing customer relationships, building lasting trust.",
        image: "/assets/image2/SAP-Services-1.png",
        href: "#",
      },
      {
        date: "16 Sep 2025",
        title: "Understanding AI in SAP Business One: A Complete...",
        description: "The integration of AI in SAP has been a game-changer for manufacturers looking to automate routine decisions.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "25 Aug 2025",
        title: "How SAP S/4HANA Finance Is Redefining Financial Management...",
        description: "If you think financial management is still all spreadsheets and slow month-end closes, it's time for an update.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "#",
      },
    ],
  },

  // TODO: Mankind Pharma / Standard-to-Stellar reused from sapSolutions.js's
  // existing asset set; Lahori Zeera reuses the exact banner-style entry
  // already established in sapSolutions.js stories data.
  caseStudies: {
    title: "Case Studies",
    action: { label: "Find Out More", href: "#" },
    items: [
      {
        title: "Mankind Pharma Managed BMR/BPR and Inventory with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Pharmaceuticals",
        revenue: "5,000 Cr+",
        employees: "10,000+",
        location: "(Ponta Saheb, Punjab)",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0e7a3e 0%,#3fbf72 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Lahori Zeera Transform Their Journey With Ayushman Solution",
        personName: "Saurabh Munjal",
        personRole: "Co-Founder & CEO Archian Foods Pvt Ltd",
        title: "Lahori Zeera adds 'Tech Tang' to its Zingy Beverage Brand with Ayushman Solution x SAP Platinum Partner",
        industry: "Food & Beverage",
        revenue: "—",
        employees: "—",
        location: "—",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Standard to Stellar: Leading Industrial Machinery and Concrete Company Unleashes SAP ECC 6.0 for Reporting and Process Brilliance",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        industry: "Industrial Machinery and Components",
        revenue: "—",
        employees: "200+",
        location: "Bangalore, Karnataka",
        href: "#",
      },
    ],
  },

  // TODO: no underwater/coral photography exists in the project — reusing
  // the CTASection background already established for this design system.
  moreQuestions: {
    title: "Now, SAP ERP will Operate According to You!",
    description: "Let our experts show you full proof of concept (POC) for SAP customization services.",
    button: { label: "Request Demo", href: "#" },
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, var(--sap-blue) 0%, #4aa3e8 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
