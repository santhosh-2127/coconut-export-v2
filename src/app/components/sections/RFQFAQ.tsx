"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, itemFadeUpCustom } from "@/constants/animations";

/* ─── FAQ data ────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "How soon will I receive a quotation?",
    answer:
      "Our export team reviews all RFQ submissions within 24 business hours. You can expect a detailed commercial quotation — including product pricing, shipping costs, and delivery timelines — within one to two business days. Complex or multi-product enquiries may require additional time for accurate pricing, and we will keep you informed throughout the process.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantities vary by product. For Fresh Brown Coconuts and Pollachi Fresh Coconuts, the typical MOQ is 1 × 20ft FCL (approximately 24,000–25,000 nuts). For Copra, the MOQ is 1 × 20ft FCL (≈18 MT). For Coco Peat, the MOQ is 1 × 20ft FCL (≈500 blocks). We can accommodate smaller trial orders or LCL shipments on a case-by-case basis for qualified new buyers. Contact our team to discuss your specific volume requirements.",
  },
  {
    question: "Can you support international shipping?",
    answer:
      "Yes. We ship to ports worldwide from three major Indian port corridors — Chennai, Tuticorin (VOC Port), and Nhava Sheva (JNPT). Our logistics team handles all aspects of international shipping: container booking, freight negotiation, customs clearance, and documentation. We work with leading shipping lines to offer competitive freight rates across the Middle East, Europe, the Americas, Africa, and Asia-Pacific regions. We can ship under FOB, CIF, or CFR incoterms based on your preference.",
  },
  {
    question: "Can you provide technical specifications?",
    answer:
      "Absolutely. Every quotation includes detailed product specifications tailored to your requirements. Our technical datasheets cover: product grade classification, size and weight ranges, moisture content, oil yield (for copra), expansion ratio (for coco peat), packaging configurations, shelf life estimates, and storage recommendations. We can also provide laboratory test reports, nutritional analysis, and food safety documentation upon request.",
  },
  {
    question: "Can you provide export documentation?",
    answer:
      "Yes. We provide complete export documentation for every shipment, including: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, Health Certificate, Fumigation Certificate (as required), and any destination-specific customs documentation. Our documentation team ensures all paperwork complies with both Indian export regulations and your destination country's import requirements.",
  },
  {
    question: "Do you offer product samples before bulk orders?",
    answer:
      "Yes, we can arrange product samples for serious buyers. Samples are available for all our product categories and can be shipped via international courier to your business address. Sample costs and shipping charges may apply, which are typically deducted from the first bulk order. Contact our team to request samples for your quality evaluation.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "We accept multiple payment methods structured for international trade. The most common options are: Letter of Credit (LC) — irrevocable, confirmed LC at sight from a major bank; Telegraphic Transfer (TT) — advance payment or partial advance with balance against shipping documents; and Document Against Payment (DP) — for established buyer relationships. Payment terms are negotiated based on the incoterm selected, order volume, and buyer history. Our team can structure terms that align with your trade finance preferences and risk management requirements.",
  },
  {
    question: "Can I place trial orders before committing to full container loads?",
    answer:
      "Yes, we accommodate trial orders for qualified new buyers. Trial orders can be arranged as LCL (Less than Container Load) consolidated shipments or smaller palletized quantities, depending on the product category. For Fresh Brown Coconuts and Pollachi Coconuts, we can arrange sample quantities via air freight or courier for product evaluation. For Copra and Coco Peat, LCL shipments are available. Volume pricing for trial orders is structured transparently, and we provide a clear cost comparison against FCL pricing so you can plan your scale-up with full cost visibility.",
  },
  {
    question: "Do you offer credit terms for established buyers?",
    answer:
      "Yes, credit terms are available for buyers with established trading history and verified business credentials. Options include: 30–60 day credit terms post shipment after a qualifying order history; deferred LC terms with extended usance periods; and structured payment plans for long-term volume commitments. Credit terms are assessed on a case-by-case basis considering buyer profile, order volume consistency, market reputation, and trade references. Our finance team can discuss suitable arrangements during the quotation process.",
  },
  {
    question: "How are pricing adjustments handled for long-term contracts?",
    answer:
      "For long-term supply agreements, pricing is typically structured with defined validity periods (30–90 days) and quarterly or semi-annual review mechanisms tied to observable market benchmarks. Our standard approach includes: initial price valid for the agreed contract period; price adjustment formulas based on published coconut commodity indices; volume-based tier pricing with discounts for increased commitment; and force majeure provisions for extraordinary market events. We believe in transparent pricing partnerships and will walk you through the adjustment mechanism during contract discussions.",
  },
  {
    question: "Do you offer long-term supply contracts?",
    answer:
      "Yes. We offer annual and multi-year supply contracts for importers, distributors, and industrial buyers with consistent volume requirements. Long-term contracts provide: guaranteed supply allocation and priority during peak seasons; locked-in pricing with defined adjustment mechanisms; dedicated account management and priority communication; and coordinated logistics planning for just-in-time delivery schedules. Contract structures are customized to your volume projections, quality specifications, and delivery cadence. Contact our team to discuss a long-term supply partnership.",
  },
];

/* ─── Single Accordion Item ───────────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
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
        aria-controls={`rfq-faq-answer-${index}`}
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
            id={`rfq-faq-answer-${index}`}
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

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function RFQFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="rfq-faq"
      aria-label="Frequently Asked Questions — RFQ Process"
      className="relative py-20 md:py-24 overflow-hidden bg-white"
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              FAQ
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Got <span className="text-[#D4A017]">Questions?</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Find answers to common questions about our RFQ process, minimum
            order quantities, shipping, and documentation.
          </p>
        </motion.div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemFadeUpCustom}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Still have questions? ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={faqs.length}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-[#1B4332]/5 border border-[#1B4332]/10">
            <span className="text-xl" aria-hidden="true">💬</span>
            <p className="text-sm text-gray-600">
              Still have questions?{" "}
              <a
                href="mailto:info@globalcocoexports.com"
                className="text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors"
              >
                Contact our export team
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
