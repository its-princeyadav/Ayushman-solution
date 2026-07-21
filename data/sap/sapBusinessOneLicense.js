// Content for /sap/business-one/license ("SAP Business One License").
// Reuses the exact same section components as sapBusinessOne.js /
// sapBusinessOneImplementation.js / sapBusinessOneMigration.js — only this
// sibling data file differs. Button variant "licensePrimary" is an additive,
// page-scoped brand variant that only this page references — see
// components/Sap-pages/SapBusinessOneLicense.module.css for the page-scoped
// color/spacing token overrides that pair with it. FeatureCard's
// variant: "pricing" is the generic, shared pricing-card look also used by
// the Migration page.

export const sapBusinessOneLicense = {
  // TODO: no dedicated "hikers reading a map" photo exists in the project
  // yet — reusing the same hiker/adventure photography already established
  // across this design system (proven safe for full-bleed hero use).
  hero: {
    backgroundImage: "/assets/image2/sap-solution-banner.jpg",
    align: "right",
    textTheme: "dark",
    title: "SAP Business One Software Price: Tailored Pricing Structure for Your Business Needs",
    button: { label: "Request A Demo", href: "#", variant: "licensePrimary" },
  },

  intro: {
    title: "Discover Customized SAP Software Pricing Structure in India",
    paragraphs: [
      "We understand that SAP Business One cost varies based on factors such as company size, user count, data complexity, and integration needs. As your trusted SAP Business One license partner in India, we specialize in crafting personalized blueprints to map out the exact SAP Business One pricing for your organization.",
      "With over two decades of industry experience, we navigate you through the intricacies of SAP software price and licensing costs, considering factors like purchasing process, database options (HANA or SQL), hosting preferences (Cloud, On-Premises, Co-Located), and necessary maintenance and support. Whether you operate in manufacturing, retail, or any other sector, our tailored approach ensures that the SAP Business One cost remains within budget and that aligns perfectly with your unique business model and SAP pricing.",
      "Experience the difference with Ayushman Solution – where one size never fits all!",
    ],
    buttons: [
      { label: "Let's Talk", href: "#", variant: "licensePrimary" },
      { label: "SAP Solutions", href: "/sap/solutions", variant: "outline" },
    ],
  },

  // Folded into FeatureCard's existing icon + title + description + action
  // shape (same convention as sapBusinessOneImplementation.js's packages) —
  // "Subscription per month/year" and the "Includes:" list live inside
  // `description`. variant: "pricing" opts each card into the shared
  // pricing-card look (radius/shadow/hover-lift).
  packages: {
    title: "SAP Business One Pricing and Licenses Offered",
    features: [
      {
        icon: "boxes",
        title: "Basic Pack",
        description:
          "Subscription per month/year. A basic SAP license cost in India comes with efficient SAP pricing to gain greater control over the most critical business processes. Includes: Finance, CRM, Sales, Purchasing, Inventory, Bill of Materials, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#", variant: "licensePrimary" },
        variant: "pricing",
      },
      {
        icon: "puzzle",
        title: "Professional Pack",
        description:
          "Subscription per month/year. Get access to all modules, features along with software development kit and friendly SAP software license cost. Includes: Administration, Financials, CRM, Sales, Purchasing, Banking, Inventory, Production, MRP, Service, HR, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#", variant: "licensePrimary" },
        variant: "pricing",
      },
      {
        icon: "shield",
        title: "Financial User Pack",
        description:
          "Subscription per month/year. Seamlessly manage payroll, financials, sales aspects, and more with tailored SAP business one license and affordable SAP software price. Includes: Financials, Sales Aspects, Purchasing Aspects, Banking, Inventory Aspects, Production Aspects, Mobile.",
        action: { label: "Contact Us For Pricing", href: "#", variant: "licensePrimary" },
        variant: "pricing",
      },
    ],
  },

  licenseCost: {
    imagePosition: "right",
    theme: "dark",
    title: "Discover Versatile Modes of SAP Business One Price and License Cost in India",
    description:
      "Unleash the power of SAP software with our flexible SAP software license cost designed to accommodate your budget and timeline. At Ayushman Solution, we offer a range of attractive SAP Business One Licenses with ergonomic pricing models, allowing you to select the purchasing method that aligns perfectly with your needs. Dive into a world of possibilities and streamline your operations with ease!",
    advantages: [
      {
        title: "One Time Licenses",
        description:
          "Opt for upfront payment and secure a perpetual license that you'll own, providing long-term value and sense of security.",
      },
      {
        title: "Licenses as Subscription",
        description:
          "Our user-friendly SAP pricing model offers per-user, per-month rates and annual license subscription renewals for seamless operations.",
      },
    ],
    buttons: [
      { label: "Explore SAP Business One", href: "/sap/business-one", variant: "licensePrimary" },
      { label: "Explore ERP", href: "#", variant: "outline" },
    ],
    // Wide landscape photo, reused from the Migration page's business-intro
    // section — "bleed" crop holds the mountain vista without needing a
    // dedicated "two hikers with a map" asset, which doesn't exist yet.
    imageStyle: "bleed",
    image: "/assets/image2/green-mountains.png",
    imageAlt: "Hikers overlooking a misty mountain range",
  },

  awards: {
    title: "Ayushman Solution is your trusted SAP Business One Partner",
    description: "We're honored by SAP as the best SAP Business One Partner in India.",
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
      "NASSCOM",
      "King Koil",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      "Bharat Petroleum",
      "CARS24",
      "acro",
      { name: "Addverb Technologies", logo: "/assets/image2/addverb-technologies.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      "ClearPack",
      "ColdEX",
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      "DealShare",
      { name: "Fix Derma", logo: "/assets/image2/fix-derma.webp" },
      "Green Gas Limited",
      { name: "inshorts", logo: "/assets/image2/inshorts.webp" },
      "JCB",
      "Kyocera",
      "Lahori Zeera",
      "Bakers Circle",
    ],
  },

  licenseTypes: {
    title: "Unveil Your Options: Explore Types and SAP Business One Price in India",
    description:
      "Experience personalized guidance from our experts to navigate SAP license cost in India, along with maintenance, SAP support, and implementation expenses. Choose from a variety of SAP Business One Licenses, including Professional and Limited licenses, tailored to your unique business requirements. Contact us to explore further and receive comprehensive assistance in finding the appropriate SAP software price for your business.",
    items: [
      {
        image: "/assets/image2/city-05.webp",
        label: "Professional License",
        description:
          "Unlock the full spectrum of SAP Business One's capabilities with Professional SAP Business One licenses, granting access to all modules and features. Choose between flexible subscription or perpetual license options to suit your business needs seamlessly by providing the most affordable SAP Business One cost.",
        forceVisible: true,
        button: { label: "Get Quote", href: "#", variant: "licensePrimary" },
      },
      {
        image: "/assets/image2/sap-migration-01.webp",
        label: "Limited License",
        description:
          "Dive into the tailored offerings of SAP Business One Limited licenses, which provide focused solutions across three key areas: CRM, Financials, and Logistics. Each option offers a unique blend of modules and features to address specific business needs. Explore these customizable options and discover the ideal fit with minimal SAP Software Price for your requirements.",
        forceVisible: true,
        button: { label: "Get Quote", href: "#", variant: "licensePrimary" },
      },
      {
        image: "/assets/image2/city-06.webp",
        label: "Other License",
        description:
          "Explore additional SAP Business One Licenses tailored to accommodate your budget constraints and business size, such as mobile app-only licenses or starter packages designed for teams with 1-5 users.",
        forceVisible: true,
        button: { label: "Get Quote", href: "#", variant: "licensePrimary" },
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
    ],
  },

  // TODO: reusing the same underwater CTA photo already established across
  // the design system for this promotional-banner pattern.
  ctaBanner: {
    title: "Unlock Exceptional Value: Explore SAP Business One Pricing Options",
    description:
      "Discover SAP License Cost in India and secure the best SAP Software price available. Take advantage of a free Initial Assessment conducted by our team of experts.",
    button: { label: "Request Demo", href: "#", variant: "licensePrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "FAQs",
    items: [
      {
        question: "What Does a SAP License Entail?",
        answer:
          "A SAP license grants you the legal right to use SAP Business One's modules and features. It defines which functionality (Finance, CRM, Sales, Inventory, and more) you're entitled to use, how many users can access the system, and under what terms — subscription or perpetual.",
      },
      {
        question: "Where can I purchase SAP Business One licenses?",
        answer:
          "SAP Business One licenses are sold exclusively through certified SAP partners like Ayushman Solution. We help you assess your requirements, choose the right license mix, and handle the entire purchasing and activation process.",
      },
      {
        question: "What advantages does SAP Business One offer?",
        answer:
          "SAP Business One unifies financials, sales, purchasing, inventory, and reporting into a single system, giving you real-time visibility, fewer manual errors, and a platform that scales as your business grows.",
      },
      {
        question: "What sets Ayushman Solution apart as the preferred choice for SAP Business One licenses?",
        answer:
          "As an SAP Platinum Partner with over two decades of experience, Ayushman Solution offers personalized license blueprints, transparent pricing, and dedicated post-purchase support — not a one-size-fits-all quote.",
      },
      {
        question: "How many types of licenses does SAP Business One offer?",
        answer:
          "SAP Business One offers Professional licenses (full access to all modules), Limited licenses (focused access to CRM, Financials, or Logistics), and other license types such as mobile-only or starter packages for small teams.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #1e88e5 0%, #145da0 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
