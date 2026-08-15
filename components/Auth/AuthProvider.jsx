"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { SessionProvider, signOut as nextAuthSignOut, useSession } from "next-auth/react";

const AuthContext = createContext(null);

// The email/password login endpoint (app/api/auth/login/route.js) only
// confirms success - it issues no session cookie/token - so this is the
// only place that remembers the user is logged in. Good enough for a UI
// indicator, not a real session.
const STORAGE_KEY = "as_auth_user";

function AuthState({ children }) {
  const { data: session } = useSession();
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setLocalUser(JSON.parse(stored));
    } catch {
      // Malformed/blocked storage (private browsing) - stay logged out.
    }
  }, []);

  const login = useCallback((user) => {
    setLocalUser(user);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch {
      // Storage unavailable - state still updates for the current page load.
    }
  }, []);

  const logout = useCallback(() => {
    setLocalUser(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore - nothing to clean up if storage was never written.
    }
    if (session) nextAuthSignOut({ callbackUrl: "/" });
  }, [session]);

  const user =
    localUser || (session?.user ? { name: session.user.name, email: session.user.email } : null);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <AuthState>{children}</AuthState>
    </SessionProvider>
  );
}

// Returns { user, isLoggedIn, login(user), logout() }.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
