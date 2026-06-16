"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0C1A12 0%, #0d2d1f 40%, #0a1f16 100%)" }}
      aria-label="Contact Hero"
    >
      {/* Single responsive background image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/storytelling/SHIPMENT-image.png"
            alt="Export shipment and logistics — international coconut trade operations"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>
        {/* Deep green branded overlay for readability */}
        <div className="absolute inset-0 bg-[#0C1A12]/70" />
      </div>

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

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full py-16 md:py-0 lg:py-0">
          <div className="max-w-[680px]">
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

            {/* Contact info cards — Email, Phone, WhatsApp, Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2"
            >
              {/* Email */}
              <a href="mailto:exports@globalcoco.com"
                className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#D4A017]/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-base">📧</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-white/40 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-white text-xs font-semibold truncate">exports@globalcoco.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919876543210"
                className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#D4A017]/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#1B4332]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-base">📱</span>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider font-medium">Phone</p>
                  <p className="text-white text-xs font-semibold">+91 98765 43210</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#25D366]/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-base">💬</span>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider font-medium">WhatsApp</p>
                  <p className="text-white text-xs font-semibold">Chat With Us</p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#2D7D9A]/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#2D7D9A]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-base">📍</span>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-wider font-medium">Location</p>
                  <p className="text-white text-xs font-semibold">Tamil Nadu, India</p>
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
        </div>
      </div>
    </section>
  );
}
