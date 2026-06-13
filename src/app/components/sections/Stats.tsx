"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp, parseStatValue } from "@/lib/countUp";

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D4A017]">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D4A017]">
      <path d="M4 18h16" />
      <path d="M6 14h12l-2-6H8l-2 6z" />
      <path d="M10 8V4h4v4" />
      <path d="M6 14l-2 4" />
      <path d="M18 14l2 4" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D4A017]">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D4A017]">
      <path d="M20.5 12.5 16 17l-4-3 4-3 4.5 1.5z" />
      <path d="M3.5 12.5 8 17l4-3-4-3-4.5 1.5z" />
      <path d="M10 10v7" />
      <path d="M14 10v7" />
    </svg>
  );
}

const metrics = [
  {
    value: "15+",
    label: "Export Markets",
    supporting: "Serving buyers globally",
    Icon: GlobeIcon,
  },
  {
    value: "500+",
    label: "Containers Exported",
    supporting: "Reliable shipment execution",
    Icon: ShipIcon,
  },
  {
    value: "10+",
    label: "Years Experience",
    supporting: "Industry expertise",
    Icon: AwardIcon,
  },
  {
    value: "200+",
    label: "Commercial Partners",
    supporting: "Trusted business relationships",
    Icon: HandshakeIcon,
  },
];

function StatCard({
  value,
  label,
  supporting,
  Icon,
  index,
  isVisible,
}: {
  value: string;
  label: string;
  supporting: string;
  Icon: React.ComponentType;
  index: number;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1200 + index * 80, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-white/[0.04] border border-white/[0.06] shadow-xl shadow-black/20 hover:bg-white/[0.08] hover:border-[#D4A017]/30 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 group"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#D4A017]/50 transition-all duration-500" />

      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/[0.08] mb-5 group-hover:bg-[#D4A017]/[0.15] group-hover:scale-110 transition-all duration-500">
        <Icon />
      </div>

      <p
        className="font-roboto text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-none font-bold text-white tracking-[-0.02em] tabular-nums"
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        <span className="text-[#D4A017]">{suffix}</span>
      </p>

      <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
        {label}
      </p>

      <p className="mt-1.5 text-xs text-white/40 leading-relaxed max-w-[14rem]">
        {supporting}
      </p>
    </motion.div>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="stats"
      ref={ref}
      aria-label="Company statistics"
      className="relative overflow-hidden bg-gradient-to-b from-[#0C1A12] via-[#0d2d1f] to-[#0C1A12]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A017]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {metrics.map((m, i) => (
            <StatCard
              key={m.label}
              value={m.value}
              label={m.label}
              supporting={m.supporting}
              Icon={m.Icon}
              index={i}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
