import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Certifications from "../components/sections/Certifications";

export const metadata: Metadata = {
  title: "Certifications — ISO & HACCP Certified",    description:
    "Global Coco Exports holds ISO 22000, HACCP, APEDA, and SGS certifications — ensuring food safety, quality compliance, and traceability for every coconut export from India.",
  keywords: [
    "coconut export certifications",
    "ISO 22000 certified coconut exporter",
    "HACCP certified coconut supplier India",
    "APEDA registered coconut exporter",
    "SGS verified coconut products",
    "food safety certified coconut export",
    "quality compliant coconut supplier",
  ],
  openGraph: {
    title: "Certifications — ISO & HACCP Certified | Global Coco Exports",
    description:
      "ISO 22000, HACCP, APEDA, SGS certified coconut export. Food safety and traceability for global buyers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Certifications — ISO & HACCP Certified Coconut Exporter | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/certifications",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications — ISO & HACCP Certified | Global Coco Exports",
    description:
      "ISO 22000, HACCP, APEDA, and SGS certified coconut export company. Food safety and quality compliance.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Certifications", url: "/certifications" },
        ]}
      />
      <Navbar solid={true} />
      <div className="h-16 sm:h-20" />
      <Certifications />
      <Footer />
    </>
  );
}
