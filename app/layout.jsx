import Script from "next/script";
import Preloader from "../components/Common/Preloader";
import Popups from "../components/Common/Popups";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Ayushman Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="stylesheet" id="aae-starter-animations-css" href="/assets/css/starter-animations.css" media="all" />
        <link rel="stylesheet" id="wcf--addons-css" href="/assets/css/wcf-addons.min.css" media="all" />
        <link rel="stylesheet" id="wcf--addons-ex-css" href="/assets/css/wcf-addons-ex.min.css" media="all" />
        <link rel="stylesheet" id="arolax-fonts-css" href="/assets/css/fonts5.css" media="all" />
        <link rel="stylesheet" id="wcf-custom-icons-css" href="/assets/css/custom-icons.min.css" media="all" />
        <link rel="stylesheet" id="arolax-style-css" href="/assets/css/master.min.css" media="all" />
        <link rel="stylesheet" id="helo-eazydocs-css" href="/assets/css/eazydocs.css" media="all" />
        <link rel="stylesheet" id="elementor-frontend-css" href="/assets/css/coustam-frontend-ver.css" media="all" />
        <link rel="stylesheet" id="elementor-post-3-css" href="/assets/css/post-3.css" media="all" />
        <link rel="stylesheet" id="widget-heading-css" href="/assets/css/widget-heading.min.css" media="all" />
        <link rel="stylesheet" id="widget-divider-css" href="/assets/css/widget-divider.min.css" media="all" />
        <link rel="stylesheet" id="wcf--button-css" href="/assets/css/button.min.css" media="all" />
        <link rel="stylesheet" id="widget-image-css" href="/assets/css/widget-image.min.css" media="all" />
        <link rel="stylesheet" id="aae-video-popup-css" href="/assets/css/video-popup.min.css" media="all" />
        <link rel="stylesheet" id="widget-icon-list-css" href="/assets/css/custom-widget-icon-list.min.css" media="all" />
        <link rel="stylesheet" id="swiper-css" href="/assets/css/swiper.min.css" media="all" />
        <link rel="stylesheet" id="wcf--brand-slider-css" defer href="/assets/css/brand-slider.min.css" media="all" />
        <link rel="stylesheet" id="wcf--icon-box-css" href="/assets/css/icon-box.min.css" media="all" />
        <link rel="stylesheet" id="wcf--team-css" href="/assets/css/team.min.css" media="all" />
        <link rel="stylesheet" id="widget-accordion-css" href="/assets/css/custom-widget-accordion.min.css" media="all" />
        <link rel="stylesheet" id="wcf--posts-css" href="/assets/css/posts.min.css" media="all" />
        <link rel="stylesheet" id="elementor-post-6-css" href="/assets/css/post-6.css" media="all" />
        <link rel="stylesheet" id="elementor-gf-roboto-css" href="/assets/css/fonts8.css" media="all" />
        <link rel="stylesheet" id="elementor-gf-robotoslab-css" href="/assets/css/fonts7.css" media="all" />
        <link rel="stylesheet" id="elementor-gf-teko-css" href="/assets/css/font10.css" media="all" />
        <link rel="stylesheet" id="elementor-gf-kanit-css" href="/assets/css/fonts6.css" media="all" />
      </head>
      <body
        className="arolax-base wcf-preloader-active"
        suppressHydrationWarning
      >
        {/* jQuery core stack originally loaded in <head>, before body markup exists */}
        <Script id="jquery-core-js-extra" strategy="beforeInteractive">
          {`var eazydocs_local_object = {ajaxurl:"/wp-admin/admin-ajax.php",EZD_STYLES:"/wp-content/plugins/eazydocs/build/styles/",nonce:"1a79d7f00d",is_doc_ajax:"",ezd_layout_container:"ezd-container ezd-custom-container",ezd_search_submit:"1",ezd_dark_switcher:"",elementor_docs:[]};`}
        </Script>
        <Script id="jquery-core-js" src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script id="jquery-migrate-js" src="/assets/js/jquery-migrate.min.js" strategy="beforeInteractive" />
        <Script id="wcf--addons-js-extra" strategy="beforeInteractive">
          {`var WCF_ADDONS_JS = {ajaxUrl:"/wp-admin/admin-ajax.php",_wpnonce:"372ea7fafd",post_id:"6",i18n:{okay:"Okay",cancel:"Cancel",submit:"Submit",success:"Success",warning:"Warning"},smoothScroller:null,mode:"",elementor_breakpoint:{laptop:1366,tablet:1024,mobile:767,desktop:1400},elementor_devices:{mobile:{label:"Mobile Portrait",value:767,direction:"max"},mobile_extra:{label:"Mobile Landscape",value:880,direction:"max"},tablet:{label:"Tablet Portrait",value:1024,direction:"max"},tablet_extra:{label:"Tablet Landscape",value:1200,direction:"max"},laptop:{label:"Laptop",value:1366,direction:"max"},widescreen:{label:"Widescreen",value:2400,direction:"min"}},enable_cursor:"",cursor_breakpoint:"mobile",editor_mode:"",aae_loop_source:"",aae_loop_post:"0",page_smoother:{disableInEditor:true},isLoggedIn:""};`}
        </Script>
        <Preloader />

        {/* GSAP ScrollSmoother normally sets overflow:hidden (and position) on this wrapper
            itself via ScrollSmoother.create() (its own documented required setup, not a
            page-specific hack). That call was made by wcf-addons.min.js, a vendor script that
            only ever existed on the original WordPress demo host and was never migrated, so
            it never runs and this never gets applied. overflowX:hidden restores that clip, containing several
            intentional (designer-authored, breakpoint-tuned) negative-space offsets in the page
            CSS that were always meant to be clipped here. position:relative additionally makes
            this the containing block for absolutely-positioned descendants (e.g. the nav's
            mega-menu panels) that otherwise have no positioned ancestor at all and fall back to
            the document root — overflow:hidden alone clips their paint, but doesn't stop them
            contributing to the root's scrollable width, since that follows the containing-block
            chain rather than the DOM/paint tree. */}
        <div id="smooth-wrapper" style={{ overflowX: "hidden", position: "relative" }}>
          <div id="smooth-content">
            <div id="page" className="hfeed site">
              <div data-elementor-type="wp-post" data-elementor-id="47" className="elementor elementor-47">
                <Navbar />
              </div>
              <div data-elementor-type="wp-page" data-elementor-id="6" className="elementor elementor-6">
                {children}
              </div>
              <div data-elementor-type="wp-post" data-elementor-id="1386" className="elementor elementor-1386">
                <Footer />
              </div>
            </div>

            <Popups />

            <link rel="stylesheet" href="/assets/css/index2.css" />
            <link rel="stylesheet" id="elementor-post-47-css" href="/assets/css/post-47.css" media="all" />
            <link rel="stylesheet" id="wcf--nav-menu-css" href="/assets/css/nav-menu.min.css" media="all" />
            <link rel="stylesheet" id="aae--search-css" href="/assets/css/search.min.css" media="all" />
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
                and its arolax_obj config were dead code and have been removed. */}
            <Script id="arolax-essential--global-core-js-extra" strategy="afterInteractive">
              {`var AROLAX_ADDONS_JS = {ajaxUrl:"/wp-admin/admin-ajax.php",_wpnonce:"a2ceb056a4"};`}
            </Script>
            <Script id="arolax-essential--global-core-js" src="/assets/js/wcf--global-core.min.js" strategy="afterInteractive" />
            <Script id="elementor-webpack-runtime-js" src="/assets/js/webpack.runtime.min.js" strategy="afterInteractive" />
            <Script id="elementor-frontend-modules-js" src="/assets/js/frontend-modules.min.js" strategy="afterInteractive" />
            <Script id="jquery-ui-core-js" src="/assets/js/core.min.js" strategy="afterInteractive" />
            <Script id="elementor-frontend-js-before" strategy="afterInteractive">
              {`var elementorFrontendConfig = {environmentMode:{edit:false,wpPreview:false,isScriptDebug:false},i18n:{shareOnFacebook:"Share on Facebook",shareOnTwitter:"Share on Twitter",pinIt:"Pin it",download:"Download",downloadImage:"Download image",fullscreen:"Fullscreen",zoom:"Zoom",share:"Share",playVideo:"Play Video",previous:"Previous",next:"Next",close:"Close",a11yCarouselPrevSlideMessage:"Previous slide",a11yCarouselNextSlideMessage:"Next slide",a11yCarouselFirstSlideMessage:"This is the first slide",a11yCarouselLastSlideMessage:"This is the last slide",a11yCarouselPaginationBulletMessage:"Go to slide"},is_rtl:false,breakpoints:{xs:0,sm:480,md:768,lg:1025,xl:1440,xxl:1600},responsive:{breakpoints:{mobile:{label:"Mobile Portrait",value:767,default_value:767,direction:"max",is_enabled:true},mobile_extra:{label:"Mobile Landscape",value:880,default_value:880,direction:"max",is_enabled:true},tablet:{label:"Tablet Portrait",value:1024,default_value:1024,direction:"max",is_enabled:true},tablet_extra:{label:"Tablet Landscape",value:1200,default_value:1200,direction:"max",is_enabled:true},laptop:{label:"Laptop",value:1366,default_value:1366,direction:"max",is_enabled:true},widescreen:{label:"Widescreen",value:2400,default_value:2400,direction:"min",is_enabled:true}},hasCustomBreakpoints:true},version:"4.0.9",is_static:false,experimentalFeatures:{e_font_icon_svg:true,additional_custom_breakpoints:true,container:true,"nested-elements":true,global_classes_should_enforce_capabilities:true,e_variables:true,e_opt_in_v4_page:true,e_components:true,e_interactions:true,e_widget_creation:true,"import-export-customization":true},urls:{assets:"/assets/",ajaxurl:"/wp-admin/admin-ajax.php",uploadUrl:"/wp-content/uploads/sites/80"},nonces:{floatingButtonsClickTracking:"e9a4f7478e",atomicFormsSendForm:"d567cedda7"},swiperClass:"swiper",settings:{page:[],editorPreferences:[]},kit:{active_breakpoints:["viewport_mobile","viewport_mobile_extra","viewport_tablet","viewport_tablet_extra","viewport_laptop","viewport_widescreen"],wcf_enable_preloader:"yes",body_background_background:"classic",global_image_lightbox:"yes",lightbox_enable_counter:"yes",lightbox_enable_fullscreen:"yes",lightbox_enable_zoom:"yes",lightbox_enable_share:"yes",lightbox_title_src:"title",lightbox_description_src:"description"},post:{id:6,title:"Ayushman%20Solutions",excerpt:"",featuredImage:false}};`}
            </Script>
            <Script id="elementor-frontend-js" src="/assets/js/frontend.min.js" strategy="afterInteractive" />
            <Script id="swiper-js" src="/assets/js/swiper.min.js" strategy="afterInteractive" />
            <Script id="wcf--slider-js" src="/assets/js/slider.min.js" strategy="afterInteractive" />
            <Script id="wcf--posts-js" src="/assets/js/post-pro.min.js" strategy="afterInteractive" />
            <Script id="gsap-js" src="/assets/js/gsap.min.js" strategy="afterInteractive" />
            <Script id="ScrollSmoother-js" src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
            <Script id="ScrollTrigger-js" src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
            <Script id="aae-video-popup-mix-js" src="/assets/js/aae-video-popup.min.js" strategy="afterInteractive" />
            <Script id="ScrollToPlugin-js" src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
            <Script id="aae-scroll-to-ele-js" src="/assets/js/aae-scroll-to-ele.min.js" strategy="afterInteractive" />
            <Script id="SplitText-js" src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
            <Script id="wcf--addons-ex-js" src="/assets/js/wcf-addons-ex.min.js" strategy="afterInteractive" />
            <Script id="aae--animations--modules-js" src="/assets/js/animations.min.js" strategy="afterInteractive" />
            <Script id="aae-one-page-scroll-js" src="/assets/js/one-page-scroll.min.js" strategy="afterInteractive" />
            <Script id="wcf--nav-menu-js" src="/assets/js/nav-menu.min.js" strategy="afterInteractive" />
            <Script id="aae--search-js" src="/assets/js/search.min.js" strategy="afterInteractive" />

            {/* Consolidated project scripts (see comment above). Order matters:
                animations.js and main.js both read globals core.js defines
                (runOnDomReady/runOnWindowLoad), and all three rely on jQuery,
                GSAP/ScrollTrigger and elementorFrontend having already loaded above. */}
            <Script id="core-js" src="/assets/js/core.js" strategy="afterInteractive" />
            <Script id="animations-js" src="/assets/js/animations.js" strategy="afterInteractive" />
            <Script id="main-js" src="/assets/js/main.js" strategy="afterInteractive" />
          </div>
        </div>
      </body>
    </html>
  );
}
