"use client";

import { usePathname } from "next/navigation";
import { LuMenu, LuSearch, LuBell, LuChevronDown } from "react-icons/lu";
import { ADMIN_NAV_ITEMS } from "../Sidebar/navItems";
import styles from "./AdminHeader.module.css";

export default function AdminHeader({ onMenuClick }) {
  const pathname = usePathname();
  const title = ADMIN_NAV_ITEMS.find((item) => pathname === item.href || pathname?.startsWith(`${item.href}/`))
    ?.label;

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
