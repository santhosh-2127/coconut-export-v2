/* ═══════════════════════════════════════════════════════════════
   CONTACT CONSTANTS
   Reusable contact-related constants for the website.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Contact Form Fields ────────────────────────────── */
export const CONTACT_FORM_FIELDS = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
    minLength: 2,
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    placeholder: "Your company",
    required: true,
    minLength: 1,
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "Your country",
    required: true,
    minLength: 1,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "corporate@example.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 98765 43210",
    required: false,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Describe your sourcing requirements, quantities, or any questions...",
    required: true,
    minLength: 10,
  },
] as const;

/* ─── Response Time Promises ─────────────────────────── */
export const RESPONSE_TIME = {
  STANDARD: "24 hours",
  URGENT: "Same-day response",
  RFQ: "24 hours",
} as const;

/* ─── Trust Signals ─────────────────────────────────── */
export const CONTACT_TRUST_SIGNALS = [
  { icon: "🔒", text: "Your information is kept confidential" },
  { icon: "⏱️", text: "Same-day response for urgent inquiries" },
  { icon: "🌐", text: "International buyer support available" },
  { icon: "📋", text: "B2B enquiries only — no retail sales" },
] as const;

/* ─── Contact Page Feature Tiles ─────────────────────── */
export const CONTACT_FEATURES = [
  {
    icon: "💬",
    title: "Direct WhatsApp Access",
    description: "Connect instantly with our export team via WhatsApp for quick queries and price checks.",
  },
  {
    icon: "📞",
    title: "Phone Consultation",
    description: "Schedule a call with a senior export manager for detailed discussions on your sourcing needs.",
  },
  {
    icon: "📧",
    title: "Email Support",
    description: "Send detailed enquiries via email — our team responds within 24 hours guaranteed.",
  },
  {
    icon: "🏢",
    title: "Virtual Meetings",
    description: "Schedule a video call to discuss long-term supply agreements and partnership opportunities.",
  },
] as const;
