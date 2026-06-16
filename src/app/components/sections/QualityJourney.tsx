"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Journey Steps with real images ─────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Farm Sourcing",
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

/* ─── Mobile Journey Carousel ──────────────────────────────────────────── */
function MobileJourneyCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Steps for mobile: Farm -> Inspection -> Processing -> Packaging -> Shipping
  const mobileSteps = [
    steps[0],
    steps[1],
    steps[2],
    steps[3],
    { ...steps[5], title: "Shipping" },
  ];

  // Track which card is active based on scroll position
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector("[data-index]");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const step = cardWidth + 20; // gap-5 = 20px
    const index = Math.round(container.scrollLeft / step);
    setActiveIndex(Math.min(index, mobileSteps.length - 1));
  }, [mobileSteps.length]);

  return (
    <div>
      {/* ── Process Step Indicator ── */}
      <div className="flex items-center justify-center gap-1 mb-5 overflow-x-auto">
        {mobileSteps.map((step, i) => (
          <span key={step.number} className="flex items-center gap-1">
            <span
              className={`text-[9px] font-bold uppercase tracking-wider whitespace-nowrap px-1.5 py-0.5 rounded transition-all duration-300 ${
                i === activeIndex
                  ? "text-[#1B4332] bg-[#1B4332]/10"
                  : i < activeIndex
                    ? "text-[#D4A017]"
                    : "text-gray-300"
              }`}
            >
              {
              i === activeIndex
                ? step.title
                : i < activeIndex
                  ? "\u2713"
                  : step.title === "Quality Inspection"
                    ? "Inspect"
                    : step.title === "Container Loading"
                      ? "Loading"
                      : step.title}
            </span>
            {i < mobileSteps.length - 1 && (
              <span className={`text-[9px] ${i < activeIndex ? "text-[#D4A017]" : "text-gray-200"}`}>
                &rarr;
              </span>
            )}
          </span>
        ))}
      </div>

      {/* ── Horizontal Swipeable Cards ── */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 px-4 gap-5"
      >
        {mobileSteps.map((step, i) => (
          <div
            key={step.number}
            data-index={i}
            className={`min-w-[calc(100vw-32px)] snap-start flex-shrink-0 bg-white rounded-xl overflow-hidden border transition-all duration-300 ${
              i === activeIndex
                ? "border-[#1B4332]/20 scale-[1.02] shadow-[0_8px_30px_rgba(27,67,50,0.10)]"
                : "border-[#E5E7EB] scale-100 shadow-sm"
            }`}
          >
            {/* ── Image ── */}
            <div className="relative h-40 overflow-hidden bg-[#1B4332]">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 426px) calc(100vw - 32px), 85vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Step number badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4A017] text-white text-xs font-bold shadow-md">
                  {step.number}
                </span>
              </div>

              {/* Step title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white leading-tight drop-shadow-md">
                  {step.title}
                </h3>
              </div>
            </div>

            {/* ── Content ── */}
            <div className="p-5">
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="flex items-start gap-2.5 p-3 bg-[#D4A017]/5 border border-[#D4A017]/15 rounded-xl">
                <svg className="w-4 h-4 text-[#D4A017] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[11px] text-[#1B4332] font-semibold leading-snug">
                  {step.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Swipe Hint ── */}
      <p className="text-center text-[11px] text-gray-400 mt-4">
        Swipe through our export journey &rarr;
      </p>
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

        {/* ── Mobile Journey Carousel (≤ 425px) ── */}
        <div className="hidden max-[425px]:block">
          <MobileJourneyCarousel />
        </div>

        {/* ── Desktop / Tablet Grid (> 425px) ── */}
        <div className="max-[425px]:hidden">
          <div className="relative">
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
      </div>
    </section>
  );
}
