"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/constants/animations";

/* ─── Trust badges ────────────────────────────────────────────────────── */
const trustBadges = [
  "Export-Focused Operations",
  "Quality-Driven Sourcing",
  "International Trade Support",
];

export default function AboutCompanyIntro() {
  return (
    <section
      id="who-we-are"
      aria-label="Who We Are — Company Introduction"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      {/* ── Subtle background texture ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gold glow — top-left */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#D4A017]/[0.07] blur-[120px]" />
        {/* Green glow — bottom-right */}
        <div className="absolute -bottom-24 right-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.06] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ════════════════════════════════════════════════════════════════
            TWO-COLUMN LAYOUT — desktop
            LEFT: content  |  RIGHT: image
            ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            variants={slideLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Pre-label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#D4A017]" />
              <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
                Who We Are
              </p>
              <span className="w-8 h-px bg-[#D4A017]" />
            </div>

            {/* Main white content container */}
            <div
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_40px_rgba(27,67,50,0.10)] border border-[#E5E7EB]"
            >
              {/* Section title */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight tracking-[-0.02em] mb-5">
                Global Coco Exports
              </h2>

              {/* Gold rule accent */}
              <div className="w-12 h-[3px] bg-[#D4A017] mb-6" />

              {/* Short intro */}
              <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-4">
                We are <strong className="text-[#1B4332] font-semibold">Global Coco Exports</strong> — a premium coconut export
                company headquartered in Tamil Nadu, the heart of India&apos;s coconut belt. Our strategic location gives us
                direct access to the finest raw materials and major export ports.
              </p>

              {/* Key description */}
              <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                With 10+ years in global coconut trade, we bridge farm-level production and international buyers through
                structured sourcing, certified processing, and reliable logistics — exporting fresh coconuts, copra, and
                coco peat to importers, distributors, and industrial buyers across 15+ countries.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F0E8] border border-[#D4A017]/30 rounded-full text-[12px] font-semibold text-[#1B4332] tracking-wide"
                  >
                    <span className="text-[#D4A017] text-sm font-bold">✓</span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Image panel ── */}
          <motion.div
            variants={slideRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            {/* Image wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_56px_rgba(27,67,50,0.14)] aspect-[4/3] w-full">
              <Image
                src="/images/EachPage/About-page-image.webp"
                alt="Global Coco Exports — Coconut export operations in Tamil Nadu, India"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/50 via-transparent to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-l-[3px] border-t-[3px] border-[#D4A017]/70" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-[3px] border-b-[3px] border-[#D4A017]/50" />

              {/* Floating origin badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-5 py-3.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/80">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🌴</span>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#D4A017] leading-none mb-0.5">
                    Headquartered in
                  </p>
                  <p className="text-[#1B4332] font-bold text-sm leading-tight truncate">
                    Tamil Nadu, India — Heart of the Coconut Belt
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div
              aria-hidden="true"
              className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#D4A017]/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
