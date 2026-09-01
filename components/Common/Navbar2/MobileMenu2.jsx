"use client";

import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaAngleDown, FaSearch, FaRegCalendarAlt, FaPhone } from "react-icons/fa";
import { WHAT_WE_DO_CATEGORIES, INDUSTRIES_MEGA_MENU, OUR_WORK_MEGA_MENU, NAV_LINKS } from "./constants";
import "./MobileMenu2.css";

function AccordionSection({ title, isOpen, onToggle, children }) {
  return (
    <div className="as-mobilemenu-section">
      <button type="button" className="as-mobilemenu-section-trigger" onClick={onToggle} aria-expanded={isOpen}>
        {title}
        <FaAngleDown aria-hidden="true" className={`as-mobilemenu-chevron ${isOpen ? "as-mobilemenu-chevron-open" : ""}`} />
      </button>
      <div className={`as-mobilemenu-section-panel ${isOpen ? "as-mobilemenu-section-panel-open" : ""}`}>
        <div className="as-mobilemenu-section-panel-inner">{children}</div>
      </div>
    </div>
  );
}

/**
 * Second-level accordion for a "What We Do" category (SAP ERP, Data
 * Analytics, ...) - mirrors the production navbar's mobile pattern
 * (Whatwedo.jsx: mobileOpenIndex, one category open at a time) instead of
 * dumping every category's items on screen at once.
 */
function CategoryAccordion({ category, isOpen, onToggle, onNavigate }) {
  return (
    <div className="as-mobilemenu-category-block">
      <button
        type="button"
        className="as-mobilemenu-category-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {category.title}
        <FaAngleDown aria-hidden="true" className={`as-mobilemenu-chevron ${isOpen ? "as-mobilemenu-chevron-open" : ""}`} />
      </button>
      <div className={`as-mobilemenu-section-panel ${isOpen ? "as-mobilemenu-section-panel-open" : ""}`}>
        <div className="as-mobilemenu-section-panel-inner">
          <div className="as-mobilemenu-category-items">
            {category.columns.flatMap((column) => column.items).map((item) => (
              <div key={item.title} className="as-mobilemenu-leaf-group">
                <Link href={item.href} className="as-mobilemenu-leaf-link" onClick={onNavigate}>
                  {item.title}
                </Link>
                {item.links && (
                  <ul className="as-mobilemenu-sublinks">
                    {item.links.map((link) => (
                      <li key={link.title}>
                        <Link href={link.href} onClick={onNavigate}>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileMenu2({ isOpen, onClose, onBookSlot }) {
  const [openSection, setOpenSection] = useState(null);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  function toggleSection(id) {
    setOpenSection((current) => (current === id ? null : id));
  }

  function toggleCategory(id) {
    setOpenCategoryId((current) => (current === id ? null : id));
  }

  return (
    <div
      className={`as-mobilemenu-overlay ${isOpen ? "as-mobilemenu-overlay-open" : ""}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="as-mobilemenu-panel">
        <div className="as-mobilemenu-header">
          <span className="as-mobilemenu-header-title">Menu</span>
          <button type="button" className="as-mobilemenu-close-btn" onClick={onClose} aria-label="Close menu">
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <nav className="as-mobilemenu-body">
          <AccordionSection
            title="What We Do"
            isOpen={openSection === "whatWeDo"}
            onToggle={() => toggleSection("whatWeDo")}
          >
            {WHAT_WE_DO_CATEGORIES.map((category) =>
              category.columns.length > 0 ? (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  isOpen={openCategoryId === category.id}
                  onToggle={() => toggleCategory(category.id)}
                  onNavigate={onClose}
                />
              ) : (
                <div key={category.id} className="as-mobilemenu-category-block">
                  <Link href={category.href} className="as-mobilemenu-category-trigger" onClick={onClose}>
                    {category.title}
                  </Link>
                </div>
              )
            )}
          </AccordionSection>

          <AccordionSection
            title="Industries"
            isOpen={openSection === "industries"}
            onToggle={() => toggleSection("industries")}
          >
            {INDUSTRIES_MEGA_MENU.columns.flatMap((column) => column.items).map((item) => (
              <Link key={item.title} href={item.href} className="as-mobilemenu-leaf-link" onClick={onClose}>
                {item.title}
              </Link>
            ))}
          </AccordionSection>

          <AccordionSection
            title="Our Work"
            isOpen={openSection === "ourWork"}
            onToggle={() => toggleSection("ourWork")}
          >
            {OUR_WORK_MEGA_MENU.columns.flatMap((column) => column.items).map((item) => (
              <Link key={item.title} href={item.href} className="as-mobilemenu-leaf-link" onClick={onClose}>
                {item.title}
              </Link>
            ))}
          </AccordionSection>

          {NAV_LINKS.map((link) => (
            <Link key={link.id} href={link.href} className="as-mobilemenu-plain-link" onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="as-mobilemenu-footer">
          <button type="button" className="as-mobilemenu-search-btn">
            <FaSearch aria-hidden="true" />
            Search
          </button>
          <button
            type="button"
            className="as-mobilemenu-book-btn"
            onClick={() => {
              onClose();
              onBookSlot();
            }}
          >
            <FaRegCalendarAlt aria-hidden="true" />
            Book Slot
          </button>
          <Link href="/contact-us" className="as-mobilemenu-contact-btn" onClick={onClose}>
            <FaPhone aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
