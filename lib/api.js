// Thin fetch wrapper for this app's own /api/** route handlers. No API
// client existed in the frontend yet, so this is the first one - keep
// future backend calls going through here instead of scattering raw
// fetch() calls with hardcoded paths.

export async function submitContactForm(payload) {
  const response = await fetch(`/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.fieldErrors = data.errors || null;
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function submitConsultationBooking(payload) {
  const response = await fetch(`/api/consultations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function registerUser(payload) {
  const response = await fetch(`/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function loginUser(payload) {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.status = response.status;
    throw error;
  }

  return data;
}

// Admin session lives in an HttpOnly cookie (lib/adminAuth.js) - same-origin
// now, so the browser sends it automatically on every request.
export async function adminLogin(payload) {
  const response = await fetch(`/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function adminLogout() {
  const response = await fetch(`/api/admin/logout`, {
    method: "POST",
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.status = response.status;
    throw error;
  }

  return data;
}
