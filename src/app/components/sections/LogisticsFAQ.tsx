"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, itemFadeUpCustom } from "@/constants/animations";

/* ─── FAQ data ────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: "What shipping terms do you support?",
    answer:
      "We support FOB (Free On Board), CIF (Cost, Insurance & Freight), and CFR (Cost & Freight) incoterms. The choice depends on your risk preference and logistics capability. FOB is ideal for buyers with established freight partnerships, while CIF and CFR provide a single-point logistics solution. Our team can advise on the best option for your specific requirements and destination.",
  },
  {
    question: "Can you arrange freight?",
    answer:
      "Yes, we arrange freight for CIF and CFR shipments. Our logistics team has established relationships with leading shipping lines including Maersk, MSC, CMA CGM, and COSCO, enabling us to secure competitive freight rates and reliable schedules. We handle all freight booking, container tracking, and coordination with shipping lines throughout the transit.",
  },
  {
    question: "Which ports do you export from?",
    answer:
      "We export from three major Indian port corridors: Chennai Port (East Coast) for Southeast Asia, East Asia, and US East Coast routes; Tuticorin/VOC Port (South Coast) for Middle East and European destinations; and Nhava Sheva/JNPT (West Coast) for Europe, Africa, Americas, and Australia. This multi-port strategy gives us routing flexibility to optimize transit times and freight costs for every destination.",
  },
  {
    question: "What documentation is provided?",
    answer:
      "Every shipment includes a complete documentation package: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and Phytosanitary Certificate. Additional documentation such as SGS Inspection Reports, Fumigation Certificates, Health Certificates, and Destination-Specific Certificates can be arranged upon request. All documents are reviewed for accuracy before submission.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Transit times vary by destination: Middle East ports (5–10 days from Tuticorin), Southeast Asia (7–14 days from Chennai), Europe (20–25 days from Nhava Sheva), US East Coast (20–30 days from Chennai/Nhava Sheva), and Australia (14–20 days from Chennai). Actual transit times depend on the shipping line schedule, routing, and seasonal factors. We provide estimated arrival dates at the time of quotation.",
  },
  {
    question: "Can you handle customs clearance at destination?",
    answer:
      "While our standard service covers export customs clearance in India, we can coordinate with trusted clearing agents at destination ports for import customs clearance on request. This service is available at select destinations where we have established partnerships. For other destinations, we provide complete documentation to support your customs broker in clearing the shipment efficiently.",
  },
  {
    question: "What payment terms do you accept for international shipments?",
    answer:
      "We offer standard international trade payment structures tailored to buyer preferences and risk profiles: Letter of Credit (LC) — irrevocable, confirmed at sight, widely accepted for FOB, CIF, and CFR transactions; Telegraphic Transfer (TT) — advance payment or 30% advance with 70% against shipping documents; Documents Against Payment (DP) — for established buyer relationships with proven trading history; and Structured Terms for long-term contract buyers. Payment terms are finalized during the quotation process and reflected in the commercial invoice and sales contract.",
  },
  {
    question: "What insurance coverage do you provide for cargo?",
    answer:
      "Under CIF terms, marine insurance is included covering Institute Cargo Clauses (A) — the broadest coverage available — from warehouse at origin to warehouse at destination. The insured value is typically 110% of the CIF value. For FOB and CFR shipments, insurance is arranged by the buyer. We can assist in arranging additional insurance coverage for buyers who prefer comprehensive protection beyond the standard CIF minimum. Documentation including the insurance certificate and policy schedule is provided with the shipping documents.",
  },
  {
    question: "Do you offer temperature-controlled (reefer) container options?",
    answer:
      "Yes, reefer (refrigerated) containers are available for products requiring strict temperature control during transit. This is particularly relevant for fresh coconut shipments to warmer climates or during summer months. Our reefer container specifications include: set-point temperature range of +2°C to +4°C for fresh coconuts; fresh air exchange settings configured for coconut respiration rates; pre-trip inspection (PTI) certificate provided for each reefer unit; and temperature data logging with downloadable records available for buyer review. Reefer container options should be specified at the quotation stage to ensure availability and appropriate freight rate application.",
  },
  {
    question: "Can you customize packaging for my market requirements?",
    answer:
      "Yes, packaging customization is available to meet destination market preferences, retail requirements, and branding needs. Options include: custom bag sizes — any weight from 5kg to 25kg per bag for whole coconuts; private labelling — your brand name, logo, and product information printed on bags; retail-ready packaging — smaller consumer packs with barcodes and nutritional information; special materials — jute bags, woven PP bags, or branded cartons for premium market segments; and moisture barrier options — specialized liners for high-humidity shipping routes. Custom packaging specifications should be confirmed at the order stage to allow adequate lead time for material procurement.",
  },
  {
    question: "What happens if cargo is damaged during transit?",
    answer:
      "We take every precaution to ensure cargo arrives in optimal condition — including container pre-inspection, proper stowage planning, and ventilation management. However, if damage occurs during ocean transit, the process depends on the incoterm used. Under CIF terms, the marine insurance policy covers cargo damage — buyers should file a claim with the insurance provider and notify the shipping line within the prescribed time frame (typically 3–7 days of discharge). Under FOB/CFR terms, insurance is the buyer's responsibility. In all cases, we provide supporting documentation — including pre-shipment photos, packing lists, and Bill of Lading — to assist with claim processing. We also work with our shipping line partners to investigate and resolve transit-related issues.",
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
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? "border-[#1B4332]/20 bg-white shadow-md" : "border-[#E5E7EB] bg-white hover:border-[#D4A017]/30 hover:shadow-sm"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4A017] rounded-2xl"
        aria-expanded={isOpen}
        aria-controls={`logistics-faq-answer-${index}`}
      >
        <div className="flex items-start gap-4">
          <span className={`text-[11px] font-bold tabular-nums mt-0.5 transition-colors duration-300 ${isOpen ? "text-[#D4A017]" : "text-[#9CA3AF]"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-sm font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-[#111827]" : "text-[#374151]"}`}>
            {question}
          </span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#1B4332] text-white rotate-180" : "bg-gray-100 text-gray-400"}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div key="content" id={`logistics-faq-answer-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="px-6 pb-6 pt-0">
              <div className="flex gap-4">
                <div className="w-px bg-gradient-to-b from-[#D4A017]/60 to-transparent flex-shrink-0 ml-5" />
                <div className="text-sm text-gray-500 leading-relaxed pr-4">{answer}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LogisticsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section id="logistics-faq" aria-label="Frequently Asked Questions — Logistics & Export Operations" className="relative py-14 md:py-18 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B4332]/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">FAQ</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Logistics{" "}<span className="text-[#D4A017]">FAQs</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Common questions about our shipping terms, ports, documentation, and transit times.
          </p>
        </motion.div>

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
              <AccordionItem question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => handleToggle(index)} index={index} />
            </motion.div>
          ))}
        </div>

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
              Have a specific logistics question?{" "}
              <a href="mailto:info@globalcocoexports.com" className="text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors">Contact our logistics team</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
