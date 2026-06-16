"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp, parseStatValue } from "@/lib/countUp";

/* ─── Metrics data ────────────────────────────────────── */

const metrics = [
  {
    value: "15+",
    label: "Export Markets",
    description: "Active trade relationships across international markets.",
  },
  {
    value: "3",
    label: "Founding Partners",
    description: "Industry expertise driving sourcing and export operations.",
  },
  {
    value: "8+",
    label: "Product Categories",
    description: "Serving diverse coconut and coconut-derived product requirements.",
  },
  {
    value: "2026",
    label: "Established",
    description: "Focused on building long-term global trade partnerships.",
  },
];

/* ─── StatBlock — minimal premium metric ──────────────── */

function StatBlock({
  value,
  label,
  description,
  index,
  isVisible,
}: {
  value: string;
  label: string;
  description: string;
  index: number;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1200 + index * 80, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Large white number — dominating visual hierarchy */}
      <p
        className="leading-none font-extrabold lg:font-black text-white tracking-[-0.03em] tabular-nums text-[clamp(2.5rem,8vw,3.5rem)] lg:text-[clamp(4rem,8vw,6rem)]"
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        {suffix && <span className="text-[#D4A017]">{suffix}</span>}
      </p>

      {/* Stat label */}
      <p className="mt-2 text-[13px] uppercase tracking-[0.18em] text-[#D4A017] font-semibold">
        {label}
      </p>

      {/* Description — smaller supporting text */}
      <p className="mt-1.5 text-xs text-green-200/40 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────── */

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="bg-[#0C1A12]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Our Impact
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Export Scale &{" "}
            <span className="text-[#D4A017]">Reach</span>
          </h2>
          <p className="mt-3 text-green-200/60 text-sm md:text-base leading-relaxed">
            Supporting international buyers through reliable sourcing, export operations, and long-term trade partnerships.
          </p>
        </motion.div>

        {/* Stat blocks grid — 2 cols mobile/tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {hasMounted
            ? metrics.map((m, i) => (
                <StatBlock
                  key={m.label}
                  value={m.value}
                  label={m.label}
                  description={m.description}
                  index={i}
                  isVisible={isInView}
                />
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-[140px] bg-white/5 rounded-lg animate-pulse" />
              ))}
        </div>

        {/* Bottom accent bar */}
        <div className="mt-12 lg:mt-14 max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>
    </section>
  );
}
