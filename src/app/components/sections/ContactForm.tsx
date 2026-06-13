"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";



/* ─── Types ──────────────────────────────────── */
interface FormData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

/* ─── Styles ─────────────────────────────────── */
const inputCls =
  "w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A017]/30 focus:border-[#D4A017] transition-all duration-200";
const labelCls = "block text-[11px] uppercase tracking-[2px] text-gray-500 font-semibold mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMsg, setServerMsg] = useState("");

  /* ─── Validation ───────────────────────────── */
  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.company.trim()) errs.company = "Company name is required";
    if (!form.country.trim()) errs.country = "Country is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[\d\s\+\-\(\)]{7,20}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /* ─── Submit ───────────────────────────────── */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend-only demo mode — show success modal without calling API
    setStatus("success");
    setServerMsg(
      "Thank you for your inquiry. Our export team will contact you shortly. This is currently a demonstration version."
    );
    setForm({ name: "", company: "", country: "", email: "", phone: "", message: "" });
  };

  /* ─── Field change handler ─────────────────── */
  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact-form" aria-label="Quick Inquiry Form" className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#FAFAFA]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D4A017]" />
              <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Send Inquiry</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
              Quick{" "}<span className="text-[#D4A017]">Inquiry</span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              Fill out the form and our export team will get back to you within 24 hours with the information you need.
            </p>

            {/* Trust notes */}
            <div className="mt-8 space-y-4">
              {[
                { icon: "🔒", text: "Your information is kept confidential" },
                { icon: "⏱️", text: "Same-day response for urgent inquiries" },
                { icon: "🌐", text: "International buyer support available" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
                      <path d="M2 10l8 8L26 2" stroke="#1B4332" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2">Inquiry Sent Successfully</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. Our export team will review your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-semibold rounded-full hover:bg-[#143a28] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm"
                  noValidate
                >
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className={labelCls}>Full Name</label>
                      <input id="contact-name" type="text" placeholder="Your full name" className={`${inputCls} ${errors.name ? "ring-2 ring-red-300 border-red-300" : ""}`}
                        value={form.name} onChange={(e) => handleChange("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
                      {errors.name && <p id="contact-name-error" className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-company" className={labelCls}>Company Name</label>
                      <input id="contact-company" type="text" placeholder="Your company" className={`${inputCls} ${errors.company ? "ring-2 ring-red-300 border-red-300" : ""}`}
                        value={form.company} onChange={(e) => handleChange("company", e.target.value)} aria-invalid={!!errors.company} aria-describedby={errors.company ? "contact-company-error" : undefined} />
                      {errors.company && <p id="contact-company-error" className="text-red-500 text-[10px] mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Country + Email */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-country" className={labelCls}>Country</label>
                      <input id="contact-country" type="text" placeholder="Your country" className={`${inputCls} ${errors.country ? "ring-2 ring-red-300 border-red-300" : ""}`}
                        value={form.country} onChange={(e) => handleChange("country", e.target.value)} aria-invalid={!!errors.country} aria-describedby={errors.country ? "contact-country-error" : undefined} />
                      {errors.country && <p id="contact-country-error" className="text-red-500 text-[10px] mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelCls}>Email Address</label>
                      <input id="contact-email" type="email" placeholder="corporate@example.com" className={`${inputCls} ${errors.email ? "ring-2 ring-red-300 border-red-300" : ""}`}
                        value={form.email} onChange={(e) => handleChange("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
                      {errors.email && <p id="contact-email-error" className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label htmlFor="contact-phone" className={labelCls}>Phone Number</label>
                    <input id="contact-phone" type="tel" placeholder="+91 98765 43210" className={`${inputCls} ${errors.phone ? "ring-2 ring-red-300 border-red-300" : ""}`}
                      value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} />
                    {errors.phone && <p id="contact-phone-error" className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="contact-message" className={labelCls}>Message</label>
                    <textarea id="contact-message" rows={4} placeholder="Describe your sourcing requirements, quantities, or any questions..." className={`${inputCls} resize-none ${errors.message ? "ring-2 ring-red-300 border-red-300" : ""}`}
                      value={form.message} onChange={(e) => handleChange("message", e.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
                    {errors.message && <p id="contact-message-error" className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                  </div>

                  {/* Error message */}
                  {status === "error" && serverMsg && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-xs">{serverMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1B4332] text-white font-semibold text-sm tracking-[0.04em] rounded-full hover:bg-[#143a28] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                          <path d="M8 1l5 5-5 5M1 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-gray-400 mt-4">
                    By submitting, you agree to our{" "}
                    <a href="#" className="underline underline-offset-2 hover:text-[#1B4332]">privacy policy</a>.
                    Your data will not be shared with third parties.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
