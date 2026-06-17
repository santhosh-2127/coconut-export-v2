"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import type { Product } from "@/types";

/* ─── Animation variants ──────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ─── Static key highlights ──────────────────────────────────────────── */
const KEY_HIGHLIGHTS = [
  "Export Quality",
  "Reliable Supply",
  "Multiple Applications",
  "International Trade Ready",
];

export default function ProductOverview({ product }: { product: Product }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  /* Image to display — prefer closeUp, fall back to hero */
  const displayImage = product.images.closeUp ?? product.images.hero;

  return (
    <section
      id="product-overview"
      ref={ref}
      aria-label={`About ${product.name}`}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F7F4EE 0%, #F0EBE0 50%, #EDE8DC 100%)" }}
    >
      {/* ── Top accent border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #1B4332 20%, #1B4332 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Subtle background texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B4332 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* ── Soft glow orbs ── */}
      <div
        className="pointer-events-none absolute -top-24 right-[-8%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: "rgba(212,160,23,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-5%] w-[350px] h-[300px] rounded-full blur-[90px]"
        style={{ background: "rgba(27,67,50,0.06)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">

          {/* ════════════════════════════════════════
              LEFT: Content
          ════════════════════════════════════════ */}
          <div>
            {/* Eyebrow */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="block w-6 h-px bg-[#1B4332]" aria-hidden="true" />
              <span className="text-[#1B4332] text-[11px] font-bold uppercase tracking-[0.24em]">
                About This Product
              </span>
              <span className="block w-6 h-px bg-[#1B4332]/40" aria-hidden="true" />
            </motion.div>

            {/* Product name */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#111827]"
            >
              {product.name}
            </motion.h2>

            {/* Subtitle / short definition */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-1.5 text-[14px] font-semibold text-[#D4A017] uppercase tracking-[0.1em]"
            >
              {product.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-5 text-[15px] sm:text-base text-[#374151] leading-relaxed"
            >
              {product.description}
            </motion.p>

            {/* Export benefits — up to 2 most relevant */}
            {product.exportBenefits.length > 0 && (
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {product.exportBenefits.slice(0, 4).map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5E7EB]"
                    style={{ boxShadow: "0 1px 4px rgba(27,67,50,0.06)" }}
                  >
                    <span className="text-xl leading-none flex-shrink-0 mt-0.5" aria-hidden="true">
                      {benefit.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#111827] leading-tight">
                        {benefit.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#6B7280] leading-snug line-clamp-2">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Key highlight badges */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-5 flex flex-wrap gap-2"
            >
              {KEY_HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#1B4332] bg-[#1B4332]/[0.08] border border-[#1B4332]/[0.14]"
                >
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    className="w-3 h-3 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="#1B4332"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Quick spec strip */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-6 grid grid-cols-2 gap-2.5"
            >
              {[
                { label: "Export Grade", value: product.specifications.exportGrade },
                { label: "Min. Order", value: product.specifications.moq },
                { label: "Supply Capacity", value: product.specifications.supplyCapacity },
                { label: "Packaging", value: product.specifications.packaging },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="px-3.5 py-3 rounded-xl bg-white border border-[#E5E7EB]"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <p className="text-[10px] text-[#9CA3AF] uppercase tracking-[0.14em] font-medium leading-none mb-1">
                    {spec.label}
                  </p>
                  <p className="text-[13px] font-semibold text-[#111827] leading-snug">
                    {spec.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#specs"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1B4332] text-white font-bold text-sm tracking-[0.04em] rounded-none transition-all duration-300 hover:bg-[#143a28] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
              >
                View Specifications
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/#request-quote"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
              >
                Request Quote
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════
              RIGHT: Product image card
          ════════════════════════════════════════ */}
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-first lg:order-last"
          >
            {/* Outer card wrapper */}
            <div
              className="relative rounded-2xl overflow-hidden bg-white"
              style={{
                boxShadow:
                  "0 4px 6px rgba(0,0,0,0.04), 0 20px 50px rgba(27,67,50,0.12), 0 0 0 1px rgba(27,67,50,0.07)",
              }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
                <Image
                  src={displayImage.src}
                  alt={displayImage.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
                {/* Subtle bottom scrim so the badge sits on a readable surface */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Export grade ribbon — top-left */}
              <div
                className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(27,67,50,0.88)", backdropFilter: "blur(8px)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D4A017]"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {product.specifications.exportGrade.split("—")[0].trim()}
                </span>
              </div>

              {/* Category pill — top-right */}
              <div
                className="absolute top-4 right-4 z-10 inline-flex items-center px-3 py-1.5 rounded-full"
                style={{ background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.35)", backdropFilter: "blur(8px)" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A017]">
                  {product.category}
                </span>
              </div>

              {/* Bottom info bar */}
              <div className="relative px-5 py-4 bg-white border-t border-[#F3F4F6]">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.certifications.slice(0, 3).map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold text-[#1B4332] bg-[#1B4332]/[0.07] border border-[#1B4332]/[0.12]"
                      >
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          className="w-2.5 h-2.5 flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 5l2 2 4-4"
                            stroke="#1B4332"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {cert}
                      </span>
                    ))}
                  </div>
                  {/* Supply capacity */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-[9px] text-[#9CA3AF] uppercase tracking-[0.14em] font-medium leading-none mb-0.5">
                      Supply Capacity
                    </p>
                    <p className="text-[13px] font-bold text-[#111827] leading-none">
                      {product.specifications.supplyCapacity}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative offset shadow block */}
            <div
              className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl -z-10 pointer-events-none hidden lg:block"
              style={{
                background: "linear-gradient(135deg, #1B4332 0%, #0d2d1f 100%)",
                opacity: 0.07,
              }}
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>

      {/* ── Bottom accent border ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(27,67,50,0.15) 30%, rgba(27,67,50,0.15) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
