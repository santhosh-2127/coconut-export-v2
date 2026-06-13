"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, itemFadeUpCustom } from "@/constants/animations";

/* ─── Types ───────────────────────────────────────────────────────────── */
export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionSectionProps {
  id: string;
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  icon: string;
  faqs: FAQItem[];
  index: number;
}

/* ─── Single Accordion Item ───────────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  sectionId,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  sectionId: string;
}) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border-[#1B4332]/20 bg-white shadow-md"
          : "border-[#E5E7EB] bg-white hover:border-[#D4A017]/30 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4A017] rounded-2xl"
        aria-expanded={isOpen}
        aria-controls={`faq-${sectionId}-answer-${index}`}
      >
        <div className="flex items-start gap-4">
          {/* Index number */}
          <span
            className={`text-[11px] font-bold tabular-nums mt-0.5 transition-colors duration-300 ${
              isOpen ? "text-[#D4A017]" : "text-[#9CA3AF]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
              isOpen ? "text-[#111827]" : "text-[#374151]"
            }`}
          >
            {question}
          </span>
        </div>

        {/* Chevron icon */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#1B4332] text-white rotate-180"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-${sectionId}-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="flex gap-4">
                {/* Vertical gold accent */}
                <div className="w-px bg-gradient-to-b from-[#D4A017]/60 to-transparent flex-shrink-0 ml-5" />
                <div className="text-sm text-gray-500 leading-relaxed pr-4">
                  {answer}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Section Component ───────────────────────────────────────────────── */
export default function FAQAccordionSection({
  id,
  headingPrefix,
  headingHighlight,
  subtitle,
  icon,
  faqs,
  index,
}: FAQAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id={id}
      aria-label={`${headingPrefix} ${headingHighlight} — Frequently Asked Questions`}
      className={`relative py-12 md:py-14 overflow-hidden ${
        index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
      }`}
    >
      {/* ── Subtle background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className={`absolute ${
            index % 2 === 0 ? "bottom-0 left-0" : "top-0 right-0"
          } w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.03] blur-[100px]`}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <span className="text-2xl" aria-hidden="true">
              {icon}
            </span>
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              {headingPrefix}
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            {headingPrefix}{" "}
            <span className="text-[#D4A017]">{headingHighlight}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemFadeUpCustom}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                index={i}
                sectionId={id}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
