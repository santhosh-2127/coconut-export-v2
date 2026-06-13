/* ═══════════════════════════════════════════════════════════════
   ANALYTICS MODULE — GA4 + Microsoft Clarity + Custom Events
   ═══════════════════════════════════════════════════════════════
   Usage (client components):
     import { trackEvent, trackConversion } from "@/lib/analytics";
     trackEvent("view_item", { product_name: "Copra" });
     trackConversion("rfq_submission");
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
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }
  // Also push to dataLayer for GTM compatibility
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
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
}): void {
  trackEvent("generate_lead", {
    currency: "USD",
    value: 0,
    form_name: "contact",
    company: params.company,
    country: params.country,
  });

  if (typeof window.clarity === "function") {
    window.clarity("event", "contact_submission");
    window.clarity("set", "contact_country", params.country);
  }
}

/* ─── Outbound Click Tracking ──────────────────── */
export function trackOutboundClick(params: {
  type: "whatsapp" | "email" | "phone" | "schedule_consultation" | "download_datasheet" | "request_quote" | "product_cta";
  label?: string;
  product?: string;
}): void {
  trackEvent("click", {
    click_type: params.type,
    click_label: params.label ?? params.type,
    product_name: params.product ?? undefined,
  });

  if (typeof window.clarity === "function") {
    window.clarity("event", `click_${params.type}`);
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
