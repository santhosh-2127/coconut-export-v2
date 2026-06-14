import type { Metadata } from "next";
import { FAQSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQHero from "../components/sections/FAQHero";
import FAQAccordionSection from "../components/sections/FAQAccordionSection";
import FAQFinalCTA from "../components/sections/FAQFinalCTA";
import type { FAQItem } from "../components/sections/FAQAccordionSection";

/* ═══════════════════════════════════════════════════════════════════════
   FAQ DATA — 6 Categories
   Each category contains buyer-intent questions with detailed answers
   ═══════════════════════════════════════════════════════════════════════ */

/* ─── Category 1: Product Questions ─────────────────────────────────── */
const productFaqs: FAQItem[] = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantities vary by product. For Fresh Brown Coconuts and Pollachi Fresh Coconuts, the typical MOQ is 1 × 20ft FCL (approximately 24,000–25,000 nuts). For Copra, the MOQ is 1 × 20ft FCL (≈18 MT). For Coco Peat, the MOQ is 1 × 20ft FCL (≈500 blocks). We can accommodate smaller trial orders or LCL shipments on a case-by-case basis for qualified new buyers evaluating our products. Contact our team to discuss your specific volume requirements and we will work to find a suitable solution.",
  },
  {
    question: "Which coconut products are available?",
    answer:
      "We offer a comprehensive range of coconut products for international B2B buyers. Our product portfolio includes Fresh Brown Coconut (export grade, 90–130 days maturity), Pollachi Fresh Coconut (premium variety known for its sweet meat and high oil content), High Grade Coconut (superior quality for processing), Copra (dried coconut kernel for oil extraction, available in edible and industrial grades), and Coco Peat (processed coir pith for horticulture, available in blocks, briquettes, and loose form). Each product is graded, inspected, and packaged to meet international quality standards.",
  },
  {
    question: "Can products be customized?",
    answer:
      "Yes, we offer product customization to meet destination market preferences and buyer requirements. Options include custom grading and sorting specifications, tailored packaging configurations, private labelling with your brand name and product information, and specialized processing where technically feasible. Customization requirements should be discussed during the quotation stage so we can confirm technical feasibility, lead times, and any associated cost implications. Our team works closely with buyers to ensure specifications are clearly documented and consistently delivered.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "We offer multiple packaging configurations across our product range. For whole coconuts: standard 25kg PP woven bags, 10kg retail-ready mesh bags, or custom sizes per your requirements. For Copra: standard 50kg PP bags or bulk packaging. For Coco Peat: compressed blocks (5kg and 10kg), briquettes, or loose fill. All packaging can be customized with your branding, barcodes, and handling instructions. Moisture barrier liners are available for high-humidity shipping routes. Packaging specifications are confirmed at order placement to ensure adequate lead time for material procurement.",
  },
  {
    question: "Do you offer product samples?",
    answer:
      "Yes, we can arrange product samples for serious buyers evaluating our products for the first time. Samples are available across all our product categories — Fresh Coconut, Copra, and Coco Peat. Samples can be shipped via international courier (DHL/FedEx) to your business address. Sample costs and shipping charges may apply, which are typically deducted from the first bulk order. Sample requests are processed within 3–5 business days. Contact our export team to request samples for your quality evaluation and laboratory testing.",
  },
  {
    question: "Can I place trial orders before committing to full container loads?",
    answer:
      "Yes, we accommodate trial orders for qualified new buyers. Trial orders can be arranged as LCL (Less than Container Load) consolidated shipments or smaller palletized quantities depending on the product category and destination. For Fresh Brown Coconuts, we can arrange sample quantities via air freight for rapid product evaluation. For Copra and Coco Peat, LCL shipments are available to test quality and market fit before committing to full container volumes. Volume pricing for trial orders is structured transparently, and we provide a clear cost comparison against FCL pricing so you can plan your scale-up with full visibility.",
  },
];

