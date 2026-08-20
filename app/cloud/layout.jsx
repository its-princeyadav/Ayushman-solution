import ScrollReveal from "../../components/Sap/common/ScrollReveal";

// Reuses the same generic scroll-reveal mount already used by every /sap/**
// route (see app/sap/layout.jsx) - it targets any [data-sap-reveal] element
// and isn't SAP-specific, so this page's Sap/* sections get the same
// fade+rise entrance without a duplicate component.
export default function CloudLayout({ children }) {
  return (
    <>
      <ScrollReveal />
      {children}
    </>
  );
}
