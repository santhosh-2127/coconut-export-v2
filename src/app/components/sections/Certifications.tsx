"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Certification data ──────────────────────────────────────────────── */
const certifications = [
  {
    id: "iso-22000",
    label: "ISO 22000",
    title: "ISO 22000 Certified",
    description:
      "International food safety management certification demonstrating quality-controlled processes, traceability, and export-ready operations.",
    benefits: [
      "Food Safety Standards",
      "Quality Management System",
      "Export Compliance",
    ],
    accentChar: "ISO",
    watermarkText: "22000",
    badgeRing: "#D4A017",
  },
  {
    id: "haccp",
    label: "HACCP",
    title: "HACCP Certified",
    description:
      "Hazard Analysis and Critical Control Points certification ensuring preventive food safety controls throughout sourcing, handling, and export operations.",
    benefits: ["Risk Prevention", "Process Control", "Safe Product Handling"],
    accentChar: "HACCP",
    watermarkText: "HACCP",
    badgeRing: "#D4A017",
  },
  {
    id: "apeda",
    label: "APEDA",
    title: "APEDA Registered",
    description:
      "Registered with APEDA for export-oriented agricultural trade and international market participation.",
    benefits: [
      "Export Authorization",
      "Agricultural Export Support",
      "International Trade Readiness",
    ],
    accentChar: "APEDA",
    watermarkText: "APEDA",
    badgeRing: "#D4A017",
  },
  {
    id: "sgs",
    label: "SGS",
    title: "SGS Verified",
    description:
      "Independent third-party verification supporting transparency, quality assurance, and buyer confidence.",
    benefits: [
      "Third-Party Verification",
      "Quality Inspection Support",
      "Buyer Confidence",
    ],
    accentChar: "SGS",
    watermarkText: "SGS",
    badgeRing: "#D4A017",
  },
];

