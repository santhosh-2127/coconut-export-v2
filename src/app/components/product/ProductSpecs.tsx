"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./ProductConstants";
import type { Product } from "@/types";

export default function ProductSpecs({ product }: { product: Product }) {
  return (
    <section id="specs" className="relative overflow-hidden bg-white py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 60px)" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">Technical Data</span>
            <span className="w-5 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            Product <span className="text-[#1B4332]">Specifications</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-sm max-w-lg mx-auto">Detailed technical parameters for procurement and quality verification teams.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="border border-[#E5E7EB] divide-y divide-[#E5E7EB]">
            {product.techSpecs.map((spec, i) => (
              <motion.div key={spec.label} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] hover:bg-[#1B4332]/[0.02] transition-colors duration-200">
                <div className="px-4 sm:px-6 py-4 bg-[#1B4332]/[0.03] border-r border-[#E5E7EB] flex items-center">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#1B4332] uppercase tracking-[0.12em]">{spec.label}</span>
                </div>
                <div className="px-4 sm:px-6 py-4 flex items-center">
                  <span className="text-[13px] sm:text-sm text-[#374151]">{spec.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center text-[10px] uppercase tracking-[0.18em] text-[#9CA3AF] mt-6">
            Specifications are indicative and verified per shipment · Full technical datasheet available on request
          </motion.p>
        </div>
      </div>
    </section>
  );
}
