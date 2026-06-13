/* ═══════════════════════════════════════════════════════════════
   PRODUCTS CONSTANTS
   Reusable product-related constants and lookup helpers.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Product Categories ─────────────────────────────── */
export const PRODUCT_CATEGORIES = [
  "Whole Coconut",
  "Processed Commodity",
  "Agricultural Input",
] as const;

/* ─── Product Icons Map ──────────────────────────────── */
export const PRODUCT_ICONS = {
  coconut: "🥥",
  copra: "🥥",
  peat: "🌱",
} as const;

/* ─── Volume Units ───────────────────────────────────── */
export const VOLUME_UNITS = [
  { value: "kg", label: "Kilograms (kg)" },
  { value: "mt", label: "Metric Tonnes (MT)" },
  { value: "fcl", label: "Container Loads (FCL)" },
  { value: "nuts", label: "Number of Nuts" },
  { value: "blocks", label: "Blocks / Briquettes" },
  { value: "bags", label: "Bags" },
] as const;

/* ─── Valid Product Names (for form validation) ──────── */
export const VALID_PRODUCT_NAMES = [
  "Fresh Brown Coconut",
  "Pollachi Fresh Coconut",
  "High Grade Coconut",
  "Copra Coconut",
  "Coco Peat",
] as const;

/* ─── Product Default Specifications ─────────────────── */
export const PRODUCT_DEFAULTS = {
  currency: "USD",
  priceValidUntilDays: 90,
  leadTimeDays: {
    standard: 14,
    urgent: 7,
  },
  responseTime: "24 hours",
} as const;

/* ─── Product Category Icons ──────────────────────────── */
export const PRODUCT_CATEGORY_ICONS: Record<string, string> = {
  "Whole Coconut": "🥥",
  "Processed Commodity": "⚗️",
  "Agricultural Input": "🌱",
};
