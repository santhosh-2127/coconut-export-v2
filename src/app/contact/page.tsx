import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/lib/schemas";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactHero from "@/app/components/sections/ContactHero";
import ContactOptions from "@/app/components/sections/ContactOptions";

// ═══ Code-split: below-fold sections ═══
const ContactForm = dynamic(() => import("@/app/components/sections/ContactForm"), { ssr: true });
const ContactHours = dynamic(() => import("@/app/components/sections/ContactHours"), { ssr: true });
const ContactFinalCTA = dynamic(() => import("@/app/components/sections/ContactFinalCTA"), { ssr: true });

export const metadata: Metadata = {
  title: "Contact Us — Bulk Coconut Export Inquiry",    description:
     "Contact our coconut export specialists for bulk coconut, copra, and coco peat sourcing. Get quotations, logistics support, and specifications within minutes for global buyers.",
  keywords: [
    "contact coconut exporter",
    "coconut export inquiry",
    "bulk coconut supplier contact",
    "coco peat exporter WhatsApp",
    "coconut export company email",
    "coconut supplier India contact",
    "wholesale coconut export inquiry",
  ],
  openGraph: {
    title: "Contact Us — Bulk Coconut Export Inquiry | Global Coco Exports",
    description:
      "Contact our export specialists for bulk coconut sourcing, quotations, logistics support, and documentation assistance. We respond within minutes.",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us — Bulk Coconut Export Inquiry | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/contact",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Bulk Coconut Export Inquiry | Global Coco Exports",
    description:
      "Contact our export specialists for bulk coconut sourcing, quotations, and logistics support.",
    images: ["/images/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <Navbar />
      <main>
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactHours />
      <ContactFinalCTA />
      </main>
      <Footer />
    </>
  );
}
