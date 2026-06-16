"use client";

import { motion } from "framer-motion";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── SVG authority badge per cert ────────────────────────────────────── */
const certIcons: Record<string, React.ReactNode> = {
  "ISO 22000": (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="1" y="1" width="38" height="38" rx="8" stroke="#D4A017" strokeWidth="1.5" />
      <rect x="4" y="4" width="32" height="32" rx="6" fill="#D4A017" fillOpacity="0.08" />
      <text x="20" y="24" textAnchor="middle" fill="#D4A017" fontSize="11" fontWeight="800" fontFamily="system-ui">
        ISO
      </text>
    </svg>
  ),
  HACCP: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="1" y="1" width="38" height="38" rx="8" stroke="#2D7D9A" strokeWidth="1.5" />
      <rect x="4" y="4" width="32" height="32" rx="6" fill="#2D7D9A" fillOpacity="0.08" />
      <text x="20" y="24" textAnchor="middle" fill="#2D7D9A" fontSize="8" fontWeight="800" fontFamily="system-ui">
        HACCP
      </text>
    </svg>
  ),
  APEDA: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="1" y="1" width="38" height="38" rx="8" stroke="#4A9E6B" strokeWidth="1.5" />
      <rect x="4" y="4" width="32" height="32" rx="6" fill="#4A9E6B" fillOpacity="0.08" />
      <text x="20" y="24" textAnchor="middle" fill="#4A9E6B" fontSize="8" fontWeight="800" fontFamily="system-ui">
        APEDA
      </text>
    </svg>
  ),
  "SGS Verified": (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="1" y="1" width="38" height="38" rx="8" stroke="#9B59B6" strokeWidth="1.5" />
      <rect x="4" y="4" width="32" height="32" rx="6" fill="#9B59B6" fillOpacity="0.08" />
      <text x="20" y="24" textAnchor="middle" fill="#9B59B6" fontSize="12" fontWeight="800" fontFamily="system-ui">
        SGS
      </text>
    </svg>
  ),
};

/* ─── Certification authority data ────────────────────────────────────── */
interface CertAuthority {
  name: string;
  issuer: string;
  whatItMeans: string;
  whyItMatters: string;
  accent: string;
}

const certs: CertAuthority[] = [
  {
    name: "ISO 22000",
    issuer: "International Organization for Standardization",
    whatItMeans:
      "International standard for Food Safety Management Systems. Every batch is processed under certified protocols — from farm intake to container loading.",
    whyItMatters:
      "Accepted by food safety authorities across 140+ countries. Your import clearance is simplified because our system meets global benchmarks.",
    accent: "#D4A017",
  },
  {
    name: "HACCP",
    issuer: "Codex Alimentarius Commission (FAO / WHO)",
    whatItMeans:
      "Hazard Analysis & Critical Control Points. Every production stage is monitored — temperature, humidity, hygiene, and product integrity — to prevent food safety risks.",
    whyItMatters:
      "Preventive controls mean zero recalls, zero contamination risks, and full traceability for every shipment. Your supply chain is protected.",
    accent: "#2D7D9A",
  },
  {
    name: "APEDA",
    issuer: "Ministry of Commerce & Industry, Government of India",
    whatItMeans:
      "Registered with India's agricultural export authority — mandatory for all agricultural commodity exporters. Our registration is current and fully compliant.",
    whyItMatters:
      "Hassle-free customs clearance for Indian agricultural exports. Every shipment meets Government of India export regulations, so your cargo never gets held up.",
    accent: "#4A9E6B",
  },
  {
    name: "SGS Verified",
    issuer: "SGS S.A. — Geneva, Switzerland",
    whatItMeans:
      "Third-party verification by SGS — the world's leading inspection, testing, and certification company operating in 140+ countries with 2,600+ offices.",
    whyItMatters:
      "Independent verification you can present to your QA team with confidence. Lab reports, process audits, and inspection certificates available for every order.",
    accent: "#9B59B6",
  },
];

/* ─── Authority Card ──────────────────────────────────────────────────── */
function AuthorityCard({ cert, index }: { cert: CertAuthority; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#1B4332]/15 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300"
    >
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
        style={{ background: `linear-gradient(90deg, ${cert.accent} 0%, ${cert.accent}33 100%)` }}
      />

      <div className="relative p-5 md:p-6">
        {/* Header row — icon + name + issuer */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 mt-0.5">
            {certIcons[cert.name]}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#111827] leading-tight">
              {cert.name}
            </h3>
            <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* What it means */}
        <div className="mb-3">
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-1">
            What it means
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {cert.whatItMeans}
          </p>
        </div>

        {/* Why it matters */}
        <div className="p-3 rounded-lg" style={{ background: `${cert.accent}08`, border: `1px solid ${cert.accent}18` }}>
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold mb-1" style={{ color: cert.accent }}>
            Why it matters to you
          </p>
          <p className="text-[13px] leading-snug font-medium text-[#111827]">
            {cert.whyItMatters}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications and Regulatory Compliance"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle top/bottom edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B4332]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Regulatory Authority
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Internationally{" "}
            <span className="text-[#1B4332]">Certified</span>
            <br />
            <span className="text-[#D4A017]">Globally Compliant</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Every shipment carries four internationally recognised certifications — from food safety management to government export compliance and third-party verification.
          </p>
        </motion.div>

        {/* ── Certifications Grid ── */}
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((cert, i) => (
            <AuthorityCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>

        {/* ── Authority Statement Bar ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 rounded-xl border border-[#1B4332]/10 bg-[#1B4332] p-5 md:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A017]/20 flex items-center justify-center">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#D4A017]">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.95 4.79l-4.5 4.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 11.7-.7L7 9.29l4.15-4.15a.5.5 0 11.7.7z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-0.5">Every shipment is compliance-ready</p>
              <p className="text-white/60 text-xs leading-relaxed">
                We provide certification documents, lab reports, and compliance records with every order — giving you and your QA team full confidence at customs clearance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
