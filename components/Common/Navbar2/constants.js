import { LuLayers, LuChartNoAxesColumnIncreasing, LuUsers, LuCloud, LuCpu } from "react-icons/lu";
import { FaBuilding, FaBriefcase } from "react-icons/fa";
import { INDUSTRIES } from "../../../data/industries";
import { OUR_WORK } from "../../../data/ourWork";

/**
 * Mirrors the content of the current site's "What We Do" mega menu
 * (components/Whatwedo.jsx CATEGORIES) verbatim - including the "SAP Near
 * You" city sub-links - so Navbar2 stays fully independent of that
 * component while showing identical content.
 */
export const WHAT_WE_DO_CATEGORIES = [
  {
    id: "sap-erp",
    icon: LuLayers,
    title: "SAP ERP",
    href: "/sap",
    columns: [
      {
        heading: "SAP",
        items: [
          { title: "SAP Solutions", href: "/sap/solutions" },
          { title: "SAP Services", href: "/sap/services" },
          { title: "SAP Support", href: "/sap/support" },
          { title: "SAP Practices", href: "/sap/practices" },
          {
            title: "SAP Near You",
            href: "/erp/sap-near-you",
            links: [
              { title: "Ahmedabad", href: "/erp/erp-software-ahmedabad" },
              { title: "Mumbai", href: "/erp/erp-software-mumbai" },
              { title: "Delhi NCR", href: "/erp/erp-software-delhi-ncr" },
              { title: "Gurgaon", href: "/erp/erp-software-gurgaon" },
              { title: "Bangalore", href: "/erp/erp-software-bangalore" },
              { title: "Chennai", href: "/erp/erp-software-chennai" },
              { title: "Hyderabad", href: "/erp/erp-software-hyderabad" },
              { title: "Kerala", href: "/erp/erp-software-kerala" },
              { title: "Nepal", href: "/erp/erp-software-nepal" },
              { title: "Noida", href: "/erp/erp-software-noida" },
              { title: "Pune", href: "/erp/erp-software-pune" },
              { title: "Rajasthan", href: "/erp/erp-software-rajasthan" },
              { title: "Coimbatore", href: "/erp/erp-software-coimbatore" },
            ],
          },
        ],
      },
      {
        heading: "SAP Business One",
        items: [
          { title: "Overview", href: "/sap/business-one" },
          { title: "Implementation", href: "/sap/business-one/implementation" },
          { title: "Integrations", href: "/sap/business-one/integration" },
          { title: "Customization", href: "/sap/business-one/customization" },
          { title: "Managed Services", href: "/sap/business-one/managed-services" },
        ],
      },
      {
        heading: null,
        items: [
          { title: "Migrations", href: "/sap/business-one/migration" },
          { title: "SAP License", href: "/sap/business-one/license" },
          { title: "Consulting", href: "/sap/consulting" },
          { title: "Add-Ons", href: "/sap/business-one/add-ons" },
        ],
      },
    ],
  },
  {
    id: "data-analytics",
    icon: LuChartNoAxesColumnIncreasing,
    title: "Data Analytics",
    href: "/analytics",
    columns: [
      {
        heading: "Analytics Services",
        items: [
          { title: "Data Visualization", href: "/analytics/data-visualization" },
          { title: "BI Dashboard", href: "/analytics/bi-dashboard" },
          { title: "BI Managed Services", href: "/analytics/bi-managed-services" },
          { title: "BI Training", href: "/analytics/bi-training" },
          { title: "BI Development", href: "/analytics/bi-development" },
          { title: "BI Consulting", href: "/analytics/bi-consulting" },
        ],
      },
      {
        heading: "Tableau",
        items: [
          { title: "Tableau Implementation", href: "/analytics/tableau-implementation" },
          { title: "Tableau License", href: "/analytics/tableau-license" },
        ],
      },
      {
        heading: null,
        items: [
          { title: "Power BI", href: "/analytics#power-bi" },
          { title: "Alteryx Solutions", href: "/analytics#automation" },
          { title: "QuickSight", href: "/analytics#data-science" },
        ],
      },
    ],
  },
  {
    id: "salesforce-crm",
    icon: LuUsers,
    title: "Salesforce CRM",
    href: "/salesforce",
    columns: [
      {
        heading: "Salesforce",
        items: [
          { title: "Consultation", href: "#" },
          { title: "Implementation", href: "#" },
          { title: "Integration", href: "#" },
          { title: "Support", href: "#" },
          { title: "Customization", href: "#" },
          { title: "Migration", href: "#" },
          { title: "Salesforce Products", href: "#" },
        ],
      },
      {
        heading: "Salesforce Accelerators",
        items: [
          { title: "BCG Product Portfolio Analysis", href: "#" },
          { title: "Intelligent Geolocation, Beat Planning and PJP", href: "#" },
          { title: "Database Integration", href: "#" },
          { title: "Non-Moving Inventory Tracking", href: "#" },
          { title: "Custom CPQ (Configure, Price, Quote)", href: "#" },
          { title: "WhatsApp Integration", href: "#" },
          { title: "Single View Competitor and Account Planning", href: "#" },
          { title: "File Tagging", href: "#" },
        ],
      },
    ],
  },
  {
    id: "cloud",
    icon: LuCloud,
    title: "Cloud",
    href: "/cloud",
    columns: [
      {
        heading: "Cloud Services",
        items: [
          { title: "Cloud Consulting", href: "#" },
          { title: "Cloud Migration", href: "#" },
          { title: "Managed Cloud Services", href: "#" },
          { title: "DevOps & Automation", href: "#" },
        ],
      },
      {
        heading: "Cloud Platforms",
        items: [
          { title: "Amazon Web Services", href: "#" },
          { title: "Microsoft Azure", href: "#" },
          { title: "Google Cloud Platform", href: "#" },
          { title: "Hybrid & Private Cloud", href: "#" },
        ],
      },
    ],
  },
  {
    id: "technology",
    icon: LuCpu,
    title: "Technology",
    href: "/technology",
    columns: [
      {
        heading: "Tech Edge",
        items: [
          { title: "Technology Services", href: "#" },
          { title: "Business Process Consulting", href: "#" },
        ],
      },
      {
        heading: "Offshore Tech Solutions",
        items: [
          { title: "Offshore Development Center", href: "#" },
          { title: "Staff Augmentation", href: "#" },
        ],
      },
    ],
  },
];

