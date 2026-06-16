"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp, parseStatValue } from "@/lib/countUp";
import { fadeUp } from "@/constants/animations";

/* ─── Stats data ─────────────────────────────────────────────────────── */
const stats = [
  {
    value: "15+", label: "Countries Served", desc: "Across 4 continents",
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

/* ─── Stat Card sub-component ─────────────────────────────────────────── */
function StatCard({ stat, index, isInView }: { 
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
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
        style={{ background: `linear-gradient(90deg, ${stat.accent} 0%, ${stat.accent}33 100%)` }}
      />

      <div className="p-5 sm:p-6">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${stat.accent}12`, color: stat.accent }}
        >
          {stat.icon}
        </div>

        {/* Large animated number */}
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

        {/* Label */}
        <p className="mt-2 text-[12px] font-bold text-[#D4A017] uppercase tracking-[0.14em]">
          {stat.label}
        </p>

        {/* Description */}
        <p className="mt-1 text-[12px] text-gray-400 leading-snug">
          {stat.desc}
        </p>
      </div>

      {/* Bottom shimmer on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Bahrain"],
    color: "#D4A017",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Europe",
    countries: ["Germany", "Netherlands", "United Kingdom"],
    color: "#4A9E6B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    name: "Southeast Asia",
    countries: ["Singapore", "Malaysia"],
    color: "#2D7D9A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247" />
      </svg>
    ),
  },
  {
    name: "Africa",
    countries: ["Egypt", "Kenya", "South Africa", "Nigeria", "Morocco"],
    color: "#9B59B6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 10-16 0" />
      </svg>
    ),
  },
];

export default function GlobalNetworkCountries() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="countries-served"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]"
      aria-label="Countries Served"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Global Reach
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B4332] font-bold leading-tight">
            15+ Countries{" "}
            <span className="text-[#D4A017]">Served</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Exporting premium coconut products to importers, distributors, and industrial buyers across the Middle East, Europe, Southeast Asia, and Africa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${region.color} 0%, ${region.color}44 100%)` }}
              />
              <div className="p-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${region.color}14`, color: region.color }}
                >
                  {region.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{region.name}</h3>
                <ul className="space-y-1">
                  {region.countries.map((country) => (
                    <li key={country} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D4A017]/40" />
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
