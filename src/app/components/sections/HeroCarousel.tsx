"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    theme: "Fresh Brown Coconut Export",
    headline: "Premium Export Quality Fresh Coconuts",
    subheading:
      "Supplying international markets with carefully selected export-grade coconuts from certified farms across Tamil Nadu.",
    image: "/images/products/fresh-brown-coconut/Fresh-Brown-image.png",
    cta: [
      { label: "Explore Products", href: "/products/fresh-brown-coconut", primary: false },
      { label: "Request Quote", href: "/#request-quote", primary: true },
    ],
  },
  {
    id: 2,
    theme: "Pollachi Origin",
    headline: "Sourced From The Coconut Capital Of India",
    subheading:
      "Premium coconuts from Pollachi farms trusted by global buyers for consistent quality and reliable supply.",
    image: "/images/storytelling/INQUIRY-image.png",
  },
  {
    id: 3,
    theme: "Global Export",
    headline: "Reliable Global Coconut Supply Chain",
    subheading:
      "From sourcing and processing to container loading and worldwide delivery — end-to-end export logistics managed in-house.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
  },
  {
    id: 4,
    theme: "Copra & Processed Products",
    headline: "Premium Coconut Products For Industrial Applications",
    subheading:
      "Copra, coconut derivatives and value-added export products for food processing, cosmetic, and industrial buyers.",
    image: "/images/products/copra-coconut/hero.jpg",
  },
  {
    id: 5,
    theme: "Coco Peat",
    headline: "Sustainable Coco Peat Solutions For Agriculture",
    subheading:
      "High-quality growing media for horticulture and greenhouse cultivation — eco-friendly and export-ready.",
    image: "/images/products/coco-peat/hero.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const totalSlides = slides.length;

  /**
   * Z-index strategy for flicker-free cross-fade:
   *   outgoing (prevSlide) → z: 2  stays on top, fades OUT
   *   incoming (current)   → z: 1  fades IN underneath the outgoing
   *   all others           → z: 0  hidden
   *
   * The outgoing image remains fully visible until the incoming image has
   * completely faded in — the green background is never exposed.
   */
  const getZIndex = (i: number) => {
    if (i === prevSlide) return 2;
    if (i === current) return 1;
    return 0;
  };

  const goTo = useCallback((index: number) => {
    setCurrent((c) => {
      setPrevSlide(c);
      return index;
    });
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => {
      const n = (c + 1) % totalSlides;
      setPrevSlide(c);
      return n;
    });
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((c) => {
      const n = (c - 1 + totalSlides) % totalSlides;
      setPrevSlide(c);
      return n;
    });
  }, [totalSlides]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    },
    [next, prev]
  );

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setInterval(next, 5000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, next]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-[95dvh] h-[95vh] min-h-[95dvh] min-h-[95vh] max-h-[95vh] lg:h-auto lg:min-h-screen lg:max-h-none flex items-center justify-center overflow-hidden bg-[#0C1A12] select-none"
      aria-label="Hero carousel — premium coconut export showcase"
      role="region"
    >
      {/* ── Slides — all rendered simultaneously for seamless cross-fade ── */}
      {slides.map((slide, i) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: i === current ? 1 : 0,
            scale: i === current ? 1.03 : 1.0,
          }}
          transition={{
            opacity: { duration: 1.0, ease: "easeInOut" },
            scale: { duration: 6.0, ease: "easeOut" },
          }}
          style={{ zIndex: getZIndex(i) }}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />

          {/* Dark overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/90 via-[#0C1A12]/50 to-[#0C1A12]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/80 via-transparent to-transparent" />

          {/* Bottom gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
        </motion.div>
      ))}

      {/* ── Slide content — floats above all images (z-10) ── */}
      <div className="absolute inset-0 z-10 flex items-center pt-14 sm:pt-24 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl pointer-events-auto"
          >
            {/* Theme badge */}
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <span className="block w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                {slides[current].theme}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(1.5rem,4.5vw,4rem)] text-white font-bold leading-[1.08] tracking-[-0.02em]">
              {slides[current].headline}
            </h2>

            {/* Subheading */}
            <p className="mt-3 sm:mt-5 text-[13px] sm:text-base lg:text-lg text-white/65 leading-relaxed max-w-[600px] font-medium">
              {slides[current].subheading}
            </p>

            {/* CTAs (slide 1 only) */}
            {slides[current].cta && (
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
                {slides[current].cta!.map((btn) =>
                  btn.primary ? (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-[#D4A017] text-[#0C1A12] font-bold text-xs sm:text-sm tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[#E4B42A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
                    >
                      <span className="relative z-10">{btn.label}</span>
                      <svg
                        aria-hidden="true"
                        className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  ) : (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className="group inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 sm:py-4 border border-white/20 text-white/90 font-semibold text-xs sm:text-sm tracking-[0.04em] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                    >
                      Explore Products
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Navigation Arrows ── */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-between pointer-events-none px-4 sm:px-6 lg:px-8">
        <button
          onClick={prev}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm text-white/70 hover:bg-white/[0.12] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm text-white/70 hover:bg-white/[0.12] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017]"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Pagination Dots ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017] ${
              i === current
                ? "w-8 h-2 bg-[#D4A017]"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}: ${slide.headline}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 text-white/30 text-xs font-mono tracking-wider">
        <span className="text-white/60">0{current + 1}</span> / 0{totalSlides}
      </div>
    </section>
  );
}
