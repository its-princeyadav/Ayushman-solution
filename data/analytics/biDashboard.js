// Content for /analytics/bi-dashboard. Deliberately mirrors the exact same
// architecture as data/analytics/dataVisualization.js: a single flat exported
// object, one key per section, consumed by
// components/Analytics-pages/BiDashboard.jsx. Every section reuses an
// existing Sap/* component — no new components were introduced for this page.

import { dataVisualization } from "./dataVisualization";

export const biDashboard = {
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "right",
    title: "Create Insightful, Easy-to-use and Custom BI Dashboards",
    button: { label: "Find Out More", href: "#contact" },
  },

  // Image left / content right, via the same ImageTextSection used
  // throughout the SAP + Analytics pages (default imagePosition="left").
  tableauServices: {
    imagePosition: "left",
    title: "Tableau BI Dashboard Services",
    description:
      "We offer Dashboard as a Service to SAP Business One customers which helps them to gain actionable insights from the dispersed and siloed data in spreadsheets, databases, and other sources. We help you design easy-to-use impactful dashboards that help you to ask deeper questions and uncover hidden insights in a matter of minutes. Whether you want a CXO executive view or empower your finance, sales, services, purchase, inventory, function, we got you covered. Each of our Tableau BI dashboard is ready for plugging with SAP Business One data source.",
    button: { label: "Explore Tableau", href: "#contact" },
    image: "/assets/image2/bi-dashboard-service-01.webp",
    imageAlt: "Tableau BI dashboard service delivery",
  },

  // Content left / image right — the alternate ImageTextSection layout.
  hrOneServices: {
    imagePosition: "right",
    title: "Dashboard Services for HR-One",
    description:
      "We offer Dashboard as a Service for HR-One customers to foster critical business insights right on their hands. We help you gain a holistic view of your business using the live dashboards and interactive reports on the go. Whether you want to improve your recruiting process, monitor the employee performance, analyze leave requests, leave allocation requests, or employee details in various departments, our Tableau dashboards makes all things easier. Our dashboards help you reveal key HR business trends in a limited yearly cost.",
    button: { label: "Get HRONE", href: "#contact" },
    image: "/assets/image2/bi-dashboard-service-02.webp",
    imageAlt: "Team reviewing HR-One dashboards on dual monitors",
  },

  // Centered heading + description + icon/label grid — the same
  // CenteredSection + StatsGrid combo already used for
  // erpSoftwareHyderabad.js's "capability" section
  // (components/Sap-pages/ErpSoftwareHyderabad.jsx). `value` is simply
  // omitted here since these are descriptive callouts, not stat counters —
  // StatCard already renders fine without one.
  glance: {
    title: "Tableau dashboards that Inform in a Glance",
    description:
      "We help you build customized dashboards that are not only aesthetically pleasing but also turn the dashboard from good to great with custom shapes, colors, sizes and layout.",
    items: [
      {
        icon: "/assets/image2/Group-106516.svg",
        label: "Our experts immediately highlight specific insights or identify outliers with custom colors.",
      },
      {
        icon: "/assets/image2/Group-106517.svg",
        label: "We help you to tell a more compelling story with custom shapes and its usage.",
      },
      {
        icon: "/assets/image2/Group-106519.svg",
        label: "We use different sizes to draw emphasis to your key message.",
      },
      {
        icon: "/assets/image2/Group-106520.svg",
        label: "Our BI experts will help you make the most important information stand out with custom text.",
      },
      {
        icon: "/assets/image2/Group-106516.svg",
        label: "We will help you discover what's happening, why, and what's most important with a custom layout.",
      },
    ],
  },

  // Industry Vertical — reuses the exact same FunctionalityGrid +
  // ImageOverlayCard "Industry Cards" combo already established for the
  // Data Visualization page's industryVertical section
  // (components/Sap/sections/FunctionalityGrid.jsx). Only the content
  // (12 verticals, as supplied) changes; grid, hover, overlay and
  // responsiveness are all untouched.
  industryVertical: {
    title: "Custom-Built Dashboards For Diverse Industry Verticals",
    description:
      "Ayushman Solutions has helped hundreds of customers to get up & running faster, improving their return on investment with custom-built dashboards. We also give proof-of-concept and demonstrations to help you gauge the real-time benefits of having Tableau dashboards for your industry.",
    items: [
      {
        label: "Micro Finance Industry",
        description:
          "Analyze state-wise collection to the city and village wise branch. Perform top analysis branch wise, state case and explore reason wise pending claims.",
        image: "/assets/image2/bi-dashboard-industry-01.webp",
        href: "/industries/fintech",
      },
      {
        label: "Retail Industry",
        description:
          "Analyze consumer spending power decisions. Make YOY comparison, net sales, collection & outstanding with smart dashboards. Identify the most profitable region and know the cause of underperforming outlets.",
        image: "/assets/image2/bi-dashboard-industry-02.webp",
        href: "/industries/retail",
      },
      {
        label: "Manufacturing Industry",
        description:
          "Have a glance at important metrics of process or machine downtime, warehouse operations, cost of goods sold and much more. Make time series comparison and shift-wise production analysis.",
        image: "/assets/image2/bi-dashboard-industry-03.webp",
        href: "/industries/manufacturing-and-production",
      },
      {
        label: "FMCG Industry",
        description:
          "Measure the profitability of product categories, monitor promotion performance, identify missed opportunities and make profitable decisions with dashboard services.",
        image: "/assets/image2/bi-dashboard-industry-04.webp",
        href: "/industries",
      },
      {
        label: "Automotive Industry",
        description:
          "Perform sales level analysis, increase market share and gain an aggregate picture of business activity in terms of inventory levels, inventory cost and operational performance.",
        image: "/assets/image2/bi-dashboard-industry-05.webp",
        href: "/industries/automotive",
      },
      {
        label: "Education Industry",
        description:
          "Gain 360-degree visibility from admissions to examinations, training to payroll management. Track fees, exams, finance, staff, assets and perform real-time reporting.",
        image: "/assets/image2/bi-dashboard-industry-06.webp",
        href: "/industries/education",
      },
      {
        label: "Public Sector Industry",
        description:
          "Discover new insights and better understand healthcare, government, defence, intelligence, higher education and not-for-profit operations for better decision making.",
        image: "/assets/image2/bi-dashboard-industry-07.webp",
        href: "/industries/public-sector",
      },
      {
        label: "Pharma Industry",
        description:
          "Know current stock, negotiate better with vendors, collaborate effectively, improve decision making and enhance quality of care with real-time dashboards.",
        image: "/assets/image2/bi-dashboard-industry-08.webp",
        href: "/industries/healthcare-pharma",
      },
      {
        label: "Real Estate Industry",
        description:
          "Collaborate quickly on daily business decisions. Reduce reporting errors. Monitor occupancy cost, revenue per square foot, profitability and operational insights.",
        image: "/assets/image2/bi-dashboard-industry-09.webp",
        href: "/industries",
      },
      {
        label: "Utility Industry",
        description:
          "Make better capital investment decisions and empower customers to manage their energy lifestyle using actionable dashboard insights.",
        image: "/assets/image2/bi-dashboard-industry-10.webp",
        href: "/industries",
      },
      {
        label: "Food & Beverage Industry",
        description:
          "Monitor waste management, identify expiry dates, discover store issues and improve profitability using dashboard analytics.",
        image: "/assets/image2/bi-dashboard-industry-11.webp",
        href: "/industries/fb-consumer-products",
      },
      {
        label: "Media Industry",
        description:
          "Track top channels, brands, categories and products. Analyze daily playout trends, hourly view trends and audience performance through dashboards.",
        image: "/assets/image2/bi-dashboard-industry-12.webp",
        href: "/industries",
      },
    ],
  },

  // Latest Insights — reuses the exact same BlogSection component AND the
  // exact same blog data source already established for the Data
  // Visualization page, per spec ("only fetch data through existing blog
  // data source"), rather than inventing new blog copy for this page.
  blogs: {
    ...dataVisualization.blogs,
    title: "Latest Insights",
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How to create a dashboard in Tableau?",
        answer:
          "Connect Tableau to your data source, drag the fields you want onto a new worksheet to build individual views, then combine those worksheets onto a single dashboard canvas and arrange them with Tableau's layout containers.",
      },
      {
        question: "How to present Tableau dashboard?",
        answer:
          "Use Tableau's Presentation Mode (or Story Points for a guided walkthrough) to present full-screen, and add filter and highlight actions beforehand so you can explore the data live in front of your audience instead of clicking through static slides.",
      },
      {
        question: "How to embed Tableau dashboard in website?",
        answer:
          "Publish the dashboard to Tableau Server or Tableau Public, then use the generated embed code (or the Tableau Embedding API) to drop it into your website as an iframe that stays connected to live data.",
      },
      {
        question: "How to publish dashboard in Tableau server?",
        answer:
          "From Tableau Desktop, choose Server > Publish Workbook, sign in to your Tableau Server or Tableau Cloud site, select the target project, and confirm your data source connections before publishing.",
      },
    ],
  },

  cta: {
    title: "Track, Analyze and Share Your Data With Custom BI Dashboards",
    description: "Let's show you how.",
    button: { label: "Request Demo", href: "#contact", variant: "primary" },
    backgroundImage: "/assets/image2/modern-bi-dashboard-bg-1.webp",
    textTheme: "light",
  },
};
