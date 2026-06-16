import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LogisticsHero from "../components/sections/LogisticsHero";
import LogisticsProcess from "../components/sections/LogisticsProcess";

// ═══ Code-split: below-fold sections ═══
const LogisticsIncoterms = dynamic(() => import("../components/sections/LogisticsIncoterms"), { ssr: true });
const LogisticsDocs = dynamic(() => import("../components/sections/LogisticsDocs"), { ssr: true });
const LogisticsShipping = dynamic(() => import("../components/sections/LogisticsShipping"), { ssr: true });
const LogisticsQuality = dynamic(() => import("../components/sections/LogisticsQuality"), { ssr: true });
const LogisticsFinalCTA = dynamic(() => import("../components/sections/LogisticsFinalCTA"), { ssr: true });

export const metadata: Metadata = {
  title: "Logistics — Coconut Shipping from India",    description:
    "Global coconut export logistics from India — container planning, FOB/CIF/CFR shipping, documentation, and delivery from Chennai, Tuticorin, and Nhava Sheva ports worldwide for wholesale buyers.",
  keywords: [
    "coconut export logistics",
    "shipping coconut from India",
    "coconut container shipping",
    "coconut export documentation",
    "coconut freight India",
    "incoterms coconut export",
    "coconut shipping logistics",
    "bulk coconut freight",
    "coconut FOB CIF CFR",
  ],
  openGraph: {
    title: "Logistics — Coconut Shipping from India | Global Coco Exports",
    description:
      "Global coconut export logistics — container planning, FOB/CIF/CFR shipping, documentation, and delivery from Indian ports to worldwide destinations.",
    images: [
      {
        url: "/images/og-logistics.jpg",
        width: 1200,
        height: 630,
        alt: "Logistics — Coconut Shipping from India | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/logistics",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics — Coconut Shipping from India | Global Coco Exports",
    description:
      "Global coconut export logistics — container planning, shipping, and documentation from Indian ports.",
    images: ["/images/og-logistics.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/logistics",
  },
};

export default function LogisticsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Logistics", url: "/logistics" },
        ]}
      />
      <Navbar />
      <LogisticsHero />
      <LogisticsProcess />
      <LogisticsIncoterms />
      <LogisticsDocs />
      <LogisticsShipping />
      <LogisticsQuality />
      <LogisticsFinalCTA />
      <Footer />
    </>
  );
}
