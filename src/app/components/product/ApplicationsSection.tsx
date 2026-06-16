"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { fadeUp } from "./ProductConstants";
import { ProductIcon } from "./ProductIcons";
import type { Product } from "@/types";

export default function ApplicationsSection({ product }: { product: Product }) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / product.applications.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, product.applications.length - 1));
  }, [product.applications.length]);

  return (
    <section className="relative overflow-hidden py-14 md:py-18"
      style={{ background: "linear-gradient(160deg, #0a1f16 0%, #0d2d1f 40%, #0a1a12 100%)" }}
    >
      {/* Background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(212,160,23,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">Applications</span>
            <span className="w-5 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-[-0.02em]">
            Common <span className="text-[#D4A017]">Use Cases</span>
          </h2>
          <p className="mt-4 text-green-200/50 text-sm max-w-lg mx-auto">
            Common applications for {product.name} across global markets.
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
            {product.applications.map((app) => (
              <div
                key={app.title}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-xl border border-white/10 shadow-sm h-full flex flex-col">
                  <div className="p-6 flex flex-col flex-1">
                    {/* Large icon */}
                    <div className="w-14 h-14 rounded-xl bg-[#1B4332]/10 flex items-center justify-center text-[#1B4332] mb-5">
                      <ProductIcon icon={app.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#111827] leading-tight mb-3">
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-5">
                      {app.desc}
                    </p>

                    {/* Industry badge */}
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-px bg-[#D4A017]" />
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#1B4332] font-semibold">
                        {app.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {product.applications.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / product.applications.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5 bg-[#D4A017]"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to application ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.applications.map((app, i) => (
            <motion.article
              key={app.title}
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative bg-white border border-white/10 rounded-xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col"
            >
              {/* Gold accent strip */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out bg-gradient-to-r from-[#D4A017] to-[#D4A017]/40" />

              <div className="p-6 flex flex-col flex-1">
                {/* Large icon */}
                <div className="w-14 h-14 rounded-xl bg-[#1B4332]/10 flex items-center justify-center text-[#1B4332] mb-5 group-hover:bg-[#1B4332] group-hover:text-white transition-all duration-300">
                  <ProductIcon icon={app.icon} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111827] leading-tight mb-3">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-5">
                  {app.desc}
                </p>

                {/* Industry badge */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="w-3 h-px bg-[#D4A017]" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#1B4332] font-semibold">
                    {app.highlight}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
