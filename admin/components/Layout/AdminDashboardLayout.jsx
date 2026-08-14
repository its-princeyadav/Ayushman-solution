"use client";

import { useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import AdminHeader from "../Header/AdminHeader";
import styles from "./AdminDashboardLayout.module.css";

export default function AdminDashboardLayout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.shell}>
      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((value) => !value)}
      />
      <div className={`${styles.main} ${collapsed ? styles.mainCollapsed : ""}`}>
        <AdminHeader title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
