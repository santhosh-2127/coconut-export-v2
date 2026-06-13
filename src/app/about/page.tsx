import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/sections/AboutHero";
import AboutWhoWeAre from "../components/sections/AboutWhoWeAre";
import AboutOperations from "../components/sections/AboutOperations";
import AboutQuality from "../components/sections/AboutQuality";
import AboutGlobalMarkets from "../components/sections/AboutGlobalMarkets";
import AboutWhyBuyers from "../components/sections/AboutWhyBuyers";
import AboutCertifications from "../components/sections/AboutCertifications";
import AboutFinalCTA from "../components/sections/AboutFinalCTA";

export const metadata: Metadata = {
  title: "About Us — Coconut Export Company",
  description:
    "Trusted coconut export company in Tamil Nadu, India serving importers and distributors across 15+ countries. ISO 22000 & HACCP certified. Fresh coconut, copra, and coco peat supplier.",
  keywords: [
    "about coconut export company",
    "coconut exporter Tamil Nadu",
    "B2B coconut supplier India",
    "coco peat exporter India",
    "copra exporter India",
    "fresh coconut supplier",
  ],
  openGraph: {
    title: "About Us — Coconut Export Company | Global Coco Exports",
    description:
      "Trusted coconut export company in Tamil Nadu, India serving importers and distributors across 15+ countries with ISO & HACCP certified quality.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Global Coco Exports — Premium Coconut Export Company" }],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutOperations />
      <AboutQuality />
      <AboutGlobalMarkets />
      <AboutWhyBuyers />
      <AboutCertifications />
      <AboutFinalCTA />
      <Footer />
    </>
  );
}
