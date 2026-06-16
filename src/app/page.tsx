import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FAQSchema } from "@/lib/schemas";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomeHero from "./components/sections/HomeHero";
import Stats from "./components/sections/Stats";

// ═══ Code-split: all below-fold sections ═══
const ProductCategories = dynamic(
  () => import("./components/sections/ProductCategories"),
  { ssr: true }
);
const WhyBuyersChoose = dynamic(
  () => import("./components/sections/WhyBuyersChoose"),
  { ssr: true }
);
const QualityJourney = dynamic(
  () => import("./components/sections/QualityJourney"),
  { ssr: true }
);
const TrustGallery = dynamic(
  () => import("./components/sections/TrustGallery"),
  { ssr: true }
);
const Certifications = dynamic(
  () => import("./components/sections/Certifications"),
  { ssr: true }
);
const FAQHome = dynamic(
  () => import("./components/sections/FAQHome"),
  { ssr: true }
);
const FinalCTA = dynamic(
  () => import("./components/sections/FinalCTA"),
  { ssr: true }
);
const RequestQuoteSection = dynamic(
  () => import("./components/sections/RequestQuoteSection"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Coconut Exporters India — Premium Coconut Exports Since 2015",
  description:
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
    title: "Coconut Exporters India — Premium Coconut Exports Since 2015 | Global Coco Exports",
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
    title: "Coconut Exporters India — Premium Coconut Exports Since 2015",
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

      {/* SECTION 1: Hero — Large product visual + headline + CTAs */}
      <HomeHero />

      {/* SECTION 2: Trust Statistics */}
      <Stats />

      {/* SECTION 3: Product Categories */}
      <ProductCategories />

      {/* SECTION 4: Why Buyers Choose Us */}
      <WhyBuyersChoose />

      {/* SECTION 5: Quality Journey — Farm → Ship */}
      <QualityJourney />

      {/* SECTION 6: Trust Gallery — Real facility photos & operations */}
      <TrustGallery />

      {/* SECTION 7: Certifications — ISO, HACCP, APEDA, SGS */}
      <Certifications />

      {/* SECTION 8: FAQ — Top buyer questions */}
      <FAQHome />

      {/* SECTION 9: Final CTA */}
      <FinalCTA />

      {/* SECTION 10: Request Quote — Centralized quotation form */}
      <RequestQuoteSection />

      {/*
        FAQ Schema for rich search results
      */}
      <FAQSchema
        questions={[
          {
            question: "What is the minimum order quantity?",

            answer:
              "MOQ varies by product. Fresh Coconuts: 1 × 20ft FCL (≈24,000–25,000 nuts). Copra: 1 × 20ft FCL (≈18 MT). Coco Peat: 1 × 20ft FCL (≈500 blocks). Smaller trial orders available on request.",
          },
          {
            question: "Which countries do you export to?",
            answer:
              "15+ countries across Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), Europe (Netherlands, Germany, UK), North America (USA, Canada), and Asia-Pacific (Singapore, Malaysia, Australia, New Zealand).",
          },
          {
            question: "How is quality verified before shipment?",
            answer:
              "Four-stage process: farm-level inspection, incoming inspection at ISO 22000 facility, process monitoring during sorting and packing, and pre-shipment container inspection. Third-party inspection available on request.",
          },
          {
            question: "Do you provide product samples?",
            answer:
              "Yes — samples available across all product categories shipped via DHL/FedEx. Costs typically deducted from first bulk order. Requests processed within 3–5 business days.",
          },
          {
            question: "How quickly will I receive a quotation?",
            answer:
              "We respond to all inquiries within 24 hours during business days. Urgent requests before 2:00 PM IST are often quoted the same day.",
          },
          {
            question: "What payment terms do you accept?",
            answer:
              "Letter of Credit (LC) at sight, Telegraphic Transfer (TT) — 30% advance 70% against documents, and Documents Against Payment (DP) for verified buyers. Terms formalised in sales contract.",
          },
        ]}
      />

      <Footer />
    </>
  );
}
