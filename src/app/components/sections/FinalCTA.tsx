"use client";

import { motion } from "framer-motion";
import { trackOutboundClick } from "@/lib/analytics";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Trust Signals ───────────────────────────────────────────────────── */
const trustSignals = [
  { icon: "⚡", text: "Fast Response" },
  { icon: "🎯", text: "Export Expertise" },
  { icon: "🌍", text: "Global Shipping Support" },
  { icon: "📦", text: "Bulk Supply Capability" },
];

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      aria-label="Get Your Export Quotation"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)",
      }}
    >
      {/* ── Background pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)',
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ── Radial glows ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 20%, rgba(212,160,23,0.10) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 80%, rgba(27,67,50,0.25) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* ── Top accent ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* ── Pre-label ── */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A017] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A017]" />
              </span>
            </div>
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Start Your Import Order
            </p>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Ready To Import{" "}
            <span className="text-[#D4A017]">Premium Coconut Products?</span>
          </motion.h2>

          {/* ── Subheadline ── */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-green-200/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto"
          >
            Request your customized export quotation today.
          </motion.p>

          {/* ── Trust Signals ── */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {trustSignals.map((signal) => (
              <div
                key={signal.text}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5"
              >
                <span className="text-base" aria-hidden="true">{signal.icon}</span>
                <span className="text-white/70 text-xs font-medium">{signal.text}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Primary CTA ── */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-10"
          >
            <a
              id="final-cta-request-quote"
              data-tracking-id="final-cta-request-quote"
              href="/#request-quote"
              onClick={() =>
                trackOutboundClick({ type: "request_quote", label: "Final CTA Request Quote" })
              }
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#D4A017] text-[#0C1A12] font-bold text-base tracking-[0.06em] uppercase rounded-xl transition-all duration-300 hover:bg-[#E4B42A] hover:shadow-[0_8px_32px_rgba(212,160,23,0.30)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
            >
              <span>Request Quote</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* ── Secondary CTA ── */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.37 }}
            className="mt-4"
          >
            <a
              id="final-cta-chat-whatsapp"
              data-tracking-id="final-cta-chat-whatsapp"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-white/90 transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.05 2.95A9.93 9.93 0 0010 0C5.1 0 1.1 3.1.15 7.5c-.4 1.8-.2 3.7.6 5.3L0 20l7.5-2.1c1.6.8 3.4 1.1 5.5 1.1 4.9 0 9-3.5 10-8.5.5-2.5 0-5.2-1.95-7.55zm-7.05 13c-1.5 0-3-.4-4.3-1.2l-.3-.2-4.35 1.2 1.2-4.2-.2-.3c-.8-1.3-1.2-2.8-1.2-4.3 0-4.2 3.5-7.7 7.8-7.7 2.1 0 4.1.8 5.6 2.3 1.5 1.5 2.3 3.5 2.3 5.6.1 4.3-3.4 7.8-7.65 7.8zm4.3-6.1c-.2-.1-.9-.5-1.1-.5-.2-.1-.4-.1-.5.1-.2.3-.6.5-.7.6-.1.1-.3.2-.5.1-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.1 1.5 2.4 3.8 3.3s2.8.9 3.2.9c.4 0 .9-.2 1.2-.4.3-.3.4-.6.5-.7.1-.2.1-.4 0-.5-.1-.1-.1-.2-.3-.3z" />
              </svg>
              Chat On WhatsApp
            </a>
          </motion.div>

          {/* ── Certification Badges ── */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.44 }}
            className="mt-12 pt-8 border-t border-white/8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <span className="text-[9px] uppercase tracking-widest text-white/25 font-semibold">
              Certified
            </span>
            {["ISO 22000", "HACCP", "APEDA", "SGS Verified"].map((cert) => (
              <span
                key={cert}
                className="text-[10px] font-bold text-white/50 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.04]"
              >
                {cert}
              </span>
            ))}
          </motion.div>

          {/* ── Stats Bar ── */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.5 }}
            className="mt-8 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-xl overflow-hidden border border-white/8"
          >
            {[
              { value: "15+", label: "Countries Served" },
              { value: "500+", label: "Containers Exported" },
              { value: "10+", label: "Years Exporting" },
              { value: "24h", label: "Response Guarantee" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.03]"
              >
                <span className="text-2xl font-bold text-[#D4A017] leading-none">
                  {s.value}
                </span>
                <span className="text-white/35 text-[9px] uppercase tracking-widest mt-1.5 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
