import Navbar2 from "../../components/common/Navbar2";
import "./home2-theme.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Home 2 (Preview) | Ayushman Solutions",
  robots: "noindex, nofollow",
};

export default function Home2Page() {
  return (
    <>
      <Navbar2 />
      <main className={styles.page}>
        <h1 className={styles.heading}>Welcome to Home 2</h1>
      </main>
    </>
  );
}
