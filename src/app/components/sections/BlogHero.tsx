"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/animations";

const container = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const badges = [
  { label: "Product Guides" },
  { label: "Export Documentation" },
  { label: "Quality Standards" },
  { label: "Shipping & Logistics" },
];

export default function BlogHero() {
  return (
    <section
      id="blog-hero"
      aria-label="Industry Insights & Export Knowledge"
      className="relative h-[95dvh] h-[95vh] min-h-[95dvh] min-h-[95vh] max-h-[95vh] lg:h-auto lg:min-h-screen lg:max-h-none flex items-center justify-center overflow-hidden bg-[#0C1A12]"
    >
      {/* Single responsive background image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/products/fresh-brown-coconut/Fresh-Brown-image.png"
            alt="Fresh brown coconut export — premium quality coconut products for global buyers"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Deep green branded overlay for text readability */}
        <div className="absolute inset-0 bg-[#0C1A12]/70" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold radial glow — top-right */}
        <div className="absolute -top-48 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#D4A017]/[0.06] blur-[160px]" />
        {/* Green radial glow — bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.30] blur-[140px]" />
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1A12]/60 via-transparent to-[#0C1A12]/40" />
        {/* Gold bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 md:py-0 flex items-center">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="max-w-[800px]"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#D4A017]" />
              <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.24em]">
                Knowledge Center
              </span>
              <span className="block w-8 h-px bg-[#D4A017]/50" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-white font-bold">
              Export Knowledge
              <br />
              <span className="text-[#D4A017]">For Global Buyers</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] sm:text-base text-white/60 leading-relaxed max-w-[640px] font-medium">
              Export guides, market trends, and coconut industry insights for international buyers and importers.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white/80 bg-white/[0.06] border border-white/[0.12] rounded-full"
                >
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
