export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;

export function isValidRegisterInput({ name, email, phone, password, confirmPassword }) {
  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) return false;
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) return false;
  if (phone && (typeof phone !== "string" || !PHONE_RE.test(phone.trim()))) return false;
  if (typeof password !== "string" || password.length < 8) return false;
  if (password !== confirmPassword) return false;
  return true;
}

export function isValidLoginInput({ email, password }) {
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) return false;
  if (typeof password !== "string" || !password) return false;
  return true;
}
