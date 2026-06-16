"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Benefit cards ───────────────────────────────────────────────────── */
const benefits = [
  {
    title: "Export-Grade Packaging",
    description:
      "Products are packed for international transportation requirements.",
    color: "#D4A017",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Quality Inspection",
    description:
      "Each shipment undergoes quality verification before dispatch.",
    color: "#1B4332",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Secure Container Loading",
    description:
      "Cargo is prepared and loaded according to export handling standards.",
    color: "#2D7D9A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Transit Protection",
    description:
      "Packaging methods help reduce transportation-related damage.",
    color: "#4A9E6B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

/* ─── Main section ────────────────────────────────────────────────────── */
export default function LogisticsQuality() {
  return (
    <section
      id="packaging-quality"
      aria-label="Safe Packaging & Quality Control"
      className="relative py-14 md:py-20 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Packaging & Quality
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Safe Packaging &{" "}
            <span className="text-[#D4A017]">Quality Control</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Every shipment is prepared, inspected, and packed to support reliable
            international delivery.
          </p>
        </motion.div>

        {/* ── Benefit cards — 4 cols desktop, 2×2 tablet, stacked mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              {/* Top accent bar — reveals on hover */}
              <div
                className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{
                  background: `linear-gradient(90deg, ${benefit.color}, ${benefit.color}55)`,
                }}
                aria-hidden="true"
              />

              <div className="p-6 lg:p-7">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-colors duration-300"
                  style={{
                    color: benefit.color,
                    backgroundColor: `${benefit.color}10`,
                    borderColor: `${benefit.color}20`,
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#111827] text-base leading-snug mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
