import { products } from "@/data/products";

/* ─── Build a slug → product name lookup map ── */
const slugToNameMap: Record<string, string> = {};
const nameToSlugMap: Record<string, string> = {};

for (const p of products) {
  slugToNameMap[p.slug] = p.name;
  nameToSlugMap[p.name] = p.slug;
}

/* ─── Resolve one or more slugs to product names ── */
export function slugsToNames(slugs: string[]): string[] {
  const names: string[] = [];
  for (const slug of slugs) {
    const trimmed = slug.trim();
    const name = slugToNameMap[trimmed];
    if (name) names.push(name);
  }
  return names;
}

/* ─── Resolve a single slug to a name (returns null if invalid) ── */
export function slugToName(slug: string): string | null {
  return slugToNameMap[slug] ?? null;
}

/* ─── Check if a slug is valid ── */
export function isValidSlug(slug: string): boolean {
  return slug in slugToNameMap;
}

/* ─── Build query string from selected product slugs ── */
export function buildRFQQuery(params: {
  products?: string[];
  source?: string;
}): string {
  const searchParams = new URLSearchParams();
  if (params.products && params.products.length > 0) {
    searchParams.set("product", params.products.join(","));
  }
  if (params.source) {
    searchParams.set("source", params.source);
  }
  const qs = searchParams.toString();
  return qs ? `?${qs}` : "";
}

/* ─── Product name → slug ── */
export function nameToSlug(name: string): string | null {
  return nameToSlugMap[name] ?? null;
}

/* ─── Get all valid product slugs ── */
export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

/* ─── Get all valid product names ── */
export function getAllNames(): string[] {
  return products.map((p) => p.name);
}
