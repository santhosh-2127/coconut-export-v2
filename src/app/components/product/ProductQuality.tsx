"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const EMERALD = "#065f46";
const GOLD = "#D4A017";

/* ─── Quality Stages ──────────────────────────────────────────────────── */
const stages = [
  {
    step: "01",
    title: "Farm-Level Screening",
    description: "Coconuts are inspected at source for maturity, size uniformity, and visual integrity before harvest approval.",
    icon: "🌴",
    badge: "✓ Verified Process",
  },
  {
    step: "02",
    title: "Incoming Inspection",
    description: "Every batch is checked at our ISO 22000 facility for weight calibration, shell integrity, and grade compliance before processing.",
    icon: "🔍",
    badge: "✓ Certified Inspection",
  },
  {
    step: "03",
    title: "Process Monitoring",
    description: "Critical control points monitored throughout sorting, grading, and packing — temperature, humidity, hygiene, and product integrity.",
    icon: "⚙️",
    badge: "✓ CCP Monitored",
  },
  {
    step: "04",
    title: "Pre-Shipment Verification",
    description: "Final container inspection including visual check, moisture testing, packaging integrity, and documentation verification before sealing.",
    icon: "✅",
    badge: "✓ Export Ready",
  },
];

/* ─── Quality Card ────────────────────────────────────────────────────── */
function QualityCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  return (
    <div className="relative bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(6,95,70,0.1)] hover:border-[#065f46]/20 group h-full flex flex-col">
      {/* Gold top accent strip */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#e0b52a] to-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Step */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "rgba(6,95,70,0.08)" }}>
            <span aria-hidden="true">{stage.icon}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: GOLD }}>
            {stage.step}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#111827] mb-2">{stage.title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed flex-1">{stage.description}</p>

        {/* Quality Badge */}
        <div
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide w-fit"
          style={{ background: "rgba(6,95,70,0.08)", color: EMERALD }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5L4 7L8 3" stroke={EMERALD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {stage.badge}
        </div>
      </div>
    </div>
  );
}

/* ─── Quality Progression Line ────────────────────────────────────────── */
function ProgressionLine() {
  const steps = ["Inspection", "Verification", "Packaging", "Export Ready"];
  return (
    <div className="hidden lg:flex items-center justify-center gap-4 mt-10 px-10">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-20 h-px" style={{ background: `linear-gradient(90deg, ${GOLD}40, transparent)` }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Props ───────────────────────────────────────────────────────────── */
interface ProductQualityProps {
  name: string;
}

export default function ProductQuality({ name }: ProductQualityProps) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / stages.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, stages.length - 1));
  }, []);

  return (
    <section
      id="quality"
      aria-label="Quality Inspection"
      className="relative py-14 md:py-18 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #022c22 0%, #065f46 35%, #022c22 65%, #021a19 100%)",
      }}
    >
      {/* Background textures */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,160,23,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow orb top-right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
        />
        {/* Glow orb bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #065f46 0%, transparent 70%)" }}
        />
      </div>

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
            <p
              className="uppercase tracking-[5px] text-[11px] font-bold"
              style={{ color: GOLD }}
            >
              Quality Assurance
            </p>
            <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How We Maintain{" "}
            <span className="text-[#D4A017]">Quality</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed">
            Every shipment of {name} passes through our certified quality control process — from farm to container.
          </p>
        </motion.div>

        {/* ── Mobile: Swipeable carousel ── */}
        <div className="md:hidden -mx-6">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-2 gap-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stages.map((stage, i) => (
              <div
                key={stage.step}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <QualityCard stage={stage} index={i} />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {stages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / stages.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5"
                    : "w-1.5 h-1.5 hover:opacity-50"
                }`}
                style={{
                  backgroundColor: i === activeMobileIndex ? GOLD : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to quality stage ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.step}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <QualityCard stage={stage} index={i} />
            </motion.div>
          ))}
        </div>

        {/* ── Quality Progression Line (desktop only) ── */}
        <ProgressionLine />
      </div>
    </section>
  );
}
