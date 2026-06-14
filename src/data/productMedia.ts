/* ═══════════════════════════════════════════════════════════════
   PRODUCT MEDIA ARCHITECTURE & REGISTRY
   Centralized image metadata registry for all product images.
   ═══════════════════════════════════════════════════════════════
   
   FOLDER STRUCTURE:
   ──────────────────────────────────────────────────────────────
   public/images/
   ├── products/
   │   ├── fresh-brown-coconut/    ← 6 images per product
   │   │   ├── hero.webp
   │   │   ├── close-up.webp
   │   │   ├── packaging.webp
   │   │   ├── warehouse.webp
   │   │   ├── container-loading.webp
   │   │   └── quality-inspection.webp
   │   ├── pollachi-fresh-coconut/  ← Same 6-image pattern
   │   ├── high-grade-coconut/
   │   ├── copra-coconut/
   │   └── coco-peat/
   ├── storytelling/                ← Supply chain journey images
   │   ├── farm-sourcing.webp
   │   ├── processing-facility.webp
   │   ├── packaging-line.webp
   │   ├── container-loading.webp
   │   ├── quality-inspection.webp
   │   └── team-facility.webp
   ├── logo-icon.svg               ← Primary SVG logo icon
   ├── logo-primary.svg            ← Full color logo (light bg)
   ├── logo-dark.svg               ← Dark variant (print)
   ├── logo-white.svg              ← White variant (dark bg)
   ├── logo-social.svg             ← Social media logo
   ├── favicon.svg                 ← SVG favicon
   ├── apple-touch-icon.png        ← iOS home screen icon
   ├── icon-512.png                ← PWA / Android icon
   ├── og-default.png              ← Open Graph default (1200×630)
   ├── og-square.png               ← Open Graph square (1080×1080)
   ├── about-hero.webp             ← About page hero
   ├── logistics-hero.webp         ← Logistics page hero
   ├── rfq-hero.webp               ← RFQ page hero
   └── ...other page images
   ═══════════════════════════════════════════════════════════════ */

import type { ImageMeta, ProductImageSet } from "@/types";

/* ─── Base path for product images ───────────────── */
const BASE = "/images/products";
/* ─── FreshCoconut visual showcase path ──────────── */
const FRESH_COCONUT_VISUAL = "/images/products/FreshCoconut-Visualshowcase-Images";
/* ─── Pollachi Fresh Coconut visual showcase path ── */
const POLLACHI_VISUAL = "/images/products/Pollachi Fresh Coconut-Visualshowcase-images";
/* ─── Hight Grade Coconut visual showcase path ──── */
const HIGHT_GRADE_VISUAL = "/images/products/HightGradeCoconut-Visualshowcase-Images";
/* ─── Copra Coconut visual showcase path ────────── */
const COPRA_VISUAL = "/images/products/CopraCoconut-Visualshowcase-Images";
/* ─── Coco Peat visual showcase path ────────────── */
const COCO_PEAT_VISUAL = "/images/products/CocoPeat-Visualshowcase-Images";
/* ─── File extension — using .jpg for local image files ───── */
const EXT = ".jpg";

/* ════════════════════════════════════════════════════
   PRODUCT 1 — Fresh Brown Coconut
   ════════════════════════════════════════════════════ */
export const freshBrownCoconutImages: ProductImageSet = {
  hero: {
    src: `/images/products/fresh-brown-coconut/Fresh-Brown-image.png`,
    alt: "Premium fresh brown coconuts stacked for export — semi-husked Grade A quality with uniform sizing",
    title: "Fresh Brown Coconut — Premium Export Grade A",
    caption: "Semi-husked mature coconuts ready for international shipment from Tamil Nadu, India",
    seoDescription: "Premium fresh brown coconuts for bulk export — semi-husked Grade A quality from Tamil Nadu, India. Ideal for wholesale distribution and food processing.",
    width: 1200,
    height: 1400,
    priority: true,
  },
  closeUp: {
    src: `${FRESH_COCONUT_VISUAL}/ExportGrade-Image.png`,
    alt: "Export-grade fresh brown coconuts stacked and graded for international shipment",
    title: "Fresh Brown Coconut — Export Grade Visual Showcase",
    caption: "Premium export-grade fresh brown coconuts selected for uniform sizing and quality",
    seoDescription: "Export-grade fresh brown coconuts showcased for international buyers — premium quality selection for bulk wholesale distribution.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${FRESH_COCONUT_VISUAL}/Packaging-image.png`,
    alt: "Fresh brown coconuts in export-ready ventilated mesh bag packaging",
    title: "Fresh Brown Coconut — Packaging Showcase",
    caption: "Export-ready packaging in ventilated mesh bags designed for optimal freshness during transit",
    seoDescription: "Packaging showcase for fresh brown coconut exports — ventilated mesh bag packaging ensuring product freshness during ocean freight.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${FRESH_COCONUT_VISUAL}/Storage-image.png`,
    alt: "Fresh brown coconuts stored in warehouse under controlled conditions awaiting export",
    title: "Fresh Brown Coconut — Storage Showcase",
    caption: "Controlled warehouse storage preserving quality and freshness before shipment",
    seoDescription: "Warehouse storage showcase for fresh brown coconut exports — controlled environment storage ensuring optimal product condition.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${FRESH_COCONUT_VISUAL}/BulkSupply-image.png`,
    alt: "Fresh brown coconut bulk supply shipment prepared for container loading",
    title: "Fresh Brown Coconut — Bulk Supply Showcase",
    caption: "Bulk supply shipment ready for FCL container loading and international export",
    seoDescription: "Bulk supply showcase for fresh brown coconut exports — large-volume FCL shipments for wholesale buyers worldwide.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${FRESH_COCONUT_VISUAL}/Quality-inspection.png`,
    alt: "Quality inspection of fresh brown coconuts at ISO certified facility",
    title: "Fresh Brown Coconut — Quality Inspection Showcase",
    caption: "Rigorous quality inspection process ensuring consistent Grade A export quality",
    seoDescription: "Quality inspection showcase for fresh brown coconut exports — ISO 22000 certified inspection process for premium quality assurance.",
    width: 800,
    height: 800,
  },
};

