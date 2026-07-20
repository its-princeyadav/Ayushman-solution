import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaAngleDown, FaArrowLeft, FaBars, FaTimes, FaWindowClose, FaSearch, FaPhone, FaRegCalendarAlt } from "react-icons/fa";
import Whatwedo from "../Whatwedo";
import Industries from "../Industries";
import OurWork from "../Our-work/Our-work";
/* Top Utility Bar: houses the two secondary action buttons that used to
   live inside the main nav row (element 7660472 below). Splitting them out
   here is what actually fixes the crowding on small desktop/laptop widths -
   the main row no longer has to reserve ~70% of its width for these two
   buttons, so the nav menu column can reclaim that space (see the
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
  return (
    <div className="navbar-utility-bar">
      <div className="navbar-utility-bar__inner">
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
  );
}

export default function Navbar() {
  return (
    <div className="elementor-element elementor-element-e072e0e e-con-full e-flex wcf-starter-animations-none e-con e-parent" data-id="e072e0e" data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
      <div className="elementor-element elementor-element-7154d70 e-con-full e-flex wcf-starter-animations-none e-con e-child" data-id="7154d70" data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
        <div className="elementor-element elementor-element-55cb238 elementor-widget elementor-widget-wcf--site-logo" data-id="55cb238" data-element_type="widget" data-e-type="widget" data-settings="{&quot;wcf-animation&quot;:&quot;none&quot;}" data-widget_type="wcf--site-logo.default">
          <div className="elementor-widget-container">
            <div className="elementor-image">
              <Link href="/" aria-label="Go to Home Page">
                <Image width={190} height={45} src="/assets/images/Latets-Logo.png" className="attachment-full size-full wp-image-7351" alt="" priority />
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
                <FaBars aria-hidden="true" className="e-font-icon-svg e-fas-bars" />
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
                    <a href="#" className="wcf-nav-item">Careers</a>
                  </li>
                </ul>
                <button className="wcf-menu-close" type="button">
                  <FaTimes aria-hidden="true" className="e-font-icon-svg e-fas-times" />
                </button>
              </div>
              <div className="wcf-menu-overlay" />
            </div>

            {/* Runs before hydration so the menu shows its desktop class
                immediately on wide viewports, instead of flashing the mobile
                layout until nav-menu.min.js finishes initializing. A raw
                <script> here (the previous approach) makes React log
                "Scripts inside React components are never executed when
                rendering on the client" - next/script's beforeInteractive
                is the sanctioned way to run inline script ahead of
                hydration. */}
            <Script id="nav-menu-desktop-class-init" strategy="beforeInteractive">
              {`(function(){var menu=document.querySelector('[data-id="6904d66"] .wcf__nav-menu');if(menu&&window.innerWidth>1024){menu.classList.remove("mobile-menu-active");menu.classList.add("desktop-menu-active");}})();`}
            </Script>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-7660472 e-con-full e-flex wcf-starter-animations-none e-con e-child" data-id={7660472} data-element_type="container" data-e-type="container" data-settings="{&quot;wcf_enable_cursor_hover_effect_text&quot;:&quot;View&quot;,&quot;wcf-animation&quot;:&quot;none&quot;,&quot;wcf_enable_pin_area&quot;:&quot;no&quot;,&quot;aae_enable_header_sticky_area&quot;:&quot;no&quot;,&quot;wcf_enable_horizontal_scroll&quot;:&quot;no&quot;}">
        <div className="navbar-actions" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className="elementor-element elementor-element-b50f876 elementor-widget elementor-widget-wcf--blog--search--form" data-id="b50f876" data-element_type="widget" data-e-type="widget" data-settings="{&quot;wcf-animation&quot;:&quot;none&quot;}" data-widget_type="wcf--blog--search--form.default">
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
        </div>
      </div>
    </div>

  );
}
