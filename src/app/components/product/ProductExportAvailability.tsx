"use client";

import { motion } from "framer-motion";
import type { Product } from "@/types";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Props ───────────────────────────────────────────────────────────── */
interface ExportAvailabilityProps {
  product: Product;
}

export default function ProductExportAvailability({ product }: ExportAvailabilityProps) {
  return (
    <section
      id="export-availability"
      aria-label="Export Availability"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
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
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Export Availability</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Ready for <span className="text-[#1B4332]">Global Shipment</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Flexible shipping options with competitive lead times and full documentation support.
          </p>
        </motion.div>

        {/* ── Key Specs Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { icon: "📦", label: "MOQ", value: product.specifications.moq },
            { icon: "🏷️", label: "Export Grade", value: product.specifications.exportGrade },
            { icon: "📊", label: "Supply Capacity", value: product.specifications.supplyCapacity },
            { icon: "📋", label: "Packaging", value: product.specifications.packaging },
          ].map((spec, i) => (
            <motion.div
              key={spec.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] group"
            >
              <span className="text-2xl mb-3 block" aria-hidden="true">{spec.icon}</span>
              <p className="text-[10px] font-bold text-[#D4A017] uppercase tracking-[0.15em] mb-1">{spec.label}</p>
              <p className="text-sm font-semibold text-[#111827] leading-snug">{spec.value}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Shipping Details ── */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Ports */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-lg">🚢</div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">Export Ports</h3>
                <p className="text-[11px] text-gray-400">Multi-port strategy for flexible routing</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { port: "Chennai Port", route: "Southeast Asia, US East Coast", transit: "7–14 days" },
                { port: "Tuticorin / VOC Port", route: "Middle East, Europe", transit: "5–10 days" },
                { port: "Nhava Sheva / JNPT", route: "Europe, Africa, Americas, Australia", transit: "20–30 days" },
              ].map((item) => (
                <div key={item.port} className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-xl border border-gray-100">
                  <div>
                    <p className="text-xs font-bold text-[#111827]">{item.port}</p>
                    <p className="text-[10px] text-gray-500">{item.route}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#1B4332] bg-[#1B4332]/6 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {item.transit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Incoterms */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-lg">📋</div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">Shipping Terms</h3>
                <p className="text-[11px] text-gray-400">Flexible incoterms to match your needs</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { term: "FOB", name: "Free On Board", desc: "We handle origin costs, you arrange shipping" },
                { term: "CIF", name: "Cost, Insurance & Freight", desc: "We manage everything to your destination port" },
                { term: "CFR", name: "Cost & Freight", desc: "Freight included, insurance handled by buyer" },
                { term: "LCL", name: "Less than Container Load", desc: "Consolidated shipping for smaller orders" },
              ].map((item) => (
                <div key={item.term} className="flex items-start gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-gray-100">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[10px] font-bold text-[#D4A017]">{item.term}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#111827]">{item.name}</p>
                    <p className="text-[10px] text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Shipping Destinations Quick List ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-[#1B4332]/10 bg-white overflow-hidden"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#E5E7EB]">
            {[
              { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain" },
              { region: "Europe", countries: "Germany, Netherlands, UK" },
              { region: "North America", countries: "USA, Canada" },
              { region: "Asia-Pacific", countries: "Singapore, Malaysia, Australia, New Zealand" },
            ].map((dest) => (
              <div key={dest.region} className="p-5 text-center hover:bg-[#1B4332]/[0.02] transition-colors">
                <p className="text-sm font-bold text-[#1B4332]">{dest.region}</p>
                <p className="text-[10px] text-gray-500 mt-1 leading-snug">{dest.countries}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
