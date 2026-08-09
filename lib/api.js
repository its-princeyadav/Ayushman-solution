// Thin fetch wrapper for the existing Node/Express backend
// (backend/src/app.js). No API client existed in the frontend yet, so this
// is the first one - keep future backend calls going through here instead
// of scattering raw fetch() calls with hardcoded URLs.
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

export async function submitContactForm(payload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
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
