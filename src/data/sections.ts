import { WhyChooseUsItem, SupplyChainStep, ExportDestination, RegionGroup } from "@/types";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: "Direct Farm Sourcing",
    description:
      "Importers benefit from direct partnerships with growers across Tamil Nadu's prime coconut belt — eliminating intermediaries and ensuring fully traceable, high-quality produce from farm to FCL. Our dedicated sourcing team maintains long-term relationships with over 200 certified partner farms, providing supply stability and consistent quality even during seasonal fluctuations that affect spot markets.",
    icon: "farm",
    keyAdvantage:
      "100% traceable supply chain — every batch traceable to source farm with no intermediary dilution",
    businessBenefit:
      "Buyers receive competitive pricing, consistent export-grade quality, and full supply chain visibility without intermediary markups",
    stat: { value: "200+", label: "Partner Farms" },
  },
  {
    title: "Quality Assurance",
    description:
      "Every consignment undergoes rigorous multi-stage quality inspection at our ISO 22000 & HACCP certified facilities. Importers receive products that have passed farm-level screening, processing-line verification, weight calibration, and pre-shipment container inspection — against defined export-grade specifications — before any container is sealed.",
    icon: "quality",
    keyAdvantage:
      "Four-stage inspection protocol at farm intake, processing, grading, and pre-shipment stages",
    businessBenefit:
      "Importers experience reduced rejection rates, consistent specification compliance, and full adherence to destination country import standards",
    stat: { value: "4", label: "Inspection Stages" },
  },
  {
    title: "Global Logistics",
    description:
      "An integrated logistics network spanning three major Indian port corridors — Chennai, Tuticorin, and Nhava Sheva — provides commercial partners with routing flexibility to optimize transit times and freight costs for every destination. All export documentation, customs clearance, and freight coordination are managed in-house, providing single-point accountability with real-time container tracking across every consignment.",
    icon: "logistics",
    keyAdvantage:
      "Multi-port strategy with end-to-end logistics management under single-point accountability",
    businessBenefit:
      "Importers receive faster lead times, competitive freight rates through consolidated carrier relationships, and worry-free documentation compliance",
    stat: { value: "3", label: "Port Corridors" },
  },
  {
    title: "Export Expertise",
    description:
      "With over a decade of international trade experience across 15+ countries, buyers rely on our export team to navigate complex customs regimes, phytosanitary requirements, certificate of origin protocols, and destination-specific import regulations with precision. Every shipment includes complete export documentation — Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Commercial Invoice, and Packing List — ensuring smooth clearance at destination ports.",
    icon: "expertise",
    keyAdvantage:
      "End-to-end documentation and compliance management for hassle-free customs clearance at destination",
    businessBenefit:
      "Importers benefit from reduced demurrage risk, zero documentation-related delays, and full confidence in regulatory compliance across 15+ markets",
    stat: { value: "10+", label: "Years Exporting" },
  },
];

export const supplyChainSteps: SupplyChainStep[] = [
  {
    step: 1,
    title: "Farm Sourcing",
    description:
      "Premium coconuts hand-selected from certified partner farms across Tamil Nadu's rich agricultural regions. Our agronomists work directly with growers to ensure optimal harvest timing, variety selection, and sustainable farming practices that preserve soil health and fruit quality.",
    businessValue:
      "Buyers benefit from direct farm relationships that eliminate intermediaries, ensuring complete traceability from grove to global buyer and competitive pricing from source.",
    qualityRelevance:
      "Farm-level quality gates — each batch inspected for maturity, size uniformity, and visual integrity before acceptance into processing.",
    image: "/images/Farm Sourcing-image.png",
  },
  {
    step: 2,
    title: "Quality Processing",
    description:
      "Hygienic processing at ISO 22000 and HACCP certified facilities with rigorous quality control at every stage. Products are cleaned, sorted, graded, and prepared according to strict export standards under the supervision of trained quality assurance personnel.",
    businessValue:
      "Commercial partners receive products processed under internationally certified food safety protocols — protecting supply chain reputation and ensuring import compliance.",
    qualityRelevance:
      "Critical Control Points monitored continuously: temperature, humidity, hygiene, and product integrity across all processing stages.",
    image: "/images/Quality Processing-image.png",
  },
  {
    step: 3,
    title: "Packaging & Grading",
    description:
      "Careful grading, sorting and export-grade packaging to maintain freshness and meet international standards. Multiple packaging configurations available — from ventilated mesh bags for whole coconuts to vacuum-sealed blocks for coco peat — tailored to destination market requirements and transit conditions.",
    businessValue:
      "Importers benefit from flexible packaging configurations that reduce secondary handling costs and ensure products arrive in optimal condition at destination.",
    qualityRelevance:
      "Each grade visually verified against reference samples; all packaging materials food-grade certified and selected for destination climate compatibility.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
  },
  {
    step: 4,
    title: "Global Shipping",
    description:
      "Efficient container loading and shipping through major Indian ports with real-time tracking for every consignment. Our logistics team coordinates with leading shipping lines including Maersk, MSC, and CMA CGM to secure competitive freight rates and reliable schedules to ports across the Middle East, Europe, the Americas, and Asia-Pacific.",
    businessValue:
      "Commercial partners achieve lower total landed cost through consolidated logistics, competitive freight rates, and complete documentation support included with every shipment.",
    qualityRelevance:
      "Container pre-inspection, optimized stowage, and ventilation management ensure product condition throughout ocean transit.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
  },
];

