import type { Metadata } from "next";
import { products } from "@/data/products";
import {
  AggregateProductSchema,
  BreadcrumbSchema,
} from "@/lib/schemas";
import MenuPageClient from "../components/menu/MenuPageClient";

export const metadata: Metadata = {
  title: "Export Product Portfolio | Coconut Export Products",
  description:
    "Explore our premium export-quality coconut and coir products including fresh coconuts, copra, and coco peat for international markets.",
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
  ],
  openGraph: {
    title: "Export Product Portfolio | Coconut Export Products | Global Coco Exports",
    description:
      "Explore our premium export-quality coconut and coir products including fresh coconuts, copra, and coco peat for international markets.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Export Product Portfolio — Global Coco Exports",
      },
    ],
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
