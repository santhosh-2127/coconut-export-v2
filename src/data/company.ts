/* ═══════════════════════════════════════════════════════════════
   BACKWARD-COMPATIBLE COMPANY DATA
   Re-exports from centralized constants for existing components.
   New code should import directly from @/constants/company.
   ═══════════════════════════════════════════════════════════════ */

import type { CompanyInfo, Stat, Certification } from "@/types";

export {
  COMPANY as companyInfo,
  CONTACT as contactInfo,
  BUSINESS_HOURS as businessHours,
  SOCIAL_LINKS as socialLinks,
  STATS as stats,
  CERTIFICATIONS as certifications,
  COMPANY_IDS as companyIds,
} from "@/constants/company";

export type { CompanyInfo, Stat, Certification };
