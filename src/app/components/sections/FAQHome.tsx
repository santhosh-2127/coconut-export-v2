"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Marquee keyframes ──────────────────────────────────────────────── */
const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

/* ─── Testimonials ────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Consistent quality and professional export support throughout the shipment process.",
    name: "Ahmed Al Mansouri",
    country: "UAE",
    role: "Importer",
  },
  {
    quote:
      "Reliable communication, quality packaging, and smooth documentation handling.",
    name: "Tan Wei Ling",
    country: "Malaysia",
    role: "Distributor",
  },
  {
    quote:
      "Excellent sourcing support and dependable shipment coordination.",
    name: "Rajesh Kumar",
    country: "Singapore",
    role: "Wholesale Buyer",
  },
  {
    quote:
      "Professional team and export-ready products that meet our procurement requirements.",
    name: "Saud Al Busaidi",
    country: "Oman",
    role: "Commercial Buyer",
  },
];

/* ─── Duplicated for seamless auto-scroll ─────────────────────────────── */
const allSlides = [...testimonials, ...testimonials];

/* ─── Testimonial card (shared between desktop & mobile) ──────────────── */
function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-6 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] hover:border-[#1B4332]/15 transition-all duration-300">
      {/* Quote icon */}
      <svg
        className="w-8 h-8 text-[#D4A017]/30 mb-3 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.358-.686-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.358-.686-2.917-1.179z" />
      </svg>

      {/* Quote */}
      <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1 italic">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
        <div className="w-9 h-9 rounded-full bg-[#1B4332]/10 flex items-center justify-center flex-shrink-0 text-[#1B4332] font-bold text-xs">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#111827] leading-tight">
            {t.name}
          </p>
          <p className="text-[11px] text-gray-400">
            {t.role} &middot; {t.country}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function FAQHome() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / testimonials.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, testimonials.length - 1));
  }, []);

  return (
    <section
      id="testimonials"
      aria-label="Buyer Testimonials"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Marquee keyframes */}
      <style>{marqueeStyle}</style>

      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Buyer Testimonials
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            What Our{" "}
            <span className="text-[#1B4332]">Buyers Say</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Feedback from importers, distributors, and commercial buyers who value quality, consistency, and export support.
          </p>
        </motion.div>

        {/* ── Desktop: Auto-scrolling marquee ── */}
        <div
          className="hidden md:block overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-5"
            style={{
              width: "fit-content",
              animation: "marquee 30s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {allSlides.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[380px]">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: Touch swipe carousel with snap scrolling ── */}
        <div className="md:hidden -mx-6">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-2 gap-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorX: "contain",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[calc(100vw-48px)] flex-shrink-0 snap-center"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / testimonials.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5 bg-[#D4A017]"
                    : "w-1.5 h-1.5 bg-[#1B4332]/20 hover:bg-[#1B4332]/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
