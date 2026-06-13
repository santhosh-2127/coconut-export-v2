export interface NavLink {
  label: string;
  href: string;
}

/* ─── Company Configuration Types ──────────────────── */
export interface CompanyInfo {
  name: string;
  legalName?: string;
  tagline: string;
  description?: string;
  foundedYear?: number;
  email: string;
  phone: string;
  whatsapp?: string;
  address: string;
  /** Full structured address */
  fullAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ContactInfo {
  primary: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  sales: {
    email: string;
    phone: string;
  };
  support: {
    email: string;
    phone: string;
  };
  procurement: {
    email: string;
  };
}

export interface BusinessHours {
  timezone: string;
  weekday: { open: string; close: string };
  saturday: { open: string; close: string } | null;
  sunday: { open: string; close: string } | null;
  holidays: string[];
  note?: string;
}

export interface SocialLinks {
  linkedin: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Certification {
  name: string;
}

/* ─── Rich Image Metadata ────────────────────────── */
export interface ImageMeta {
  src: string;
  alt: string;
  title: string;
  caption: string;
  seoDescription: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface ProductImageSet {
  hero: ImageMeta;
  closeUp?: ImageMeta;
  packaging?: ImageMeta;
  warehouse?: ImageMeta;
  containerLoading?: ImageMeta;
  qualityInspection?: ImageMeta;
}

export interface ProductSpecs {
  moq: string;
  packaging: string;
  exportGrade: string;
  supplyCapacity: string;
}

export interface TechSpec {
  label: string;
  value: string;
}

export interface LogisticsItem {
  icon: string; // identifier mapped to SVG component
  title: string;
  desc: string;
  stat: string;
}

export interface Application {
  icon: string; // identifier mapped to SVG component
  title: string;
  desc: string;
  highlight: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface CTAStat {
  value: string;
  label: string;
}

export interface ExportBenefit {
  icon: string; // emoji string
  title: string;
  desc: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  icon: string;
  highlights: string[];
  category: string;
  certifications: string[];
  images: ProductImageSet;
  gallery: ImageMeta[];
  specifications: ProductSpecs;
  techSpecs: TechSpec[];
  exportBenefits: ExportBenefit[];
  heroStats: HeroStat[];
  logisticsItems: LogisticsItem[];
  applications: Application[];
  ctaStats: CTAStat[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
  keyAdvantage: string;
  businessBenefit: string;
  stat?: { value: string; label: string };
}

export interface SupplyChainStep {
  step: number;
  title: string;
  description: string;
  businessValue: string;
  qualityRelevance: string;
  image?: string;
}

export interface ExportDestination {
  country: string;
  region: string;
  flag: string;
}

export interface RegionGroup {
  region: string;
  description: string;
  color: string;
  countries: ExportDestination[];
}
