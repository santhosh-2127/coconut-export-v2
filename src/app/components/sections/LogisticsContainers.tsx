"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Container data ──────────────────────────────────────────────────── */
const containerTypes = [
  {
    type: "20ft Standard Container",
    code: "20′ DC",
    dimensions: "20′ × 8′ × 8.5′",
    capacity: "~28 CBM / ~22,000 kg",
    image: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        <rect x="5" y="10" width="110" height="60" rx="2" fill="none" stroke="#1B4332" strokeWidth="1.2" />
        <line x1="45" y1="10" x2="45" y2="70" stroke="#1B4332" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="75" y1="10" x2="75" y2="70" stroke="#1B4332" strokeWidth="0.8" strokeOpacity="0.3" />
        <rect x="100" y="25" width="12" height="30" rx="1" fill="none" stroke="#D4A017" strokeWidth="0.8" />
        <text x="60" y="45" textAnchor="middle" fontSize="8" fill="#1B4332" fontWeight="600">20′</text>
        <text x="60" y="55" textAnchor="middle" fontSize="6" fill="#9CA3AF">Container</text>
      </svg>
    ),
    products: [
      { name: "Fresh Brown Coconut", qty: "~25,000 nuts" },
      { name: "Pollachi Fresh Coconut", qty: "~24,000 nuts" },
      { name: "Copra", qty: "~18 MT" },
      { name: "Coco Peat Blocks", qty: "~500 blocks" },
    ],
  },
  {
    type: "40ft Standard Container",
    code: "40′ DC",
    dimensions: "40′ × 8′ × 8.5′",
    capacity: "~58 CBM / ~26,000 kg",
    image: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        <rect x="5" y="10" width="110" height="60" rx="2" fill="none" stroke="#1B4332" strokeWidth="1.2" />
        <line x1="35" y1="10" x2="35" y2="70" stroke="#1B4332" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="60" y1="10" x2="60" y2="70" stroke="#1B4332" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="85" y1="10" x2="85" y2="70" stroke="#1B4332" strokeWidth="0.8" strokeOpacity="0.3" />
        <rect x="100" y="25" width="12" height="30" rx="1" fill="none" stroke="#D4A017" strokeWidth="0.8" />
        <text x="60" y="45" textAnchor="middle" fontSize="8" fill="#1B4332" fontWeight="600">40′</text>
        <text x="60" y="55" textAnchor="middle" fontSize="6" fill="#9CA3AF">Container</text>
      </svg>
    ),
    products: [
      { name: "Fresh Brown Coconut", qty: "~52,000 nuts" },
      { name: "High Grade Coconut", qty: "~50,000 nuts" },
      { name: "Copra", qty: "~26 MT" },
      { name: "Coco Peat Blocks", qty: "~1,050 blocks" },
    ],
  },
  {
    type: "40ft High Cube Container",
    code: "40′ HC",
    dimensions: "40′ × 8′ × 9.5′",
    capacity: "~65 CBM / ~26,500 kg",
    image: (
      <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
        <rect x="5" y="5" width="110" height="65" rx="2" fill="none" stroke="#D4A017" strokeWidth="1.2" />
        <line x1="35" y1="5" x2="35" y2="70" stroke="#D4A017" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="60" y1="5" x2="60" y2="70" stroke="#D4A017" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="85" y1="5" x2="85" y2="70" stroke="#D4A017" strokeWidth="0.8" strokeOpacity="0.3" />
        <rect x="100" y="20" width="12" height="35" rx="1" fill="none" stroke="#D4A017" strokeWidth="0.8" />
        <text x="60" y="43" textAnchor="middle" fontSize="8" fill="#D4A017" fontWeight="600">HC</text>
        <text x="60" y="53" textAnchor="middle" fontSize="6" fill="#9CA3AF">Container</text>
      </svg>
    ),
    products: [
      { name: "Coco Peat Blocks", qty: "~1,200 blocks" },
      { name: "Coco Peat Briquettes", qty: "~16,000 pcs" },
      { name: "Lightweight products", qty: "Optimal volume use" },
      { name: "Mixed product loads", qty: "Available on request" },
    ],
  },
];

export default function LogisticsContainers() {
  return (
    <section id="containers" aria-label="Container Capacity Guide" className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)"
        }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Shipping Capacity</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Container Capacity{" "}<span className="text-[#D4A017]">Guide</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Standard container specifications and product-specific loading capacities for your planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {containerTypes.map((container, i) => (
            <motion.div
              key={container.type}
              variants={fadeUp}
              initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="p-7 lg:p-8">
                {/* Container illustration */}
                <div className="h-24 mb-5 flex items-center justify-center">{container.image}</div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-base text-[#111827] leading-tight">{container.type}</h3>
                  <span className="text-[10px] font-bold tracking-widest text-[#D4A017] uppercase">{container.code}</span>
                </div>

                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Dimensions</span>
                    <span className="text-[#111827] font-medium">{container.dimensions}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Max Capacity</span>
                    <span className="text-[#111827] font-medium">{container.capacity}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A017]">Product Loading</span>
                  <ul className="mt-2 space-y-2" role="list">
                    {container.products.map((p) => (
                      <li key={p.name} className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{p.name}</span>
                        <span className="text-[#1B4332] font-semibold tabular-nums">{p.qty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#1B4332]/10 bg-[#1B4332] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {[
                { icon: "📦", title: "Flexible Configurations", desc: "Mixed product loads and LCL shipments available on request" },
                { icon: "🔍", title: "Pre-Shipment Inspection", desc: "Container pre-inspection and loading supervision included" },
                { icon: "🚢", title: "Multi-Port Flexibility", desc: "Ship from Chennai, Tuticorin, or Nhava Sheva" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 md:p-7 hover:bg-white/[0.04] transition-colors">
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
