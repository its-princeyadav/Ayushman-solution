"use client";

const SLOT_START_HOUR = 9;
const SLOT_END_HOUR = 17.5; // last slot starts 5:30 PM, matching the "30 Minute Consultation" copy
const SLOT_INTERVAL_MINUTES = 30;

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isSameSlot(a, b) {
  return a.getTime() === b.getTime();
}

// No booking backend exists yet, so this is a fixed mock schedule rather
// than fetched availability - a real slots endpoint can replace this
// function later without the surrounding component changing.
function buildSlotsForDate(date) {
  const now = new Date();
  const isToday = isSameDay(date, now);

  const slots = [];
  for (let minutes = SLOT_START_HOUR * 60; minutes <= SLOT_END_HOUR * 60; minutes += SLOT_INTERVAL_MINUTES) {
    // Date constructor rolls minutes >59 over into hours for us, so passing
    // hour 0 + the raw minute count is simpler than computing hour/minute
    // separately.
    const time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, minutes);
    slots.push({ time, disabled: isToday && time <= now });
  }
  return slots;
}

/**
 * Pure time-slot grid for a single date. Mirrors BookingCalendar.jsx:
 * selection state lives in the parent (BookingModal), this component only
 * renders what it's given.
 */
export default function BookingTimeSlots({ selectedDate, selectedSlot, onSelectSlot }) {
  const slots = buildSlotsForDate(selectedDate);

  return (
    <div className="bookingModal__timeSlotColumn">
      <span className="bookingModal__timeSlotHeading">
        Times for {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
      </span>
      <div className="bookingModal__slotGrid">
        {slots.map(({ time, disabled }) => {
          const selected = selectedSlot && isSameSlot(time, selectedSlot);
          return (
            <button
              key={time.toISOString()}
              type="button"
              className={`bookingModal__slotCell ${selected ? "bookingModal__slotCell--selected" : ""}`}
              disabled={disabled}
              onClick={() => onSelectSlot(time)}
              aria-pressed={selected}
            >
              {time.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </button>
          );
        })}
      </div>
    </div>
  );
}
