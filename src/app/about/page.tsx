import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/sections/AboutHero";
import AboutWhoWeAre from "../components/sections/AboutWhoWeAre";

// ═══ Code-split: below-fold sections ═══
const AboutOperations = dynamic(() => import("../components/sections/AboutOperations"), { ssr: true });
const AboutQuality = dynamic(() => import("../components/sections/AboutQuality"), { ssr: true });
const AboutGlobalMarkets = dynamic(() => import("../components/sections/AboutGlobalMarkets"), { ssr: true });
const AboutWhyBuyers = dynamic(() => import("../components/sections/AboutWhyBuyers"), { ssr: true });
const AboutCertifications = dynamic(() => import("../components/sections/AboutCertifications"), { ssr: true });
const AboutFinalCTA = dynamic(() => import("../components/sections/AboutFinalCTA"), { ssr: true });

export const metadata: Metadata = {
  title: "About Us — Coconut Export Company",    description:
    "Trusted coconut export company in Tamil Nadu, India. ISO & HACCP certified supplier of fresh coconut, copra, and coco peat for international importers and distributors.",
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
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
