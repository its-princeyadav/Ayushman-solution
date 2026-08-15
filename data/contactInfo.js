// Reused across the Contact page (ContactInfo cards + form), and imported
// directly by lib/models/Contact.js for the schema's `service` enum - single
// source of truth, keep changes here in sync with that schema's expectations.

export const CONTACT_EMAIL = "hello@example.com";

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
