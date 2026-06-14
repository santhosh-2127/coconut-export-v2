import type { Metadata } from "next";
import { FAQSchema } from "@/lib/schemas";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import ContactHero from "@/app/components/sections/ContactHero";
import ContactOptions from "@/app/components/sections/ContactOptions";
import ContactForm from "@/app/components/sections/ContactForm";
import ContactServices from "@/app/components/sections/ContactServices";
import ContactHours from "@/app/components/sections/ContactHours";
import ContactLocation from "@/app/components/sections/ContactLocation";
import ContactFAQ from "@/app/components/sections/ContactFAQ";
import ContactFinalCTA from "@/app/components/sections/ContactFinalCTA";

export const metadata: Metadata = {
  title: "Contact Us — Bulk Coconut Export Inquiry",
  description:
    "Contact our coconut export specialists for bulk coconut, copra, and coco peat sourcing. Get quotations, logistics support, and technical specifications within 24 hours for international buyers.",
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
      "Contact our export specialists for bulk coconut sourcing, quotations, logistics support, and documentation assistance within 24 hours.",
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
      <Navbar />
      <main>
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactServices />
        <ContactHours />
        <ContactLocation />
      <ContactFAQ />
      <FAQSchema questions={[
        { question: "How quickly do you respond to inquiries?", answer: "We typically respond within 24 hours on email and within 2 hours on WhatsApp. Urgent inquiries received before 2:00 PM IST are often answered the same business day." },
        { question: "Can I request product specifications before placing an order?", answer: "Absolutely. We provide detailed technical specifications, quality parameters, and product certifications for all our coconut products — including moisture content, oil content, grading standards, and packaging options." },
        { question: "Can I schedule a consultation with your export team?", answer: "Yes. We offer consultation calls for serious buyers to discuss product selection, volumes, shipping terms, and documentation requirements. Consultations can be scheduled via email or WhatsApp during business hours." },
        { question: "Can you support international shipments?", answer: "Yes. We export to buyers across the Middle East, Europe, North America, and Asia-Pacific. We handle FOB, CIF, and CFR terms from Chennai, Tuticorin, and Nhava Sheva ports." },
        { question: "Do you provide samples for quality evaluation?", answer: "Yes, we can arrange product samples for serious buyers. Sample costs and shipping arrangements can be discussed with our export team. Sample requests are typically processed within 3–5 business days." },
      ]} />
      <ContactFinalCTA />
      </main>
      <Footer />
    </>
  );
}
