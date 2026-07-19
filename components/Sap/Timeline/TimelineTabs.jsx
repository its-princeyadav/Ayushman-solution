"use client";

import { useState } from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import Container from "../common/Container";
import styles from "./TimelineTabs.module.css";

export default function TimelineTabs({ title, description, image, imageAlt = "", years, awardsByYear, background }) {
  const [activeYear, setActiveYear] = useState(years[0]);
  const awards = awardsByYear[activeYear] || [];

  return (
    <section className={styles.section} style={background ? { background } : undefined}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 40vw" className={styles.image} />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}

            <div className={styles.years} role="tablist">
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  role="tab"
                  aria-selected={year === activeYear}
                  className={`${styles.year} ${year === activeYear ? styles.yearActive : ""}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.awards}>
              {awards.map((award) => (
                <div className={styles.award} key={award.bold}>
                  <FaAward className={styles.awardIcon} aria-hidden="true" />
                  <p className={styles.awardText}>
                    {award.prefix && <>{award.prefix} </>}
                    <strong>{award.bold}</strong> {award.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
