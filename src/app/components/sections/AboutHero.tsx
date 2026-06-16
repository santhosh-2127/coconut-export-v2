"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Animation variants ──────────────────────────────────────────────── */
const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

/* ─── Trust indicators ────────────────────────────────────────────────── */
const trustIndicators = [
  { label: "Export Ready" },
  { label: "Quality Assured" },
  { label: "Global Supply Network" },
  { label: "Commercial Scale Support" },
];

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-label="About — Building Global Supply Relationships"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1A12]"
    >
      {/* ═══════════════════════════════════════════════════════════════
         BACKGROUND: single responsive farm sourcing image
         ═══════════════════════════════════════════════════════════════ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Farm partner network background image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/storytelling/Farm Sourcing2-image.png"
            alt="Coconut farm partner network — agricultural sourcing and export operations in Tamil Nadu"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Deep green branded overlay for text readability */}
        <div className="absolute inset-0 bg-[#0C1A12]/70" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold radial glow — top-right */}
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />
        {/* Green radial glow — bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.30] blur-[140px]" />
        {/* Warm amber accent — right */}
        <div className="absolute top-[30%] right-[-20%] w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />
        {/* Gold bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 md:py-0 flex items-center">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="max-w-[680px]"
          >
            {/* ── Premium Badge ── */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="block w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                Export Partner
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" />
            </motion.div>

            {/* ── Heading — company introduction ── */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold"
            >
              <span className="block max-w-4xl">About</span>
              <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[#D4A017] mt-1">
                Global Coco Exports
              </span>
            </motion.h1>

            {/* ── Description ── */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[620px] font-medium"
            >
              Global Coco Exports is a trusted Indian supplier of premium coconut products, supporting importers, distributors, and industrial buyers with reliable sourcing, quality assurance, and export-ready operations.
            </motion.p>

            {/* ── Trust indicator pills ── */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap gap-2"
            >
              {trustIndicators.map((indicator) => (
                <span
                  key={indicator.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                >
                  <span className="text-[#D4A017] text-xs">✓</span>
                  {indicator.label}
                </span>
              ))}
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                id="about-hero-request-quote"
                data-tracking-id="about-hero-request-quote"
                href="/#request-quote"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
              >
                <span className="relative z-10">Request Export Quotation</span>
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
                href="#who-we-are"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Contact Export Team
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
