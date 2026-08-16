"use client";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function startOfDay(date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Monday-first grid: JS getDay() is Sunday-first (0-6), so shift it back by
// one and wrap Sunday (0) to the end of the week (6).
function mondayFirstIndex(date) {
  return (date.getDay() + 6) % 7;
}

function buildMonthGrid(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = mondayFirstIndex(firstOfMonth);

  const cells = [];
  for (let i = 0; i < leadingBlanks; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(new Date(year, month, day));
  return cells;
}

/**
 * Pure date-grid UI. Selection and month navigation state live in the
 * parent (BookingModal) so a later booking step can read the chosen date
 * without this component needing to know anything beyond "which month am I
 * showing" and "which date is selected".
 */
export default function BookingCalendar({ visibleMonth, onVisibleMonthChange, selectedDate, onSelectDate }) {
  const today = startOfDay(new Date());
  const cells = buildMonthGrid(visibleMonth);

  const isCurrentMonth = visibleMonth.getFullYear() === today.getFullYear() && visibleMonth.getMonth() === today.getMonth();

  function goToPrevMonth() {
    if (isCurrentMonth) return;
    onVisibleMonthChange(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1));
  }

  function goToNextMonth() {
    onVisibleMonthChange(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1));
  }

  return (
    <div className="bookingModal__calendar">
      <div className="bookingModal__calendarHeader">
        <button
          type="button"
          className="bookingModal__calendarNav"
          onClick={goToPrevMonth}
          disabled={isCurrentMonth}
          aria-label="Previous month"
        >
          <HiOutlineChevronLeft aria-hidden="true" />
        </button>
        <span className="bookingModal__calendarMonth">
          {visibleMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          type="button"
          className="bookingModal__calendarNav"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          <HiOutlineChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="bookingModal__weekdays">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="bookingModal__days">
        {cells.map((date, index) => {
          if (!date) return <span key={`blank-${index}`} className="bookingModal__dayCell bookingModal__dayCell--blank" />;

          const past = date < today;
          const selected = selectedDate && isSameDay(date, selectedDate);
          const isToday = isSameDay(date, today);

          return (
            <button
              key={date.toISOString()}
              type="button"
              className={`bookingModal__dayCell ${selected ? "bookingModal__dayCell--selected" : ""} ${
                isToday ? "bookingModal__dayCell--today" : ""
              }`}
              disabled={past}
              onClick={() => onSelectDate(date)}
              aria-pressed={selected}
              aria-current={isToday ? "date" : undefined}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
