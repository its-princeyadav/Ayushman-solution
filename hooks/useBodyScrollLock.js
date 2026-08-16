"use client";

import { useEffect } from "react";

// Module-level (not per-component) so multiple overlays open at once - e.g.
// the mobile menu triggering the booking modal - share one lock instead of
// the second one's cleanup prematurely re-enabling scroll while the first
// is still open.
let lockCount = 0;
let previousBodyOverflow = "";
let previousHtmlOverflow = "";

/**
 * Locks page scroll while `isLocked` is true. Shared by every modal/overlay
 * in the app (AuthModal, BookingModal, MobileMenu2, ...) so scroll-locking
 * logic lives in exactly one place.
 *
 * Locks both <html> and <body>: per spec, `document.documentElement` (not
 * body) is the actual scrolling box in standards-mode browsers, so
 * body-only used to leave a narrow gap where the page could still be
 * nudged via keyboard (Page Down/Space/arrow keys) even with body clipped.
 */
export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return undefined;

    if (lockCount === 0) {
      previousBodyOverflow = document.body.style.overflow;
      previousHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
      }
    };
  }, [isLocked]);
}
