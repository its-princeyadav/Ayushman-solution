"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import "./Toast.css";

const ToastContext = createContext(null);
const DEFAULT_DURATION = 4000;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef(0);

  useEffect(() => setMounted(true), []);

  const dismissToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "success", duration = DEFAULT_DURATION) => {
      const id = ++idRef.current;
      setToasts((current) => [...current, { id, message, type }]);
      window.setTimeout(() => dismissToast(id), duration);
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {mounted &&
        createPortal(
          <div className="toastStack" role="region" aria-live="polite" aria-label="Notifications">
            <AnimatePresence>
              {toasts.map((toast) => (
                <motion.div
                  key={toast.id}
                  className={`toast toast--${toast.type}`}
                  role="status"
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  {toast.type === "error" ? (
                    <HiOutlineExclamationCircle aria-hidden="true" />
                  ) : (
                    <HiOutlineCheckCircle aria-hidden="true" />
                  )}
                  <span>{toast.message}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

// Returns a showToast(message, type = "success" | "error", duration?) function.
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
