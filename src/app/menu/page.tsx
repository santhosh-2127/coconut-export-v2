import type { Metadata } from "next";
import { products } from "@/data/products";
import {
  AggregateProductSchema,
  BreadcrumbSchema,
} from "@/lib/schemas";
import MenuPageClient from "../components/menu/MenuPageClient";

export const metadata: Metadata = {
  title: "Products — Bulk Coconut Export Portfolio",
  description:
    "Explore our premium export-quality coconut products — fresh brown coconut, Pollachi coconut, copra, and coco peat for international wholesale buyers and distributors.",
  keywords: [
    "coconut export products",
    "coconut product catalog",
    "fresh coconut export",
    "copra export",
    "coco peat export",
    "coconut wholesale products",
    "coconut B2B products",
    "coconut supplier India",
    "coconut product portfolio",
    "bulk coconut export catalog",
  ],
  openGraph: {
    title: "Products — Bulk Coconut Export Portfolio | Global Coco Exports",
    description:
      "Explore our premium export-quality coconut products — fresh coconuts, copra, and coco peat for international wholesale buyers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Products — Bulk Coconut Export Portfolio | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/menu",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Bulk Coconut Export Portfolio | Global Coco Exports",
    description:
      "Explore our premium export-quality coconut products for international wholesale buyers.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/menu",
  },
};

export default function MenuPage() {
  const schemaProducts = products.map((p) => ({
    name: p.name,
    description: p.description,
    image: p.images.hero.src,
    offers: {
      priceCurrency: "USD",
      price: "Contact for pricing",
      availability: "InStock",
    },
  }));

  return (
    <>
      <AggregateProductSchema products={schemaProducts} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Menu", url: "/menu" },
        ]}
      />
      <MenuPageClient />
    </>
  );
}
