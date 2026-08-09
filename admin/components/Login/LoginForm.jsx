"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LuMail, LuLock, LuEye, LuEyeOff } from "react-icons/lu";
import TextField from "../UI/TextField";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import { adminLogin } from "../../../lib/api";
import styles from "./LoginForm.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = {};
    if (!data.email?.trim()) nextErrors.email = "Email is required.";
    else if (!EMAIL_RE.test(data.email)) nextErrors.email = "Enter a valid email address.";
    if (!data.password) nextErrors.password = "Password is required.";

    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await adminLogin({
        email: data.email.trim(),
        password: data.password,
        remember: data.remember === "on",
      });

      setSuccessMessage("Admin login successful.");
      router.push("/admin/dashboard");
    } catch (error) {
      // Backend already returns the same generic message whether the email
      // or the password was wrong - just surface it as-is.
      setFormError(error.message || "Unable to connect to server. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {formError && (
        <p className={styles.banner} role="alert">
          {formError}
        </p>
      )}
      {successMessage && (
        <p className={`${styles.banner} ${styles.bannerSuccess}`} role="status">
          {successMessage}
        </p>
      )}

      <TextField
        id="admin-email"
        name="email"
        type="email"
        label="Email address"
        icon={LuMail}
        autoComplete="username"
        required
        disabled={submitting || !!successMessage}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "admin-email-error" : undefined}
      />
      {errors.email && (
        <p id="admin-email-error" className={styles.fieldError} role="alert">
          {errors.email}
        </p>
      )}

      <TextField
        id="admin-password"
        name="password"
        type={showPassword ? "text" : "password"}
        label="Password"
        icon={LuLock}
        autoComplete="current-password"
        required
        disabled={submitting || !!successMessage}
        aria-invalid={!!errors.password}
        aria-describedby={errors.password ? "admin-password-error" : undefined}
        endAdornment={
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <LuEyeOff aria-hidden="true" /> : <LuEye aria-hidden="true" />}
          </button>
        }
      />
      {errors.password && (
        <p id="admin-password-error" className={styles.fieldError} role="alert">
          {errors.password}
        </p>
      )}

      <div className={styles.row}>
        <Checkbox id="admin-remember" name="remember" label="Remember me" disabled={submitting} />
        <a href="#" className={styles.forgot}>
          Forgot password?
        </a>
      </div>

      <Button type="submit" disabled={submitting || !!successMessage}>
        {submitting ? "Logging In..." : "Log In"}
      </Button>
    </form>
  );
}
