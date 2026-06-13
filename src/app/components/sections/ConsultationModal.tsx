"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
}

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

const submissions: FormData[] = [];

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLInputElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      firstFocusableRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.country) {
      newErrors.country = "Please select your country";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    submissions.push({ ...formData });
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      preferredDate: "",
      message: "",
    });
    setErrors({});
    setSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a consultation"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background:
                "linear-gradient(145deg, #0a1f16 0%, #0d2d1f 35%, #102a1e 65%, #0a1a12 100%)",
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #D4A017 30%, #f5c842 50%, #D4A017 70%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* Close button */}
            <button
              ref={lastFocusableRef}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              aria-label="Close consultation modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {submitted ? (
              <div className="px-8 py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#D4A017]/20 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Consultation Request Received
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto">
                  Thank you. Our export team will contact you within 24 business hours to schedule your consultation.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-wide uppercase rounded-xl hover:bg-[#E4B42A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d2d1f]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="px-8 py-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="block w-6 h-px bg-[#D4A017]" />
                    <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.2em]">
                      Consultation
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    Schedule a Consultation
                  </h2>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">
                    Fill in your details and our export team will get back to you.
                  </p>
                </div>

                {/* Form fields */}
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="consult-fullName" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        ref={firstFocusableRef}
                        id="consult-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all"
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="consult-company" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="consult-company"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="consult-email" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="consult-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="consult-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="consult-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="consult-country" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                        Country <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="consult-country"
                        value={formData.country}
                        onChange={(e) => handleChange("country", e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff4d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 6l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "14px",
                        }}
                      >
                        <option value="" disabled className="bg-[#0d2d1f] text-white/50">Select country</option>
                        {countries.map((c) => (
                          <option key={c} value={c} className="bg-[#0d2d1f] text-white">{c}</option>
                        ))}
                      </select>
                      {errors.country && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.country}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="consult-date" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                        Preferred Consultation Date
                      </label>
                      <input
                        id="consult-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange("preferredDate", e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all [color-scheme:dark]"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consult-message" className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                      Message / Requirements
                    </label>
                    <textarea
                      id="consult-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D4A017]/60 focus:bg-white/[0.08] transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white/60 hover:text-white border border-white/20 rounded-xl hover:bg-white/[0.06] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-wide uppercase rounded-xl hover:bg-[#E4B42A] transition-all disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d2d1f]"
                  >
                    {submitting ? "Submitting..." : "Submit Consultation Request"}
                    {!submitting && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M1 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
