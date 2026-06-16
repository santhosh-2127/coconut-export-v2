/* ═══════════════════════════════════════════════════════════════
   ANALYTICS MODULE — GA4 + Microsoft Clarity + Lead Tracking
   ═══════════════════════════════════════════════════════════════
   Usage (client components):
     import { trackEvent } from "@/lib/analytics";
     trackEvent("view_item", { product_name: "Copra" });
   ═══════════════════════════════════════════════════════════════ */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: (command: string, ...args: unknown[]) => void;
  }
}

type GtagEvent =
  | "page_view"
  | "view_item"
  | "view_item_list"
  | "add_to_cart"
  | "begin_checkout"
  | "purchase"
  | "sign_up"
  | "lead"
  | "generate_lead"
  | "contact"
  | "form_start"
  | "form_step_complete"
  | "form_submit"
  | "form_complete"
  | "click"
  | "scroll"
  | "video_start"
  | "video_complete";

// Allowed param values for gtag events — arrays and objects needed for e-commerce items
type GtagPrimitive = string | number | boolean | undefined | null;
type GtagParams = Record<string, GtagPrimitive | GtagPrimitive[] | Record<string, GtagPrimitive>[]>;

/* ─── GA4 Measurement ID ───────────────────────── */
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";

/* ─── Microsoft Clarity Project ID ─────────────── */
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";

/* ─── Lead Source Detection ──────────────────────
   Captures UTM params, referrer, and source tags
   to attribute every lead to its origin.          */
export function getLeadSource(): {
  source: string;
  medium: string | null;
  campaign: string | null;
  term: string | null;
  content: string | null;
  referrer: string | null;
  page: string;
} {
  if (typeof window === "undefined") {
    return { source: "direct", medium: null, campaign: null, term: null, content: null, referrer: null, page: "" };
  }

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmTerm = params.get("utm_term");
  const utmContent = params.get("utm_content");
  const ref = document.referrer || null;

  // Determine primary source
  let source = "direct";
  if (utmSource) source = utmSource;
  else if (ref) {
    if (ref.includes("google")) source = "google";
    else if (ref.includes("facebook") || ref.includes("fb.com")) source = "facebook";
    else if (ref.includes("linkedin")) source = "linkedin";
    else if (ref.includes("instagram")) source = "instagram";
    else if (ref.includes("twitter") || ref.includes("x.com")) source = "twitter";
    else if (ref.includes("bing")) source = "bing";
    else if (ref.includes("yahoo")) source = "yahoo";
    else source = "referral";
  }

  return {
    source,
    medium: utmMedium ?? (ref ? "referral" : null),
    campaign: utmCampaign,
    term: utmTerm,
    content: utmContent,
    referrer: ref,
    page: window.location.pathname,
  };
}

/* ─── Set lead source in Clarity ───────────────── */
export function setLeadSourceInClarity(): void {
  if (typeof window.clarity !== "function") return;
  const ls = getLeadSource();
  window.clarity("set", "lead_source", ls.source);
  window.clarity("set", "lead_medium", ls.medium ?? "direct");
  window.clarity("set", "lead_campaign", ls.campaign ?? "(none)");
  window.clarity("set", "landing_page", ls.page);
  if (ls.referrer) window.clarity("set", "referrer", ls.referrer);
}

/* ─── Is analytics available? ──────────────────── */
export function isAnalyticsAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

/* ─── Send a GA4 event ─────────────────────────── */
export function trackEvent(
  eventName: GtagEvent | string,
  params?: GtagParams
): void {
  if (typeof window === "undefined") return;
  
  // Automatically append lead source to all events
  const ls = getLeadSource();
  const enrichedParams = {
    ...params,
    lead_source: ls.source,
    lead_medium: ls.medium,
    lead_campaign: ls.campaign,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, enrichedParams);
  }
  // Also push to dataLayer for GTM compatibility
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedParams,
    });
  }
}

/* ─── RFQ Funnel Tracking ──────────────────────── */
export function trackRFQStep(step: 1 | 2 | 3): void {
  trackEvent("form_step_complete", {
    form_name: "rfq",
    step_number: step,
    step_label: `Step ${step}`,
  });
  if (typeof window.clarity === "function") {
    window.clarity("set", "rfq_step", step);
  }
}

