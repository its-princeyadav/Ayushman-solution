import Image from "next/image";
import AdminAuthLayout from "../../components/Layout/AdminAuthLayout";
import LoginForm from "../../components/Login/LoginForm";
import styles from "./AdminLoginScreen.module.css";

export default function AdminLoginScreen() {
  return (
    <AdminAuthLayout>
      <div className={styles.card}>
        <div className={styles.brand}>
          <Image
            src="/assets/image2/mini-logo.png"
            alt="Ayushman Solutions logo"
            width={44}
            height={44}
            className={styles.logo}
            priority
          />
          <span className={styles.brandText}>
            <span className={styles.brandPrimary}>Ayushman</span> <span className={styles.brandSecondary}>Solutions</span>
          </span>
        </div>

        <h1 className={styles.title}>Admin Panel</h1>
        <p className={styles.welcome}>Welcome back. Sign in to manage your site.</p>

        <LoginForm />

        <p className={styles.footer}>&copy; {new Date().getFullYear()} Ayushman Solutions. All rights reserved.</p>
      </div>
    </AdminAuthLayout>
  );
}
