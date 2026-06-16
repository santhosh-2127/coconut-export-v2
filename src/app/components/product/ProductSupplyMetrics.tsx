"use client";

import { motion } from "framer-motion";
import type { Product } from "@/types";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Metric data mapped from heroStats ───────────────────────────────── */
function getMetrics(product: Product) {
  const stats = product.heroStats;
  return [
    {
      value: stats[0]?.value ? `${stats[0].value}+` : "500,000+",
      label: "Monthly Supply Capacity",
      description: "Supporting large-volume procurement and long-term contracts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
    },
    {
      value: stats[1]?.value ? `${stats[1].value}+` : "25,000+",
      label: "Nuts Per FCL",
      description: "Optimised container utilisation for cost-efficient shipping.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      value: stats[2]?.value ?? "15+",
      label: "Export Markets Served",
      description: "Established trade routes across Middle East, Europe, Americas, and Asia-Pacific.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
  ];
}

export default function ProductSupplyMetrics({ product }: { product: Product }) {
  const metrics = getMetrics(product);

  return (
    <section
      id="supply-capabilities"
      aria-label="Commercial Supply Capabilities"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 80px)" }} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.04] blur-[100px]" />
      </div>

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
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Commercial Supply Capabilities
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Built for{" "}
            <span className="text-[#1B4332]">Bulk Procurement</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Built to support importers, distributors, wholesalers, and commercial procurement teams with reliable large-scale supply.
          </p>
        </motion.div>

        {/* ── Metrics Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="p-6 sm:p-7">
                {/* Icon */}
                <div className="w-11 h-11 border border-[#1B4332]/15 rounded-xl flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-all duration-300 mb-5">
                  {metric.icon}
                </div>

                {/* Value */}
                <p className="text-3xl sm:text-4xl font-bold text-[#1B4332] leading-none mb-2">
                  {metric.value}
                </p>

                {/* Label */}
                <p className="text-sm font-semibold text-[#111827] mb-2">
                  {metric.label}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
