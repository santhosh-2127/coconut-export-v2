"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Animation variants ──────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

/* ─── Trust highlights ────────────────────────────────────────────────── */
const trustHighlights = [
  { label: "Export-Focused Operations" },
  { label: "Quality-Driven Sourcing" },
  { label: "Global Trade Support" },
];

/* ─── Component ───────────────────────────────────────────────────────── */
export default function HomeAbout() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about-preview"
      ref={ref}
      aria-label="About Global Coco Exports"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d2d1f 0%, #0a1f16 50%, #0C1A12 100%)",
      }}
    >
      {/* ── Subtle top separator line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.25) 40%, rgba(212,160,23,0.25) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Background glow accents ── */}
      <div
        className="pointer-events-none absolute -top-40 left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: "#D4A017" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[-5%] w-[500px] h-[400px] rounded-full opacity-[0.12] blur-[100px]"
        style={{ background: "#1B4332" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* ══════════════════════════════════════════
              LEFT: Content
          ══════════════════════════════════════════ */}
          <div>
            {/* Section eyebrow */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="block w-8 h-px bg-[#D4A017]" aria-hidden="true" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                Who We Are
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" aria-hidden="true" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold text-white leading-[1.1] tracking-[-0.02em]"
            >
              About{" "}
              <span className="text-[#D4A017]">Global Coco Exports</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-2 text-[15px] text-white/50 font-medium tracking-wide"
            >
              Premium Coconut Export Partner from India
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-5 text-[15px] sm:text-base text-white/65 leading-relaxed"
            >
              Global Coco Exports specializes in sourcing and exporting
              premium-quality coconuts and coconut products to international
              buyers. We focus on quality, consistency, reliable logistics, and
              long-term business partnerships — supporting importers,
              distributors, wholesalers, and commercial procurement teams
              worldwide.
            </motion.p>

            {/* Trust highlight badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-6 flex flex-wrap gap-2"
            >
              {trustHighlights.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/75 bg-white/[0.05] border border-white/[0.1] rounded-full"
                >
                  <span className="text-[#D4A017] text-[10px] leading-none" aria-hidden="true">
                    ✓
                  </span>
                  {item.label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-8"
            >
              <a
                href="/about"
                id="home-about-learn-more"
                data-tracking-id="home-about-learn-more"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
              >
                <span className="relative z-10">Learn More About Us</span>
                <svg
                  aria-hidden="true"
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Shine on hover */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════
              RIGHT: Image
          ══════════════════════════════════════════ */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full aspect-[4/3] lg:aspect-[3/2] xl:aspect-[4/3] rounded-[2px] overflow-hidden order-first lg:order-last"
          >
            {/* Main image */}
            <Image
              src="/images/storytelling/Farm Sourcing2-image.png"
              alt="Global Coco Exports — coconut farm sourcing and export operations in Tamil Nadu, India"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority={false}
            />

            {/* Dark scrim for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/30 via-transparent to-transparent" />

            {/* Gold left accent line */}
            <div
              className="absolute top-[12%] left-0 w-[2px] h-[28%] bg-gradient-to-b from-[#D4A017]/80 to-transparent"
              aria-hidden="true"
            />

            {/* Floating origin badge */}
            <div className="absolute bottom-5 left-5 z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg backdrop-blur-xl bg-[#0C1A12]/70 border border-white/[0.12] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <span className="text-base leading-none" aria-label="India" role="img">🇮🇳</span>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-[0.15em] font-medium leading-none mb-0.5">
                    Origin
                  </p>
                  <p className="text-white text-[12px] font-semibold leading-none">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner bracket */}
            <div className="absolute top-4 right-4 z-10 opacity-35" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M20 0H0M20 0v20" stroke="#D4A017" strokeWidth="1.5" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Subtle bottom separator line ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.06) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
