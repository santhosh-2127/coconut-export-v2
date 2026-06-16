import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema, FAQSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LogisticsHero from "../components/sections/LogisticsHero";
import LogisticsProcess from "../components/sections/LogisticsProcess";

// ═══ Code-split: below-fold sections ═══
const LogisticsIncoterms = dynamic(() => import("../components/sections/LogisticsIncoterms"), { ssr: true });
const LogisticsContainers = dynamic(() => import("../components/sections/LogisticsContainers"), { ssr: true });
const LogisticsDocs = dynamic(() => import("../components/sections/LogisticsDocs"), { ssr: true });
const LogisticsShipping = dynamic(() => import("../components/sections/LogisticsShipping"), { ssr: true });
const LogisticsQuality = dynamic(() => import("../components/sections/LogisticsQuality"), { ssr: true });
const LogisticsFAQ = dynamic(() => import("../components/sections/LogisticsFAQ"), { ssr: true });
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
      <LogisticsContainers />
      <LogisticsDocs />
      <LogisticsShipping />
      <LogisticsQuality />
      <LogisticsFAQ />
      <LogisticsFinalCTA />
      <FAQSchema questions={[
        { question: "What shipping terms do you support?", answer: "We support FOB (Free On Board), CIF (Cost, Insurance & Freight), and CFR (Cost & Freight) terms. Our team can advise you on the best option based on your destination, risk preference, and logistics capability." },
        { question: "Can you arrange freight?", answer: "Yes, under CIF and CFR terms we arrange ocean freight and insurance. For FOB terms, we coordinate loading at the port of origin and provide all necessary documentation for your freight forwarder." },
        { question: "Which ports do you export from?", answer: "We export from three major Indian port corridors: Chennai Port (East Coast), Tuticorin/VOC Port (South Coast), and Nhava Sheva/JNPT (West Coast), giving us flexibility to choose optimal routing for every destination." },
        { question: "What documentation is provided?", answer: "Every shipment includes: Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, and where requested, SGS Inspection Report." },
        { question: "How long does shipping take?", answer: "Transit times vary by destination: 5–10 days to the Middle East, 15–20 days to Europe, 20–28 days to North America, and 7–14 days to Southeast Asia from the date of vessel departure." },
      ]} />
      <Footer />
    </>
  );
}
