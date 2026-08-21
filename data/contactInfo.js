// Reused across the Contact page (ContactInfo cards + form), and imported
// directly by lib/models/Contact.js for the schema's `service` enum - single
// source of truth, keep changes here in sync with that schema's expectations.

export const CONTACT_EMAIL = "Info@ayushmansolution.com";

// Same number already used across the SAP location pages (data/sap/*.js,
// "Call - 9667411445") - kept here too as the single source for the
// homepage's own CTA sections.
export const CONTACT_PHONE = "+91 96674 11445";
export const CONTACT_PHONE_HREF = "tel:+919667411445";

export const BUSINESS_HOURS = "Mon - Fri, 9:00 AM - 6:00 PM IST";

export const SERVICE_OPTIONS = [
  "Web Development",
  "Software Development",
  "MERN Stack Development",
  "Data Analytics",
  "Business Intelligence",
  "Cloud Solutions",
  "SAP Solutions",
  "Digital Transformation",
  "IT Consulting",
  "Other",
];
