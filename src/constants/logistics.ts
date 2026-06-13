/* ═══════════════════════════════════════════════════════════════
   LOGISTICS CONSTANTS
   Reusable logistics and shipping-related constants.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Incoterms We Support ───────────────────────────── */
export const INCOTERMS = [
  { code: "FOB", name: "Free On Board", description: "Seller delivers goods on board vessel at origin port" },
  { code: "CIF", name: "Cost, Insurance & Freight", description: "Seller covers cost, insurance, and freight to destination port" },
  { code: "CFR", name: "Cost & Freight", description: "Seller covers cost and freight to destination port (no insurance)" },
] as const;

/* ─── Supported Incoterms (for validation) ───────────── */
export const VALID_INCOTERMS = ["FOB", "CIF", "CFR"] as const;

/* ─── Ports of Loading ───────────────────────────────── */
export const ORIGIN_PORTS = [
  { name: "Chennai Port", code: "INMAA", state: "Tamil Nadu" },
  { name: "Tuticorin Port", code: "INTUT", state: "Tamil Nadu" },
  { name: "Nhava Sheva (JNPT)", code: "INNSA", state: "Maharashtra" },
] as const;

/* ─── Shipping Lines ─────────────────────────────────── */
export const SHIPPING_LINES = [
  "Maersk",
  "MSC",
  "CMA CGM",
  "Hapag-Lloyd",
  "ONE",
  "Evergreen",
  "COSCO",
] as const;

/* ─── Container Types ────────────────────────────────── */
export const CONTAINER_TYPES = [
  { type: "20ft FCL", payload: "~18–26 MT", description: "Standard 20-foot full container load" },
  { type: "40ft FCL", payload: "~26–28 MT", description: "Standard 40-foot full container load" },
  { type: "40ft HC", payload: "~26–28 MT", description: "40-foot high cube container" },
  { type: "LCL", payload: "Consolidated", description: "Less than container load — shared container" },
] as const;

/* ─── Logistics Process Steps ────────────────────────── */
export const LOGISTICS_PROCESS = [
  {
    step: 1,
    title: "Order Confirmation",
    description: "Receive confirmed PO from buyer, issue proforma invoice, and initiate production allocation.",
    duration: "1–2 days",
  },
  {
    step: 2,
    title: "Quality Inspection",
    description: "Batch testing and quality verification at ISO 22000 & HACCP certified facility before packing.",
    duration: "2–3 days",
  },
  {
    step: 3,
    title: "Packaging & Labelling",
    description: "Export-grade packaging with batch traceability, labelling as per buyer specifications.",
    duration: "2–4 days",
  },
  {
    step: 4,
    title: "Documentation",
    description: "Prepare BL, COO, Phytosanitary, Commercial Invoice, Packing List, and Certificate of Analysis.",
    duration: "1–2 days",
  },
  {
    step: 5,
    title: "Container Loading",
    description: "Container stuffing with optimized stowage, container seal, and pre-shipment photos.",
    duration: "1 day",
  },
  {
    step: 6,
    title: "Shipping & Tracking",
    description: "Container dispatch with real-time tracking, customs clearance, and buyer notification.",
    duration: "Transit varies",
  },
] as const;

/* ─── Transit Times ──────────────────────────────────── */
export const TRANSIT_TIMES = [
  { destination: "Middle East (GCC)", origin: "Chennai / Tuticorin", days: "5–10 days" },
  { destination: "Southeast Asia", origin: "Chennai / Tuticorin", days: "7–14 days" },
  { destination: "Europe (Rotterdam)", origin: "Nhava Sheva", days: "20–25 days" },
  { destination: "North America (East Coast)", origin: "Nhava Sheva", days: "20–30 days" },
  { destination: "North America (West Coast)", origin: "Nhava Sheva", days: "25–35 days" },
  { destination: "East Asia", origin: "Chennai", days: "10–18 days" },
  { destination: "Oceania", origin: "Chennai", days: "14–20 days" },
] as const;

/* ─── Required Export Documents ──────────────────────── */
export const EXPORT_DOCUMENTS = [
  { name: "Bill of Lading", description: "Contract of carriage issued by shipping line" },
  { name: "Commercial Invoice", description: "Detailed invoice with HS codes and payment terms" },
  { name: "Packing List", description: "Weight, dimensions, and container contents breakdown" },
  { name: "Certificate of Origin", description: "Proof of Indian origin for customs clearance" },
  { name: "Phytosanitary Certificate", description: "Plant health certification for agricultural products" },
  { name: "Certificate of Analysis", description: "Lab test results per batch (oil content, moisture, EC, etc.)" },
  { name: "Shipping Bill", description: "Customs clearance document for export from India" },
] as const;

/* ─── Quality Control Stages ─────────────────────────── */
export const QC_STAGES = [
  { stage: 1, name: "Farm Intake", checks: "Maturity, variety, visual integrity" },
  { stage: 2, name: "Processing Line", checks: "Cleaning, sorting, grading" },
  { stage: 3, name: "Weight Calibration", checks: "±5g tolerance verification" },
  { stage: 4, name: "Pre-Shipment", checks: "Container inspection, final quality sign-off" },
] as const;
