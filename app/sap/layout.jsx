import ScrollReveal from "../../components/Sap/common/ScrollReveal";

// Wraps every /sap/** route (Next.js layouts nest automatically), so the
// scroll-reveal animation mounts once per SAP page instead of once per
// page composer.
export default function SapLayout({ children }) {
  return (
    <>
      <ScrollReveal />
      {children}
    </>
  );
}
