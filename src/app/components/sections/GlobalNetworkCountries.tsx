"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp, parseStatValue } from "@/lib/countUp";
import { exportDestinations } from "@/data/sections";

/* ─── Stats data ─────────────────────────────────────────────────────── */
const stats = [
  {
    value: "24+", label: "Countries Served", desc: "Across 5 continents",
    accent: "#D4A017",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20" />
        <path strokeLinecap="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: "500+", label: "Containers Exported", desc: "Annual shipping volume",
    accent: "#4A9E6B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="1" y="6" width="22" height="12" rx="1.5" />
        <path strokeLinecap="round" d="M5 18v2M19 18v2" />
        <path strokeLinecap="round" d="M8 10h8" />
      </svg>
    ),
  },
  {
    value: "3", label: "Port Corridors", desc: "Chennai, Tuticorin, Nhava Sheva",
    accent: "#2D7D9A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" d="M12 2v20M12 2l-4 4M12 2l4 4" />
        <path strokeLinecap="round" d="M8 16h8" />
      </svg>
    ),
  },
  {
    value: "10+", label: "Years Exporting", desc: "Established global presence",
    accent: "#9B59B6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

/* ─── Stat Card ─────────────────────────────────────────────────────── */
function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[number];
  index: number;
  isInView: boolean;
}) {
  const { numeric, suffix } = parseStatValue(stat.value);
  const counted = useCountUp(numeric, 1800 + index * 100, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.5 + index * 0.1, ease: "easeOut" }}
      className="group relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#1B4332]/20 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] transition-all duration-300"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
        style={{ background: `linear-gradient(90deg, ${stat.accent} 0%, ${stat.accent}33 100%)` }}
      />
      <div className="p-5 sm:p-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${stat.accent}12`, color: stat.accent }}
        >
          {stat.icon}
        </div>
        <div className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-[#1B4332] leading-none tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            aria-label={`${stat.value} ${stat.label}`}
          >
            {isInView ? counted : 0}
          </motion.span>
          <span className="text-[#D4A017]">{suffix}</span>
        </div>
        <p className="mt-2 text-[12px] font-bold text-[#D4A017] uppercase tracking-[0.14em]">
          {stat.label}
        </p>
        <p className="mt-1 text-[12px] text-gray-400 leading-snug">{stat.desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

/* ─── Destination Card ────────────────────────────────────────────────── */
function DestinationCard({
  flag,
  country,
  index,
  isInView,
}: {
  flag: string;
  country: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.04, ease: "easeOut" }}
      className="group flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 shadow-sm hover:border-[#1B4332]/25 hover:shadow-[0_6px_20px_rgba(27,67,50,0.08)] hover:-translate-y-0.5 transition-all duration-200 min-w-0"
    >
      {/* Pin icon */}
      <span
        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[#1B4332]/60 bg-[#1B4332]/[0.06] group-hover:bg-[#1B4332]/[0.10] transition-colors duration-200"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-3.5 h-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </span>

      {/* Flag + Country name */}
      <span className="flex items-center gap-2 min-w-0">
        <span className="text-lg leading-none flex-shrink-0" aria-hidden="true">
          {flag}
        </span>
        <span className="text-[13px] font-semibold text-[#111827] leading-snug break-words min-w-0">
          {country}
        </span>
      </span>
    </motion.div>
  );
}

/* ─── Main Section ────────────────────────────────────────────────────── */
export default function GlobalNetworkCountries() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="countries-served"
      ref={sectionRef}
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
      aria-label="Markets We Serve"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Global Reach
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B4332] font-bold leading-tight">
            Markets We{" "}
            <span className="text-[#D4A017]">Serve</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Exporting premium coconut products to importers, distributors, and industrial buyers across{" "}
            <span className="font-semibold text-[#1B4332]">24 countries</span> spanning 5 continents.
          </p>
        </motion.div>

        {/* ── 24-Country Destination Grid ── */}
        {/*
          Desktop (≥1024px): 3 columns × 8 rows
          Tablet  (768–1023px): 2 columns
          Mobile  (<768px): 2 columns compact
        */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 mb-10">
          {exportDestinations.map((dest, i) => (
            <DestinationCard
              key={dest.country}
              flag={dest.flag}
              country={dest.country}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  );
}
