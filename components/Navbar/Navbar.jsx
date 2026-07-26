"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaAngleDown, FaArrowLeft, FaTimes, FaWindowClose, FaSearch, FaPhone, FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import Whatwedo from "../Whatwedo";
import Industries from "../Industries";
import OurWork from "../Our-work/Our-work";
import AuthModal from "../Auth/AuthModal";
import "./Navbar.css";
/* Top Utility Bar: the premium two-level header's top row - search (moved
   here from the main nav row, element 7660472 below - it now holds the
   Login button instead) plus Book Slot/Contact Us. Splitting these out of
   the main row is what actually fixes the crowding on small desktop/laptop
   widths - the main row no longer has to reserve most of its width for
   them, so the nav menu column can reclaim that space (see the
   elementor-element-36aa0a2/7660472 width overrides in post-47.css). Stays
   visible (including mobile) per spec, so it deliberately does NOT reuse
   the navbar-actions__btn class - button.min.css hides that class at
   <=767px, which is the opposite of what's wanted here.

   Rendered by layout.jsx as a SIBLING before the `.elementor-47` wrapper,
   not nested inside it: position:sticky on `.elementor-47` needs its own
   containing block (`#page`) to span the full page for the "stuck" range
   to have any room to work in. If this bar were a child of `.elementor-47`
   instead, that wrapper's height would shrink back down to just the header
   area, sticky would run out of room within the first ~150px and the
   navbar would just scroll away like a normal element - which is exactly
   what happened before this bar was pulled out to a sibling. */
