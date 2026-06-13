"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactFinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0C1A12 0%, #0d2d1f 40%, #0a1f16 100%)" }}
      aria-label="Ready To Discuss Your Requirements"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Gold top bar */}
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6 }} className="w-12 h-0.5 bg-[#D4A017] mx-auto mb-6" />

        {/* Pre-label */}
        <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-semibold mb-5">
          Get In Touch
        </motion.p>

        {/* Headline */}
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1]">
          Ready To Discuss Your{" "}
          <span className="text-[#D4A017]">Requirements</span>?
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-green-200/60 text-sm sm:text-base max-w-xl mx-auto">
          Our export team is ready to help you with product sourcing, pricing, logistics, and documentation.
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="/rfq"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-[#e0b52a] transition-all duration-300 shadow-lg shadow-[#D4A017]/20">
            Request Quotation
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M8 1l5 5-5 5M1 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="mailto:exports@globalcoco.com"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-white/10 transition-all duration-300">
            Contact Export Team
          </a>
        </motion.div>

        {/* Bottom stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-green-200/50">
          {[
            { value: "15+", label: "Years Exporting" },
            { value: "500+", label: "Containers Shipped" },
            { value: "24h", label: "Response Time" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-[#D4A017] font-bold">{item.value}</span>
              <span className="text-green-200/40 text-xs uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
