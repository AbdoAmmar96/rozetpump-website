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
      body: "At ROZET Pump, we combine advanced engineering, cutting-edge technology, and superior materials to manufacture high-performance industrial pumps.\n\nOur mission is simple — to provide our customers with reliable, efficient, and long-lasting pumping solutions backed by exceptional service."
    },
    {
      icon: "bi-tools",
      title: "Our Expertise",
      body: "As a leading manufacturer of horizontal and vertical pumps, ROZET Pump serves a wide range of industries — from commercial buildings and municipal facilities to industrial warehouses, manufacturing plants, and the power & energy sector.\n\nWe design, prototype, manufacture, and support every project with precision, ensuring a smooth process from start to finish."
    },
    {
      icon: "bi-globe",
      title: "Global Reach",
      body: "With a strong international presence, our products are trusted in more than 90 countries worldwide, including South Africa, Egypt, the Middle East, Southeast Asia, and South America.\n\nThis global footprint reflects our commitment to consistent quality and reliability across every market we serve."
    },
    {
      icon: "bi-patch-check-fill",
      title: "Quality You Can Trust",
      body: "Our state-of-the-art production facilities and rigorous quality control at every stage of manufacturing ensure the highest standards of performance and durability.\n\nEach ROZET Pump is built to meet international specifications and tested to deliver outstanding efficiency and reliability."
    },
    {
      icon: "bi-stars",
      title: "Innovation & Customer Satisfaction",
      body: "We continuously invest in research and development to stay at the forefront of fluid engineering technologies.\n\nAt the same time, we value our customers' feedback to ensure that every pump supplied operates at its peak performance and meets real-world needs.\n\nOur ultimate goal is to deliver superior service, advanced technology, and total customer satisfaction — the core values that define ROZET Pump."
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
    heroImage: "/images/fire.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Specifically designed for fire fighting applications as per NFPA 20 NFPA20 fire fighting system with new EN733 slandered centrifugal pump, both square & round motor available, with protection IP 55 & Class F.\n• Pump case with anti – corrosive coating.\n• Impellers in stainless steel AISI 304, cast iron and brass.\n• Shaft in stainless steel AISI 304 and galvanized iron."
      }
    ],
    models: [
      {
        name: "Control Panel",
        image: "/images/cp.jpg",
        href: "/fire-fighting-systems/control-panel",
        pdf: "/pdfs/FIRE.pdf"
      },
      {
        name: "PV - Jockey Pump",
        image: "/images/pv.jpg",
        href: "/pv-jockey-pump",
        pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf"
      },
      {
        name: "PVT - Jockey Pump",
        image: "/images/pvt.jpg",
        href: "/pvt",
        pdf: "/pdfs/PVT-1.pdf"
      },
      {
        name: "PSD - Diesel Pump",
        image: "/images/PSD-Diesel-Pump.jpg",
        href: "/fire-fighting-systems/psd-diesel-pump",
        pdf: "/pdfs/ROZET-PD.pdf"
      },
      {
        name: "PSM - Electric Pump",
        image: "/images/PSM-Electric-Pump.jpg",
        href: "/fire-fighting-systems/psm-electric-pump",
        pdf: "/pdfs/ROZET-PSM.pdf"
      },
      {
        name: "PST - MonoBlock",
        image: "/images/monoblock.jpg",
        href: "/fire-fighting-systems/pst-monoblock",
        pdf: "/pdfs/ROZET-PST.pdf"
      }
    ],
    relatedDownload: { label: "Download Full Brochure (PDF)", pdf: "/pdfs/FIRE.pdf" }
  },

  "fire-fighting-systems/control-panel": {
    title: "Control Panel",
    breadcrumb: "Fire Fighting Systems › Control Panel",
    intro: "Pump Control Panel",
    heroImage: "/images/cp.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• High Quality Control Panel content of A high-quality control panel that contains all the components necessary & suitable for complete control and protection for pumps of all different capacities and power range.\n• It can be manufactured according to the customer's needs."
      }
    ]
  },

  "fire-fighting-systems/psm-electric-pump": {
    title: "PSM - Electric Pump",
    breadcrumb: "PSM - Electric Pump",
    intro: "Electric Driven End Suction Bare Shaft Fire Pump Manufacturer — PSM Series",
    heroImage: "/images/PSM-Electric-Pump.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• New generation of centrifugal fire pump coupled with electric motor.\n• High efficient electric motor. Both square motor & round motor available, with protection IP55 class F.\n• Cast Iron Pump PS case with anti-corrosive coating, flow range up to 5500 GPM. Impeller in stainless steel AISI 304 or cast iron & brass.\n• Shaft in stainless steel AISI 304 or galvanized iron. Galvanized counter flange with bolts, nuts and gaskets.\n• Quality NSK bearing, wear resistance mechanical seal."
      },
      {
        heading: "APPLICATIONS",
        body: "• Centrifugal pumps are recommended for use in firefighting sets, water supply, cleaning sets, pressure boosting, irrigation, industrial applications, water circulation in acclimatization sets and agricultural application.\n• Suitable for all clean water and liquids that are not chemically aggressive towards the materials from which the pump is made."
      },
      {
        heading: "USING LIMITS",
        body: "• Liquid temperature between -10℃ and +120℃\n• Ambient temperature up to +50℃\n• Max. Working pressure 16 bar\n• With Flow range 1268 m³/hr."
      },
      {
        heading: "High Efficiency 3 Phase Ac Electric Motor (YE3 50HZ)",
        body: "• Reliable used for firefighting system etc. Design according to IEC60034 standard.\n• TOTAL ENCLOSED FAN COOLING TYPE motor.\n• Common installation has 4 styles: B3, B5, B35, V14.\n• Continuous duty S1.\n• Ambient temperature up to +50℃.\n• Cooling type: IC41."
      }
    ],
    models: [
      {
        name: "PSM - Electric Pump",
        image: "/images/PSM-Electric-Pump.jpg",
        pdf: "/pdfs/ROZET-PSM.pdf"
      },
      {
        name: "Electric Motor",
        image: "/images/Electric-Motor.jpg",
        pdf: "/pdfs/MOTOR.pdf"
      },
      {
        name: "PS ( Fire Fighting )",
        image: "/images/PS-Fire-Fighting-.jpg",
        pdf: "/pdfs/rozet-PS.pdf"
      }
    ]
  },

  "fire-fighting-systems/pst-monoblock": {
    title: "PST - MonoBlock",
    breadcrumb: "PST - MonoBlock",
    intro: "Standard Monoblock Electric Fire Pump — PST Series",
    heroImage: "/images/monoblock.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Standard Firefighting centrifugal pump.\n• With high efficient motor, with protection IP55 class F.\n• Pump case with anti-corrosive coating.\n• Impeller in stainless steel AISI 304, cast iron or brass.\n• Shaft in stainless steel AISI 304 or galvanized iron.\n• Galvanized counter flange with bolts, nuts and gaskets.\n• Quality NSK bearing, wear resistance mechanical seal."
      },
      {
        heading: "APPLICATIONS",
        body: "• Suitable for use with clean water and liquids that are not chemically aggressive towards the materials from which the pump is made.\n• The centrifugal pumps are recommended for use in water supply, cleaning sets, pressure boosting, firefighting sets, irrigation, industrial applications, water circulation in climatisation sets, agricultural."
      },
      {
        heading: "USING LIMITS",
        body: "• Liquid temperature between -10℃ and +120℃\n• Ambient temperature up to +50℃\n• Max. working pressure 16 bar"
      }
    ],
    relatedDownload: { label: "Download Pdf", pdf: "/pdfs/ROZET-PST.pdf" }
  },

  "fire-fighting-systems/psd-diesel-pump": {
    title: "PSD - Diesel Pump",
    breadcrumb: "PSD - Diesel Pump",
    intro: "Diesel Engine Driven End Suction Bare Shaft Fire Pump Manufacturer — PSD Series ( PS + PD )",
    heroImage: "/images/PSD-Diesel-Pump.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• New generation of centrifugal fire pump coupled with diesel engine.\n• More Environmentally Friendly with Emission Standard, Low Fuel, Consumption, Strong Power, Easy to Assemble.\n• Cast Iron Pump PS case with anti-corrosive coating, flow range up to 5500 GPM. Impeller in stainless steel AISI 304 or cast iron & brass.\n• Shaft in stainless steel AISI 304 or galvanized iron. Galvanized counter flange with bolts, nuts and gaskets.\n• Quality NSK bearing, wear resistance mechanical seal."
      },
      {
        heading: "APPLICATIONS",
        body: "• Centrifugal pumps are recommended for use in firefighting sets, water supply, cleaning sets, pressure boosting, irrigation, industrial applications, water circulation in acclimatization sets and agricultural application.\n• Suitable for all clean water and liquids that are not chemically aggressive towards the materials from which the pump is made."
      },
      {
        heading: "USING LIMITS",
        body: "• Liquid temperature between -10℃ and +120℃\n• Ambient temperature up to +50℃\n• Max. Working pressure 16 bar\n• With Flow range 1268 m³/hr."
      }
    ],
    models: [
      {
        name: "PD Diesel Engine",
        image: "/images/PD-Diesel-Engine.jpg",
        pdf: "/pdfs/ROZET-PD.pdf"
      },
      {
        name: "PS ( Fire Fighting )",
        image: "/images/PS-Fire-Fighting-.jpg",
        pdf: "/pdfs/rozet-PS.pdf"
      }
    ]
  },

  "two-electric-and-jockey-pump": {
    title: "Two Electric and Jockey Pump",
    breadcrumb: "Fire Fighting Systems › Two Electric & Jockey",
    intro: "NFPA20 fire fighting system with two standard centrifugal pumps and a jockey pump — used where diesel backup isn't required.",
    heroImage: "/images/fire.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• NFPA20 fire fighting system with two standard centrifugal pumps and a jockey pump.\n• Both square and round motor available, with IP55 protection and Class F insulation.\n• Pump cases with anti-corrosive coating.\n• Impellers in stainless steel AISI 304, cast iron, or brass.\n• Shafts in stainless steel AISI 304 or galvanized iron."
      }
    ],
    models: [
      {
        name: "Control Panel",
        image: "/images/cp.jpg",
        href: "/fire-fighting-systems/control-panel",
        pdf: "/pdfs/FIRE.pdf"
      },
      {
        name: "PV - Jockey Pump",
        image: "/images/pv.jpg",
        href: "/pv-jockey-pump",
        pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf"
      },
      {
        name: "PVT - Jockey Pump",
        image: "/images/pvt.jpg",
        href: "/pvt",
        pdf: "/pdfs/PVT-1.pdf"
      },
      {
        name: "PST - MonoBlock",
        image: "/images/monoblock.jpg",
        href: "/fire-fighting-systems/pst-monoblock",
        pdf: "/pdfs/ROZET-PST.pdf"
      }
    ],
    relatedDownload: { label: "Download Datasheet (PDF)", pdf: "/pdfs/2-ELE.pdf" }
  },

  "water-supply-system": {
    title: "Water Supply System",
    breadcrumb: "Water Supply System",
    intro: "Water Supply System for Hotel and High Building",
    heroImage: "/images/water123.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Water supply system consists of vertical stainless steel multistage pumps, pressure tanks, stabilizers, pipes, and valves.\n• The number of pumps can be customized according to customer needs.\n• The system is widely used in high and high pressure water supply, fire water supply, domestic water supply, municipal water supply, urban environmental protection and so on."
      },
      {
        heading: "APPLICATIONS",
        body: "• Water supply system can be used to transport a variety of media, from tap water to industrial liquids at different temperatures with different flow rates and pressures.\n• Vertical stainless steel multistage pumps CDL type is suitable for conveying non-corrosive liquid & CDLF type is suitable for weakly corrosive liquid.\n• Water supply: filtration and delivery of water works, pressurization of main pipes, pressurization of high-rise buildings.\n• Industrial pressurization: process water system, cleaning system, high pressure flushing system, fire protection system.\n• Industrial liquid conveying: cooling and air conditioning system, boiler water supply and condensation system, and machinery related uses, acids and bases.\n• Water treatment: ultrafiltration system, reverse osmosis system, distillation system, and separator.\n• The swimming pool. Irrigation, farm irrigation, sprinkling irrigation, drip irrigation."
      }
    ],
    afterModelsSections: [
      {
        heading: "CDL & CDLF series vertical stainless steel multistage jockey pump",
        body: "FEATURES AND USING LIMITS\n\n• Max Flow rate: 90 m³/h\n• Max. Working pressure: 247 m\n• Power Range: 0.37 KW – 110 KW (0.5 HP – 150 HP)\n• Shaft: Stainless Steel\n• Impeller: Stainless Steel"
      }
    ],
    secondaryImage: "/images/vertical-2.jpg",
    relatedDownload: { label: "Download Pdf", pdf: "/pdfs/WATER.pdf" }
  },

  "pv-jockey-pump": {
    title: "PV - Jockey Pump",
    breadcrumb: "PV - Jockey Pump",
    intro: "Vertical Multistage Jockey Pump Fire Jockey Pump [PV 50Hz]",
    heroImage: "/images/pv.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• New vertical multistage centrifugal pump\n• Both square motor & round motor available\n• With high efficient motor, with protection IP55 class F\n• Pump case with anti-corrosive coating\n• Impeller in techno-polymer or stainless steel\n• Shaft in stainless steel AISI 304 or galvanized iron\n• Suction and discharge port in cast iron G20 thread\n• Quality NSK bearing, wear resistance mechanical seal"
      },
      {
        heading: "APPLICATIONS",
        body: "• Suitable for use with clean water and liquids that are not chemically aggressive towards the materials from which the pump is made."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature between -10℃ and +120℃\nAmbient temperature up to +50℃\nMax. Working pressure 25 bar Continuous service S1"
      }
    ],
    relatedDownload: { label: "Download PV Datasheet (PDF)", pdf: "/pdfs/PV-_D8_B1_D8_A7_D8_B3_D9_8A_D8_A9.pdf" }
  },

  "pvt": {
    title: "PVT - Jockey Pump",
    breadcrumb: "PVT - Jockey Pump",
    intro: "Vertical Multistage Jockey Pump Fire Jockey Pump [PV 50Hz]",
    heroImage: "/images/pvt.jpg",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• New vertical multistage centrifugal pump\n• Both square motor & round motor available\n• With high efficient motor, with protection IP55 class F\n• Pump case with anti-corrosive coating\n• Impeller in techno-polymer or stainless steel\n• Shaft in stainless steel AISI 304 or galvanized iron\n• Suction and discharge port in cast iron G20 thread\n• Quality NSK bearing, wear resistance mechanical seal"
      },
      {
        heading: "APPLICATIONS",
        body: "• Suitable for use with clean water and liquids that are not chemically aggressive towards the materials from which the pump is made."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature between -10℃ and +120℃\nAmbient temperature up to +50℃\nMax. Working pressure 25 bar Continuous service S1"
      }
    ],
    relatedDownload: { label: "Download PVT Datasheet (PDF)", pdf: "/pdfs/ROZET-PVT.pdf" }
  },

  "sewage-pump": {
    title: "Sewage Pump",
    breadcrumb: "Products › Sewage Pump",
    models: [
      { name: "HTD", image: "/images/HTD.png", href: "/sewage-pump/htd", pdf: "/pdfs/HTD-0.pdf" },
      { name: "HUD", image: "/images/HUD.png", href: "/sewage-pump/hud", pdf: "/pdfs/HUD-1.pdf" },
      { name: "HWD", image: "/images/HWD.png", href: "/sewage-pump/hwd", pdf: "/pdfs/HWD.pdf" },
      { name: "QDP-A-B", image: "/images/QDP-A-B.png", href: "/sewage-pump/qdp-a-b", pdf: "/pdfs/QDP-A-B.pdf" },
      { name: "QDP-C", image: "/images/QDP-C.png", href: "/sewage-pump/qdp-c", pdf: "/pdfs/QDP-C.pdf" },
      { name: "VTX-F", image: "/images/VTX-F.png", href: "/sewage-pump/vtx-f", pdf: "/pdfs/VTX-F.pdf" },
      { name: "WQ", image: "/images/WQ.png", href: "/sewage-pump/wq", pdf: "/pdfs/WQ.pdf" },
      { name: "WQDR-B", image: "/images/WQDR-B.png", href: "/sewage-pump/wqdr-b", pdf: "/pdfs/WQDR-B-0.pdf" },
      { name: "WQV", image: "/images/WQV.png", href: "/sewage-pump/wqv", pdf: "/pdfs/WQV.pdf" }
    ]
  },

  "sewage-pump/htd": {
    title: "HTD — Sewage Pump",
    breadcrumb: "Sewage Pump › HTD",
    intro: "HTD series submersible sewage pump — heavy-duty model designed for waste-water and drainage with high solids content.",
    heroImage: "/images/HTD.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible single-channel impeller for handling sewage with solids and fibres.\n• Cast-iron volute and impeller with anti-corrosive coating.\n• Mechanical seal in oil chamber with built-in thermal motor protection.\n• Stainless steel AISI 304 shaft with sealed bearings.\n• IP68 protection class — fully submersible operation."
      },
      {
        heading: "APPLICATIONS",
        body: "• Domestic and municipal waste-water drainage.\n• Sewage stations and lift pits.\n• Effluent transfer in industrial sites."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 5 m\nMax. solid passage suitable for fibrous waste-water."
      }
    ],
    relatedDownload: { label: "Download HTD Datasheet (PDF)", pdf: "/pdfs/HTD-0.pdf" }
  },

  "sewage-pump/hud": {
    title: "HUD — Sewage Pump",
    breadcrumb: "Sewage Pump › HUD",
    intro: "HUD series submersible sewage pump — versatile model for general drainage and waste-water transfer with moderate solid content.",
    heroImage: "/images/HUD.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible centrifugal pump with vortex or single-channel impeller.\n• Cast-iron pump body and impeller for long service life.\n• Double mechanical seal with oil-bath chamber.\n• Built-in motor thermal protection (single-phase models).\n• IP68 motor enclosure with insulation Class F."
      },
      {
        heading: "APPLICATIONS",
        body: "• Building drainage and basement dewatering.\n• Light industrial waste-water handling.\n• Sewage transfer in residential complexes."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 5 m\nDensity ≤ 1.1 kg/dm³"
      }
    ],
    relatedDownload: { label: "Download HUD Datasheet (PDF)", pdf: "/pdfs/HUD-1.pdf" }
  },

  "sewage-pump/hwd": {
    title: "HWD — Sewage Pump",
    breadcrumb: "Sewage Pump › HWD",
    intro: "HWD series submersible sewage pump — heavy-duty design for industrial waste and abrasive media handling.",
    heroImage: "/images/HWD.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible pump with reinforced cast-iron casing for abrasive duty.\n• Open or semi-open impeller for solids passage.\n• Tandem mechanical seal in oil chamber.\n• Stainless steel AISI 304 shaft and fasteners.\n• Heavy-duty bearings rated for continuous operation."
      },
      {
        heading: "APPLICATIONS",
        body: "• Industrial waste-water with abrasive particles.\n• Construction site dewatering.\n• Drainage of contaminated water."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 8 m\nMax. solid passage: depending on impeller type."
      }
    ],
    relatedDownload: { label: "Download HWD Datasheet (PDF)", pdf: "/pdfs/HWD.pdf" }
  },

  "sewage-pump/qdp-a-b": {
    title: "QDP-A-B — Sewage Pump",
    breadcrumb: "Sewage Pump › QDP-A-B",
    intro: "QDP-A-B series submersible drainage pump — compact and reliable for clean and lightly contaminated water.",
    heroImage: "/images/QDP-A-B.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Compact submersible drainage pump in plastic or stainless steel housing.\n• Centrifugal impeller for clean to lightly dirty water.\n• Built-in float switch (automatic on/off based on water level).\n• Single-phase motor with thermal protector.\n• Quick-connect hose adaptor."
      },
      {
        heading: "APPLICATIONS",
        body: "• Domestic basement and garage dewatering.\n• Garden pond drainage.\n• Pool emptying and rainwater removal."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +35℃\nMax. submersion depth: 5 m\nMax. particle size: 5 mm"
      }
    ],
    relatedDownload: { label: "Download QDP-A-B Datasheet (PDF)", pdf: "/pdfs/QDP-A-B.pdf" }
  },

  "sewage-pump/qdp-c": {
    title: "QDP-C — Sewage Pump",
    breadcrumb: "Sewage Pump › QDP-C",
    intro: "QDP-C series submersible drainage pump — upgraded model with higher head for residential and light commercial use.",
    heroImage: "/images/QDP-C.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible centrifugal pump with closed impeller.\n• Stainless steel housing and shaft for corrosion resistance.\n• Mechanical seal with oil chamber.\n• Built-in motor protection.\n• Float switch for automatic operation."
      },
      {
        heading: "APPLICATIONS",
        body: "• Domestic clean-water transfer.\n• Garden irrigation.\n• Tank-to-tank water movement."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +35℃\nMax. submersion depth: 5 m\nClean to lightly dirty water only."
      }
    ],
    relatedDownload: { label: "Download QDP-C Datasheet (PDF)", pdf: "/pdfs/QDP-C.pdf" }
  },

  "sewage-pump/vtx-f": {
    title: "VTX-F — Sewage Pump",
    breadcrumb: "Sewage Pump › VTX-F",
    intro: "VTX-F series submersible vortex sewage pump — non-clog impeller geometry for solids-laden waste-water.",
    heroImage: "/images/VTX-F.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible pump with free-flow vortex impeller — handles fibrous solids without clogging.\n• Cast-iron volute with anti-abrasive coating.\n• Tandem mechanical seal in oil bath.\n• Three-phase motor with IP68 protection.\n• Stainless steel AISI 304 shaft."
      },
      {
        heading: "APPLICATIONS",
        body: "• Sewage with long fibres or stringy material.\n• Municipal waste-water lifting stations.\n• Industrial effluent with suspended solids."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 10 m\nMax. solid passage: large free passage suitable for fibres."
      }
    ],
    relatedDownload: { label: "Download VTX-F Datasheet (PDF)", pdf: "/pdfs/VTX-F.pdf" }
  },

  "sewage-pump/wq": {
    title: "WQ — Sewage Pump",
    breadcrumb: "Sewage Pump › WQ",
    intro: "WQ series submersible sewage pump — general-purpose model for industrial and municipal waste-water transfer.",
    heroImage: "/images/WQ.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible non-clog sewage pump with single or double-channel impeller.\n• Cast-iron pump body and impeller; stainless steel options available.\n• Tandem mechanical seal with oil chamber and built-in moisture sensor.\n• Three-phase motor with IP68 protection and Class F insulation.\n• Auto-coupling system option for fixed installation."
      },
      {
        heading: "APPLICATIONS",
        body: "• Municipal sewage lifting stations.\n• Industrial waste-water with solids.\n• Building drainage and effluent handling."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 10 m\nMax. solid passage: depending on model."
      }
    ],
    relatedDownload: { label: "Download WQ Datasheet (PDF)", pdf: "/pdfs/WQ.pdf" }
  },

  "sewage-pump/wqdr-b": {
    title: "WQDR-B — Sewage Pump",
    breadcrumb: "Sewage Pump › WQDR-B",
    intro: "WQDR-B series submersible sewage pump — equipped with cutter mechanism for handling solids-rich waste-water.",
    heroImage: "/images/WQDR-B.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible sewage pump with cutting/grinding mechanism — cuts solids before passage through impeller.\n• Cast-iron impeller with hardened cutter blades.\n• Tandem mechanical seal in oil chamber.\n• IP68 motor with thermal and moisture sensors.\n• Suitable for force-main applications."
      },
      {
        heading: "APPLICATIONS",
        body: "• Sewage with stringy or solid waste that would clog standard pumps.\n• Septic tank and pressure-sewer systems.\n• Light industrial sewage with packaging or fibrous waste."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 10 m\nCuts soft solids and fibres."
      }
    ],
    relatedDownload: { label: "Download WQDR-B Datasheet (PDF)", pdf: "/pdfs/WQDR-B-0.pdf" }
  },

  "sewage-pump/wqv": {
    title: "WQV — Sewage Pump",
    breadcrumb: "Sewage Pump › WQV",
    intro: "WQV series submersible sewage pump — vortex impeller variant of the WQ line for solids-passage applications.",
    heroImage: "/images/WQV.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible sewage pump with vortex (recessed) impeller.\n• Cast-iron volute with extra-large free passage.\n• Tandem mechanical seal in oil chamber.\n• Three-phase motor with IP68 protection.\n• Optional auto-coupling and float switch."
      },
      {
        heading: "APPLICATIONS",
        body: "• Sewage and waste-water containing solids and fibres.\n• Industrial effluent handling.\n• Municipal sewage transfer with potential debris."
      },
      {
        heading: "USING LIMITS",
        body: "Liquid temperature up to +40℃\nMax. submersion depth: 10 m\nLarge free passage for fibrous solids."
      }
    ],
    relatedDownload: { label: "Download WQV Datasheet (PDF)", pdf: "/pdfs/WQV.pdf" }
  },

  "deep-well-pump": {
    title: "Deep Well Pump",
    breadcrumb: "Products › Deep Well Pump",
    intro: "Submersible water pumps are one of the most efficient ways to move fluids — used for irrigation systems and sewage movement from buildings and wells.",
    heroImage: "/images/deep-well.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Submersible deep-well pump for groundwater extraction, irrigation, and municipal water supply from boreholes.\n• Stainless-steel pump end paired with a water-filled submersible motor.\n• Designed for continuous operation at depth with high-efficiency hydraulics.\n• Specialized maintenance ensures long service life — choose the right submersible type for your specific operational need."
      }
    ],
    relatedDownload: { label: "Download Deep Well Datasheet (PDF)", pdf: "/pdfs/DEEP.pdf" }
  },

  "split-case-pump": {
    title: "Split Case Pump",
    breadcrumb: "Split Case Pump",
    intro: "Double Suction Horizontal Split Case Single Stage Pump — PSC Series",
    heroImage: "/images/split-case-pump-1.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "• Horizontal, single-stage, double volute, axially split case centrifugal firefighting pump, which is dedicated to large capacities, highest efficiencies and reliability.\n• Symmetry ensures minimal shaft deviation hence best stability at high torques and speeds.\n• Internal inspection and maintenance are facilitated by the pump bearings and mechanical seals can be serviced without disturbing the piping connections or electrical motor connections. Its base plates are fabricated steel with a drip pan.\n• Maintenance is facilitated by the 2 shell casings, without the need to disassemble the motor and coupling. The casing can be split vertically or horizontally, relative to the impeller, giving you either a vertical split case or a horizontal split case pump. Some manufacturers also offer custom configurations to optimize the pump for specific applications. Suction and discharge flanges are on a common centerline for easy installation. Impellers are dynamically balanced to reduce vibration and potential wear.\n• Axially split volute pump casing design.\n• Pump case with anti-corrosive coating HT250.\n• Double-entry radial impeller in AISI 304 or HT250.\n• Shaft protecting sleeves in the seal area.\n• Mechanical seal and gland packing are both available.\n• Grease-packed rolling element bearings sealed for life."
      },
      {
        heading: "APPLICATIONS",
        body: "• Suitable for use with clean water and liquids that are not chemically aggressive towards the materials from which the pump is made.\n• The centrifugal pumps are recommended for use in water supply, cleaning sets, pressure boosting, firefighting sets, irrigation, industrial applications, water circulation in acclimatization sets, agricultural."
      },
      {
        heading: "FEATURES AND USING LIMITS",
        body: "– Liquid temperature between -10℃ and +120℃\n– Ambient temperature up to +50℃\n– Max. working pressure 25 bar\n– Power Range 1.8 – 1780 Kw\n– Flow Capacity Range 0 – 4500 m³/h\n– DN Range of Suction Pipe 125 – 700 mm (5\" – 28\")\n– DN Range of Discharging Pipe 80 – 600 mm (3\" – 24\")"
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
    breadcrumb: "Stainless Case Pump",
    intro: "Stainless steel standard pump",
    heroImage: "/images/stanl.png",
    sections: [
      {
        heading: "DESCRIPTION",
        body: "• Stainless steel 304 standard pump design\n• All wetted parts are in stainless steel 304\n• Both square motor & round motor available\n• Stainless steel AISI 316 material as request\n• Back pull-out design without removing the pipes\n• Quality NSK bearing, wear resistance mechanical seal\n• Available to delivery some impure liquid"
      },
      {
        heading: "APPLICATIONS",
        body: "Transport does not contain solid particles, suitable for pressurized transport of corrosive media, and places requiring clean water quality."
      },
      {
        heading: "USING LIMITS",
        body: "• Liquid temperature between -10°C and +120°C\n• Ambient temperature between 0°C and +50°C\n• Max. working pressure 16 bar / Continuous S1"
      }
    ],
    relatedDownload: { label: "Download Stainless Datasheet (PDF)", pdf: "/pdfs/PZ-_D9_85_D9_88_D9_86_D9_88-_D8_A8_D9_84_D9_88_D9_83-_D8_A7_D8_B3_D8_AA_D8_A7_D9_86_D9_84_D8_B3.pdf" }
  },

  "self-priming-pumps": {
    title: "Self Priming Pumps",
    breadcrumb: "Self Priming Pumps",
    intro: "Water Pump Self-priming Jet Pumps",
    heroImage: "/images/self-3.png",
    sections: [
      {
        heading: "TECHNICAL DESCRIPTION",
        body: "Self Priming Jet Pump or self-priming pumps are suitable for clean or not very dirty waters and in particular for residential and domestic purpose, well applications, water booster sets, pressure systems. Our products thoroughly comply with our long-experienced quality control methods whilst our highly reliable manufacturing process guarantees an excellent product, well-known and exported all over the world.\n\nJET self-priming pumps are equipped with waterproof plug & switch, widely used in domestic and civil area.\n\nWe use cold rolled silicon steel sheet with low temperature, high efficiency and long service life.\n\nWe use the built-in thermal protector for single phase IE 2 motor (Three phase, power ≥ 0.75 KW).\n\nSuitable for transferring water without abrasive particles or other liquid whose properties are similar to water."
      }
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
