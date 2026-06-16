"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/types";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Props ───────────────────────────────────────────────────────────── */
interface ProductFAQProps {
  product: Product;
}

/* ─── Accordion Item ──────────────────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
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
          {question}
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
              <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductFAQ({ product }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: `What is the quality standard for ${product.name}?`,
      answer: `${product.name} is graded and processed under ISO 22000 & HACCP certified facilities. Each batch undergoes multi-stage inspection for size, weight, visual integrity, and product-specific parameters. Full technical specifications and lab reports are provided with every shipment.`,
    },
    {
      question: "What is the typical lead time?",
      answer: `Standard lead time is 10–14 days from order confirmation and LC/TT receipt. Urgent orders can be expedited to 7 days subject to container and product availability. Our logistics team coordinates with you to align with your preferred shipping schedule.`,
    },
    {
      question: "Can I get a sample before ordering?",
      answer: `Yes — samples of ${product.name} are available for quality evaluation. Shipped via DHL/FedEx within 3–5 business days. Sample costs are typically deducted from your first bulk order. Contact our team to arrange sampling.`,
    },
    {
      question: "What certifications are included?",
      answer: `Every shipment includes: ${product.certifications.join(", ")}. Full documentation includes Certificate of Origin, Phytosanitary Certificate, Packing List, commercial invoice, and Bill of Lading. Third-party inspection (SGS, Bureau Veritas, Intertek) available on request.`,
    },
    {
      question: "What payment terms do you accept?",
      answer: "We accept Letter of Credit (LC) at sight — preferred for first transactions, Telegraphic Transfer (TT) — 30% advance, 70% against documents for established relationships, and Documents Against Payment (DP) for verified buyers. Terms formalised in sales contract.",
    },
    {
      question: "How is the product packed for export?",
      answer: product.specifications.packaging.includes("Custom")
        ? `Standard packaging: ${product.specifications.packaging}. Custom packaging, private labelling, and branding options are available — discuss your requirements during quotation.`
        : `${product.name} is packed in ${product.specifications.packaging} designed for optimal protection during ocean transit. Custom packaging and private labelling available on request.`,
    },
  ];

  return (
    <section
      id="product-faq"
      aria-label="Product FAQ"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
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
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Product FAQs</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
            Common Questions About{" "}
            <span className="text-[#1B4332]">{product.name}</span>
          </h2>
        </motion.div>

        {/* ── FAQs ── */}
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
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
