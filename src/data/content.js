// Centralized site content. Edit this file to change copy across the whole site.

export const siteInfo = {
  name: "ROZET",
  tagline: "Engineered for Pure Performance",
  yearsOfSuccess: 25,
  email: "info@rozetpump.com",
  supportEmail: "support@rozetpump.com",
  salesEmail: "sales@rozetpump.com",
  address: "Zona Industriale di Modena, Via Emilia Ovest 1250, 41123 Modena, Italy",
  phone: "",
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    pinterest: "#"
  }
};

// ─── Hero slides on home page ───────────────────────────
export const heroSlides = [
  {
    id: 1,
    image: "/images/rozet-banner.jpg",
    eyebrow: "ROZET PUMP",
    title: "Advanced Industrial Pumping Solutions",
    subtitle: "Trusted by industries worldwide for innovation, reliability, and uncompromising performance.",
    primaryCta: { label: "About ROZET", href: "/about" },
    secondaryCta: { label: "Our Products", href: "#products" }
  },
  {
    id: 2,
    image: "/images/baner-rozet1.jpg",
    eyebrow: "PRECISION ENGINEERED",
    title: "Built to Power Industries Worldwide",
    subtitle: "From fire-fighting systems to deep-well pumps — performance you can rely on, every cycle.",
    primaryCta: { label: "Explore Products", href: "#products" },
    secondaryCta: { label: "Get a Quote", href: "/contact" }
  }
];

// ─── Top-level product categories shown on home grid ─────
export const productCategories = [
  {
    slug: "fire-fighting-systems",
    title: "Fire Fighting Systems",
    image: "/images/fire-1.png",
    href: "/fire-fighting-systems"
  },
  {
    slug: "water-supply-system",
    title: "Water Supply System",
    image: "/images/Water.png",
    href: "/water-supply-system"
  },
  {
    slug: "vertical-multistage-pump",
    title: "Vertical Multistage Pump",
    image: "/images/v33.png",
    href: "/pv-jockey-pump"
  },
  {
    slug: "sewage-pump",
    title: "Sweage Pump",
    image: "/images/swaege.png",
    href: "/sewage-pump"
  },
  {
    slug: "deep-well-pump",
    title: "Deep Well Pump",
    image: "/images/deep-well.png",
    href: "/deep-well-pump"
  },
  {
    slug: "split-case-pump",
    title: "Split Case Pump",
    image: "/images/split-case-pump-1.png",
    href: "/split-case-pump"
  },
  {
    slug: "stainless-case-pump",
    title: "Stainless Case Pump",
    image: "/images/stainless22.png",
    href: "/stainless-case-pump"
  },
  {
    slug: "self-priming-pumps",
    title: "Self - Priming Pump",
    image: "/images/self-2.png",
    href: "/self-priming-pumps"
  }
];

// ─── About page sections ─────────────────────────────────
export const aboutSections = {
  intro: {
    eyebrow: "About Us",
    title: "The Trusted Source for Advanced Pumping Solutions",
    body: "ROZET combines decades of engineering expertise with modern manufacturing standards. Our pumps are built to serve industries and factories across diverse sectors — supporting industrial growth and meeting global production benchmarks."
  },
  pillars: [
    {
      icon: "bi-people-fill",
      title: "Who We Are",
      body: "A specialised manufacturer of industrial pumps with a track record of delivering performance-critical equipment to clients across multiple regions."
    },
    {
      icon: "bi-tools",
      title: "Our Expertise",
      body: "Decades of accumulated know-how in hydraulic engineering, pump design, and quality manufacturing for demanding industrial applications."
    },
    {
      icon: "bi-globe",
      title: "Global Reach",
      body: "Distribution and service networks supporting customers across Europe, the Middle East, and beyond."
    },
    {
      icon: "bi-patch-check-fill",
      title: "Quality You Can Trust",
      body: "Every pump is tested against international standards before it leaves our facility — because uptime matters."
    },
    {
      icon: "bi-stars",
      title: "Innovation & Customer Satisfaction",
      body: "Continuous R&D investment, paired with responsive customer support, keeps our solutions ahead of the curve."
    }
  ]
};

