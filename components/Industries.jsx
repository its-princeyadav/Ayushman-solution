"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaBuilding, FaArrowRight, FaAngleDown } from "react-icons/fa";
import { INDUSTRIES } from "../data/industries";
import "./Industries.css";

const COLUMN_SIZE = Math.ceil(INDUSTRIES.length / 3);
const COLUMNS = [
  INDUSTRIES.slice(0, COLUMN_SIZE),
  INDUSTRIES.slice(COLUMN_SIZE, COLUMN_SIZE * 2),
  INDUSTRIES.slice(COLUMN_SIZE * 2),
];

export default function Industries() {
  const [isOpen, setIsOpen] = useState(false);
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

  function closeMenu() {
    setIsOpen(false);
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

  const desktopPanel = (
    <div
      ref={panelWrapRef}
      className={`wcf-industries__panel-position ${isOpen ? "is-open" : ""}`}
      style={{ top: panelPos.top, left: panelPos.left }}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className={`wcf-industries__panel ${isOpen ? "is-open" : ""}`} role="menu">
        <a href="/industries" className="wcf-industries__intro" onClick={closeMenu}>
          <span className="wcf-industries__intro-icon">
            <FaBuilding aria-hidden="true" />
          </span>
          <span className="wcf-industries__intro-title">Industries</span>
          <span className="wcf-industries__intro-desc">
            Showcasing our diverse experience across publicly listed, unicorn, fintech, digital-native,
            and SME companies across a wide range of niches.
          </span>
          <span className="wcf-industries__intro-arrow">
            <FaArrowRight aria-hidden="true" />
          </span>
        </a>

        <div className="wcf-industries__grid">
          {COLUMNS.map((column, columnIndex) => (
            <ul className="wcf-industries__column" key={`industries-col-${columnIndex}`}>
              {column.map((industry) => (
                <li key={industry.slug}>
                  <a href={`/industries/${industry.slug}`} className="wcf-industries__item" onClick={closeMenu}>
                    {industry.shortTitle || industry.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <li
      id="menu-item-8697"
      ref={containerRef}
      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8697 wcf-industries"
      onMouseEnter={isDesktop ? openMenu : undefined}
      onMouseLeave={isDesktop ? scheduleClose : undefined}
    >
      <a
        href="/industries"
        ref={triggerRef}
        className="wcf-nav-item wcf-industries__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((open) => !open);
        }}
      >
        Industries
        <FaAngleDown aria-hidden="true" className={`wcf-industries__chevron ${isOpen ? "is-open" : ""}`} />
      </a>

      {mounted && isDesktop && createPortal(desktopPanel, document.body)}

      {/* Mobile accordion — reuses the same trigger and isOpen state above,
          no separate button, so there is only ever one visible control. */}
      <div className="wcf-industries__mobile">
        <div className={`wcf-industries__accordion-panel ${isOpen ? "is-open" : ""}`}>
          <div className="wcf-industries__accordion-panel-inner">
            {INDUSTRIES.map((industry) => (
              <a
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="wcf-industries__item"
                onClick={closeMenu}
              >
                {industry.shortTitle || industry.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
