"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Top Buyer Questions ─────────────────────────────────────────────── */
const faqs = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "MOQ varies by product: Fresh Coconuts — 1 × 20ft FCL (≈24,000–25,000 nuts), Copra — 1 × 20ft FCL (≈18 MT), Coco Peat — 1 × 20ft FCL (≈500 blocks). Smaller trial orders can be arranged on request — contact our team to discuss your specific needs.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We export to 15+ countries across the Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), Europe (Germany, Netherlands, UK), North America (USA, Canada), Asia-Pacific (Singapore, Malaysia, Australia, New Zealand), and Africa. We support FOB, CIF, and CFR terms from Chennai, Tuticorin, and Nhava Sheva ports.",
  },
  {
    question: "How is quality verified before shipment?",
    answer:
      "Quality is verified through a four-stage process: (1) Farm-level inspection for maturity and size, (2) Incoming inspection at our ISO 22000 facility, (3) Process monitoring during sorting and packing, (4) Pre-shipment container inspection. Third-party inspection by SGS, Bureau Veritas, or Intertek is available on request.",
  },
  {
    question: "Do you provide product samples?",
    answer:
      "Yes — samples are available for all product categories and are shipped via DHL or FedEx. Sample costs are typically deducted from your first bulk order. Requests are processed within 3–5 business days. Contact our team to arrange samples for your quality evaluation.",
  },
  {
    question: "How quickly will I receive a quotation?",
    answer:
      "We respond to all inquiries within minutes. Urgent requests received before 2:00 PM IST are often quoted the same day. Detailed quotations include per-unit pricing, freight costs, and delivery timelines.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "We accept Letter of Credit (LC) at sight — preferred for first transactions, Telegraphic Transfer (TT) — 30% advance, 70% against documents for established relationships, and Documents Against Payment (DP) for verified buyers. All terms are formalised in a sales contract.",
  },
];

/* ─── Accordion Item ──────────────────────────────────────────────────── */
function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#1B4332]/20 bg-white shadow-sm"
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-[#111827] pr-4 leading-snug">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#1B4332] text-white" : "bg-gray-100 text-gray-400"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <div className="w-8 h-px bg-[#D4A017]/40 mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function FAQHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-14 md:py-18 overflow-hidden bg-white"
    >
      <div className="relative max-w-3xl mx-auto px-6">
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
              Quick Answers
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
            Common Buyer{" "}
            <span className="text-[#1B4332]">Questions</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Everything you need to know before placing your first order.
          </p>
        </motion.div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
            >
              <AccordionItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500 mb-4">
            Have a different question? Our export team is ready to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white font-semibold text-sm rounded-xl hover:bg-[#143A28] active:scale-[0.98] transition-all duration-200"
          >
            Contact Export Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
