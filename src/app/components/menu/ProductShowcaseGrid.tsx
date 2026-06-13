"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { trackOutboundClick } from "@/lib/analytics";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Card category accent colours ────────────────────────────────────── */
const categoryAccents: Record<string, string> = {
  "Whole Coconut": "#1B4332",
  "Processed Commodity": "#8B6914",
  "Agricultural Input": "#2d6a4f",
};

export default function ProductShowcaseGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="product-showcase"
      ref={sectionRef}
      aria-label="Product showcase grid"
      className="relative py-20 md:py-24 overflow-hidden bg-white"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B4332 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Product Range
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Complete Export{" "}
            <span className="text-[#1B4332]">Product Portfolio</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Five premium product categories — each graded, inspected, and
            packaged to meet international export standards.
          </p>
        </motion.div>

        {/* ── Product Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => {
            const accent = categoryAccents[product.category] ?? "#1B4332";
            const isFeatured = index === 0;

            return (
              <motion.article
                key={product.id}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative bg-white border border-[#E5E7EB] hover:border-[${accent}]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col ${
                  isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* Accent top edge */}
                <div
                  className="absolute top-0 inset-x-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accent}66)` }}
                />

                {/* Product Image */}
                <div className={`relative overflow-hidden ${isFeatured ? "h-72 md:h-80" : "h-52"}`}>
                  <Image
                    src={product.images.hero.src}
                    alt={product.images.hero.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full border"
                      style={{
                        background: `${accent}CC`,
                        borderColor: `${accent}`,
                        color: "white",
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Ordinal */}
                  <span className="absolute bottom-3 right-4 text-white/30 text-5xl font-bold leading-none">
                    {String(product.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  {/* Name */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[#111827] leading-tight mb-2">
                    {product.name}
                  </h3>

                  {/* Short description */}
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4 flex-1">
                    {product.shortDescription}
                  </p>

                  {/* Key highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D4A017] bg-[#D4A017]/[0.06] px-2 py-1 rounded">
                      {product.specifications.exportGrade}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1B4332] bg-[#1B4332]/[0.06] px-2 py-1 rounded">
                      {product.specifications.moq}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-4" />

                  {/* Benefit stat */}
                  {product.highlights && product.highlights.length > 0 && (
                    <p className="text-xs text-gray-500 mb-4 leading-snug">
                      <span className="text-[#D4A017] font-semibold">Key Benefit: </span>
                      {product.highlights.slice(0, 2).join(" · ")}
                    </p>
                  )}

                  {/* View Details Button */}
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={() =>
                      trackOutboundClick({
                        type: "request_quote",
                        label: `Menu Page View ${product.name}`,
                      })
                    }
                    className="inline-flex items-center justify-between w-full px-5 py-3 bg-[#1B4332] text-white text-sm font-semibold rounded-xl hover:bg-[#143a28] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(27,67,50,0.20)]"
                  >
                    <span>View Details</span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
