/* ================================
   Depends on core.js (runOnDomReady / runOnWindowLoad).
   Load order: core.js -> animations.js -> main.js
   ================================ */

/* ================================
   Refresh GSAP ScrollTrigger after lazy images load
   ================================ */

function aaerefreshOnImageLoad() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    if (img.complete) return;

    img.addEventListener("load", () => {
      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    });
  });
}

runOnDomReady(aaerefreshOnImageLoad);
runOnWindowLoad(() => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
});

/* ================================
   data-speed parallax (replaces GSAP ScrollSmoother's "effects: true")

   The original theme relies on ScrollSmoother.create({ effects: true }) to
   read every [data-speed] element and drive its parallax offset. That call
   is made by wcf-addons.min.js, a vendor script that only ever existed on
   the original WordPress demo host and was never migrated (see
   app/layout.jsx), so it never runs and these elements never move. This
   restores the same visual effect (speed<1 drifts slower than the
   page/appears further back, speed>1 drifts faster/appears closer) using
   plain ScrollTrigger, which loads fine on its own.
   ================================ */

function aaeInitDataSpeedParallax() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll("[data-speed]").forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-speed"));
    if (!speed || speed === 1) return;

    gsap.to(el, {
      yPercent: (1 - speed) * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/* ================================
   Scroll-pin gallery effect (Elementor "arolax--gallery" widget)
   ================================ */

const ArolaxGallery = function ($scope, $) {
  if ("object" === typeof gsap) {
    let gsap_mm = gsap.matchMedia();

    gsap_mm.add(`(min-width: 768px)`, () => {
      let sections = $(".g-slider--one .item", $scope);
      let sections2 = $(".g-slider--two .item", $scope);

      let scrollTimer = -1;
      let updateProgress = function (self) {
        $(".progress-circle", $scope).css("opacity", 1);

        if (scrollTimer != -1) {
          clearTimeout(scrollTimer);
        }
        scrollTimer = window.setTimeout(() => {
          $(".progress-circle", $scope).css("opacity", 0);
        }, 300);

        const scrolled = self.progress * 100;

        $(".progress-circle", $scope).css("--value", scrolled.toFixed(0));
      };

      gsap.to(sections, {
        xPercent: -150,
        ease: "none",
        scrollTrigger: {
          trigger: $scope,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            updateProgress(self);
          },
        },
      });

      gsap.to(sections2, {
        xPercent: 150,
        ease: "none",
        scrollTrigger: {
          trigger: $scope,
          pin: false,
          scrub: 1,
        },
      });

      $(window).scroll(() => {
        console.log($(document).height(), $(window).height());
      });
    });
  }
};

/* ================================
   Scroll-reveal / text-split animations (global Elementor widgets)
   ================================ */

const wcfAnimationsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const wrapper = entry.target;

      const isRepeat = wrapper.classList.contains("wcf-repeat-yes");
      const playedOnce = wrapper.classList.contains("wcf-played");

      if (entry.isIntersecting) {
        if (isRepeat) {
          wcfPlayAnimation(wrapper);
        } else {
          if (!playedOnce) {
            wcfPlayAnimation(wrapper);
            wrapper.classList.add("wcf-played");
          }
        }
      }

      if (!entry.isIntersecting && isRepeat) {
        wrapper.classList.remove("wcf-animate");
        wrapper.classList.remove("wcf-played");
      }
    });
  },
  { threshold: 0.1 },
);

function initStarterAnimations(scope) {
  const wrapper = scope[0];
  if (!wrapper) return;

  if (!wrapper.className.includes("wcf-starter-animations-")) return;

  if (!wrapper.dataset.wcfInit) {
    wrapper.dataset.wcfInit = "1";

    wcfHandleChar(wrapper);
    wcfHandleWave(wrapper);
  }

  wcfAnimationsObserver.observe(wrapper);
}

function wcfPlayAnimation(wrapper) {
  if (!wrapper) return;

  wrapper.classList.remove("wcf-animate");

  const target =
    wrapper.querySelector(".elementor-widget-container > *") ||
    wrapper.firstElementChild;

  if (wrapper.classList.contains("wcf-starter-animations-text-char-animate")) {
    if (target) {
      const originalText = target.textContent;
      target.innerHTML = originalText;
      target.dataset.charInit = "";
      wcfHandleChar(wrapper);
    }
  }

  if (wrapper.classList.contains("wcf-starter-animations-text-wave")) {
    if (target) {
      target.removeAttribute("data-text");
      target.setAttribute("data-text", target.textContent.trim());
      target.dataset.waveInit = "";
    }
  }

  void wrapper.offsetWidth;

  wrapper.classList.add("wcf-animate");
}

function wcfHandleChar(wrapper) {
  if (!wrapper.className.includes("text-char")) return;

  const target =
    wrapper.querySelector(".elementor-widget-container > *") ||
    wrapper.firstElementChild;

  if (!target || target.dataset.charInit) return;

  const text = target.textContent;
  if (!text) return;

  target.innerHTML = "";

  let globalIndex = 0;

  // Split by space but preserve spacing
  const words = text.split(" ");

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("wcf-word");
    wordSpan.style.display = "inline-block";

    [...word].forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.style.display = "inline-block";
      charSpan.style.setProperty("--i", globalIndex);

      wordSpan.appendChild(charSpan);

      globalIndex++;
    });

    target.appendChild(wordSpan);

    // Add real space between words
    if (wordIndex < words.length - 1) {
      const space = document.createTextNode(" ");
      target.appendChild(space);
    }
  });

  target.dataset.charInit = "1";
}

function wcfHandleWave(wrapper) {
  if (!wrapper.classList.contains("wcf-starter-animations-text-wave")) return;

  const target =
    wrapper.querySelector(".elementor-widget-container > *") ||
    wrapper.firstElementChild;

  if (!target) return;

  target.setAttribute("data-text", target.textContent.trim());
  target.dataset.waveInit = "1";
}

// Manual replay hook, used by inline onclick handlers etc.
window.wcfReplayAnimation = function (wrapper) {
  wcfPlayAnimation(wrapper);
};

/* ================================
   Elementor init: register everything above in one listener
   ================================ */

window.addEventListener("elementor/frontend/init", function () {
  // document.readyState is already "complete" by the time this script runs
  // (Next.js injects it well after the browser's native load event), so
  // runOnDomReady/runOnWindowLoad would both fire immediately - before
  // gsap/ScrollTrigger, which load earlier in this same script sequence,
  // are guaranteed ready on every engine. elementor/frontend/init (fired
  // from frontend.min.js) is the same "wait until the vendor bundle is
  // ready" event the widget registrations below already rely on.
  aaeInitDataSpeedParallax();

  elementorFrontend.hooks.addAction(
    "frontend/element_ready/arolax--gallery.default",
    ArolaxGallery,
  );

  elementorFrontend.hooks.addAction(
    "frontend/element_ready/global",
    initStarterAnimations,
  );
});
