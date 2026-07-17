/* ================================
   Shared utilities

   document.readyState is already "complete" by the time these
   afterInteractive scripts run (Next.js injects them well after the
   browser's native load event), so a plain addEventListener would never
   fire. These helpers run the callback immediately when the relevant
   state has already passed, and defer to the real event otherwise.
   Consumed by animations.js and main.js as well, so this file must load
   first.
   ================================ */

const runOnDomReady = (fn) =>
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", fn)
    : fn();

const runOnWindowLoad = (fn) =>
  document.readyState === "complete"
    ? fn()
    : window.addEventListener("load", fn);

/* ================================
   Preloader removal
   ================================ */

(() => {
  const aae_pro_preloader = () => {
    const preloaderEl = document.querySelector(".wcf-preloader");
    if (!preloaderEl) return;

    let hasCompleted = false;
    const completePreloader = () => {
      if (hasCompleted) return;
      hasCompleted = true;

      preloaderEl.style.transition = "opacity 220ms ease";
      preloaderEl.style.opacity = "0";
      document.body.classList.remove("wcf-preloader-active");

      window.setTimeout(() => {
        preloaderEl.remove();
      }, 220);
    };

    window.setTimeout(completePreloader, 2000);
  };

  aae_pro_preloader();
})();

/* ================================
   Scroll-to-top button behaviour
   ================================ */

(() => {
  const scrollToTop = () => {
    const cursor = document.querySelector(".wcf-scroll-to-top");
    if (!cursor) return;

    // Circular progress animation
    if (cursor.classList.contains("scroll-to-circle")) {
      const progressPath = cursor.querySelector(".progress-circle path");
      if (!progressPath) return;

      const pathLength = progressPath.getTotalLength();
      progressPath.style.transition = "none";
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect(); // Trigger layout
      progressPath.style.transition = "stroke-dashoffset 10ms linear";

      const updateProgress = () => {
        const scroll = window.scrollY;
        const height =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };

      updateProgress();
      window.addEventListener("scroll", updateProgress);
    }

    // Toggle visibility on scroll
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        cursor.classList.add("show-scroll-to-top");
      } else {
        cursor.classList.remove("show-scroll-to-top");
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Scroll to top on click
    cursor.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  scrollToTop();
})();

/* ================================
   Append hidden sticky-header trigger element for the footer
   ================================ */

runOnDomReady(() => {
  const smootherWrapper = document.getElementById("smooth-wrapper");
  if (smootherWrapper) {
    const div = document.createElement("div");
    div.className = "aae_footer_sticky_header_trigger";
    div.hidden = true;
    smootherWrapper.appendChild(div);
  }
});

/* ================================
   Reset open mobile mega-menu accordions (Whatwedo/Industries/OurWork)
   whenever the off-canvas nav drawer itself closes (X button, outside tap,
   or a plain nav link), so the next time it opens nothing is stale.
   nav-menu.min.js toggles "wcf-nav-is-toggled" imperatively, outside
   React's knowledge, so this observes that class instead of duplicating
   its close conditions.
   ================================ */
runOnDomReady(() => {
  const navMenu = document.querySelector(".wcf__nav-menu");
  if (!navMenu) return;

  let wasToggled = navMenu.classList.contains("wcf-nav-is-toggled");
  new MutationObserver(() => {
    const isToggled = navMenu.classList.contains("wcf-nav-is-toggled");
    if (wasToggled && !isToggled) {
      document.dispatchEvent(
        new CustomEvent("wcf:submenu-close-request", { detail: { except: null } }),
      );
    }
    wasToggled = isToggled;
  }).observe(navMenu, { attributes: true, attributeFilter: ["class"] });
});

/* ================================
   Lazy-load observer for Elementor container backgrounds
   ================================ */

const lazyloadRunObserver = () => {
  const lazyloadBackgrounds = document.querySelectorAll(
    `.e-con.e-parent:not(.e-lazyloaded)`,
  );
  const lazyloadBackgroundObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyloadBackground = entry.target;
          if (lazyloadBackground) {
            lazyloadBackground.classList.add("e-lazyloaded");
          }
          lazyloadBackgroundObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px 0px 200px 0px" },
  );
  lazyloadBackgrounds.forEach((lazyloadBackground) => {
    lazyloadBackgroundObserver.observe(lazyloadBackground);
  });
};
runOnDomReady(lazyloadRunObserver);
document.addEventListener("elementor/lazyload/observe", lazyloadRunObserver);
