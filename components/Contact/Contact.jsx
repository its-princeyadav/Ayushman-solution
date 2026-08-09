import CTA from "../CTA/CTA";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="contactMain">
        <div className="contactMain__inner">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <CTA />
    </>
  );
}
