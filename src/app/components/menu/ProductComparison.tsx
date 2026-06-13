"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/data/products";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Category colours ────────────────────────────────────────────────── */
const categoryColors: Record<string, string> = {
  "Whole Coconut": "#1B4332",
  "Processed Commodity": "#8B6914",
  "Agricultural Input": "#2d6a4f",
};

/* ─── Primary use mapping ─────────────────────────────────────────────── */
const primaryUses: Record<number, string> = {
  1: "Wholesale distribution & food processing",
  2: "Premium retail & hospitality supply",
  3: "High-end retail & premium programmes",
  4: "Oil extraction & industrial processing",
  5: "Hydroponics & professional horticulture",
};

export default function ProductComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="product-comparison"
      ref={sectionRef}
      aria-label="Product comparison"
      className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
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
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Compare Products
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Find the Right Product{" "}
            <span className="text-[#1B4332]">For Your Market</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Compare specifications across our entire product range to identify
            the best match for your procurement needs.
          </p>
        </motion.div>

        {/* ── Comparison Cards ── */}
        {/* On mobile: stack of cards. On desktop: side-by-side comparison */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {products.map((product, index) => {
            const accent = categoryColors[product.category] ?? "#1B4332";
            const use = primaryUses[product.id] ?? "General export";

            return (
              <motion.div
                key={product.id}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
                className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-xl overflow-hidden transition-all duration-400 hover:shadow-[0_8px_32px_rgba(27,67,50,0.06)] flex flex-col"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 inset-x-0 h-[3px]"
                  style={{ background: accent }}
                />

                {/* Header */}
                <div className="px-5 pt-6 pb-4 text-center border-b border-gray-100">
                  <span
                    className="inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2"
                    style={{
                      background: `${accent}12`,
                      color: accent,
                    }}
                  >
                    {product.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#111827] leading-tight">
                    {product.name}
                  </h3>
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 p-5 space-y-4">
                  {/* Primary Use */}
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#9CA3AF]">
                      Primary Use
                    </span>
                    <p className="text-xs text-gray-600 mt-1 leading-snug">
                      {use}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-50" />

                  {/* Packaging */}
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#9CA3AF]">
                      Packaging
                    </span>
                    <p className="text-xs text-gray-700 mt-1 leading-snug font-medium">
                      {product.specifications.packaging}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-50" />

                  {/* MOQ */}
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#9CA3AF]">
                      MOQ
                    </span>
                    <p className="text-xs text-gray-700 mt-1 leading-snug font-medium">
                      {product.specifications.moq}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-50" />

                  {/* Export Category */}
                  <div className="flex-1">
                    <span className="text-[9px] uppercase tracking-[0.16em] font-semibold text-[#9CA3AF]">
                      Export Grade
                    </span>
                    <p className="text-xs text-[#1B4332] mt-1 leading-snug font-semibold">
                      {product.specifications.exportGrade}
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <a
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#D4A017] transition-colors pt-2 border-t border-gray-100 mt-auto"
                  >
                    View Details
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="text-center text-xs text-gray-400 mt-8"
        >
          All products available in FCL and LCL configurations · Custom packaging and private labelling available
        </motion.p>
      </div>
    </section>
  );
}
