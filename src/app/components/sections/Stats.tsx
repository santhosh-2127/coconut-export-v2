"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/company";

/* ─── Count-up hook ───────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, enabled = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [enabled, target, duration]);

  return count;
}

/* ─── Extract numeric value and suffix from strings like "15+", "500+", "10+", "5" */
function parseStatValue(raw: string): { numeric: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: 0, suffix: "" };
  return { numeric: parseInt(match[1], 10), suffix: match[2] };
}

/* ─── Per-stat icon ───────────────────────────────────────────────────── */
const statIcons: Record<string, React.ReactNode> = {
  "Countries Served": (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  "Containers Exported": (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  "Years Experience": (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Core Products": (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
  ),
};

/* ─── Single animated stat ────────────────────────────────────────────── */
function StatItem({
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
  const isLast = index === stats.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.12, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center px-6 py-8 lg:py-10"
    >
      {/* Vertical separator — hidden on last item and on small screens */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#1B4332]/15 to-transparent"
        />
      )}

      {/* Icon */}
      <div className="mb-3 text-[#D4A017] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {statIcons[label]}
      </div>

      {/* Gold top rule — animates in */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: "easeOut" }}
        className="w-8 h-[2px] bg-[#D4A017] mb-4 origin-left"
      />

      {/* Number */}
      <p
        className="font-serif text-[3.25rem] sm:text-[3.75rem] lg:text-[4.25rem] leading-none font-bold text-[#1B4332] tracking-[-0.03em] tabular-nums"
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        <span className="text-[#D4A017]">{suffix}</span>
      </p>

      {/* Label */}
      <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[#374151] font-semibold">
        {label}
      </p>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={ref}
      aria-label="Company statistics and export reach"
      className="relative overflow-hidden bg-[#FAFAFA] py-12 md:py-16"
    >
      {/* ── Architectural background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Faint diagonal lines — subtle structure */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 60px)",
          }}
        />
        {/* Green glow — bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#1B4332]/[0.05] blur-[100px]" />
        {/* Gold glow — top-right */}
        <div className="absolute -top-16 right-0 w-[320px] h-[320px] rounded-full bg-[#D4A017]/[0.05] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.26em] text-[#D4A017] font-semibold mb-4">
            Scale &amp; Reach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            Our Export{" "}
            <span className="text-[#1B4332]">Reach</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-base max-w-md mx-auto leading-relaxed">
            Delivering premium coconut products across the globe with consistent scale and reliability.
          </p>
        </motion.div>

        {/* ── KPI grid ── */}
        <div className="relative">
          {/* Outer border frame */}
          <div className="absolute inset-0 rounded-2xl border border-[#1B4332]/[0.08] pointer-events-none" />

          {/* Subtle inner fill */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(27,67,50,0.02) 0%, rgba(212,160,23,0.02) 100%)",
            }}
          />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y-2 divide-x-0 lg:divide-x-2 lg:divide-y-0 divide-[#1B4332]/[0.07]">
            {stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={i}
                isVisible={isInView}
              />
            ))}
          </div>
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="text-center text-[10px] uppercase tracking-[0.18em] text-[#9CA3AF] mt-8"
        >
          As of 2024 · Independently verified · Continually updated
        </motion.p>
      </div>
    </section>
  );
}
