// Content for /erp/erp-software-ahmedabad ("SAP Business One Ahmedabad").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from) and reuses the exact same section components as every other
// data/sap/*.js page — only this file's content differs. Page-scoped rebrand
// (navy heading / yellow accent) matches SapNearYou.module.css since this is
// a direct city-page sibling of that listing.

export const sapBusinessOneAhmedabad = {
  // TODO: no dedicated Ahmedabad landmark photography exists in the project
  // yet — reusing the same city photo already used as the "SAP Near You"
  // listing page's own hero background.
  hero: {
    backgroundImage: "/assets/image2/city-06.webp",
    align: "right",
    textTheme: "light",
    title: "Empowering Growth with SAP Business One – Ahmedabad's Premier SAP ERP Solution Partner",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
  },

  whyChooseUs: {
    title: "Why Choose Ayushman Solution as your SAP Implementation Company in Ahmedabad?",
    description:
      "As a CMMI Level 5 company with 12+ years of experience in the SAP B1 vertical, Ayushman Solution has served over 450+ clients and is currently the apex SAP Business One partner in Ahmedabad. Clients proceed toward their desired performances and lowered TCOs in every part of their business transformation odysseys. Assisted by Ayushman Solution's value-for-money and industry-standard SAP ERP solutions, it isn't a wonder that they consider us the best SAP ERP solution partner in Ahmedabad.",
    buttons: [{ label: "SAP ERP Software", href: "/sap/solutions", variant: "migrationPrimary" }],
  },

  businessHub: {
    title: "Ahmedabad – A Dynamic Business Hub in India",
    paragraphs: [
      "Ahmedabad is called the “Boston of India” as it is the powerhouse of India's industrial, commercial and economic landscape. The city's manufacturing strength is fueled by industry giants like Adani, Suzuki Motor, Nirma, Dishman Carbogen Amcis, Nestlé, Procter & Gamble, and Ford Motors, all of which have significant production units here.",
      "In the pharmaceutical space, Ahmedabad is home to top-tier players such as Intas Pharmaceuticals, Zydus Lifesciences, and Sun Pharmaceutical. The city also boasts a thriving IT ecosystem, featuring global leaders like Tata Consultancy Services, Thomson Reuters, Google, Microsoft, IBM, and homegrown innovators, solidifying Ahmedabad's position as a hub for technological advancement and digital transformation.",
      "Ahmedabad's dynamic business ecosystem is supported by strong industry-specific associations like the Textile Association India, Vatva Industries Association, Naroda Industries Association, Odhav Industries Association, and the Gujarat State Plastic Manufacturers Association. Additionally, influential chambers of commerce such as the Gujarat Chamber of Commerce & Industry, Knowledge Chamber of Commerce and Industry, Indo-American Chamber of Commerce, and the Federation of Indian Chambers of Commerce and Industry (FICCI) play a pivotal role in fostering business innovation, partnerships, and global trade connections.",
    ],
  },

  // TODO: no dedicated Ahmedabad skyline illustration exists in the project
  // yet — reusing the same small pool of city photography already
  // established across this design system.
  localPresence: {
    imagePosition: "right",
    image: "/assets/image2/city-05.webp",
    imageAlt: "Ahmedabad city skyline",
    title: "Ayushman Solution in Ahmedabad: SAP Business One Partners to Businesses in Sanand, Jalisana, Prahlad Nagar, SG Highway, Bodakdev and beyond…",
    description: [
      "In Ahmedabad, Sanand, Jalisana, Prahlad Nagar, SG Highway, Bodakdev and nearby areas are prominent corporate areas with numerous business parks. Being right here in Ahmedabad allows Ayushman Solution to respond quickly, provide in-depth industry insights, and offer real-time assistance—helping businesses stay ahead of the curve with agile, scalable solutions.",
      "Our strong local presence in Ahmedabad allows us to connect directly with businesses in Sanand, Jalisana, Prahlad Nagar, SG Highway, Bodakdev and nearby areas, understanding their unique challenges and growth aspirations. Our hands-on approach begins with personalized SAP Business One demos, tailored to showcase how the solution can streamline your specific business operations. With our dedicated consultancy services, we offer one-on-one guidance, ensuring that companies across manufacturing, pharmaceuticals, and IT sectors harness the full potential of SAP B1. Our local experts work closely with your teams to customize solutions, provide on-site training, and offer continuous support.",
      "With Ayushman Solution by your side, your journey with SAP Business One becomes seamless, empowering your business to innovate, scale, and lead in today's tech-driven economy.",
    ],
  },

  businessGrowth: {
    title: "Driving Ahmedabad's Business Growth with Local Expertise and SAP Business One",
    description:
      "With more and more startups and businesses emerging in the city, the need for cutting-edge technology solutions has never been greater. Companies are seeking smarter ways to streamline operations, enhance productivity, and stay competitive in this fast-evolving landscape. This is where SAP Business One offers power-packed automation and enterprise management solutions designed to help businesses scale seamlessly. Ayushman Solution is proud to be present in Ahmedabad, partnering with the city's leading businesses to help them harness the full potential of SAP Business One and carve a competitive tech edge.",
  },

  // TODO: no dedicated "two professionals" photography exists in the project
  // yet — reusing an already-established real asset from elsewhere in the
  // design system.
  growthCta: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Boost Efficiency and Achieve Excellence with the Best SAP Business One Partners in Ahmedabad",
    description: [
      "Ayushman Solution is endorsed and chosen by industry pioneers and leaders as the leading SAP company in Ahmedabad to assist SMEs in Ahmedabad, Gandhinagar, Surat, Vadodara, Rajkot, Jamnagar, Vapi, Ankleshwar, Valsad, Mehsana and several other cities of Gujarat. We facilitate automation and digital evolution in SMEs with an all-in-one SAP B1 ERP solution.",
      "Overseeing end-to-end SAP Business One journeys, our SAP solution consultants forge strong relationships with clients and work hand-in-hand via our diverse services and solutions to bring out results closest to perfection.",
    ],
    buttons: [
      { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
      { label: "SAP Business One", href: "/sap/business-one", variant: "migrationOutline" },
    ],
  },

  benefits: {
    title: "How Advantageous is the SAP Business One ERP Software?",
    description:
      "Crafted as an ERP Solution taking into account the diversity in organizational specifications and needs of SMEs, SAP Business One is a unified ERP product assisting businesses to upscale and excel dramatically.",
    checklist: [
      "Reduce manual effort",
      "Reduce excel-dependent and spreadsheet-driven processes",
      "Automate fundamental business operations (CRM, Inventory, Finance, Sales, and many more)",
      "Cut down overhead IT spending by 80%",
    ],
    trailingText:
      "As the pioneering SAP Business One partner in Ahmedabad, Ayushman Solution can help rejuvenate your business operations expeditiously.",
    buttons: [
      { label: "Book A Call", href: "#", variant: "migrationPrimary" },
      { label: "Request Quote", href: "#", variant: "migrationOutline" },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapSupport.js's own award timeline — same
  // established SAP Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solution is your trusted SAP Partner",
    description: "We're honored by SAP as the best SAP Partner in India.",
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

  stats: {
    title: "Ayushman Solution as one of the best SAP Companies in Gujarat",
    description: "Ayushman Solution is a CMMI Level 5 company having 12+ years of experience in SAP B1 vertical",
    items: [
      { icon: "handshake", value: "#1", label: "SAP Platinum Partner" },
      { icon: "rocket", value: "1000+", label: "Implementation" },
      { icon: "briefcase", value: "300+", label: "SAP Consultants" },
      { icon: "certificate", value: "75+", label: "Channel Partners" },
      { icon: "location", value: "20+", label: "Cities Presence" },
      { icon: "chart", value: "21+", label: "Industries" },
      { icon: "puzzle", value: "12+", label: "Add-Ons" },
      { icon: "lightbulb", value: "Member", label: "SAP Business One Global Partner Executive Council" },
    ],
  },

  // Reused verbatim from sapBusinessOne.js's own client wall — same
  // established client roster already used across this module.
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
      "CARS24",
      "esri",
      "King Koil",
      "Mankind",
      "FixDerma",
      "Addverb Technologies",
      "ambrane",
      "Bakers Circle",
      "Clearpack",
      "Bharat Petroleum",
      "Green Gas Limited",
      "Inshorts",
      "JCB",
      "Ajax Fiori",
      "Aditya Birla Group",
      "Mrs. Bectors Food Specialities Ltd",
      "Prakash Pipes Limited",
      "Raj Overseas",
      "KYOCERA",
      "Lahori Zeera",
    ],
  },

  services: {
    title: "Our Services Portfolio",
    description: "Being the leading SAP Business One Partner in Ahmedabad, our full range of service offerings include thorough ERP support from start to finish.",
    items: [
      {
        label: "Business Requirement Documentation (BRD)",
        description: "The BRD process assists clients in documenting all operations, overseen by our industry and vertical experts with 100% end-to-end visibility.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/consulting",
      },
      {
        label: "License Procurement & Installation",
        description: "Clients make intelligent investment decisions, backed by the knowledge, expertise, and guidance of our expert SAP ERP consultants about procuring licenses, implementation strategy, and deployment.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "/sap/business-one/license",
      },
      {
        label: "Implementation & Customization",
        description: "With 500+ SAP Business One implementations and expertise across multiple industries, we deliver successful ERP implementations using our proven implementation methodology.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
      },
      {
        label: "Add-Ons Development",
        description: "Statutory, compliance, and industry-specific SAP Business One add-ons developed by our in-house engineering team.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description: "Seamless upgrades for SAP Business One standard products and industry add-ons with minimum downtime.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description: "End-user training, administrator training, documentation, and knowledge transfer to maximize ERP adoption.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
      },
      {
        label: "Support",
        description: "24×7 SAP Business One support using ticketing, remote support, on-site support, offshore support, and hybrid engagement models.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description: "Complete SQL to SAP HANA migration including assessment, planning, migration, testing, go-live, optimization, and post-go-live support.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
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
    description: "Access dashboards, approvals, and key business data on the go with the SAP Business One mobile app for iOS and Android.",
    buttons: [
      { label: "Download For iOS", href: "#", variant: "migrationOutline" },
      { label: "Download For Android", href: "#", variant: "migrationPrimary" },
    ],
  },

  // TODO: no dedicated photography exists for these four posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs & Insights",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "09 May 2025",
        title: "Are You Testing Your SAP S/4HANA Cloud Projects...",
        description: "What happens if your SAP S/4HANA Cloud system isn't tested properly...",
        image: "/assets/image2/drone-flyer-actual.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "08 Oct 2025",
        title: "Why SAP S/4HANA Quality Management is the Smartest...",
        description: "Ensuring consistent quality management is crucial for enhancing customer relationships, building...",
        image: "/assets/image2/solution-products-img-2.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "26 Sep 2025",
        title: "Digital Transformation ROI: From Investment to Tangible Results",
        description: "In the digital-first economy, businesses in all sectors are adopting DX...",
        image: "/assets/image2/SAP-Services-1.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // TODO: Mankind/Inshorts reused as brand references only — no dedicated
  // photography exists for the first two case studies yet, so they reuse
  // already-established industrial photography from elsewhere in this
  // module; Inshorts renders as a banner-style card, the same pattern
  // already established for ColdEX in sapBusinessOne.js.
  caseStudies: {
    title: "Case Study",
    items: [
      {
        title: "Mankind Pharma Managed BMR/BPR and Inventory with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Manufacturing",
        revenue: "5,000 Cr+",
        employees: "10,000+",
        location: "Ponta Saheb, Punjab",
        href: "#",
        download: { href: "#" },
      },
      {
        title: "One of India's Largest Garment Sourcing B2B Marketplaces Stitches its Multiple Data Sources on One Platform with Tableau + Ayushman Solution",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Garment Sourcing/Production",
        revenue: "INR 500 CR+",
        employees: "201-500",
        location: "Delhi",
        href: "#",
      },
      {
        bannerColor: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "Inshorts Goes Live With SAP ERP x Ayushman Solution",
        personName: "Abhishek Bakshi",
        personRole: "GM - Finance, Inshorts",
        title: "Inshorts Goes Live with SAP ERP x Ayushman Solution | A Customer Success Story",
        industry: "News & Publishing",
        revenue: "180 Cr+",
        employees: "700+",
        location: "India",
        href: "#",
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
