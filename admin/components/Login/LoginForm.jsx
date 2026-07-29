"use client";

import { useState } from "react";
import { LuMail, LuLock, LuEye, LuEyeOff } from "react-icons/lu";
import TextField from "../UI/TextField";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // UI-only phase - no auth/API wiring yet.
    console.log("[admin] login submit (placeholder, no backend wired up yet)");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextField id="admin-email" type="email" label="Email address" icon={LuMail} autoComplete="username" required />

      <TextField
        id="admin-password"
        type={showPassword ? "text" : "password"}
        label="Password"
        icon={LuLock}
        autoComplete="current-password"
        required
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

      <div className={styles.row}>
        <Checkbox id="admin-remember" name="remember" label="Remember me" />
        <a href="#" className={styles.forgot}>
          Forgot password?
        </a>
      </div>

      <Button type="submit">Log In</Button>
    </form>
  );
}
