"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth, trackOutboundClick, trackPageView } from "@/lib/analytics";
import { usePathname } from "next/navigation";

/* ─── Global Analytics Initialization ────────────
   This component:
   1. Tracks page views on route changes (SPA)
   2. Delegates clicks on [data-analytics] elements
   3. Tracks scroll depth at 25%, 50%, 75%, 100%
   ═════════════════════════════════════════════════ */

const SCROLL_DEPTHS = [25, 50, 75, 100];

export default function TrackingInit() {
  const pathname = usePathname();
  const trackedDepths = useRef<Set<number>>(new Set());

  // Track page views on route change
  useEffect(() => {
    trackPageView(pathname);
    trackedDepths.current = new Set(); // reset scroll tracking on navigation
  }, [pathname]);

  // Scroll depth tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) {
          ticking = false;
          return;
        }

        const percent = Math.round((scrollTop / docHeight) * 100);

        for (const depth of SCROLL_DEPTHS) {
          if (percent >= depth && !trackedDepths.current.has(depth)) {
            trackedDepths.current.add(depth);
            trackScrollDepth(depth);
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global click delegation for [data-analytics] elements
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-analytics]") as HTMLElement | null;
      if (!target) return;

      const raw = target.getAttribute("data-analytics");
      if (!raw) return;

      try {
        const params = JSON.parse(raw);
        trackOutboundClick(params);
      } catch {
        // If not valid JSON, use as a simple event type
        trackOutboundClick({ type: raw as any });
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null; // This is a headless tracker
}
