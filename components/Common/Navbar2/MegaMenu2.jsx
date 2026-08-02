"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import "./MegaMenu2.css";

function Column({ column, onNavigate }) {
  return (
    <ul className="as-megamenu-column">
      {column.heading && <li className="as-megamenu-column-heading">{column.heading}</li>}
      {column.items.map((item) => (
        <li key={item.title}>
          <Link href={item.href} className="as-megamenu-item" onClick={onNavigate}>
            <span className="as-megamenu-item-title">{item.title}</span>
            {item.description && <span className="as-megamenu-item-desc">{item.description}</span>}
          </Link>
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
          <span className="as-megamenu-intro-desc">{intro.description}</span>
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

/** Tabbed mega menu: a row of top-level categories, with the active one's
 * column grid shown beneath (What We Do). */
export function CategorizedMegaMenu({ categories, onNavigate }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const active = categories.find((category) => category.id === activeId) || categories[0];

  return (
    <div className="as-megamenu-panel">
      <div className="as-megamenu-tabs" role="tablist">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`as-megamenu-tab ${isActive ? "as-megamenu-tab-active" : ""}`}
              onMouseEnter={() => setActiveId(category.id)}
              onFocus={() => setActiveId(category.id)}
            >
              <span className="as-megamenu-tab-icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="as-megamenu-tab-text">
                <span className="as-megamenu-tab-title">{category.title}</span>
                <span className="as-megamenu-tab-desc">{category.description}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="as-megamenu-grid" key={active.id}>
        {active.columns.map((column, index) => (
          <Column column={column} onNavigate={onNavigate} key={index} />
        ))}
      </div>

      <Link href={active.href} className="as-megamenu-view-all" onClick={onNavigate}>
        Explore {active.title}
        <FaArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}
