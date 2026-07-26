"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineX,
  HiOutlineArrowRight,
} from "react-icons/hi";
import "./AuthModal.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EASE = [0.16, 1, 0.3, 1];

function validateLogin(data) {
  const errors = {};
  if (!data.email?.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.password) errors.password = "Password is required.";
  return errors;
}

function validateRegister(data) {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Full name is required.";
  if (!data.email?.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.password) errors.password = "Password is required.";
  else if (data.password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (data.confirmPassword !== data.password) errors.confirmPassword = "Passwords do not match.";
  return errors;
}

function FieldError({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.span
          className="authModal__error"
          role="alert"
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 6 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.18 }}
        >
          {message}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

function GoogleButton() {
  return (
    <button type="button" className="authModal__google" onClick={() => signIn("google", { callbackUrl: "/" })}>
      <FcGoogle aria-hidden="true" />
      Continue With Google
    </button>
  );
}

function Divider() {
  return (
    <div className="authModal__divider">
      <span>OR</span>
    </div>
  );
}

function LoginForm({ onSwitch, onClose }) {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = validateLogin(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <form className="authModal__form" onSubmit={handleSubmit} noValidate>
      <div className="authModal__field">
        <label htmlFor="authModal-login-email">Email Address</label>
        <div className={`authModal__inputWrap ${errors.email ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineMail aria-hidden="true" />
          <input id="authModal-login-email" name="email" type="email" placeholder="you@example.com" />
        </div>
        <FieldError message={errors.email} />
      </div>

      <div className="authModal__field">
        <div className="authModal__labelRow">
          <label htmlFor="authModal-login-password">Password</label>
          <a href="#" className="authModal__forgot">
            Forgot Password?
          </a>
        </div>
        <div className={`authModal__inputWrap ${errors.password ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineLockClosed aria-hidden="true" />
          <input id="authModal-login-password" name="password" type="password" placeholder="********" />
        </div>
        <FieldError message={errors.password} />
      </div>

      <button type="submit" className="authModal__submit" disabled={submitting}>
        <span>{submitting ? "Logging In..." : "Login"}</span>
        {!submitting && <HiOutlineArrowRight aria-hidden="true" />}
      </button>

      <p className="authModal__switch">
        Don&apos;t have an account?{" "}
        <button type="button" onClick={onSwitch}>
          Create Account
        </button>
      </p>
    </form>
  );
}

function RegisterForm({ onSwitch, onClose }) {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = validateRegister(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <form className="authModal__form" onSubmit={handleSubmit} noValidate>
      <div className="authModal__field">
        <label htmlFor="authModal-register-name">Full Name</label>
        <div className={`authModal__inputWrap ${errors.name ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineUser aria-hidden="true" />
          <input id="authModal-register-name" name="name" type="text" placeholder="Your name" />
        </div>
        <FieldError message={errors.name} />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-email">Email Address</label>
        <div className={`authModal__inputWrap ${errors.email ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineMail aria-hidden="true" />
          <input id="authModal-register-email" name="email" type="email" placeholder="you@example.com" />
        </div>
        <FieldError message={errors.email} />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-phone">Phone Number</label>
        <div className="authModal__inputWrap">
          <HiOutlinePhone aria-hidden="true" />
          <input id="authModal-register-phone" name="phone" type="tel" placeholder="+91 00000 00000" />
        </div>
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-password">Password</label>
        <div className={`authModal__inputWrap ${errors.password ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineLockClosed aria-hidden="true" />
          <input id="authModal-register-password" name="password" type="password" placeholder="********" />
        </div>
        <FieldError message={errors.password} />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-confirm">Confirm Password</label>
        <div className={`authModal__inputWrap ${errors.confirmPassword ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineLockClosed aria-hidden="true" />
          <input id="authModal-register-confirm" name="confirmPassword" type="password" placeholder="********" />
        </div>
        <FieldError message={errors.confirmPassword} />
      </div>

      <button type="submit" className="authModal__submit" disabled={submitting}>
        <span>{submitting ? "Creating Account..." : "Create Account"}</span>
        {!submitting && <HiOutlineArrowRight aria-hidden="true" />}
      </button>

      <p className="authModal__switch">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch}>
          Login
        </button>
      </p>
    </form>
  );
}

export default function AuthModal({ isOpen, onClose, defaultMode = "login" }) {
  const [mode, setMode] = useState(defaultMode);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) setMode(defaultMode);
  }, [isOpen, defaultMode]);

  // Focus trap + ESC-to-close + scroll lock, active only while open. Query
  // focusables live inside the handler (not cached) so it stays correct
  // across the login/register form swap without needing to re-bind.
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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="auth-modal-backdrop"
          className="authModal__backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            key="auth-modal-card"
            className="authModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="authModalTitle"
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <header className="authModal__header">
              <Image
                src="/assets/images/Latets-Logo.png"
                alt=""
                width={110}
                height={26}
                className="authModal__logo"
              />
              <h2 id="authModalTitle" className="authModal__title">
                {mode === "login" ? "Login" : "Register"}
              </h2>
              <button type="button" className="authModal__close" onClick={onClose} aria-label="Close dialog">
                <HiOutlineX aria-hidden="true" />
              </button>
            </header>

            <div className="authModal__body">
              <div className="authModal__tabs" role="tablist">
                <motion.span
                  className="authModal__tabIndicator"
                  animate={{ x: mode === "login" ? "0%" : "100%" }}
                  transition={{ duration: 0.28, ease: EASE }}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === "login"}
                  className={`authModal__tab ${mode === "login" ? "authModal__tab--active" : ""}`}
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === "register"}
                  className={`authModal__tab ${mode === "register" ? "authModal__tab--active" : ""}`}
                  onClick={() => setMode("register")}
                >
                  Register
                </button>
              </div>

              <GoogleButton />
              <Divider />

              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, x: mode === "login" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: mode === "login" ? 10 : -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {mode === "login" ? (
                    <LoginForm onSwitch={() => setMode("register")} onClose={onClose} />
                  ) : (
                    <RegisterForm onSwitch={() => setMode("login")} onClose={onClose} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