const INDUSTRIES_COLUMN_SIZE = Math.ceil(INDUSTRIES.length / 3);

export const INDUSTRIES_MEGA_MENU = {
  intro: {
    icon: FaBuilding,
    title: "Industries",
    href: "/industries",
  },
  columns: [
    INDUSTRIES.slice(0, INDUSTRIES_COLUMN_SIZE),
    INDUSTRIES.slice(INDUSTRIES_COLUMN_SIZE, INDUSTRIES_COLUMN_SIZE * 2),
    INDUSTRIES.slice(INDUSTRIES_COLUMN_SIZE * 2),
  ].map((column) => ({
    heading: null,
    items: column.map((industry) => ({
      title: industry.shortTitle || industry.title,
      href: `/industries/${industry.slug}`,
    })),
  })),
};

export const OUR_WORK_MEGA_MENU = {
  intro: {
    icon: FaBriefcase,
    title: "Our Work",
    href: "/our-work",
  },
  columns: [OUR_WORK.slice(0, 3), OUR_WORK.slice(3, 6), OUR_WORK.slice(6, 8)].map((column) => ({
    heading: null,
    items: column.map((item) => ({
      title: item.title,
      href: `/our-work/${item.slug}`,
    })),
  })),
};

export const NAV_LINKS = [
  { id: "who-we-are", label: "Who We Are", href: "/who-we-are" },
  { id: "careers", label: "Careers", href: "/careers" },
];
