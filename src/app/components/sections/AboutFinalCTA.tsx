"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp, parseStatValue } from "@/lib/countUp";

/* ─── Animated CTA stat item ──────────────────────────────────────────── */
function AnimatedCTAStatItem({
  value,
  label,
  index,
  isVisible,
}: {
  value: string;
  label: string;
  index: number;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1600 + index * 100, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay: 0.6 + index * 0.07,
        ease: "backOut",
      }}
      className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
    >
      <span className="text-2xl font-bold text-[#D4A017] leading-none" aria-label={`${value} ${label}`}>
        {isVisible ? counted : 0}
        <span className="text-[#D4A017]">{suffix}</span>
      </span>
      <span className="text-white/35 text-[9px] uppercase tracking-widest mt-1 text-center">
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutFinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about-cta"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)",
      }}
      aria-label="Let's Discuss Your Sourcing Requirements"
    >
      {/* ── Background dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)',
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ── Top border accent ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4A017 30%, #f5c842 50%, #D4A017 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Radial glows ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(212,160,23,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 80%, rgba(27,67,50,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* ── Pre-label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
            Start Your Partnership
          </span>
          <span className="block w-8 h-px bg-[#D4A017]/50" />
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-[1.12] tracking-[-0.02em]"
        >
          Ready To Import{" "}
          <br />
          <span className="text-[#D4A017]">Premium Coconut Products?</span>
        </motion.h2>

        {/* ── Sub copy ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Request your customized export quotation today.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            id="about-cta-request-quote"
            data-tracking-id="about-cta-request-quote"
            href="/#request-quote"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          >
            <span className="relative z-10">Request Quote</span>
            <svg
              aria-hidden="true"
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            id="about-cta-chat-whatsapp"
            data-tracking-id="about-cta-chat-whatsapp"
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.05 2.95A9.93 9.93 0 0010 0C5.1 0 1.1 3.1.15 7.5c-.4 1.8-.2 3.7.6 5.3L0 20l7.5-2.1c1.6.8 3.4 1.1 5.5 1.1 4.9 0 9-3.5 10-8.5.5-2.5 0-5.2-1.95-7.55zm-7.05 13c-1.5 0-3-.4-4.3-1.2l-.3-.2-4.35 1.2 1.2-4.2-.2-.3c-.8-1.3-1.2-2.8-1.2-4.3 0-4.2 3.5-7.7 7.8-7.7 2.1 0 4.1.8 5.6 2.3 1.5 1.5 2.3 3.5 2.3 5.6.1 4.3-3.4 7.8-7.65 7.8zm4.3-6.1c-.2-.1-.9-.5-1.1-.5-.2-.1-.4-.1-.5.1-.2.3-.6.5-.7.6-.1.1-.3.2-.5.1-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.1 1.5 2.4 3.8 3.3s2.8.9 3.2.9c.4 0 .9-.2 1.2-.4.3-.3.4-.6.5-.7.1-.2.1-.4 0-.5-.1-.1-.1-.2-.3-.3z" />
            </svg>
            Chat On WhatsApp
          </a>
        </motion.div>

        {/* ── Bottom stats (animated) ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8 max-w-3xl mx-auto"
        >
          {[
            { value: "15+", label: "Countries Served" },
            { value: "500+", label: "Containers Exported" },
            { value: "10+", label: "Years of Exporting" },
            { value: "24h", label: "Response Guarantee" },
          ].map((s, i) => (
            <AnimatedCTAStatItem
              key={s.label}
              value={s.value}
              label={s.label}
              index={i}
              isVisible={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