/* ════════════════════════════════════════════════════
   PRODUCT 2 — Pollachi Fresh Coconut
   ════════════════════════════════════════════════════ */
export const pollachiFreshCoconutImages: ProductImageSet = {
  hero: {
    src: `${BASE}/pollachi-fresh-coconut/hero${EXT}`,
    alt: "Premium Pollachi fresh coconuts — origin-certified sweet water variety from Tamil Nadu",
    title: "Pollachi Fresh Coconut — Premium Sweet Water",
    caption: "Origin-certified Pollachi coconuts renowned for exceptional water content and thick kernel",
    seoDescription: "Premium Pollachi fresh coconuts for export — origin-certified sweet water variety with thick kernel, sourced from Tamil Nadu's famed coconut belt.",
    width: 1200,
    height: 1400,
    priority: true,
  },
  closeUp: {
    src: `${POLLACHI_VISUAL}/ExportGrade-image.png`,
    alt: "Export-grade Pollachi fresh coconuts stacked and graded for international shipment",
    title: "Pollachi Fresh Coconut — Export Grade Visual Showcase",
    caption: "Premium export-grade Pollachi fresh coconuts selected for uniform sizing and sweet water quality",
    seoDescription: "Export-grade Pollachi fresh coconuts showcased for international buyers — premium quality selection for bulk wholesale distribution.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${POLLACHI_VISUAL}/Packaging-Image.png`,
    alt: "Pollachi fresh coconuts in export-ready ventilated mesh bag packaging",
    title: "Pollachi Fresh Coconut — Packaging Showcase",
    caption: "Export-ready packaging in ventilated mesh bags designed to preserve sweet water content during transit",
    seoDescription: "Packaging showcase for Pollachi fresh coconut exports — ventilated mesh bag packaging preserving sweet water freshness during ocean freight.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${POLLACHI_VISUAL}/Storage-image.png`,
    alt: "Pollachi fresh coconuts stored in warehouse under controlled conditions awaiting export",
    title: "Pollachi Fresh Coconut — Storage Showcase",
    caption: "Controlled warehouse storage preserving sweet water quality and freshness before shipment",
    seoDescription: "Warehouse storage showcase for Pollachi fresh coconut exports — controlled environment storage ensuring optimal product condition.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${POLLACHI_VISUAL}/BulkSupply-image.png`,
    alt: "Pollachi fresh coconut bulk supply shipment prepared for container loading",
    title: "Pollachi Fresh Coconut — Bulk Supply Showcase",
    caption: "Bulk supply shipment ready for FCL container loading and international export",
    seoDescription: "Bulk supply showcase for Pollachi fresh coconut exports — large-volume FCL shipments for wholesale buyers worldwide.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${POLLACHI_VISUAL}/QualityInspection-image.png`,
    alt: "Quality inspection of Pollachi fresh coconuts at ISO certified facility",
    title: "Pollachi Fresh Coconut — Quality Inspection Showcase",
    caption: "Rigorous quality inspection process ensuring consistent premium export quality for Pollachi coconuts",
    seoDescription: "Quality inspection showcase for Pollachi fresh coconut exports — ISO 22000 certified inspection process for premium quality assurance.",
    width: 800,
    height: 800,
  },
};

/* ════════════════════════════════════════════════════
   PRODUCT 3 — High Grade Coconut
   ════════════════════════════════════════════════════ */
