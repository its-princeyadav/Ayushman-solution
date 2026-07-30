"use client";

import styles from "./Tabs.module.css";

export default function Tabs({ tabs, activeId, onChange, stretch = false, pill = false }) {
  return (
    <div className={`${styles.tabs} ${stretch ? styles.stretch : ""} ${pill ? styles.pill : ""}`} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activeId}
          className={`${styles.tab} ${pill ? styles.pillTab : ""} ${tab.id === activeId ? styles.active : ""}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
