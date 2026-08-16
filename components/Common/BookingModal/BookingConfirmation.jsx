"use client";

import { HiOutlineCheckCircle, HiOutlineCalendar } from "react-icons/hi";

function pad(value) {
  return String(value).padStart(2, "0");
}

function toICSDate(date) {
  return (
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}` +
    `T${pad(date.getHours())}${pad(date.getMinutes())}00`
  );
}

// No backend exists to generate a real calendar invite, so this builds a
// minimal, valid .ics file client-side instead - a genuinely working "add
// to calendar" action with no server involved.
function buildICS(selectedSlot) {
  const start = selectedSlot;
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const now = new Date();

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ayushman Solutions//Booking//EN",
    "BEGIN:VEVENT",
    `UID:${now.getTime()}@ayushmansolutions.com`,
    `DTSTAMP:${toICSDate(now)}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    "SUMMARY:Consultation with Ayushman Solutions",
    "DESCRIPTION:30-minute consultation call to walk through your requirements.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function downloadICS(selectedSlot) {
  const blob = new Blob([buildICS(selectedSlot)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "consultation.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Step 4: confirmation. Pure/controlled like the earlier steps - just reads
 * the already-collected booking details. The calendar-file download is a
 * one-off action rather than wizard state, so it's handled entirely inside
 * this component instead of being lifted to BookingModal.jsx.
 */
export default function BookingConfirmation({ leadForm, selectedDate, selectedSlot }) {
  return (
    <div className="bookingModal__confirmation">
      <span className="bookingModal__confirmationIcon">
        <HiOutlineCheckCircle aria-hidden="true" />
      </span>
      <h2 className="bookingModal__confirmationTitle">You&apos;re All Set!</h2>
      <p className="bookingModal__confirmationText">
        Our team will contact you shortly to confirm your consultation.
      </p>

      <div className="bookingModal__confirmationCard">
        <div className="bookingModal__confirmationRow">
          <span className="bookingModal__confirmationLabel">Name</span>
          <span className="bookingModal__confirmationValue">{leadForm.fullName}</span>
        </div>
        <div className="bookingModal__confirmationRow">
          <span className="bookingModal__confirmationLabel">Date &amp; Time</span>
          <span className="bookingModal__confirmationValue">
            {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            {" · "}
            {selectedSlot.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
          </span>
        </div>
        <div className="bookingModal__confirmationRow">
          <span className="bookingModal__confirmationLabel">Phone</span>
          <span className="bookingModal__confirmationValue">{leadForm.phone}</span>
        </div>
        <div className="bookingModal__confirmationRow">
          <span className="bookingModal__confirmationLabel">Company</span>
          <span className="bookingModal__confirmationValue">{leadForm.company}</span>
        </div>
      </div>

      <button
        type="button"
        className="bookingModal__continueBtn bookingModal__confirmationCalendarBtn"
        onClick={() => downloadICS(selectedSlot)}
      >
        <HiOutlineCalendar aria-hidden="true" />
        Add to Calendar
      </button>
    </div>
  );
}