export const highGradeCoconutImages: ProductImageSet = {
  hero: {
    src: `${BASE}/high-grade-coconut/hero${EXT}`,
    alt: "Triple-A high grade coconuts with precision-calibrated uniform sizing for wholesale buyers",
    title: "High Grade Coconut — Triple-A Export Quality",
    caption: "Precision-calibrated premium coconuts with ±5g weight tolerance for wholesale markets",
    seoDescription: "Premium high grade coconuts for wholesale export — Triple-A quality with ±5g precision calibration, uniform sizing, and extended shelf life.",
    width: 1200,
    height: 1400,
    priority: true,
  },
  closeUp: {
    src: `${HIGHT_GRADE_VISUAL}/ExportGrade-Image.png`,
    alt: "Export-grade high grade coconuts stacked and graded for international shipment",
    title: "High Grade Coconut — Export Grade Visual Showcase",
    caption: "Premium export-grade high grade coconuts selected for uniform sizing and precision calibration",
    seoDescription: "Export-grade high grade coconuts showcased for international buyers — premium quality selection for bulk wholesale distribution.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${HIGHT_GRADE_VISUAL}/Packaging-image.png`,
    alt: "High grade coconuts in export-ready net bag packaging",
    title: "High Grade Coconut — Packaging Showcase",
    caption: "Export-ready packaging in net bags designed for optimal freshness during transit",
    seoDescription: "Packaging showcase for high grade coconut exports — net bag packaging ensuring product freshness during ocean freight.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${HIGHT_GRADE_VISUAL}/Storage-image.png`,
    alt: "High grade coconuts stored in warehouse under controlled conditions awaiting export",
    title: "High Grade Coconut — Storage Showcase",
    caption: "Controlled warehouse storage preserving quality and freshness before shipment",
    seoDescription: "Warehouse storage showcase for high grade coconut exports — controlled environment storage ensuring optimal product condition.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${HIGHT_GRADE_VISUAL}/BulkSupply-image.png`,
    alt: "High grade coconut bulk supply shipment prepared for container loading",
    title: "High Grade Coconut — Bulk Supply Showcase",
    caption: "Bulk supply shipment ready for FCL container loading and international export",
    seoDescription: "Bulk supply showcase for high grade coconut exports — large-volume FCL shipments for wholesale buyers worldwide.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${HIGHT_GRADE_VISUAL}/Quality-inspection.png`,
    alt: "Quality inspection of high grade coconuts at ISO certified facility",
    title: "High Grade Coconut — Quality Inspection Showcase",
    caption: "Rigorous quality inspection process ensuring consistent Triple-A export quality",
    seoDescription: "Quality inspection showcase for high grade coconut exports — ISO 22000 certified inspection process for premium quality assurance.",
    width: 800,
    height: 800,
  },
};

/* ════════════════════════════════════════════════════
   PRODUCT 4 — Copra Coconut
   ════════════════════════════════════════════════════ */
export const copraCoconutImages: ProductImageSet = {
  hero: {
    src: `${BASE}/copra-coconut/hero${EXT}`,
    alt: "Industrial-grade copra coconut dried kernels with 65-68% oil content for extraction",
    title: "Copra Coconut — Industrial Grade 65–68% Oil Yield",
    caption: "Controlled-dried coconut kernels with ≤6% moisture for maximum oil extraction efficiency",
    seoDescription: "Premium copra coconut for industrial export — 65-68% oil content, ≤6% moisture, HACCP-controlled drying process for oil millers and manufacturers.",
    width: 1200,
    height: 1400,
    priority: true,
  },
  closeUp: {
    src: `${COPRA_VISUAL}/ExportGrade-image.png`,
    alt: "Export-grade copra coconut dried kernels stacked and graded for industrial shipment",
    title: "Copra Coconut — Export Grade Visual Showcase",
    caption: "Premium export-grade copra coconut kernels selected for high oil content and uniform quality",
    seoDescription: "Export-grade copra coconut showcased for industrial buyers — premium quality selection for bulk oil extraction and manufacturing.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${COPRA_VISUAL}/Packaging-image.png`,
    alt: "Copra coconut packed in industrial-grade bags for export",
    title: "Copra Coconut — Packaging Showcase",
    caption: "Industrial-grade packaging in PP bags designed for moisture protection during transit",
    seoDescription: "Packaging showcase for copra coconut exports — industrial PP bag packaging ensuring product integrity during ocean freight.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${COPRA_VISUAL}/Storage-image.png`,
    alt: "Copra coconut stored in warehouse under controlled moisture conditions awaiting export",
    title: "Copra Coconut — Storage Showcase",
    caption: "Climate-controlled warehouse storage preserving oil quality and moisture content before shipment",
    seoDescription: "Warehouse storage showcase for copra coconut exports — controlled environment storage ensuring optimal product condition.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${COPRA_VISUAL}/BulkSupply-image.png`,
    alt: "Copra coconut bulk supply shipment prepared for container loading",
    title: "Copra Coconut — Bulk Supply Showcase",
    caption: "Bulk supply shipment ready for FCL container loading and international export",
    seoDescription: "Bulk supply showcase for copra coconut exports — large-volume FCL shipments for industrial buyers worldwide.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${COPRA_VISUAL}/QualityInspection-image.png`,
    alt: "Quality inspection of copra coconut at ISO certified facility",
    title: "Copra Coconut — Quality Inspection Showcase",
    caption: "Rigorous quality inspection process ensuring consistent industrial-grade export quality",
    seoDescription: "Quality inspection showcase for copra coconut exports — ISO 22000 certified inspection process for premium quality assurance.",
    width: 800,
    height: 800,
  },
};

