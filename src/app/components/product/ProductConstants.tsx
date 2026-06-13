/* ─── Animation variants (matching homepage) ── */
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export const fadeUpBig: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.9 } },
};
