"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ProductHero from "@/app/components/product/ProductHero";
import ProductSpecs from "@/app/components/product/ProductSpecs";
import PackagingSection from "@/app/components/product/PackagingSection";
import ProductQuality from "@/app/components/product/ProductQuality";
import ApplicationsSection from "@/app/components/product/ApplicationsSection";
import ProductSupplyMetrics from "@/app/components/product/ProductSupplyMetrics";
import ProductCTA from "@/app/components/product/ProductCTA";
import ProductContactCTA from "@/app/components/product/ProductContactCTA";

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
            <h1 className="text-4xl text-white font-bold mb-4">Product Not Found</h1>
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

      {/* SECTION 1: Hero — What is it? */}
      <ProductHero product={product} />

      {/* SECTION 2: Specifications — Technical details */}
      <ProductSpecs product={product} />

      {/* SECTION 3: Applications — What is it used for? */}
      <ApplicationsSection product={product} />

      {/* SECTION 4: Commercial Supply Capabilities — Bulk supply metrics */}
      <ProductSupplyMetrics product={product} />

      {/* SECTION 5: Quality Inspection — How is quality maintained? */}
      <ProductQuality name={product.name} />

      {/* SECTION 5: Packaging — How is it packed? */}
      <PackagingSection product={product} />


      {/* SECTION 6: Request Quote — How do I order? */}
      <ProductCTA product={product} />


      {/* SECTION 7: Contact CTA */}
      <ProductContactCTA product={product} />

      <Footer />
    </>
  );
}
