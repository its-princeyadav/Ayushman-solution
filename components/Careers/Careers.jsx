"use client";

import { useState } from "react";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
  FaLaptopCode,
  FaGlobeAsia,
  FaBalanceScale,
  FaMapMarkerAlt,
  FaPaperclip,
  FaCheckCircle,
} from "react-icons/fa";
import { HERO, INTRO, CULTURE, BENEFITS, JOBS } from "../../data/careers";
import "./Careers.css";

const ICONS = {
  growth: FaGraduationCap,
  health: FaHeartbeat,
  team: FaUsers,
  tech: FaLaptopCode,
  global: FaGlobeAsia,
  balance: FaBalanceScale,
};

export default function Careers() {
  const [selectedJobId, setSelectedJobId] = useState("");

  const scrollToApply = (jobId) => {
    setSelectedJobId(jobId);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="careers-hero">
        <img src={HERO.image} alt={HERO.alt} className="careers-hero__image" />
        <div className="careers-hero__overlay">
          <span className="careers-hero__eyebrow">{HERO.eyebrow}</span>
          <h1 className="careers-hero__heading">{HERO.heading}</h1>
          <p className="careers-hero__subheading">{HERO.subheading}</p>
          <a href="#open-positions" className="careers-hero__cta">
            View Open Positions
          </a>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="careers-intro">
        <div className="careers-intro__inner">
          <h2 className="careers-intro__heading">{INTRO.heading}</h2>
          {INTRO.paragraphs.map((paragraph, index) => (
            <p className="careers-intro__paragraph" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ---------- Culture (image + points) ---------- */}
      <section className="careers-culture">
        <div className="careers-culture__image-wrap">
          <img src={CULTURE.image} alt={CULTURE.alt} className="careers-culture__image" />
        </div>
        <div className="careers-culture__content">
          <h2 className="careers-culture__heading">{CULTURE.heading}</h2>
          <ul className="careers-culture__list">
            {CULTURE.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Benefits grid ---------- */}
      <section className="careers-benefits">
        <div className="careers-section-head">
          <h2>Why Work With Us</h2>
          <p>What you actually get, not just what we say in interviews.</p>
        </div>
        <div className="careers-benefits__grid">
          {BENEFITS.map((benefit) => {
            const Icon = ICONS[benefit.icon];
            return (
              <div className="careers-benefit" key={benefit.title}>
                <span className="careers-benefit__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="careers-benefit__title">{benefit.title}</h3>
                <p className="careers-benefit__description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Open Positions ---------- */}
      <section className="careers-positions" id="open-positions">
        <div className="careers-section-head">
          <h2>Open Positions</h2>
          <p>Don't see the right fit? Apply anyway - we review general applications too.</p>
        </div>
        <div className="careers-positions__list">
          {JOBS.map((job) => (
            <div className="careers-job" key={job.id}>
              <div className="careers-job__main">
                <h3 className="careers-job__title">{job.title}</h3>
                <p className="careers-job__description">{job.description}</p>
                <div className="careers-job__meta">
                  <span>{job.department}</span>
                  <span>
                    <FaMapMarkerAlt aria-hidden="true" /> {job.location}
                  </span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button type="button" className="careers-job__apply" onClick={() => scrollToApply(job.id)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Application form ---------- */}
      <ApplicationForm selectedJobId={selectedJobId} onSelectJob={setSelectedJobId} />
    </>
  );
}

function ApplicationForm({ selectedJobId, onSelectJob }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const [resumeName, setResumeName] = useState("");

  // ponytail: client-side only - there's no backend/ATS integration in this
  // project yet (confirmed: no working form anywhere reuses one). Validates
  // and shows a real success state so the UX is complete, but wire this up
  // to an actual submission endpoint (email API route, ATS webhook, etc.)
  // before relying on it to receive real applications.
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const nextErrors = {};
    if (!data.name?.trim()) nextErrors.name = "Name is required.";
    if (!data.email?.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.position) nextErrors.position = "Please select a position.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
      setResumeName("");
    }, 600);
  };

  if (status === "success") {
    return (
      <section className="careers-apply" id="apply">
        <div className="careers-apply__success">
          <FaCheckCircle aria-hidden="true" />
          <h2>Application received</h2>
          <p>Thanks for reaching out - our team will review your application and get back to you.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="careers-apply" id="apply">
      <div className="careers-section-head">
        <h2>Apply Now</h2>
        <p>Tell us a bit about yourself and we'll take it from there.</p>
      </div>

      <form className="careers-apply__form" onSubmit={handleSubmit} noValidate>
        <div className="careers-apply__row">
          <div className="careers-apply__field">
            <label htmlFor="careers-name">Full Name *</label>
            <input id="careers-name" name="name" type="text" placeholder="Your name" />
            {errors.name && <span className="careers-apply__error">{errors.name}</span>}
          </div>
          <div className="careers-apply__field">
            <label htmlFor="careers-email">Email *</label>
            <input id="careers-email" name="email" type="email" placeholder="you@example.com" />
            {errors.email && <span className="careers-apply__error">{errors.email}</span>}
          </div>
        </div>

        <div className="careers-apply__row">
          <div className="careers-apply__field">
            <label htmlFor="careers-phone">Phone</label>
            <input id="careers-phone" name="phone" type="tel" placeholder="+91 00000 00000" />
          </div>
          <div className="careers-apply__field">
            <label htmlFor="careers-position">Position *</label>
            <select
              id="careers-position"
              name="position"
              value={selectedJobId}
              onChange={(event) => onSelectJob(event.target.value)}
            >
              <option value="">Select a position</option>
              {JOBS.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
              <option value="general">General Application</option>
            </select>
            {errors.position && <span className="careers-apply__error">{errors.position}</span>}
          </div>
        </div>

        <div className="careers-apply__field">
          <label htmlFor="careers-resume" className="careers-apply__file">
            <FaPaperclip aria-hidden="true" />
            {resumeName || "Attach resume (PDF or Word)"}
          </label>
          <input
            id="careers-resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="careers-apply__file-input"
            onChange={(event) => setResumeName(event.target.files?.[0]?.name || "")}
          />
        </div>

        <div className="careers-apply__field">
          <label htmlFor="careers-message">Message</label>
          <textarea id="careers-message" name="message" rows={4} placeholder="Anything you'd like us to know" />
        </div>

        <button type="submit" className="careers-apply__submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </section>
  );
}
