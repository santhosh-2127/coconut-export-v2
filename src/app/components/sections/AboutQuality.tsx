"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Quality cards ───────────────────────────────────────────────────── */
const qualityCards = [
  {
    icon: "🌴",
    title: "Controlled Sourcing",
    description:
      "Products are sourced through established supplier networks and quality-focused procurement practices.",
  },
  {
    icon: "🔍",
    title: "Quality Inspection",
    description:
      "Every shipment undergoes inspection before export preparation.",
  },
  {
    icon: "📦",
    title: "Export Packaging",
    description:
      "Products are packed according to international shipping requirements.",
  },
  {
    icon: "✅",
    title: "Export Compliance",
    description:
      "Documentation and export procedures are managed according to destination requirements.",
  },
];

export default function AboutQuality() {
  return (
    <section
      id="quality"
      aria-label="Our Quality Commitment"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Quality Assurance
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Our Quality{" "}
            <span className="text-[#1B4332]">Commitment</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Consistent quality standards maintained across sourcing, inspection, packaging, and export operations.
          </p>
        </motion.div>

        {/* ── Quality cards grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {qualityCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/25 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(27,67,50,0.08)]"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
              <div className="p-4 sm:p-5">
                <span className="block text-xl sm:text-2xl mb-2" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#111827] leading-snug mb-1.5">
                  {card.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-[#6B7280] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
