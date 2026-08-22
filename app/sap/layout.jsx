import ScrollReveal from "../../components/Sap/common/ScrollReveal";
import SapAuroraBackground from "../../components/Sap/common/SapAuroraBackground";

// Wraps every /sap/** route (Next.js layouts nest automatically), so the
// scroll-reveal animation and the shared aurora background (same fixed
// gradient/grid layers as the homepage Hero - see
// components/Sap/common/SapAuroraBackground.jsx) both mount once per SAP
// page instead of once per page composer.
export default function SapLayout({ children }) {
  return (
    <>
      <SapAuroraBackground />
      <ScrollReveal />
      {children}
    </>
  );
}
