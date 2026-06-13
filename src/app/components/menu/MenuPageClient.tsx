"use client";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import MenuHero from "./MenuHero";
import ProductShowcaseGrid from "./ProductShowcaseGrid";
import ProductComparison from "./ProductComparison";
import MenuApplicationCategories from "./MenuApplicationCategories";
import WhyBuyersChooseMenu from "./WhyBuyersChooseMenu";
import ProductSelectionCTA from "./ProductSelectionCTA";
import MenuFinalCTA from "./MenuFinalCTA";

export default function MenuPageClient() {
  return (
    <>
      <Navbar />
      <MenuHero />
      <ProductShowcaseGrid />
      <ProductComparison />
      <MenuApplicationCategories />
      <WhyBuyersChooseMenu />
      <ProductSelectionCTA />
      <MenuFinalCTA />
      <Footer />
    </>
  );
}
