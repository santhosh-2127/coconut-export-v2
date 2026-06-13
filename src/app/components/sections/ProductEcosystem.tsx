"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Visual identity per product: gradient + pattern ─────────────────── */
const productVisuals: Record<
  number,
  { gradient: string; pattern: string; accent: string }
> = {
  1: {
    gradient: "from-[#1B4332] via-[#2d6a4f] to-[#40916c]",
    pattern: "radial",
    accent: "#D4A017",
  },
  2: {
    gradient: "from-[#1a3a1a] via-[#2d5016] to-[#52742a]",
    pattern: "diagonal",
    accent: "#D4A017",
  },
  3: {
    gradient: "from-[#0d2b1e] via-[#1B4332] to-[#2d6a4f]",
    pattern: "grid",
    accent: "#D4A017",
  },
  4: {
    gradient: "from-[#2a1a08] via-[#5c3d11] to-[#8b6914]",
    pattern: "radial",
    accent: "#D4A017",
  },
  5: {
    gradient: "from-[#1a2e1a] via-[#2d4a1f] to-[#3d6b2a]",
    pattern: "diagonal",
    accent: "#D4A017",
  },
};

/* ─── Pattern overlays ────────────────────────────────────────────────── */
function PatternOverlay({ type }: { type: string }) {
  if (type === "radial") {
    return (
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px, 20px 20px",
        }}
      />
    );
  }
  if (type === "diagonal") {
    return (
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 24px)",
        }}
      />
    );
  }
  // grid
  return (
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 32px)",
      }}
    />
  );
}

/* ─── Product ordinal labels ──────────────────────────────────────────── */
const ordinals = ["01", "02", "03", "04", "05"];

