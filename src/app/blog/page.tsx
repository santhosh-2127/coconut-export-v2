import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogHero from "../components/sections/BlogHero";
import BlogArticles from "../components/sections/BlogArticles";
import BlogCTA from "../components/sections/BlogCTA";

export const metadata: Metadata = {
  title: "Blog — Coconut Export Insights",    description:
    "Expert articles on coconut exports, logistics, quality assurance, and international trade for global buyers. Market insights, export guides, and industry news.",
  keywords: [
    "coconut export blog",
    "coconut industry insights",
    "export guides",
    "coconut market trends",
    "coconut logistics",
    "international trade blog",
    "coconut export knowledge",
    "B2B coconut sourcing",
  ],
  openGraph: {
    title: "Blog — Coconut Export Insights | Global Coco Exports",
    description:
      "Expert articles on coconut exports, logistics, quality assurance, and international trade for global buyers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coconut Export Blog — Global Coco Exports Insights and Guides",
      },
    ],
    url: "https://www.globalcocoexports.com/blog",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Coconut Export Insights | Global Coco Exports",
    description:
      "Expert articles on coconut exports, logistics, quality assurance, and international trade.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <Navbar />
      <BlogHero />
      <BlogArticles />
      <BlogCTA />
      <Footer />
    </>
  );
}
