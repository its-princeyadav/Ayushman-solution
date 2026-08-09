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
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { loginUser, registerUser } from "../../lib/api";
import { useToast } from "../Common/Toast/ToastProvider";
import "./AuthModal.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;
const EASE = [0.16, 1, 0.3, 1];

function validateLogin(data) {
  const errors = {};
  if (!data.email?.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.password) errors.password = "Password is required.";
  else if (data.password.length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}

function validateRegister(data) {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Full name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!data.email?.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.phone?.trim() && !PHONE_RE.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!data.password) errors.password = "Password is required.";
  else if (data.password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (!data.confirmPassword) errors.confirmPassword = "Please confirm your password.";
  else if (data.confirmPassword !== data.password) errors.confirmPassword = "Passwords do not match.";
  return errors;
}

function FieldError({ message, id }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.span
          id={id}
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

function FormBanner({ type, message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className={`authModal__banner authModal__banner--${type}`}
          role={type === "error" ? "alert" : "status"}
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.18 }}
        >
          {type === "error" ? (
            <HiOutlineExclamationCircle aria-hidden="true" />
          ) : (
            <HiOutlineCheckCircle aria-hidden="true" />
          )}
          <span>{message}</span>
        </motion.div>
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
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const showToast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = validateLogin(data);
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await loginUser({
        email: data.email.trim(),
        password: data.password,
      });

      setSuccessMessage("You are successfully logged in.");
      showToast("You are successfully logged in.", "success");
      window.setTimeout(() => {
        onClose();
      }, 1200);
    } catch (error) {
      // Backend already returns the same generic message for both a
      // missing email and a wrong password - just surface it as-is.
      setFormError(error.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form className="authModal__form" onSubmit={handleSubmit} noValidate>
      <FormBanner type="error" message={formError} />
      <FormBanner type="success" message={successMessage} />

      <div className="authModal__field">
        <label htmlFor="authModal-login-email">Email Address</label>
        <div className={`authModal__inputWrap ${errors.email ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineMail aria-hidden="true" />
          <input
            id="authModal-login-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "authModal-login-email-error" : undefined}
          />
        </div>
        <FieldError message={errors.email} id="authModal-login-email-error" />
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
          <input
            id="authModal-login-password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "authModal-login-password-error" : undefined}
          />
        </div>
        <FieldError message={errors.password} id="authModal-login-password-error" />
      </div>

      <button type="submit" className="authModal__submit" disabled={submitting || !!successMessage}>
        <span>{submitting ? "Logging In..." : "Login"}</span>
        {!submitting && <HiOutlineArrowRight aria-hidden="true" />}
      </button>

      <p className="authModal__switch">
        Don&apos;t have an account?{" "}
        <button type="button" onClick={onSwitch} disabled={submitting}>
          Create Account
        </button>
      </p>
    </form>
  );
}

function RegisterForm({ onSwitch, onClose }) {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const showToast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = validateRegister(data);
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await registerUser({
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || "",
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      setSuccessMessage("Registration successful! Your account has been created.");
      // Fires now (not after the delay below) so the toast is already on
      // screen and keeps confirming success for its own duration after the
      // modal - which only shows the banner briefly - closes.
      showToast("Registration successful! Your account has been created.", "success");
      window.setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      if (error.status === 409) {
        setErrors({ email: error.message });
      } else {
        setFormError(error.message || "Something went wrong. Please try again.");
      }
      setSubmitting(false);
    }
  };

  return (
    <form className="authModal__form" onSubmit={handleSubmit} noValidate>
      <FormBanner type="error" message={formError} />
      <FormBanner type="success" message={successMessage} />

      <div className="authModal__field">
        <label htmlFor="authModal-register-name">Full Name</label>
        <div className={`authModal__inputWrap ${errors.name ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineUser aria-hidden="true" />
          <input
            id="authModal-register-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "authModal-register-name-error" : undefined}
          />
        </div>
        <FieldError message={errors.name} id="authModal-register-name-error" />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-email">Email Address</label>
        <div className={`authModal__inputWrap ${errors.email ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineMail aria-hidden="true" />
          <input
            id="authModal-register-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "authModal-register-email-error" : undefined}
          />
        </div>
        <FieldError message={errors.email} id="authModal-register-email-error" />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-phone">Phone Number</label>
        <div className={`authModal__inputWrap ${errors.phone ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlinePhone aria-hidden="true" />
          <input
            id="authModal-register-phone"
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            autoComplete="tel"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "authModal-register-phone-error" : undefined}
          />
        </div>
        <FieldError message={errors.phone} id="authModal-register-phone-error" />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-password">Password</label>
        <div className={`authModal__inputWrap ${errors.password ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineLockClosed aria-hidden="true" />
          <input
            id="authModal-register-password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="new-password"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "authModal-register-password-error" : undefined}
          />
        </div>
        <FieldError message={errors.password} id="authModal-register-password-error" />
      </div>

      <div className="authModal__field">
        <label htmlFor="authModal-register-confirm">Confirm Password</label>
        <div className={`authModal__inputWrap ${errors.confirmPassword ? "authModal__inputWrap--error" : ""}`}>
          <HiOutlineLockClosed aria-hidden="true" />
          <input
            id="authModal-register-confirm"
            name="confirmPassword"
            type="password"
            placeholder="********"
            autoComplete="new-password"
            disabled={submitting || !!successMessage}
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={errors.confirmPassword ? "authModal-register-confirm-error" : undefined}
          />
        </div>
        <FieldError message={errors.confirmPassword} id="authModal-register-confirm-error" />
      </div>

      <button type="submit" className="authModal__submit" disabled={submitting || !!successMessage}>
        <span>{submitting ? "Registering..." : "Register"}</span>
        {!submitting && <HiOutlineArrowRight aria-hidden="true" />}
      </button>

      <p className="authModal__switch">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} disabled={submitting}>
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