export function NavbarUtilityBar() {
  const searchWidgetRef = useRef(null);

  // Elementor's own frontend runtime only wires up a widget's JS (here,
  // search.min.js's expand/collapse + live-search handlers) by scanning
  // for `.elementor-element` nodes INSIDE each `data-elementor-id` root
  // (frontend-modules.min.js: `this.$element.find(".elementor-element")`,
  // a descendant-only search) and firing
  // `frontend/element_ready/{widget_type}` for each one it finds. This
  // widget used to live inside `.elementor-47` (the navbar's own
  // Elementor document) where that scan would find it; now that it's
  // rendered here in NavbarUtilityBar - a sibling BEFORE `.elementor-47`,
  // required for the sticky-header containing-block reasons in the
  // comment above - the scan never reaches it, so its handlers never got
  // bound. This replays that exact same lifecycle event by hand, once
  // Elementor's own hook system exists, targeting this widget's actual
  // (moved) DOM node directly - sidesteps the document-scoping issue
  // instead of fighting it.
  useEffect(() => {
    let cancelled = false;
    let frame;

    const run = () => {
      if (cancelled) return;
      const $ = window.jQuery;
      const hooks = window.elementorFrontend?.hooks;
      if (!$ || !hooks || !searchWidgetRef.current) {
        frame = requestAnimationFrame(run);
        return;
      }
      hooks.doAction("frontend/element_ready/wcf--blog--search--form.default", $(searchWidgetRef.current));
    };

    run();

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="navbar-utility-bar">
      <div className="navbar-utility-bar__inner">
        {/* Search widget - moved here from the main nav row (was
            elementor-element-7660472 below). Same widget markup/classes as
            before (search.min.js/wcf-search-form.css target it by class,
            not by parent), so the expand/collapse + submit behavior is
            unchanged; only its position in the header moved - see the
            useEffect above for why that move needs a manual re-trigger. */}
        <div
          ref={searchWidgetRef}
          className="elementor-element elementor-element-b50f876 elementor-widget elementor-widget-wcf--blog--search--form"
          data-id="b50f876"
          data-element_type="widget"
          data-e-type="widget"
          data-settings="{&quot;wcf-animation&quot;:&quot;none&quot;}"
          data-widget_type="wcf--blog--search--form.default"
        >
          <div className="elementor-widget-container">
            <div className="search--wrapper style-full-screen">
              <div className="wcf-search-toggle" role="button" tabIndex={0}>
                <div className="toggle--open">
                  <FaSearch aria-hidden="true" className="arolax-theme arolax-wcf-icon icon-wcf-search" />
                  <span className="elementor-screen-only">Search</span>
                </div>
              </div>
              <div className="wcf-search-container">
                <div className="toggle--close" role="button" tabIndex={0}>
                  <FaWindowClose aria-hidden="true" className="e-font-icon-svg e-fas-window-close" />
                  <span className="elementor-screen-only">Close this search box</span>
                </div>
                <form className="wcf-search-form" action="/" method="get" role="search">
                  <label className="elementor-screen-only" htmlFor="wcf-search-form-b50f876">
                    Search
                  </label>
                  <input id="wcf-search-form-b50f876" placeholder="Search..." className="wcf-search-form__input" type="search" name="s" defaultValue autoComplete="off" />
                  <button id="wcf-search-form-b50f876" className="wcf-search-form__submit" type="submit" aria-label="Search">
                    <FaSearch aria-hidden="true" className="e-font-icon-svg e-fas-search" />
                    <span className="elementor-screen-only">Search</span>
                  </button>
                </form>
                <div className="selected-category-display" />
              </div>
              <div className="aae--live-search-results" />
            </div>
          </div>
        </div>

        <div className="navbar-utility-bar__actions">
          <a href="#" className="navbar-utility-bar__btn navbar-utility-bar__btn--solid">
            <FaRegCalendarAlt aria-hidden="true" />
            Book Slot
          </a>
          <a href="#" className="navbar-utility-bar__btn navbar-utility-bar__btn--outline">
            <FaPhone aria-hidden="true" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);
  // Drives the scroll-adaptive logo only (circular mini-logo badge, text
  // fades/collapses away) - purely visual, doesn't touch .elementor-47's
  // own position:sticky (see the big comment near that rule in
  // post-47.css), which is what actually keeps the header pinned.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="elementor-element elementor-element-e072e0e e-con-full e-flex wcf-starter-animations-none e-con e-parent" data-id="e072e0e" data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
      <div className="elementor-element elementor-element-7154d70 e-con-full e-flex wcf-starter-animations-none e-con e-child navbar-logo-section" data-id="7154d70" data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
        <div className="elementor-element elementor-element-55cb238 elementor-widget elementor-widget-wcf--site-logo" data-id="55cb238" data-element_type="widget" data-e-type="widget" data-settings="{&quot;wcf-animation&quot;:&quot;none&quot;}" data-widget_type="wcf--site-logo.default">
          <div className="elementor-widget-container">
            <div className="elementor-image">
              <Link
                href="/"
                aria-label="Go to Home Page"
                className={`navbar-brand ${scrolled ? "navbar-brand--scrolled" : ""}`}
              >
                <span className="navbar-brand__iconWrap">
                  <Image
                    width={108}
                    height={108}
                    src="/assets/image2/mini-logo.png"
                    alt="Ayushman Solutions logo"
                    className="navbar-brand__icon"
                    priority
                  />
                </span>
                <span className="navbar-brand__text">
                  <span className="navbar-brand__primary">Ayushman</span>{" "}
                  <span className="navbar-brand__secondary">Solutions</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-36aa0a2 e-con-full e-flex wcf-starter-animations-none e-con e-child" data-id="36aa0a2" data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
        <div className="elementor-element elementor-element-6904d66 elementor-widget elementor-widget-wcf--nav-menu" data-id="6904d66" data-element_type="widget" data-e-type="widget" data-settings="{&quot;mobile_menu_breakpoint&quot;:&quot;tablet&quot;,&quot;onpsc_duration&quot;:1,&quot;ease_type&quot;:&quot;power2.out&quot;,&quot;wcf-animation&quot;:&quot;none&quot;}" data-widget_type="wcf--nav-menu.default">
          <div className="elementor-widget-container">
            <div className="mobile-sub-back" style={{display: 'none'}}>
              <FaArrowLeft aria-hidden="true" className="e-font-icon-svg e-fas-arrow-left" />
              Back
            </div>
            <div className="wcf__nav-menu mobile-menu-active mobile-menu-right hover-pointer-" suppressHydrationWarning>
              <button className="wcf-menu-hamburger" type="button" aria-label="hamburger-icon">
                {/* Custom 3-line icon, not FaBars - nav-menu.min.js toggles
                    "wcf-nav-is-toggled" on the ancestor .wcf__nav-menu on
                    click (see mobileMenu() in that file); the hamburger-to-X
                    morph below is pure CSS keyed off that same class, so it
                    needs no JS/state of its own and doesn't touch the
                    existing open/close logic at all. */}
                <span className="navbar-menu-icon" aria-hidden="true">
                  <span className="navbar-menu-icon__line navbar-menu-icon__line--top" />
                  <span className="navbar-menu-icon__line navbar-menu-icon__line--middle" />
                  <span className="navbar-menu-icon__line navbar-menu-icon__line--bottom" />
                </span>
              </button>
              <div className="wcf-nav-menu-container">
                <ul id="menu-mega-menu" className="wcf-nav-menu-nav menu-layout-horizontal">
                  <Whatwedo />
                  <Industries />
                  <OurWork />
                  <li id="menu-item-8727" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8727">
                    <a href="/who-we-are" className="wcf-nav-item">Who We Are</a>
                  </li>
                  <li id="menu-item-8763" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-8763">
                    <a href="/careers" className="wcf-nav-item">Careers</a>
                  </li>
                </ul>
                <button className="wcf-menu-close" type="button">
                  <FaTimes aria-hidden="true" className="e-font-icon-svg e-fas-times" />
                </button>
              </div>
              <div className="wcf-menu-overlay" />
            </div>

     
            <Script id="nav-menu-desktop-class-init" strategy="beforeInteractive">
              {`(function(){var menu=document.querySelector('[data-id="6904d66"] .wcf__nav-menu');if(menu&&window.innerWidth>1024){menu.classList.remove("mobile-menu-active");menu.classList.add("desktop-menu-active");}})();`}
            </Script>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-7660472 e-con-full e-flex wcf-starter-animations-none e-con e-child" data-id={7660472} data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
        <div className="navbar-actions" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button type="button" className="navbar-login-btn" onClick={() => setAuthOpen(true)}>
            <HiOutlineUser aria-hidden="true" />
            <span>Login</span>
          </button>
        </div>
      </div>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
