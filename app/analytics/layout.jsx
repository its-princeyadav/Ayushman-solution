import ScrollReveal from "../../components/Sap/common/ScrollReveal";

// Mirrors app/sap/layout.jsx: mounts the shared scroll-reveal animation once
// for every /analytics route instead of duplicating it inside the composer.
export default function AnalyticsLayout({ children }) {
  return (
    <>
      <ScrollReveal />
      {children}
    </>
  );
}
