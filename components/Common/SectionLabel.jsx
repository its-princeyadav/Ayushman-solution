import "./SectionLabel.css";


export default function SectionLabel({ title, align = "center", className = "" }) {
  return (
    <div className={`as-section-label as-section-label--${align} ${className}`.trim()}>
      {align !== "right" && <span className="as-section-label-bar" aria-hidden="true" />}
      <span className="as-section-label-text">{title}</span>
      {align === "center" && <span className="as-section-label-bar" aria-hidden="true" />}
    </div>
  );
}
