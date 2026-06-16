"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Photo Categories — using real operational images ────────────────── */
const photoCategories = [
  {
    id: "farm",
    label: "Farm Partner Network",
    description: "200+ certified partner farms across Tamil Nadu supplying export-grade coconuts.",
    image: "/images/storytelling/Farm Sourcing2-image.png",
    alt: "Coconut farm partner network in Tamil Nadu",
    stat: "200+ Partner Farms",
  },
  {
    id: "processing",
    label: "ISO 22000 Facility",
    description: "HACCP-certified processing facility — cleaning, sorting, grading under controlled conditions.",
    image: "/images/storytelling/processing-image.png",
    alt: "ISO 22000 certified coconut processing facility",
    stat: "ISO 22000 Certified",
  },
  {
    id: "quality",
    label: "Quality Control Lab",
    description: "Four-stage quality inspection — maturity, size, shell integrity, and visual grading.",
    image: "/images/storytelling/QualityControl-image.png",
    alt: "Coconut quality control inspection at export facility",
    stat: "4 Inspection Stages",
  },
  {
    id: "packaging",
    label: "Export Packaging",
    description: "Climate-optimised packaging — ventilated bags for coconuts, compressed blocks for coco peat.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
    alt: "Export packaging of coconut products for container shipment",
    stat: "Custom Packaging",
  },
  {
    id: "loading",
    label: "Container Loading",
    description: "Supervised FCL container loading — optimal stowage, ventilation, and container pre-inspection.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
    alt: "Container loading of coconut exports at Chennai port",
    stat: "500+ Containers/Year",
  },
  {
    id: "team",
    label: "Export Team",
    description: "Experienced export professionals managing documentation, logistics, and buyer relationships.",
    image: "/images/EachPage/About-page-image.png",
    alt: "Global Coco Exports export team professionals",
    stat: "10+ Years Experience",
  },
];

/* ─── Trust Pillars ───────────────────────────────────────────────────── */
const trustPillars = [
  {
    icon: "🌍",
    title: "15+ Countries",
    desc: "Exporting across Middle East, Europe, Americas, and Asia-Pacific",
  },
  {
    icon: "✅",
    title: "4 Certifications",
    desc: "ISO 22000, HACCP, APEDA, SGS Verified — independently audited",
  },
  {
    icon: "🚢",
    title: "500+ Containers",
    desc: "Annual export volume across three Indian port corridors",
  },
  {
    icon: "🤝",
    title: "200+ Partners",
    desc: "Long-term relationships with farms, buyers, and logistics providers",
  },
];

/* ─── Photo Card ───────────────────────────────────────────────────────── */
function PhotoCard({
  category,
  index,
}: {
  category: (typeof photoCategories)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#1B4332]/20 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300"
    >
      {/* ── Image ── */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#1B4332]">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Category label overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/15 text-white text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
            {category.label}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-4">
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
          {category.description}
        </p>
        <div className="flex items-center gap-2 py-1.5 px-2.5 bg-[#1B4332]/5 border border-[#1B4332]/10 rounded-lg">
          <svg className="w-3 h-3 text-[#1B4332] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[11px] font-semibold text-[#1B4332]">
            {category.stat}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function TrustGallery() {
  return (
    <section
      id="trust"
      aria-label="Our Export Operations and Trust Indicators"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ══════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════ */}
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
              Behind the Exports
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            See How We{" "}
            <span className="text-[#1B4332]">Operate</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            From farm to container — see the facilities, processes, and people behind every export shipment.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════
            TRUST PILLARS BAR — quick stats strip
        ══════════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" }}
              className="flex items-start gap-3 p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1B4332]/15 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{pillar.icon}</span>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-[#111827] leading-tight">{pillar.title}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════════════════
            PHOTO GALLERY GRID — 3×2 on desktop
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photoCategories.map((category, i) => (
            <PhotoCard key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* ══════════════════════════════════════════════
            BOTTOM CTA — verification credibility
        ══════════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-[#E5E7EB] rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B4332]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#1B4332]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827]">
                Verify Our Credentials
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                All certifications independently audited and regularly renewed. Documentation shared with qualified buyers.
              </p>
            </div>
          </div>
          <a
            href="/certifications"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4332] text-white text-sm font-semibold rounded-xl hover:bg-[#143a28] transition-all duration-200"
          >
            View Certifications
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
