"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuLogOut, LuX, LuPanelLeftClose, LuPanelLeft } from "react-icons/lu";
import { adminLogout } from "../../../lib/api";
import { ADMIN_NAV_ITEMS } from "./navItems";
import styles from "./AdminSidebar.module.css";

export default function AdminSidebar({ open, onClose, collapsed, onToggleCollapse }) {
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      await adminLogout();
    } catch {
      // Even if the request fails, the client has no way to keep using an
      // HttpOnly cookie it can't read - still send the admin back to login.
    }
    router.push("/admin");
  }

  return (
    <>
      {open && <div className={styles.scrim} onClick={onClose} aria-hidden="true" />}
      <aside className={`${styles.sidebar} ${open ? styles.open : ""} ${collapsed ? styles.collapsed : ""}`}>
        <div className={styles.brand}>
          <Image src="/assets/image2/mini-logo.png" alt="Ayushman Solutions logo" width={32} height={32} className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.brandPrimary}>Ayushman</span>
            <span className={styles.brandSecondary}>Admin</span>
          </span>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <LuX aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.collapseBtn}
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <LuPanelLeft aria-hidden="true" /> : <LuPanelLeftClose aria-hidden="true" />}
          </button>
        </div>

        <nav className={styles.nav} aria-label="Admin navigation">
          {ADMIN_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                onClick={onClose}
                title={collapsed ? item.label : undefined}
              >
                <Icon aria-hidden="true" className={styles.navIcon} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.logout}
            onClick={handleLogout}
            disabled={loggingOut}
            title={collapsed ? "Log Out" : undefined}
          >
            <LuLogOut aria-hidden="true" />
            <span>{loggingOut ? "Logging Out..." : "Log Out"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
