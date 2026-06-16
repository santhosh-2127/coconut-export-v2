"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Journey Steps with real images ─────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Farm Selection",
    description: "Premium coconuts hand-selected from 200+ certified partner farms across Tamil Nadu. Full traceability from harvest.",
    value: "Farm-direct sourcing eliminates middlemen — better pricing and quality control for your supply chain.",
    image: "/images/storytelling/Farm Sourcing2-image.png",
    alt: "Coconut farm partner selection in Tamil Nadu",
  },
  {
    number: "02",
    title: "Quality Inspection",
    description: "Four-stage inspection: maturity, size uniformity, shell integrity, and visual condition. Only Grade A passes.",
    value: "Rigorous screening means consistent product specs — zero grade surprises at your receiving dock.",
    image: "/images/storytelling/QualityControl-image.png",
    alt: "Quality inspection of coconuts at ISO certified facility",
  },
  {
    number: "03",
    title: "Processing",
    description: "ISO 22000 & HACCP certified facility — cleaning, sorting, grading, and quality testing under controlled conditions.",
    value: "Certified processing guarantees food safety compliance for hassle-free import clearance.",
    image: "/images/storytelling/processing-image.png",
    alt: "Coconut processing at ISO 22000 certified facility",
  },
  {
    number: "04",
    title: "Packaging",
    description: "Export-grade packaging tailored to destination climate — ventilated mesh bags for coconuts, compressed blocks for coco peat.",
    value: "Climate-optimised packaging ensures product arrives in the same condition it left the facility.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
    alt: "Export-ready coconut packaging for container shipment",
  },
  {
    number: "05",
    title: "Container Loading",
    description: "FCL container loading under supervision — optimal stowage, ventilation management, and container pre-inspection.",
    value: "Professional loading maximises container utilisation and minimises in-transit damage.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
    alt: "Container loading of coconut shipments at Chennai port",
  },
  {
    number: "06",
    title: "Global Delivery",
    description: "Shipping from Chennai, Tuticorin, and Nhava Sheva ports with real-time tracking. FOB, CIF, and CFR terms available.",
    value: "Multi-port logistics with full documentation — your shipment arrives on time, every time.",
    image: "/images/storytelling/DELIVERY-image.png",
    alt: "Global coconut delivery and shipping logistics",
  },
];

/* ─── Step Card ───────────────────────────────────────────────────────── */
function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#1B4332]/15 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300"
    >
      {/* ── Image ── */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-[#1B4332]">
        <Image
          src={step.image}
          alt={step.alt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Step number badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#D4A017] text-white text-[10px] font-bold shadow-sm">
            {step.number}
          </span>
        </div>

        {/* Step title overlay at bottom */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-base font-bold text-white leading-tight drop-shadow-sm">
            {step.title}
          </h3>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-4">
        {/* Short explanation */}
        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
          {step.description}
        </p>

        {/* Business value */}
        <div className="flex items-start gap-2 p-2.5 bg-[#D4A017]/5 border border-[#D4A017]/15 rounded-lg">
          <svg className="w-3.5 h-3.5 text-[#D4A017] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[11px] text-[#1B4332] font-medium leading-snug">
            {step.value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Desktop connector arrow ─────────────────────────────────────────── */
function ConnectorArrow({ direction }: { direction: "right" | "down" }) {
  if (direction === "right") {
    return (
      <div className="hidden lg:flex items-center justify-center absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="flex items-center">
          <div className="w-6 h-px bg-gradient-to-r from-[#D4A017]/30 to-[#D4A017]/50" />
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 2l4 3-4 3" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className="hidden lg:flex items-center justify-center absolute left-1/2 -bottom-[14px] -translate-x-1/2 z-10 pointer-events-none">
      <div className="flex flex-col items-center">
        <div className="h-5 w-px bg-gradient-to-b from-[#D4A017]/30 to-[#D4A017]/50" />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 3l3 4 3-4" stroke="#D4A017" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Mobile down arrow ──────────────────────────────────────────────── */
function MobileArrow() {
  return (
    <div className="flex lg:hidden justify-center py-1">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2v10M3 9l4 3 4-3" stroke="#D4A017" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function QualityJourney() {
  return (
    <section
      id="quality-journey"
      aria-label="Quality Journey — Farm to Global Delivery"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
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
              Quality Journey
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            From Farm to{" "}
            <span className="text-[#1B4332]">Your Doorstep</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Every shipment passes through our proven six-stage quality process — see exactly how we ensure freshness, consistency, and compliance.
          </p>
        </motion.div>

        {/* ── Journey Grid (3×2 on desktop, stacked on mobile) ── */}
        <div className="relative">
          {/* Desktop: 3×2 grid with arrow connectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Horizontal connectors on desktop */}
                {(i === 0 || i === 1) && <ConnectorArrow direction="right" />}
                {/* After row 1, connector down to row 2 */}
                {i === 2 && <ConnectorArrow direction="down" />}
                {(i === 3 || i === 4) && <ConnectorArrow direction="right" />}

                <StepCard step={step} index={i} />

                {/* Mobile arrow between steps */}
                {i < steps.length - 1 && <MobileArrow />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
