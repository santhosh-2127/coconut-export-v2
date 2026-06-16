"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp, parseStatValue } from "@/lib/countUp";

/* ─── SVG Icons (compact, single-purpose) ─────────────── */

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 18h16" />
      <path d="M6 14h12l-2-6H8l-2 6z" />
      <path d="M10 8V4h4v4" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20.5 12.5 16 17l-4-3 4-3 4.5 1.5z" />
      <path d="M3.5 12.5 8 17l4-3-4-3-4.5 1.5z" />
      <path d="M10 10v7" />
      <path d="M14 10v7" />
    </svg>
  );
}

/* ─── Metrics data ────────────────────────────────────── */

const metrics = [
  { value: "15+", label: "Export Markets", Icon: GlobeIcon },
  { value: "500+", label: "Containers Exported", Icon: ShipIcon },
  { value: "10+", label: "Years Experience", Icon: AwardIcon },
  { value: "200+", label: "Commercial Partners", Icon: HandshakeIcon },
];

/* ─── StatCard — compact premium card ─────────────────── */

function StatCard({
  value,
  label,
  Icon,
  index,
  isVisible,
}: {
  value: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1200 + index * 80, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col items-center text-center px-6 py-10 sm:py-12 rounded-xl bg-white/[0.04] border border-white/[0.08]"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#D4A017]/[0.1] mb-4">
        <Icon className="w-[24px] h-[24px] text-[#D4A017]" />
      </div>

      {/* Number */}
      <p
        className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-bold text-white tracking-[-0.02em] tabular-nums"
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        <span className="text-[#D4A017]">{suffix}</span>
      </p>

      {/* Label */}
      <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/70 font-semibold">
        {label}
      </p>

      {/* Subtle gold-accent line at bottom */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────── */

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
          {hasMounted
            ? metrics.map((m, i) => (
                <StatCard
                  key={m.label}
                  value={m.value}
                  label={m.label}
                  Icon={m.Icon}
                  index={i}
                  isVisible={isInView}
                />
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-[200px] bg-white/5 rounded-xl animate-pulse" />
              ))}
        </div>
      </div>
    </section>
  );
}
