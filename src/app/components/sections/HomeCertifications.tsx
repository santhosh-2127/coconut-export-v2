"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Trust highlights ────────────────────────────────────────────────── */
const trustHighlights = [
  "Food Safety Standards",
  "Quality-Controlled Processes",
  "Export-Ready Operations",
  "International Trade Compliance",
];

/* ─── ISO Shield SVG — inline, no external dependency ────────────────── */
function ISOBadge() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Shield outer glow */}
      <defs>
        <radialGradient id="shieldGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D4A017" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4332" />
          <stop offset="100%" stopColor="#0C1A12" />
        </linearGradient>
        <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="#D4A017" />
        </linearGradient>
      </defs>

      {/* Glow circle behind shield */}
      <ellipse cx="80" cy="85" rx="72" ry="80" fill="url(#shieldGlow)" />

      {/* Shield body */}
      <path
        d="M80 8 L148 36 L148 90 C148 130 114 160 80 172 C46 160 12 130 12 90 L12 36 Z"
        fill="url(#shieldGrad)"
        stroke="url(#rimGrad)"
        strokeWidth="2.5"
      />

      {/* Inner shield ring */}
      <path
        d="M80 22 L136 46 L136 90 C136 124 108 150 80 160 C52 150 24 124 24 90 L24 46 Z"
        fill="none"
        stroke="#D4A017"
        strokeWidth="1"
        strokeOpacity="0.25"
      />

      {/* Checkmark */}
      <path
        d="M50 90 L70 112 L112 68"
        stroke="#D4A017"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ISO text */}
      <text
        x="80"
        y="135"
        textAnchor="middle"
        fill="#D4A017"
        fontSize="13"
        fontWeight="800"
        letterSpacing="3"
        fontFamily="system-ui, sans-serif"
      >
        ISO 22000
      </text>
    </svg>
  );
}

/* ─── Component ───────────────────────────────────────────────────────── */
export default function HomeCertifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="certifications-preview"
      ref={ref}
      aria-label="Certifications & Compliance"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #0a1f16 0%, #0d2d1f 40%, #0C1A12 80%, #060f0a 100%)",
      }}
    >
      {/* ── Top separator ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.3) 35%, rgba(245,200,66,0.45) 50%, rgba(212,160,23,0.3) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Background glows ── */}
      <div
        className="pointer-events-none absolute -top-32 right-[-8%] w-[500px] h-[500px] rounded-full blur-[130px]"
        style={{ background: "rgba(212,160,23,0.055)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-5%] w-[400px] h-[350px] rounded-full blur-[100px]"
        style={{ background: "rgba(27,67,50,0.28)" }}
        aria-hidden="true"
      />

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,160,23,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-16 lg:py-20">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4A017]" aria-hidden="true" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Trust & Compliance
            </p>
            <span className="w-8 h-px bg-[#D4A017]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Certifications &{" "}
            <span className="text-[#D4A017]">Compliance</span>
          </h2>
          <p className="mt-3 text-white/50 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Committed to quality, compliance, and export-ready operational standards.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            SINGLE PREMIUM BANNER
        ══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,67,50,0.55) 0%, rgba(13,45,31,0.45) 50%, rgba(12,26,18,0.6) 100%)",
            border: "1px solid rgba(212,160,23,0.18)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04) inset, 0 24px 64px rgba(0,0,0,0.35)",
          }}
        >
          {/* Banner inner glow — top-left gold */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: "rgba(212,160,23,0.07)" }}
            aria-hidden="true"
          />
          {/* Banner inner glow — bottom-right green */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full blur-[70px]"
            style={{ background: "rgba(27,67,50,0.3)" }}
            aria-hidden="true"
          />

          {/* Gold top accent line on banner */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.5) 25%, rgba(245,200,66,0.7) 50%, rgba(212,160,23,0.5) 75%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* ── Banner content: stacked on mobile, side-by-side on md+ ── */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14 p-8 md:p-10 lg:p-12">

            {/* ── LEFT: Badge ── */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              {/* Shield badge */}
              <div className="relative w-28 h-32 md:w-32 md:h-36 lg:w-36 lg:h-40 drop-shadow-2xl">
                <ISOBadge />
              </div>

              {/* Certified label below badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border"
                style={{
                  background: "rgba(212,160,23,0.1)",
                  borderColor: "rgba(212,160,23,0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" aria-hidden="true" />
                <span className="text-[#D4A017] text-[10px] font-bold uppercase tracking-[0.2em]">
                  Certified
                </span>
              </div>
            </div>

            {/* ── Vertical divider — desktop only ── */}
            <div
              className="hidden md:block self-stretch w-px flex-shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(212,160,23,0.25) 30%, rgba(212,160,23,0.25) 70%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* ── RIGHT: Content ── */}
            <div className="flex-1 text-center md:text-left">

              {/* Certification title */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="hidden md:block w-6 h-px bg-[#D4A017]" aria-hidden="true" />
                <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.22em]">
                  ISO 22000
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-white leading-tight tracking-[-0.02em]">
                ISO 22000 Certified
              </h3>

              <p className="mt-3 text-[15px] text-white/60 leading-relaxed max-w-lg">
                International food safety management standards supporting
                quality-focused export operations — ensuring every shipment
                meets the requirements of global buyers.
              </p>

              {/* Trust highlights */}
              <ul
                className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5 justify-center md:justify-start"
                role="list"
              >
                {trustHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[13px] text-white/70"
                  >
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(212,160,23,0.15)" }}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 10 10"
                        fill="none"
                        className="w-2.5 h-2.5"
                      >
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="#D4A017"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-7">
                <a
                  href="/certifications"
                  id="home-certifications-view"
                  data-tracking-id="home-certifications-view"
                  className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                >
                  <span className="relative z-10">View Certifications</span>
                  <svg
                    aria-hidden="true"
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ── Bottom separator ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.07) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