// ─── Generic pump model card data (used on product pages) ─
// Each product page lists 1+ pump models. Each model gets a card with image,
// short description, and a "More Details" PDF link.

export const productPages = {
  "fire-fighting-systems": {
    title: "Fire fighting systems",
    breadcrumb: "Fire fighting systems",
    intro: "Fire fighting systems with Electric, Diesel and Jokey pump.",
    heroImage: "/images/fire.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Specifically designed for fire fighting applications as per NFPA 20 NFPA20 fire fighting system with new EN733 slandered centrifugal pump, both square & round motor available, with protection IP 55 & Class F.\n• Pump case with anti – corrosive coating.\n• Impellers in stainless steel AISI 304, cast iron and brass.\n• Shaft in stainless steel AISI 304 and galvanized iron."
      }
    ],
    models: [
      {
        name: "Control Panel",
        image: "/images/cp.png",
        pdf: "/pdfs/FIRE.pdf"
      },
      {
        name: "PV - Jockey Pump",
        image: "/images/pv.png",
        pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf"
      },
      {
        name: "PVT - Jockey Pump",
        image: "/images/pvt.png",
        pdf: "/pdfs/PVT-1.pdf"
      },
      {
        name: "PSD - Diesel Pump",
        image: "/images/PSD-Diesel-Pump.png",
        pdf: "/pdfs/FIRE.pdf"
      }
    ],
    relatedDownload: { label: "Download Full Brochure (PDF)", pdf: "/pdfs/FIRE.pdf" }
  },

  "two-electric-and-jockey-pump": {
    title: "Two Electric and Jockey Pump",
    breadcrumb: "Fire Fighting Systems › Two Electric & Jockey",
    intro: "Two-electric-pump fire-fighting configuration with a jockey pump for continuous line-pressure maintenance. Used where diesel backup isn't required.",
    heroImage: "/images/fire.png",
    sections: [
      {
        heading: "Configuration Overview",
        body: "Two electric main pumps share duty and provide redundancy. The jockey pump compensates for minor leaks and pressure drops, keeping the system primed and ready."
      }
    ],
    models: [
      {
        name: "2× Electric + Jockey Set",
        image: "/images/fire.png",
        pdf: "/pdfs/2-ELE.pdf"
      }
    ],
    relatedDownload: { label: "Download Datasheet (PDF)", pdf: "/pdfs/2-ELE.pdf" }
  },

  "water-supply-system": {
    title: "Water Supply System",
    breadcrumb: "Products › Water Supply System",
    intro: "Pressurised water-supply pump sets for residential, commercial, and industrial buildings. Constant-pressure operation with smart control.",
    heroImage: "/images/Water.png",
    sections: [
      {
        heading: "Smart Pressurised Supply",
        body: "Variable-speed control and pressure feedback ensure stable water pressure across all outlets, with energy savings compared to traditional fixed-speed systems."
      }
    ],
    models: [
      {
        name: "Water Supply Booster Set",
        image: "/images/Water.png",
        pdf: "/pdfs/WATER.pdf"
      }
    ],
    relatedDownload: { label: "Download Datasheet (PDF)", pdf: "/pdfs/WATER.pdf" }
  },

  "pv-jockey-pump": {
    title: "PV — Vertical Multistage Pump",
    breadcrumb: "Vertical Multistage › PV",
    intro: "PV series vertical multistage pumps — compact footprint, high efficiency, and rugged construction for boosting, water treatment, and general industrial duty.",
    heroImage: "/images/pv.png",
    sections: [
      {
        heading: "PV Series Overview",
        body: "Stacked impeller design delivers high head in a compact vertical body. Stainless-steel hydraulic parts handle clean and lightly aggressive fluids."
      }
    ],
    models: [
      {
        name: "PV Vertical Multistage",
        image: "/images/pv.png",
        pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf"
      }
    ],
    relatedDownload: { label: "Download PV Datasheet (PDF)", pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf" }
  },

  "pvt": {
    title: "PVT — Vertical Multistage Pump",
    breadcrumb: "Vertical Multistage › PVT",
    intro: "PVT series — heavy-duty vertical multistage pumps designed for higher flows and more demanding pressure ranges than the PV line.",
    heroImage: "/images/pvt.png",
    sections: [
      {
        heading: "PVT Series Overview",
        body: "Reinforced hydraulic stages and upgraded shaft sealing make the PVT series the right choice for industrial process water, RO feed, and high-rise pressure boosting."
      }
    ],
    models: [
      {
        name: "PVT Vertical Multistage",
        image: "/images/pvt.png",
        pdf: "/pdfs/ROZET-PVT.pdf"
      }
    ],
    relatedDownload: { label: "Download PVT Datasheet (PDF)", pdf: "/pdfs/ROZET-PVT.pdf" }
  },

  "sewage-pump": {
    title: "Sewage Pump",
    breadcrumb: "Products › Sewage Pump",
    intro: "Submersible and dry-installation sewage pumps for waste-water, drainage, and effluent handling. Multiple impeller geometries to handle solids, fibres, and abrasive media.",
    heroImage: "/images/swaege.png",
    sections: [
      {
        heading: "Range Overview",
        body: "Nine model lines cover everything from light drainage to heavy solids handling. Cast-iron volutes, mechanical seals in oil chambers, and built-in motor protection are standard."
      }
    ],
    models: [
      { name: "HTD", image: "/images/HTD.png", pdf: "/pdfs/HTD-0.pdf" },
      { name: "HUD", image: "/images/HUD.png", pdf: "/pdfs/HUD-1.pdf" },
      { name: "HWD", image: "/images/HWD.png", pdf: "/pdfs/HWD.pdf" },
      { name: "QDP-A-B", image: "/images/QDP-A-B.png", pdf: "/pdfs/QDP-A-B.pdf" },
      { name: "QDP-C", image: "/images/QDP-C.png", pdf: "/pdfs/QDP-C.pdf" },
      { name: "VTX-F", image: "/images/VTX-F.png", pdf: "/pdfs/VTX-F.pdf" },
      { name: "WQ", image: "/images/WQ.png", pdf: "/pdfs/WQ.pdf" },
      { name: "WQDR-B", image: "/images/WQDR-B.png", pdf: "/pdfs/WQDR-B-0.pdf" },
      { name: "WQV", image: "/images/WQV.png", pdf: "/pdfs/WQV.pdf" }
    ]
  },

  "deep-well-pump": {
    title: "Deep Well Pump",
    breadcrumb: "Products › Deep Well Pump",
    intro: "Submersible deep-well pumps for groundwater extraction, irrigation, and municipal water supply from boreholes.",
    heroImage: "/images/deep-well.png",
    sections: [
      {
        heading: "Built for Deep Water",
        body: "Stainless-steel pump end paired with a water-filled submersible motor. Designed for continuous operation at depth with high-efficiency hydraulics."
      }
    ],
    models: [
      { name: "Deep Well Submersible", image: "/images/deep.png", pdf: "/pdfs/DEEP.pdf" }
    ],
    relatedDownload: { label: "Download Deep Well Datasheet (PDF)", pdf: "/pdfs/DEEP.pdf" }
  },

  "split-case-pump": {
    title: "Split Case Pump",
    breadcrumb: "Products › Split Case Pump",
    intro: "Horizontal split-case pumps — available with electric or diesel drive — for high-flow water transfer, fire-fighting main duty, and HVAC chilled-water systems.",
    heroImage: "/images/split-case-pump-1.png",
    sections: [
      {
        heading: "Why Split Case?",
        body: "The horizontally-split casing allows full hydraulic inspection without disconnecting suction or discharge piping. Double-suction impeller balances axial loads for long bearing life."
      }
    ],
    models: [
      {
        name: "Split Case with Electric Engine",
        image: "/images/Split-case-pump-with-Electric-Engine.png",
        pdf: "/pdfs/SPLIT.pdf"
      },
      {
        name: "Split Case with Diesel Engine",
        image: "/images/Split-case-pump-with-Diesel-Engine.png",
        pdf: "/pdfs/SPLIT.pdf"
      }
    ],
    relatedDownload: { label: "Download Split Case Datasheet (PDF)", pdf: "/pdfs/SPLIT.pdf" }
  },

  "stainless-case-pump": {
    title: "Stainless Case Pump",
    breadcrumb: "Products › Stainless Case Pump",
    intro: "Stainless-steel monobloc centrifugal pumps for clean water, food-grade duty, and lightly corrosive fluids.",
    heroImage: "/images/stanl.png",
    sections: [
      {
        heading: "Hygienic & Corrosion-Resistant",
        body: "Full stainless-steel wetted parts make these pumps suitable for applications where hygiene and corrosion resistance are non-negotiable."
      }
    ],
    models: [
      {
        name: "PZ Monobloc Stainless",
        image: "/images/stanl.png",
        pdf: "/pdfs/PZ-_D9_85_D9_88_D9_86_D9_88-_D8_A8_D9_84_D9_88_D9_83-_D8_A7_D8_B3_D8_AA_D8_A7_D9_86_D9_84_D8_B3.pdf"
      }
    ],
    relatedDownload: { label: "Download Stainless Datasheet (PDF)", pdf: "/pdfs/PZ-_D9_85_D9_88_D9_86_D9_88-_D8_A8_D9_84_D9_88_D9_83-_D8_A7_D8_B3_D8_AA_D8_A7_D9_86_D9_84_D8_B3.pdf" }
  },

  "self-priming-pumps": {
    title: "Self Priming Pumps",
    breadcrumb: "Products › Self Priming Pumps",
    intro: "Self-priming centrifugal pumps that re-prime automatically after the first fill — ideal for above-grade installations and applications with intermittent suction.",
    heroImage: "/images/self-3.png",
    sections: [
      {
        heading: "JET Series",
        body: "Compact self-priming JET pumps suit domestic boosting, garden irrigation, and small water-transfer duties. Quick re-prime, quiet operation, and low maintenance."
      }
    ],
    models: [
      { name: "JET Self-Priming", image: "/images/self-3.png", pdf: "/pdfs/JET.pdf" }
    ],
    relatedDownload: { label: "Download JET Datasheet (PDF)", pdf: "/pdfs/JET.pdf" }
  }
};

