"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Core strengths data ─────────────────────────────────────────────── */
const strengths = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2V20h12v-2.8c1.8-1.5 3-3.7 3-6.2 0-4.5-4.5-8-9-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-8m3 8v-5" />
      </svg>
    ),
    label: "Coconut Industry Expertise",
    description:
      "10+ years in global coconut trade. Deep knowledge of coconut varieties, harvest cycles, quality grading, and market dynamics across producing regions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: "Supply Chain Knowledge",
    description:
      "End-to-end expertise from farm sourcing and post-harvest handling to container optimization, port logistics, and international shipping documentation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    label: "Export Readiness",
    description:
      "ISO 22000 & HACCP certified, APEDA registered. Established relationships with shipping lines, freight forwarders, and customs brokers across major Indian ports.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "Long-Term Partnerships",
    description:
      "Built on trust and consistency. Many buyer relationships span years — a testament to our reliability in quality, delivery, and communication.",
  },
];

/* ─── Mobile story cards ──────────────────────────────────────────────── */
const storyCards = [
  {
    title: "Our Mission",
    paragraphs: [
      "Our mission is to make international coconut procurement seamless, reliable, and transparent. We connect certified farms with global buyers through a fully managed supply chain.",
      "Every shipment we export reflects our commitment to quality, consistency, and compliance — from farm-level screening to pre-shipment verification.",
    ],
    highlight: "Seamless farm-to-port supply chain",
    icon: "🎯",
  },
  {
    title: "Our Export Focus",
    paragraphs: [
      "We specialize in bulk export of fresh brown coconuts, high-grade copra, and coco peat to importers, distributors, and industrial buyers across 15+ countries.",
      "ISO 22000 & HACCP certified, APEDA registered — our operations are built to meet international phytosanitary and quality standards for every destination market.",
    ],
    highlight: "Exporting to 15+ countries worldwide",
    icon: "🌍",
  },
  {
    title: "Our Commitment",
    paragraphs: [
      "We build long-term partnerships through consistent quality, reliable delivery, and transparent communication. Our buyer relationships span years — a testament to the trust we've earned.",
      "From documentation support to destination-specific compliance, our team ensures every shipment arrives exactly as specified, every time.",
    ],
    highlight: "90%+ repeat buyer rate",
    icon: "🤝",
  },
];

export default function AboutWhoWeAre() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / storyCards.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(Math.min(newIndex, storyCards.length - 1));
  }, []);

  return (
    <section
      id="our-story"
      aria-label="Our Story — Export Strengths"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      {/* ── Subtle background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Our Story
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            An Export Partner Built for{" "}
            <span className="text-[#D4A017]">Scale</span>
          </h2>

          {/* ── Desktop/Tablet: Info cards ── */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 text-left mt-8">
            <div className="p-6 bg-[#FAFAFA] rounded-2xl border-l-4 border-[#D4A017]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A017] mb-2 block">Our Mission</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                We bridge farm-level production and international buyers through structured sourcing, certified processing, and reliable logistics.
              </p>
            </div>
            <div className="p-6 bg-[#FAFAFA] rounded-2xl border-l-4 border-[#1B4332]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] mb-2 block">Strategic Origin</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                Headquartered in Tamil Nadu — the heart of India&apos;s coconut belt — giving us direct access to the finest raw materials and major export ports.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: Storytelling carousel ── */}
        <div className="md:hidden -mx-6 mb-10">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-2 gap-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {storyCards.map((card, i) => (
              <div
                key={card.title}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <div className="relative bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
                  {/* Deep Green title area */}
                  <div
                    className="px-6 pt-6 pb-4"
                    style={{
                      background: "linear-gradient(135deg, #1B4332 0%, #0d2d1f 100%)",
                    }}
                  >
                    {/* Progression indicator */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A017]/70">
                      {String(i + 1).padStart(2, "0")} / {String(storyCards.length).padStart(2, "0")}
                    </span>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-2xl" aria-hidden="true">{card.icon}</span>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Gold accent divider */}
                  <div className="h-[3px] bg-gradient-to-r from-[#D4A017] via-[#D4A017] to-[#D4A017]/40" aria-hidden="true" />

                  {/* White content surface */}
                  <div className="p-6 bg-white flex flex-col flex-1">
                    {card.paragraphs.map((p) => (
                      <p key={p.slice(0, 20)} className="text-gray-600 text-sm leading-relaxed mb-4 last:mb-0">
                        {p}
                      </p>
                    ))}

                    {/* Key Highlight */}
                    <div className="mt-auto pt-4 flex items-center gap-2 border-t border-[#E5E7EB]">
                      <span className="w-5 h-px bg-[#D4A017]" />
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332] font-semibold">
                        {card.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {storyCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / storyCards.length;
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
                aria-label={`Go to story card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Core strengths grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {strengths.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl p-7 transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
            >
              {/* Top gold rule */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[#111827] mb-2 leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom qualification note ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-[#1B4332]/5 border border-[#1B4332]/10">
            <span className="text-xl" aria-hidden="true">🏢</span>
            <p className="text-sm text-gray-600">
              Registered exporter under APEDA (Agricultural &amp; Processed Food
              Products Export Development Authority), Government of India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
