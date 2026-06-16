"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { fadeUp } from "./ProductConstants";
import { ProductIcon } from "./ProductIcons";
import type { Product } from "@/types";

const AMBER = "#D97706";
const AMBER_LIGHT = "#F59E0B";

/* ─── Packaging Card ──────────────────────────────────────────────────── */
function PackagingCard({ item }: { item: Product["logisticsItems"][0] }) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(217,119,6,0.1)] hover:border-[#D97706]/30 group h-full flex flex-col"
      style={{ borderColor: "rgba(217,119,6,0.12)" }}
    >
      {/* Amber top accent strip */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Stat */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#D97706] group-hover:text-white"
            style={{ background: "rgba(217,119,6,0.1)", color: AMBER }}
          >
            <ProductIcon icon={item.icon} />
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-right max-w-[120px] leading-tight"
            style={{ color: AMBER }}
          >
            {item.stat}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight tracking-[-0.01em] mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed flex-1">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function PackagingSection({ product }: { product: Product }) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / product.logisticsItems.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, product.logisticsItems.length - 1));
  }, [product.logisticsItems.length]);

  return (
    <section className="relative overflow-hidden py-14 md:py-18"
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 65%, #0c1222 100%)",
      }}
    >
      {/* Background textures */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, #D97706 0px, #D97706 1px, transparent 1px, transparent 60px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Amber glow top-right */}
        <div
          className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D97706 0%, transparent 70%)" }}
        />
        {/* Slate glow bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(circle, #334155 0%, transparent 70%)" }}
        />
      </div>

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97706]/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px" style={{ backgroundColor: AMBER }} />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.26em]"
              style={{ color: AMBER }}
            >
              Packaging & Logistics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-[-0.02em]">
            From Packing to{" "}
            <span style={{ color: AMBER }}>Port</span>
          </h2>
        </motion.div>

        {/* ── Mobile: Swipeable carousel ── */}
        <div className="sm:hidden -mx-6">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-2 gap-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {product.logisticsItems.map((item) => (
              <div
                key={item.title}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <PackagingCard item={item} />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {product.logisticsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / product.logisticsItems.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5"
                    : "w-1.5 h-1.5 hover:opacity-50"
                }`}
                style={{
                  backgroundColor: i === activeMobileIndex ? AMBER : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to packaging option ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-5">
          {product.logisticsItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <PackagingCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
