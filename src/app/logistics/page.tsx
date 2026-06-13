import type { Metadata } from "next";
import { FAQSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LogisticsHero from "../components/sections/LogisticsHero";
import LogisticsProcess from "../components/sections/LogisticsProcess";
import LogisticsIncoterms from "../components/sections/LogisticsIncoterms";
import LogisticsContainers from "../components/sections/LogisticsContainers";
import LogisticsDocs from "../components/sections/LogisticsDocs";
import LogisticsShipping from "../components/sections/LogisticsShipping";
import LogisticsQuality from "../components/sections/LogisticsQuality";
import LogisticsFAQ from "../components/sections/LogisticsFAQ";
import LogisticsFinalCTA from "../components/sections/LogisticsFinalCTA";

export const metadata: Metadata = {
  title: "Logistics & Export Operations — Coconut Shipping from India",
  description:
    "Global coconut export logistics from India — container planning, FOB/CIF/CFR shipping, export documentation, and delivery from Chennai, Tuticorin, and Nhava Sheva ports to worldwide destinations.",
  keywords: [
    "coconut export logistics",
    "shipping coconut from India",
    "coconut container shipping",
    "coconut export documentation",
    "coconut freight India",
    "incoterms coconut export",
  ],
  openGraph: {
    title: "Logistics & Export Operations — Coconut Shipping from India",
    description:
      "Global coconut export logistics — container planning, shipping, documentation, and delivery from Indian ports to destinations worldwide.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Logistics & Export Operations — Coconut Shipping from India" }],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/logistics",
  },
};

export default function LogisticsPage() {
  return (
    <>
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
