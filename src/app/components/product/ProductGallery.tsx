"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "./ProductConstants";
import type { Product } from "@/types";

export default function ProductGallery({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">Product Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            Visual <span className="text-[#1B4332]">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main large image - close-up detail */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="md:col-span-7 row-span-2">
            <div className="group relative overflow-hidden bg-[#1B4332] h-full min-h-[340px] md:min-h-[480px] border border-[#E5E7EB]">
              <Image src={product.images.closeUp?.src ?? product.images.hero.src} alt={product.images.closeUp?.alt ?? product.images.hero.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 58vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-[#D4A017]/60" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-[#D4A017]/40" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/20">Product Detail</span>
              </div>
            </div>
          </motion.div>

          {/* Top right - packaging */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }} className="md:col-span-5">
            <div className="group relative overflow-hidden bg-[#1a3a1a] h-full min-h-[200px] md:min-h-[228px] border border-[#E5E7EB]">
              <Image src={product.images.packaging?.src ?? product.images.hero.src} alt={product.images.packaging?.alt ?? product.images.hero.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 42vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#D4A017]/50" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/20">Packaging</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom left - quality inspection */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }} className="md:col-span-3 md:row-start-2 md:col-start-8">
            <div className="group relative overflow-hidden bg-[#0d2b1e] h-full min-h-[200px] md:min-h-[228px] border border-[#E5E7EB]">
              <Image src={product.images.qualityInspection?.src ?? product.images.hero.src} alt={product.images.qualityInspection?.alt ?? product.images.hero.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#D4A017]/50" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/20">Quality Check</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom right - export loading */}
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }} className="md:col-span-2 md:row-start-2 md:col-start-11">
            <div className="group relative overflow-hidden bg-[#2a1a08] h-full min-h-[200px] md:min-h-[228px] border border-[#E5E7EB]">
              <Image src={product.images.containerLoading?.src ?? product.images.hero.src} alt={product.images.containerLoading?.alt ?? product.images.hero.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 16vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#D4A017]/50" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/20">Export Loading</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
