"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";
import { trackOutboundClick } from "@/lib/analytics";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Short buyer-focused descriptions per product ───────────────────── */
const buyerInfo: Record<
  number,
  { forWhom: string; benefit: string }
> = {
  1: {
    forWhom: "For importers & wholesale distributors",
    benefit: "Consistent Grade A quality in every shipment — semi-husked, uniform sizing, certified for 15+ export markets.",
  },
  2: {
    forWhom: "For premium retailers & hospitality buyers",
    benefit: "Origin-certified sweet-water coconut with thick kernel — a premium product that commands higher retail margins.",
  },
  3: {
    forWhom: "For wholesale buyers & supermarket chains",
    benefit: "Triple-A quality with ±5g precision calibration — unmatched uniformity for retail programmes and bulk contracts.",
  },
  4: {
    forWhom: "For oil millers & industrial processors",
    benefit: "65–68% oil yield with ≤6% moisture — maximum extraction efficiency for edible oil, soap, and oleochemical manufacturing.",
  },
  5: {
    forWhom: "For hydroponic farms & horticulture distributors",
    benefit: "Low EC <0.5 mS/cm with 5–6× expansion — reduces freight costs by 80% compared to loose growing media.",
  },
};

/* ─── Grade abbreviations per product ────────────────────────────────── */
const gradeLabel: Record<number, string> = {
  1: "Export Grade A",
  2: "Premium Sweet Water",
  3: "Triple-A Export",
  4: "Industrial Grade",
  5: "Horticultural Grade",
};

/* ─── Bulk supply label per product ──────────────────────────────────── */
const bulkLabel: Record<number, string> = {
  1: "MOQ: 1 × 20ft FCL",
  2: "MOQ: 1 × 20ft FCL",
  3: "MOQ: 500 Bags",
  4: "MOQ: 1 × 20ft FCL",
  5: "MOQ: 1 × 20ft FCL",
};

/* ─── Get badge colour based on export grade ─────────────────────────── */
function gradeBadgeColor(name: string): string {
  if (name.toLowerCase().includes("premium") || name.toLowerCase().includes("triple")) {
    return "bg-[#D4A017]/15 text-[#D4A017] border-[#D4A017]/25";
  }
  return "bg-[#1B4332]/10 text-[#1B4332] border-[#1B4332]/15";
}

export default function ProductCategories() {
  return (
    <section
      id="products"
      aria-label="Our Product Range"
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

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
              Our Products
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Export-Grade{" "}
            <span className="text-[#1B4332]">Coconut Products</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            ISO & HACCP certified. Bulk supply from India. Trusted by importers, distributors, and industrial buyers across 15+ countries.
          </p>
        </motion.div>

        {/* ── Product Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => {
            const info = buyerInfo[product.id] ?? { forWhom: "", benefit: product.shortDescription };
            return (
              <motion.div
                key={product.id}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#1B4332]/20 hover:shadow-[0_8px_30px_rgba(27,67,50,0.08)] transition-all duration-300 flex flex-col"
              >
                {/* ═══ Image ═══ */}
                <div className="relative h-48 overflow-hidden bg-[#1B4332]">
                  <Image
                    src={product.images.hero.src}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Export Grade badge — top-left */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] font-bold rounded-md border ${gradeBadgeColor(gradeLabel[product.id] ?? "")}`}
                    >
                      {gradeLabel[product.id] ?? "Export Grade"}
                    </span>
                  </div>

                  {/* Bulk Supply badge — top-right */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] font-bold text-white/90 bg-black/40 backdrop-blur-sm border border-white/20 rounded-md">
                      {bulkLabel[product.id] ?? "Bulk Supply"}
                    </span>
                  </div>
                </div>

                {/* ═══ Content ═══ */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Product name */}
                  <h3 className="text-base font-bold text-[#111827] leading-tight mb-1">
                    {product.name}
                  </h3>

                  {/* Who it's for */}
                  <p className="text-[11px] text-[#D4A017] font-semibold uppercase tracking-[0.12em] mb-2">
                    {info.forWhom}
                  </p>

                  {/* Benefit-focused description */}
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3 mb-4">
                    {info.benefit}
                  </p>

                  {/* ═══ Two CTAs ═══ */}
                  <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-100">
                    {/* View Specifications */}
                    <a
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B4332] bg-[#1B4332]/6 border border-[#1B4332]/15 rounded-lg hover:bg-[#1B4332]/10 hover:border-[#1B4332]/30 transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Specifications
                    </a>

                    {/* Request Quote */}
                    <a
                      id={`product-card-request-quote-${product.slug}`}
                      data-tracking-id={`product-card-request-quote-${product.slug}`}
                      href="/#request-quote"
                      onClick={() =>
                        trackOutboundClick({ type: "request_quote", label: `Product Card Request Quote — ${product.name}` })
                      }
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white bg-[#D4A017] rounded-lg hover:bg-[#E4B42A] active:scale-[0.98] transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      Request Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
