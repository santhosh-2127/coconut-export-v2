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
/* ─── File extension — using .jpg for local image files ───── */
const EXT = ".jpg";

/* ════════════════════════════════════════════════════
   PRODUCT 1 — Fresh Brown Coconut
   ════════════════════════════════════════════════════ */
export const freshBrownCoconutImages: ProductImageSet = {
  hero: {
    src: `${BASE}/fresh-brown-coconut/hero${EXT}`,
    alt: "Premium fresh brown coconuts stacked for export — semi-husked Grade A quality with uniform sizing",
    title: "Fresh Brown Coconut — Premium Export Grade A",
    caption: "Semi-husked mature coconuts ready for international shipment from Tamil Nadu, India",
    seoDescription: "Premium fresh brown coconuts for bulk export — semi-husked Grade A quality from Tamil Nadu, India. Ideal for wholesale distribution and food processing.",
    width: 1200,
    height: 1400,
    priority: true,
  },
  closeUp: {
    src: `${BASE}/fresh-brown-coconut/close-up${EXT}`,
    alt: "Close-up of a fresh brown coconut showing rich brown husk and clean semi-husked finish",
    title: "Fresh Brown Coconut — Close-Up Detail",
    caption: "Expertly husked brown coconut with clean shell finish and intact fibre layer",
    seoDescription: "Detailed close-up of export-quality fresh brown coconut showing semi-husked finish, rich brown colour, and fibre integrity.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${BASE}/fresh-brown-coconut/packaging${EXT}`,
    alt: "Fresh brown coconuts packed in ventilated mesh bags for container shipping",
    title: "Fresh Brown Coconut — Export Packaging",
    caption: "Ventilated mesh bag packaging designed for optimal airflow during ocean transit",
    seoDescription: "Export packaging for fresh brown coconuts — ventilated mesh bags ensuring freshness during container shipping from Chennai and Tuticorin ports.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${BASE}/fresh-brown-coconut/warehouse${EXT}`,
    alt: "Warehouse inspection of fresh brown coconut batches before export loading",
    title: "Fresh Brown Coconut — Warehouse Quality Control",
    caption: "Quality inspection and batch verification at our ISO 22000 certified facility",
    seoDescription: "Warehouse quality control for fresh brown coconut exports — ISO 22000 and HACCP certified inspection before container loading.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${BASE}/fresh-brown-coconut/container-loading${EXT}`,
    alt: "Container loading of fresh brown coconut shipments for international export",
    title: "Fresh Brown Coconut — Container Loading",
    caption: "FCL container loading at Chennai port with full stowage optimization",
    seoDescription: "Container loading process for fresh brown coconut FCL shipments — optimized stowage for ocean freight to global destinations.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${BASE}/fresh-brown-coconut/quality-inspection${EXT}`,
    alt: "Quality inspector examining fresh brown coconuts for Grade A export grading at ISO certified facility",
    title: "Fresh Brown Coconut — Quality Inspection Process",
    caption: "Multi-stage quality inspection ensuring uniform sizing, weight consistency, and shell integrity",
    seoDescription: "Quality inspection of fresh brown coconuts for export — ISO 22000 certified grading process ensuring consistent Grade A quality for international buyers.",
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
    src: `${BASE}/pollachi-fresh-coconut/close-up${EXT}`,
    alt: "Close-up of Pollachi fresh coconut showing thick white kernel and sweet water cavity",
    title: "Pollachi Coconut — Kernel & Water Detail",
    caption: "Distinctive thick white kernel and premium sweet water characteristic of Pollachi origin",
    seoDescription: "Close-up of Pollachi fresh coconut revealing thick white kernel and sweet water cavity — premium quality indicators for international buyers.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${BASE}/pollachi-fresh-coconut/packaging${EXT}`,
    alt: "Pollachi fresh coconuts in ventilated mesh bags for export",
    title: "Pollachi Fresh Coconut — Export Packaging",
    caption: "Specialized ventilated packaging preserving sweetness during international transit",
    seoDescription: "Export packaging for Pollachi fresh coconuts — ventilated mesh bags designed to preserve sweet water content during ocean freight.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${BASE}/pollachi-fresh-coconut/warehouse${EXT}`,
    alt: "Pollachi coconut batches in warehouse awaiting quality inspection",
    title: "Pollachi Coconut — Storage & Inspection",
    caption: "Batch storage and quality verification before shipment approval",
    seoDescription: "Warehouse storage and quality inspection of Pollachi fresh coconuts — origin-certified batches awaiting export clearance.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${BASE}/pollachi-fresh-coconut/container-loading${EXT}`,
    alt: "Container loading of Pollachi fresh coconut FCL shipment at Chennai port",
    title: "Pollachi Fresh Coconut — FCL Shipping",
    caption: "Full container load shipment of Pollachi coconuts for international buyers",
    seoDescription: "FCL container loading of Pollachi fresh coconuts for export — optimized stowage and documentation for global delivery.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${BASE}/pollachi-fresh-coconut/quality-inspection${EXT}`,
    alt: "Pollachi coconut quality inspection — kernel thickness and water content testing for export certification",
    title: "Pollachi Coconut — Kernel & Water Quality Check",
    caption: "Rigorous quality testing of Pollachi coconuts for sweet water content and kernel thickness before export clearance",
    seoDescription: "Quality inspection of Pollachi fresh coconuts — kernel thickness measurement and sweet water content testing for premium export certification.",
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
    src: `${BASE}/high-grade-coconut/close-up${EXT}`,
    alt: "Close-up of high grade coconut showing calibrated sizing and premium shell finish",
    title: "High Grade Coconut — Precision Calibration Detail",
    caption: "Every coconut individually inspected for size, weight, and shell integrity",
    seoDescription: "Close-up of precision-calibrated high grade coconut showing uniform sizing, shell integrity, and premium finish for wholesale buyers.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${BASE}/high-grade-coconut/packaging${EXT}`,
    alt: "High grade coconuts in 10kg and 20kg net bags with moisture barrier lining",
    title: "High Grade Coconut — Premium Packaging",
    caption: "Laser-labelled net bags with batch traceability for supply chain transparency",
    seoDescription: "Premium packaging for high grade coconut exports — 10kg and 20kg net bags with moisture barrier, batch labels, and QR traceability.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${BASE}/high-grade-coconut/warehouse${EXT}`,
    alt: "High grade coconut batches organized by grade level in warehouse",
    title: "High Grade Coconut — Graded Storage",
    caption: "Grade-separated storage ensuring batch integrity and traceability",
    seoDescription: "Graded warehouse storage of high grade coconuts — Grade A+ and Grade A batches organized for traceable export fulfilment.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${BASE}/high-grade-coconut/container-loading${EXT}`,
    alt: "Container loading of high grade coconut shipment for international wholesale buyers",
    title: "High Grade Coconut — FCL Export Loading",
    caption: "Multi-port container loading with customized stowage plans per destination",
    seoDescription: "FCL container loading of high grade coconut shipments — multi-port logistics from Chennai, Tuticorin, and Nhava Sheva for global wholesale buyers.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${BASE}/high-grade-coconut/quality-inspection${EXT}`,
    alt: "High grade coconut precision calibration — ±5g weight verification and shell integrity inspection",
    title: "High Grade Coconut — Five-Stage Quality Inspection",
    caption: "Precision calibration and shell integrity check — every coconut individually inspected for Grade A+ certification",
    seoDescription: "Precision quality inspection of high grade coconuts — five-stage verification including ±5g weight calibration and shell integrity for premium export.",
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
    src: `${BASE}/copra-coconut/close-up${EXT}`,
    alt: "Close-up of dried copra kernel showing colour, texture, and oil content quality",
    title: "Copra Coconut — Kernel Quality Detail",
    caption: "Clean, uniform copra with low impurity rate and high oil content verified per batch",
    seoDescription: "Detailed close-up of premium copra kernel showing clean colour, uniform texture, and high oil content quality for industrial processing.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${BASE}/copra-coconut/packaging${EXT}`,
    alt: "Copra packed in 50kg PP bags and 1 MT jumbo bags for industrial buyers",
    title: "Copra Coconut — Bulk Industrial Packaging",
    caption: "Moisture-proof PP bags and jumbo bags with heat-sealed inner lining",
    seoDescription: "Industrial packaging for copra coconut — 50kg PP bags and 1 MT jumbo bags with moisture-proof lining for bulk export to oil mills.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${BASE}/copra-coconut/warehouse${EXT}`,
    alt: "Copra batch storage with moisture-controlled conditions for quality preservation",
    title: "Copra Coconut — Climate-Controlled Storage",
    caption: "Moisture-monitored warehouse environment preserving copra quality before shipment",
    seoDescription: "Climate-controlled warehouse storage for copra coconut — moisture monitoring ensures ≤6% content preservation for industrial buyers.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${BASE}/copra-coconut/container-loading${EXT}`,
    alt: "Container loading of copra FCL and LCL shipments for industrial buyers worldwide",
    title: "Copra Coconut — FCL & LCL Shipping",
    caption: "Container loading with moisture protection liners for ocean transit",
    seoDescription: "FCL and LCL container loading for copra coconut shipments — moisture-protected ocean freight from Chennai, Tuticorin, and Nhava Sheva ports.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${BASE}/copra-coconut/quality-inspection${EXT}`,
    alt: "Copra quality testing — oil content analysis and moisture content verification in laboratory",
    title: "Copra Coconut — Laboratory Quality Testing",
    caption: "Every batch laboratory tested for oil content (65-68%), moisture (≤6%), and FFA (<2%) before shipment",
    seoDescription: "Laboratory quality testing of copra coconut for export — oil content analysis, moisture verification, and FFA testing for industrial buyers.",
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
    src: `${BASE}/coco-peat/close-up${EXT}`,
    alt: "Close-up of coco peat fibre texture showing low EC washed and buffered quality",
    title: "Coco Peat — Fibre Detail & Quality",
    caption: "Multi-stage washed coco peat with controlled buffering for consistent horticultural performance",
    seoDescription: "Close-up of premium coco peat showing clean fibre texture — low EC <0.5 mS/cm washed and buffered for professional hydroponic and greenhouse applications.",
    width: 800,
    height: 800,
  },
  packaging: {
    src: `${BASE}/coco-peat/packaging${EXT}`,
    alt: "Compressed coco peat blocks and briquettes shrink-wrapped for container transport",
    title: "Coco Peat — Compression Packaging",
    caption: "5kg blocks and 650g briquettes with custom compression ratios for logistics efficiency",
    seoDescription: "Compressed packaging for coco peat export — 5kg blocks and 650g briquettes shrink-wrapped for optimal container utilization and reduced freight costs.",
    width: 800,
    height: 800,
  },
  warehouse: {
    src: `${BASE}/coco-peat/warehouse${EXT}`,
    alt: "Coco peat block inventory in warehouse ready for international distribution",
    title: "Coco Peat — Warehouse Inventory",
    caption: "Batch-tested coco peat inventory with full EC and pH documentation per lot",
    seoDescription: "Warehouse inventory of coco peat blocks for distribution — batch-tested and labelled with EC, pH, and expansion ratio for quality assurance.",
    width: 800,
    height: 600,
  },
  containerLoading: {
    src: `${BASE}/coco-peat/container-loading${EXT}`,
    alt: "Container loading of coco peat blocks for greenhouse and hydroponic buyers worldwide",
    title: "Coco Peat — Export Container Loading",
    caption: "Palletized and stretch-wrapped blocks for efficient container loading and transport",
    seoDescription: "Container loading of coco peat FCL shipments for global horticulture buyers — optimized pallet configuration for maximum container utilization.",
    width: 800,
    height: 600,
  },
  qualityInspection: {
    src: `${BASE}/coco-peat/quality-inspection${EXT}`,
    alt: "Coco peat quality testing — EC conductivity and pH measurement for horticultural certification",
    title: "Coco Peat — EC & pH Quality Verification",
    caption: "Laboratory testing of EC (<0.5 mS/cm), pH (5.5-6.5), and buffering capacity for every production batch",
    seoDescription: "Quality testing of coco peat for export — EC conductivity, pH, and buffering capacity verification for professional horticulture certification.",
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