// ─── Downloads page — full PDF library ───────────────────
export const downloads = [
  // Fire-fighting capacity sheets
  { title: "ROZET 1500 GPM @ 10 BAR", pdf: "/pdfs/ROZET-1500-GPM-10-BAR.pdf", category: "Fire Fighting" },
  { title: "ROZET 1500 GPM @ 9 BAR",  pdf: "/pdfs/ROZET-1500-GPM-9-BAR.pdf",  category: "Fire Fighting" },
  { title: "ROZET 1000 GPM @ 8 BAR",  pdf: "/pdfs/ROZET-1000-GPM-8-BAR.pdf",  category: "Fire Fighting" },
  { title: "ROZET 750 GPM @ 9 BAR",   pdf: "/pdfs/ROZET-750-GPM-9-BAR.pdf",   category: "Fire Fighting" },
  { title: "ROZET 750 GPM @ 8 BAR",   pdf: "/pdfs/ROZET-750-GPM-8-BAR.pdf",   category: "Fire Fighting" },
  { title: "ROZET 500 GPM @ 10 BAR",  pdf: "/pdfs/ROZET-500-GPM-10-BAR.pdf",  category: "Fire Fighting" },
  { title: "ROZET 500 GPM @ 8 BAR",   pdf: "/pdfs/ROZET-500-GPM-8-BAR.pdf",   category: "Fire Fighting" },
  { title: "ROZET 250 GPM @ 8 BAR",   pdf: "/pdfs/ROZET-250-GPM-8-BAR.pdf",   category: "Fire Fighting" },
  { title: "Fire Fighting — Full System", pdf: "/pdfs/FIRE.pdf",              category: "Fire Fighting" },
  { title: "2× Electric + Jockey",    pdf: "/pdfs/2-ELE.pdf",                 category: "Fire Fighting" },

  // Vertical multistage
  { title: "PV — Vertical Multistage",  pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf", category: "Vertical Multistage" },
  { title: "ROZET PVT",                 pdf: "/pdfs/ROZET-PVT.pdf",            category: "Vertical Multistage" },

  // Sewage
  { title: "HTD — Sewage Pump",   pdf: "/pdfs/HTD-0.pdf",  category: "Sewage" },
  { title: "HUD — Sewage Pump",   pdf: "/pdfs/HUD-1.pdf",  category: "Sewage" },
  { title: "HWD — Sewage Pump",   pdf: "/pdfs/HWD.pdf",    category: "Sewage" },
  { title: "QDP-A-B — Sewage Pump", pdf: "/pdfs/QDP-A-B.pdf", category: "Sewage" },
  { title: "QDP-C — Sewage Pump", pdf: "/pdfs/QDP-C.pdf",  category: "Sewage" },
  { title: "VTX-F — Sewage Pump", pdf: "/pdfs/VTX-F.pdf",  category: "Sewage" },
  { title: "WQ — Sewage Pump",    pdf: "/pdfs/WQ.pdf",     category: "Sewage" },
  { title: "WQDR-B — Sewage Pump", pdf: "/pdfs/WQDR-B-0.pdf", category: "Sewage" },
  { title: "WQV — Sewage Pump",   pdf: "/pdfs/WQV.pdf",    category: "Sewage" },

  // Other categories
  { title: "Water Supply System", pdf: "/pdfs/WATER.pdf",  category: "Water Supply" },
  { title: "Deep Well Pump",      pdf: "/pdfs/DEEP.pdf",   category: "Deep Well" },
  { title: "Split Case Pump",     pdf: "/pdfs/SPLIT.pdf",  category: "Split Case" },
  { title: "Stainless Standard",  pdf: "/pdfs/PZ-_D9_85_D9_88_D9_86_D9_88-_D8_A8_D9_84_D9_88_D9_83-_D8_A7_D8_B3_D8_AA_D8_A7_D9_86_D9_84_D8_B3.pdf", category: "Stainless" },
  { title: "JET — Self Priming",  pdf: "/pdfs/JET.pdf",    category: "Self Priming" }
];

// ─── Navigation menu structure ───────────────────────────
export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Our Products",
    href: "#",
    children: [
      {
        label: "Fire fighting systems",
        children: [
          { label: "Full set", href: "/fire-fighting-systems" },
          { label: "Two Electric and Jockey pump", href: "/two-electric-and-jockey-pump" }
        ]
      },
      { label: "Water Supply System", href: "/water-supply-system" },
      {
        label: "Vertical Multistage Pump",
        children: [
          { label: "PV", href: "/pv-jockey-pump" },
          { label: "PVT", href: "/pvt" }
        ]
      },
      { label: "Sewage Pump", href: "/sewage-pump" },
      { label: "Deep well Pump", href: "/deep-well-pump" },
      { label: "Split Case Pump", href: "/split-case-pump" },
      { label: "Stainless Case Pump", href: "/stainless-case-pump" },
      { label: "Self Priming Pumps", href: "/self-priming-pumps" }
    ]
  },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact Us", href: "/contact" }
];
