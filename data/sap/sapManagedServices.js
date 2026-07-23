// Content for /sap/business-one/managed-services ("SAP Managed Services").
// Reuses the exact same section components as sapSolutions.js / sapServices.js /
// sapSupport.js / sapPractices.js / sapBusinessOne.js / sapBusinessOneImplementation.js /
// sapBusinessOneIntegration.js / sapBusinessOneCustomization.js — only this
// sibling data file differs. Testimonials/case-studies/news reuse the same
// verbatim entries already established across those sibling files.

export const sapManagedServices = {
  // TODO: no dedicated whitewater-rafting hero photo exists in the project
  // yet — reusing the same small pool of adventure photography already
  // established across every SAP page in this project.
  hero: {
    backgroundImage: "/assets/image2/SAP-Services-3.png",
    align: "left",
    textTheme: "dark",
    title: "Avail Lasting ERP Experiences with SAP Managed Services",
    button: { label: "Request A Demo", href: "#" },
  },

  intro: {
    title: "No More Downtime; More Innovation Time with\nSAP Managed Services!",
    description:
      "In today's constantly connected world, businesses cannot afford any interruptions in their operations. Let Ayushman Solution, a leading SAP managed services provider, manage your SAP workloads, allowing you to focus on driving innovation and seizing new opportunities. Following SAP implementation, we guarantee customized SAP solutions tailored to your business needs and manage workloads to ensure seamless operations. Our SAP managed services provide enhanced visibility, enabling the proactive selection of flexible SLAs, the implementation of pre-emptive threat protection, and the rapid adoption of business processes and SAP cloud managed services. With this comprehensive approach, your organization can confidently move towards proactive management, strengthened security, and accelerated business growth.",
    buttons: [
      { label: "Explore SAP Services", href: "/sap/services", variant: "primary" },
      { label: "Schedule Demo", href: "#", variant: "outlineLight" },
    ],
    background: "linear-gradient(120deg, #0a1e3c 0%, #123a63 100%)",
    theme: "light",
  },

  // TODO: no dedicated photography exists for this row yet — reusing an
  // already-established real asset from elsewhere in the design system.
  keepRunning: {
    imagePosition: "right",
    image: "/assets/image2/who-we-are-hero-img.webp",
    imageAlt: "Team member reviewing SAP uptime and recovery dashboards",
    title: "Keep your ERP always up and running with SAP Managed Services",
    description: [
      "We understand that basic backups are insufficient for businesses with mission-critical applications. Our SAP managed services experts specialize in safeguarding your operations to remain unaffected in the event of disasters or operational failures.",
      "Ayushman Solution guarantees business continuity and delivers comprehensive disaster recovery services, supporting your enterprise across both SAP cloud managed services and on-premises SAP ERP managed services.",
    ],
    buttons: [
      { label: "Explore SAP Solution", href: "/sap/solutions", variant: "primary" },
      { label: "Request Demo", href: "#", variant: "outline" },
    ],
  },

  autoGear: {
    title: "If SAP is your auto gear, Ayushman Solution is your gear garage!",
    description:
      "Navigating the complexities of SAP operations is comparable to driving a sophisticated vehicle. In this analogy, Ayushman Solution serves as the trusted partner for your SAP journey. Our SAP managed services are tailored to align seamlessly with your business, ensuring your SAP system operates efficiently and effectively. Just as an automotive service centre meticulously cares for every component, our dedicated professionals expertly manage the intricacies of SAP ERP managed services, providing a reliable resource for maintenance, updates, and strategic enhancements. With Ayushman Solution as your SAP managed services provider, your SAP experience transcends mere functionality; it is a well-supported journey that keeps your business running smoothly.",
    background: "linear-gradient(120deg, var(--color-primary-lightest) 0%, #ffffff 60%)",
  },

  // TODO: no dedicated photography exists for these nine tiles yet — reusing
  // already-established real assets, including the migration-themed photos
  // added alongside this page, from elsewhere in the design system.
  solutions: {
    title: "SAP Managed Services Solutions We Offer",
    items: [
      {
        label: "Recovery & Maintenance",
        description:
          "Leave your security concerns to our experts. Our SAP ERP managed services help you minimize risk, reduce potential losses, downtime and avoid costly incidents with continuous monitoring and granular control. We take due protection and rapid threat resolution before they affect your data and infrastructure.",
        image: "/assets/image2/service-water.webp",
        href: "#",
      },
      {
        label: "Data Backup",
        description:
          "Keep your data safe and secure from the growing number of cyber threats and any suspicious activity with multiple authentication layers and intelligence. Our managed SAP services migration experts take regular backups of your business data for any eventuality.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        label: "High-availability of data",
        description:
          "We know how to withstand all planned and unplanned outages such as system upgrades, power outage, software errors, data corruption or unplanned faults.",
        image: "/assets/image2/city-05.webp",
        href: "#",
      },
      {
        label: "Supervised infrastructure and migration",
        description:
          "Ayushman Solution's SAP managed services expertly handle cloud infrastructure administration, data centre management, and seamless migrations to major platforms like AWS and Azure.",
        image: "/assets/image2/banner-sap-migration.webp",
        href: "#",
      },
      {
        label: "Regular monitoring and auditing",
        description: "Ensure operational excellence with 24/7 helpdesk support, immediate assessment, and resolution of technical issues.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
      },
      {
        label: "Management and quality",
        description: "We oversee database administration, SAP installations, updates and quality assurance.",
        image: "/assets/image2/sap-migration-02.webp",
        href: "#",
      },
      {
        label: "Downtime management and business progression",
        description: "Guarantee near-zero downtime with automated backup and disaster recovery.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
      },
      {
        label: "Latest SAP support solutions",
        description: "Certified SAP experts help organizations adopt new business capabilities.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        label: "SAP security compliance",
        description: "Protect your enterprise using vulnerability assessments, compliance management and role-based access.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
      },
    ],
  },

  // TODO: Gopal Corps/SGS Tekniks reuse the exact same testimonial pair
  // already established across sapServices.js / sapPractices.js /
  // sapSolutions.js / sapBusinessOne.js / sapBusinessOneImplementation.js.
  testimonials: {
    title: "Client Success Stories",
    description: "Success stories that demonstrate real-time benefits of working with the best SAP managed services partner.",
    avatars: [
      { src: "/assets/images/test-img-3.webp", position: "topCenter" },
      { src: "/assets/images/s-1.webp", position: "topLeft" },
      { src: "/assets/images/s-2.webp", position: "topRight" },
      { src: "/assets/images/s-3.webp", position: "bottomLeft" },
      { src: "/assets/images/s-4.webp", position: "bottomRight" },
    ],
    videos: [
      {
        name: "Anubha Gupta",
        designation: "Director",
        company: "Gopal Corps Ltd",
        background: "linear-gradient(135deg,#0f2f5f 0%,#1e73e8 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How Gcl Built Their L.I.V.E. Enterprise With Ayushman Solution",
        videoUrl: "https://www.youtube.com/watch?v=5X2lFRs5cCk",
      },
      {
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
        background: "linear-gradient(135deg,#0b5fd8 0%,#3f9dfa 100%)",
        brandMark: "AYUSHMAN SOLUTION",
        eyebrow: "Customer Success Story",
        headline: "How SGS Tekniks Transform Their Journey With Ayushman Solution",
        videoUrl: "#",
      },
    ],
    texts: [
      {
        quote: "Ayushman Solution felt like an extension of our own team from day one.",
        name: "Anubha Gupta",
        designation: "Director",
        company: "Gopal Corps Ltd",
      },
      {
        quote: "The team's SAP expertise and responsiveness gave us the confidence to go live on schedule.",
        name: "J.S Gujral",
        designation: "MD",
        company: "SGS Tekniks Manufacturing Pvt. Ltd.",
      },
    ],
  },

  // TODO: reuses the exact same News & Articles items already established
  // across sapServices.js / sapBusinessOne.js.
  news: {
    eyebrowTitle: "Stay connected to News, Events, and Announcements at Ayushman Solution",
    sectionTitle: "News",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "20 Mar 2024",
        title: "Ayushman Solution Scoops Two Top Awards at SAP Partner Summit 2024, Singapore",
        image: "/assets/image2/Partner-Summit-Singapore-2024.webp",
        href: "#",
      },
      {
        date: "01 Sep 2021",
        title: "Unveiled: 7 Ways to Increase ROI from Cloud ERP Implementation",
        source: "Hindustan Times",
        background: "#0a5f6b",
        href: "#",
      },
      {
        date: "20 Jun 2025",
        title: "SAP S/4HANA Is Not a Choice but a Necessity for Insurance Industry",
        source: "TechsSlash",
        background: "var(--sap-navy)",
        href: "#",
      },
    ],
  },

  blogs: {
    title: "From Thinker's Desk",
    action: { label: "Learn More", href: "#" },
    items: [
      {
        date: "07 Apr 2025",
        title: "Beyond Business Hours: Why 24/7 SAP Support and Managed Services Matter",
        description: "Consistent SAP support helps businesses maximize their SAP investment and get the most from every module.",
        image: "/assets/image2/solution-products-img-2.webp",
        href: "#",
      },
      {
        date: "18 Jul 2025",
        title: "Why Leading Enterprises Choose SAP S/4HANA Extended Warehouse Management",
        description: "With the rapid advancement of technologies, including AI and fearsome global competition, warehouse uptime matters more than ever.",
        image: "/assets/image2/solution-products-img-1.webp",
        href: "#",
      },
      {
        date: "31 Jul 2025",
        title: "SAP NOW AI Tour New Delhi: Schedule and Registration",
        description: "It's going to be SAP-tember if you're in the capital city — here's what to expect from the AI Tour.",
        image: "/assets/image2/city-06.webp",
        href: "#",
      },
    ],
  },

  // TODO: reuses the exact same case-study entries already established in
  // sapBusinessOneIntegration.js's caseStudies, reordered to lead with the
  // three reference screenshots show first.
  caseStudies: {
    title: "Learn How Enhanced Engagements Are Reshaping Customer Experience",
    action: { label: "Find Out More", href: "#" },
    items: [
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
        title: "Fujikura Kasei Coating Painted a New Route to Success with SAP Business One®",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        industry: "Manufacturing",
        revenue: "25 cr",
        employees: "25+",
        location: "(Haryana)",
        href: "#",
        download: { href: "#" },
      },
    ],
  },

  // TODO: no dedicated underwater/coral photography exists in the project —
  // reusing the CTASection background already established for this design
  // system.
  moreQuestions: {
    title: "Want to know more?",
    description:
      "Ask our certified consultants. Avoid downtime, performance issues and minimize infrastructure cost and complexity with our SAP managed services. Schedule a no-cost consultation with our SAP team to get the answers you need.",
    button: { label: "Request Demo", href: "#" },
    backgroundImage: "/assets/image2/green-mountains.png",
    textTheme: "dark",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What are SAP Managed Services?",
        answer:
          "SAP managed services are an outsourced, subscription-based model where a certified partner like Ayushman Solution monitors, maintains, and optimizes your SAP landscape on an ongoing basis, so your internal team doesn't have to.",
      },
      {
        question: "Why would I want SAP managed services for my ERP system?",
        answer:
          "Managed services reduce the cost and risk of running SAP in-house, giving you predictable support, proactive monitoring, and certified expertise without the overhead of building a full internal SAP team.",
      },
      {
        question: "Do you offer SAP cloud managed services like you do with your on-premise support?",
        answer:
          "Yes. Our SAP managed services cover both cloud-hosted and on-premises SAP Business One and S/4HANA Cloud landscapes, with the same SLAs and support depth across either deployment.",
      },
      {
        question: "How does Ayushman Solution support disaster recovery and business continuity?",
        answer:
          "We maintain automated backup schedules, tested recovery runbooks, and failover infrastructure so your SAP environment can be restored quickly with minimal data loss in the event of an outage.",
      },
      {
        question: "What sort of monitoring is provided in your SAP managed services?",
        answer:
          "Our team provides 24/7 helpdesk support alongside continuous system health, performance, and security monitoring, with immediate assessment and resolution of technical issues as they're detected.",
      },
      {
        question: "Can you assist with SAP migrations and infrastructure upgrades?",
        answer:
          "Yes. We handle cloud infrastructure administration, data centre management, and end-to-end migrations to platforms like AWS and Azure as part of our supervised infrastructure and migration services.",
      },
      {
        question: "How do you manage downtime and ensure high availability?",
        answer:
          "We plan around every source of planned and unplanned outage — system upgrades, power loss, software errors, and data corruption — with redundant infrastructure and automated recovery to guarantee near-zero downtime.",
      },
      {
        question: "What security and compliance measures are part of SAP managed services?",
        answer:
          "Our SAP security compliance services include regular vulnerability assessments, compliance management, and role-based access control to protect your enterprise data and meet regulatory requirements.",
      },
      {
        question: "How adaptable are your SLAs (Service Level Agreements) for the managed services you provide for SAP?",
        answer:
          "SLAs are tailored to your business criticality and budget, with flexible tiers for response time, uptime guarantees, and support coverage that can scale up or down as your needs change.",
      },
      {
        question: "How do I engage with Ayushman Solution's managed services specifically for SAP?",
        answer:
          "Start with a no-cost consultation with our SAP team — we'll assess your current landscape and recommend a managed services engagement model that fits your environment and goals.",
      },
    ],
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, var(--sap-blue) 0%, var(--color-primary-dark) 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
