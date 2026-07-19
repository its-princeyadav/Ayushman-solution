"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeatureCard from "../Cards/FeatureCard";
import NewsCard from "../Cards/NewsCard";
import BlogCard from "../Cards/BlogCard";
import StoryCard from "../Cards/StoryCard";
import TestimonialCard from "../Cards/TestimonialCard";
import styles from "./Slider.module.css";

// Slider is a Client Component, so it can only receive serializable props —
// never functions (no renderItem/keyExtractor) — from the Server Components
// that use it. Instead it owns a fixed registry of card renderers and picks
// one by name via `cardType`, so every section just hands it plain data.
const CARD_COMPONENTS = {
  feature: FeatureCard,
  news: NewsCard,
  blog: BlogCard,
  story: StoryCard,
  testimonial: TestimonialCard,
};

const WRAP_DEBOUNCE = 120;

// Plain useEffect on the server (useLayoutEffect warns there), the real
// layout-synchronous effect on the client so the initial loop-jump never
// flashes the wrong slide.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Slider({
  items,
  cardType,
  cardProps,
  slidesPerView = { base: 1, sm: 2, lg: 3 },
  gap = 24,
  showArrows = true,
  showDots = true,
  loop = true,
  autoplay = false,
  autoplayDelay = 4000,
  ariaLabel = "Carousel",
}) {
  const Card = CARD_COMPONENTS[cardType];
  const count = items.length;
  const offset = loop ? count : 0;

  // Infinite loop is faked with the classic clone technique: the real list is
  // tripled, we sit in the middle copy, and once a scroll settles past a copy
  // boundary we silently (no animation) jump back into the middle copy.
  const slides = useMemo(() => {
    if (!loop || count === 0) return items.map((item) => ({ item }));
    const extended = [];
    for (let copy = 0; copy < 3; copy += 1) {
      items.forEach((item) => extended.push({ item, copy }));
    }
    return extended;
  }, [items, loop, count]);

  const [activeReal, setActiveReal] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef(null);
  const slideRef = useRef(null);
  const dragRef = useRef({ active: false, pointerId: null, startX: 0, startScrollLeft: 0, moved: false });
  const wrapTimerRef = useRef(null);
  const correctingRef = useRef(false);
  const hoveringRef = useRef(false);

  const getStep = useCallback(() => {
    const el = slideRef.current;
    if (!el) return 0;
    return el.getBoundingClientRect().width + gap;
  }, [gap]);

  const scrollToRaw = useCallback(
    (rawIndex, smooth = true) => {
      const track = trackRef.current;
      const step = getStep();
      if (!track || !step) return;
      const clamped = loop ? rawIndex : Math.max(0, Math.min(rawIndex, count - 1));
      track.scrollTo({ left: clamped * step, behavior: smooth ? "smooth" : "auto" });
    },
    [getStep, loop, count]
  );

  const currentRawIndex = useCallback(() => {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return offset;
    return Math.round(track.scrollLeft / step);
  }, [getStep, offset]);

  const handlePrev = useCallback(() => {
    if (!loop && activeReal === 0) return;
    scrollToRaw(currentRawIndex() - 1);
  }, [loop, activeReal, currentRawIndex, scrollToRaw]);

  const handleNext = useCallback(() => {
    if (!loop && activeReal === count - 1) return;
    scrollToRaw(currentRawIndex() + 1);
  }, [loop, activeReal, count, currentRawIndex, scrollToRaw]);

  const handleDotClick = useCallback(
    (realIndex) => {
      scrollToRaw(offset + realIndex);
    },
    [offset, scrollToRaw]
  );

  // Jump to the middle copy on mount and whenever the item list itself
  // changes (e.g. TestimonialsSection swapping video/text tabs). Runs before
  // paint on the client so the jump never flashes the wrong slide.
  useIsomorphicLayoutEffect(() => {
    setActiveReal(0);
    scrollToRaw(offset, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // Re-align pixel position on resize without changing the logical slide.
  useEffect(() => {
    function onResize() {
      scrollToRaw(offset + activeReal, false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [offset, activeReal, scrollToRaw]);

  // Track scroll position -> active dot, and silently re-center the loop
  // once the user has settled past a clone boundary.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    function onScroll() {
      if (correctingRef.current) return;

      const raw = currentRawIndex();
      const real = ((raw - offset) % count + count) % count;
      setActiveReal((prev) => (prev === real ? prev : real));

      if (!loop) return;
      if (wrapTimerRef.current) clearTimeout(wrapTimerRef.current);
      wrapTimerRef.current = setTimeout(() => {
        if (dragRef.current.active) return;
        const settledRaw = currentRawIndex();
        if (settledRaw < count || settledRaw >= count * 2) {
          correctingRef.current = true;
          const corrected = offset + real;
          scrollToRaw(corrected, false);
          requestAnimationFrame(() => {
            correctingRef.current = false;
          });
        }
      }, WRAP_DEBOUNCE);
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (wrapTimerRef.current) clearTimeout(wrapTimerRef.current);
    };
  }, [count, offset, loop, currentRawIndex, scrollToRaw]);

  // Mouse drag-to-scroll. Touch devices already get native swipe scrolling
  // for free from `overflow-x: auto`, so this only engages for the mouse.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    function onPointerDown(e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragRef.current = {
        active: true,
        pointerId: e.pointerId,
        startX: e.clientX,
        startScrollLeft: track.scrollLeft,
        moved: false,
      };
      track.setPointerCapture(e.pointerId);
      setIsDragging(true);
    }

    function onPointerMove(e) {
      const drag = dragRef.current;
      if (!drag.active || drag.pointerId !== e.pointerId) return;
      const dx = e.clientX - drag.startX;
      if (Math.abs(dx) > 3) drag.moved = true;
      track.scrollLeft = drag.startScrollLeft - dx;
    }

    function endDrag(e) {
      const drag = dragRef.current;
      if (!drag.active || drag.pointerId !== e.pointerId) return;
      track.releasePointerCapture(e.pointerId);
      dragRef.current.active = false;
      setIsDragging(false);
      scrollToRaw(currentRawIndex());
    }

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
    };
  }, [currentRawIndex, scrollToRaw]);

  // Suppress the click that follows a real drag so links inside cards don't
  // fire navigation when the user was only dragging the slider.
  const handleTrackClickCapture = useCallback((e) => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  // Autoplay, paused on hover/focus and while the user is dragging.
  useEffect(() => {
    if (!autoplay || count <= 1) return undefined;
    const id = setInterval(() => {
      if (hoveringRef.current || dragRef.current.active) return;
      scrollToRaw(currentRawIndex() + 1);
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, count, currentRawIndex, scrollToRaw]);

  if (!Card || count === 0) return null;

  const style = {
    "--sap-slider-gap": `${gap}px`,
    "--sap-slider-spv-base": slidesPerView.base ?? 1,
    "--sap-slider-spv-sm": slidesPerView.sm ?? slidesPerView.base ?? 1,
    "--sap-slider-spv-lg": slidesPerView.lg ?? slidesPerView.sm ?? slidesPerView.base ?? 1,
  };

  return (
    <div
      className={styles.slider}
      style={style}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
    >
      <div
        className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClickCapture={handleTrackClickCapture}
      >
        {slides.map((slide, index) => (
          <div
            className={styles.slide}
            key={slide.item.id ?? `${slide.copy ?? 0}-${slide.item.title ?? slide.item.question ?? index}`}
            ref={index === offset ? slideRef : null}
          >
            <Card {...slide.item} {...cardProps} />
          </div>
        ))}
      </div>

      {(showArrows || showDots) && (
        <div className={styles.controls}>
          {showArrows && (
            <button
              type="button"
              className={styles.arrow}
              onClick={handlePrev}
              aria-label="Previous slide"
              disabled={!loop && activeReal === 0}
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
          )}

          {showDots && (
            <div className={styles.dots}>
              {items.map((item, dotIndex) => (
                <button
                  type="button"
                  key={item.id ?? item.title ?? item.question ?? dotIndex}
                  className={`${styles.dot} ${dotIndex === activeReal ? styles.dotActive : ""}`}
                  onClick={() => handleDotClick(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  aria-current={dotIndex === activeReal}
                />
              ))}
            </div>
          )}

          {showArrows && (
            <button
              type="button"
              className={styles.arrow}
              onClick={handleNext}
              aria-label="Next slide"
              disabled={!loop && activeReal === count - 1}
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
