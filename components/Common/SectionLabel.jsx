import "./SectionLabel.css";

/**
 * Small uppercase "eyebrow" label used above a section's main heading -
 * distinct from components/Sap/common/SectionHeading (the large H2 +
 * description + action block already used across the SAP pages). Centered
 * by default with double rule-bars flanking the text, per the reference
 * design; align="left" drops the bars since they have nothing to flank
 * symmetrically once the text isn't centered.
 */
export default function SectionLabel({ title, align = "center", className = "" }) {
  return (
    <div className={`as-section-label as-section-label--${align} ${className}`.trim()}>
      {align === "center" && <span className="as-section-label-bar" aria-hidden="true" />}
      <span className="as-section-label-text">{title}</span>
      {align === "center" && <span className="as-section-label-bar" aria-hidden="true" />}
    </div>
  );
}
