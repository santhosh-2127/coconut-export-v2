"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Region cards ────────────────────────────────────────────────────── */
const regions = [
  {
    emoji: "🌏",
    name: "Asia",
    description: "Regular export shipments across Asian markets.",
    color: "#9B59B6",
  },
  {
    emoji: "🌍",
    name: "Middle East",
    description: "Supporting importers and distributors throughout the GCC region.",
    color: "#D4A017",
  },
  {
    emoji: "🌍",
    name: "Europe",
    description: "Export-ready logistics support for European destinations.",
    color: "#4A9E6B",
  },
  {
    emoji: "🌎",
    name: "North America",
    description: "Commercial shipping support for international buyers.",
    color: "#2D7D9A",
  },
];

/* ─── Trust bar items ─────────────────────────────────────────────────── */
const trustItems = [
  "Export Documentation Support",
  "Containerized Shipping",
  "International Logistics Coordination",
  "Destination Assistance",
];

/* ─── Main section ────────────────────────────────────────────────────── */
export default function LogisticsShipping() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="shipping-network"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d2d1f 0%, #102a1e 40%, #0a1f16 100%)",
      }}
      aria-label="Global Shipping Coverage"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Global Shipping Network
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Global Shipping{" "}
            <span className="text-[#D4A017]">Coverage</span>
          </h2>
          <p className="mt-4 text-green-200/60 text-sm sm:text-base leading-relaxed">
            Reliable export logistics support for buyers across major international
            markets.
          </p>
        </motion.div>

        {/* ── Region cards — 4 cols desktop, 2×2 tablet, stacked mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${region.color}, ${region.color}44)` }}
                aria-hidden="true"
              />

              <div className="p-6">
                {/* Emoji */}
                <span
                  className="text-3xl mb-4 block"
                  role="img"
                  aria-label={region.name}
                >
                  {region.emoji}
                </span>

                {/* Region name */}
                <h3
                  className="font-bold text-base leading-snug mb-2"
                  style={{ color: region.color }}
                >
                  {region.name}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed">
                  {region.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Trust bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-10"
        >
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 px-5 py-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                  <path
                    d="M3 8l3.5 3.5L13 4.5"
                    stroke="#D4A017"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-white/70 text-sm font-medium">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-5">
            Need shipping support for your destination?
          </p>
          <a
            id="logistics-shipping-consultation"
            data-tracking-id="logistics-shipping-consultation"
            href="/#request-quote"
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.05em] uppercase rounded-lg transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          >
            Request Export Consultation
            <svg
              aria-hidden="true"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
          </a>
        </motion.div>

      </div>
    </section>
  );
}
