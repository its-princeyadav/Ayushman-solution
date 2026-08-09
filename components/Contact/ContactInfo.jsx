import { HiOutlineMail, HiOutlineClock } from "react-icons/hi";
import { CONTACT_EMAIL, BUSINESS_HOURS } from "../../data/contactInfo";

const CARDS = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: HiOutlineClock,
    label: "Business Hours",
    value: BUSINESS_HOURS,
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div className="contactInfo">
      <h2 className="contactInfo__heading">Let&apos;s Build Something Great Together</h2>
      <p className="contactInfo__description">
        Whether you are looking for technology consulting, software development, analytics
        solutions, business transformation, or customized digital solutions, our team is ready to
        help.
      </p>

      <div className="contactInfo__cards">
        {CARDS.map(({ icon: Icon, label, value, href }) => (
          <div className="contactInfo__card" key={label}>
            <span className="contactInfo__cardIcon">
              <Icon aria-hidden="true" />
            </span>
            <div>
              <h3 className="contactInfo__cardLabel">{label}</h3>
              {href ? (
                <a className="contactInfo__cardValue" href={href}>
                  {value}
                </a>
              ) : (
                <p className="contactInfo__cardValue">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
