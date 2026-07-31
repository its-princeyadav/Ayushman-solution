"use client";

import { LuMenu, LuSearch, LuBell, LuChevronDown } from "react-icons/lu";
import styles from "./AdminHeader.module.css";

export default function AdminHeader({ title, onMenuClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button type="button" className={styles.menuBtn} onClick={onMenuClick} aria-label="Open menu">
          <LuMenu aria-hidden="true" />
        </button>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.right}>
        <div className={styles.search}>
          <LuSearch aria-hidden="true" className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>

        <button type="button" className={styles.iconBtn} aria-label="Notifications">
          <LuBell aria-hidden="true" />
          <span className={styles.badge} aria-hidden="true" />
        </button>

        <button type="button" className={styles.profile}>
          <span className={styles.avatar}>AS</span>
          <span className={styles.profileName}>Admin</span>
          <LuChevronDown aria-hidden="true" className={styles.profileChevron} />
        </button>
      </div>
    </header>
  );
}
