"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

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

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

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
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0C1A12 0%, #0d2d1f 40%, #0a1f16 100%)" }}
      aria-label="Contact Hero"
    >
      {/* Background texture */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-semibold">
                Buyer Assistance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight"
            >
              Speak With Our{" "}
              <span className="text-[#D4A017]">Export Specialists</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-green-200/60 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Get assistance with pricing, logistics, documentation and export requirements — all in one place.
            </motion.p>

            {/* Contact info cards — Response Time, WhatsApp, Email, Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {/* Response Time */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                <div className="w-9 h-9 rounded-lg bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-[#D4A017]">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Response Time</p>
                  <p className="text-white text-sm font-semibold">Within 24 hours</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#25D366]">
                    <path d="M10 0C4.5 0 0 4.5 0 10c0 1.8.5 3.5 1.3 5L0 20l5.1-1.3C6.7 19.5 8.3 20 10 20c5.5 0 10-4.5 10-10S15.5 0 10 0zm4.5 14.2c-.2.5-.8 1-1.3 1.1-.3.1-.8.2-2.5-.5-1.1-.5-2.2-1.2-3-2.1-.8-.8-1.5-1.8-1.9-2.9-.5-1.2-.4-1.8-.2-2.2.2-.3.5-.6.8-.8.3-.2.5-.3.7-.3h.5c.2 0 .3 0 .5.4.2.4.6 1.5.6 1.6.1.2.1.3 0 .5-.1.2-.3.4-.4.5-.2.2-.3.3-.2.5.3.6.7 1.1 1.1 1.5.4.4.9.8 1.5 1.1.2.1.3.2.5.2.1 0 .3-.1.4-.2.1-.2.5-.6.6-.8.1-.2.3-.2.5-.1.2.1.1.2.2.3l.6.8c.2.2.3.4.3.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">WhatsApp</p>
                  <p className="text-white text-sm font-semibold">+91 98765 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                <div className="w-9 h-9 rounded-lg bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-[#D4A017]">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-white text-sm font-semibold">exports@globalcoco.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                <div className="w-9 h-9 rounded-lg bg-[#1B4332]/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-[#4ade80]">
                    <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M6 1v4M14 1v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M2 8h16" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 15h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 15h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">Business Hours</p>
                  <p className="text-white text-sm font-semibold">Mon–Sat, 9 AM – 6 PM IST</p>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                id="contact-hero-request-quote"
                data-tracking-id="contact-hero-request-quote"
                href="/#request-quote"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D4A017] text-[#0C1A12] font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-[#e0b52a] transition-all duration-300 shadow-lg shadow-[#D4A017]/20"
              >
                Request Quote
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M8 1l5 5-5 5M1 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                id="contact-hero-chat-whatsapp"
                data-tracking-id="contact-hero-chat-whatsapp"
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white/90 font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.05 2.95A9.93 9.93 0 0010 0C5.1 0 1.1 3.1.15 7.5c-.4 1.8-.2 3.7.6 5.3L0 20l7.5-2.1c1.6.8 3.4 1.1 5.5 1.1 4.9 0 9-3.5 10-8.5.5-2.5 0-5.2-1.95-7.55zm-7.05 13c-1.5 0-3-.4-4.3-1.2l-.3-.2-4.35 1.2 1.2-4.2-.2-.3c-.8-1.3-1.2-2.8-1.2-4.3 0-4.2 3.5-7.7 7.8-7.7 2.1 0 4.1.8 5.6 2.3 1.5 1.5 2.3 3.5 2.3 5.6.1 4.3-3.4 7.8-7.65 7.8zm4.3-6.1c-.2-.1-.9-.5-1.1-.5-.2-.1-.4-.1-.5.1-.2.3-.6.5-.7.6-.1.1-.3.2-.5.1-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.1 1.5 2.4 3.8 3.3s2.8.9 3.2.9c.4 0 .9-.2 1.2-.4.3-.3.4-.6.5-.7.1-.2.1-.4 0-.5-.1-.1-.1-.2-.3-.3z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right visual panel with product carousel */}
          <motion.div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Floating contact cards */}
            <div className="relative w-full aspect-[4/3]">
              {/* Product image carousel — crossfade background */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
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
                      alt={`${backgroundSlides[currentSlide].name} — premium coconut export product`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 38vw"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C1A12]/80 via-[#0d2d1f]/60 to-[#0a1f16]/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A12]/90 via-transparent to-[#0C1A12]/20" />

                {/* Product name badge (bottom-right of image) */}
                <div className="absolute bottom-2 right-2 z-20">
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/15 select-none">
                    {backgroundSlides[currentSlide].name}
                  </span>
                </div>

                {/* Pagination dots (bottom-left of image) */}
                <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1.5">
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
              </div>

              {/* Card 1 - WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[5%] right-[8%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 w-[170px] xl:w-[200px] shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-lg">💬</div>
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">WhatsApp</p>
                    <p className="text-white text-sm font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                  <span className="text-[10px] text-green-300/70">Typically replies within 2 hours</span>
                </div>
              </motion.div>

              {/* Card 2 - Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-[15%] left-[5%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 w-[180px] xl:w-[220px] shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/20 flex items-center justify-center text-lg">✉️</div>
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm font-semibold">exports@globalcoco.com</p>
                  </div>
                </div>
                <p className="text-white/40 text-[10px]">Business queries only</p>
              </motion.div>

              {/* Card 3 - 24h */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-[35%] right-[15%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-[160px] shadow-2xl"
              >
                <p className="text-[#D4A017] text-2xl font-bold">24h</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Response Time</p>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
                    className="h-full rounded-full bg-[#D4A017]"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full border border-[#D4A017]/20" />
              <div className="absolute bottom-[40%] right-[5%] w-12 h-12 rounded-full border border-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