/* ─── Category 2: Export & Shipping ──────────────────────────────────── */
const shippingFaqs: FAQItem[] = [
  {
    question: "Which countries do you export to?",
    answer:
      "We export to buyers across 15+ countries spanning the Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), Europe (Netherlands, Germany, United Kingdom, France, Belgium, Spain), North America (United States, Canada), Asia-Pacific (Singapore, Malaysia, Australia, New Zealand), and Africa (Mauritius, Seychelles, South Africa). Our multi-port export strategy from Chennai, Tuticorin, and Nhava Sheva gives us the flexibility to optimise routing for every destination. If your country is not listed, please contact us — we may still be able to serve your market.",
  },
  {
    question: "What shipping terms do you support?",
    answer:
      "We support all major international shipping incoterms including FOB (Free On Board), CIF (Cost, Insurance & Freight), and CFR (Cost & Freight). For FOB terms, we handle all export documentation and loading at the origin port. For CIF terms, we arrange ocean freight, marine insurance, and door-to-port delivery. For CFR terms, we manage freight without insurance. Our logistics team can advise on the most suitable incoterm based on your destination, risk preference, and logistics capability. We provide clear cost breakdowns for each option at the quotation stage.",
  },
  {
    question: "Do you provide FOB and CIF quotations?",
    answer:
      "Yes, we provide quotations under both FOB and CIF terms. FOB quotations include product cost, export packing, inland freight to port, and export customs clearance. CIF quotations include all FOB components plus ocean freight, marine insurance (covering Institute Cargo Clauses A — the broadest coverage available), and destination port charges. We also provide CFR quotations (freight inclusive, insurance excluded) for buyers who prefer to arrange their own insurance. All quotations are detailed with a line-by-line cost breakdown for full transparency.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Transit times vary by destination from the date of vessel departure. Middle East ports (Jebel Ali, Dammam, Hamad): 5–10 days from Tuticorin. Southeast Asia (Singapore, Port Klang, Jakarta): 7–14 days from Chennai. Europe (Rotterdam, Hamburg, Felixstowe): 20–25 days from Nhava Sheva. North America (New York, Savannah, Los Angeles): 20–30 days from Chennai/Nhava Sheva. Australia (Sydney, Melbourne, Brisbane): 14–20 days from Chennai. West Africa (Tema, Lagos, Mombasa): 18–25 days. Actual transit depends on shipping line schedules, routing, and seasonal factors.",
  },
  {
    question: "Which ports do you export from?",
    answer:
      "We export from three major Indian port corridors strategically positioned for optimal global connectivity. Chennai Port (East Coast) — primary for Southeast Asia, East Asia, and US East Coast routes. Tuticorin/VOC Port (South Coast) — ideal for Middle East and Europe via the Suez Canal, offering shorter transit times to Gulf destinations. Nhava Sheva/JNPT (West Coast) — our largest container gateway, well-connected to Europe, Africa, Americas, and Australia with frequent sailings from major shipping lines including Maersk, MSC, CMA CGM, and COSCO.",
  },
  {
    question: "Can you arrange freight?",
    answer:
      "Yes, under CIF and CFR terms we arrange ocean freight with our network of trusted shipping line partners including Maersk, MSC, CMA CGM, COSCO, Hapag-Lloyd, and Evergreen. Our logistics team manages all freight booking, container tracking, documentation coordination, and communication with shipping lines throughout the transit. We leverage our consolidated cargo volumes to negotiate competitive freight rates that we pass on to our buyers. For FOB terms, we coordinate loading at the port and provide all documentation for your nominated freight forwarder.",
  },
];

/* ─── Category 3: Documentation ──────────────────────────────────────── */
const docFaqs: FAQItem[] = [
  {
    question: "Which export documents are provided?",
    answer:
      "Every shipment includes a complete export documentation package: Bill of Lading (original and telex release options), Commercial Invoice (with full product description, unit prices, and total value), Packing List (with container-wise and pallet-wise weight and quantity details), Certificate of Origin (non-preferential or under India's trade agreements), Phytosanitary Certificate (issued by the National Plant Protection Organisation), and Fumigation Certificate (where required by destination country). Additional documents such as Health Certificates, Certificate of Analysis, and country-specific customs forms are arranged as needed.",
  },
  {
    question: "Can you provide Certificate of Origin?",
    answer:
      "Yes, we provide Certificate of Origin for every export shipment. We issue both non-preferential Certificates of Origin (general format) and preferential certificates under India's Free Trade Agreements (FTAs) where applicable. Our documentation team ensures the Certificate of Origin is properly issued by the designated chamber of commerce or export promotion council, correctly completed with all product details, and submitted within the required timeframes. Preferential certificates can help buyers reduce or eliminate import duties in certain destination markets.",
  },
  {
    question: "Can you provide SGS inspection?",
    answer:
      "Yes, we can arrange third-party inspection and quality verification by SGS (Société Générale de Surveillance) or other accredited inspection agencies such as Bureau Veritas, Intertek, or TÜV. SGS inspection services include quantity and weight verification, quality parameter testing, packaging inspection, container loading supervision, and photo documentation. Inspection reports are typically issued within 2–5 business days of completion. Third-party inspection costs are quoted separately and arranged based on buyer requirements. We recommend SGS inspection for first-time buyers or new market entries.",
  },
  {
    question: "Do you provide Phytosanitary Certificates?",
    answer:
      "Yes, all coconut product shipments include a Phytosanitary Certificate issued by the Indian National Plant Protection Organisation (NPPO) under the International Plant Protection Convention (IPPC) guidelines. The certificate confirms that the products have been inspected, found free from quarantine pests, and comply with the phytosanitary import requirements of the destination country. Our team coordinates with the NPPO inspectors to ensure timely inspection and certificate issuance. Additional destination-specific declarations can be added to the certificate where required.",
  },
  {
    question: "Can you provide health certificates?",
    answer:
      "Yes, we can arrange Health Certificates and Certificate of Fitness for Human Consumption for food-grade coconut products including Fresh Coconut and Copra. These certificates are issued by FSSAI (Food Safety and Standards Authority of India) approved authorities and confirm that the products meet the food safety requirements for human consumption. Health certificates are commonly required by food safety authorities in European Union countries, Gulf Cooperation Council states, and other regulated markets. Please specify your health certificate requirements during the quotation stage so we can arrange accordingly.",
  },
  {
    question: "Can you handle customs clearance at destination?",
    answer:
      "While our standard service covers export customs clearance in India, we can coordinate with trusted clearing agents at destination ports for import customs clearance upon request. This service is available at select destinations where we have established partnerships with reliable customs brokers. For other destinations, we provide complete documentation packages to support your customs broker in clearing the shipment efficiently. Our documentation includes all required forms, certificates, and declarations necessary for smooth clearance through customs authorities.",
  },
];

