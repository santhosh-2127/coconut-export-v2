"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

/* ─── Trust indicators ────────────────────────────────────────────────── */
const trustIndicators = [
  { label: "ISO 22000 Certified" },
  { label: "HACCP Certified" },
  { label: "APEDA Registered" },
  { label: "SGS Verified" },
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

export default function CertificationsHero() {
  return (
    <section
      id="certifications-hero"
      aria-label="Certifications — Export Compliance & Quality Standards"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1A12]"
    >
      {/* Mobile background carousel */}
      <MobileBackgroundCarousel />

      {/* Desktop backgrounds */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/80 via-transparent to-[#0C1A12]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 md:py-0 lg:min-h-[70vh] flex items-center">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="max-w-[800px]"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                Regulatory Compliance
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
              <span className="block">Internationally</span>
              <span className="block text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-[#D4A017] mt-1">
                Certified & Compliant
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[640px] font-medium">
              Every shipment carries ISO 22000, HACCP, APEDA, and SGS certifications — ensuring food safety, quality compliance, and full traceability for global buyers.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
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

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/#request-quote"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
              >
                <span className="relative z-10">Request Quote</span>
                <svg aria-hidden="true" className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#certifications"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                View Certifications
                <svg aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
