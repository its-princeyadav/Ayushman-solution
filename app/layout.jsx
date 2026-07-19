import Script from "next/script";
import Preloader from "../components/Common/Preloader";
import Popups from "../components/Common/Popups";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";

const description =
  "Ayushman Solutions delivers SAP solutions and IT consulting services that streamline operations, enhance productivity, and drive business growth through ERP, cloud, and managed support.";

export const metadata = {
  title: "Ayushman Solutions",
  description,
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Ayushman Solutions",
    description,
    siteName: "Ayushman Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ayushman Solutions",
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ayushman Solutions",
  description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* robots directive now covered by the metadata.robots export above
            (index, follow, max-image-preview:large) - having it both there
            and as a hand-written tag here would render two <meta name=
            "robots"> tags. */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Hero's "Transforming Businesses" <h2> is the largest above-fold
            text node (confirmed live - by far the biggest bounding box of
            any text element on the homepage) and renders in Teko, so its
            exact woff2 (latin subset, from font10.css) is preloaded here
            to start the fetch immediately instead of waiting for the
            browser to discover it via the stylesheet's @font-face. Every
            Teko weight (300-700) resolves to this same physical file per
            subset (verified in font10.css), so this one preload covers
            whatever weight actually gets applied. */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/teko/v23/LYjNdG7kmE0gfaN9pQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" id="aae-starter-animations-css" href="/assets/css/starter-animations.css" media="all" />
        <link rel="stylesheet" id="wcf--addons-css" href="/assets/css/wcf-addons.min.css" media="all" />
        <link rel="stylesheet" id="wcf--addons-ex-css" href="/assets/css/wcf-addons-ex.min.css" media="all" />
        <link rel="stylesheet" id="arolax-fonts-css" href="/assets/css/fonts5.css" media="all" />
        <link rel="stylesheet" id="wcf-custom-icons-css" href="/assets/css/custom-icons.min.css" media="all" />
        <link rel="stylesheet" id="arolax-style-css" href="/assets/css/master.min.css" media="all" />
        <link rel="stylesheet" id="elementor-frontend-css" href="/assets/css/coustam-frontend-ver.css" media="all" />
        <link rel="stylesheet" id="elementor-post-3-css" href="/assets/css/post-3.css" media="all" />
        <link rel="stylesheet" id="widget-heading-css" href="/assets/css/widget-heading.min.css" media="all" />
        <link rel="stylesheet" id="widget-divider-css" href="/assets/css/widget-divider.min.css" media="all" />
        <link rel="stylesheet" id="wcf--button-css" href="/assets/css/button.min.css" media="all" />
        <link rel="stylesheet" id="widget-image-css" href="/assets/css/widget-image.min.css" media="all" />
        <link rel="stylesheet" id="aae-video-popup-css" href="/assets/css/video-popup.min.css" media="all" />
        <link rel="stylesheet" id="widget-icon-list-css" href="/assets/css/custom-widget-icon-list.min.css" media="all" />
        {/* swiper.min.css / brand-slider.min.css / posts.min.css moved to
            app/page.jsx - only the homepage's Brands/Testimonials/Blog
            widgets use them. */}
        <link rel="stylesheet" id="wcf--icon-box-css" href="/assets/css/icon-box.min.css" media="all" />
        <link rel="stylesheet" id="wcf--team-css" href="/assets/css/team.min.css" media="all" />
        <link rel="stylesheet" id="widget-accordion-css" href="/assets/css/custom-widget-accordion.min.css" media="all" />
        <link rel="stylesheet" id="elementor-post-6-css" href="/assets/css/post-6.css" media="all" />
        <link rel="stylesheet" id="elementor-gf-teko-css" href="/assets/css/font10.css" media="all" />
        <link rel="stylesheet" id="elementor-gf-kanit-css" href="/assets/css/fonts6.css" media="all" />
      </head>
      <body
        className="arolax-base wcf-preloader-active"
        suppressHydrationWarning
      >
        <Script id="wcf--addons-js-extra" strategy="beforeInteractive">
          {`var WCF_ADDONS_JS = {ajaxUrl:"/wp-admin/admin-ajax.php",_wpnonce:"372ea7fafd",post_id:"6",i18n:{okay:"Okay",cancel:"Cancel",submit:"Submit",success:"Success",warning:"Warning"},smoothScroller:null,mode:"",elementor_breakpoint:{laptop:1366,tablet:1024,mobile:767,desktop:1400},elementor_devices:{mobile:{label:"Mobile Portrait",value:767,direction:"max"},mobile_extra:{label:"Mobile Landscape",value:880,direction:"max"},tablet:{label:"Tablet Portrait",value:1024,direction:"max"},tablet_extra:{label:"Tablet Landscape",value:1200,direction:"max"},laptop:{label:"Laptop",value:1366,direction:"max"},widescreen:{label:"Widescreen",value:2400,direction:"min"}},enable_cursor:"",cursor_breakpoint:"mobile",editor_mode:"",aae_loop_source:"",aae_loop_post:"0",page_smoother:{disableInEditor:true},isLoggedIn:""};`}
        </Script>
        <Preloader />

        {/* jQuery must load before ANY page-specific script that expects it
            as a global at parse time (e.g. homepage's slider.min.js/
            post-pro.min.js, which do `}(jQuery)` immediately - not gated
            behind an event). Declared here, ahead of {children}, so it's
            guaranteed first regardless of what a given route renders;
            everything else that depends on it stays in its original
            relative order in the vendor block below, just now behind
            this instead of also behind {children}.
            async={false} on every src script in this whole vendor chain
            (here and below) is load-bearing, not decoration: a dynamically
            inserted <script src> defaults to executing as soon as ITS OWN
            download finishes, regardless of insertion order - browsers
            only honor insertion order once async is explicitly turned off.
            Confirmed live in Firefox: without this, jQuery's request
            sometimes lost the race to a script that calls it synchronously
            at parse time ("jQuery is not defined"), even though Chromium/
            WebKit happened to always finish jQuery first on this machine. */}
        <Script id="jquery-core-js" src="/assets/js/jquery.min.js" strategy="afterInteractive" async={false} />
        <Script id="jquery-migrate-js" src="/assets/js/jquery-migrate.min.js" strategy="afterInteractive" async={false} />

        <div id="smooth-wrapper" style={{ overflowX: "hidden", position: "relative" }}>
          <div id="smooth-content">
            <div id="page" className="hfeed site">
              <div data-elementor-type="wp-post" data-elementor-id="47" className="elementor elementor-47">
                <Navbar />
              </div>
              {/* <main> instead of <div>: axe/Lighthouse flagged the page as
                  having no main landmark. Verified no CSS selector targets
                  this element by tag (only by its classes/data attributes),
                  so this is a pure a11y improvement with no visual effect. */}
              <main data-elementor-type="wp-page" data-elementor-id="6" className="elementor elementor-6">
                {children}
              </main>
              <div data-elementor-type="wp-post" data-elementor-id="1386" className="elementor elementor-1386">
                <Footer />
              </div>
            </div>

            <Popups />

            <link rel="stylesheet" href="/assets/css/index2.css" />
            <link rel="stylesheet" id="elementor-post-47-css" href="/assets/css/post-47.css" media="all" />
            {/* nav-menu.min.css / search.min.css removed: both were verified
                0 bytes (confirmed identical empty content via hash), so their
                <link> tags were two network requests contributing zero
                style - nav-menu/search widget styling comes entirely from
                the other stylesheets already loaded above. */}
            <link rel="stylesheet" id="arolax-tabs-css" href="/assets/css/arolax-tabs.css" media="all" />
            <link rel="stylesheet" id="arolax-gallery-css" href="/assets/css/arolax-gallery.css" media="all" />
            <link rel="stylesheet" id="arolax-testimonial-css" href="/assets/css/arolax-testimonial.css" media="all" />
            <link rel="stylesheet" id="elementor-post-1386-css" href="/assets/css/post-1386.css" media="all" />
            <link rel="stylesheet" id="wcf--social-icons-css" href="/assets/css/social-icons.min.css" media="all" />

            {/* Remaining vendor scripts, exact original document order. These all
                loaded at the very end of <body> in the original HTML (i.e. after the
                whole DOM existed), which is what strategy="afterInteractive" reproduces:
                Next.js still runs them in this listed order, but only once the page has
                hydrated. Marking this whole batch "beforeInteractive" (as before) ran
                them ahead of/during hydration, so scripts that mutate the DOM raced
                React's hydration and caused hydration-mismatch warnings.
                The project's own custom scripts (previously index2.js,
                starter-animations.js, arolax-tabs.js, arolax-gallery.js,
                arolax-testimonial.js) have been consolidated into core.js/
                animations.js/main.js, loaded together after every vendor dependency
                they touch (jQuery, GSAP, ScrollTrigger, Elementor's frontend engine,
                Swiper) - see the bottom of this block. script.min.js (a generic
                theme bundle targeting markup - WooCommerce quantity steppers, a
                "lawyer" header layout - that doesn't exist anywhere in this project)
                and its arolax_obj config were dead code and have been removed.
                jQuery itself (and jQuery Migrate) loads earlier, above
                {children} - see the comment there - since afterInteractive
                scripts execute in component-commit order and some
                page-specific scripts need jQuery synchronously. */}
            <Script id="arolax-essential--global-core-js-extra" strategy="afterInteractive">
              {`var AROLAX_ADDONS_JS = {ajaxUrl:"/wp-admin/admin-ajax.php",_wpnonce:"a2ceb056a4"};`}
            </Script>
            <Script id="arolax-essential--global-core-js" src="/assets/js/wcf--global-core.min.js" strategy="afterInteractive" async={false} />
            <Script id="elementor-webpack-runtime-js" src="/assets/js/webpack.runtime.min.js" strategy="afterInteractive" async={false} />
            <Script id="elementor-frontend-modules-js" src="/assets/js/frontend-modules.min.js" strategy="afterInteractive" async={false} />
            {/* jQuery UI core (previously loaded here as core.min.js) was
                removed: it exposes .effect()/.draggable()/.sortable()/
                $.widget() etc, and grepping every vendor + project script
                in public/assets/js turns up zero calls to any of them - the
                theme's own accordion (wcf--global-core.min.js) and
                animations are plain jQuery/GSAP, not jQuery-UI-widget-based.
                21KB of parse/exec removed from every page load. */}
            <Script id="elementor-frontend-js-before" strategy="afterInteractive">
              {`var elementorFrontendConfig = {environmentMode:{edit:false,wpPreview:false,isScriptDebug:false},i18n:{shareOnFacebook:"Share on Facebook",shareOnTwitter:"Share on Twitter",pinIt:"Pin it",download:"Download",downloadImage:"Download image",fullscreen:"Fullscreen",zoom:"Zoom",share:"Share",playVideo:"Play Video",previous:"Previous",next:"Next",close:"Close",a11yCarouselPrevSlideMessage:"Previous slide",a11yCarouselNextSlideMessage:"Next slide",a11yCarouselFirstSlideMessage:"This is the first slide",a11yCarouselLastSlideMessage:"This is the last slide",a11yCarouselPaginationBulletMessage:"Go to slide"},is_rtl:false,breakpoints:{xs:0,sm:480,md:768,lg:1025,xl:1440,xxl:1600},responsive:{breakpoints:{mobile:{label:"Mobile Portrait",value:767,default_value:767,direction:"max",is_enabled:true},mobile_extra:{label:"Mobile Landscape",value:880,default_value:880,direction:"max",is_enabled:true},tablet:{label:"Tablet Portrait",value:1024,default_value:1024,direction:"max",is_enabled:true},tablet_extra:{label:"Tablet Landscape",value:1200,default_value:1200,direction:"max",is_enabled:true},laptop:{label:"Laptop",value:1366,default_value:1366,direction:"max",is_enabled:true},widescreen:{label:"Widescreen",value:2400,default_value:2400,direction:"min",is_enabled:true}},hasCustomBreakpoints:true},version:"4.0.9",is_static:false,experimentalFeatures:{e_font_icon_svg:true,additional_custom_breakpoints:true,container:true,"nested-elements":true,global_classes_should_enforce_capabilities:true,e_variables:true,e_opt_in_v4_page:true,e_components:true,e_interactions:true,e_widget_creation:true,"import-export-customization":true},urls:{assets:"/assets/",ajaxurl:"/wp-admin/admin-ajax.php",uploadUrl:"/wp-content/uploads/sites/80"},nonces:{floatingButtonsClickTracking:"e9a4f7478e",atomicFormsSendForm:"d567cedda7"},swiperClass:"swiper",settings:{page:[],editorPreferences:[]},kit:{active_breakpoints:["viewport_mobile","viewport_mobile_extra","viewport_tablet","viewport_tablet_extra","viewport_laptop","viewport_widescreen"],wcf_enable_preloader:"yes",body_background_background:"classic",global_image_lightbox:"yes",lightbox_enable_counter:"yes",lightbox_enable_fullscreen:"yes",lightbox_enable_zoom:"yes",lightbox_enable_share:"yes",lightbox_title_src:"title",lightbox_description_src:"description"},post:{id:6,title:"Ayushman%20Solutions",excerpt:"",featuredImage:false}};`}
            </Script>
            <Script id="elementor-frontend-js" src="/assets/js/frontend.min.js" strategy="afterInteractive" async={false} />
            <Script id="gsap-js" src="/assets/js/gsap.min.js" strategy="afterInteractive" async={false} />
            {/* ScrollSmoother (previously loaded here) was removed: verified
                live via ScrollSmoother.get() that no instance is ever
                created on this site - the WordPress Kit setting that would
                enable it (page_smoother/smoothScroller levels) was never
                migrated into WCF_ADDONS_JS/elementorFrontendConfig above (see
                animations.js's data-speed-parallax comment, same root cause).
                Every reference to `ScrollSmoother` left in the remaining
                vendor scripts (ScrollTrigger.min.js, wcf-addons-ex.min.js,
                aae-scroll-to-ele.min.js) is behind a `typeof` guard or GSAP's
                own core.globals() lookup, never a bare reference, so removing
                the plugin file itself cannot throw. ~13KB less parsed per
                page load. */}
            <Script id="ScrollTrigger-js" src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" async={false} />
            <Script id="aae-video-popup-mix-js" src="/assets/js/aae-video-popup.min.js" strategy="afterInteractive" async={false} />
            <Script id="ScrollToPlugin-js" src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" async={false} />
            <Script id="aae-scroll-to-ele-js" src="/assets/js/aae-scroll-to-ele.min.js" strategy="afterInteractive" async={false} />
            <Script id="SplitText-js" src="/assets/js/SplitText.min.js" strategy="afterInteractive" async={false} />
            <Script id="wcf--addons-ex-js" src="/assets/js/wcf-addons-ex.min.js" strategy="afterInteractive" async={false} />
            <Script id="aae--animations--modules-js" src="/assets/js/animations.min.js" strategy="afterInteractive" async={false} />
            <Script id="aae-one-page-scroll-js" src="/assets/js/one-page-scroll.min.js" strategy="afterInteractive" async={false} />
            <Script id="wcf--nav-menu-js" src="/assets/js/nav-menu.min.js" strategy="afterInteractive" async={false} />
            <Script id="aae--search-js" src="/assets/js/search.min.js" strategy="afterInteractive" async={false} />

            {/* Consolidated project scripts (see comment above). Order matters:
                animations.js and main.js both read globals core.js defines
                (runOnDomReady/runOnWindowLoad), and all three rely on jQuery,
                GSAP/ScrollTrigger and elementorFrontend having already loaded above. */}
            <Script id="core-js" src="/assets/js/core.js" strategy="afterInteractive" async={false} />
            <Script id="animations-js" src="/assets/js/animations.js" strategy="afterInteractive" async={false} />
            <Script id="main-js" src="/assets/js/main.js" strategy="afterInteractive" async={false} />
          </div>
        </div>
      </body>
    </html>
  );
}
