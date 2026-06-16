"use client";

import { motion } from "framer-motion";
import { trackOutboundClick } from "@/lib/analytics";
import type { Product } from "@/types";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Props ───────────────────────────────────────────────────────────── */
interface ProductContactCTAProps {
  product: Product;
}

export default function ProductContactCTA({ product }: ProductContactCTAProps) {
  return (
    <section
      id="contact"
      aria-label="Contact Export Team"
      className="relative py-10 md:py-14 overflow-hidden bg-white"
    >
      <div className="relative max-w-4xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Get In Touch</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Ready to Order{" "}
            <span className="text-[#1B4332]">{product.name}</span>?
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Our export team is ready to help with pricing, specifications, and shipping arrangements.
          </p>
        </motion.div>

        {/* ── Contact Options ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Request Quote */}
          <motion.a
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            id="product-contact-request-quote"
            data-tracking-id="product-contact-request-quote"
            href="/#request-quote"
            onClick={() => trackOutboundClick({ type: "request_quote", label: "Product Contact Quote", product: product.name })}
            className="group relative bg-[#1B4332] text-white rounded-2xl p-5 overflow-hidden hover:bg-[#143A28] transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4A017] via-[#f5c842] to-[#D4A017]" />
            <div className="relative">
              <span className="text-xl block mb-2">📋</span>
              <h3 className="text-sm font-bold mb-1">Request Quote</h3>
              <p className="text-[11px] text-white/60 leading-snug">Get prompt bulk pricing</p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            id="product-contact-chat-whatsapp"
            data-tracking-id="product-contact-chat-whatsapp"
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick({ type: "whatsapp", label: "Product Contact WhatsApp", product: product.name })}
            className="group relative bg-[#25D366] text-white rounded-2xl p-5 overflow-hidden hover:bg-[#20BD5A] transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/30" />
            <div className="relative">
              <span className="text-xl block mb-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <h3 className="text-sm font-bold mb-1">WhatsApp</h3>
              <p className="text-[11px] text-white/60 leading-snug">Quick reply in 2 hours</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            href={`mailto:info@globalcocoexports.com?subject=Inquiry%3A%20${encodeURIComponent(product.name)}`}
            onClick={() => trackOutboundClick({ type: "email", label: "Product Contact Email", product: product.name })}
            className="group relative bg-[#FAFAFA] border border-[#E5E7EB] text-[#111827] rounded-2xl p-5 overflow-hidden hover:border-[#1B4332]/20 hover:shadow-md transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <span className="text-xl block mb-2">✉️</span>
              <h3 className="text-sm font-bold mb-1">Email Us</h3>
              <p className="text-[11px] text-gray-500 leading-snug">info@globalcocoexports.com</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            href="tel:+91XXXXXXXXXX"
            onClick={() => trackOutboundClick({ type: "phone", label: "Product Contact Phone", product: product.name })}
            className="group relative bg-[#FAFAFA] border border-[#E5E7EB] text-[#111827] rounded-2xl p-5 overflow-hidden hover:border-[#1B4332]/20 hover:shadow-md transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <span className="text-xl block mb-2">📞</span>
              <h3 className="text-sm font-bold mb-1">Call Now</h3>
              <p className="text-[11px] text-gray-500 leading-snug">Mon–Sat, 9 AM–6 PM IST</p>
            </div>
          </motion.a>
        </div>

        {/* ── Trust Note ── */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-[11px] text-gray-400 mt-6"
        >
          🔒 All inquiries handled confidentially. We respond within minutes.
        </motion.p>
      </div>
    </section>
  );
}
