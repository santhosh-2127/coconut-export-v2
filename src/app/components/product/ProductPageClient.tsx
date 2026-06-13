"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ProductHero from "@/app/components/product/ProductHero";
import ProductOverview from "@/app/components/product/ProductOverview";
import ProductSpecs from "@/app/components/product/ProductSpecs";
import ProductGallery from "@/app/components/product/ProductGallery";
import PackagingSection from "@/app/components/product/PackagingSection";
import ApplicationsSection from "@/app/components/product/ApplicationsSection";
import ProductCTA from "@/app/components/product/ProductCTA";
import ExportCapabilityShowcase from "@/app/components/product/ExportCapabilityShowcase";

export default function ProductPageClient() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#0C1A12]">
          <div className="text-center px-6">
            <h1 className="font-serif text-4xl text-white font-bold mb-4">Product Not Found</h1>
            <p className="text-white/60 mb-8">The product you are looking for does not exist or has been removed.</p>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A017] text-[#0C1A12] font-semibold rounded-full hover:bg-[#e0b52a] transition-colors">
              Return Home
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductSpecs product={product} />
      <ProductGallery product={product} />
      <PackagingSection product={product} />
      <ApplicationsSection product={product} />
      <ProductCTA product={product} />
      <ExportCapabilityShowcase />
      <Footer />
    </>
  );
}
