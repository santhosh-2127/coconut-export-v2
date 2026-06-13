"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Consent state ────────────────────────────── */
type ConsentStatus = "pending" | "accepted" | "declined";

const CONSENT_KEY = "gce_analytics_consent";

function getStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted") return "accepted";
  if (stored === "declined") return "declined";
  return "pending";
}

function setStoredConsent(status: ConsentStatus): void {
  localStorage.setItem(CONSENT_KEY, status);
}

/* ─── Component ────────────────────────────────── */
export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>("pending");

  useEffect(() => {
    setConsent(getStoredConsent());
  }, []);

  const handleAccept = () => {
    setStoredConsent("accepted");
    setConsent("accepted");
  };

  const handleDecline = () => {
    setStoredConsent("declined");
    setConsent("declined");
  };

  return (
    <AnimatePresence>
      {consent === "pending" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="max-w-7xl mx-auto">
            <div
              className="relative rounded-2xl border border-white/10 shadow-2xl p-5 md:p-6"
              style={{
                background:
                  "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 50%, #102a1e 100%)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #D4A017 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Text */}
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold mb-1">
                    🍪 We value your privacy
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed max-w-2xl">
                    We use cookies and analytics tools (Google Analytics 4 &amp;
                    Microsoft Clarity) to understand how visitors interact with
                    our site, measure conversion performance, and improve your
                    experience. Analytics data is anonymized and never shared
                    with third parties for marketing.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2.5 text-xs font-semibold text-white/60 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2.5 text-xs font-bold text-[#0C1A12] rounded-xl transition-all duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d2d1f]"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4A017 0%, #e6b420 100%)",
                    }}
                  >
                    Accept All
                  </button>
                </div>
              </div>

              {/* Bottom link */}
              <div className="mt-3">
                <a
                  href="#"
                  className="text-[10px] text-white/25 hover:text-white/50 transition-colors underline underline-offset-2"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