/* ─── Category 4: Quality Assurance ──────────────────────────────────── */
const qualityFaqs: FAQItem[] = [
  {
    question: "How is quality verified?",
    answer:
      "Quality verification follows a multi-stage process from farm to port. Stage 1 — Source Inspection: Our field team inspects coconut lots at partner farms for maturity, size, weight, and visual quality before procurement. Stage 2 — Incoming Inspection: Products are inspected upon arrival at our packing facility for grading compliance, physical damage, and pest presence. Stage 3 — Process Inspection: During sorting, grading, and packing, quality parameters are continuously monitored by trained supervisors. Stage 4 — Pre-shipment Inspection: Packed containers are inspected for stowage quality, container condition, and ventilation setup before sealing. Buyers may also request third-party inspection by SGS or similar agencies for independent verification.",
  },
  {
    question: "Do products undergo inspection?",
    answer:
      "Yes, every shipment undergoes inspection at multiple checkpoints before loading. Our inspection protocol covers visual grading (size, colour, shape, and surface condition), physical testing (weight verification, shell hardness, and meat thickness sampling for coconuts, moisture content testing for copra and coco peat), pest and disease screening (visual inspection for any signs of infestation, with laboratory testing where required), and packaging inspection (bag condition, stitching quality, labelling accuracy, and pallet stability). Inspection records are maintained for traceability and can be shared with buyers upon request.",
  },
  {
    question: "What standards do you follow?",
    answer:
      "We follow internationally recognised quality standards for agricultural commodity exports. Our operations comply with ISO 22000 Food Safety Management System requirements and HACCP (Hazard Analysis and Critical Control Points) principles for food-grade products. For Fresh Coconut, we adhere to the Indian Grade Standards for Export of Coconut as specified by APEDA (Agricultural and Processed Food Products Export Development Authority). For Copra, we follow the specifications outlined in the Agmark standards for edible copra. For Coco Peat, we meet the European horticultural substrate quality parameters including EC, pH, and expansion ratio specifications.",
  },
  {
    question: "Do you have ISO and HACCP certification?",
    answer:
      "Yes, our facility and operations are ISO 22000:2018 certified for Food Safety Management Systems. We also operate under HACCP principles with documented hazard analysis, critical control points, monitoring procedures, and corrective action protocols. Our certifications are current and verified by accredited third-party certification bodies. Certification documents, audit reports, and scope certificates can be shared with qualified buyers during the evaluation process. We undergo annual surveillance audits and periodic recertification to maintain compliance with evolving standards.",
  },
  {
    question: "Are products tested before shipment?",
    answer:
      "Yes, pre-shipment testing is conducted on representative samples from each production lot. Testing parameters vary by product. For Fresh Coconuts: visual grading, weight sampling, meat thickness, and water content assessment. For Copra: moisture content (target below 6% for export grade), oil content (minimum 65% for edible grade), free fatty acid (FFA) level, and aflatoxin screening. For Coco Peat: electrical conductivity (EC), pH level, expansion ratio, and moisture content. Laboratory test reports are available for review and can be included with the shipping documentation package.",
  },
];

