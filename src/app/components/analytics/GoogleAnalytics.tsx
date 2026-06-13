/* ═══════════════════════════════════════════════════════════════
   GOOGLE ANALYTICS 4 — Server Component
   Injects GA4 measurement script and initializes gtag.
   Requires NEXT_PUBLIC_GA4_ID env variable.
   ═══════════════════════════════════════════════════════════════ */

import Script from "next/script";
import { GA4_ID } from "@/lib/analytics";

export default function GoogleAnalytics() {
  if (!GA4_ID) return null;

  return (
    <>
      {/* GA4 script — loads after page becomes interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      {/* Initialization — runs after script loads */}
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', {
            send_page_view: true,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
        `}
      </Script>
    </>
  );
}
