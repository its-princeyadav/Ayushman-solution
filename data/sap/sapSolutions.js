// Content for /sap/solutions ("SAP Solutions"). Every other SAP page (Services,
// Support, Practices, Business One) reuses the exact same section components;
// only a sibling data file like this one changes.

export const sapSolutions = {
  // TODO: swap for the real "hiker in misty forest" photo — no matching asset
  // exists in public/assets/image2 yet, so this temporarily reuses the RISE
  // banner image purely as a placeholder.
  hero: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    title: "Let your business thrive with SAP Solutions",
    button: { label: "Request A Demo", href: "#" },
  },

  s4hanaIntro: {
    imagePosition: "right",
    imageStyle: "bleed",
    title: "SAP S/4HANA Cloud\nKey to Intelligent Enterprise",
    description: [
      "Building and maintaining a thriving enterprise requires agility, insights, and ability to act. When the digital world is changing so dynamically, your business needs intelligent solutions to provide value-driven services and greater standards of customer experience.",
      "SAP S/4HANA Cloud is a new-age ERP solution driven by AI and analytics that makes it easier to run mission-critical operations. Its ability to dynamically adapt to real-time changes and render intelligent automation empowers you to build an intelligent enterprise. As a SAP solutions company, Ayushman Solution helps you unlock higher levels of business performance, develop innovative solutions that transform industries, and gain total transparency across all operations.",
    ],
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Person flying a drone on a mountain ridge",
    background: "linear-gradient(120deg, #e9f5ec 0%, #ffffff 45%)",
  },

  // TODO: trophy asset reused from the awards blog thumbnail — swap for the
  // dedicated "Recognized by SAP" trophy photo once available.
  timeline: {
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

  // TODO: no beach/surf photography exists in the project yet — swap these
  // for the real SAP S/4HANA public/private edition images.
  cloudEditions: {
    heading: "Cloud SAP Software Solutions\nTailored For Your Business",
    background: "linear-gradient(120deg, #fdf6ea 0%, #ffffff 40%)",
    public: {
      imagePosition: "left",
      title: "SAP S/4HANA Cloud",
      titleAccent: "public edition",
      description: "A ready-to-run ERP to tackle top business priorities and deliver continuous innovation.",
      bullets: ["Automated and continual updates", "Proven best practices", "Secure, scalable, and compliant"],
      button: { label: "Explore SAP S4/HANA Cloud", href: "#" },
      image: "/assets/image2/sap-public-edition.jpg",
      imageAlt: "Group carrying surfboards to the shore",
    },
    private: {
      imagePosition: "right",
      title: "SAP S/4HANA Cloud",
      titleAccent: "private edition",
      description: "A tailored-to-fit cloud ERP to run unique business requirements and roll out innovations.",
      bullets: ["Innovation at your pace", "Lower TOC", "Streamlined operations and support"],
      image: "/assets/image2/sap-private-edition.jpg",
      imageAlt: "Surfer riding a wave",
    },
  },

  whoNeedsIt: {
    title: "Who Needs It?",
    description:
      "SAP S/4HANA Cloud is best suited for organizations with 1800+ employees and businesses that want to create innovative business models globally. The public edition is intended for larger enterprises running SAP on-premise systems. The private edition works best for companies that need a system conversion or a selective data transition.",
    buttons: [
      { label: "Learn More", href: "#", variant: "primary" },
      { label: "Let's Talk", href: "#", variant: "outline" },
    ],
  },

  empowering: {
    title: "Empowering Businesses\nto Take Giant Strides",
    description:
      "Whether it's enterprise transformation or running business-critical operations, SAP solutions company Ayushman Solution has the capabilities to provide value-driven solutions. With a collaborative approach combined with a passion for digital engineering, we enable businesses to drive revenue generation, achieve greater efficiency, and deliver intuitive customer experiences with SAP software solutions.",
    stats: [
      { icon: "handshake", value: "#1 SAP", label: "Platinum Partner" },
      { icon: "certificate", value: "600+", label: "Certified Consultants" },
      { icon: "puzzle", value: "25+", label: "Industry Packages" },
      { icon: "lightbulb", value: "1200+", label: "Implementations" },
    ],
    buttons: [{ label: "Let's Talk", href: "#", variant: "primary" }],
  },

  // TODO: no butterfly/metamorphosis photography exists in the project yet —
  // swap for the real Digital Transformation image.
  digitalTransformation: {
    background: "linear-gradient(120deg, #dff2e6 0%, #f4fbf6 60%)",
    intro: {
      imagePosition: "right",
      imageStyle: "bleed",
      title: "Digital Transformation",
      description: [
        "Managing your growing business with legacy software means more hassles and inefficiencies. And when your business takes flight, it deserves an intuitive and intelligent software solution that will propel it in the right direction. Thus, collaborating with the right SAP Business One partner becomes essential.",
        "SAP Business One is a sophisticated ERP solution to streamline operations effectively and deliver high levels of customer satisfaction. It is a feature-rich ERP solution to help you in accounting, finance, purchasing, inventory, and more, driven by data-driven insights and real-time information.",
      ],
      image: "/assets/image2/digital-transformation-butterfly.jpg",
      imageAlt: "Monarch butterflies emerging from chrysalises",
    },
    stats: [
      { icon: "rocket", label: "Quick Deployment" },
      { icon: "chart", label: "Personalized Dashboards" },
      { icon: "cloud", label: "Enterprise Cloud Security" },
      { icon: "briefcase", label: "Integrated Business Processes" },
    ],
  },

  enhancedAdoption: {
    title: "Enhanced User Adoption: Our Promise",
    description:
      "Partnering with a SAP solutions company does not just mean having an implementation team. It means a team that goes the extra mile to help your business adopt the SAP solution completely. Ayushman Solution prioritizes user experience in our SAP solutions. This boosts user acceptance and drives adoption across your organization. At Ayushman Solution, we excel in guiding companies through seamless SAP user adoption strategies. Our technical expertise ensures that your organization harnesses the full potential of SAP solutions. We specialize in creating intuitive interfaces, providing comprehensive training, and implementing best practices, all designed to maximize user acceptance and amplify the benefits of your SAP investment. With our tailored approach, your team will not only embrace SAP cloud solutions with confidence but also unlock its capabilities to achieve optimal business outcomes.",
    buttons: [
      { label: "Let's Talk", href: "#", variant: "primary" },
      { label: "Explore SAP Services", href: "#", variant: "outline" },
    ],
  },

  // TODO: no photography for these six tiles exists in the project yet.
  functionalityGrid: {
    title: "SAP Business One Add-on Functionalities",
    items: [
      { label: "Finance and accounting", image: "/assets/image2/functionality-finance.jpg", href: "#" },
      { label: "Sourcing, procurement and purchasing", image: "/assets/image2/functionality-procurement.jpg", href: "#" },
      { label: "Supply chain and distribution", image: "/assets/image2/functionality-supply-chain.jpg", href: "#" },
      { label: "Operations and inventory", image: "/assets/image2/functionality-operations.jpg", href: "#" },
      { label: "Production and pricing", image: "/assets/image2/functionality-production.jpg", href: "#" },
      { label: "Sales and services", image: "/assets/image2/functionality-sales.jpg", href: "#" },
    ],
  },

  // TODO: no individual industry photography exists in the project yet.
  industries: {
    title: "Trusted By Leading Industries",
    center: {
      logo: "/assets/images/Latets-Logo.png",
      subLabel: "13+ other industries",
      top: 34,
      left: 50,
    },
    items: [
      { label: "Trading", image: "/assets/image2/industry-trading.jpg", top: 18, left: 24, href: "/industries" },
      {
        label: "Professional Services",
        image: "/assets/image2/industry-professional-services.jpg",
        top: 18,
        left: 76,
        href: "/industries",
      },
      { label: "Pharma", image: "/assets/image2/industry-pharma.jpg", top: 66, left: 14, href: "/industries" },
      { label: "Automotive", image: "/assets/image2/industry-automotive.jpg", top: 80, left: 50, href: "/industries" },
      {
        label: "Manufacturing",
        image: "/assets/image2/industry-manufacturing.jpg",
        top: 66,
        left: 86,
        href: "/industries",
      },
    ],
    buttons: [
      { label: "Learn More", href: "/industries", variant: "primary" },
      { label: "Let's Talk", href: "#", variant: "outline" },
    ],
  },

  benefits: {
    title:
      "Many Vendors. Ayushman Solution's SAP Software Solutions Give Your Business The Upper Hand",
    features: [
      {
        title: "Significantly Reduced Transaction Processing Time",
        description:
          "Our SAP solutions optimize processes, ensuring quicker execution and streamlined workflows.",
      },
      {
        title: "Minimized Manual Errors in SAP Data Processing",
        description:
          "Our SAP software solutions integrate intelligent automation to drastically reduce the risk of manual data entry errors, ensuring impeccable data accuracy.",
      },
      {
        title: "Strengthened Validation Processes",
        description:
          "Our SAP solutions feature robust validation mechanisms that enforce data consistency and compliance with business rules, enhancing the dependability of your processes.",
      },
    ],
  },

  testimonials: {
    title: "Keeping Enterprises Ahead",
    description: "See what our clients have to say",
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
        name: "Pramod Gokhale",
        designation: "General Manager",
        company: "Mankind Pharma",
        background: "linear-gradient(135deg,#0b3d91 0%,#1e73e8 100%)",
        videoUrl: "#",
      },
      {
        name: "Customer Success Story",
        designation: "How Coldex Built Their",
        company: "L.I.V.E. Enterprise with Ayushman Solution",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        videoUrl: "#",
      },
      {
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
        background: "linear-gradient(135deg,#14304f 0%,#274972 100%)",
        videoUrl: "#",
      },
      {
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
        background: "linear-gradient(135deg,#1c5aa6 0%,#5aa9e6 100%)",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote:
          "Ayushman Solution helped us modernize our SAP landscape without disrupting day-to-day operations — the transition was smooth from day one.",
        name: "Pramod Gokhale",
        designation: "General Manager",
        company: "Mankind Pharma",
      },
      {
        quote:
          "The team's SAP expertise and responsiveness gave us the confidence to go live on schedule.",
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
      },
      {
        quote:
          "From planning to go-live, Ayushman Solution felt like an extension of our own team.",
        name: "A.K Mishra",
        designation: "GM (PSPM)",
        company: "UMSL",
      },
    ],
  },

  cta: {
    title: "Rise with Ayushman Solution",
    button: { label: "Connect With Us", href: "#" },
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  news: {
    eyebrowTitle: "Read Our Latest Insights",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "24 May 2024",
        title:
          "Ayushman Solution Presents Cutting-edge SAP S/4HANA Cloud Solutions Portfolio at SAP NOW India 2024",
        source: "BUSINESS INSIDER",
        background: "#0a0a0a",
        href: "#",
      },
      {
        date: "24 May 2024",
        title:
          "Ayushman Solution Embarks on SAP NOW 2024's Mission: Showcases Indian Businesses the SAP S/4HANA Cloud Pathway to Global...",
        source: "Deccan Herald",
        background: "#127877",
        href: "#",
      },
      {
        date: "24 May 2024",
        title:
          "Ayushman Solution Presents Broad SAP S/4HANA Cloud Solutions Portfolio at SAP NOW India 2024",
        source: "newsX",
        background: "#e0242c",
        href: "#",
      },
      {
        date: "20 Mar 2024",
        title: "Ayushman Solution Scoops Two Top Awards at SAP Partner Summit 2024, Singapore",
        image: "/assets/image2/awards.webp",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "Blogs",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "09 May 2025",
        title: "Are You Testing Your SAP S/4HANA Cloud Projects...",
        description:
          "Ensuring reliable, error-free SAP S/4HANA Cloud rollouts starts with rigorous testing across every business process.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description:
          "Consistent SAP support helps businesses maximize their SAP integration and get the most from every module.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "10 Mar 2025",
        title: "S/4HANA Cloud 2025: UX Enhancements That Are Taking...",
        description:
          "Cloud technology has seen massive technological advancements enabling even the most complex enterprise workflows.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "#",
      },
      {
        date: "08 Feb 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest...",
        description:
          "Ensuring consistent quality management is crucial for enhancing customer relationships, building lasting trust.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "#",
      },
    ],
  },

  stories: {
    title: "Want to know more about SAP?",
    description: "Explore to dig deep to see how we help you build intelligent enterprises.",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        bannerColor: "linear-gradient(135deg,#1c3a5e 0%,#2e6fc4 100%)",
        headline: "Sharika Life Science Transformation And Automation Journey With Ayushman Solution",
        personName: "Anil Bali",
        personRole: "Founder & CEO At Sharika Life Science Ltd.",
        title: "Unveiling Innovation in Pharma: Sharika Life Science Limited's SAP Success Story",
        industry: "Pharma",
        revenue: "—",
        employees: "—",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        headline: "Fixderma Transformation And Automation Journey With Ayushman Solution",
        personName: "Shaily Mehrotra",
        personRole: "CEO & Founder, Fix Derma",
        title: "Fixing Fix Derma's Digital Transformation Challenges | A Customer Success Story",
        industry: "Skincare",
        revenue: "100 Cr+",
        employees: "—",
        location: "Gururgram, Haryana, India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#123a63 0%,#3f7fd1 100%)",
        headline: "Inshorts Transformation And Automation Journey With Ayushman Solution",
        personName: "Abhishek Bakshi",
        personRole: "GM - Finance/Inshorts",
        title: "Inshorts Goes Live with SAP ERP x Ayushman Solution I A Customer Success Story",
        industry: "News & Publishing",
        revenue: "180 Cr+",
        employees: "700+",
        location: "India",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0e5a3a 0%,#2f9e63 100%)",
        headline: "Lahori Zeera adds 'Tech Tang' to its Zingy Beverage Brand with Ayushman Solution",
        personName: "",
        personRole: "",
        title:
          "Lahori Zeera adds 'Tech Tang' to its Zingy Beverage Brand with Ayushman Solution x SAP Platinum Partner",
        industry: "Beverage",
        revenue: "INR 250 CR",
        employees: "4000+",
        location: "Punjab, India",
        href: "#",
      },
    ],
  },

  faq: {
    title: "FAQs",
    items: [
      {
        question:
          "Can SAP Business One be integrated with other solutions and is compatible with third-party systems?",
        answer:
          "Yes. SAP Business One is built with open APIs and a broad partner ecosystem, so it integrates cleanly with e-commerce platforms, CRM tools, banking systems, and other third-party applications your business already relies on.",
      },
      {
        question:
          "How Ayushman Solution helps in SAP S/4 Hana transformation and why it is the preferred SAP Software Solution partner?",
        answer:
          "As an SAP Platinum Partner through United VARs, Ayushman Solution brings deep implementation, migration, and managed-services experience to every SAP S/4HANA transformation, backed by industry-specific accelerators and a dedicated support team.",
      },
      {
        question: "What functionalities does SAP Business One offer?",
        answer:
          "SAP Business One covers financials, sales, purchasing, inventory, production, project management, and reporting in a single, integrated application built for small and midsize businesses.",
      },
      {
        question: "What are SAP cloud solutions?",
        answer:
          "SAP cloud solutions — including SAP S/4HANA Cloud and RISE with SAP — deliver the full power of SAP's ERP suite as a managed, subscription-based cloud service, reducing infrastructure overhead while keeping your business on the latest innovations.",
      },
      {
        question: "Why current SAP users should migrate to SAP S/4HANA?",
        answer:
          "SAP S/4HANA offers real-time analytics, a modern user experience, and continued innovation and support, while SAP's traditional ECC platform is being phased out of mainstream maintenance.",
      },
      {
        question: "Why is SAP so famous?",
        answer:
          "SAP is trusted by enterprises worldwide for its ability to unify finance, operations, and customer data into one reliable system of record, backed by decades of industry-specific best practices.",
      },
      {
        question: "What are the feature & implementation benefits of SAP S/4HANA?",
        answer:
          "Benefits include a simplified data model, real-time reporting via SAP Fiori, embedded analytics, and faster, cleaner implementations compared to legacy ERP systems.",
      },
      {
        question: "Who can use SAP software?",
        answer:
          "SAP software scales from small and midsize businesses using SAP Business One to large global enterprises running SAP S/4HANA, across virtually every industry.",
      },
    ],
  },
};