/* ─── Category 5: Payment & Commercial Terms ─────────────────────────── */
const paymentFaqs: FAQItem[] = [
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept multiple payment structures designed for international trade. The most commonly used options are: Letter of Credit (LC) — irrevocable, confirmed LC at sight from a major international bank, the preferred method for first-time transactions. Telegraphic Transfer (TT) — 30% advance payment with 70% against scanned shipping documents, suitable for established buyer relationships. Documents Against Payment (DP) — shipping documents released to the buyer upon payment at the bank, available for buyers with verified trading history. Structured payment plans are available for long-term contract buyers. Payment terms are negotiated during the quotation process and formalised in the sales contract.",
  },
  {
    question: "How are quotations prepared?",
    answer:
      "Quotations are prepared based on your specific requirements including product type, volume, grade specifications, packaging configuration, shipping incoterm (FOB, CIF, or CFR), and destination port. Our quotation includes per-unit pricing, total FOB/CIF value, estimated ocean freight, marine insurance (for CIF terms), documentation charges, and validity period. Volume discounts may be available for larger or recurring orders. Quotations are prepared by our export team and typically delivered within 24 hours of receiving your complete requirements. Custom pricing for long-term contracts is assessed on a case-by-case basis.",
  },
  {
    question: "How long are quotations valid?",
    answer:
      "Our standard quotations are valid for 15–30 days from the date of issue, depending on market conditions and product category. Price validity is clearly stated on the quotation document. Extensions may be granted subject to market conditions — please contact our team if your quotation has expired and you require an updated price. For long-term supply contracts, pricing is typically structured with defined validity periods (30–90 days) and quarterly or semi-annual review mechanisms tied to observable market benchmarks such as coconut commodity indices.",
  },
  {
    question: "Do you offer credit terms?",
    answer:
      "Yes, credit terms are available for buyers with established trading history and verified business credentials. Options include 30–60 day credit terms post-shipment after a qualifying order history, deferred LC terms with extended usance periods, and structured payment plans for long-term volume commitments. Credit terms are assessed on a case-by-case basis considering buyer profile, order volume consistency, market reputation, and trade references. Our finance team can discuss suitable arrangements during the quotation process. Initial orders typically require LC or TT terms to establish the trading relationship.",
  },
  {
    question: "Can you provide a proforma invoice?",
    answer:
      "Yes, we provide a detailed proforma invoice for all confirmed orders. The proforma invoice includes complete buyer and seller information, product description with specifications, unit price and total value (in USD), shipping terms (incoterm), payment terms, estimated delivery date, packaging details, and all applicable charges. The proforma invoice serves as the basis for LC opening, TT payment initiation, and import documentation at the destination. Once the proforma invoice is issued and accepted, we proceed with production planning and logistics coordination.",
  },
];

