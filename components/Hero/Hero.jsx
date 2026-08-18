"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import styles from "./Hero.module.css";

const AUTO_ADVANCE_MS = 6000;
const SWIPE_THRESHOLD_PX = 50;

// Slide 1 keeps this text explicitly (no per-slide `title` set below) -
// every other slide has its own.
const DEFAULT_TITLE = {
  main: "Transforming Businesses",
  secondary: "with Intelligent SAP Solutions",
};

const SLIDES = [
  { id: "sap", image: "/assets/image2/sap-hero.png" },
  {
    id: "cyberpunk-city",
    image: "/assets/image2/hero-cyberpunk-city.jpg",
    title: { main: "Catapult to Peak Performance", secondary: "with the No. 1 SAP ERP" },
  },
  {
    id: "superhero",
    image: "/assets/image2/hero-superhero.jpg",
    title: { main: "Outpace the Data Race", secondary: "with Top Business Intelligence Tools" },
  },
  {
    id: "abstract-dark",
    image: "/assets/image2/hero-abstract-dark.jpg",
    title: { main: "Soar Above", secondary: "with Resilient, Cloud-Ready Solutions" },
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const activeTitle = SLIDES[activeIndex].title || DEFAULT_TITLE;

  // Drag/swipe (mouse or touch, via the unified Pointer Events API) - a
  // gesture past the threshold advances/goes back, same as clicking an
  // arrow. Not a follow-the-finger slide: the crossfade transition (not a
  // horizontal filmstrip) doesn't have a natural "partial drag" visual, so
  // this only reacts once the gesture completes, not on every pointermove.
  // Window-level listeners (not React's onPointerMove/Up) so a fast swipe
  // that exits the hero's bounds before releasing is still tracked.
  const handlePointerDown = useCallback(
    (event) => {
      if (event.target.closest("button")) return;
      if (!event.isPrimary) return;

      const startX = event.clientX;
      setIsDragging(true);
      setIsPaused(true);

      function handlePointerUp(upEvent) {
        const deltaX = upEvent.clientX - startX;
        if (deltaX > SWIPE_THRESHOLD_PX) {
          goPrev();
        } else if (deltaX < -SWIPE_THRESHOLD_PX) {
          goNext();
        }
        setIsDragging(false);
        setIsPaused(false);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointercancel", handlePointerUp);
      }

      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
    },
    [goNext, goPrev]
  );

  // Autoplay - paused while dragging or while a keyboard user is focused
  // on one of this hero's own controls (arrows/dots). Deliberately NOT
  // paused on mouse hover: this hero is full-screen, so "hovering" it is
  // just "the cursor is anywhere on the page" - that would pause autoplay
  // almost permanently instead of only during deliberate interaction,
  // which is the opposite of the point. Also NOT gated on
  // prefers-reduced-motion - the crossfade *animation* itself is still
  // disabled for those users (Hero.module.css's reduced-motion block),
  // but the slide still needs to advance rather than sitting frozen on
  // slide 1 forever, which is what gating this on that media query used
  // to do.
  useEffect(() => {
    if (isPaused) return undefined;

    timerRef.current = setTimeout(goNext, AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, isPaused, goNext]);

  return (
    <section
      className={`${styles.hero} ${isDragging ? styles.heroDragging : ""}`}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
    >
      {SLIDES.map((slide, index) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`${styles.heroImage} ${index === activeIndex ? styles.heroImageActive : ""}`}
        />
      ))}

      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        {/* Keyed on activeIndex so the entrance animation (as-fade-up/
            heroAccentGrow) replays on every slide change instead of only
            once on mount - same remount-to-replay technique already used
            for WhyBusinessesChooseUs's image swap. */}
        <h1 className={styles.heroTitle} key={`title-${activeIndex}`}>
          <span>{activeTitle.main}</span>
          <span className={styles.heroTitleSecondary}>{activeTitle.secondary}</span>
        </h1>
        <div className={styles.heroAccent} key={`accent-${activeIndex}`} />
      </div>

      <button
        type="button"
        className={`${styles.heroArrow} ${styles.heroArrowPrev}`}
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <LuChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        className={`${styles.heroArrow} ${styles.heroArrowNext}`}
        onClick={goNext}
        aria-label="Next slide"
      >
        <LuChevronRight aria-hidden="true" />
      </button>

      <div className={styles.heroDots} role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={`${styles.heroDot} ${index === activeIndex ? styles.heroDotActive : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