export const exportDestinations: ExportDestination[] = [
  { country: "United Arab Emirates", region: "Middle East", flag: "🇦🇪" },
  { country: "Saudi Arabia", region: "Middle East", flag: "🇸🇦" },
  { country: "Kuwait", region: "Middle East", flag: "🇰🇼" },
  { country: "Qatar", region: "Middle East", flag: "🇶🇦" },
  { country: "Oman", region: "Middle East", flag: "🇴🇲" },
  { country: "Bahrain", region: "Middle East", flag: "🇧🇭" },
  { country: "Malaysia", region: "Southeast Asia", flag: "🇲🇾" },
  { country: "Singapore", region: "Southeast Asia", flag: "🇸🇬" },
  { country: "Germany", region: "Europe", flag: "🇩🇪" },
  { country: "Netherlands", region: "Europe", flag: "🇳🇱" },
  { country: "United Kingdom", region: "Europe", flag: "🇬🇧" },
  { country: "United States", region: "North America", flag: "🇺🇸" },
  { country: "Canada", region: "North America", flag: "🇨🇦" },
  { country: "Australia", region: "Oceania", flag: "🇦🇺" },
  { country: "New Zealand", region: "Oceania", flag: "🇳🇿" },
  { country: "South Korea", region: "East Asia", flag: "🇰🇷" },
  { country: "Japan", region: "East Asia", flag: "🇯🇵" },
];

export const regionGroups: RegionGroup[] = [
  {
    region: "Middle East",
    description:
      "Our strongest market corridor — serving GCC nations with consistent weekly container shipments to Jebel Ali, Dammam, and other major Gulf ports. Deep relationships with importers across the region ensure smooth customs clearance and last-mile distribution. Typical transit time from South Indian ports: 5–10 days.",
    color: "#D4A017",
    countries: exportDestinations.filter((d) => d.region === "Middle East"),
  },
  {
    region: "Europe",
    description:
      "Growing demand for organic and premium coconut products across the EU. Our shipments to Rotterdam and Hamburg serve food manufacturers, health food distributors, and retail chains with full compliance to EU phytosanitary and quality standards. Typical transit time from Nhava Sheva: 20–25 days.",
    color: "#4A9E6B",
    countries: exportDestinations.filter((d) => d.region === "Europe"),
  },
  {
    region: "North America",
    description:
      "Strategic partnerships with importers in the USA and Canada serving the natural foods sector, wholesale clubs, and coconut water processors. All shipments comply with FDA import requirements and USDA phytosanitary standards. Typical transit time from Chennai/Nhava Sheva: 20–30 days.",
    color: "#2D7D9A",
    countries: exportDestinations.filter((d) => d.region === "North America"),
  },
  {
    region: "Asia-Pacific",
    description:
      "Fast-growing markets across Southeast Asia, Oceania, and East Asia. Our proximity to regional shipping hubs in Singapore and Port Klang enables rapid transit times and cost-effective logistics for buyers across the Asia-Pacific trade zone. Typical transit time from Chennai: 7–14 days.",
    color: "#9B59B6",
    countries: exportDestinations.filter(
      (d) =>
        d.region === "Southeast Asia" ||
        d.region === "Oceania" ||
        d.region === "East Asia"
    ),
  },
];
