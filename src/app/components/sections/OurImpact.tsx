"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp, parseStatValue } from "@/lib/countUp";

/* ─── Stats data ─────────────────────────────────────────────────────── */
const stats = [
  {
    value: "15+",
    label: "Export Markets",
    context: "Active trade relationships",
  },
  {
    value: "3",
    label: "Founding Partners",
    context: "Industry-rooted leadership",
  },
  {
    value: "8+",
    label: "Product Categories",
    context: "Diverse coconut portfolio",
  },
  {
    value: "2026",
    label: "Established",
    context: "Building long-term trade",
  },
];

/* ─── Individual stat item ───────────────────────────────────────────── */
function StatItem({
  value,
  label,
  context,
  index,
  isVisible,
  isLast,
}: {
  value: string;
  label: string;
  context: string;
  index: number;
  isVisible: boolean;
  isLast: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1600 + index * 100, isVisible);

  return (
    <div className="relative flex flex-col items-center text-center px-4 sm:px-6 lg:px-10">
      {/* Number */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.55,
          delay: 0.1 + index * 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="font-black text-white tabular-nums leading-none tracking-tight"
        style={{
          fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
          fontWeight: 900,
          lineHeight: 1,
        }}
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        {suffix && (
          <span
            style={{ color: "#D4A017" }}
            aria-hidden="true"
          >
            {suffix}
          </span>
        )}
      </motion.p>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: 0.2 + index * 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mt-3 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]"
        style={{ color: "#D4A017" }}
      >
        {label}
      </motion.p>

      {/* Context */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.1,
        }}
        className="mt-1.5 text-[11px] sm:text-[12px] leading-relaxed"
        style={{ color: "rgba(187,229,207,0.45)" }}
      >
        {context}
      </motion.p>

      {/* Vertical separator — after every item except last */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px"
          style={{
            height: "60%",
            background:
              "linear-gradient(to bottom, transparent, rgba(212,160,23,0.25) 30%, rgba(212,160,23,0.25) 70%, transparent)",
          }}
        />
      )}
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────── */
export default function OurImpact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section
      id="our-impact"
      ref={ref}
      aria-label="Our Impact — Export Scale and Global Reach"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a1f16 0%, #0C1A12 45%, #0d2218 100%)",
      }}
    >
      {/* ── Top separator ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.18) 35%, rgba(212,160,23,0.18) 65%, transparent 100%)",
        }}
      />

      {/* ── Ambient glow accents ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-[-20%] w-[500px] h-[500px] rounded-full blur-[130px]"
        style={{ background: "rgba(212,160,23,0.05)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] w-[420px] h-[420px] rounded-full blur-[110px]"
        style={{ background: "rgba(27,67,50,0.18)" }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #D4A017 0px, #D4A017 1px, transparent 1px, transparent 120px), repeating-linear-gradient(0deg, #D4A017 0px, #D4A017 1px, transparent 1px, transparent 120px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 lg:py-24">

        {/* ── Header block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14 lg:mb-18"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <span
              aria-hidden="true"
              className="block w-8 h-px"
              style={{ background: "#D4A017" }}
            />
            <p
              className="text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: "#D4A017" }}
            >
              Our Impact
            </p>
            <span
              aria-hidden="true"
              className="block w-8 h-px"
              style={{ background: "rgba(212,160,23,0.5)" }}
            />
          </div>

          {/* Headline */}
          <h2
            className="font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Building Global Trade{" "}
            <span style={{ color: "#D4A017" }}>Relationships</span>
          </h2>

          {/* Subtitle */}
          <p
            className="mt-3 mx-auto leading-relaxed max-w-xl"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "rgba(255,255,255,0.48)",
            }}
          >
            Through quality sourcing, export operations, and long-term business partnerships.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        {/* Desktop: single row of 4 with vertical separators */}
        {/* Tablet + Mobile: 2×2 grid */}
        <div
          className="grid grid-cols-2 gap-y-10 gap-x-2 sm:gap-y-12 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0"
        >
          {hasMounted
            ? stats.map((stat, i) => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  context={stat.context}
                  index={i}
                  isVisible={isInView}
                  isLast={i === stats.length - 1}
                />
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 px-4"
                >
                  <div
                    className="rounded"
                    style={{
                      width: "120px",
                      height: "72px",
                      background: "rgba(255,255,255,0.04)",
                      animation: "pulse 1.5s ease-in-out infinite",
                    }}
                  />
                  <div
                    className="rounded"
                    style={{
                      width: "80px",
                      height: "14px",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  />
                </div>
              ))}
        </div>

        {/* ── Horizontal rule accent ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 lg:mt-16 mx-auto max-w-[240px] h-px origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.35) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Bottom separator ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.055) 40%, rgba(255,255,255,0.055) 60%, transparent 100%)",
        }}
      />
    </section>
  );
}
