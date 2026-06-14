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
    "Trusted coconut export company in Tamil Nadu, India. ISO 22000 & HACCP certified supplier of fresh coconut, copra, and coco peat for international importers and distributors worldwide.",
  keywords: [
    "about coconut export company",
    "coconut exporter Tamil Nadu",
    "B2B coconut supplier India",
    "coco peat exporter India",
    "copra exporter India",
    "fresh coconut supplier",
    "coconut export company India",
    "international coconut supplier",
  ],
  openGraph: {
    title: "About Us — Coconut Export Company | Global Coco Exports",
    description:
      "Trusted coconut export company in Tamil Nadu, India serving importers and distributors worldwide with ISO & HACCP certified quality.",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Global Coco Exports — Premium Coconut Export Company India",
      },
    ],
    url: "https://www.globalcocoexports.com/about",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Coconut Export Company | Global Coco Exports",
    description:
      "Trusted coconut export company in Tamil Nadu, India. ISO & HACCP certified supplier serving importers worldwide.",
    images: ["/images/og-about.jpg"],
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