/* ─── Category 6: RFQ Process ────────────────────────────────────────── */
const rfqFaqs: FAQItem[] = [
  {
    question: "How do I request a quotation?",
    answer:
      "Requesting a quotation is simple. You can submit a Request For Quotation (RFQ) through our online form at /rfq — this is the fastest and most comprehensive way to provide all the details we need. Alternatively, you can email us at info@globalcocoexports.com with your product requirements, or reach out via WhatsApp for a quick initial discussion. Our export team reviews all enquiries promptly and responds with a detailed commercial quotation within 24 hours. We recommend using the RFQ form for complete requirements to receive the most accurate pricing.",
  },
  {
    question: "What information should I provide?",
    answer:
      "To prepare an accurate quotation, please include the following information: Product(s) of interest (Fresh Brown Coconut, Pollachi Coconut, Copra, or Coco Peat), required volume/quantity (preferably in metric tons or FCL units), target grade and quality specifications, preferred packaging configuration, delivery destination (country and port), preferred shipping incoterm (FOB, CIF, or CFR), and your company details (company name, contact information, and business type — importer, distributor, or processor). The more information you provide, the more accurate and comprehensive your quotation will be.",
  },
  {
    question: "How soon will I receive a response?",
    answer:
      "Our export team reviews all RFQ submissions within 24 business hours. You can expect a detailed commercial quotation — including product pricing, shipping costs, and delivery timelines — within one to two business days. Complex or multi-product enquiries may require additional time for accurate pricing, and we will keep you informed throughout the process. Urgent requests received before 2:00 PM IST are often quoted the same day. We take pride in our responsive service — it is one of the reasons buyers choose to work with us.",
  },
  {
    question: "Can I schedule a consultation?",
    answer:
      "Yes, we offer consultation calls for serious buyers to discuss product selection, volumes, shipping terms, and documentation requirements. A consultation call allows us to understand your specific sourcing needs and recommend the most suitable products, grades, and logistics solutions. Consultations can be scheduled via email or WhatsApp during business hours (Monday–Saturday, 9:00 AM–6:00 PM IST). Our export team will work with your schedule to arrange a call at a mutually convenient time. We recommend submitting your requirements in advance so we can prepare relevant information for the discussion.",
  },
  {
    question: "How are prices determined?",
    answer:
      "Our pricing is determined based on several factors: current market rates for coconut commodities (influenced by global supply-demand dynamics, seasonal production cycles, and commodity indices), product grade and quality specifications, order volume (FCL quantities typically receive better per-unit pricing), packaging configuration (standard vs. custom packaging), shipping incoterm (FOB, CIF, or CFR terms include different cost components), and destination port (affects freight and insurance costs). We strive to offer competitive pricing while maintaining the highest quality standards. Volume discounts and long-term contract pricing are available for qualified buyers.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   METADATA — For SEO
   ═══════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "FAQ — Coconut Export Questions Answered",
  description:
    "Comprehensive answers about bulk coconut export — products, minimum order quantities, shipping terms, FOB/CIF pricing, documentation, quality standards, and payment terms for international buyers.",
  keywords: [
    "coconut export FAQ",
    "coconut export questions",
    "buying coconut from India",
    "coconut MOQ",
    "coconut shipping terms",
    "coconut export documents",
    "coconut quality standards",
    "coconut payment terms",
    "coconut RFQ process",
    "bulk coconut procurement guide",
    "coconut export knowledge base",
  ],
  openGraph: {
    title: "FAQ — Coconut Export Questions Answered | Global Coco Exports",
    description:
      "Comprehensive answers about bulk coconut export — products, MOQs, shipping, documentation, quality, and payment for international buyers.",
    images: [
      {
        url: "/images/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ — Coconut Export Questions Answered | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/faq",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Coconut Export Questions Answered | Global Coco Exports",
    description:
      "Comprehensive answers about bulk coconut export — products, MOQs, shipping, documentation, and payment.",
    images: ["/images/og-faq.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/faq",
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   FAQ SCHEMA DATA — for rich search results
   ═══════════════════════════════════════════════════════════════════════ */
const allFaqsForSchema = [
  ...productFaqs,
  ...shippingFaqs,
  ...docFaqs,
  ...qualityFaqs,
  ...paymentFaqs,
  ...rfqFaqs,
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function FAQPage() {
  return (
    <>
      <Navbar />
      <FAQHero />
      <FAQAccordionSection
        id="product-questions"
        headingPrefix="Product"
        headingHighlight="Questions"
        subtitle="Common questions about our coconut product range, minimum order quantities, packaging options, and sampling process."
        icon="🥥"
        faqs={productFaqs}
        index={0}
      />
      <FAQAccordionSection
        id="export-shipping"
        headingPrefix="Export &"
        headingHighlight="Shipping"
        subtitle="Everything you need to know about export destinations, incoterms, transit times, ports, and freight arrangements."
        icon="🚢"
        faqs={shippingFaqs}
        index={1}
      />
      <FAQAccordionSection
        id="documentation"
        headingPrefix="Export"
        headingHighlight="Documentation"
        subtitle="Information about export documentation packages, certificates of origin, inspection reports, and customs clearance."
        icon="📄"
        faqs={docFaqs}
        index={2}
      />
      <FAQAccordionSection
        id="quality-assurance"
        headingPrefix="Quality"
        headingHighlight="Assurance"
        subtitle="Details about our quality verification process, inspection protocols, certifications, and product testing procedures."
        icon="✅"
        faqs={qualityFaqs}
        index={3}
      />
      <FAQAccordionSection
        id="payment-terms"
        headingPrefix="Payment &"
        headingHighlight="Terms"
        subtitle="Information about accepted payment methods, quotation preparation, validity periods, and credit terms."
        icon="💳"
        faqs={paymentFaqs}
        index={4}
      />
      <FAQAccordionSection
        id="rfq-process"
        headingPrefix="RFQ"
        headingHighlight="Process"
        subtitle="How to request a quotation, what information to provide, response times, and how pricing is determined."
        icon="📋"
        faqs={rfqFaqs}
        index={5}
      />
      <FAQFinalCTA />
      <FAQSchema questions={allFaqsForSchema} />
      <Footer />
    </>
  );
}
