// Shared data source for the Industries mega menu and the /industries/[slug] pages.
// Keeping one source means every menu entry always resolves to a real route.

export const INDUSTRIES = [
  {
    slug: "healthcare-pharma",
    title: "Healthcare & Pharma",
    tagline: "Digitizing care delivery, compliance, and the pharma supply chain.",
    summary:
      "Healthcare providers and pharmaceutical companies operate under strict regulatory scrutiny while racing to modernize patient care, clinical workflows, and supply chain visibility. We help healthcare and pharma organizations connect operations, finance, and compliance data into a single, auditable system of record.",
    challenges: [
      "Tracking batch-level traceability and expiry across multi-location pharma inventory",
      "Meeting regulatory and audit requirements without slowing day-to-day operations",
      "Unifying hospital and clinic administrative systems with finance and procurement",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Unifying online, in-store, and back-office retail operations.",
    summary:
      "Retailers need real-time visibility across inventory, point-of-sale, and customer channels to compete on speed and experience. We help retail businesses connect storefronts, warehouses, and finance so stock and demand data stay in sync.",
    challenges: [
      "Reconciling inventory across multiple stores, warehouses, and online channels",
      "Connecting POS systems with ERP and finance for real-time reporting",
      "Personalizing customer engagement using unified sales and loyalty data",
    ],
  },
  {
    slug: "gems-and-jewelry",
    title: "Gems and Jewelry",
    tagline: "Precision inventory and costing for high-value, low-volume trade.",
    summary:
      "The gems and jewelry trade depends on precise tracking of high-value, low-volume inventory across cutting, certification, and resale. We help jewelry businesses manage batch costing, purity, and consignment stock with full traceability.",
    challenges: [
      "Tracking piece-level cost, purity, and certification through production stages",
      "Managing consignment and memo stock across branches and trade partners",
      "Costing accurately as gold and gemstone market rates fluctuate",
    ],
  },
  {
    slug: "publication",
    title: "Publication",
    tagline: "Streamlining content, print, and subscription operations.",
    summary:
      "Publishers manage overlapping cycles of editorial production, print runs, and subscription billing. We help publication houses bring operations and finance data together so print costs, royalties, and circulation stay accurate.",
    challenges: [
      "Managing print run costing alongside fluctuating paper and ink prices",
      "Tracking royalties and rights across authors, editions, and formats",
      "Automating subscription billing and renewal workflows",
    ],
  },
  {
    slug: "mall-and-facilities",
    title: "Mall and Facilities",
    tagline: "Centralizing lease, tenant, and facility operations.",
    summary:
      "Mall operators and facility managers juggle tenant leases, common-area maintenance, and vendor billing across large properties. We help teams centralize lease management, maintenance scheduling, and tenant billing in one system.",
    challenges: [
      "Tracking lease terms, escalations, and renewals across many tenants",
      "Scheduling and costing preventive maintenance across large facilities",
      "Billing common area maintenance charges accurately and on time",
    ],
  },
  {
    slug: "dairy",
    title: "Dairy",
    tagline: "Managing perishable supply chains from farm to shelf.",
    summary:
      "Dairy businesses run on tight margins and short shelf lives, making procurement, cold-chain logistics, and route-to-market efficiency critical. We help dairy companies connect procurement, production, and distribution data in real time.",
    challenges: [
      "Managing milk procurement pricing and quality-based payouts to suppliers",
      "Tracking shelf life and cold-chain compliance from production to delivery",
      "Optimizing distribution routes and van sales reconciliation",
    ],
  },
  {
    slug: "manufacturing-and-production",
    title: "Manufacturing and Production",
    tagline: "Connecting shop floor data with planning and finance.",
    summary:
      "Manufacturers need accurate, real-time data flowing between production planning, shop floor execution, and finance to control costs and meet delivery commitments. We help manufacturing businesses integrate planning, quality, and costing into one connected system.",
    challenges: [
      "Planning production against fluctuating raw material availability and lead times",
      "Tracking work-in-progress costs and shop floor efficiency in real time",
      "Maintaining quality and compliance documentation across production batches",
    ],
  },
  {
    slug: "oil-and-gas",
    title: "Oil and Gas",
    tagline: "Bringing control to complex, asset-heavy operations.",
    summary:
      "Oil and gas operations span exploration, distribution, and retail, each with distinct compliance, asset, and safety demands. We help oil and gas businesses manage asset maintenance, inventory, and regulatory reporting in one platform.",
    challenges: [
      "Tracking asset maintenance and safety compliance across distributed sites",
      "Managing fuel inventory reconciliation across depots and retail outlets",
      "Reporting accurately against environmental and regulatory requirements",
    ],
  },
  {
    slug: "sports",
    title: "Sports",
    tagline: "Running events, merchandising, and membership as one business.",
    summary:
      "Sports organizations manage ticketing, merchandising, sponsorships, and membership programs that all need to reconcile against a common financial view. We help sports businesses unify these revenue streams for clearer reporting and faster decisions.",
    challenges: [
      "Reconciling ticketing, sponsorship, and merchandise revenue in one ledger",
      "Managing membership billing, renewals, and benefits at scale",
      "Tracking inventory and costs for event-driven merchandising",
    ],
  },
  {
    slug: "fb-consumer-products",
    title: "F&B/Consumer Products",
    tagline: "Managing recipes, shelf life, and fast-moving distribution.",
    summary:
      "F&B and consumer product companies operate with perishable inventory, recipe-based production, and demanding distribution networks. We help these businesses manage batch costing, shelf-life tracking, and route-to-market execution.",
    challenges: [
      "Costing multi-ingredient recipes accurately as raw material prices shift",
      "Tracking batch and shelf-life data through distribution",
      "Managing high-frequency, high-volume order and delivery cycles",
    ],
  },
  {
    slug: "chemical",
    title: "Chemical",
    tagline: "Managing formulation, safety, and regulatory complexity.",
    summary:
      "Chemical manufacturers must manage complex formulations, hazardous material handling, and strict regulatory reporting simultaneously. We help chemical businesses connect formulation management, compliance documentation, and production costing.",
    challenges: [
      "Managing formulation versions and by-product costing accurately",
      "Maintaining safety data sheets and regulatory compliance documentation",
      "Tracking hazardous material storage and handling requirements",
    ],
  },
  {
    slug: "car-rental",
    title: "Car Rental",
    tagline: "Tracking fleet, bookings, and maintenance in real time.",
    summary:
      "Car rental businesses need constant visibility into fleet availability, booking schedules, and vehicle maintenance to maximize utilization. We help car rental operators connect booking systems with fleet and finance data.",
    challenges: [
      "Maximizing fleet utilization across booking locations and seasons",
      "Scheduling preventive maintenance without disrupting availability",
      "Reconciling billing, damages, and deposits across rental cycles",
    ],
  },
  {
    slug: "high-tech-and-electronics",
    title: "High Tech and Electronics",
    tagline: "Managing fast product cycles and complex bills of materials.",
    summary:
      "High-tech and electronics companies deal with rapid product cycles, multi-level bills of materials, and global component sourcing. We help these businesses manage BOM complexity, procurement, and after-sales service in one system.",
    challenges: [
      "Managing multi-level BOMs across frequent product revisions",
      "Coordinating global component sourcing and lead-time volatility",
      "Tracking warranty, RMA, and after-sales service efficiently",
    ],
  },
  {
    slug: "automotive",
    title: "Automotive",
    tagline: "Connecting production, dealers, and after-sales service.",
    summary:
      "Automotive manufacturers and dealer networks need tight coordination between production planning, parts inventory, and after-sales service. We help automotive businesses unify these functions for better delivery and service performance.",
    challenges: [
      "Synchronizing production planning with dealer demand forecasts",
      "Managing spare parts inventory across service centers",
      "Tracking warranty claims and service history accurately",
    ],
  },
  {
    slug: "packaging",
    title: "Packaging",
    tagline: "Costing materials and production runs with precision.",
    summary:
      "Packaging manufacturers operate on thin margins where material costing, production runs, and client-specific specifications must be tracked precisely. We help packaging businesses manage job costing and production scheduling accurately.",
    challenges: [
      "Costing jobs accurately against volatile raw material prices",
      "Managing client-specific specifications and approval cycles",
      "Scheduling production runs to minimize changeover downtime",
    ],
  },
  {
    slug: "warehouse",
    title: "Warehouse",
    tagline: "Optimizing storage, picking, and dispatch operations.",
    summary:
      "Warehouse operators need accurate, real-time inventory visibility to optimize storage utilization and fulfillment speed. We help warehouse and 3PL businesses connect inventory, labor, and dispatch data for faster, error-free operations.",
    challenges: [
      "Optimizing storage layout and slotting for fast-moving SKUs",
      "Reducing picking errors and improving dispatch turnaround",
      "Tracking inbound and outbound inventory across multiple clients or locations",
    ],
  },
  {
    slug: "trading-and-distribution",
    title: "Trading and Distribution",
    tagline: "Managing multi-location stock and margins in real time.",
    summary:
      "Trading and distribution businesses move high volumes of SKUs across multiple locations and price tiers, making margin visibility critical. We help these businesses connect procurement, inventory, and sales data for accurate, real-time margin tracking.",
    challenges: [
      "Tracking landed cost and margins across multi-tier distribution",
      "Managing stock transfers and reconciliation across branches",
      "Handling multi-currency and multi-price-list transactions",
    ],
  },
  {
    slug: "fintech",
    title: "Fintech",
    tagline: "Scaling operations while staying audit-ready.",
    summary:
      "Fintech companies must scale transaction volumes while maintaining airtight financial controls, reconciliation, and audit trails. We help fintech businesses connect operational systems with finance for real-time, audit-ready reporting.",
    challenges: [
      "Reconciling high-volume transactions across payment partners in real time",
      "Maintaining audit trails and controls as transaction volume scales",
      "Integrating core platforms with accounting and compliance systems",
    ],
  },
  {
    slug: "engineering-construction-and-operations",
    title: "Engineering, Construction and Operations",
    shortTitle: "ECO (Engineering, Construction and Operations)",
    tagline: "Bringing project financials and site operations together.",
    summary:
      "Engineering and construction firms run long, capital-intensive projects where cost overruns and scheduling delays carry real risk. We help ECO businesses connect project costing, procurement, and site operations into one view.",
    challenges: [
      "Tracking project costs against budget across long execution timelines",
      "Managing subcontractor billing and procurement across multiple sites",
      "Maintaining visibility into equipment utilization and site inventory",
    ],
  },
  {
    slug: "education",
    title: "Education",
    tagline: "Connecting admissions, operations, and finance.",
    summary:
      "Educational institutions manage admissions, fee collection, and administrative operations that need to stay connected for accurate reporting and planning. We help education organizations unify these processes into a single system.",
    challenges: [
      "Managing fee collection, scholarships, and reconciliation across programs",
      "Connecting admissions and student data with finance and reporting",
      "Streamlining administrative operations across campuses or branches",
    ],
  },
  {
    slug: "public-sector",
    title: "Public Sector",
    tagline: "Delivering transparency and accountability at scale.",
    summary:
      "Public sector organizations must deliver services efficiently while maintaining strict accountability, budget compliance, and transparent reporting. We help public sector bodies modernize operations without compromising governance.",
    challenges: [
      "Maintaining budget compliance and transparent financial reporting",
      "Modernizing legacy systems without disrupting citizen services",
      "Coordinating multi-department workflows and approvals",
    ],
  },
  {
    slug: "banking-financial-services-and-insurance-bfsi",
    title: "Banking, Financial Services and Insurance (BFSI)",
    shortTitle: "Banking, Financial Services and Insurance (BFSI)",
    tagline: "Modernizing operations under strict regulatory demands.",
    summary:
      "BFSI organizations operate under intense regulatory scrutiny while needing to modernize customer experience, risk management, and back-office operations. We help BFSI businesses connect data across systems for accurate, compliant, real-time reporting.",
    challenges: [
      "Meeting evolving regulatory and compliance reporting requirements",
      "Connecting core banking or insurance systems with finance and risk data",
      "Managing risk and fraud detection across high transaction volumes",
    ],
  },
];

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}
