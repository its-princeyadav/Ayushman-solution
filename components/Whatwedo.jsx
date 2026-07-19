"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaCogs, FaChartLine, FaUsers, FaCloud, FaMicrochip, FaAngleDown, FaAngleRight } from "react-icons/fa";
import "./Whatwedo.css";

const CATEGORIES = [
  {
    id: "sap-erp",
    icon: FaCogs,
    title: "SAP ERP",
    description: "Run Smarter with Integrated, Advanced ERP",
    href: "/sap",
    columns: [
      {
        heading: "SAP",
        items: [
          { title: "SAP Solutions", description: "Thrive with SAP Business One and SAP S/4HANA Cloud", href: "/sap/solutions" },
          { title: "SAP Services", description: "SAP application services and industry-specific deployment", href: "/sap/services" },
          { title: "SAP Support", description: "Enabling IT modernization with SAP managed solutions", href: "/sap/support" },
          { title: "SAP Practices", description: "RISE with SAP and GROW with SAP solutions.", href: "/sap/practices" },
          {
            title: "SAP Near You",
            href: "#",
            links: [
              { title: "Ahmedabad", href: "#" },
              { title: "Mumbai", href: "#" },
              { title: "Delhi NCR", href: "#" },
              { title: "Bangalore", href: "#" },
              { title: "Chennai", href: "#" },
              { title: "Hyderabad", href: "#" },
            ],
          },
        ],
      },
      {
        heading: "SAP Business One",
        items: [
          { title: "Overview", description: "A scalable ERP solution for SMEs.", href: "/sap/business-one" },
          { title: "Implementation", description: "Cutting-edge deployment with maximized agility.", href: "/sap/business-one/implementation" },
          { title: "Integrations", description: "Connect SAP with your apps and systems.", href: "#" },
          { title: "Customization", description: "Personalize SAP B1 as per your business processes.", href: "/sap/business-one/customization" },
          { title: "Managed Services", description: "Reliable user adoption to maintenance support.", href: "#" },
          { title: "Migrations", description: "Transition data and apps to B1 seamlessly.", href: "#" },
          { title: "SAP License", description: "Understanding best-fit SAP B1 user types.", href: "#" },
          { title: "Consulting", description: "Carve your SAP vision with dependable guidance.", href: "#" },
          { title: "Add-Ons", description: "Extend SAP B1 with ready-made add-ons.", href: "#" },
        ],
      },
    ],
  },
  {
    id: "data-analytics",
    icon: FaChartLine,
    title: "Data Analytics",
    description: "Enable Decisive, Predictive Decision-Making",
    href: "/analytics",
    columns: [
      {
        heading: "Analytics Services",
        items: [
          { title: "Data Visualization", description: "Go from information to insights.", href: "#" },
          { title: "BI Dashboard", description: "Track, analyze, and share data easily.", href: "#" },
          { title: "BI Managed Services", description: "Dashboard monitoring and data security.", href: "#" },
          { title: "BI Training", description: "Teaching core analytics concepts.", href: "#" },
          { title: "BI Development", description: "Designing simple, intuitive dashboards.", href: "#" },
          { title: "BI Consulting", description: "Define effective BI strategy and roadmap.", href: "#" },
        ],
      },
      {
        heading: "Tableau",
        items: [
          { title: "Tableau Implementation", description: "Advanced analytics software installation.", href: "#" },
          { title: "Tableau License", description: "Products & pricing for teams & enterprise.", href: "#" },
        ],
      },
      {
        heading: null,
        items: [
          { title: "Power BI", description: "Powering businesses to make insights-driven decisions.", href: "#" },
          { title: "Alteryx Solutions", description: "Data-driven, advanced automation solutions to build intelligent enterprises.", href: "#" },
          { title: "QuickSight", description: "Seamless Cloud Integration for SMBs with Amazon BI Tool.", href: "#" },
        ],
      },
    ],
  },
  {
    id: "salesforce-crm",
    icon: FaUsers,
    title: "Salesforce CRM",
    description: "Orchestrate Unified, Insight-Rich Customer Journeys",
    href: "/salesforce",
    columns: [
      {
        heading: "Salesforce",
        items: [
          { title: "Consultation", description: "Direction to unlock the power of AI+Data+CRM.", href: "#" },
          { title: "Implementation", description: "Configure and deploy your CRM system.", href: "#" },
          { title: "Integration", description: "Combining Salesforce with other tools.", href: "#" },
          { title: "Support", description: "Managed CRM services and maintenance.", href: "#" },
          { title: "Customization", description: "Personalizing CRM for your business.", href: "#" },
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
    icon: FaCloud,
    title: "Cloud",
    description: "Leverage Elastic, Enterprise-Grade Infrastructure",
    href: "/cloud",
    columns: [
      {
        heading: "Cloud Services",
        items: [
          { title: "Cloud Consulting", description: "Strategic roadmap for cloud adoption.", href: "#" },
          { title: "Cloud Migration", description: "Move workloads with zero disruption.", href: "#" },
          { title: "Managed Cloud Services", description: "24/7 monitoring and optimization.", href: "#" },
          { title: "DevOps & Automation", description: "Faster, reliable delivery pipelines.", href: "#" },
        ],
      },
      {
        heading: "Cloud Platforms",
        items: [
          { title: "Amazon Web Services", description: "Scalable AWS infrastructure and support.", href: "#" },
          { title: "Microsoft Azure", description: "Enterprise-grade Azure deployments.", href: "#" },
          { title: "Google Cloud Platform", description: "Modern GCP architecture and tooling.", href: "#" },
          { title: "Hybrid & Private Cloud", description: "Secure infrastructure tailored to you.", href: "#" },
        ],
      },
    ],
  },
  {
    id: "technology",
    icon: FaMicrochip,
    title: "Technology",
    description: "Anchor Operations in Adaptive Tech Stacks",
    href: "/technology",
    columns: [
      {
        heading: "Tech Edge",
        items: [
          { title: "Technology Services", description: "Industry-ready, advanced business technologies.", href: "#" },
          { title: "Business Process Consulting", description: "Strategic advisory for organizational process agility.", href: "#" },
        ],
      },
      {
        heading: "Offshore Tech Solutions",
        items: [
          { title: "Offshore Development Center", description: "Dedicated project divisions with skilled resources.", href: "#" },
          { title: "Staff Augmentation", description: "Pool of talented digital engineering developers.", href: "#" },
        ],
      },
    ],
  },
];

const MENU_ID = "whatwedo";

export default function Whatwedo() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const panelWrapRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(min-width: 1025px)");
    setIsDesktop(mq.matches);
    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Mobile-only: collapse this accordion when a sibling nav submenu opens,
  // or when the off-canvas drawer itself closes (core.js dispatches this).
  // Desktop hover/click behaviour never touches this event, so it can't
  // affect desktop timing.
  useEffect(() => {
    function handleCloseRequest(e) {
      if (isDesktop || e.detail?.except === MENU_ID) return;
      setIsOpen(false);
      setMobileOpenIndex(null);
    }
    document.addEventListener("wcf:submenu-close-request", handleCloseRequest);
    return () => document.removeEventListener("wcf:submenu-close-request", handleCloseRequest);
  }, [isDesktop]);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setIsOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 150);
  }

  function updatePanelPosition() {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPanelPos({ top: rect.bottom, left: window.innerWidth / 2 });
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    updatePanelPosition();

    function onKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    function onClickOutside(e) {
      const insideTrigger = containerRef.current && containerRef.current.contains(e.target);
      const insidePanel = panelWrapRef.current && panelWrapRef.current.contains(e.target);
      if (!insideTrigger && !insidePanel) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("resize", updatePanelPosition);
    window.addEventListener("scroll", updatePanelPosition, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("resize", updatePanelPosition);
      window.removeEventListener("scroll", updatePanelPosition, true);
    };
  }, [isOpen]);

  useEffect(() => () => clearCloseTimer(), []);

  function closeMenu() {
    setIsOpen(false);
    setActiveIndex(0);
  }

  const activeCategory = CATEGORIES[activeIndex];

  const desktopPanel = (
    <div
      ref={panelWrapRef}
      className={`wcf-megamenu__panel-position ${isOpen ? "is-open" : ""}`}
      style={{ top: panelPos.top, left: panelPos.left }}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className={`wcf-megamenu__panel ${isOpen ? "is-open" : ""}`} role="menu">
        <div className="wcf-megamenu__sidebar" role="none">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const isActive = index === activeIndex;
            return (
              <a
                key={category.id}
                href={category.href}
                role="menuitem"
                className={`wcf-megamenu__sidebar-item ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={closeMenu}
              >
                <span className="wcf-megamenu__sidebar-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="wcf-megamenu__sidebar-text">
                  <span className="wcf-megamenu__sidebar-title">{category.title}</span>
                  <span className="wcf-megamenu__sidebar-desc">{category.description}</span>
                </span>
                {isActive && <FaAngleRight aria-hidden="true" className="wcf-megamenu__sidebar-arrow" />}
              </a>
            );
          })}
        </div>

        <div className="wcf-megamenu__content" key={activeCategory.id}>
          {activeCategory.columns.map((column, columnIndex) => (
            <div className="wcf-megamenu__column" key={`${activeCategory.id}-${columnIndex}`}>
              {column.heading && <h4 className="wcf-megamenu__column-heading">{column.heading}</h4>}
              <ul className="wcf-megamenu__column-list">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} className="wcf-megamenu__item" onClick={closeMenu}>
                      <span className="wcf-megamenu__item-title">{item.title}</span>
                      {item.description && <span className="wcf-megamenu__item-desc">{item.description}</span>}
                    </a>
                    {item.links && (
                      <ul className="wcf-megamenu__sublinks">
                        {item.links.map((link) => (
                          <li key={link.title}>
                            <a href={link.href} onClick={closeMenu}>{link.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <li
      id="menu-item-8637"
      ref={containerRef}
      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8637 wcf-megamenu"
      onMouseEnter={isDesktop ? openMenu : undefined}
      onMouseLeave={isDesktop ? scheduleClose : undefined}
    >
      <a
        href="#"
        ref={triggerRef}
        className="wcf-nav-item wcf-megamenu__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault();
          const next = !isOpen;
          if (!isDesktop && next) {
            document.dispatchEvent(
              new CustomEvent("wcf:submenu-close-request", { detail: { except: MENU_ID } }),
            );
          }
          setIsOpen(next);
        }}
      >
        What We Do
        <FaAngleDown aria-hidden="true" className={`wcf-megamenu__chevron ${isOpen ? "is-open" : ""}`} />
      </a>

      {mounted && isDesktop && createPortal(desktopPanel, document.body)}

      {/* Mobile accordion — the top-level trigger above toggles `isOpen` to
          reveal this whole category list; each category then expands
          individually via mobileOpenIndex. No separate top-level button, so
          there is only ever one visible "What We Do" control. */}
      <div className="wcf-megamenu__mobile">
        <div className={`wcf-megamenu__accordion-panel ${isOpen ? "is-open" : ""}`}>
          <div className="wcf-megamenu__accordion-panel-inner">
            <div className="wcf-megamenu__accordion-panel-content wcf-megamenu__accordion-panel-content--top">
              {CATEGORIES.map((category, index) => {
                const isExpanded = mobileOpenIndex === index;
                return (
                  <div className="wcf-megamenu__accordion-item" key={category.id}>
                    <button
                      type="button"
                      className="wcf-megamenu__accordion-trigger"
                      aria-expanded={isExpanded}
                      onClick={() => setMobileOpenIndex(isExpanded ? null : index)}
                    >
                      <span className="wcf-megamenu__sidebar-title">{category.title}</span>
                      <FaAngleDown aria-hidden="true" className={`wcf-megamenu__chevron ${isExpanded ? "is-open" : ""}`} />
                    </button>
                    <div className={`wcf-megamenu__accordion-panel ${isExpanded ? "is-open" : ""}`}>
                      <div className="wcf-megamenu__accordion-panel-inner">
                        <div className="wcf-megamenu__accordion-panel-content">
                          {category.columns.map((column, columnIndex) => (
                            <div className="wcf-megamenu__column" key={`${category.id}-mobile-${columnIndex}`}>
                              {column.heading && <h4 className="wcf-megamenu__column-heading">{column.heading}</h4>}
                              <ul className="wcf-megamenu__column-list">
                                {column.items.map((item) => (
                                  <li key={item.title}>
                                    <a href={item.href} className="wcf-megamenu__item" onClick={closeMenu}>
                                      <span className="wcf-megamenu__item-title">{item.title}</span>
                                    </a>
                                    {item.links && (
                                      <ul className="wcf-megamenu__sublinks">
                                        {item.links.map((link) => (
                                          <li key={link.title}>
                                            <a href={link.href} onClick={closeMenu}>{link.title}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
