"use client";

import { useEffect, useState } from "react";

/**
 * Animated count-up hook with cubic ease-out.
 * Pass `enabled = false` to pause (e.g. until section is in view).
 */
export function useCountUp(target: number, duration = 1800, enabled = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setCount(0);
      return;
    }
    let start: number | null = null;
    let rafId: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [enabled, target, duration]);

  return count;
}

/**
 * Extract numeric value and suffix from strings like "15+", "500+", "10+".
 * Returns { numeric: 15, suffix: "+" } for "15+".
 */
export function parseStatValue(raw: string): { numeric: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: 0, suffix: "" };
  return { numeric: parseInt(match[1], 10), suffix: match[2] };
}