export function trackRFQSubmission(params: {
  products: string[];
  volume: string;
  incoterm: string;
  country: string;
  source?: string | null;
}): void {
  // GA4
  trackEvent("generate_lead", {
    currency: "USD",
    value: 0,
    form_name: "rfq",
    products: params.products.join(", "),
    volume: params.volume,
    incoterm: params.incoterm,
    country: params.country,
    source: params.source ?? "rfq-page",
  });

  // Clarity custom event
  if (typeof window.clarity === "function") {
    window.clarity("event", "rfq_submission");
    window.clarity("set", "rfq_products", params.products.join(", "));
    window.clarity("set", "rfq_country", params.country);
  }
}

/* ─── Contact Conversion Tracking ──────────────── */
export function trackContactSubmission(params: {
  name: string;
  company: string;
  country: string;
  email?: string;
}): void {
  const ls = getLeadSource();
  
  trackEvent("generate_lead", {
    currency: "USD",
    value: 0,
    form_name: "contact",
    company: params.company,
    country: params.country,
    lead_source: ls.source,
    lead_medium: ls.medium,
    lead_campaign: ls.campaign,
  });

  // Track conversion in GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${GA4_ID}/CONTACT_LEAD`,
      value: 0,
      currency: "USD",
      transaction_id: `contact-${Date.now()}`,
    });
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", "contact_submission");
    window.clarity("set", "contact_country", params.country);
    window.clarity("set", "contact_company", params.company);
    window.clarity("set", "lead_source", ls.source);
    window.clarity("set", "lead_campaign", ls.campaign ?? "(none)");
  }
}

/* ─── WhatsApp Click Tracking ──────────────────── */
export function trackWhatsAppClick(params: {
  label?: string;
  product?: string;
  page?: string;
}): void {
  const ls = getLeadSource();
  
  trackEvent("click", {
    click_type: "whatsapp",
    click_label: params.label ?? "whatsapp_click",
    product_name: params.product ?? undefined,
    page_path: params.page ?? window.location.pathname,
    lead_source: ls.source,
  });

  // Track as conversion event
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${GA4_ID}/WHATSAPP_CLICK`,
      value: 0,
      currency: "USD",
    });
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", "whatsapp_click");
    window.clarity("set", "whatsapp_product", params.product ?? "general");
  }
}

/* ─── Newsletter Signup Tracking ───────────────── */
export function trackNewsletterSignup(params: {
  email?: string;
  page?: string;
}): void {
  const ls = getLeadSource();
  const emailHash = params.email 
    ? btoa(params.email.trim().toLowerCase()).slice(0, 12) 
    : "anonymous";

  trackEvent("sign_up", {
    method: "newsletter",
    email_hash: emailHash,
    page_path: params.page ?? window.location.pathname,
    lead_source: ls.source,
    lead_medium: ls.medium,
    lead_campaign: ls.campaign,
  });

  if (typeof window.clarity === "function") {
    window.clarity("event", "newsletter_signup");
    window.clarity("set", "newsletter_source", ls.source);
  }
}

/* ─── Outbound Click Tracking ──────────────────── */
export function trackOutboundClick(params: {
  type: "whatsapp" | "email" | "phone" | "schedule_consultation" | "download_datasheet" | "request_quote" | "product_cta" | "newsletter";
  label?: string;
  product?: string;
}): void {
  const ls = getLeadSource();

  trackEvent("click", {
    click_type: params.type,
    click_label: params.label ?? params.type,
    product_name: params.product ?? undefined,
    lead_source: ls.source,
    lead_medium: ls.medium,
  });

  if (typeof window.clarity === "function") {
    window.clarity("event", `click_${params.type}`);
    window.clarity("set", `last_click_${params.type}`, params.label ?? params.type);
  }
}

/* ─── Product View Tracking ────────────────────── */
export function trackProductView(product: {
  name: string;
  id: number;
  category: string;
}): void {
  trackEvent("view_item", {
    currency: "USD",
    value: 0,
    items: [
      {
        item_id: `GCE-PROD-${product.id}`,
        item_name: product.name,
        item_category: product.category,
      },
    ],
  });

  if (typeof window.clarity === "function") {
    window.clarity("set", "last_viewed_product", product.name);
    window.clarity("event", "product_view");
  }
}

/* ─── Page View Tracking (for SPA navigations) ─── */
export function trackPageView(url: string, title?: string): void {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA4_ID, {
      page_path: url,
      page_title: title ?? document.title,
    });
  }
}

/* ─── Scroll Depth Tracking ────────────────────── */
export function trackScrollDepth(depth: number): void {
  trackEvent("scroll", {
    scroll_depth_percent: depth,
  });
}
