// Content for /erp/erp-software-pune ("SAP Business One Partners in Pune").
// Sibling of sapNearYouData.js (the "SAP Near You" directory this page is
// linked from, which already lists this exact route/title/image) and
// sapBusinessOneChennai.js / sapBusinessOneDelhiNCR.js / sapBusinessOneKerala.js
// (the other city pages in this family) — reuses the exact same section
// components as every other data/sap/*.js page, only this file's content
// differs. Page-scoped rebrand (navy heading / yellow accent) matches
// SapNearYou.module.css since this is a direct city-page sibling of that
// listing.

export const sapBusinessOnePune = {
  // Reusing this city's own thumbnail image, already established on the
  // "SAP Near You" listing page, as this page's hero background.
  hero: {
    backgroundImage: "/assets/image2/solution-products-img-2.webp",
    align: "right",
    textTheme: "light",
    title: "SAP Business One Partners in Pune",
    buttons: [
      { label: "Request A Demo", href: "#", variant: "migrationPrimary" },
      { label: "Call - 9667411445", href: "tel:9667411445", variant: "migrationOutline" },
    ],
  },

  intro: {
    title: "Unlock Growth: Step Up with the Best SAP Business One Partners in Pune",
    description:
      "Pune is one of India's most important cities and a leading IT centre that successfully combines the most recent advancements with references to India's rich heritage. Being an esteemed SAP Business One partner, Ayushman Solution is committed to driving digital change with the help of SAP Business One's valued capabilities - from implementation and cloud hosting to technical support and managed services - helping SMEs across Pune handle the intricate dynamics of their growth curves.",
    buttons: [
      { label: "SAP Business One", href: "/sap/business-one", variant: "migrationPrimary" },
      { label: "Let's Connect", href: "#", variant: "migrationOutline" },
    ],
  },

  // TODO: no dedicated Pune skyline illustration exists in the project yet —
  // reusing an already-established real asset from elsewhere in the design
  // system for this alternating image-content layout.
  puneLandscape: {
    imagePosition: "left",
    imageStyle: "boxed",
    image: "/assets/image2/city-06.webp",
    imageAlt: "Pune cityscape",
    title:
      "Leading SAP Business One Company in Pune, Empowering Businesses in Pimpri-Chinchwad, Talegaon, Hinjewadi, Chakan, Ranjangaon and Across the City",
    description: [
      "Pune is the \"Oxford of the East,\" eminent for its academic excellence, which translates into the city being an emerging hub for information technology (IT). With many IT parks, such as Hinjewadi IT Park, Magarpatta City, EON IT Park, and Talawade IT Park, home to top companies like Wipro, Infosys, TCS, Cognizant, and IBM, the city is a burgeoning hub for startups and mid-sized enterprises. Pimpri-Chinchwad, Talegaon region, Chakan, Ranjangaon, Hinjewadi, Koregaon Park, Kalyani Nagar, Wagholi, Magarpatta city and nearby areas are also top business hubs in the city.",
      "As more companies emerge, Pune's commercial landscape is poised to expand to localities like Baner, Balewadi, and Wakad. Pune companies are investing in cloud automation, predictive analytics, and technology solutions to advance smart manufacturing and customer service. With a strong presence in Pune, Ayushman Solution empowers businesses to manage complex supply chains, optimize production processes, and gain real-time insights with SAP Business One - helping them streamline operations, automate routine tasks, and ensure regulatory compliance as competition rises and businesses scale.",
    ],
  },

  // Rendered as a plain CSS grid (not the shared BenefitsSection slider)
  // since all four cards need to stay visible together on desktop, matching
  // this page's own reference layout, rather than being split across
  // slides. Reuses the existing FeatureCard for each item.
  consultingBenefits: {
    title: "Wherever Your Organization is in Pune, Ayushman Solution's SAP Consultants Can Come to Guide You",
    description:
      "You do not have to depend on online calls for SAP ERP demos. Ayushman Solution is not just an SAP Business One partner - we maintain a local presence in the city, and we know technology transitions aren't always easy. That is why we are with you, offering:",
    items: [
      {
        icon: "shield",
        title: "Local expertise",
        description: "We understand Pune's business landscape and offer solutions tailored to local challenges and opportunities.",
      },
      {
        icon: "headset",
        title: "Faster on-site support",
        description:
          "Being local allows quicker deployment, immediate troubleshooting, and hands-on support across Pimpri-Chinchwad, Talegaon region, Hinjewadi, Chakan, Ranjangaon and across Pune city.",
      },
      {
        icon: "exchange",
        title: "Cultural and language alignment",
        description: "We speak your language and can better resolve technical problems with your team.",
      },
      {
        icon: "car",
        title: "No logistical or travel hassles",
        description: "Working with a local SAP partner reduces travel and logistical costs, keeping your SAP solution affordable without compromising quality.",
      },
    ],
    closingStatement: "Ayushman Solution is a SAP Business One partner in Pune offering frequent face-to-face interactions and customized services based on your evolving needs.",
  },

  // TODO: no dedicated "two professionals" photography exists in the project
  // yet — reusing an already-established real asset from elsewhere in the
  // design system.
  implementation: {
    imagePosition: "right",
    imageStyle: "bleed",
    image: "/assets/image2/solution-products-img-2.webp",
    imageAlt: "SAP Business One consultants at work",
    title: "Make Sure Your ERP is Always Active with a Leading SAP Business One Implementation Company in Pune",
    description: [
      "Realizing that fundamental backup services are inadequate for organizations with crucial applications, our managed services team is dedicated to protecting your business functionalities and keeping them unaffected by disasters and operational breakdowns.",
      "As a leading SAP Business One implementation company in Pune, Ayushman Solution ensures business reliability and provides disaster recovery solutions. We help your enterprise on both SAP Cloud and on-site deployments.",
    ],
    advantagesTitle: "What You Get",
    advantages: [
      {
        icon: "capsules",
        title: "Training and Support",
        description: "Rely on local SAP partners in Pune and access quality training for the specialized ERP system.",
      },
      {
        icon: "boxes",
        title: "Swift Implementation",
        description: "Experience the power of SAP Business One to fast-track your business evolution.",
      },
    ],
    buttons: [
      { label: "SAP Services", href: "/sap/services", variant: "migrationPrimary" },
      { label: "SAP Solutions", href: "/sap/solutions", variant: "migrationOutline" },
    ],
  },

  whySap: {
    title: "Why SAP Business One Would Be the Best One for You?",
    description:
      "Enjoy smooth running as SAP Business One delivers efficient business activities such as inventory and logistics, finance, procurement, sales, and HR as well as customer relationship management. Affordable for small and large enterprises alike, it provides all necessary departmental capabilities alongside integrated BI to drive your business growth, while also meeting Indian GST compliance requirements like GST returns, e-way bills, e-invoicing and TDS.",
    buttons: [
      { label: "Request Demo", href: "#", variant: "migrationPrimary" },
      { label: "Let's Talk", href: "#", variant: "migrationOutline" },
    ],
    background: "#0a1e3c",
  },

  // Reused verbatim from sapBusinessOneChennai.js / sapBusinessOneDelhiNCR.js /
  // sapBusinessOneKerala.js's own award timeline — same established SAP
  // Partner Award history already used across this module.
  timeline: {
    title: "Ayushman Solution is Your Trusted SAP Business One Partner in Pune and Across India",
    description: "We're honored to be recognized by SAP that bears testimony to our pursuit of excellence.",
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

  // Same established capability figures used verbatim across every other
  // data/sap/*.js city page in this module - the reference screenshot's own
  // numbers are Uneecops-specific and are NOT reused here.
  capability: {
    title: "Ayushman Solution: What Makes Us an Outstanding Choice as a SAP Business One Partner in Pune?",
    description:
      "Ayushman Solution is a CMMI Level 5 company having 11+ years of experience combining our efficiency with one of the most outstanding ERP systems in India.",
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
      { label: "Book A Call", href: "#", variant: "migrationOutline" },
    ],
  },

  // Client wall mixes real logo assets already available in the project
  // (public/assets/image2/) with plain text marks reused verbatim from
  // sapBusinessOneKerala.js / erpSoftwareHyderabad.js for the clients that
  // don't have a dedicated logo file yet — same "no image available"
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
      { name: "CARS24", logo: "/assets/image2/cars24.png" },
      "NASSCOM",
      "King Koil",
      { name: "Mankind", logo: "/assets/image2/mankind.webp" },
      { name: "Ambrane", logo: "/assets/image2/ambrane.png" },
      { name: "Arvind", logo: "/assets/image2/arvind.webp" },
      "DealShare",
      "Acro Engineering",
      { name: "Addverb Technologies", logo: "/assets/image2/addverb-technologies.webp" },
      "Butterfly",
      { name: "Dada Motors", logo: "/assets/image2/dada-motors.webp" },
      { name: "FixDerma", logo: "/assets/image2/fix-derma.webp" },
      "Inshorts",
      { name: "JCB", logo: "/assets/image2/jcb.webp" },
      { name: "Epson", logo: "/assets/image2/epson.webp" },
      { name: "Global", logo: "/assets/image2/Global.png" },
    ],
  },

  services: {
    title: "Leading SAP Business One Partners in Pune: Explore the Range of Services Provided",
    description: "Ayushman Solution keeps building its list of top SAP partners in Pune, with a variety of SAP Business One services that include:",
    items: [
      {
        label: "License Procurement & Installation",
        description:
          "License procurement and installation are handled smartly after consulting our experts. Purchasing and installation become far easier with the guidance of one of the leading SAP consulting companies in Pune.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "/sap/business-one/license",
        button: { label: "Know More", href: "/sap/business-one/license", variant: "migrationPrimary" },
      },
      {
        label: "Implementation and Customization",
        description:
          "Recognized as one of the best SAP ERP software companies in Pune, we employ the ASAP implementation model. With over a decade of experience and 500+ successful SAP Business One implementations, we tailor the solution to fit your company's requirements.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "/sap/business-one/implementation",
        button: { label: "Know More", href: "/sap/business-one/implementation", variant: "migrationPrimary" },
      },
      {
        label: "SAP Business One SQL to HANA Migration",
        description:
          "Rated among the best SAP service providers in Pune, migration from SQL to HANA is far from an uphill task with us. Our end-to-end process, from assessment to go-live support, ensures a smooth transition with minimal disruption.",
        image: "/assets/image2/SAP-Services-2.png",
        href: "/sap/business-one/migration",
        button: { label: "Know More", href: "/sap/business-one/migration", variant: "migrationPrimary" },
      },
      {
        label: "Add-Ons Development",
        description:
          "Expand SAP Business One's possibilities with a wide selection of add-ons designed for specific industry requirements. As one of the leading SAP Business One partners, we build business-oriented add-on solutions tailored to your operations.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "/sap/business-one/add-ons",
        button: { label: "Know More", href: "/sap/business-one/add-ons", variant: "migrationPrimary" },
      },
      {
        label: "Upgradation (Standard Products & Add-Ons)",
        description:
          "Make a hassle-free upgrade to the latest version of SAP Business One with our upgradation services, provided by a leading SAP company in Pune, ensuring version stability alongside continuous productivity improvements.",
        image: "/assets/image2/bakers-circle-thumb-1.jpg",
        href: "/sap/business-one/customization",
        button: { label: "Know More", href: "/sap/business-one/customization", variant: "migrationPrimary" },
      },
      {
        label: "Cloud Hosting Services",
        description:
          "We provide and ensure full-fledged, uninterrupted cloud hosting and management services customized to fit each client's business needs, with the resources to support further expansion wherever needed.",
        image: "/assets/image2/drone-flyer-actual.png",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Training & Documentation (On Site & Off Site)",
        description:
          "Ensure you derive maximum value from your investment in SAP Business One through structured training programs. As one of the best SAP partners in Pune, we help your teams get the most out of the software.",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        href: "/sap/business-one/managed-services",
        button: { label: "Know More", href: "/sap/business-one/managed-services", variant: "migrationPrimary" },
      },
      {
        label: "Support and Maintenance",
        description:
          "Reach our support team any time through our dedicated portal - submit requests and queries, and track resolution around the clock. Trust us as one of the best SAP partners in Pune for strategic business support that keeps operations running smoothly.",
        image: "/assets/image2/SAP-Services-3.png",
        href: "/sap/support",
        button: { label: "Know More", href: "/sap/support", variant: "migrationPrimary" },
      },
    ].map((item) => ({ ...item, forceVisible: true })),
  },

  // TODO: no dedicated photography exists for these four posts — reusing
  // already-established real assets from elsewhere in the design system.
  blogs: {
    title: "Blogs",
    action: { label: "View All", href: "#" },
    items: [
      {
        date: "16 Jun 2025",
        title: "How SAP Business One Could Be Your Startups...",
        description: "Business is often the dream and baby of young entrepreneurs. But...",
        image: "/assets/image2/solution-products-img-1.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "09 May 2025",
        title: "Are You Testing Your SAP S/4HANA Cloud Projects...",
        description: "What happens if your SAP S/4HANA Cloud system isn't tested properly...",
        image: "/assets/image2/SAP-Services-2.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and...",
        description: "Consistent SAP support helps businesses maximize their SAP integration and get...",
        image: "/assets/image2/solution-products-img-2.webp",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
      {
        date: "05 Feb 2025",
        title: "Understanding AI in SAP Business One: A Complete...",
        description: "The integration of AI in SAP has been a game-changer for...",
        image: "/assets/image2/SAP-Services-1.png",
        badge: "/assets/images/Latets-Logo.png",
        href: "#",
      },
    ],
  },

  // Reused verbatim from sapBusinessOneDelhiNCR.js's own case-study wall
  // (Raj Overseas) plus sapBusinessOneChennai.js's FixDerma/Inshorts stories
  // — same already-established, already-Ayushman-branded customer stories.
  // The reference screenshot's own case studies for Sharika Life Science and
  // Select CityWalk are Uneecops customers and are NOT reused here.
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
        bannerColor: "linear-gradient(135deg,#0b2a78 0%,#178ae8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "FixDerma Transformation and Automation Journey with Ayushman Solution",
        personName: "Shaily Mehrotra",
        personRole: "CEO & Founder, FixDerma",
        title: "Fixing FixDerma's Digital Transformation Challenges | A Customer Success Story",
        industry: "Skincare",
        revenue: "100 Cr+",
        employees: "200+",
        location: "India",
        href: "#",
      },
      {
        title: "Agro-Chemical Enterprise Achieved Better Demand and Production Forecasting with SAP Business One®",
        image: "/assets/image2/haryana-leathers-case-study-thumb.jpg",
        industry: "Agro-Chemical",
        revenue: "100 Cr+",
        employees: "10,000+",
        location: "India",
        href: "#",
      },
    ],
  },

  ctaBanner: {
    title: "Engage with a Leading SAP ERP Company in Pune",
    description: "Leave your ERP implementation in the hands of our skilled team and expect a successful outcome, delivered on time and within budget.",
    button: { label: "Let's Talk", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How do I find a fast and user-friendly approach toward implementing an ERP software system?",
        answer:
          "Working with a local, established SAP Business One partner like Ayushman Solution gives you a structured, ASAP-model implementation approach, hands-on training, and on-site support - making the transition faster and easier for your team.",
      },
      {
        question: "In what ways would SAP Business One improve business processes?",
        answer:
          "SAP Business One connects finance, inventory, sales, procurement, and CRM onto a single platform with built-in business intelligence, helping you automate routine tasks, reduce manual errors, and get real-time visibility across operations.",
      },
      {
        question: "What cost to deploy SAP Business One in Pune can one expect on average?",
        answer:
          "Implementation cost depends on your license count, modules, add-ons, and customization scope. Book a call with our SAP consultants for a tailored quote based on your business requirements in Pune.",
      },
      {
        question: "What are the main benefits of SAP Business One for business?",
        answer:
          "Key benefits include unified financial and operational visibility, GST-compliant reporting (GST returns, e-way bills, e-invoicing, TDS), scalable cloud deployment, and 12+ industry-specific add-ons that adapt the platform to your business.",
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
