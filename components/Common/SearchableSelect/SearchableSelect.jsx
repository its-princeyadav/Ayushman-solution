"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./SearchableSelect.css";

/**
 * Standalone searchable combobox - not tied to any particular form. The
 * input itself is both the trigger and the filter box (a real combobox,
 * not a button that opens a list of individually-tabbable option buttons -
 * that would make Tab walk through every option one at a time instead of
 * skipping past the widget).
 */
export default function SearchableSelect({ id, label, placeholder, options, value, onChange, required = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const reactId = useId();
  const listboxId = `${id || reactId}-listbox`;

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!isOpen) return undefined;

    function onClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  function openPanel() {
    setIsOpen(true);
    setQuery("");
    setActiveIndex(-1);
  }

  function selectOption(option) {
    onChange(option);
    setIsOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) {
        openPanel();
        return;
      }
      setActiveIndex((index) => Math.min(index + 1, filteredOptions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (isOpen) setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      if (isOpen && activeIndex >= 0 && filteredOptions[activeIndex]) {
        event.preventDefault();
        selectOption(filteredOptions[activeIndex]);
      }
    } else if (event.key === "Escape") {
      if (isOpen) {
        // Close just the popup - stop this from also reaching the modal's
        // own document-level Escape handler, which would otherwise close
        // the whole modal on the first press.
        event.stopPropagation();
        setIsOpen(false);
      }
    }
  }

  const activeOptionId = activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined;

  return (
    <div className="searchableSelect" ref={wrapperRef}>
      {label && (
        <label className="searchableSelect__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="searchableSelect__inputWrap">
        <input
          id={id}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={activeOptionId}
          autoComplete="off"
          required={required}
          className="searchableSelect__input"
          placeholder={placeholder}
          value={isOpen ? query : value}
          onFocus={openPanel}
          onClick={openPanel}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDown}
        />
        <HiOutlineChevronDown aria-hidden="true" className={`searchableSelect__chevron ${isOpen ? "searchableSelect__chevron--open" : ""}`} />
      </div>

      {isOpen && (
        <ul className="searchableSelect__panel" role="listbox" id={listboxId}>
          {filteredOptions.length === 0 && <li className="searchableSelect__empty">No matches</li>}
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={`searchableSelect__option ${index === activeIndex ? "searchableSelect__option--active" : ""}`}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => selectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
