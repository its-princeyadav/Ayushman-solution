"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  LuLayoutDashboard,
  LuUsers,
  LuFileText,
  LuWrench,
  LuSettings,
  LuLogOut,
  LuX,
  LuPanelLeftClose,
  LuPanelLeft,
} from "react-icons/lu";
import { adminLogout } from "../../../lib/api";
import styles from "./AdminSidebar.module.css";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LuLayoutDashboard },
  { id: "users", label: "Users", icon: LuUsers },
  { id: "blog", label: "Blog", icon: LuFileText },
  { id: "services", label: "Services", icon: LuWrench },
  { id: "settings", label: "Settings", icon: LuSettings },
];

// UI-only phase: only /admin/dashboard exists, so navigation between
// sections is a local active-state highlight, not real routing (see the
// admin module notes - other /admin/* pages aren't built yet).
export default function AdminSidebar({ open, onClose, collapsed, onToggleCollapse }) {
  const [activeId, setActiveId] = useState("dashboard");
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();

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
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveId(item.id)}
                title={collapsed ? item.label : undefined}
              >
                <Icon aria-hidden="true" className={styles.navIcon} />
                <span>{item.label}</span>
              </button>
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
