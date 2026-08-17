"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX, HiOutlineClock, HiOutlineVideoCamera, HiOutlineCheckCircle, HiOutlineCalendar } from "react-icons/hi";
import BookingCalendar from "./BookingCalendar";
import BookingTimeSlots from "./BookingTimeSlots";
import LeadInfoForm from "./LeadInfoForm";
import BookingConfirmation from "./BookingConfirmation";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import { submitConsultationBooking } from "../../../lib/api";
import { useToast } from "../Toast/ToastProvider";
import "./BookingModal.css";

const EASE = [0.16, 1, 0.3, 1];

const FEATURES = [
  { icon: HiOutlineClock, label: "30 Minute Consultation" },
  { icon: HiOutlineVideoCamera, label: "Online Meeting" },
  { icon: HiOutlineCheckCircle, label: "Instant Confirmation" },
];

const EMPTY_LEAD_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  state: "",
  solution: "",
  turnover: "",
  message: "",
};

// Message is intentionally excluded - it's the only optional field (no "*"
// in the spec).
const REQUIRED_LEAD_FIELDS = ["fullName", "email", "phone", "company", "state", "solution", "turnover"];

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Steps 1-4 of the booking flow: date, then time slot, then lead details,
 * then a confirmation screen. Holds all wizard state (`visibleMonth`,
 * `selectedDate`, `selectedSlot`, `leadForm`, `isConfirmed`) - every step
 * component (BookingCalendar, BookingTimeSlots, LeadInfoForm,
 * BookingConfirmation) is pure/controlled, so the Continue button here can
 * read form completeness directly without any child needing to expose more
 * than an onChange.
 */
export default function BookingModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [leadForm, setLeadForm] = useState(EMPTY_LEAD_FORM);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);
  const showToast = useToast();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      setVisibleMonth(startOfMonth(new Date()));
      setSelectedDate(null);
      setSelectedSlot(null);
      setLeadForm(EMPTY_LEAD_FORM);
      setIsConfirmed(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Picking a new date always clears a previously chosen slot - it belonged
  // to the old date and shouldn't silently carry over.
  function handleSelectDate(date) {
    setSelectedDate(date);
    setSelectedSlot(null);
  }

  function handleLeadFieldChange(field, value) {
    setLeadForm((previous) => ({ ...previous, [field]: value }));
  }

  const isLeadFormComplete = REQUIRED_LEAD_FIELDS.every((field) => leadForm[field].trim() !== "");

  async function handleBookConsultation() {
    if (isSubmitting || !selectedDate || !selectedSlot) return;

    setIsSubmitting(true);
    try {
      await submitConsultationBooking({
        fullName: leadForm.fullName.trim(),
        email: leadForm.email.trim(),
        phone: leadForm.phone.trim(),
        company: leadForm.company.trim(),
        state: leadForm.state.trim(),
        solution: leadForm.solution,
        turnover: leadForm.turnover,
        message: leadForm.message.trim(),
        selectedDate: selectedSlot.toISOString(),
        selectedTime: selectedSlot.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      });
      setIsConfirmed(true);
    } catch (error) {
      showToast(error.message || "Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  useBodyScrollLock(isOpen);

  // Focus trap + ESC-to-close, same pattern as AuthModal.
  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

    const focusables = modalRef.current?.querySelectorAll(focusableSelector);
    (focusables?.[0] || modalRef.current)?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !modalRef.current) return;

      const items = Array.from(modalRef.current.querySelectorAll(focusableSelector));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-modal-backdrop"
          className="bookingModal__backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            key="booking-modal-card"
            className="bookingModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bookingModalTitle"
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <header className="bookingModal__header">
              <span className="bookingModal__headerLabel">Book a Consultation</span>
              <motion.button
                type="button"
                className="bookingModal__close"
                onClick={onClose}
                aria-label="Close dialog"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <HiOutlineX aria-hidden="true" />
              </motion.button>
            </header>

            {isConfirmed ? (
              <BookingConfirmation leadForm={leadForm} selectedDate={selectedDate} selectedSlot={selectedSlot} />
            ) : (
              <>
                <div className="bookingModal__info">
                  <span className="bookingModal__infoIcon">
                    <HiOutlineCalendar aria-hidden="true" />
                  </span>
                  <h2 id="bookingModalTitle" className="bookingModal__infoTitle">
                    Book Your Consultation
                  </h2>
                  <p className="bookingModal__infoText">
                    Pick a date that works for you and our team will confirm a time to walk through your
                    requirements.
                  </p>
                  <ul className="bookingModal__featureList">
                    {FEATURES.map(({ icon: Icon, label }) => (
                      <li key={label} className="bookingModal__featureItem">
                        <span className="bookingModal__featureIcon">
                          <Icon aria-hidden="true" />
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bookingModal__calendarPane">
                  <div className="bookingModal__calendarScroll">
                    <div className="bookingModal__calendarRow">
                      <AnimatePresence mode="wait">
                        {selectedSlot ? (
                          <motion.div
                            key="lead-form"
                            className="bookingModal__calendarRowMain"
                            layout
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2, ease: EASE }}
                          >
                            <LeadInfoForm values={leadForm} onFieldChange={handleLeadFieldChange} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="calendar"
                            className="bookingModal__calendarRowMain bookingModal__calendarRowMain--calendar"
                            layout
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2, ease: EASE }}
                          >
                            <BookingCalendar
                              visibleMonth={visibleMonth}
                              onVisibleMonthChange={setVisibleMonth}
                              selectedDate={selectedDate}
                              onSelectDate={handleSelectDate}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* popLayout (not "wait"): pops the exiting slot panel
                          out of flow immediately instead of holding its
                          space until its own fade-out finishes, so the
                          form's layout-driven width expansion happens at
                          the same time as the panel fading out, not after
                          it. Only rendered before a slot is picked - once
                          selectedSlot is set the form takes the full row. */}
                      <AnimatePresence mode="popLayout">
                        {selectedDate && !selectedSlot && (
                          <motion.div
                            key={selectedDate.toISOString()}
                            className="bookingModal__timeSlotWrapper--wide"
                            layout
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2, ease: EASE }}
                          >
                            <BookingTimeSlots
                              selectedDate={selectedDate}
                              selectedSlot={selectedSlot}
                              onSelectSlot={setSelectedSlot}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {selectedSlot ? (
                    <div className="bookingModal__formFooter">
                      <div className="bookingModal__formFooterRecap">
                        <span className="bookingModal__selectedDateLabel">Booking</span>
                        <span className="bookingModal__selectedDateValue">
                          {selectedDate.toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                          {" · "}
                          {selectedSlot.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="bookingModal__continueBtn"
                        disabled={!isLeadFormComplete || isSubmitting}
                        onClick={handleBookConsultation}
                      >
                        {isSubmitting ? "Booking..." : "Book Consultation"}
                      </button>
                    </div>
                  ) : (
                    <div className="bookingModal__selectedDate">
                      <span className="bookingModal__selectedDateLabel">Selected Date</span>
                      <span className="bookingModal__selectedDateValue">
                        {selectedDate ? (
                          <>
                            {selectedDate.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                            <span className="bookingModal__selectedDateHint"> · Pick a time below</span>
                          </>
                        ) : (
                          "No date selected yet"
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
