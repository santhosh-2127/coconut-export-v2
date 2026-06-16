"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { fadeUp } from "@/constants/animations";

/* ─── Benefit cards ───────────────────────────────────────────────────── */
const benefits = [
  {
    title: "Export Documentation",
    description: "We prepare the required shipping and export paperwork for every order.",
    color: "#D4A017",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Compliance Support",
    description: "Documentation is prepared according to the requirements of your destination country.",
    color: "#1B4332",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Customs Readiness",
    description: "Supporting paperwork is organized to help ensure smooth processing at customs.",
    color: "#2D7D9A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Buyer Assistance",
    description: "Our export team is available to assist with any documentation-related questions.",
    color: "#4A9E6B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

/* ─── Main section ────────────────────────────────────────────────────── */
export default function LogisticsDocs() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / benefits.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, benefits.length - 1));
  }, []);

  return (
    <section
      id="export-docs"
      aria-label="Export Documentation Support"
      className="relative py-14 md:py-20 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Documentation</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            We Handle{" "}
            <span className="text-[#D4A017]">Export Documentation</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Our team prepares and manages the required export documentation to help
            ensure smooth international shipments.
          </p>
        </motion.div>

        {/* ── Mobile: Swipeable carousel ── */}
        <div className="sm:hidden -mx-6">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-2 gap-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <div className="relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
                  {/* Gold top accent bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#D4A017] to-[#D4A017]/40"
                    aria-hidden="true"
                  />

                  {/* DOC badge — document-style corner indicator */}
                  <span
                    className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-md select-none"
                    style={{
                      color: "#1B4332",
                      backgroundColor: "rgba(27,67,50,0.08)",
                    }}
                    aria-hidden="true"
                  >
                    DOC
                  </span>

                  <div className="p-6 flex flex-col flex-1 pt-7">
                    {/* Deep Green icon container */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        color: "#1B4332",
                        backgroundColor: "rgba(27,67,50,0.1)",
                      }}
                    >
                      {benefit.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-[#111827] text-base leading-snug mb-2">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {benefits.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / benefits.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5"
                    : "w-1.5 h-1.5 hover:opacity-50"
                }`}
                style={{
                  backgroundColor: i === activeMobileIndex ? "#D4A017" : "rgba(27,67,50,0.25)",
                }}
                aria-label={`Go to documentation step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Grid — unchanged ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              {/* Top accent bar — reveals on hover */}
              <div
                className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{
                  background: `linear-gradient(90deg, ${benefit.color}, ${benefit.color}55)`,
                }}
                aria-hidden="true"
              />

              <div className="p-6 lg:p-7">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-colors duration-300"
                  style={{
                    color: benefit.color,
                    backgroundColor: `${benefit.color}10`,
                    borderColor: `${benefit.color}20`,
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#111827] text-base leading-snug mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Trust message ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-start sm:items-center gap-3 px-6 py-4 rounded-2xl bg-[#1B4332]/[0.04] border border-[#1B4332]/10">
            <span className="flex-shrink-0 text-[#1B4332] mt-0.5 sm:mt-0" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </span>
            <p className="text-sm text-[#374151] leading-relaxed text-left sm:text-center">
              Need destination-specific documentation support?{" "}
              <a
                id="logistics-docs-contact"
                data-tracking-id="logistics-docs-contact"
                href="/contact"
                className="font-semibold text-[#1B4332] underline underline-offset-4 hover:text-[#D4A017] transition-colors"
              >
                Our export team will guide you through the requirements.
              </a>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
