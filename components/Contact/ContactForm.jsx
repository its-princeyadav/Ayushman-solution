"use client";

import { useId, useState } from "react";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { SERVICE_OPTIONS } from "../../data/contactInfo";
import { submitContactForm } from "../../lib/api";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/;

const EMPTY_FIELDS = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  subject: "",
  message: "",
  consent: false,
};

function validate(data) {
  const errors = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2 || data.fullName.trim().length > 100) {
    errors.fullName = "Full name must be between 2 and 100 characters.";
  }

  if (!data.email.trim() || !EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (data.phone.trim() && !PHONE_RE.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (data.company.trim().length > 150) {
    errors.company = "Company name cannot exceed 150 characters.";
  }

  if (!data.service || !SERVICE_OPTIONS.includes(data.service)) {
    errors.service = "Please select a service.";
  }

  if (!data.subject.trim() || data.subject.trim().length < 3 || data.subject.trim().length > 200) {
    errors.subject = "Subject must be between 3 and 200 characters.";
  }

  if (!data.message.trim() || data.message.trim().length < 10 || data.message.trim().length > 3000) {
    errors.message = "Message must be between 10 and 3000 characters.";
  }

  if (!data.consent) {
    errors.consent = "Please agree to be contacted to submit this form.";
  }

  return errors;
}

function Field({ id, label, required, error, children }) {
  return (
    <div className="contactForm__field">
      <label htmlFor={id}>
        {label}
        {required && <span className="contactForm__required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className="contactForm__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default function ContactForm() {
  const idPrefix = useId();
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting
  const [notice, setNotice] = useState(null); // { type: "success" | "error", message }

  const fieldId = (name) => `${idPrefix}-${name}`;

  const updateField = (name, value) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    updateField(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    setNotice(null);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      await submitContactForm({
        fullName: fields.fullName.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        company: fields.company.trim(),
        service: fields.service,
        subject: fields.subject.trim(),
        message: fields.message.trim(),
        consent: fields.consent,
      });

      setFields(EMPTY_FIELDS);
      setErrors({});
      setNotice({
        type: "success",
        message:
          "Thank you for contacting Ayushman Solutions. Your enquiry has been received successfully. Our team will get back to you shortly.",
      });
    } catch (error) {
      if (error.fieldErrors) setErrors(error.fieldErrors);
      setNotice({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="contactForm">
      <h2 className="contactForm__heading">Send Us a Message</h2>

      {notice && (
        <div
          className={`contactForm__notice contactForm__notice--${notice.type}`}
          role="status"
          aria-live="polite"
        >
          {notice.type === "success" ? (
            <HiOutlineCheckCircle aria-hidden="true" />
          ) : (
            <HiOutlineExclamationCircle aria-hidden="true" />
          )}
          <span>{notice.message}</span>
        </div>
      )}

      <form className="contactForm__form" onSubmit={handleSubmit} noValidate>
        <div className="contactForm__row">
          <Field id={fieldId("fullName")} label="Full Name" required error={errors.fullName}>
            <input
              id={fieldId("fullName")}
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={fields.fullName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? `${fieldId("fullName")}-error` : undefined}
              autoComplete="name"
            />
          </Field>

          <Field id={fieldId("email")} label="Work Email" required error={errors.email}>
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              placeholder="you@company.com"
              value={fields.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${fieldId("email")}-error` : undefined}
              autoComplete="email"
            />
          </Field>
        </div>

        <div className="contactForm__row">
          <Field id={fieldId("phone")} label="Phone Number" error={errors.phone}>
            <input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={fields.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${fieldId("phone")}-error` : undefined}
              autoComplete="tel"
            />
          </Field>

          <Field id={fieldId("company")} label="Company Name" error={errors.company}>
            <input
              id={fieldId("company")}
              name="company"
              type="text"
              placeholder="Your company"
              value={fields.company}
              onChange={handleChange}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? `${fieldId("company")}-error` : undefined}
              autoComplete="organization"
            />
          </Field>
        </div>

        <Field id={fieldId("service")} label="Service" required error={errors.service}>
          <select
            id={fieldId("service")}
            name="service"
            value={fields.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${fieldId("service")}-error` : undefined}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id={fieldId("subject")} label="Subject" required error={errors.subject}>
          <input
            id={fieldId("subject")}
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            value={fields.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? `${fieldId("subject")}-error` : undefined}
          />
        </Field>

        <Field id={fieldId("message")} label="Message" required error={errors.message}>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            placeholder="Tell us about your project or requirement"
            value={fields.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${fieldId("message")}-error` : undefined}
          />
        </Field>

        <div className="contactForm__consent">
          <input
            id={fieldId("consent")}
            name="consent"
            type="checkbox"
            checked={fields.consent}
            onChange={handleChange}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${fieldId("consent")}-error` : undefined}
          />
          <label htmlFor={fieldId("consent")}>
            I agree to be contacted regarding my enquiry.
            <span className="contactForm__required" aria-hidden="true"> *</span>
          </label>
        </div>
        {errors.consent && (
          <span id={`${fieldId("consent")}-error`} className="contactForm__error" role="alert">
            {errors.consent}
          </span>
        )}

        <button type="submit" className="contactForm__submit" disabled={status === "submitting"}>
          {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}
