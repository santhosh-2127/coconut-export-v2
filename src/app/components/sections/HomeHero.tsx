"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { trackOutboundClick } from "@/lib/analytics";

/* ─── Product background slides ──────────────────────────────────────── */
const backgroundSlides = [
  {
    image: "/images/products/fresh-brown-coconut/Fresh-Brown-image.png",
    name: "Fresh Brown Coconut",
  },
  {
    image: "/images/products/pollachi-fresh-coconut/hero.jpg",
    name: "Pollachi Fresh Coconut",
  },
  {
    image: "/images/products/copra-coconut/hero.jpg",
    name: "Copra Coconut",
  },
  {
    image: "/images/products/coco-peat/hero.jpg",
    name: "Coco Peat",
  },
];

/* ─── Animation variants ──────────────────────────────────────────────── */
const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.9 },
  },
};

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = backgroundSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  /* ─── Auto-advance every 5s, pause on hover ─────────────── */
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero — Premium Coconut Exports From India"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0C1A12]"
    >
      {/* ═══════════════════════════════════════════════════════════════
         BACKGROUND CAROUSEL: Product visuals that crossfade
         ═══════════════════════════════════════════════════════════════ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Crossfading product images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundSlides[currentSlide].image}
              alt={`${backgroundSlides[currentSlide].name} — premium coconut export product from India`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={currentSlide === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/95 via-[#0C1A12]/70 to-[#0C1A12]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-transparent to-transparent" />

        {/* Subtle diagonal grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Primary radial glow — gold from top-right */}
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />

        {/* Gold horizontal accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      {/* ── Product name badge (bottom-right) — clickable ── */}
      <div className="absolute bottom-5 sm:bottom-7 right-6 z-30">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 select-none">
          {backgroundSlides[currentSlide].name}
        </span>
      </div>

      {/* ── Pagination dots (bottom-left) — clickable ── */}
      <div className="absolute bottom-5 sm:bottom-7 left-6 z-30 flex items-center gap-2">
        {backgroundSlides.map((slide, i) => (
          <button
            key={slide.name}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-500 rounded-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-[#D4A017] ${
              i === currentSlide
                ? "w-5 h-1.5 bg-[#D4A017]/60"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Show ${slide.name} background`}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
         MAIN CONTENT
         ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* ═══ LEFT: Content ═══════════════════════════════════════ */}
            <motion.div
              variants={container}
              initial="initial"
              animate="animate"
              className="max-w-[680px]"
            >
              {/* ── Top Trust Bar — Certifications ── */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-2 mb-6 lg:mb-8"
              >
                {[
                  { label: "ISO 22000 Certified", verified: true },
                  { label: "HACCP Certified", verified: true },
                  { label: "APEDA Registered", verified: true },
                  { label: "Exporting to 15+ Countries", verified: true },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-semibold text-white/90 bg-white/[0.06] border border-white/[0.12] rounded-full"
                  >
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-[#35A853]" aria-hidden="true">
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.95 4.79l-4.5 4.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 11.7-.7L7 9.29l4.15-4.15a.5.5 0 11.7.7z" />
                    </svg>
                    {item.label}
                  </span>
                ))}
              </motion.div>

              {/* ── Headline ── */}
              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold"
              >
                <span className="block">Premium Coconut</span>
                <span className="block text-[#D4A017]">
                  Exports From India
                </span>
              </motion.h1>

              {/* ── Subheadline ── */}
              <motion.p
                variants={fadeUp}
                className="mt-3 lg:mt-5 text-[16px] sm:text-lg text-white/70 leading-relaxed max-w-[580px] font-medium"
              >                Trusted by importers, distributors and wholesalers worldwide for export-grade coconuts, copra and coco peat.
              </motion.p>

              {/* ── CTA Buttons ── */}
              <motion.div
                variants={fadeUp}
                className="mt-5 lg:mt-8 flex flex-col sm:flex-row gap-3 lg:gap-4"
              >
                <a
                  id="hero-request-quote"
                  data-tracking-id="hero-request-quote"
                  href="/#request-quote"
                  onClick={() =>
                    trackOutboundClick({ type: "request_quote", label: "Home Hero Request Quote" })
                  }
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                >
                  <span className="relative z-10">Request Export Quote</span>
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
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  id="hero-chat-whatsapp"
                  data-tracking-id="hero-chat-whatsapp"
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackOutboundClick({ type: "whatsapp", label: "Home Hero WhatsApp" })
                  }
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* ═══ RIGHT: Visual space (empty on desktop — visual is background) ═══ */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
