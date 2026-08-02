"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaAngleDown, FaRegCalendarAlt, FaPhone } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { GridMegaMenu, CategorizedMegaMenu } from "./MegaMenu2";
import MobileMenu2 from "./MobileMenu2";
import { WHAT_WE_DO_CATEGORIES, INDUSTRIES_MEGA_MENU, OUR_WORK_MEGA_MENU, NAV_LINKS } from "./constants";
import "../../../app/home2/home2-theme.css";
import "./Navbar2.css";

// Same code-split pattern as components/Navbar/Navbar.jsx: AuthModal pulls in
// framer-motion and only renders once opened, so it's fetched on demand
// instead of bloating every /home2 load.
const AuthModal = dynamic(() => import("../../Auth/AuthModal"), { ssr: false });

const MEGA_MENUS = [
  {
    id: "what-we-do",
    label: "What We Do",
    render: (onNavigate) => <CategorizedMegaMenu categories={WHAT_WE_DO_CATEGORIES} onNavigate={onNavigate} />,
  },
  {
    id: "industries",
    label: "Industries",
    render: (onNavigate) => <GridMegaMenu {...INDUSTRIES_MEGA_MENU} onNavigate={onNavigate} />,
  },
  {
    id: "our-work",
    label: "Our Work",
    render: (onNavigate) => <GridMegaMenu {...OUR_WORK_MEGA_MENU} onNavigate={onNavigate} />,
  },
];

/**
 * Independent, from-scratch navbar for the Home2 redesign - no dependency on
 * components/Navbar/Navbar.jsx. Reuses the same nav labels and mega menu
 * content (see ./constants.js) but with its own markup, styling, and
 * open/close behavior, so the current site's navbar can keep working
 * untouched while this one is iterated on.
 */
export default function Navbar2() {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const closeTimerRef = useRef(null);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMegaMenu(id) {
    clearCloseTimer();
    setOpenMenu(id);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  }

  function closeMegaMenu() {
    clearCloseTimer();
    setOpenMenu(null);
  }

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setSearchOpen(false);
      setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="as-nav2-topbar">
        <div className="as-nav2-topbar-inner">
          <div className="as-nav2-search-wrap">
            <button
              type="button"
              className="as-nav2-icon-btn"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((value) => !value)}
            >
              <FaSearch aria-hidden="true" />
            </button>
            <form
              className={`as-nav2-search-form ${searchOpen ? "as-nav2-search-form-open" : ""}`}
              role="search"
              action="/"
            >
              <input type="search" name="s" placeholder="Search..." className="as-nav2-search-input" />
            </form>
          </div>

          <Link href="#" className="as-nav2-book-btn">
            <FaRegCalendarAlt aria-hidden="true" />
            Book Slot
          </Link>
          <Link href="#" className="as-nav2-contact-btn">
            <FaPhone aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </div>

      <header className="as-nav2-navbar">
        <div className="as-nav2-inner">
          <Link href="/home2" className="as-nav2-brand">
            <Image
              src="/assets/image2/mini-logo.png"
              alt="Ayushman Solutions"
              width={40}
              height={40}
              className="as-nav2-brand-icon"
            />
            <span className="as-nav2-brand-text">Ayushman Solutions</span>
          </Link>

          <nav className="as-nav2-links" onMouseLeave={scheduleClose}>
            {MEGA_MENUS.map((menu) => (
              <div className="as-nav2-link-item" key={menu.id} onMouseEnter={() => openMegaMenu(menu.id)}>
                <button
                  type="button"
                  className="as-nav2-link"
                  aria-expanded={openMenu === menu.id}
                  onFocus={() => openMegaMenu(menu.id)}
                >
                  {menu.label}
                  <FaAngleDown
                    aria-hidden="true"
                    className={`as-nav2-chevron ${openMenu === menu.id ? "as-nav2-chevron-open" : ""}`}
                  />
                </button>
                <div className={`as-nav2-mega-menu-wrap ${openMenu === menu.id ? "as-nav2-mega-menu-wrap-open" : ""}`}>
                  {menu.render(closeMegaMenu)}
                </div>
              </div>
            ))}

            {NAV_LINKS.map((link) => (
              <Link key={link.id} href={link.href} className="as-nav2-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="as-nav2-actions">
            <button type="button" className="as-nav2-login-btn" onClick={() => setAuthOpen(true)}>
              <HiOutlineUser aria-hidden="true" />
              <span>Login</span>
            </button>

            <button
              type="button"
              className="as-nav2-hamburger"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className={`as-nav2-hamburger-icon ${mobileOpen ? "as-nav2-hamburger-icon-open" : ""}`}>
                <span className="as-nav2-hamburger-line as-nav2-hamburger-line-top" />
                <span className="as-nav2-hamburger-line as-nav2-hamburger-line-middle" />
                <span className="as-nav2-hamburger-line as-nav2-hamburger-line-bottom" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu2 isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
