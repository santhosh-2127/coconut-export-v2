"use client";

import { motion } from "framer-motion";

/* ─── 3 compact support cards ────────────────── */
const supportCards = [
  {
    icon: "💬",
    title: "Export Consultation",
    description:
      "Discuss sourcing, pricing, logistics, and export requirements with our specialists.",
    accent: "#D4A017",
    bgLight: "bg-[#D4A017]/5",
  },
  {
    icon: "🌍",
    title: "Global Buyer Support",
    description:
      "Assistance for importers, distributors, wholesalers, and commercial procurement teams.",
    accent: "#0D9488",
    bgLight: "bg-[#0D9488]/5",
  },
  {
    icon: "📦",
    title: "Bulk Order Assistance",
    description:
      "Guidance for large-volume sourcing, shipment planning, and export documentation.",
    accent: "#4F46E5",
    bgLight: "bg-[#4F46E5]/5",
  },
];

export default function ContactHours() {
  return (
    <section
      id="hours"
      aria-label="Export Support"
      className="relative py-14 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d2d1f 0%, #102a1e 40%, #0a1f16 100%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full opacity-10 pointer-events-none -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, #1B4332 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Availability
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Export{" "}
            <span className="text-[#D4A017]">Support</span>
          </h2>
          <p className="mt-3 text-green-200/60 text-sm md:text-base leading-relaxed">
            Dedicated assistance for international buyers at every stage.
          </p>
        </motion.div>

        {/* 3-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {supportCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className="group relative bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              {/* Gradient accent strip */}
              <div
                className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{
                  background: `linear-gradient(90deg, ${card.accent} 0%, ${card.accent}44 100%)`,
                }}
              />
              <div className="absolute top-0 inset-x-0 h-[1px] opacity-30 group-hover:opacity-0 transition-opacity duration-300"
                style={{ background: card.accent }}
              />

              <div className="p-5 flex flex-col items-start">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg ${card.bgLight} flex items-center justify-center text-lg mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-bold text-white mb-1.5"
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-green-200/50 text-xs leading-relaxed">
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
