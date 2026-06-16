"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/constants/animations";

const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

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

const badges = [
  { label: "Product Guides" },
  { label: "Export Documentation" },
  { label: "Quality Standards" },
  { label: "Shipping & Logistics" },
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

export default function BlogHero() {
  return (
    <section
      id="blog-hero"
      aria-label="Industry Insights & Export Knowledge"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1A12]"
    >
      {/* Mobile background carousel */}
      <MobileBackgroundCarousel />

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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 md:py-0 lg:min-h-[60vh] flex items-center">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="max-w-[800px]"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                Knowledge Center
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
              Export Knowledge
              <br />
              <span className="text-[#D4A017]">For Global Buyers</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[640px] font-medium">
              Export guides, market trends, and coconut industry insights for international buyers and importers.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                >
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
