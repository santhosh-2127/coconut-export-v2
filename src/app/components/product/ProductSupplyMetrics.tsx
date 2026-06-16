"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { useCountUp, parseStatValue } from "@/lib/countUp";
import type { Product } from "@/types";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const CYAN = "#06B6D4";

/* ─── Metric data mapped from heroStats ───────────────────────────────── */
function getMetrics(product: Product) {
  const stats = product.heroStats;
  return [
    {
      value: stats[0]?.value ? `${stats[0].value}+` : "500,000+",
      label: "Monthly Supply Capacity",
      description: "Supporting long-term procurement contracts.",
    },
    {
      value: stats[1]?.value ? `${stats[1].value}+` : "25,000+",
      label: "Units Per FCL",
      description: "Optimized for commercial export shipments.",
    },
    {
      value: stats[2]?.value ?? "15+",
      label: "Export Markets",
      description: "Supporting buyers across international markets.",
    },
  ];
}

/* ─── Metric Block ────────────────────────────────────────────────────── */
function MetricBlock({
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
    <div className="h-full flex flex-col">
      {/* Number */}
      <p
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold text-white tracking-[-0.03em] tabular-nums"
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted.toLocaleString() : 0}
        <span style={{ color: CYAN }}>{suffix}</span>
      </p>

      {/* Label */}
      <p
        className="mt-2 text-[13px] uppercase tracking-[0.18em] font-semibold"
        style={{ color: CYAN }}
      >
        {label}
      </p>

      {/* Description */}
      <p className="mt-1.5 text-sm text-white/40 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function ProductSupplyMetrics({ product }: { product: Product }) {
  const metrics = getMetrics(product);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => { setHasMounted(true); }, []);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / metrics.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, metrics.length - 1));
  }, [metrics.length]);

  return (
    <section
      id="supply-capabilities"
      ref={sectionRef}
      aria-label="Commercial Supply Capabilities"
      className="relative py-14 md:py-18 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a1628 0%, #0f1f3d 40%, #0a1420 100%)" }}
    >
      {/* Background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(6,182,212,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }}
        />
      </div>

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4]/30 to-transparent"
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
            <span className="w-8 h-px" style={{ backgroundColor: CYAN }} />
            <p
              className="uppercase tracking-[5px] text-[11px] font-bold"
              style={{ color: CYAN }}
            >
              Commercial Supply Capabilities
            </p>
            <span className="w-8 h-px" style={{ backgroundColor: CYAN }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for{" "}
            <span style={{ color: CYAN }}>Bulk Procurement</span>
          </h2>
          <p className="mt-4 text-white/40 text-sm md:text-base leading-relaxed">
            Built to support importers, distributors, wholesalers, and commercial procurement teams with reliable large-scale supply.
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
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <div
                  className="rounded-xl border p-6 h-full flex flex-col backdrop-blur-sm"
                  style={{
                    borderColor: "rgba(6,182,212,0.15)",
                    background: "rgba(255,255,255,0.04)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  }}
                >
                  <MetricBlock
                    value={metric.value}
                    label={metric.label}
                    description={metric.description}
                    index={metrics.indexOf(metric)}
                    isVisible={isInView}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {metrics.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / metrics.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5"
                    : "w-1.5 h-1.5 hover:opacity-50"
                }`}
                style={{
                  backgroundColor: i === activeMobileIndex ? CYAN : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to metric ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {hasMounted
            ? metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="p-6 rounded-xl border backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(6,182,212,0.08)] transition-all duration-300"
                  style={{
                    borderColor: "rgba(6,182,212,0.15)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <MetricBlock
                    value={metric.value}
                    label={metric.label}
                    description={metric.description}
                    index={i}
                    isVisible={isInView}
                  />
                </motion.div>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-[140px] rounded-xl animate-pulse" style={{ background: "rgba(255,255,255,0.05)" }} />
              ))}
        </div>
      </div>
    </section>
  );
}
