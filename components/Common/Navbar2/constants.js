import { LuLayers, LuChartNoAxesColumnIncreasing, LuUsers, LuCloud, LuCpu } from "react-icons/lu";
import { FaBuilding, FaBriefcase } from "react-icons/fa";
import { INDUSTRIES } from "../../../data/industries";
import { OUR_WORK } from "../../../data/ourWork";

/**
 * Mirrors the content of the current site's "What We Do" mega menu
 * (components/Whatwedo.jsx CATEGORIES) so Navbar2 stays fully independent
 * of that component while showing the exact same labels/links. Sub-links
 * (e.g. the per-city list under "SAP Near You") are intentionally not
 * duplicated here - "SAP Near You" links straight to its own index page,
 * which already lists every city - keeping this wide mega menu's column
 * height reasonable instead of nesting a third menu level.
 */
export const WHAT_WE_DO_CATEGORIES = [
  {
    id: "sap-erp",
    icon: LuLayers,
    title: "SAP ERP",
    description: "Run Smarter with Integrated, Advanced ERP",
    href: "/sap",
    columns: [
      {
        heading: "SAP",
        items: [
          { title: "SAP Solutions", href: "/sap/solutions" },
          { title: "SAP Services", href: "/sap/services" },
          { title: "SAP Support", href: "/sap/support" },
          { title: "SAP Practices", href: "/sap/practices" },
          { title: "SAP Near You", href: "/erp/sap-near-you" },
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
    description: "Enable Decisive, Predictive Decision-Making",
    href: "/analytics",
    columns: [
      {
        heading: "Analytics Services",
        items: [
          { title: "Data Visualization", href: "#" },
          { title: "BI Dashboard", href: "#" },
          { title: "BI Managed Services", href: "#" },
          { title: "BI Training", href: "#" },
          { title: "BI Development", href: "#" },
          { title: "BI Consulting", href: "#" },
        ],
      },
      {
        heading: "Tableau",
        items: [
          { title: "Tableau Implementation", href: "#" },
          { title: "Tableau License", href: "#" },
        ],
      },
      {
        heading: null,
        items: [
          { title: "Power BI", href: "#" },
          { title: "Alteryx Solutions", href: "#" },
          { title: "QuickSight", href: "#" },
        ],
      },
    ],
  },
  {
    id: "salesforce-crm",
    icon: LuUsers,
    title: "Salesforce CRM",
    description: "Orchestrate Unified, Insight-Rich Customer Journeys",
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
        ],
      },
      {
        heading: "Salesforce Accelerators",
        items: [
          { title: "BCG Product Portfolio Analysis", href: "#" },
          { title: "Intelligent Geolocation, Beat Planning and PJP", href: "#" },
          { title: "Database Integration", href: "#" },
          { title: "Non-Moving Inventory Tracking", href: "#" },
        ],
      },
    ],
  },
  {
    id: "cloud",
    icon: LuCloud,
    title: "Cloud",
    description: "Leverage Elastic, Enterprise-Grade Infrastructure",
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
    description: "Anchor Operations in Adaptive Tech Stacks",
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
    description:
      "Showcasing our diverse experience across publicly listed, unicorn, fintech, digital-native, and SME companies across a wide range of niches.",
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
    description:
      "Showcasing our expertise, insights, success stories, industry knowledge, customer experiences, and business transformation initiatives across multiple industries and technologies.",
    href: "/our-work",
  },
  columns: [OUR_WORK.slice(0, 3), OUR_WORK.slice(3, 6), OUR_WORK.slice(6, 8)].map((column) => ({
    heading: null,
    items: column.map((item) => ({
      title: item.title,
      description: item.tagline,
      href: `/our-work/${item.slug}`,
    })),
  })),
};

export const NAV_LINKS = [
  { id: "who-we-are", label: "Who We Are", href: "/who-we-are" },
  { id: "careers", label: "Careers", href: "/careers" },
];
