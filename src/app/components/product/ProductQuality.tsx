"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Quality Stages ──────────────────────────────────────────────────── */
const stages = [
  {
    step: "01",
    title: "Farm-Level Screening",
    description: "Coconuts are inspected at source for maturity, size uniformity, and visual integrity before harvest approval.",
    icon: "🌴",
  },
  {
    step: "02",
    title: "Incoming Inspection",
    description: "Every batch is checked at our ISO 22000 facility for weight calibration, shell integrity, and grade compliance before processing.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Process Monitoring",
    description: "Critical control points monitored throughout sorting, grading, and packing — temperature, humidity, hygiene, and product integrity.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Pre-Shipment Verification",
    description: "Final container inspection including visual check, moisture testing, packaging integrity, and documentation verification before sealing.",
    icon: "✅",
  },
];

/* ─── Props ───────────────────────────────────────────────────────────── */
interface ProductQualityProps {
  name: string;
}

export default function ProductQuality({ name }: ProductQualityProps) {
  return (
    <section
      id="quality"
      aria-label="Quality Inspection"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 60px)" }} />
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
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Quality Assurance</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            How We Maintain <span className="text-[#1B4332]">Quality</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Every shipment of {name} passes through our certified quality control process — from farm to container.
          </p>
        </motion.div>

        {/* ── Quality Stages Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.step}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] group"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="p-6">
                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" aria-hidden="true">{stage.icon}</span>
                  <span className="text-[10px] font-bold text-[#D4A017] uppercase tracking-[0.15em]">{stage.step}</span>
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2">{stage.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
