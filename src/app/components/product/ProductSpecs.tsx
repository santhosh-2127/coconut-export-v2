"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./ProductConstants";
import type { Product } from "@/types";

/* ─── Icon mapping ────────────────────────────────────────────────────── */
const specIcons: Record<string, string> = {
  "Product Type": "🥥",
  "Weight Range": "⚖️",
  "Maturity": "🌱",
  "Husk Type": "🥥",
  "Colour": "🎨",
  "Packaging": "📦",
  "MOQ": "📋",
  "Water Content": "💧",
  "Origin": "🌍",
  "Oil Content": "🫒",
  "Moisture": "💧",
  "FFA": "🧪",
  "Drying Method": "☀️",
  "EC (Conductivity)": "🧪",
  "pH Range": "⚗️",
  "Expansion Ratio": "📏",
  "Format": "📦",
  "Grade Levels": "🏅",
  "Size Tolerance": "📐",
  "Shell Integrity": "🛡️",
};

function getIcon(label: string): string {
  return specIcons[label] ?? "📋";
}

/* ─── Props ──────────────────────────────────────────────────────────── */
export default function ProductSpecs({ product }: { product: Product }) {
  return (
    <section
      id="specs"
      className="relative overflow-hidden bg-white py-12 md:py-16"
    >
      {/* Background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">
              Technical Specifications
            </span>
            <span className="w-5 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            Product <span className="text-[#1B4332]">Specifications</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-sm max-w-lg mx-auto">
            Key export specifications for international procurement and
            commercial sourcing.
          </p>
        </motion.div>

        {/* ── Spec Cards Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {product.techSpecs.map((spec, i) => (
            <motion.div
              key={spec.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] hover:border-[#1B4332]/20 transition-all duration-300"
            >
              {/* Deep Green top accent */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#1B4332] via-[#1B4332] to-[#1B4332]/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="p-4 sm:p-5 flex flex-col items-start gap-2.5">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "rgba(212,160,23,0.1)" }}
                  aria-hidden="true"
                >
                  <span>{getIcon(spec.label)}</span>
                </div>

                {/* Label */}
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1B4332]">
                  {spec.label}
                </span>

                {/* Value */}
                <span className="text-[13px] sm:text-sm font-medium text-[#111827] leading-snug">
                  {spec.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-[10px] uppercase tracking-[0.18em] text-[#9CA3AF] mt-8"
        >
          Specifications are indicative and verified per shipment · Full
          technical datasheet available on request
        </motion.p>
      </div>
    </section>
  );
}
