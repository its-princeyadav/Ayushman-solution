"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ensureMinimumSlides } from "../ensureMinimumSlides";
import CurvedCarouselCard from "./CurvedCarouselCard";
import styles from "./CurvedCarousel.module.css";

// Arc geometry - a true shared cylinder, not independently-tuned per-effect
// constants: every card's rotation, depth, and taper come from ONE angle,
// which itself comes from ONE normalized progress value (`eased`, 0 at the
// active card, 1 at the edge of the visible window). Nothing here is a
// hardcoded per-distance table - everything is continuous interpolation, so
// there are no seams between adjacent cards regardless of how many are
// visible.
//
// Visual hierarchy is inverted from a standard coverflow: the OUTER cards
// are the largest, the CENTER card is the smallest and acts as a pivot
// rather than the focal point.
const MAX_ROTATE_DEG = 20; // rotateY magnitude at the edge of the visible window
const MAX_ROTATE_Z_DEG = 2; // very subtle per-card fan tilt, not the main rotation
const CENTER_SCALE = 0.82;
const EDGE_SCALE = 1.0;
const MIN_EDGE_HEIGHT_PERCENT = 55; // the shortest a card edge ever gets, at the dead center of the row
const ARC_RADIUS_RATIO = 6; // radius = cardWidth * this - the cylinder's radius, constant for every card
const CARD_GAP_PX = 8; // guaranteed visual gap between every adjacent pair, at every distance
const CORNER_RADIUS_PX = 20; // a fixed pixel radius, same idea as a normal border-radius value

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Smoothstep (not linear, not a stepped table) - this is what makes the
// whole progression, top curve, bottom curve, rotation, and taper read as
// one continuous arc with no sharp jump between any two adjacent cards.
function smoothstep(t) {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

// The single normalized value everything else derives from: 0 at the
// active card, ramping smoothly to 1 at the far edge of the visible window
// (halfWindow away), regardless of how many cards a caller chooses to show.
function getEasedProgress(distance, halfWindow) {
  return smoothstep(halfWindow > 0 ? distance / halfWindow : 0);
}

// This is what makes the trapezoid progression actually connect card to
// card instead of each card tapering independently: rather than asking
// "how tall is THIS card's own left/right edge", every edge in the whole
// row - including the ones shared between two neighboring cards - samples
// ONE continuous height envelope at its position along the row (`boundary`,
// in card-index units: card N's left edge is at N-0.5, its right edge is
// at N+0.5). Card N's right edge and card N+1's left edge are the exact
// same boundary position, so they always evaluate to the exact same
// height - that shared value IS the synchronization, not a separate
// "inherit from the previous card" step. The envelope is smallest at the
// dead center of the row (boundary 0, where the active card's own two
// edges - at -0.5 and +0.5 - end up equal by symmetry) and reaches full
// height at the outermost visible edge.
function getEnvelopeHeightPercent(boundary, maxBoundary) {
  const t = smoothstep(maxBoundary > 0 ? Math.abs(boundary) / maxBoundary : 0);
  return lerp(MIN_EDGE_HEIGHT_PERCENT, 100, t);
}

// Mirrors the CSS `min(var(--curved-card-width/height), Nvw)` breakpoint
// overrides in CurvedCarousel.module.css. clip-path's polygon() only
// accepts percentages, which is exactly why the first rounded-corner
// attempt (straight lines cut in from each corner) came out faceted rather
// than smoothly curved - a true curve needs path()'s SVG bezier/arc
// commands, which only accept real pixel coordinates. Keeping those pixel
// dimensions in sync with whatever size the CSS is actually rendering the
// card at (at any viewport width) is what this is for.
function getEffectiveCardSize(cardWidth, cardHeight, viewportWidth) {
  if (viewportWidth == null) return { width: cardWidth, height: cardHeight };
  if (viewportWidth < 560) {
    return { width: Math.min(cardWidth, viewportWidth * 0.62), height: Math.min(cardHeight, viewportWidth * 0.78) };
  }
  if (viewportWidth < 900) {
    return { width: Math.min(cardWidth, viewportWidth * 0.7), height: Math.min(cardHeight, viewportWidth * 0.56) };
  }
  return { width: cardWidth, height: cardHeight };
}

// A point `distance` px from `corner`, moving toward `toward` - clamped to
// half that edge's own length so two very short (heavily tapered) adjacent
// edges can't produce overlapping/inverted curves at the corner.
function pointTowards(corner, toward, distance) {
  const dx = toward[0] - corner[0];
  const dy = toward[1] - corner[1];
  const edgeLength = Math.hypot(dx, dy);
  if (edgeLength === 0) return corner;
  const t = Math.min(distance, edgeLength / 2) / edgeLength;
  return [corner[0] + dx * t, corner[1] + dy * t];
}

// True smooth rounded corners (not the earlier straight-line chamfer):
// each of the 4 corners is replaced with a quadratic bezier - `Q` uses the
// original sharp corner itself as the curve's control point, which is the
// standard "round off a polyline vertex" technique and works cleanly even
// though this trapezoid's corners usually aren't 90 degrees (a vertical
// left/right edge meeting a slanted top/bottom edge) - a true circular arc
// would assume a fixed relationship between the two edges that doesn't
// hold here, but a bezier just smoothly blends between whatever two
// directions actually meet at that corner. `width`/`height` must be the
// card's real rendered pixel size (see getEffectiveCardSize) since path()
// coordinates aren't relative like polygon()'s percentages.
function buildRoundedTrapezoidPath(width, height, leftInsetPx, rightInsetPx, radius) {
  const corners = [
    [0, leftInsetPx], // top-left
    [width, rightInsetPx], // top-right
    [width, height - rightInsetPx], // bottom-right
    [0, height - leftInsetPx], // bottom-left
  ];
  const count = corners.length;
  const rounded = corners.map((corner, index) => {
    const prev = corners[(index - 1 + count) % count];
    const next = corners[(index + 1) % count];
    return {
      corner,
      inPoint: pointTowards(corner, prev, radius),
      outPoint: pointTowards(corner, next, radius),
    };
  });

  let d = `M ${rounded[0].inPoint[0]} ${rounded[0].inPoint[1]}`;
  for (let i = 0; i < count; i += 1) {
    const { corner, outPoint } = rounded[i];
    const nextIn = rounded[(i + 1) % count].inPoint;
    d += ` Q ${corner[0]} ${corner[1]} ${outPoint[0]} ${outPoint[1]} L ${nextIn[0]} ${nextIn[1]}`;
  }
  d += " Z";
  return `path("${d}")`;
}

// The raw curve (radius * sin(angle)) alone can put two adjacent cards
// closer together than their own (scaled) widths, since it's tuned for
// visual angle progression, not for the cards' actual footprints - that's
// the overlap. This walks outward from the center accumulating each step's
// delta as whichever is LARGER: the curve's own natural spacing at that
// step, or the minimum needed to fit both cards' half-widths plus
// CARD_GAP_PX with zero overlap. Near the center the curve's own spacing is
// usually already close to (or below) that minimum, so this mostly reduces
// to "half-width + half-width + gap" there while still following the
// curve's proportions further out where its natural spacing is already
// wide enough on its own - the arc widens to accommodate the gap rather
// than a flat margin being bolted on afterward.
function getArcOffsetMagnitude(distance, cardWidth, halfWindow) {
  if (distance === 0) return 0;
  const radius = cardWidth * ARC_RADIUS_RATIO;
  let position = 0;
  for (let d = 1; d <= distance; d += 1) {
    const prevEased = getEasedProgress(d - 1, halfWindow);
    const eased = getEasedProgress(d, halfWindow);
    const prevAngleRad = (prevEased * MAX_ROTATE_DEG * Math.PI) / 180;
    const angleRad = (eased * MAX_ROTATE_DEG * Math.PI) / 180;
    const curveDelta = radius * (Math.sin(angleRad) - Math.sin(prevAngleRad));
    const prevHalfWidth = (cardWidth * lerp(CENTER_SCALE, EDGE_SCALE, prevEased)) / 2;
    const halfWidth = (cardWidth * lerp(CENTER_SCALE, EDGE_SCALE, eased)) / 2;
    const minDelta = prevHalfWidth + halfWidth + CARD_GAP_PX;
    position += Math.max(curveDelta, minDelta);
  }
  return position;
}

// Drag tuning: how far (px) a drag has to travel before it commits to
// moving one slide, and the (much smaller) deadzone below which a drag is
// treated as a plain click instead of a swipe.
const DRAG_COMMIT_THRESHOLD_PX = 60;
const CLICK_SUPPRESS_THRESHOLD_PX = 6;

// How far outside the visible window a slot's image still gets loaded, so
// the *next* card to enter view already has its image ready instead of
// popping in blank - but a long `items` list doesn't eagerly fetch every
// image up front just because it's mounted (see the `hidden` "keep
// mounted for smooth looping" note below).
const IMAGE_PRELOAD_BUFFER = 1;

// Per-breakpoint response: Desktop keeps the caller's own visibleCards/
// curveIntensity untouched; each step down caps how many cards can be
// visible at once and softens the arc so it doesn't feel exaggerated (or
// overflow) on a narrower viewport. `null` width (not measured yet - SSR/
// first paint) intentionally resolves to the desktop tier so server and
// first client render match exactly; the real breakpoint applies a moment
// later once mounted.
function getBreakpointAdjustment(width) {
  if (width != null && width < 560) return { visibleCardsCap: 3, curveScale: 0.55 };
  if (width != null && width < 900) return { visibleCardsCap: 5, curveScale: 0.75 };
  if (width != null && width < 1200) return { visibleCardsCap: Infinity, curveScale: 0.85 };
  return { visibleCardsCap: Infinity, curveScale: 1 };
}

// Raw index distance wraps around the ends when `loop` is on, so e.g. going
// "previous" from index 0 reports offset -1 (not -(length-1)) - this is
// what makes looping look like a continuous slide instead of the whole
// strip jumping across itself.
function getWrappedOffset(index, activeIndex, length, loop) {
  let offset = index - activeIndex;
  if (loop) {
    if (offset > length / 2) offset -= length;
    else if (offset < -length / 2) offset += length;
  }
  return offset;
}

// Pure positioning math, kept outside the component so it's trivial to
// reason about/tweak in isolation - given a card's distance from the active
// slide (`offset`), returns the inline style that places it on the arc.
// `dragOffset` shifts every card together while the user is actively
// dragging, so the whole curve tracks the pointer instead of just the
// active card; `isDragging` turns the transition off during that tracking
// (1:1 with the pointer) and back on for the settle/commit animation.
//
// `curveIntensity` only scales the *curve* (rotation, fan tilt, depth) -
// the horizontal position (translateX) is derived from the un-scaled base
// angle, so curveIntensity=0 still spreads cards into a normal flat row
// instead of collapsing them all onto the center.
function getSlotStyle({
  offset,
  hidden,
  curveIntensity,
  cardWidth,
  cardHeight,
  viewportWidth,
  halfWindow,
  activeScale,
  inactiveScale,
  activeOpacity,
  inactiveOpacity,
  dragOffset,
  isDragging,
  animationDuration,
}) {
  const isActive = offset === 0;
  const sign = Math.sign(offset);
  const distance = Math.abs(offset);
  const eased = getEasedProgress(distance, halfWindow);
  const radius = cardWidth * ARC_RADIUS_RATIO;
  const angleRad = (eased * MAX_ROTATE_DEG * Math.PI) / 180;

  // Left (negative offset) tilts positive/toward-right, right (positive
  // offset) tilts negative/toward-left, both facing the center.
  const rotateY = -sign * eased * MAX_ROTATE_DEG * curveIntensity;
  const rotateZ = -sign * eased * MAX_ROTATE_Z_DEG * curveIntensity;
  const translateX = sign * getArcOffsetMagnitude(distance, cardWidth, halfWindow) + dragOffset;
  // True cylinder depth: radius*(cos(angle)-1) is exactly 0 at the active
  // card and recedes as the angle grows - every card sits on the same
  // circular surface (constant radius) instead of an independently-tuned
  // "pop forward" value fighting the scale hierarchy.
  const translateZ = curveIntensity * radius * (Math.cos(angleRad) - 1);
  const scale = (isActive ? activeScale : inactiveScale) * lerp(CENTER_SCALE, EDGE_SCALE, eased);
  const opacity = hidden ? 0 : isActive ? activeOpacity : inactiveOpacity;

  // Perspective trapezoid, chained across the whole row (see
  // getEnvelopeHeightPercent): this card's left edge and right edge each
  // sample the shared envelope at their own boundary position, so its
  // right edge height is numerically identical to the next card's left
  // edge height - that shared value is what makes the top/bottom silhouette
  // read as one continuous surface instead of independent trapezoids.
  // curveIntensity blends the whole envelope back toward a flat 100%/100%
  // rectangle, consistent with it flattening every other curve effect too.
  // Applied on this wrapper (not CurvedCarouselCard) so the image/content
  // underneath just gets clipped along with everything else - no new prop
  // needed on the card component itself.
  const maxBoundary = halfWindow + 0.5;
  const leftHeightPercent = lerp(100, getEnvelopeHeightPercent(offset - 0.5, maxBoundary), curveIntensity);
  const rightHeightPercent = lerp(100, getEnvelopeHeightPercent(offset + 0.5, maxBoundary), curveIntensity);
  const { width: effectiveWidth, height: effectiveHeight } = getEffectiveCardSize(cardWidth, cardHeight, viewportWidth);
  const leftInsetPx = ((100 - leftHeightPercent) / 200) * effectiveHeight;
  const rightInsetPx = ((100 - rightHeightPercent) / 200) * effectiveHeight;
  const clipPath = buildRoundedTrapezoidPath(effectiveWidth, effectiveHeight, leftInsetPx, rightInsetPx, CORNER_RADIUS_PX);

  // Not blur - a mild brightness/saturation/contrast pullback on
  // everything but the active card, so the center instantly reads as the
  // focal point without softening any card's actual image. The shadow
  // lives here too (filter: drop-shadow, not CSS box-shadow) because
  // box-shadow is anchored to the element's rectangular box and would
  // render a mismatched rectangle around the clip-path trapezoid;
  // drop-shadow follows the actual clipped silhouette instead.
  const dimFilter = isActive ? "" : "brightness(0.82) saturate(0.75) contrast(0.95) ";
  const shadowFilter = `drop-shadow(0 ${lerp(14, 30, eased)}px ${lerp(26, 50, eased)}px rgba(15, 23, 42, ${lerp(
    0.28,
    0.42,
    eased
  )}))`;

  return {
    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
    opacity,
    clipPath,
    WebkitClipPath: clipPath,
    filter: `${dimFilter}${shadowFilter}`,
    // Larger/more-forward cards (farther from center, see translateZ above)
    // stack above nearer ones - separate sibling elements don't get
    // automatic 3D depth-sorting from the browser, so this has to match
    // the translateZ ordering by hand.
    zIndex: hidden ? 1 : 10 + distance,
    pointerEvents: hidden ? "none" : undefined,
    cursor: hidden ? undefined : isActive ? undefined : "pointer",
    transition: isDragging
      ? "none"
      : `transform ${animationDuration}ms cubic-bezier(0.65, 0, 0.35, 1), opacity ${Math.min(
          animationDuration,
          400
        )}ms ease, filter ${animationDuration}ms ease, clip-path ${animationDuration}ms ease, -webkit-clip-path ${animationDuration}ms ease`,
  };
}

/**
 * Reusable premium curved carousel (see the Dribbble reference this was
 * commissioned from - layout/interaction only, not its colors/branding).
 * Fully generic and content-agnostic: every visual and behavioral aspect is
 * driven by props, so any page can drop in its own `items` and get a
 * carousel matching this project's own design system (nothing here hardcodes
 * SAP-module tokens or colors).
 *
 * Slide object shape (every field optional except `id`):
 *   { id, image, title, description, icon, accentColor, badge, buttonText, buttonLink }
 * `icon` must be an already-rendered element (`icon: <FaRocket />`), not a
 * bare component reference - see CurvedCarouselCard's docblock for why.
 *
 * If `items` has fewer entries than `visibleCards` wants to show, they're
 * padded with clones (see ensureMinimumSlides, in Common/) so the arc still
 * has enough cards to read as a curve instead of collapsing/stretching -
 * purely presentational, and applied automatically, so a caller with only
 * 3-4 real items doesn't need to do anything extra.
 *
 * Built in phases (see the task this was requested under) - this file's
 * public prop contract was written for the *final* component from Phase 1
 * so callers never had to change how they invoke it as later phases landed:
 *   - items, cardWidth, cardHeight, className, ariaLabel      -> Phase 1
 *   - visibleCards, curveIntensity, activeScale, inactiveScale,
 *     activeOpacity, inactiveOpacity                          -> Phase 2
 *   - autoPlay, autoPlayDelay, loop, showNavigation,
 *     showPagination, animationDuration                       -> Phase 3
 *   - full slide content (icon/description/badge/CTA)         -> Phase 4
 *   - everything below                                        -> Phase 5 (this pass)
 *
 * Phase 5 additions:
 *   - Clicking a visible-but-inactive card brings it to center (a hover
 *     cursor on those cards hints this); a plain CSS hover-lift on the card
 *     itself (not the JS-driven .slot transform, so it can't fight the
 *     inline arc positioning) adds a small tactile response.
 *   - Only images within `visibleCards` + a small buffer are actually
 *     requested (see IMAGE_PRELOAD_BUFFER) - a long `items` list doesn't
 *     eagerly fetch every slide's image just because it's mounted for
 *     smooth looping.
 *   - visibleCards/curveIntensity are further adjusted per viewport
 *     breakpoint (see getBreakpointAdjustment) so the arc narrows itself on
 *     laptop/tablet/mobile instead of overflowing or feeling exaggerated;
 *     resolves to the desktop tier during SSR/first paint so hydration
 *     matches, then settles to the real breakpoint client-side.
 *   - slide transitions (and the dot progress fill) collapse to near-zero
 *     duration under prefers-reduced-motion (CSS `!important`, see
 *     CurvedCarousel.module.css - it can still beat the JS-computed inline
 *     transition because the browser cascades `transition-duration` as its
 *     own longhand). Autoplay itself is NOT gated on that media query -
 *     slides still advance for reduced-motion users, just without the
 *     animated transition doing it (an earlier version skipped autoplay
 *     entirely here, which just read as broken on any OS/browser reporting
 *     the preference, intentionally or not).
 *   - a visually-hidden aria-live region announces the active slide by
 *     title, on top of the existing role/aria-roledescription/aria-hidden
 *     wiring from Phase 3.
 *   - CurvedCarouselCard is wrapped in React.memo (see that file) so a
 *     dragOffset update - which changes every .slot's wrapper style every
 *     pointermove - doesn't re-render each card's own content along with it.
 */
export default function CurvedCarousel({
  items = [],
  visibleCards = 5,
  cardWidth = 260,
  cardHeight = 380,
  curveIntensity = 1,
  autoPlay = false,
  autoPlayDelay = 5000,
  loop = true,
  showNavigation = true,
  showPagination = true,
  animationDuration = 600,
  activeScale = 1,
  inactiveScale = 1,
  activeOpacity = 1,
  inactiveOpacity = 1,
  className = "",
  ariaLabel = "Carousel",
}) {
  // Presentation-only padding: a curved arc needs enough cards to actually
  // read as a curve (see ensureMinimumSlides) - if a caller has fewer real
  // items than `visibleCards` wants to show, clones fill the rest so the
  // layout doesn't collapse/stretch. Padding targets the caller's own
  // `visibleCards` prop (not a hardcoded count), so this stays generic for
  // any page/config rather than baking in any particular number. Once
  // computed, `displayItems` is what the rest of this component treats as
  // "the" items - navigation, active index, and pagination all operate on
  // it consistently, so there's no separate "real vs padded" bookkeeping
  // to keep in sync.
  const displayItems = useMemo(() => ensureMinimumSlides(items, visibleCards), [items, visibleCards]);
  const length = displayItems.length;
  const [activeIndex, setActiveIndex] = useState(() => Math.floor((length - 1) / 2));
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(null);
  const dragStartXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const suppressClickRef = useRef(false);
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    function measure() {
      setViewportWidth(window.innerWidth);
    }
    function handleResize() {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(measure, 150);
    }
    measure();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimerRef.current);
    };
  }, []);

  const { visibleCardsCap, curveScale } = getBreakpointAdjustment(viewportWidth);
  const effectiveVisibleCards = Math.min(visibleCards, visibleCardsCap);
  const effectiveCurveIntensity = curveIntensity * curveScale;
  const halfWindow = Math.max(1, Math.floor(effectiveVisibleCards / 2));

  function goTo(index) {
    setActiveIndex(() => (loop ? ((index % length) + length) % length : Math.max(0, Math.min(length - 1, index))));
  }

  function next() {
    setActiveIndex((current) => (loop ? (current + 1) % length : Math.min(length - 1, current + 1)));
  }

  function prev() {
    setActiveIndex((current) => (loop ? (current - 1 + length) % length : Math.max(0, current - 1)));
  }

  // Functional setState updates mean this effect never needs `activeIndex`
  // in its deps, so autoplay doesn't tear down/rebuild its interval on
  // every advance - only when the configuration itself changes (or a drag
  // starts/ends, which intentionally restarts the delay). Not paused on
  // hover (a previous version was) - deliberately keeps moving regardless
  // of cursor position, matching the homepage hero carousel. Still paused
  // mid-drag, since that's a direct interaction, not just passive cursor
  // position. NOT gated on prefers-reduced-motion (a previous version of
  // this effect returned undefined here when that media query matched) -
  // that silently disabled autoplay entirely for anyone whose OS/browser
  // reports the preference, which turned out to be more common than
  // intended and reads as "broken", not "respecting a setting". The actual
  // *animated* motion is still disabled for reduced-motion users, just at
  // the CSS level (see CurvedCarousel.module.css's own reduced-motion
  // block, which collapses .slot/.dotProgress's transition/animation
  // durations) - slides still advance, they just don't animate doing it.
  useEffect(() => {
    if (!autoPlay || length <= 1) return undefined;
    const id = setInterval(() => {
      if (isDragging) return;
      next();
    }, autoPlayDelay);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, autoPlayDelay, isDragging, length, loop]);

  const slots = useMemo(
    () =>
      displayItems.map((item, index) => {
        const offset = getWrappedOffset(index, activeIndex, length, loop);
        const distance = Math.abs(offset);
        return {
          item,
          index,
          offset,
          hidden: distance > halfWindow,
          loadImage: distance <= halfWindow + IMAGE_PRELOAD_BUFFER,
          key: item.id ?? index,
        };
      }),
    [displayItems, activeIndex, halfWindow, length, loop]
  );

  if (!displayItems || displayItems.length === 0) return null;

  function handlePointerDown(e) {
    if (length <= 1) return;
    dragStartXRef.current = e.clientX;
    dragDistanceRef.current = 0;
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!isDragging) return;
    const delta = e.clientX - dragStartXRef.current;
    dragDistanceRef.current = delta;
    setDragOffset(delta);
  }

  function endDrag() {
    const delta = dragDistanceRef.current;
    if (Math.abs(delta) > CLICK_SUPPRESS_THRESHOLD_PX) suppressClickRef.current = true;
    if (delta > DRAG_COMMIT_THRESHOLD_PX) prev();
    else if (delta < -DRAG_COMMIT_THRESHOLD_PX) next();
    setIsDragging(false);
    setDragOffset(0);
  }

  function handlePointerUp(e) {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    if (isDragging) endDrag();
  }

  function handlePointerLeave() {
    if (isDragging) endDrag();
  }

  // Real drags (past the small deadzone) shouldn't also fire a click on
  // whatever's under the pointer (e.g. a CTA link, or the click-to-focus
  // handler below) - swallow the one click immediately after a drag, same
  // guard the project's existing Slider component uses for its own
  // drag-to-scroll.
  function handleClickCapture(e) {
    if (suppressClickRef.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClickRef.current = false;
    }
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  }

  const atStart = !loop && activeIndex === 0;
  const atEnd = !loop && activeIndex === length - 1;
  const activeTitle = displayItems[activeIndex]?.title;

  return (
    <div
      className={`${styles.carousel} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        "--curved-card-width": `${cardWidth}px`,
        "--curved-card-height": `${cardHeight}px`,
      }}
    >
      <div className={styles.viewport}>
        <div
          className={styles.stage}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerLeave}
          onPointerLeave={handlePointerLeave}
          onClickCapture={handleClickCapture}
        >
          {slots.map(({ item, index, offset, hidden, loadImage, key }) => (
            <div
              className={styles.slot}
              key={key}
              style={getSlotStyle({
                offset,
                hidden,
                curveIntensity: effectiveCurveIntensity,
                cardWidth,
                cardHeight,
                viewportWidth,
                halfWindow,
                activeScale,
                inactiveScale,
                activeOpacity,
                inactiveOpacity,
                dragOffset,
                isDragging,
                animationDuration,
              })}
              aria-hidden={offset !== 0 ? true : undefined}
              onClick={offset !== 0 ? () => goTo(index) : undefined}
            >
              <CurvedCarouselCard {...item} active={offset === 0} loadImage={loadImage} />
            </div>
          ))}
        </div>

        {showNavigation && length > 1 && (
          <div className={styles.navigation}>
            <button type="button" className={styles.navButton} onClick={prev} disabled={atStart} aria-label="Previous slide">
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className={styles.navButton} onClick={next} disabled={atEnd} aria-label="Next slide">
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {showPagination && length > 1 && (
        <div className={styles.pagination}>
          {displayItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                type="button"
                key={item.id ?? index}
                className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
              >
                {/* Timed fill, not a static dot - only exists on the
                    active dot while autoplay is actually on, doubling as a
                    countdown to the next auto-advance. No remount-key
                    trick needed to replay it per slide: this span only
                    ever exists inside whichever button is currently
                    active, so switching which dot that is naturally
                    unmounts the old span and mounts a fresh one (always
                    starting its animation over from 0%). animationPlayState
                    mirrors the exact isDragging check the real autoplay
                    timer uses to skip a tick, so the visual countdown
                    can't drift out of sync with when the slide actually
                    advances. */}
                {isActive && autoPlay && (
                  <span
                    className={styles.dotProgress}
                    style={{
                      animationDuration: `${autoPlayDelay}ms`,
                      animationPlayState: isDragging ? "paused" : "running",
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {length > 1 && (
        <span className={styles.srOnly} role="status" aria-live="polite">
          {`Slide ${activeIndex + 1} of ${length}${activeTitle ? `: ${activeTitle}` : ""}`}
        </span>
      )}
    </div>
  );
}
