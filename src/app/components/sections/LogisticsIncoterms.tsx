"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

/* ─── Shipping terms data ─────────────────────────────────────────────── */

type Resp = { label: string; owner: "us" | "you" };

const shippingTerms = [
  {
    code: "FOB",
    full: "Free On Board",
    color: "#D4A017",
    accentBg: "bg-[#D4A017]/8",
    accentBorder: "border-[#D4A017]/20",
    accentText: "text-[#D4A017]",
    badgeBg: "bg-[#D4A017]",
    bestFor: "Buyers who already have a shipping partner.",
    tagline: "You control the ocean freight.",
    responsibilities: [
      { label: "Cargo preparation & loading", owner: "us" },
      { label: "Export clearance", owner: "us" },
      { label: "Ocean freight", owner: "you" },
      { label: "Marine insurance", owner: "you" },
      { label: "Destination handling", owner: "you" },
    ] as Resp[],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25-2.25M12 13.875V21M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    code: "CIF",
    full: "Cost, Insurance & Freight",
    color: "#1B4332",
    accentBg: "bg-[#1B4332]/8",
    accentBorder: "border-[#1B4332]/20",
    accentText: "text-[#1B4332]",
    badgeBg: "bg-[#1B4332]",
    bestFor: "Buyers seeking a complete shipping solution.",
    tagline: "We handle freight and insurance to your port.",
    responsibilities: [
      { label: "Cargo preparation & loading", owner: "us" },
      { label: "Export clearance", owner: "us" },
      { label: "Ocean freight", owner: "us" },
      { label: "Marine insurance", owner: "us" },
      { label: "Destination handling", owner: "you" },
    ] as Resp[],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    code: "CNF / CFR",
    full: "Cost & Freight",
    color: "#2D7D9A",
    accentBg: "bg-[#2D7D9A]/8",
    accentBorder: "border-[#2D7D9A]/20",
    accentText: "text-[#2D7D9A]",
    badgeBg: "bg-[#2D7D9A]",
    bestFor: "Buyers who want us to handle freight but arrange insurance independently.",
    tagline: "We cover freight — you choose your insurer.",
    responsibilities: [
      { label: "Cargo preparation & loading", owner: "us" },
      { label: "Export clearance", owner: "us" },
      { label: "Ocean freight", owner: "us" },
      { label: "Marine insurance", owner: "you" },
      { label: "Destination handling", owner: "you" },
    ] as Resp[],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    code: "EXW",
    full: "Ex Works",
    color: "#6B7280",
    accentBg: "bg-[#6B7280]/8",
    accentBorder: "border-[#6B7280]/20",
    accentText: "text-[#6B7280]",
    badgeBg: "bg-[#6B7280]",
    bestFor: "Buyers who prefer to manage the entire logistics process themselves.",
    tagline: "You take control from our warehouse.",
    optional: true,
    responsibilities: [
      { label: "Cargo preparation", owner: "us" },
      { label: "Export clearance", owner: "you" },
      { label: "Local pickup & loading", owner: "you" },
      { label: "Ocean freight", owner: "you" },
      { label: "Marine insurance", owner: "you" },
    ] as Resp[],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

/* ─── Responsibility row ──────────────────────────────────────────────── */
function ResponsibilityRow({
  label,
  owner,
  color,
}: {
  label: string;
  owner: "us" | "you";
  color: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-[#F3F4F6] last:border-0">
      <span className="text-[12px] text-[#6B7280] leading-snug">{label}</span>
      {owner === "us" ? (
        <span
          className="flex-shrink-0 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
          style={{ color, backgroundColor: `${color}18` }}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5" aria-hidden="true">
            <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207z" />
          </svg>
          We handle
        </span>
      ) : (
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full text-[#9CA3AF] bg-[#F3F4F6]">
          You arrange
        </span>
      )}
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────────────── */
export default function LogisticsIncoterms() {
  return (
    <section id="incoterms" aria-label="Shipping Terms" className="relative py-14 md:py-20 overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.03] blur-[120px]" />
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
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Shipping Terms</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Choose the Shipping Option{" "}
            <span className="text-[#D4A017]">That Fits Your Business</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            We support multiple international shipping arrangements based on your
            sourcing and logistics requirements.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {shippingTerms.map((term, i) => (
            <motion.article
              key={term.code}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.09)] flex flex-col"
            >
              {/* Top accent bar on hover */}
              <div
                className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${term.color}, ${term.color}55)` }}
                aria-hidden="true"
              />

              <div className="p-6 flex flex-col flex-1">

                {/* ── Card header ── */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${term.accentBg} border ${term.accentBorder} flex-shrink-0`}
                    style={{ color: term.color }}
                  >
                    {term.icon}
                  </div>
                  {term.optional && (
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6B7280] bg-[#F3F4F6] border border-[#E5E7EB] rounded-full px-2 py-0.5">
                      Optional
                    </span>
                  )}
                </div>

                {/* ── Code + full name ── */}
                <div className="mb-1">
                  <span
                    className="text-2xl font-bold leading-none tracking-tight"
                    style={{ color: term.color }}
                  >
                    {term.code}
                  </span>
                </div>
                <p className="text-[12px] text-[#6B7280] font-medium mb-1">{term.full}</p>
                <p className="text-[12px] text-[#374151] leading-snug mb-4">{term.tagline}</p>

                {/* ── Best for ── */}
                <div className={`rounded-lg px-3 py-2.5 mb-4 ${term.accentBg} border ${term.accentBorder}`}>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.18em] block mb-0.5"
                    style={{ color: term.color }}
                  >
                    Best For
                  </span>
                  <p className="text-[12px] text-[#111827] leading-snug font-medium">{term.bestFor}</p>
                </div>

                {/* ── Who handles what ── */}
                <div className="flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
                    Who handles what
                  </p>
                  <div>
                    {term.responsibilities.map((r) => (
                      <ResponsibilityRow
                        key={r.label}
                        label={r.label}
                        owner={r.owner}
                        color={term.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Legend ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-5"
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1B4332]">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-[#1B4332]" aria-hidden="true">
                <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207z" />
              </svg>
              We handle
            </span>
            <span className="text-[#9CA3AF] text-[11px]">= Global Coco Exports is responsible</span>
          </div>
          <span className="w-px h-4 bg-[#E5E7EB]" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-[#6B7280]">You arrange</span>
            <span className="text-[#9CA3AF] text-[11px]">= Buyer is responsible</span>
          </div>
        </motion.div>

        {/* ── Trust message + CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl bg-[#1B4332]/[0.04] border border-[#1B4332]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1B4332]/10 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[#111827] text-sm sm:text-base font-semibold leading-snug">
                Not sure which shipping term is right for you?
              </p>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                Our export specialists will recommend the most suitable option based
                on your destination and order volume.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                id="logistics-incoterms-discuss"
                data-tracking-id="logistics-incoterms-discuss"
                href="/#request-quote"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1B4332] text-white font-semibold text-sm tracking-[0.03em] rounded-lg transition-all duration-300 hover:bg-[#143a28] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] whitespace-nowrap"
              >
                Discuss Shipping Requirements
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                id="logistics-incoterms-consultation"
                data-tracking-id="logistics-incoterms-consultation"
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1B4332]/25 text-[#1B4332] font-semibold text-sm tracking-[0.03em] rounded-lg transition-all duration-300 hover:bg-[#1B4332]/[0.05] hover:border-[#1B4332]/40 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] whitespace-nowrap"
              >
                Request Export Consultation
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