/* ════════════════════════════════════════════════════
   PRODUCT 5 — Coco Peat
   ════════════════════════════════════════════════════ */
export const cocoPeatImages: ProductImageSet = {
  hero: {
    src: `${BASE}/coco-peat/hero${EXT}`,
    alt: "Compressed coco peat blocks and briquettes for hydroponics and greenhouse cultivation",
    title: "Coco Peat — Horticultural Grade Low EC <0.5 mS/cm",
    caption: "Hydrophilic compressed coco peat blocks expanding 5–6× when hydrated for professional horticulture",
    seoDescription: "Premium coco peat for hydroponic and greenhouse export — low EC <0.5 mS/cm, 5-6× expansion ratio, ideal for soilless cultivation and seed propagation.",
    width: 1200,
    height: 1400,
    priority: true,
  },
  closeUp: {
    src: `${COCO_PEAT_VISUAL}/ExportGrade-image.png`,
    alt: "Export-grade coco peat compressed blocks and briquettes for horticultural export",
    title: "Coco Peat — Export Grade Visual Showcase",
    caption: "Premium export-grade coco peat blocks selected for low EC and consistent quality",
    seoDescription: "Export-grade coco peat showcased for international buyers — premium quality selection for horticultural and hydroponic distribution.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${COCO_PEAT_VISUAL}/Packaging-image.png`,
    alt: "Compressed coco peat blocks in export-ready packaging",
    title: "Coco Peat — Packaging Showcase",
    caption: "Export-ready compressed packaging designed for optimal container utilization during transit",
    seoDescription: "Packaging showcase for coco peat exports — compressed blocks and briquettes ensuring logistics efficiency during ocean freight.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${COCO_PEAT_VISUAL}/Storage-image.png`,
    alt: "Coco peat blocks stored in warehouse under controlled conditions awaiting export",
    title: "Coco Peat — Storage Showcase",
    caption: "Controlled warehouse storage preserving product quality and expansion properties before shipment",
    seoDescription: "Warehouse storage showcase for coco peat exports — controlled environment storage ensuring optimal product condition.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${COCO_PEAT_VISUAL}/BulkSupply-iamge.png`,
    alt: "Coco peat bulk supply shipment prepared for container loading",
    title: "Coco Peat — Bulk Supply Showcase",
    caption: "Bulk supply shipment ready for FCL container loading and international export",
    seoDescription: "Bulk supply showcase for coco peat exports — large-volume FCL shipments for wholesale buyers worldwide.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${COCO_PEAT_VISUAL}/QualityInspection-image.jpg`,
    alt: "Quality inspection of coco peat at ISO certified facility",
    title: "Coco Peat — Quality Inspection Showcase",
    caption: "Rigorous quality inspection process ensuring consistent horticultural-grade export quality",
    seoDescription: "Quality inspection showcase for coco peat exports — ISO 22000 certified inspection process for premium quality assurance.",
    width: 800,
    height: 800,
  },
};

/* ════════════════════════════════════════════════════
   MASTER MEDIA REGISTRY — all products by slug
   ════════════════════════════════════════════════════ */
export const productMediaRegistry: Record<string, ProductImageSet> = {
  "fresh-brown-coconut": freshBrownCoconutImages,
  "pollachi-fresh-coconut": pollachiFreshCoconutImages,
  "high-grade-coconut": highGradeCoconutImages,
  "copra-coconut": copraCoconutImages,
  "coco-peat": cocoPeatImages,
};

/* ─── Get gallery array for a product ────────────── */
export function getGalleryForSlug(slug: string): ImageMeta[] {
  const media = productMediaRegistry[slug];
  if (!media) return [];
  return Object.values(media).filter((img): img is ImageMeta => !!img && !img.priority);
}

/* ─── Get the hero image for a product ────────────── */
export function getHeroForSlug(slug: string): ImageMeta | null {
  return productMediaRegistry[slug]?.hero ?? null;
}
