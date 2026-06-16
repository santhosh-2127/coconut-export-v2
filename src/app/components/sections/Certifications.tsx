"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── 3 compliance cards ─────────────────────────────────────────────── */
const complianceCards = [
  {
    icon: "📋",
    title: "Export Registration",
    description: "Registered for international export operations.",
    accent: "#D4A017",
    bgLight: "bg-[#D4A017]/5",
  },
  {
    icon: "🌍",
    title: "Global Trade Compliance",
    description: "Supporting documentation and trade requirements for international shipments.",
    accent: "#1B4332",
    bgLight: "bg-[#1B4332]/5",
  },
  {
    icon: "✅",
    title: "Quality & Documentation",
    description: "Export processes aligned with buyer and destination requirements.",
    accent: "#2D7D9A",
    bgLight: "bg-[#2D7D9A]/5",
  },
];

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Export Compliance and Registration"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle top/bottom edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
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
              Export Compliance
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Export Compliance &{" "}
            <span className="text-[#D4A017]">Registration</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Operating with the registrations and compliance requirements necessary for international export operations.
          </p>
        </motion.div>

        {/* ── 3-card grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {complianceCards.map((card, i) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#1B4332]/15 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300"
            >
              {/* Gradient accent strip */}
              <div
                className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{
                  background: `linear-gradient(90deg, ${card.accent} 0%, ${card.accent}44 100%)`,
                }}
              />
              <div
                className="absolute top-0 inset-x-0 h-[1px] opacity-30 group-hover:opacity-0 transition-opacity duration-300"
                style={{ background: card.accent }}
              />

              <div className="p-5 flex flex-col items-start">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg ${card.bgLight} flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#111827] mb-1.5">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
