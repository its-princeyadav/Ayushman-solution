"use client";

import { useState } from "react";
import { HiOutlineArrowRight, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Container from "../common/Container";
import SectionLabel from "../../Common/SectionLabel";
import Button from "../common/Button";
import NewsCard from "../Cards/NewsCard";
import styles from "./NewsSection.module.css";

// One featured (large) card + up to 2 compact list-row cards per page -
// same data, same item count, just windowed instead of a uniform filmstrip.
const PAGE_SIZE = 3;

/**
 * Editorial "newsroom" layout: a large featured story plus a short list of
 * secondary stories, paginated. Same props/data as before
 * (eyebrowTitle/sectionTitle/action/items) - only presentation changed, so
 * every existing data/*.js file keeps working unmodified.
 *
 * The two title fields are re-mapped visually, not re-worded: across every
 * data file, `sectionTitle` is always the short label ("News",
 * "News & Articles") and `eyebrowTitle` is always the full sentence-style
 * headline ("Read Our Latest Insights", "Stay connected to News, Events,
 * and Announcements at Ayushman Solution") - the reverse of what their
 * names suggest. So the short one renders as the small pill label and the
 * long one as the actual heading. Pages missing eyebrowTitle (e.g.
 * SapBusinessOneCoimbatore) fall back to sectionTitle as the heading with
 * no pill, same as the original component's behavior.
 */
export default function NewsSection({ eyebrowTitle, sectionTitle, action, items }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const heading = eyebrowTitle || sectionTitle;
  const label = eyebrowTitle ? sectionTitle : null;

  const start = page * PAGE_SIZE;
  const visible = items.slice(start, start + PAGE_SIZE);
  const [featuredItem, ...secondaryItems] = visible;

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section className={styles.section} data-sap-reveal>
      <Container>
        <div className={styles.header}>
          <div className={styles.headerCopy}>
            {label && <SectionLabel title={label} align="left" />}
            <h2 className={styles.title}>{heading}</h2>
          </div>

          <div className={styles.headerActions}>
            {pageCount > 1 && (
              <div className={styles.arrows}>
                <button type="button" className={styles.arrow} onClick={goPrev} aria-label="Previous news">
                  <HiOutlineChevronLeft aria-hidden="true" />
                </button>
                <button type="button" className={styles.arrow} onClick={goNext} aria-label="Next news">
                  <HiOutlineChevronRight aria-hidden="true" />
                </button>
              </div>
            )}
            {action && (
              <Button href={action.href} variant="outline" className={styles.viewAll} icon={HiOutlineArrowRight}>
                {action.label}
              </Button>
            )}
          </div>
        </div>

        {/* Keyed on the page so the fade/rise animation replays each time
            the window advances. */}
        <div className={styles.grid} key={page}>
          {featuredItem && <NewsCard {...featuredItem} featured />}
          {secondaryItems.length > 0 && (
            <div className={styles.secondaryStack}>
              {secondaryItems.map((item) => (
                <NewsCard key={item.title} {...item} />
              ))}
            </div>
          )}
        </div>

        {pageCount > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${index === page ? styles.dotActive : ""}`}
                onClick={() => setPage(index)}
                aria-label={`Go to page ${index + 1}`}
                aria-current={index === page}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
