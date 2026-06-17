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
      className="relative h-[95dvh] h-[95vh] min-h-[95dvh] min-h-[95vh] max-h-[95vh] lg:h-auto lg:min-h-screen lg:max-h-none flex items-center justify-center overflow-hidden"
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
              <a
                href="mailto:exports@globalcoco.com"
                className="group flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#F5F0E8]/[0.06] border border-[#CA8A04]/20 hover:bg-[#CA8A04]/10 hover:border-[#CA8A04]/40 transition-all duration-300 shadow-sm shadow-black/20 min-w-0"
              >
                <div className="w-7 h-7 rounded-md bg-[#CA8A04]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="#CA8A04" strokeWidth="1.5" />
                    <path d="M2 7l8 5 8-5" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[9px] text-[#CA8A04] uppercase tracking-wider font-semibold leading-none mb-0.5">Email</p>
                  <p
                    className="text-[#F5F0E8] text-[11px] font-semibold leading-tight"
                    style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                  >
                    exports@globalcoco.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#F5F0E8]/[0.06] border border-[#CA8A04]/20 hover:bg-[#CA8A04]/10 hover:border-[#CA8A04]/40 transition-all duration-300 shadow-sm shadow-black/20 min-w-0"
              >
                <div className="w-7 h-7 rounded-md bg-[#CA8A04]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M3 3.5C3 3.5 4 2 5.5 2c.5 0 1 .3 1.3.7l1.5 2.3c.3.5.2 1.1-.2 1.5L7 7.6s.8 2 2.4 3.6S13 13 13 13l1.1-1.1c.4-.4 1-.5 1.5-.2l2.3 1.5c.4.3.7.8.7 1.3 0 1.5-1.5 2.5-1.5 2.5s-2 1-5-2S2 7 2 7 1 5 3 3.5z" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[9px] text-[#CA8A04] uppercase tracking-wider font-semibold leading-none mb-0.5">Phone</p>
                  <p
                    className="text-[#F5F0E8] text-[11px] font-semibold leading-tight"
                    style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                  >
                    +91 98765 43210
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#F5F0E8]/[0.06] border border-[#CA8A04]/20 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 transition-all duration-300 shadow-sm shadow-black/20 min-w-0"
              >
                <div className="w-7 h-7 rounded-md bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {/* Official WhatsApp icon */}
                  <svg viewBox="0 0 32 32" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 2C8.268 2 2 8.268 2 16c0 2.44.638 4.73 1.755 6.718L2 30l7.518-1.724A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.82-1.588l-.418-.248-4.462 1.023 1.058-4.332-.272-.432A11.5 11.5 0 1116 27.5zm6.34-8.622c-.347-.174-2.054-1.013-2.374-1.128-.32-.116-.553-.174-.786.174-.232.347-.9 1.128-1.103 1.36-.203.232-.406.26-.753.087-.347-.174-1.466-.54-2.793-1.722-1.032-.92-1.73-2.055-1.932-2.402-.203-.348-.022-.536.152-.71.156-.155.347-.405.521-.608.174-.202.232-.347.347-.578.116-.232.058-.435-.029-.608-.087-.174-.786-1.894-1.076-2.593-.283-.681-.57-.589-.786-.6l-.67-.01c-.232 0-.608.087-.927.434-.32.348-1.22 1.19-1.22 2.902s1.25 3.365 1.424 3.597c.174.232 2.46 3.756 5.96 5.267.833.36 1.483.575 1.99.736.836.266 1.597.228 2.199.138.671-.1 2.054-.84 2.345-1.652.29-.811.29-1.506.203-1.652-.087-.145-.32-.232-.667-.405z"
                      fill="#25D366"
                    />
                  </svg>
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[9px] text-[#CA8A04] uppercase tracking-wider font-semibold leading-none mb-0.5">WhatsApp</p>
                  <p
                    className="text-[#F5F0E8] text-[11px] font-semibold leading-tight"
                    style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                  >
                    Chat With Us
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-2 px-2.5 py-2 rounded-lg bg-[#F5F0E8]/[0.06] border border-[#CA8A04]/20 hover:bg-[#CA8A04]/10 hover:border-[#CA8A04]/40 transition-all duration-300 shadow-sm shadow-black/20 min-w-0">
                <div className="w-7 h-7 rounded-md bg-[#CA8A04]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="#CA8A04" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="10" cy="8" r="2" stroke="#CA8A04" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-[9px] text-[#CA8A04] uppercase tracking-wider font-semibold leading-none mb-0.5">Location</p>
                  <p
                    className="text-[#F5F0E8] text-[11px] font-semibold leading-tight"
                    style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                  >
                    Tamil Nadu, India
                  </p>
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
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm tracking-[0.04em] rounded-full transition-all duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
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
