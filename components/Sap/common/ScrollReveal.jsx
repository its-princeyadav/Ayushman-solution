"use client";

import { useEffect } from "react";

/**
 * Mount once per SAP page (see app/sap/layout.jsx and SapNearYou.jsx).
 * Gives every already-rendered [data-sap-reveal] element one subtle
 * fade+rise as it scrolls into view, reusing the gsap/ScrollTrigger
 * instances already loaded globally in app/layout.jsx (window.gsap /
 * window.ScrollTrigger - plain <Script> tags, not npm packages) instead of
 * a separate animation library. Renders nothing itself.
 */
export default function ScrollReveal() {
  useEffect(() => {
    let cancelled = false;
    let frame;

    const run = () => {
      if (cancelled) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) {
        frame = requestAnimationFrame(run);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const targets = document.querySelectorAll("[data-sap-reveal]:not([data-sap-revealed])");
      targets.forEach((el) => {
        el.setAttribute("data-sap-revealed", "");

        // gsap.from() sets the "from" state (opacity: 0) the instant it
        // runs, before any scrolling happens - fine for a section below the
        // fold (it's invisible until the user scrolls to it, as intended),
        // but for anything already on screen at this point (e.g. content
        // that fits above the fold on a tall viewport) it would flash the
        // already-painted section to invisible and fade it back in. Leave
        // those alone entirely instead.
        const alreadyInView = el.getBoundingClientRect().top < window.innerHeight;
        if (alreadyInView) return;

        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    };

    run();

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
