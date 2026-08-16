"use client";

import SearchableSelect from "../SearchableSelect/SearchableSelect";

const SOLUTION_OPTIONS = [
  "SAP",
  "Salesforce",
  "Data Analytics",
  "Cloud Services",
  "AI & Automation",
  "Digital Transformation",
  "ERP Solutions",
];

const TURNOVER_OPTIONS = ["Below ₹1 Cr", "₹1-5 Cr", "₹5-25 Cr", "₹25-100 Cr", "Above ₹100 Cr"];

/**
 * Step 3 of the booking flow: lead details. Pure/controlled like
 * BookingCalendar/BookingTimeSlots - field values and their setter live in
 * BookingModal.jsx so the Continue button (also in BookingModal.jsx) can
 * read completeness without this component needing to expose anything
 * beyond onFieldChange.
 */
export default function LeadInfoForm({ values, onFieldChange }) {
  function bind(field) {
    return {
      value: values[field],
      onChange: (event) => onFieldChange(field, event.target.value),
    };
  }

  return (
    <div className="bookingModal__formGrid">
      <div className="bookingModal__field">
        <label htmlFor="leadForm-fullName">Full Name *</label>
        <input id="leadForm-fullName" className="bookingModal__input" type="text" placeholder="Your full name" required {...bind("fullName")} />
      </div>

      <div className="bookingModal__field">
        <label htmlFor="leadForm-email">Email Address *</label>
        <input id="leadForm-email" className="bookingModal__input" type="email" placeholder="you@company.com" required {...bind("email")} />
      </div>

      <div className="bookingModal__field">
        <label htmlFor="leadForm-phone">Phone Number *</label>
        <input id="leadForm-phone" className="bookingModal__input" type="tel" placeholder="+91 00000 00000" required {...bind("phone")} />
      </div>

      <div className="bookingModal__field">
        <label htmlFor="leadForm-company">Company Name *</label>
        <input id="leadForm-company" className="bookingModal__input" type="text" placeholder="Your company" required {...bind("company")} />
      </div>

      <div className="bookingModal__field">
        <label htmlFor="leadForm-state">State *</label>
        <input id="leadForm-state" className="bookingModal__input" type="text" placeholder="Your state" required {...bind("state")} />
      </div>

      <div className="bookingModal__field">
        <SearchableSelect
          id="leadForm-solution"
          label="Which Solution Are You Interested In? *"
          placeholder="Select a solution"
          options={SOLUTION_OPTIONS}
          required
          value={values.solution}
          onChange={(value) => onFieldChange("solution", value)}
        />
      </div>

      <div className="bookingModal__field bookingModal__field--wide">
        <SearchableSelect
          id="leadForm-turnover"
          label="Yearly Turnover *"
          placeholder="Select your yearly turnover"
          options={TURNOVER_OPTIONS}
          required
          value={values.turnover}
          onChange={(value) => onFieldChange("turnover", value)}
        />
      </div>

      <div className="bookingModal__field bookingModal__field--wide">
        <label htmlFor="leadForm-message">Message / Requirements</label>
        <textarea
          id="leadForm-message"
          className="bookingModal__textarea"
          placeholder="Tell us a bit about what you're looking for..."
          rows={3}
          {...bind("message")}
        />
      </div>
    </div>
  );
}
