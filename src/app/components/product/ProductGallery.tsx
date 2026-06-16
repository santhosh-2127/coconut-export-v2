"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "./ProductConstants";
import type { Product } from "@/types";

const LABELS = ["Export Grade", "Packaging", "Storage", "Bulk Supply", "Quality Inspection"];

export default function ProductGallery({ product }: { product: Product }) {
  const images = product.gallery;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (images.length === 0) return null;

  const featured = images[0];
  const remaining = images.slice(1, 5);

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
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            Visual <span className="text-[#1B4332]">Showcase</span>
          </h2>
        </motion.div>

        {/* Desktop: Magazine layout */}
        <div className="hidden lg:grid grid-cols-12 gap-5">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="col-span-8 row-span-2 cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-lg shadow-lg group">
              <Image src={featured.src} alt={featured.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="66vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/20 rounded">{LABELS[0]}</span>
              </div>
            </div>
          </motion.div>

          {remaining.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.05 }}
              className={`${i < 2 ? "col-span-4" : "col-span-6"} cursor-pointer`}
              onClick={() => openLightbox(i + 1)}
            >
              <div className={`relative overflow-hidden rounded-lg shadow-md group ${i < 2 ? "min-h-[240px]" : "min-h-[280px]"}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/20 rounded">{LABELS[i + 1]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet: Masonry layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
          {images.slice(0, 5).map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`cursor-pointer ${i === 0 ? "row-span-2" : ""}`}
              onClick={() => openLightbox(i)}
            >
              <div className={`relative overflow-hidden rounded-lg shadow-md group ${i === 0 ? "min-h-[500px]" : "min-h-[240px]"}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/20 rounded">{LABELS[i]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Swipeable gallery */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-4 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <style>{`div[data-gallery-scroll]::-webkit-scrollbar { display: none; }`}</style>
          <div data-gallery-scroll className="flex gap-4">
            {images.slice(0, 5).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="snap-center shrink-0 w-[calc(100vw-32px)] max-w-[400px] cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group">
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) calc(100vw - 32px), 85vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/20 rounded">{LABELS[i]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors p-2"
            aria-label="Close lightbox"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Previous image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Next image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
          <div className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3] mx-6" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length} &mdash; {LABELS[selectedIndex]}
          </div>
        </div>
      )}
    </section>
  );
}
