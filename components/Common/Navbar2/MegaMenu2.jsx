"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import "./MegaMenu2.css";

function Column({ column, onNavigate, showItemArrow }) {
  return (
    <ul className="as-megamenu-column">
      {column.heading && <li className="as-megamenu-column-heading">{column.heading}</li>}
      {column.items.map((item) => (
        <li key={item.title}>
          <Link href={item.href} className="as-megamenu-item" onClick={onNavigate}>
            <span className="as-megamenu-item-body">
              <span className="as-megamenu-item-title">{item.title}</span>
            </span>
            {showItemArrow && <FaArrowRight aria-hidden="true" className="as-megamenu-item-go" />}
          </Link>
          {item.links && (
            <ul className="as-megamenu-sublinks">
              {item.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} onClick={onNavigate}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Simple intro-card + column-grid mega menu (Industries, Our Work). */
export function GridMegaMenu({ intro, columns, onNavigate }) {
  const Icon = intro?.icon;
  return (
    <div className="as-megamenu-panel">
      {intro && (
        <Link href={intro.href} className="as-megamenu-intro" onClick={onNavigate}>
          {Icon && (
            <span className="as-megamenu-intro-icon">
              <Icon aria-hidden="true" />
            </span>
          )}
          <span className="as-megamenu-intro-title">{intro.title}</span>
          <span className="as-megamenu-intro-arrow">
            <FaArrowRight aria-hidden="true" />
          </span>
        </Link>
      )}
      <div className="as-megamenu-grid">
        {columns.map((column, index) => (
          <Column column={column} onNavigate={onNavigate} key={index} />
        ))}
      </div>
    </div>
  );
}

/** Sidebar + content mega menu: a left column of top-level categories (hover
 * to preview, click to navigate), with the active one's column grid shown in
 * an independently-scrolling pane on the right (What We Do). Mirrors
 * components/Whatwedo.jsx's sidebar/content structure. */
export function CategorizedMegaMenu({ categories, onNavigate }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const active = categories.find((category) => category.id === activeId) || categories[0];

  return (
    <div className="as-megamenu-panel as-megamenu-panel--sidebar">
      <div className="as-megamenu-sidebar" role="tablist">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = category.id === activeId;
          return (
            <Link
              key={category.id}
              href={category.href}
              role="tab"
              aria-selected={isActive}
              className={`as-megamenu-sidebar-item ${isActive ? "as-megamenu-sidebar-item-active" : ""}`}
              onMouseEnter={() => setActiveId(category.id)}
              onFocus={() => setActiveId(category.id)}
              onClick={onNavigate}
            >
              <span className="as-megamenu-sidebar-icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="as-megamenu-sidebar-title">{category.title}</span>
              {category.columns.length > 0 && (
                <FaArrowRight aria-hidden="true" className="as-megamenu-sidebar-arrow" />
              )}
            </Link>
          );
        })}
      </div>

      {active.columns.length > 0 && (
        <div className="as-megamenu-content" key={active.id}>
          <div className="as-megamenu-grid">
            {active.columns.map((column, index) => (
              <Column column={column} onNavigate={onNavigate} showItemArrow key={index} />
            ))}
          </div>

          <Link href={active.href} className="as-megamenu-view-all" onClick={onNavigate}>
            Explore {active.title}
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}
