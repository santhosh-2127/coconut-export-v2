import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GlobalNetworkHero from "../components/sections/GlobalNetworkHero";
import GlobalNetworkCountries from "../components/sections/GlobalNetworkCountries";
import GlobalNetworkCapabilities from "../components/sections/GlobalNetworkCapabilities";
import GlobalNetworkProcess from "../components/sections/GlobalNetworkProcess";
import GlobalNetworkWhy from "../components/sections/GlobalNetworkWhy";
import GlobalNetworkCTA from "../components/sections/GlobalNetworkCTA";

export const metadata: Metadata = {
  title: "Global Export Network — 15+ Countries",    description:
    "Global coconut export network spanning 15+ countries across Middle East, Europe, North America, and Asia-Pacific. International supply chain and logistics for wholesale buyers and importers.",
  keywords: [
    "global export network",
    "coconut export network",
    "international coconut supplier",
    "B2B coconut exporter",
    "global supply chain coconut",
    "export logistics network",
    "coconut trade network",
    "coconut export markets",
    "international coconut distribution",
  ],
  openGraph: {
    title: "Global Export Network — 15+ Countries | Global Coco Exports",
    description:
      "Global coconut export network spanning 15+ countries across Middle East, Europe, North America, and Asia-Pacific. International supply for wholesale buyers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Export Network — 15+ Countries | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/global-network",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Export Network — 15+ Countries | Global Coco Exports",
    description:
      "Global coconut export network spanning 15+ countries. International supply for wholesale buyers.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/global-network",
  },
};

export default function GlobalNetworkPage() {
  return (
    <>
      <Navbar />
      <GlobalNetworkHero />
      <GlobalNetworkCountries />
      <GlobalNetworkCapabilities />
      <GlobalNetworkProcess />
      <GlobalNetworkWhy />
      <GlobalNetworkCTA />
      <Footer />
    </>
  );
}
