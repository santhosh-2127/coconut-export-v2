/* ═══════════════════════════════════════════════════════════════
   CENTRALIZED COMPANY CONFIGURATION
   Single source of truth for all company-related data.
   Import this file for any company info across the application.
   ═══════════════════════════════════════════════════════════════ */

import type {
  CompanyInfo,
  Stat,
  Certification,
  ContactInfo,
  BusinessHours,
  SocialLinks,
} from "@/types";

/* ─── Company Identity ──────────────────────────────── */
export const COMPANY: CompanyInfo = {
  name: "Global Coco Exports",
  legalName: "Global Coco Exports Private Limited",
  tagline: "Premium Coconut & Coir Export Solutions",
  description:
    "ISO & HACCP certified exporter of premium coconut, copra, and coco peat products from Tamil Nadu, India. Serving importers, distributors, and industrial buyers across 15+ countries.",
  foundedYear: 2015,
  email: "info@globalcocoexports.com",
  phone: "+91 XXXXXXXXXX",
  whatsapp: "+91 XXXXXXXXXX",
  address: "Tamil Nadu, India",
  fullAddress: {
    street: "123, Coconut Export Hub, Industrial Estate",
    city: "Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641001",
    country: "India",
  },
  coordinates: {
    lat: 11.0168,
    lng: 76.9558,
  },
};

/* ─── Contact Information ───────────────────────────── */
export const CONTACT: ContactInfo = {
  primary: {
    email: "info@globalcocoexports.com",
    phone: "+91 XXXXXXXXXX",
    whatsapp: "+91 XXXXXXXXXX",
  },
  sales: {
    email: "sales@globalcocoexports.com",
    phone: "+91 XXXXXXXXXX",
  },
  support: {
    email: "support@globalcocoexports.com",
    phone: "+91 XXXXXXXXXX",
  },
  procurement: {
    email: "procurement@globalcocoexports.com",
  },
};

/* ─── Business Hours ────────────────────────────────── */
export const BUSINESS_HOURS: BusinessHours = {
  timezone: "IST (UTC+5:30)",
  weekday: { open: "09:00", close: "18:00" },
  saturday: { open: "09:00", close: "13:00" },
  sunday: null,
  holidays: [
    "Republic Day (Jan 26)",
    "Independence Day (Aug 15)",
    "Gandhi Jayanti (Oct 2)",
    "Diwali",
    "Pongal",
    "Christmas (Dec 25)",
  ],
  note: "All hours are India Standard Time (IST). After-hours enquiries receive next-business-day responses.",
};

/* ─── Social Media Links ────────────────────────────── */
export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://www.linkedin.com/company/globalcocoexports",
  facebook: "https://www.facebook.com/globalcocoexports",
  instagram: "https://www.instagram.com/globalcocoexports",
  twitter: "https://twitter.com/globalcocoexports",
  youtube: "https://www.youtube.com/@globalcocoexports",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
};

/* ─── Key Statistics ────────────────────────────────── */
export const STATS: Stat[] = [
  { value: "15+", label: "Countries Served" },
  { value: "500+", label: "Containers Exported" },
  { value: "10+", label: "Years Experience" },
  { value: "5", label: "Core Products" },
];

/* ─── Certifications ────────────────────────────────── */
export const CERTIFICATIONS: Certification[] = [
  { name: "ISO 22000" },
  { name: "HACCP" },
  { name: "APEDA" },
  { name: "SGS Verified" },
];

/* ─── Company Identifiers ───────────────────────────── */
export const COMPANY_IDS = {
  GSTIN: "33XXXXXXXXXXXXX",
  IEC: "XXXXXXXXXXXX",
  APEDA_REG_NO: "XXXXXXXX",
  PAN: "XXXXX1234X",
  MSME_REG_NO: "UDYAM-XX-00-0000000",
} as const;

/* ─── Export Regions ────────────────────────────────── */
export const EXPORT_REGIONS = [
  "Middle East",
  "Europe",
  "North America",
  "Southeast Asia",
  "East Asia",
  "Oceania",
  "Africa",
  "South America",
] as const;
