"use client";

import { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { trackOutboundClick, trackProductView } from "@/lib/analytics";
import type { Product } from "@/types";

/* ─── Animation variants ──────────────────────────────────────────────── */
const fadeLeft: Variants = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 } },
};

const footerFadeUp: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.45 } },
};

const statReveal: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.55 + i * 0.07, ease: "backOut" },
  }),
};

export default function ProductCTA({ product }: { product: Product }) {
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      trackProductView({
        name: product.name,
        id: product.id,
        category: product.category,
      });
    }
  }, [product]);
  return (
    <section className="relative py-14 md:py-16 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)" }}
      aria-label={`Request quotation for ${product.name}`}>
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)', backgroundSize: "28px 28px" }} aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle at 70% 20%, rgba(212,160,23,0.10) 0%, transparent 60%)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 80%, rgba(27,67,50,0.25) 0%, transparent 60%)" }} aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">
          {/* Left: Brand */}
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A017] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A017]" />
                </span>
              </div>
              <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Ready to Order</p>
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-[1.12] mb-6">
              Need Bulk Pricing For<br />
              <span className="text-[#D4A017]">{product.name}</span><br />?
            </h2>
            <p className="text-green-200/60 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Our export team provides competitive pricing, technical datasheets, and full logistics support for importers and distributors worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: "⏱", text: "Response within 24 hours" },
                { icon: "📄", text: "Technical Datasheet Included" },
                { icon: "🚢", text: "Door-to-Port Logistics" },
                { icon: "📋", text: "Full Documentation Support" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3 hover:bg-white/[0.07] transition-colors">
                  <span className="text-base flex-shrink-0" aria-hidden="true">{t.icon}</span>
                  <span className="text-white/70 text-xs font-medium leading-snug">{t.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-white/8">
              <span className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mr-2">Certified</span>
              {product.certifications.map((cert) => (
                <span key={cert} className="text-[10px] font-bold text-white/50 border border-white/10 rounded-full px-2.5 py-1 bg-white/[0.04]">{cert}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#f5c842] to-[#D4A017]" aria-hidden="true" />
              <div className="bg-white rounded-2xl">
                <div className="px-8 pt-8 pb-5 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#111827] leading-tight">Get Started Today</h3>
                      <p className="text-gray-400 text-xs mt-1">Two simple ways to proceed</p>
                    </div>
                    <div className="flex-shrink-0 ml-4 flex flex-col items-center bg-[#1B4332]/6 border border-[#1B4332]/12 rounded-xl px-3 py-2">
                      <span className="text-[#1B4332] font-black text-lg leading-none">24h</span>
                      <span className="text-[#1B4332]/60 text-[9px] uppercase tracking-wider font-semibold leading-none mt-0.5">Response</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-8 space-y-4">
                  <a href={`/rfq?product=${product.slug}&source=product-page`}
                    onClick={() => trackOutboundClick({ type: "request_quote", label: "Product Page RFQ", product: product.name })}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#1B4332] text-white font-bold text-sm py-4 rounded-xl hover:bg-[#143a28] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#1B4332]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Request Bulk Quotation
                  </a>
                  <a href={`mailto:info@globalcocoexports.com?subject=Technical%20Datasheet%20Request%20-%20${encodeURIComponent(product.name)}`}
                    onClick={() => trackOutboundClick({ type: "download_datasheet", label: "Product Datasheet", product: product.name })}
                    className="w-full flex items-center justify-center gap-2 border border-[#1B4332]/20 text-[#1B4332] font-semibold text-sm py-3.5 rounded-xl hover:bg-[#1B4332]/5 hover:border-[#1B4332]/35 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <rect x="1" y="2" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M1 6h13" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M5 1v2M10 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    Request Technical Datasheet
                  </a>
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-[10px] text-gray-400 uppercase tracking-wider">Or</span>
                    </div>
                  </div>
                  <a href="tel:+91XXXXXXXXXX"
                    onClick={() => trackOutboundClick({ type: "phone", label: "Product Page Call", product: product.name })}
                    className="w-full flex items-center justify-center gap-2 border border-[#D4A017]/30 text-[#D4A017] font-semibold text-sm py-3.5 rounded-xl hover:bg-[#D4A017]/5 hover:border-[#D4A017]/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <path d="M2.5 2.5h3l1.5 3-2 2a6 6 0 003 3l2-2 3 1.5v3A8 8 0 012.5 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Call Our Export Team
                  </a>
                  <p className="text-[11px] text-gray-400 text-center mt-2 leading-relaxed">🔒 Your enquiry is handled with full confidentiality. We respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          variants={footerFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {product.ctaStats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={statReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center py-7 px-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <span className="text-3xl font-bold text-[#D4A017] leading-none">{s.value}</span>
              <span className="text-white/35 text-[10px] uppercase tracking-widest mt-1.5 text-center">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
