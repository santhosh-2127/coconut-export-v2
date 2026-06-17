"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { products as productData } from "@/data/products";
import { trackRFQSubmission, trackEvent } from "@/lib/analytics";
import type { Product } from "@/types";
import SuccessScreen from "@/app/components/shared/SuccessScreen";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Form Data ────────────────────────────────────────────────────────── */
interface FormData {
  name: string;
  companyName: string;
  country: string;
  email: string;
  whatsapp: string;
  product: string;
  quantity: string;
  message: string;
}

function initialForm(productName: string): FormData {
  return {
    name: "",
    companyName: "",
    country: "",
    email: "",
    whatsapp: "",
    product: productName,
    quantity: "",
    message: "",
  };
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

/* ─── Product Options ──────────────────────────────────────────────────── */
const PRODUCT_OPTIONS = productData.map((p) => ({
  value: p.name,
  label: p.name,
}));

/* ─── Input Styles (matches home page RFQ form exactly) ────────────────── */
const baseInput =
  "w-full px-4 py-3 rounded-xl border text-sm text-[#111827] placeholder-gray-400 " +
  "bg-[#FAFAFA] focus:outline-none transition-all duration-200 " +
  "focus:ring-2 focus:ring-[#1B4332]/25 focus:border-[#1B4332]/50 " +
  "hover:border-[#1B4332]/25";

const inputCls = (err?: string) =>
  err
    ? `${baseInput} border-red-400/60 focus:ring-red-400/25 focus:border-red-400/60`
    : `${baseInput} border-gray-200`;

const labelCls =
  "block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5";

export default function ProductCTA({ product }: { product: Product }) {
  const [form, setForm] = useState<FormData>(initialForm(product.name));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [rfqStarted, setRfqStarted] = useState(false);

  // Re-initialize form if product changes
  useEffect(() => {
    setForm(initialForm(product.name));
    setErrors({});
    setStatus("idle");
    setRfqStarted(false);
  }, [product.name]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = "Name is required.";
    if (!form.companyName.trim() || form.companyName.trim().length < 2)
      errs.companyName = "Company name is required.";
    if (!form.country.trim()) errs.country = "Country is required.";
    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    )
      errs.email = "Enter a valid email address.";
    if (!form.product) errs.product = "Select a product.";
    if (!form.quantity.trim())
      errs.quantity = "Enter estimated quantity.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    if (!rfqStarted) {
      setRfqStarted(true);
      trackEvent("form_start", { form_name: "product_cta_rfq" });
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    trackRFQSubmission({
      products: [form.product],
      volume: `${form.quantity} (${form.companyName})`,
      incoterm: "",
      country: form.country,
      source: "product-page-cta",
    });

    // Frontend-only demo mode
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setForm(initialForm(product.name));
    setErrors({});
    setStatus("idle");
    setRfqStarted(false);
  };

  return (
    <section
      id="product-cta"
      className="relative py-14 md:py-16 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)" }}
      aria-label={`Request Export Quotation for ${product.name}`}
    >
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)', backgroundSize: "28px 28px" }} aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle at 70% 20%, rgba(212,160,23,0.10) 0%, transparent 60%)" }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 80%, rgba(27,67,50,0.25) 0%, transparent 60%)" }} aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Get A Quotation
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Request Export{" "}
            <span className="text-[#D4A017]">Quotation</span>
          </h2>
          <p className="mt-4 text-green-200/60 text-sm md:text-base leading-relaxed">
            Tell us your requirements and our export specialists will prepare a customized quotation within 24 hours.
          </p>
        </motion.div>

        {/* ── Trust Strip — Compact pill badges above form ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-3xl mx-auto mb-5"
        >
          {/* Desktop: single row — Mobile: two rows of two */}
          <div className="flex flex-wrap justify-center gap-x-0 gap-y-2">
            {[
              { icon: "⚡", label: "Response Within Minutes" },
              { icon: "🌍", label: "Export Specialists" },
              { icon: "🚢", label: "Global Shipping Support" },
              { icon: "📦", label: "Bulk Order Assistance" },
            ].map((item, i, arr) => (
              <span key={item.label} className="inline-flex items-center">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.07] border border-[#D4A017]/20 text-[11px] sm:text-[12px] font-semibold text-white/80 leading-none whitespace-nowrap">
                  <span className="text-[12px] leading-none" aria-hidden="true">{item.icon}</span>
                  {item.label}
                </span>
                {/* Separator dot — hidden after last item */}
                {i < arr.length - 1 && (
                  <span className="mx-2 text-[#D4A017]/40 text-[10px] select-none" aria-hidden="true">•</span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-3 text-center text-[11px] sm:text-[12px] text-white/30 leading-relaxed max-w-2xl mx-auto">
            Join importers across{" "}
            <span className="text-[#D4A017] font-semibold">15+ countries</span>{" "}
            who trust{" "}
            <span className="text-[#D4A017] font-semibold">Global Coco Exports</span>.
          </p>
        </motion.div>

        {/* ── Form Card ── */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/40 border border-white/10 bg-white"
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#f5c842] to-[#D4A017]"
              aria-hidden="true"
            />

            {status === "success" ? (
              <SuccessScreen
                title="Thank You. Your quotation request has been received."
                message="Our export specialists will reach out shortly."
                responseTime="Minutes"
                showTrust={true}
                primaryCta={{
                  label: "Return Home",
                  href: "/",
                }}
                secondaryCta={{
                  label: "Chat on WhatsApp",
                  href: "https://wa.me/919876543210",
                }}
              />
            ) : (
              <div className="px-6 sm:px-8 py-7">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="product-cta-name" className={labelCls}>
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="product-cta-name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={inputCls(errors.name)}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p role="alert" className="text-red-500 text-[11px] mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="product-cta-company" className={labelCls}>
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="product-cta-company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Your Company Ltd."
                        value={form.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        className={inputCls(errors.companyName)}
                        aria-invalid={!!errors.companyName}
                      />
                      {errors.companyName && (
                        <p role="alert" className="text-red-500 text-[11px] mt-1">{errors.companyName}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor="product-cta-country" className={labelCls}>
                        Country <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="product-cta-country"
                        type="text"
                        autoComplete="country-name"
                        placeholder="United Arab Emirates"
                        value={form.country}
                        onChange={(e) => handleChange("country", e.target.value)}
                        className={inputCls(errors.country)}
                        aria-invalid={!!errors.country}
                      />
                      {errors.country && (
                        <p role="alert" className="text-red-500 text-[11px] mt-1">{errors.country}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="product-cta-email" className={labelCls}>
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="product-cta-email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputCls(errors.email)}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p role="alert" className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label htmlFor="product-cta-whatsapp" className={labelCls}>
                        WhatsApp Number
                      </label>
                      <input
                        id="product-cta-whatsapp"
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={form.whatsapp}
                        onChange={(e) => handleChange("whatsapp", e.target.value)}
                        className={inputCls()}
                      />
                    </div>

                    {/* Product Required — auto-populated */}
                    <div>
                      <label htmlFor="product-cta-product" className={labelCls}>
                        Product Required <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="product-cta-product"
                          value={form.product}
                          onChange={(e) => handleChange("product", e.target.value)}
                          className={`${inputCls(errors.product)} appearance-none pr-10`}
                          aria-invalid={!!errors.product}
                        >
                          <option value="">Select a product…</option>
                          {PRODUCT_OPTIONS.map((p) => (
                            <option key={p.value} value={p.value}>{p.label}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 5l4 4 4-4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      {errors.product && (
                        <p role="alert" className="text-red-500 text-[11px] mt-1">{errors.product}</p>
                      )}
                    </div>
                  </div>

                  {/* Estimated Quantity — full width */}
                  <div className="mt-4 sm:mt-5">
                    <label htmlFor="product-cta-quantity" className={labelCls}>
                      Estimated Quantity <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="product-cta-quantity"
                      type="text"
                      placeholder="e.g. 25 Metric Tons, 1 × 20ft Container"
                      value={form.quantity}
                      onChange={(e) => handleChange("quantity", e.target.value)}
                      className={inputCls(errors.quantity)}
                      aria-invalid={!!errors.quantity}
                    />
                    {errors.quantity && (
                      <p role="alert" className="text-red-500 text-[11px] mt-1">{errors.quantity}</p>
                    )}
                  </div>

                  {/* Message — full width */}
                  <div className="mt-4 sm:mt-5">
                    <label htmlFor="product-cta-message" className={labelCls}>
                      Message
                    </label>
                    <textarea
                      id="product-cta-message"
                      rows={3}
                      placeholder="Any special requirements, packaging preferences, or questions…"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`${inputCls()} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100">
                    <button
                      id="product-cta-form-submit"
                      data-tracking-id="product-cta-form-submit"
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1B4332] text-white font-bold text-sm rounded-xl hover:bg-[#143a28] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#1B4332]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M2 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Request Quotation
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy note */}
                  <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                    🔒 Your details are used only to respond to your enquiry.
                    We do not share your information with third parties.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
