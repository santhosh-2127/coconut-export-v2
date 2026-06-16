"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── SVG icon components ─────────────────────────────────────────────── */

function FarmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2V20h12v-2.8c1.8-1.5 3-3.7 3-6.2 0-4.5-4.5-8-9-8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-8m3 8v-5" />
    </svg>
  );
}

function QualityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.702 3.142 3.745 3.745 0 01-3.142.702 3.745 3.745 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.142-.702 3.745 3.745 0 01-.702-3.142A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.702-3.142 3.745 3.745 0 013.142-.702A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.142.702 3.745 3.745 0 01.702 3.142A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

function DocsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function LogisticsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

/* ─── Pillar Data ─────────────────────────────────────────────────────── */
const pillars = [
  {
    id: "sourcing",
    title: "Direct Farm Sourcing",
    description:
      "We source directly from 200+ partner farms across Tamil Nadu — no middlemen, no markups. Every batch is traceable from harvest to your port.",
    value: "Better pricing, consistent quality, and full supply chain transparency.",
    Icon: FarmIcon,
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description:
      "ISO 22000 & HACCP certified with four-stage inspection. Every shipment is graded, lab-tested, and verified before loading.",
    value: "Zero quality surprises. Documentation-backed compliance for customs clearance.",
    Icon: QualityIcon,
  },
  {
    id: "docs",
    title: "Export Documentation",
    description:
      "We handle all export paperwork in-house — Certificate of Origin, Phytosanitary, Bill of Lading, and customs clearance.",
    value: "No documentation delays or errors. Your shipment moves without holdups.",
    Icon: DocsIcon,
  },
  {
    id: "logistics",
    title: "Reliable Logistics",
    description:
      "Multi-port strategy from Chennai, Tuticorin, and Nhava Sheva. FOB, CIF, and CFR terms with real-time container tracking.",
    value: "On-time delivery, flexible terms, and end-to-end shipment visibility.",
    Icon: LogisticsIcon,
  },
];

/* ─── Pillar Card ──────────────────────────────────────────────────────── */
function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] flex flex-col"
    >
      <div className="relative flex flex-col h-full p-6">
        {/* ── Icon ── */}
        <div className="flex items-center justify-center w-10 h-10 border border-[#D4A017]/25 bg-[#D4A017]/5 rounded-lg mb-5 text-[#D4A017] group-hover:bg-[#D4A017]/10 transition-colors duration-300">
          <pillar.Icon className="w-5 h-5" />
        </div>

        {/* ── Headline ── */}
        <h3 className="text-base font-bold text-[#111827] leading-tight mb-2.5">
          {pillar.title}
        </h3>

        {/* ── 2-line explanation ── */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {pillar.description}
        </p>

        {/* ── Business value statement ── */}
        <div className="mt-auto pt-3.5 border-t border-[#D4A017]/15">
          <div className="flex items-start gap-2">
            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#D4A017]/10 flex items-center justify-center mt-0.5">
              <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 text-[#D4A017]">
                <path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[12px] text-[#1B4332] font-semibold leading-snug">
              {pillar.value}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function WhyBuyersChoose() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const cardWidth = el.scrollWidth / pillars.length;
    const newIndex = Math.round(scrollPos / cardWidth);
    setActiveMobileIndex(newIndex);
  }, []);

  return (
    <section
      id="why-choose-us"
      aria-label="Why Buyers Choose Us"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
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
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Why Buyers Choose Us
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Built for Buyer{" "}
            <span className="text-[#D4A017]">Confidence</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            International buyers trust us for consistent quality, reliable logistics, and end-to-end export expertise.
          </p>
        </motion.div>

        {/* ── Mobile: Swipeable carousel ── */}
        <div className="md:hidden -mx-6">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-2 gap-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="w-[calc(100vw-32px)] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-center w-10 h-10 border border-[#D4A017]/25 bg-[#D4A017]/5 rounded-lg mb-5 text-[#D4A017]">
                    <pillar.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] leading-tight mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="mt-auto pt-3.5 border-t border-[#D4A017]/15">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#D4A017]/10 flex items-center justify-center mt-0.5">
                        <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 text-[#D4A017]">
                          <path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="text-[12px] text-[#1B4332] font-semibold leading-snug">
                        {pillar.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {pillars.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / pillars.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeMobileIndex
                    ? "w-6 h-1.5 bg-[#D4A017]"
                    : "w-1.5 h-1.5 bg-[#1B4332]/20 hover:bg-[#1B4332]/40"
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop / Tablet: Pillars Grid ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