/* ─── Visual Panel (the "image" area) — enhanced with actual product images ── */
function ProductVisualPanel({
  productId,
  name,
  category,
  tall = false,
  imageSrc,
}: {
  productId: number;
  name: string;
  category?: string;
  tall?: boolean;
  imageSrc?: string;
}) {
  const vis = productVisuals[productId] ?? productVisuals[1];
  const idx = productId - 1;

  return (
    <div
      className={`relative overflow-hidden ${tall ? "h-full min-h-[280px]" : "h-64 sm:h-72"} bg-gradient-to-br ${vis.gradient}`}
    >
      {/* Product Image — dominant visual element */}
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          {/* Dark scrim overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
      )}

      <PatternOverlay type={vis.pattern} />

      {/* Large ghost ordinal */}
      <span
        aria-hidden="true"
        className="absolute -bottom-3 -right-2 font-buda text-[9rem] leading-none text-white/[0.06] select-none pointer-events-none"
      >
        {ordinals[idx]}
      </span>

      {/* Gold corner accent */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#D4A017]/50" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#D4A017]/30" />

      {/* Category badge */}
      {category && (
        <div className="absolute top-5 right-5">
          <span className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold text-white/80 border border-white/30 backdrop-blur-sm bg-black/30">
            {category}
          </span>
        </div>
      )}

      {/* Bottom gradient scrim */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Product name overlay at bottom */}
      <div className="absolute bottom-5 left-5">
        <p className="font-serif text-lg font-bold text-white leading-tight drop-shadow-lg">
          {name}
        </p>
      </div>
    </div>
  );
}

/* ─── Product content block — enhanced with specs table ───────────────── */
function ProductContent({
  product,
  light = false,
}: {
  product: (typeof products)[0];
  light?: boolean;
}) {
  return (
    <div className={`flex flex-col h-full p-8 lg:p-10 ${light ? "bg-white" : "bg-[#FAFAFA]"}`}>
      {/* Category + ordinal row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-4 h-px bg-[#D4A017]" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold">
            {product.category ?? "Export Product"}
          </span>
        </div>
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#9CA3AF] tabular-nums">
          {ordinals[product.id - 1]}
        </span>
      </div>

      {/* Product name */}
      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#111827] leading-tight tracking-[-0.02em] mb-4">
        {product.name}
      </h3>

      {/* Description — short version */}
      <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
        {product.shortDescription}
      </p>

      {/* Specifications grid — new */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6 p-3 bg-[#1B4332]/[0.03] border border-[#1B4332]/[0.08]">
        <div className="flex flex-col">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">MOQ</span>
          <span className="text-[12px] font-medium text-[#111827] mt-1 leading-tight">{product.specifications.moq}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Packaging</span>
          <span className="text-[12px] font-medium text-[#111827] mt-1 leading-tight">{product.specifications.packaging}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Export Grade</span>
          <span className="text-[12px] font-medium text-[#111827] mt-1 leading-tight">{product.specifications.exportGrade}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">Supply Capacity</span>
          <span className="text-[12px] font-medium text-[#111827] mt-1 leading-tight">{product.specifications.supplyCapacity}</span>
        </div>
      </div>

      {/* Technical highlights */}
      {product.highlights && product.highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {product.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1B4332] bg-[#1B4332]/[0.06] border border-[#1B4332]/[0.10]"
            >
              <span className="w-1 h-1 rounded-full bg-[#D4A017] flex-shrink-0" />
              {h}
            </span>
          ))}
        </div>
      )}

      {/* Description — full version */}
      <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
        {product.description}
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="group/cta inline-flex items-center justify-between w-full px-5 py-3 bg-[#1B4332] text-white text-sm font-semibold hover:bg-[#143a28] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(27,67,50,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
      >
        <span>Request Export Quote</span>
        <svg
          aria-hidden="true"
          className="w-4 h-4 translate-x-0 group-hover/cta:translate-x-1 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function ProductEcosystem() {
  const coconutProducts = products.filter((p) => p.id <= 3);
  const processedProducts = products.filter((p) => p.id >= 4);

  return (
    <section
      id="products"
      aria-label="Product range — premium coconut export categories"
      className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-20"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">
                Our Products
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
              Premium Coconut{" "}
              <span className="text-[#1B4332]">Product Range</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="text-[#6B7280] text-sm leading-relaxed max-w-sm lg:text-right"
          >
            From fresh whole coconuts to processed industrial commodities — a complete portfolio for international procurement with full specification transparency.
          </motion.p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            TIER 1 — Whole Coconuts: Bento-style 3-panel strip
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-4"
        >
          {/* Tier label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#9CA3AF]">
              Whole Coconut — Category I
            </span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          {/* 3-panel grid: large left + two stacked right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#E5E7EB]">

            {/* Panel 1 — dominant */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              className="group lg:col-span-1 border-b sm:border-b-0 sm:border-r border-[#E5E7EB] overflow-hidden"
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-[1.02]">
                  <ProductVisualPanel
                    productId={1}
                    name={coconutProducts[0].name}
                    category={coconutProducts[0].category}
                    tall
                    imageSrc={coconutProducts[0].images.hero.src}
                  />
                </div>
              </div>
              <ProductContent product={coconutProducts[0]} light />
            </motion.div>

            {/* Panels 2 + 3 — stacked vertically on right two columns */}
            <div className="sm:col-span-1 lg:col-span-2 grid grid-rows-2 divide-y divide-[#E5E7EB]">
              {coconutProducts.slice(1).map((product, i) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                  className="group grid grid-cols-1 md:grid-cols-2 overflow-hidden"
                >
                  {/* Visual */}
                  <div className={`overflow-hidden border-b md:border-b-0 ${i % 2 === 0 ? "md:border-r border-[#E5E7EB]" : "md:order-last md:border-l border-[#E5E7EB]"}`}>
                    <div className="h-full transition-transform duration-700 group-hover:scale-[1.02]">
                      <ProductVisualPanel
                        productId={product.id}
                        name={product.name}
                        category={product.category}
                        tall
                        imageSrc={product.images.hero.src}
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <ProductContent product={product} light={i % 2 !== 0} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            TIER 2 — Processed Commodities: full-width alternating panels
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="mt-6"
        >
          {/* Tier label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#9CA3AF]">
              Processed Commodities — Category II
            </span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          <div className="border border-[#E5E7EB] divide-y divide-[#E5E7EB]">
            {processedProducts.map((product, i) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="group grid grid-cols-1 md:grid-cols-2 overflow-hidden"
              >
                {/* Visual — alternates left/right */}
                <div
                  className={`overflow-hidden border-b md:border-b-0 border-[#E5E7EB] ${
                    i % 2 !== 0
                      ? "md:order-last md:border-l"
                      : "md:border-r"
                  }`}
                >
                  <div className="transition-transform duration-700 group-hover:scale-[1.02]">
                    <ProductVisualPanel
                      productId={product.id}
                      name={product.name}
                      category={product.category}
                      tall
                    imageSrc={product.images.hero.src}
                  />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <ProductContent product={product} light={i % 2 !== 0} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer CTA strip ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-7 border border-[#1B4332]/12 bg-[#1B4332]/[0.03]"
        >
          <div>
            <p className="font-serif text-lg font-bold text-[#111827]">
              Need a custom product specification?
            </p>
            <p className="text-[#6B7280] text-sm mt-0.5">
              Our export team can accommodate MOQ, packaging, and grading to your exact requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-[#1B4332] text-white text-sm font-semibold tracking-wide hover:bg-[#143a28] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(27,67,50,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
          >
            Discuss Requirements
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
