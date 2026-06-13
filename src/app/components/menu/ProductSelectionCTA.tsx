"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { trackOutboundClick } from "@/lib/analytics";

export default function ProductSelectionCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="product-selection-cta"
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden bg-white"
      aria-label="Need help choosing the right product"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #1B4332 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A017]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* ── Pre-label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
            Expert Guidance
          </span>
          <span className="block w-8 h-px bg-[#D4A017]/50" />
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-bold text-[#111827] leading-[1.12] tracking-[-0.02em]"
        >
          Need Help Choosing The{" "}
          <span className="text-[#1B4332]">Right Product?</span>
        </motion.h2>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Our export specialists can help identify the most suitable product
          based on your market requirements, volume needs, and quality
          specifications.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/rfq"
            onClick={() =>
              trackOutboundClick({
                type: "request_quote",
                label: "Menu Page Request Quote",
              })
            }
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          >
            <span className="relative z-10">Request Quote</span>
            <svg
              aria-hidden="true"
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/contact"
            onClick={() =>
              trackOutboundClick({
                type: "schedule_consultation",
                label: "Menu Page Contact Export Team",
              })
            }
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-[#1B4332] text-[#1B4332] font-bold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-[#1B4332] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="2"
                width="13"
                height="11"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path d="M1 6h13" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M5 1v2M10 1v2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Contact Export Team
          </Link>
        </motion.div>

        {/* ── Trust signal ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-xs text-gray-400"
        >
          🔒 All enquiries handled confidentially. We respond within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
