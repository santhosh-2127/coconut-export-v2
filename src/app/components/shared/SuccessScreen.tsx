"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────────
   SuccessScreen — Reusable frontend-only success state
   Use after form submission to show confirmation without backend.
────────────────────────────────────────────────────────────────────────── */

interface CTAAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SuccessScreenProps {
  title: string;
  message: string;
  subtitle?: string;
  responseTime?: string;
  showTrust?: boolean;
  showWhatsApp?: boolean;
  showHome?: boolean;
  primaryCta?: CTAAction;
  secondaryCta?: CTAAction;
  onReset?: () => void;
}

const TRUST_INDICATORS = [
  { icon: "⏱", label: "Response Within 24 Hours" },
  { icon: "🎯", label: "Export Specialists" },
  { icon: "🌍", label: "Global Shipping Support" },
  { icon: "📦", label: "Commercial Scale Supply" },
];

export default function SuccessScreen({
  title,
  message,
  subtitle,
  showTrust = true,
  showWhatsApp = true,
  showHome = true,
  primaryCta,
  secondaryCta,
  onReset,
}: SuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-12 px-6"
    >
      {/* ── Animated checkmark ── */}
      <div className="relative mb-6" aria-hidden="true">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <motion.circle
            cx="36"
            cy="36"
            r="32"
            fill="none"
            stroke="#1B4332"
            strokeWidth="2"
            strokeDasharray="201"
            initial={{ strokeDashoffset: 201 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.path
            d="M22 37l10 10 18-20"
            fill="none"
            stroke="#D4A017"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </svg>
      </div>

      {/* ── Subtitle badge ── */}
      {subtitle && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] text-[10px] font-semibold uppercase tracking-wider mb-4">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
            <path d="M1 4l2.5 2.5L9 1" stroke="#1B4332" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {subtitle}
        </span>
      )}

      {/* ── Title ── */}
      <h3 className="text-xl font-bold text-[#111827] mb-3">{title}</h3>

      {/* ── Message ── */}
      <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
        {message}
      </p>

      {/* ── Trust indicators ── */}
      {showTrust && (
        <div className="w-full max-w-md mb-8">
          <div className="grid grid-cols-2 gap-2">
            {TRUST_INDICATORS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[#FAFAFA] border border-gray-100"
              >
                <span className="text-base flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-[11px] font-semibold text-[#111827] leading-tight text-left">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Action buttons ── */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {primaryCta && primaryCta.href && (
          <Link
            href={primaryCta.href}
            data-tracking-id="success-return-home"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold rounded-xl hover:bg-[#143a28] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#1B4332]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {primaryCta.label}
          </Link>
        )}          {secondaryCta && secondaryCta.href && (
          <a
            href={secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            data-tracking-id="success-chat-whatsapp"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1B4332]/20 text-[#1B4332] text-sm font-semibold rounded-xl hover:bg-[#1B4332]/5 hover:border-[#1B4332]/35 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.05 2.95A9.93 9.93 0 0010 0C5.1 0 1.1 3.1.15 7.5c-.4 1.8-.2 3.7.6 5.3L0 20l7.5-2.1c1.6.8 3.4 1.1 5.5 1.1 4.9 0 9-3.5 10-8.5.5-2.5 0-5.2-1.95-7.55zm-7.05 13c-1.5 0-3-.4-4.3-1.2l-.3-.2-4.35 1.2 1.2-4.2-.2-.3c-.8-1.3-1.2-2.8-1.2-4.3 0-4.2 3.5-7.7 7.8-7.7 2.1 0 4.1.8 5.6 2.3 1.5 1.5 2.3 3.5 2.3 5.6.1 4.3-3.4 7.8-7.65 7.8zm4.3-6.1c-.2-.1-.9-.5-1.1-.5-.2-.1-.4-.1-.5.1-.2.3-.6.5-.7.6-.1.1-.3.2-.5.1-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.1 1.5 2.4 3.8 3.3s2.8.9 3.2.9c.4 0 .9-.2 1.2-.4.3-.3.4-.6.5-.7.1-.2.1-.4 0-.5-.1-.1-.1-.2-.3-.3z" />
            </svg>
            {secondaryCta.label}
          </a>
        )}          {secondaryCta && secondaryCta.onClick && (
          <button
            onClick={secondaryCta.onClick}
            data-tracking-id="success-secondary-action"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1B4332]/20 text-[#1B4332] text-sm font-semibold rounded-xl hover:bg-[#1B4332]/5 hover:border-[#1B4332]/35 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2"
          >
            {secondaryCta.label}
          </button>
        )}

        {onReset && (
          <button
            onClick={onReset}
            className="text-sm text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
          >
            Submit Another Inquiry
          </button>
        )}
      </div>
    </motion.div>
  );
}
