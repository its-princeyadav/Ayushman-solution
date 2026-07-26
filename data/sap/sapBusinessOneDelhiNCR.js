// Content for /erp/erp-software-delhi-ncr ("SAP Business One Delhi NCR").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from) and sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js (the
// other city pages in this family) — reuses the exact same section
// components as every other data/sap/*.js page, only this file's content
// differs. Page-scoped rebrand (navy heading / yellow accent) matches
// SapNearYou.module.css since this is a direct city-page sibling of that
// listing.

export const sapBusinessOneDelhiNCR = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/banner-sap-migration.webp",
    align: "right",
    textTheme: "light",
    title: "Leading SAP Business One Partners in Delhi NCR: Transforming Business Efficiency",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Automate Your Business with the Top ERP Company in Delhi NCR",
    paragraphs: [
      "Recognized as one of the premier providers of the best ERP software in Delhi NCR, Ayushman Solution stands as one of Asia's #1 SAP Business One partners and one of the top SAP Business One partners in Delhi NCR. We can help you attain significant business value through SAP Business One services across the Delhi NCR region, including Faridabad, Gurgaon, Noida, and Ghaziabad.",
    ],
  },

  // TODO: no dedicated "two professionals" photography exists in the project
  // yet — reusing an already-established real asset from elsewhere in the
  // design system.
  whyChooseSap: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Why Choose SAP Business One as Your Preferred ERP Solution?",
    description: [
      "Designed and priced for SMBs, SAP Business One is a comprehensive software solution that enables businesses to adapt and innovate in today's competitive landscape. It is ideal for small, mid-sized, and leading organizations, helping them manage key business functions such as finance, inventory, logistics, accounting, sales, human resources, customer relationship management, and more.",
      "With industry-specific functionality that spans a wide range of sectors, SAP Business One meets the needs of modern users by automating essential business tasks, enhancing agility, transparency, and efficiency in the workplace. Bring order to your operations and manage everything from inventory tracking to formula management and expiry date management with the help of one of the top SAP Business One partners in Delhi NCR.",
      "Additionally, reduce costs significantly — by up to 80% — by transitioning to a cloud ERP solution. Consult the top ERP software company in Delhi NCR and prepare your business for tomorrow's challenges today.",
    ],
    advantagesTitle: "Customized ERP Solutions for Every Industry",
    advantages: [
      {
        icon: "boxes",
        title: "Dairy",
        description: "End-to-end batch tracking, expiry management, and quality control built for dairy production and distribution.",
      },
      {
        icon: "store",
        title: "Food & Service",
        description: "Streamlined recipe management, inventory control, and compliance tracking for food and service businesses.",
      },
    ],
    buttons: [
      { label: "Know More", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Request Demo", href: "#", variant: "migrationOutline" },
    ],
  },

  whyDelhiNcr: {
    title: "Why Choose Ayushman Solution as the best ERP software company in Delhi NCR?",
    description:
      "Ayushman Solution is a CMMI level 5 company having 11+ years of experience in the SAP Business One vertical. Having a rich history of servicing clients across 18+ verticals, we are one of the best ERP companies in Delhi NCR to service all your SAP Business One requirements seamlessly. We help you move your business to the cloud and gain value faster through the unmatched power of SAP Business One with Ayushman Solution.",
    buttons: [{ label: "Book A Call", href: "#", variant: "migrationPrimary" }],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneAhmedabad.js / sapBusinessOneMumbai.js's
  // own award timeline — same established SAP Partner Award history already
  // used across this module.
  timeline: {
    title: "Ayushman Solution is your trusted ERP software company in Delhi NCR",
    description: "We're honored to be recognized by SAP as one of the leading ERP software companies in Delhi NCR.",
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

  capability: {
    title: "Ayushman Solution Capabilities",
    description: "Ayushman Solution is a CMMI Level 5 company having 11+ years of experience in the SAP B1 vertical",
    items: [
      { icon: "handshake", value: "#1", label: "SAP Platinum Partner" },
      { icon: "rocket", value: "1000+", label: "Implementation" },
      { icon: "briefcase", value: "300+", label: "SAP Consultants" },
      { icon: "certificate", value: "75+", label: "Channel Partners" },
      { icon: "location", value: "20+", label: "Cities Presence" },
      { icon: "chart", value: "21+", label: "Industries" },
      { icon: "puzzle", value: "12+", label: "Add-Ons" },
      { icon: "lightbulb", value: "24/7", label: "Support" },
    ],
    buttons: [
      { label: "Get Quote", href: "#", variant: "migrationPrimary" },
      { label: "Connect With Us", href: "#", variant: "migrationOutline" },
    ],
  },

  // Client wall mixes real logo assets already available in the project
  // (public/assets/image2/) with plain text marks for the handful of clients
  // that don't have a dedicated logo file yet — same "no image available"
  // fallback convention already established for ClientsSection.
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
      { name: "BharatPe", logo: "/assets/image2/bharatpe.png" },
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      "DealShare",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      "King Koil",
      "Bakers Circle",
      "Acro Engineering",
      { name: "Addverb Technologies", logo: "/assets/image2/addverb-technologies.webp" },
      { name: "Aditya Birla Group", logo: "/assets/image2/aditya-nbirla-group.webp" },
      { name: "Ajax Fiori", logo: "/assets/image2/ajax-fiori.webp" },
      { name: "ColdEX", logo: "/assets/image2/coldex-logo-1.png" },
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      { name: "Global", logo: "/assets/image2/Global.png" },
      "Happy Farmer",
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      { name: "Kimberly-Clark", logo: "/assets/image2/kimberly-clark.webp" },
      { name: "L&T Construction & Mining Machinery", logo: "/assets/image2/lnt-construction.webp" },
      "Lahori Zeera",
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
    ],
  },

  services: {
    title: "Consult the Best SAP Business One Partners in Delhi/NCR",
    description: "As your trusted partner of choice, we ensure successful ERP implementation on time and within budget.",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "Clients make intelligent investment decisions, backed by the knowledge, expertise, and guidance of our expert SAP ERP consultants about procuring licenses, implementation strategy, and deployment.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation & Customization",
        description:
          "With 500+ SAP Business One implementations and expertise across multiple industries, we deliver successful ERP implementations using our proven implementation methodology.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Complete SQL to SAP HANA migration including assessment, planning, migration, testing, go-live, optimization, and post-go-live support.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description: "Statutory, compliance, and industry-specific SAP Business One add-ons developed by our in-house engineering team.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description: "Seamless upgrades for SAP Business One standard products and industry add-ons with minimum downtime.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Support",
        description:
          "Easily manage all your queries and requests with our 24/7 dedicated support portal. Our offshore and mixed models provide the best SAP Business One support, ensuring you stay calm and confident. As the leading provider of the best ERP software in Delhi NCR, we go the extra mile to meet your exact business needs.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ],
  },

  // Mobile app download links to be added; reusing the same adventure/outdoor
  // photography already established for full-bleed HeroBanner sections
  // elsewhere in this module.
  mobility: {
    backgroundImage: "/assets/image2/green-mountains.png",
    align: "left",
    textTheme: "light",
    title: "SAP Business One Mobility Solutions",
    description: "Mobile app download links to be added here",
    buttons: [
      { label: "Download For iOS", href: "#", variant: "migrationOutline" },
      { label: "Download For Android", href: "#", variant: "migrationPrimary" },
    ],
  },

  // TODO: no dedicated photography exists for these four posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "10 Mar 2025",
        title: "S/4HANA Cloud 2025: UX Enhancements That Are Taking...",
        description: "Cloud technology has seen massive technological advancements enabling even the most...",
        image: "/assets/image2/solution-products-img-2.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "08 Oct 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest...",
        description: "Ensuring consistent quality management is crucial for enhancing customer relationships, building...",
        image: "/assets/image2/SAP-Services-1.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "05 Feb 2025",
        title: "Understanding AI in SAP Business One: A Complete...",
        description: "The integration of AI in SAP has been a game-changer for...",
        image: "/assets/image2/SAP-Services-2.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // TODO: no dedicated photography exists for the Schell India / Agro-Chemical
  // case studies yet — reusing already-established real assets from elsewhere
  // in the design system. "Raj Overseas" reuses the same client name already
  // established in sapBusinessOneAhmedabad.js's client wall, and the banner
  // card follows the exact same pattern already established for Inshorts in
  // sapBusinessOneAhmedabad.js.
  caseStudies: {
    title: "Case Studies",
    items: [
      {
        bannerColor: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Raj Overseas Transformation and Automation Journey with Ayushman Solution",
        personName: "Shailin Smith",
        personRole: "CEO, Raj Overseas",
        title: "Weaving Raj Overseas' Operations Together with SAP ERP | A Success Story",
        industry: "Yarn Spinning & Carpet Weaving",
        revenue: "27 Cr+",
        employees: "600+",
        location: "Delhi, India",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "Schell India Integrated all Business Functions and Laid the Foundation of its Indian Subsidiary with SAP Business One®",
        image: "/assets/image2/SAP-Services-2.png",
        industry: "Wholesale Distribution, Manufacturing",
        revenue: "1500 Cr+",
        employees: "20",
        location: "Delhi NCR, India",
        href: "#",
      },
      {
        title: "Agro-Chemical Enterprise Achieved Better Demand and Production Forecasting with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Agro-Chemical",
        revenue: "100 Cr+",
        employees: "10,000+",
        location: "Gurugram, Haryana, India",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Consult the Best SAP Implementation Companies in Delhi/NCR",
    description: "We are your trusted partner of choice who can carry out the successful ERP implementation in time and budget.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "FAQs",
    items: [
      {
        question: "Are there SAP partners in Delhi NCR?",
        answer:
          "Yes. Ayushman Solution maintains an on-ground team serving Delhi NCR, including Faridabad, Gurgaon, Noida, and Ghaziabad, offering local implementation, consulting, and support expertise.",
      },
      {
        question: "Is SAP ERP appropriate for my small and mid-sized businesses located in Delhi NCR?",
        answer:
          "Absolutely. SAP Business One is purpose-built and priced for SMBs, giving small and mid-sized businesses in Delhi NCR the same enterprise-grade finance, inventory, and CRM capabilities used by larger organizations.",
      },
      {
        question: "Can I customize SAP ERP for my industry-specific requirements?",
        answer:
          "Yes. With 12+ industry-specific add-ons and 18+ industry vertical expertise, we tailor SAP Business One to the exact workflows of your industry, from manufacturing to distribution to services.",
      },
      {
        question: "What is the cost of implementing SAP ERP in Delhi NCR?",
        answer:
          "Implementation cost depends on your license count, modules, add-ons, and customization scope. Book a call with our SAP consultants for a tailored quote based on your business requirements.",
      },
      {
        question: "What types of post-implementation support will I receive from SAP Partners located in Delhi NCR?",
        answer:
          "Ayushman Solution offers 24/7 support through onshore, offshore, and hybrid engagement models, backed by a dedicated support portal for ticketing, remote assistance, and on-site visits whenever required.",
      },
      {
        question: "Can SAP ERP integrate with other business software?",
        answer:
          "Yes. SAP Business One integrates with e-commerce platforms, payment gateways, CRM, analytics, and statutory compliance tools such as E-way Bill, GST Reports, and E-Invoicing through our in-house add-ons.",
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
