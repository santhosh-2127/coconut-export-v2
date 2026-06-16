"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

/* ─── Background slides ──────────────────────────────────────────────── */
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

/* ─── Mobile Background Carousel ────────────────────────────────────── */
function MobileBackgroundCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % backgroundSlides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + backgroundSlides.length) % backgroundSlides.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    intervalRef.current = setInterval(next, 5000);
  };

  return (
    <div
      className="absolute inset-0 lg:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundSlides[index].image}
            alt={`${backgroundSlides[index].name} — premium coconut export product`}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A12]/70 via-[#0C1A12]/50 to-[#0C1A12]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {backgroundSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-1.5 bg-[#D4A017]"
                : "w-1.5 h-1.5 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Trust indicators ────────────────────────────────────────────────── */
const trustIndicators = [
  { label: "Export Ready" },
  { label: "Quality Assured" },
  { label: "Global Supply Network" },
  { label: "Commercial Scale Support" },
];

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section
      id="about-hero"
      aria-label="About — Building Global Supply Relationships"
      className="relative min-h-screen min-h-[100dvh] lg:min-h-[80vh] max-h-screen max-h-[100dvh] lg:max-h-none flex items-center overflow-hidden bg-[#0C1A12]"
    >
      {/* Mobile background carousel */}
      <MobileBackgroundCarousel />

      {/* ═══════════════════════════════════════════════════════════════
         BACKGROUND: layered depth (same as homepage Hero)
         ═══════════════════════════════════════════════════════════════ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A12] via-[#0F2218] to-[#162A1D]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.30] blur-[140px]" />
        <div className="absolute top-[30%] right-[-20%] w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/80 via-transparent to-[#0C1A12]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full overflow-y-auto max-h-[100dvh] lg:max-h-none lg:overflow-visible">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 md:py-0 lg:min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* ═══ LEFT: Content — 3/5 cols ════════════════════ */}
            <motion.div
              variants={container}
              initial="initial"
              animate="animate"
              className="lg:col-span-3 max-w-[680px]"
            >
              {/* ── Premium Badge ── */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 mb-8"
              >
                <span className="block w-8 h-px bg-[#D4A017]" />
                <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                  About Global Coco Exports
                </span>
                <span className="block w-8 h-px bg-[#D4A017]/50" />
              </motion.div>

              {/* ── Heading — direct, buyer-focused ── */}
              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold"
              >
                <span className="block max-w-4xl">Trusted Coconut Export Partner</span>
                <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[#D4A017] mt-1">
                  From India
                </span>
              </motion.h1>

              {/* ── Description ── */}
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[620px] font-medium"
              >
                Global Coco Exports specializes in sourcing, processing, and exporting premium coconut products to international buyers. From farm sourcing and quality assurance to packaging and global logistics, we support importers, distributors, wholesalers, and industrial buyers with dependable export solutions.
              </motion.p>

              {/* ── Product trust line ── */}
              <motion.p
                variants={fadeUp}
                className="mt-5 text-[13px] text-white/45 leading-relaxed max-w-[600px]"
              >
                Supplying Fresh Brown Coconuts, Pollachi Coconuts, Copra, and Coco Peat to international markets with a focus on quality, consistency, and reliable export operations.
              </motion.p>

              {/* ── Trust indicator pills ── */}
              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-wrap gap-2"
              >
                {trustIndicators.map((indicator) => (
                  <span
                    key={indicator.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                  >
                    <span className="text-[#D4A017] text-xs">✓</span>
                    {indicator.label}
                  </span>
                ))}
              </motion.div>

              {/* ── CTAs ── */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  id="about-hero-request-quote"
                  data-tracking-id="about-hero-request-quote"
                  href="/#request-quote"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                >
                  <span className="relative z-10">Request Export Quotation</span>
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
                </a>

                <a
                  href="#who-we-are"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  Contact Export Team
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* ═══ RIGHT: Visual Carousel — 2/5 cols ═══════════════ */}
            <motion.div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              variants={fadeUp}
              className="lg:col-span-2 relative hidden lg:block select-none h-[480px] xl:h-[540px]"
            >
              <div className="absolute inset-0 rounded-[2px] overflow-hidden">
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
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 38vw"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-[#0C1A12]/10 to-[#0C1A12]/40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />
                <div className="absolute top-[15%] left-0 w-[2px] h-[30%] bg-gradient-to-b from-[#D4A017]/80 to-transparent" />
              </div>

              {/* ── Floating trust badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-[15%] right-[8%]"
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">
                    ISO &amp; HACCP Certified
                  </span>
                </div>
              </motion.div>

              {/* ── Floating export badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="absolute bottom-[15%] right-[18%]"
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.30)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-white text-[11px] lg:text-[13px] font-medium tracking-wide whitespace-nowrap">
                    15+ Export Markets
                  </span>
                </div>
              </motion.div>

              {/* ── Product name badge (bottom-right) ── */}
              <div className="absolute bottom-3 right-3 z-20">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/15 select-none">
                  {backgroundSlides[currentSlide].name}
                </span>
              </div>

              {/* ── Pagination dots ── */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
                {backgroundSlides.map((slide, i) => (
                  <button
                    key={slide.name}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-500 rounded-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-[#D4A017] ${
                      i === currentSlide
                        ? "w-4 h-1.5 bg-[#D4A017]/60"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Show ${slide.name} background`}
                  />
                ))}
              </div>

              <div className="absolute top-4 right-4 z-10 opacity-40">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M20 0H0M20 0v20M20 0L0 20" stroke="#D4A017" strokeWidth="1.5" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
