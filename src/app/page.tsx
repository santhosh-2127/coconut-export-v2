import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import HeroCarousel from "./components/sections/HeroCarousel";
import Hero from "./components/sections/Hero";
import TrustStrip from "./components/sections/TrustStrip";
import Stats from "./components/sections/Stats";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import SupplyChainJourney from "./components/sections/SupplyChainJourney";
import RFQCTA from "./components/sections/RFQCTA";

// ═══ Code-split: heavy below-fold sections ═══
const ProductEcosystem = dynamic(
  () => import("./components/sections/ProductEcosystem"),
  { ssr: true }
);

const ExportDestinations = dynamic(
  () => import("./components/sections/ExportDestinations"),
  { ssr: true }
);

const Certifications = dynamic(
  () => import("./components/sections/Certifications"),
  { ssr: true }
);

export const metadata: Metadata = {    description:
    "Premium coconut exporter in India supplying bulk fresh coconut, copra, and coco peat to importers and distributors worldwide. ISO & HACCP certified, export quality wholesale supply.",
  keywords: [
    "coconut exporter India",
    "fresh brown coconut exporter",
    "Pollachi coconut export",
    "copra export supplier",
    "coco peat exporter",
    "bulk coconut supplier",
    "wholesale coconut export",
    "global coconut export company",
    "B2B coconut procurement",
    "coconut shipping India",
  ],
  openGraph: {
    title: "Global Coco Exports | Premium Coconut Export Solutions",
    description:
      "Premium coconut exporter in India supplying bulk fresh coconut, copra, and coco peat to importers worldwide. ISO & HACCP certified.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Coco Exports — Premium Coconut Export Solutions — Bulk Coconut Exporter India",
      },
    ],
    url: "https://www.globalcocoexports.com",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Coco Exports | Premium Coconut Export Solutions",
    description:
      "Premium coconut exporter in India supplying bulk fresh coconut, copra, and coco peat worldwide. ISO & HACCP certified.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Hero />
      <TrustStrip />
      <Stats />
      <WhyChooseUs />
      <ProductEcosystem />
      <SupplyChainJourney />
      <ExportDestinations />
      <Certifications />
      <RFQCTA />
      <Footer />
    </>
  );
}
