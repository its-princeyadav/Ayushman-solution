"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaBriefcase, FaArrowRight, FaAngleDown } from "react-icons/fa";
import { OUR_WORK } from "../../data/ourWork";
import "./Our-work.css";

const COLUMNS = [OUR_WORK.slice(0, 3), OUR_WORK.slice(3, 6), OUR_WORK.slice(6, 8)];

export default function OurWork() {
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
      className={`wcf-ourwork__panel-position ${isOpen ? "is-open" : ""}`}
      style={{ top: panelPos.top, left: panelPos.left }}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className={`wcf-ourwork__panel ${isOpen ? "is-open" : ""}`} role="menu">
        <a href="/our-work" className="wcf-ourwork__intro" onClick={closeMenu}>
          <span className="wcf-ourwork__intro-icon">
            <FaBriefcase aria-hidden="true" />
          </span>
          <span className="wcf-ourwork__intro-title">Our Work</span>
          <span className="wcf-ourwork__intro-desc">
            Showcasing our expertise, insights, success stories, industry knowledge, customer experiences,
            and business transformation initiatives across multiple industries and technologies.
          </span>
          <span className="wcf-ourwork__intro-arrow">
            <FaArrowRight aria-hidden="true" />
          </span>
        </a>

        <div className="wcf-ourwork__grid">
          {COLUMNS.map((column, columnIndex) => (
            <div className="wcf-ourwork__column" key={`ourwork-col-${columnIndex}`}>
              {column.map((item) => (
                <a
                  key={item.slug}
                  href={`/our-work/${item.slug}`}
                  className="wcf-ourwork__item"
                  onClick={closeMenu}
                >
                  <span className="wcf-ourwork__item-title">{item.title}</span>
                  <span className="wcf-ourwork__item-desc">{item.tagline}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <li
      id="menu-item-8707"
      ref={containerRef}
      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8707 wcf-ourwork"
      onMouseEnter={isDesktop ? openMenu : undefined}
      onMouseLeave={isDesktop ? scheduleClose : undefined}
    >
      <a
        href="/our-work"
        ref={triggerRef}
        className="wcf-nav-item wcf-ourwork__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((open) => !open);
        }}
      >
        Our Work
        <FaAngleDown aria-hidden="true" className={`wcf-ourwork__chevron ${isOpen ? "is-open" : ""}`} />
      </a>

      {mounted && isDesktop && createPortal(desktopPanel, document.body)}

      {/* Mobile accordion — reuses the same trigger and isOpen state above,
          no separate button, so there is only ever one visible control. */}
      <div className="wcf-ourwork__mobile">
        <div className={`wcf-ourwork__accordion-panel ${isOpen ? "is-open" : ""}`}>
          <div className="wcf-ourwork__accordion-panel-inner">
            {OUR_WORK.map((item) => (
              <a
                key={item.slug}
                href={`/our-work/${item.slug}`}
                className="wcf-ourwork__item"
                onClick={closeMenu}
              >
                <span className="wcf-ourwork__item-title">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
