"use client";

import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <HiOutlineChevronDown className={styles.chevron} aria-hidden="true" />
      </button>

      <div className={styles.panel} style={{ maxHeight: isOpen ? "480px" : "0px" }}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}
