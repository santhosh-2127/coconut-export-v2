/* ═══════════════════════════════════════════════════════════════
   CERTIFICATIONS CONSTANTS
   Reusable certification metadata for all compliance displays.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Certification Metadata ─────────────────────────── */
export interface CertificationMeta {
  name: string;
  abbreviation: string;
  description: string;
  issuer: string;
  scope: string;
  tier: "featured" | "standard";
  accent: string;
  tagline: string;
  pillars: string[];
  order: number;
}

export const CERTIFICATION_METAS: CertificationMeta[] = [
  {
    name: "ISO 22000",
    abbreviation: "ISO 22000",
    description:
      "International standard governing Food Safety Management Systems — the globally recognised benchmark for safe supply chains from farm to final buyer.",
    issuer: "ISO / International Organization for Standardization",
    scope: "Food Safety Management System",
    tier: "featured",
    accent: "#D4A017",
    tagline: "Global Food Safety Benchmark",
    pillars: ["FSMS Framework", "Hazard Control", "Continual Improvement"],
    order: 1,
  },
  {
    name: "HACCP",
    abbreviation: "HACCP",
    description:
      "Hazard Analysis & Critical Control Points — the science-based preventive approach mandated by international food trade bodies to identify, evaluate and control food-safety hazards.",
    issuer: "Codex Alimentarius Commission (FAO / WHO)",
    scope: "Preventive Food Safety Controls",
    tier: "featured",
    accent: "#2D7D9A",
    tagline: "FAO / WHO Preventive Standard",
    pillars: ["Hazard Analysis", "Critical Control Points", "Corrective Actions"],
    order: 2,
  },
  {
    name: "APEDA",
    abbreviation: "APEDA",
    description:
      "Registered exporter under the Agricultural & Processed Food Products Export Development Authority, Government of India — mandatory for all agricultural commodity exports.",
    issuer: "Ministry of Commerce & Industry, Government of India",
    scope: "Agricultural Export Compliance",
    tier: "standard",
    accent: "#4A9E6B",
    tagline: "Govt. of India Registered Exporter",
    pillars: ["Export Registration", "Agri. Compliance", "DGFT Aligned"],
    order: 3,
  },
  {
    name: "SGS Verified",
    abbreviation: "SGS",
    description:
      "Third-party product and process verification by SGS — the world's leading inspection, testing, and certification company operating in 140+ countries.",
    issuer: "SGS S.A. — Geneva, Switzerland",
    scope: "Independent Third-Party Verification",
    tier: "standard",
    accent: "#9B59B6",
    tagline: "World's #1 Inspection Body",
    pillars: ["Lab Testing", "Process Audit", "140+ Countries"],
    order: 4,
  },
];

/* ─── Certification Lookup Helper ────────────────────── */
export const getCertMeta = (name: string): CertificationMeta | undefined =>
  CERTIFICATION_METAS.find((c) => c.name === name);

/* ─── Compliance Narrative Steps ─────────────────────── */
export const COMPLIANCE_NARRATIVE = [
  { step: "01", label: "Quality Assurance", sub: "ISO 22000 FSMS" },
  { step: "02", label: "Food Safety Standards", sub: "HACCP Preventive Controls" },
  { step: "03", label: "Export Compliance", sub: "APEDA Registered" },
  { step: "04", label: "Independent Verification", sub: "SGS Third-Party Audit" },
] as const;

/* ─── Trust Pill Signals ─────────────────────────────── */
export const COMPLIANCE_TRUST_PILLS = [
  { icon: "🌐", text: "Globally Recognised" },
  { icon: "🔬", text: "Lab Tested" },
  { icon: "📋", text: "Audit Ready" },
  { icon: "✅", text: "Export Compliant" },
] as const;

/* ─── Compliance Footer Items ────────────────────────── */
export const COMPLIANCE_FOOTER_ITEMS = [
  {
    icon: "🏛️",
    title: "Audit-Ready Documentation",
    desc: "Complete compliance records available for buyer audits, phytosanitary checks, and customs clearance.",
  },
  {
    icon: "🔏",
    title: "Certified at Every Stage",
    desc: "From farm sourcing through processing, packaging, and export — every step is under certified protocols.",
  },
  {
    icon: "📞",
    title: "Compliance Queries Welcome",
    desc: "Our team can provide certification documentation and scope letters to your procurement or QA department.",
  },
] as const;
