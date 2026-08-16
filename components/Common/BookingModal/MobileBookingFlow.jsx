"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiOutlineCalendar } from "react-icons/hi";
import BookingCalendar from "./BookingCalendar";
import BookingTimeSlots from "./BookingTimeSlots";
import LeadInfoForm from "./LeadInfoForm";
import BookingConfirmation from "./BookingConfirmation";

const EASE = [0.16, 1, 0.3, 1];

function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function formatTime(time) {
  return time.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

/**
 * Mobile-first rendering of the booking wizard: a dedicated single-column
 * page (sticky header/footer, everything else flowing and progressively
 * revealed as each choice is made) instead of a shrunk version of the
 * desktop two-pane layout. All wizard state and step components
 * (BookingCalendar/BookingTimeSlots/LeadInfoForm/BookingConfirmation) are
 * owned by BookingModal.jsx and passed down - this file is presentation
 * only, so none of the booking logic/state lives here.
 */
export default function MobileBookingFlow({
  isConfirmed,
  onClose,
  leadForm,
  onLeadFieldChange,
  selectedDate,
  selectedSlot,
  visibleMonth,
  onVisibleMonthChange,
  onSelectDate,
  onSelectSlot,
  isLeadFormComplete,
  onSubmit,
  features,
}) {
  return (
    <>
      <header className="bookingModalMobile__header">
        <span className="bookingModalMobile__headerLabel">
          {isConfirmed ? "Booking Confirmed" : "Book a Consultation"}
        </span>
        <motion.button
          type="button"
          className="bookingModalMobile__close"
          onClick={onClose}
          aria-label="Close dialog"
          whileTap={{ scale: 0.85 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <HiOutlineX aria-hidden="true" />
        </motion.button>
      </header>

      {isConfirmed ? (
        <div className="bookingModalMobile__body">
          <BookingConfirmation leadForm={leadForm} selectedDate={selectedDate} selectedSlot={selectedSlot} />
        </div>
      ) : (
        <>
          <div className="bookingModalMobile__body">
            <section className="bookingModalMobile__intro">
              <span className="bookingModalMobile__introIcon">
                <HiOutlineCalendar aria-hidden="true" />
              </span>
              <h2 id="bookingModalTitle" className="bookingModalMobile__introTitle">
                Book Your Consultation
              </h2>
              <p className="bookingModalMobile__introText">
                Pick a date that works for you and our team will confirm a time to walk through your requirements.
              </p>
              <ul className="bookingModalMobile__chipList">
                {features.map(({ icon: Icon, label }) => (
                  <li key={label} className="bookingModalMobile__chip">
                    <Icon aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bookingModalMobile__stepCard bookingModalMobile__stepCard--calendar">
              <span className="bookingModalMobile__stepLabel">Select a date</span>
              <BookingCalendar
                visibleMonth={visibleMonth}
                onVisibleMonthChange={onVisibleMonthChange}
                selectedDate={selectedDate}
                onSelectDate={onSelectDate}
              />
            </section>

            {/* Calendar stays mounted above (unlike desktop, which swaps it
                out for the lead form) - slots and the form progressively
                stack beneath it instead, matching the single continuous
                page the mobile spec calls for. */}
            <AnimatePresence>
              {selectedDate && (
                <motion.section
                  key={`${selectedDate.toISOString()}-slots`}
                  className="bookingModalMobile__stepCard"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <span className="bookingModalMobile__stepLabel">Choose a time</span>
                  <BookingTimeSlots
                    selectedDate={selectedDate}
                    selectedSlot={selectedSlot}
                    onSelectSlot={onSelectSlot}
                  />
                </motion.section>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedSlot && (
                <motion.section
                  key="mobile-lead-form"
                  className="bookingModalMobile__stepCard"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <span className="bookingModalMobile__stepLabel">Your details</span>
                  <LeadInfoForm values={leadForm} onFieldChange={onLeadFieldChange} />
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          <footer className="bookingModalMobile__footer">
            <div className="bookingModalMobile__footerRecap">
              <span className="bookingModalMobile__footerLabel">Your Booking</span>
              <span className="bookingModalMobile__footerValue">
                {selectedSlot
                  ? `${formatDate(selectedDate)} · ${formatTime(selectedSlot)}`
                  : selectedDate
                  ? `${formatDate(selectedDate)} · pick a time above`
                  : "Select a date to continue"}
              </span>
            </div>
            <button
              type="button"
              className="bookingModalMobile__cta"
              disabled={!selectedSlot || !isLeadFormComplete}
              onClick={onSubmit}
            >
              Book Consultation
            </button>
          </footer>
        </>
      )}
    </>
  );
}
