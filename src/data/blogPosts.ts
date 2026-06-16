export interface BlogSection {
  type: "text" | "image" | "callout" | "keyTakeaways" | "list";
  heading?: string;
  content?: string;
  items?: string[];
  image?: string;
  imageAlt?: string;
  calloutLabel?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  heroImage: string;
  heroImageAlt: string;
  ogImage: string;
  intro: string;
  tableOfContents: string[];
  sections: BlogSection[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  /* ─────────────────────────────────────────────────────────────────
     BLOG 1 — Fresh Brown Coconut Export Guide
  ───────────────────────────────────────────────────────────────── */
  {
    slug: "fresh-brown-coconut-export-guide",
    title: "Fresh Brown Coconut Export Guide: Grades, Packaging & Global Markets",
    category: "Product Guide",
    excerpt:
      "Everything international buyers need to know about sourcing fresh brown coconuts from India — export grades, packaging formats, shelf life, and target import markets.",
    readTime: "8 min read",
    publishDate: "2024-12-01",
    heroImage: "/images/products/fresh-brown-coconut/Fresh-Brown-image.png",
    heroImageAlt: "Fresh Brown Coconuts ready for export — premium Indian produce",
    ogImage: "/images/products/fresh-brown-coconut/Fresh-Brown-image.png",
    intro:
      "Fresh brown coconuts from India are among the most traded agricultural commodities in global markets. With Tamil Nadu — particularly the Pollachi belt — producing some of the world's finest coconuts, Indian exporters supply food processors, retailers, and distributors across the Middle East, Europe, and Asia. This guide covers everything a buyer needs to know before placing a sourcing order.",
    tableOfContents: [
      "Product Overview",
      "Export Grades",
      "Packaging Formats",
      "Shelf Life & Storage",
      "Commercial Applications",
      "Key Import Markets",
    ],
    sections: [
      {
        type: "text",
        heading: "Product Overview",
        content:
          "Fresh brown coconuts are fully matured coconuts harvested at 11–12 months. The husk is removed, leaving the hard outer shell intact. Inside, buyers find firm white coconut meat and approximately 150–300ml of coconut water. Indian fresh brown coconuts are prized for their consistent size, hard shell integrity, and sweet meat quality — attributes that command premium prices in Middle Eastern and European retail markets.",
      },
      {
        type: "image",
        image: "/images/storytelling/Farm Sourcing2-image.png",
        imageAlt: "Farm sourcing of fresh brown coconuts in Tamil Nadu, India",
        heading: "Farm-to-Port Supply Chain",
      },
      {
        type: "text",
        heading: "Export Grades",
        content:
          "Indian fresh brown coconuts are classified by size and weight. Grade A (180–240g) is the premium export grade targeting retail and food service buyers. Grade B (140–180g) suits industrial food processors. Grading is performed at the packing facility with calibrated mechanical sorters to ensure uniformity per consignment. Buyers can specify grade requirements in their RFQ.",
      },
      {
        type: "list",
        heading: "Standard Export Grade Specifications",
        items: [
          "Grade A Premium: 180–240g, firm shell, clean surface, minimal defects",
          "Grade B Commercial: 140–180g, suitable for food processing applications",
          "Custom grades available on request for specific retail pack sizes",
          "Uniform sizing per carton: ±10g tolerance per batch",
        ],
      },
      {
        type: "callout",
        calloutLabel: "Export Insight",
        content:
          "Most Middle Eastern retail markets specify Grade A coconuts with a minimum shell diameter of 90mm. Buyers importing for food processing can often accept mixed grades at competitive pricing.",
      },
      {
        type: "text",
        heading: "Packaging Formats",
        content:
          "Fresh brown coconuts are packed in ventilated mesh bags or fibre cartons depending on destination requirements. Mesh bags (typically 10kg or 20kg per bag) allow natural airflow, extending shelf life during ocean transit. Cartons are used for retail markets requiring branded pack presentation. Custom packaging and private label printing are available for established volume buyers.",
      },
      {
        type: "image",
        image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
        imageAlt: "Coconut packaging and production facility in Tamil Nadu",
        heading: "Packaging & Production",
      },
      {
        type: "text",
        heading: "Shelf Life & Storage",
        content:
          "Under ambient conditions, fresh brown coconuts maintain quality for 45–60 days post-harvest. Refrigerated storage at 10–13°C extends shelf life to 90 days. During ocean transit, ventilated containers are used to prevent condensation buildup. Buyers in distant markets (Europe, North America) are advised to specify refrigerated containers for shipments exceeding 20 days in transit.",
      },
      {
        type: "text",
        heading: "Commercial Applications",
        content:
          "Fresh brown coconuts serve diverse end markets. Food retailers sell them as whole produce. Food processors extract coconut milk, coconut cream, desiccated coconut, and virgin coconut oil. Beverage manufacturers use fresh coconut water. Cosmetic manufacturers use cold-pressed coconut oil as a base ingredient. The versatility of the product makes it a stable commodity with consistent year-round demand.",
      },
      {
        type: "text",
        heading: "Key Import Markets",
        content:
          "The Middle East — particularly UAE, Saudi Arabia, and Qatar — accounts for the largest share of Indian fresh brown coconut exports due to strong diaspora demand and growing retail distribution. European markets, led by the UK, Germany, and the Netherlands, import for both retail and food processing. Southeast Asian markets import for wholesale redistribution.",
      },
    ],
    keyTakeaways: [
      "Grade A fresh brown coconuts (180–240g) command premium pricing in retail markets",
      "Ventilated mesh bags are the standard packaging for ocean freight",
      "Shelf life is 45–60 days ambient; 90 days refrigerated",
      "Middle East and Europe are the primary destination markets",
      "Custom packaging and private label available for volume buyers",
    ],
    relatedSlugs: [
      "pollachi-fresh-coconut-export-guide",
      "copra-coconut-export-guide",
      "complete-coconut-export-guide",
    ],
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOG 2 — Pollachi Fresh Coconut
  ───────────────────────────────────────────────────────────────── */
  {
    slug: "pollachi-fresh-coconut-export-guide",
    title: "Pollachi Fresh Coconut: Why Global Buyers Prefer This Origin",
    category: "Product Guide",
    excerpt:
      "Discover why Pollachi-origin coconuts command premium pricing in global markets — regional quality advantages, export demand drivers, and commercial sourcing insights.",
    readTime: "6 min read",
    publishDate: "2024-12-05",
    heroImage: "/images/products/pollachi-fresh-coconut/hero.jpg",
    heroImageAlt: "Pollachi fresh coconuts — premium origin produce from Tamil Nadu",
    ogImage: "/images/products/pollachi-fresh-coconut/hero.jpg",
    intro:
      "Pollachi, a town in the Coimbatore district of Tamil Nadu, India, is considered the coconut capital of Asia. The region's unique combination of red soil, consistent rainfall, and centuries of coconut cultivation expertise produces coconuts that are consistently superior in size, meat quality, and oil content. Global buyers increasingly specify Pollachi origin when sourcing premium fresh coconuts.",
    tableOfContents: [
      "The Pollachi Region",
      "Quality Advantages",
      "Export Demand & Pricing",
      "Commercial Applications",
      "How to Source Pollachi Coconuts",
    ],
    sections: [
      {
        type: "text",
        heading: "The Pollachi Region",
        content:
          "Pollachi sits at an elevation of 130–300 metres above sea level in the foothills of the Western Ghats. The area receives 700–900mm of annual rainfall, creating ideal growing conditions for coconut palms. The red laterite soil of the region is naturally rich in potassium, which directly influences the oil content and meat thickness of the mature coconut. Over 80% of Pollachi's agricultural land is dedicated to coconut cultivation, making it the single largest coconut-producing microclimate in South Asia.",
      },
      {
        type: "image",
        image: "/images/storytelling/Farm Sourcing2-image.png",
        imageAlt: "Coconut plantation sourcing in the Pollachi region of Tamil Nadu",
        heading: "Pollachi Coconut Farms",
      },
      {
        type: "text",
        heading: "Quality Advantages",
        content:
          "Pollachi coconuts are consistently larger than national averages, with Grade A specimens averaging 200–260g. The meat is thick, firm, and high in oil content (65–68% oil on dry basis), making them preferred for both fresh consumption and oil extraction. The natural water content (250–350ml per nut) is sweeter and clearer than lower-grade origins. Shell integrity is higher, resulting in fewer breakages during transit — a critical factor for long-distance export shipments.",
      },
      {
        type: "callout",
        calloutLabel: "Buyer Insight",
        content:
          "Middle Eastern retail buyers consistently pay a 12–18% premium for Pollachi-origin coconuts versus generic Indian origin. The origin specification is increasingly appearing in import purchase orders from European food distributors.",
      },
      {
        type: "list",
        heading: "Key Quality Differentiators",
        items: [
          "Average nut weight 200–260g — above national average of 150–200g",
          "Oil content 65–68% on dry basis — preferred by oil extraction facilities",
          "Thicker meat wall: 12–16mm versus 8–12mm for standard grades",
          "Higher shell hardness — fewer transit breakages in FCL shipments",
          "Natural water volume: 250–350ml per nut, superior taste profile",
        ],
      },
      {
        type: "text",
        heading: "Export Demand & Pricing",
        content:
          "Pollachi coconuts attract sustained demand from retail importers in the UAE, Saudi Arabia, Kuwait, and Bahrain, where they are merchandised as premium produce. European organic food distributors in Germany, the Netherlands, and the UK increasingly source Pollachi origin for organic product lines. Pricing typically runs 12–20% above generic Tamil Nadu origin, reflecting the quality differential and brand recognition in professional buying circles.",
      },
      {
        type: "text",
        heading: "Commercial Applications",
        content:
          "Beyond fresh retail, Pollachi coconuts are the preferred input for virgin coconut oil (VCO) production due to their high oil content. Manufacturers of premium coconut milk and coconut cream specify Pollachi origin to achieve higher solids content per batch. Desiccated coconut producers benefit from the thicker meat yield per nut, improving throughput efficiency.",
      },
      {
        type: "image",
        image: "/images/storytelling/processing-image.png",
        imageAlt: "Coconut processing facility preparing Pollachi coconuts for export",
        heading: "Processing for Export",
      },
      {
        type: "text",
        heading: "How to Source Pollachi Coconuts",
        content:
          "Buyers sourcing Pollachi-origin coconuts should work with exporters who have direct farm relationships in the Pollachi belt — not brokers purchasing from secondary markets. Direct sourcing ensures origin authenticity, consistent grade, and price stability. Minimum order quantities for FCL shipments typically start at 20 metric tonnes. Buyers can request origin certification and farm-level traceability documentation as part of the purchase process.",
      },
    ],
    keyTakeaways: [
      "Pollachi is the largest single coconut-producing region in South Asia",
      "Average nut weight of 200–260g is significantly above national average",
      "Oil content of 65–68% makes Pollachi preferred for VCO and oil extraction",
      "Premium pricing of 12–20% above generic origin is standard in import markets",
      "Direct exporter relationships are essential for origin authenticity",
    ],
    relatedSlugs: [
      "fresh-brown-coconut-export-guide",
      "copra-coconut-export-guide",
      "complete-coconut-export-guide",
    ],
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOG 3 — Copra Coconut Export Guide
  ───────────────────────────────────────────────────────────────── */
  {
    slug: "copra-coconut-export-guide",
    title: "Copra Coconut Export Guide: Industrial Uses, Specifications & Sourcing",
    category: "Product Guide",
    excerpt:
      "A complete sourcing reference for industrial buyers of copra — what copra is, how it is graded, its primary uses in oil production, and key export specifications from India.",
    readTime: "7 min read",
    publishDate: "2024-12-10",
    heroImage: "/images/products/copra-coconut/hero.jpg",
    heroImageAlt: "Copra coconut — dried coconut meat ready for oil extraction and export",
    ogImage: "/images/products/copra-coconut/hero.jpg",
    intro:
      "Copra is the dried meat (kernel) of the mature coconut, produced by removing the outer husk and shell and drying the white flesh to reduce moisture content below 6%. It is the primary raw material for coconut oil production globally, and India is one of the world's leading copra exporters. Industrial buyers — oil mills, oleochemical plants, and animal feed processors — rely on consistent copra supply from trusted Indian exporters.",
    tableOfContents: [
      "What Is Copra",
      "Copra Types & Grades",
      "Industrial Uses",
      "Oil Yield & Extraction",
      "Export Specifications",
      "Sourcing Considerations",
    ],
    sections: [
      {
        type: "text",
        heading: "What Is Copra",
        content:
          "Copra is produced from fully matured coconuts (12+ months). After husking and de-shelling, the white coconut meat is dried using sun drying, kiln drying, or a combination of both. The drying process reduces moisture from approximately 50% in fresh meat to below 6% in export-grade copra. This low moisture level prevents mould growth and rancidity during long-distance ocean shipment.",
      },
      {
        type: "image",
        image: "/images/products/copra-coconut/hero.jpg",
        imageAlt: "Export-grade copra coconut from Tamil Nadu, India",
        heading: "Export-Grade Copra",
      },
      {
        type: "text",
        heading: "Copra Types & Grades",
        content:
          "Mill copra (also called edible copra) is produced under controlled drying conditions and meets food-grade standards. It commands higher prices and is used for edible oil production. Ball copra is a traditional premium variety produced in the Pollachi region, where the entire nut is dried whole — it has exceptional oil content and is used for high-value oil extraction. Cup copra is the standard export grade, produced by halving the nut before drying.",
      },
      {
        type: "list",
        heading: "Standard Export Grade Parameters",
        items: [
          "Moisture content: ≤6% (export requirement); ≤4% preferred by most oil mills",
          "Oil content: 65–70% on dry basis for premium grades",
          "Free fatty acid (FFA): ≤1% for mill-grade copra",
          "Aflatoxin: below 10 ppb per destination country requirements",
          "Foreign matter: ≤0.5% by weight",
        ],
      },
      {
        type: "callout",
        calloutLabel: "Quality Note",
        content:
          "Aflatoxin levels are the most critical parameter for copra import compliance. European buyers require aflatoxin below 4 ppb (EC Regulation 1881/2006). Buyers should always request lab test certificates with each shipment.",
      },
      {
        type: "text",
        heading: "Industrial Uses",
        content:
          "The dominant use of copra is coconut oil extraction, accounting for approximately 85% of global copra consumption. Copra oil (RBD coconut oil) is used in food manufacturing (bakery, confectionery, frying), cosmetics and personal care (soaps, shampoos, lotions), and oleochemicals (detergents, lubricants). The pressed cake residue (copra meal/poonac) is a protein-rich animal feed ingredient used in dairy and poultry feed formulations.",
      },
      {
        type: "image",
        image: "/images/storytelling/processing-image.png",
        imageAlt: "Copra processing and quality inspection before export",
        heading: "Processing & Quality Control",
      },
      {
        type: "text",
        heading: "Oil Yield & Extraction",
        content:
          "Premium Indian copra yields 63–70% oil by weight using expeller pressing. Solvent extraction can recover an additional 2–4%. For buyers operating oil mills, the oil yield differential between premium and commercial grade copra can significantly impact per-unit production economics. Higher oil yield copra commands 8–15% premium pricing over lower-grade material but typically delivers positive ROI at scale.",
      },
      {
        type: "text",
        heading: "Export Specifications",
        content:
          "Indian copra is exported in jute bags (50kg) or jumbo polypropylene bags (500–1,000kg) for bulk shipments. Container loading is done in 20-foot FCL containers, typically holding 18–20 MT of bagged copra. Bulk copra can be loaded loose in 40-foot containers for large industrial buyers with receiving facilities for loose cargo. All shipments include moisture test certificates, oil content reports, and aflatoxin analysis.",
      },
      {
        type: "text",
        heading: "Sourcing Considerations",
        content:
          "The copra market is seasonal — production peaks between October and February in South India when harvesting is heaviest. Buyers planning large procurement should engage with exporters 6–8 weeks ahead of required shipment dates to secure grades and container availability. Long-term supply agreements provide price stability and priority allocation during peak demand periods.",
      },
    ],
    keyTakeaways: [
      "Copra moisture below 6% is the export standard; 4% or lower preferred by oil mills",
      "Oil content of 65–70% on dry basis is the quality benchmark",
      "Aflatoxin compliance is critical — European buyers require below 4 ppb",
      "Standard packing: 50kg jute bags or 500–1,000kg jumbo PP bags",
      "Peak production October–February; advance procurement planning is advised",
    ],
    relatedSlugs: [
      "fresh-brown-coconut-export-guide",
      "coco-peat-export-guide",
      "complete-coconut-export-guide",
    ],
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOG 4 — Coco Peat Export Guide
  ───────────────────────────────────────────────────────────────── */
  {
    slug: "coco-peat-export-guide",
    title: "Coco Peat Export Guide: Agricultural Uses, Block Types & Packaging",
    category: "Product Guide",
    excerpt:
      "A sourcing reference for agricultural buyers of coco peat — greenhouse applications, block types, EC and pH specifications, and export packaging formats from India.",
    readTime: "7 min read",
    publishDate: "2024-12-15",
    heroImage: "/images/products/coco-peat/hero.jpg",
    heroImageAlt: "Coco peat compressed blocks ready for export — sustainable growing medium",
    ogImage: "/images/products/coco-peat/hero.jpg",
    intro:
      "Coco peat (also known as coir pith) is a natural by-product of coconut fibre processing. It is produced from the fibrous husk of the coconut and has become a globally preferred growing medium for greenhouse horticulture, hydroponics, and soil amendment. India is the world's largest exporter of coco peat, with Tamil Nadu supplying the majority of global demand. This guide covers everything greenhouse operators, horticulture distributors, and agricultural importers need to know.",
    tableOfContents: [
      "What Is Coco Peat",
      "Agricultural & Greenhouse Uses",
      "Block Types & Formats",
      "Technical Specifications",
      "Export Packaging",
      "Sourcing & MOQ",
    ],
    sections: [
      {
        type: "text",
        heading: "What Is Coco Peat",
        content:
          "Coco peat is derived from the fibrous outer husk of the coconut. After extracting the long coir fibres used for rope and matting, the remaining short fibres and spongy pith are compressed and dried to produce coco peat. It is 100% natural, renewable, and biodegradable. Unlike peat moss (which takes thousands of years to form), coco peat is a true by-product — it is produced in direct proportion to coconut processing volumes, making it a genuinely sustainable resource.",
      },
      {
        type: "image",
        image: "/images/products/coco-peat/hero.jpg",
        imageAlt: "Coco peat compressed blocks from India ready for international export",
        heading: "Compressed Coco Peat Blocks",
      },
      {
        type: "text",
        heading: "Agricultural & Greenhouse Uses",
        content:
          "Coco peat's primary commercial application is as a growing medium or growing medium component in greenhouse horticulture. It is used in grow bags for tomatoes, cucumbers, peppers, and strawberries. In hydroponics, washed coco peat with controlled EC levels supports nutrient film technique (NFT) and drip irrigation systems. As a soil amendment, coco peat improves soil structure, aeration, and water retention in outdoor horticulture and landscaping applications.",
      },
      {
        type: "list",
        heading: "Key Application Areas",
        items: [
          "Greenhouse vegetable production: tomatoes, cucumbers, peppers, lettuce",
          "Strawberry and berry cultivation in substrate systems",
          "Hydroponics and NFT growing systems",
          "Nursery seedling propagation and transplant mixes",
          "Soil conditioning and landscape restoration",
          "Professional potting mix blending (with perlite, vermiculite)",
        ],
      },
      {
        type: "callout",
        calloutLabel: "Grower Insight",
        content:
          "Professional greenhouse operators in the Netherlands and Spain typically specify buffered coco peat with EC below 1.0 mS/cm and pH 5.8–6.5. Buffering pre-treats the coco peat with calcium and magnesium to stabilise nutrient availability from day one.",
      },
      {
        type: "text",
        heading: "Block Types & Formats",
        content:
          "Coco peat is exported in compressed block form to minimise shipping volume. The 5kg block (approximately 30×30×12cm when compressed) is the most widely traded format — it expands to 70–80 litres of growing medium when hydrated. The 650g block (10×10×6cm) is popular for retail garden centres and home growers. Loose coco peat in grow bags (10–50L) is available for buyers who require ready-to-use substrate without on-site hydration.",
      },
      {
        type: "text",
        heading: "Technical Specifications",
        content:
          "Professional buyers specify coco peat by EC (electrical conductivity) and pH. Washed grade coco peat has EC below 0.5 mS/cm and pH 5.8–6.8 — suitable for most crops. Buffered grade has EC below 1.0 mS/cm and pH 5.8–6.5, pre-treated with calcium nitrate to prevent calcium and magnesium lock-out. Buyers should always request technical data sheets and batch test certificates confirming EC and pH before shipment.",
      },
      {
        type: "image",
        image: "/images/products/CocoPeat-Visualshowcase-Images/Packaging-image.png",
        imageAlt: "Coco peat packaging and quality inspection for export",
        heading: "Packaging & Quality Inspection",
      },
      {
        type: "text",
        heading: "Export Packaging",
        content:
          "5kg compressed blocks are typically wrapped in polythene film and palletised. Standard pallet configuration: 500 blocks per pallet (2,500kg per pallet). A standard 20-foot FCL holds 10–12 pallets (5,000–6,000kg). Buyers can specify custom block sizes, polythene colour, and private label printing on the polythene wrap. Bulk loose coco peat for industrial soil amendment buyers is available in 1,000kg jumbo bags.",
      },
      {
        type: "text",
        heading: "Sourcing & MOQ",
        content:
          "The minimum order quantity for international export is typically 1 FCL (20-foot container), equivalent to 5,000–6,000kg of compressed blocks. Buyers with smaller requirements can be accommodated through LCL (less-than-container load) consolidation, though FCL pricing is significantly more competitive. Long-term supply agreements with scheduled monthly or quarterly shipments provide the most stable pricing and supply security.",
      },
    ],
    keyTakeaways: [
      "Coco peat is 100% natural, renewable, and a genuine agricultural by-product",
      "The 5kg compressed block expanding to 70–80 litres is the standard export format",
      "Washed grade: EC <0.5 mS/cm; Buffered grade: EC <1.0 mS/cm with Ca/Mg pre-treatment",
      "1 FCL (20-foot) holds 5,000–6,000kg of compressed blocks",
      "Always request batch EC, pH, and moisture test certificates with shipments",
    ],
    relatedSlugs: [
      "fresh-brown-coconut-export-guide",
      "copra-coconut-export-guide",
      "complete-coconut-export-guide",
    ],
  },