/* ─── Cert Badge SVG ──────────────────────────────────────────────────── */
function CertBadge({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full drop-shadow-2xl"
    >
      <defs>
        <radialGradient id={`glow-${label}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D4A017" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`shield-${label}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4332" />
          <stop offset="100%" stopColor="#0C1A12" />
        </linearGradient>
        <linearGradient id={`rim-${label}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#f5c842" />
          <stop offset="100%" stopColor="#D4A017" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <ellipse cx="100" cy="105" rx="90" ry="98" fill={`url(#glow-${label})`} />

      {/* Shield body */}
      <path
        d="M100 10 L184 44 L184 112 C184 162 142 198 100 214 C58 198 16 162 16 112 L16 44 Z"
        fill={`url(#shield-${label})`}
        stroke={`url(#rim-${label})`}
        strokeWidth="2.5"
      />

      {/* Inner ring */}
      <path
        d="M100 26 L168 56 L168 112 C168 156 134 188 100 202 C66 188 32 156 32 112 L32 56 Z"
        fill="none"
        stroke="#D4A017"
        strokeWidth="1"
        strokeOpacity="0.25"
      />

      {/* Checkmark */}
      <path
        d="M64 110 L88 136 L140 84"
        stroke="#D4A017"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Label text */}
      <text
        x="100"
        y="166"
        textAnchor="middle"
        fill="#D4A017"
        fontSize={label.length > 5 ? "11" : "14"}
        fontWeight="800"
        letterSpacing="3"
        fontFamily="system-ui, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

/* ─── Checkmark icon ──────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
      style={{ background: "rgba(212,160,23,0.15)" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
        <path
          d="M2 5l2 2 4-4"
          stroke="#D4A017"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ─── Single Banner ───────────────────────────────────────────────────── */
function CertBanner({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  /* Alternate layout: even index → badge left, odd → badge right */
  const badgeRight = index % 2 !== 0;

  const BadgeBlock = (
    <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full sm:w-auto">
      {/* Badge */}
      <div className="relative w-28 h-32 sm:w-32 sm:h-36 lg:w-40 lg:h-44 xl:w-44 xl:h-48">
        <CertBadge label={cert.label} />
      </div>

      {/* Certified pill */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
        style={{
          background: "rgba(212,160,23,0.10)",
          borderColor: "rgba(212,160,23,0.35)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse"
          aria-hidden="true"
        />
        <span className="text-[#1B4332] text-[10px] font-bold uppercase tracking-[0.22em]">
          {cert.id === "apeda" ? "Registered" : cert.id === "sgs" ? "Verified" : "Certified"}
        </span>
      </div>
    </div>
  );

  const ContentBlock = (
    <div
      className={`flex-1 min-w-0 text-center ${
        badgeRight ? "md:text-right" : "md:text-left"
      }`}
    >
      {/* Label pill */}
      <div
        className={`inline-flex items-center gap-2 mb-3 ${
          badgeRight ? "md:flex-row-reverse" : ""
        }`}
      >
        <span
          className="block w-6 h-px bg-[#D4A017] hidden md:block"
          aria-hidden="true"
        />
        <span className="text-[#D4A017] text-[11px] font-bold uppercase tracking-[0.22em]">
          {cert.label}
        </span>
      </div>

      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.2rem] font-bold text-[#1B4332] leading-tight tracking-[-0.02em]">
        {cert.title}
      </h3>

      {/* Gold divider line */}
      <div
        className={`mt-4 mb-4 h-px w-16 bg-gradient-to-r from-[#D4A017] to-[#D4A017]/20 ${
          badgeRight ? "md:ml-auto" : ""
        } mx-auto md:mx-0`}
        aria-hidden="true"
      />

      {/* Description */}
      <p className="text-[15px] text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
        {cert.description}
      </p>

      {/* Benefits */}
      <div className="mt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1B4332]/60 mb-3">
          Buyer Benefits
        </p>
        <ul
          className={`flex flex-col gap-2 items-center ${
            badgeRight ? "md:items-end" : "md:items-start"
          }`}
          role="list"
        >
          {cert.benefits.map((benefit) => (
            <li
              key={benefit}
              className={`flex items-center gap-2.5 text-[13px] sm:text-sm text-gray-700 font-medium ${
                badgeRight ? "md:flex-row-reverse" : ""
              }`}
            >
              <CheckIcon />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      aria-label={cert.title}
      className="relative overflow-hidden rounded-2xl bg-white"
      style={{
        border: "1px solid rgba(212,160,23,0.25)",
        boxShadow:
          "0 4px 6px rgba(212,160,23,0.06), 0 16px 48px rgba(27,67,50,0.10), 0 0 0 1px rgba(255,255,255,0.8) inset",
      }}
    >
      {/* Top gold accent border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4A017 30%, #f5c842 50%, #D4A017 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Background watermark text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-black text-[clamp(5rem,14vw,10rem)] leading-none tracking-tighter"
          style={{
            color: "rgba(212,160,23,0.045)",
            userSelect: "none",
          }}
        >
          {cert.watermarkText}
        </span>
      </div>

      {/* Subtle beige tint on one side */}
      <div
        className={`pointer-events-none absolute inset-y-0 ${
          badgeRight ? "right-0 w-2/5" : "left-0 w-2/5"
        } hidden lg:block`}
        style={{ background: "rgba(212,160,23,0.03)" }}
        aria-hidden="true"
      />

      {/* Inner content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-8 p-6 sm:p-8 lg:p-10 xl:p-12
          md:flex-row md:items-center md:gap-10 lg:gap-14
          ${badgeRight ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {BadgeBlock}

        {/* Vertical divider — desktop only */}
        <div
          className="hidden md:block self-stretch w-px flex-shrink-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(212,160,23,0.3) 25%, rgba(212,160,23,0.3) 75%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {ContentBlock}
      </div>

      {/* Bottom subtle gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.2) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

/* ─── Main Section ────────────────────────────────────────────────────── */
export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Export Compliance and Registration"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FAFAF8 0%, #F5F0E8 50%, #FAFAF8 100%)" }}
    >
      {/* Top / bottom edge separators */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.25) 35%, rgba(245,200,66,0.4) 50%, rgba(212,160,23,0.25) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(27,67,50,0.15) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle background glows */}
      <div
        className="pointer-events-none absolute -top-40 right-[-5%] w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "rgba(212,160,23,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "rgba(27,67,50,0.07)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" aria-hidden="true" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Export Compliance
            </p>
            <span className="w-8 h-px bg-[#D4A017]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Export Compliance &{" "}
            <span className="text-[#D4A017]">Registration</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Every shipment is backed by internationally recognised certifications —
            built to meet the expectations of global buyers and regulatory standards.
          </p>

          {/* Decorative gold divider under header */}
          <div className="mt-6 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="block w-12 h-px bg-[#D4A017]/40" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A017]/60" />
            <span className="block w-24 h-px bg-[#D4A017]" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A017]/60" />
            <span className="block w-12 h-px bg-[#D4A017]/40" />
          </div>
        </motion.div>

        {/* ── Certification Banners ───────────────────────────────────── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <CertBanner key={cert.id} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
