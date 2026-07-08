export interface ShowcaseFeature {
  title: string;
  description: string;
  highlights: string[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  img: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
  showcaseImages?: [string, string, string];
  showcaseFeatures?: [ShowcaseFeature, ShowcaseFeature, ShowcaseFeature];
}

export const products: Product[] = [
  {
    id: "mono-cartons",
    title: "Mono Cartons",
    category: "Cartons",
    desc: "High-quality cartons with precise folds, crisp edges, and high-definition print clarity.",
    fullDesc: "High-quality cartons with precise folds, crisp edges, and high-definition print clarity. Perfect for cosmetics, FMCG, and pharmaceuticals.",
    img: "/assets/mono-carton-1.png",
    gallery: [
      "/assets/adb_mono_1.png",
      "/assets/adb_mono_2.png",
      "/assets/adb_mono_3.png",
      "/assets/adb_mono_4.png"
    ],
    features: [
      "High-quality offset printing",
      "Various finishes (Gloss, Matte, UV, Embossing)",
      "Customizable shapes and die-cuts",
      "Lightweight and cost-effective",
      "Eco-friendly and recyclable"
    ],
    specifications: {
      "MOQ": "2000 Sheets",
      "Paper Quality": "SBS, Duplex, Kraft",
      "Standard Finishes": "Matt Lamination, Gloss Lamination, Velvet Lamination, Holographic Lamination",
      "Value-adding Finishes": "Spot UV, Foil Stamping, Embossing, Debossing, PVC Window",
      "Technical Finishes": "Drip-off, Matt and Gloss, Metallic, Online UV, Aqueous coating"
    }
  },

  {
    id: "rigid-boxes",
    title: "Rigid Boxes",
    category: "Boxes",
    desc: "Premium, rigid-structure boxes made for a luxurious unboxing experience.",
    fullDesc: "Premium, rigid-structure boxes made for a luxurious unboxing experience. Perfect for high-end products, gifting, corporate gifting, and luxury D2C brands.",
    img: "/assets/adb-rigid-box.png",
    gallery: [
      "/assets/adb_rigid_1.png", 
      "/assets/adb_rigid_2.png", 
      "/assets/adb_rigid_3.png", 
      "/assets/adb_rigid_4.png"
    ],
    features: [
      "Luxurious look and premium feel",
      "Extremely durable and structural integrity",
      "Custom inserts available (Foam, Velvet, Cardboard)",
      "Magnetic closure options",
      "High-end finishing options"
    ],
    specifications: {
      "MOQ": "1000 Boxes",
      "Paper Quality": "Art Paper, Textured Papers",
      "Standard Finishes": "Matt Lamination, Gloss Lamination, Velvet Lamination, Holographic Lamination",
      "Value-adding Finishes": "Spot UV, Foil Stamping, Embossing, PVC Window",
      "Technical Finishes": "Metallic, Online UV, Matt and Gloss"
    }
  },
  {
    id: "self-adhesive-labels",
    title: "Self Adhesive Labels",
    category: "Labels",
    desc: "Custom printed stickers and labels for product branding and identification.",
    fullDesc: "High-quality self-adhesive labels available in rolls and sheets. We offer a wide range of face materials and adhesives suitable for various applications, including food packaging, cosmetics, logistics, and industrial use.",
    img: "/assets/self-adhesive-labels.png",
    gallery: [
      "/assets/adb_label_1.png", 
      "/assets/adb_label_2.png", 
      "/assets/adb_label_3.png", 
      "/assets/adb_label_4.png"
    ],
    features: [
      "Vibrant, high-resolution printing",
      "Various shapes and sizes",
      "Water-resistant and oil-resistant options",
      "Strong adhesion for different surfaces",
      "Available on rolls for auto-dispensing"
    ],
    specifications: {
      "MOQ": "5000 Labels",
      "Material Quality": "Chromo Paper, BOPP, PE, PET",
      "Standard Finishes": "Matt Lamination, Gloss Lamination",
      "Value-adding Finishes": "Foil Stamping, Spot UV, Embossing",
      "Technical Finishes": "Online UV, Aqueous coating",
      "Adhesive": "Hot-melt, Acrylic, Removable",
      "Format": "Rolls or Sheets"
    }
  },
  {
    id: "cold-seal-blisters",
    title: "Cold Seal Blisters",
    category: "Blisters",
    desc: "Pressure-sensitive blister cards designed for heat-free sealing.",
    fullDesc: "Pressure-sensitive blister cards designed for heat-free sealing. Perfect for pharmaceuticals, confectionery, and delicate FMCG products.",
    img: "/assets/cold-seal-blisters.png",
    gallery: [
      "/assets/adb_coldblister_1.png", 
      "/assets/adb_coldblister_2.png", 
      "/assets/adb_coldblister_3.png", 
      "/assets/cold-seal-blisters-mockup.png"
    ],
    features: [
      "No heat required for sealing",
      "Protects heat-sensitive items",
      "Fast and efficient packaging process",
      "Clear visibility of the product",
      "Tamper-evident packaging"
    ],
    specifications: {
      "MOQ": "3000-5000 Sheets",
      "Paper Quality": "SBS, Duplex",
      "Standard Finishes": "Matt Lamination, Gloss Lamination, Velvet Lamination, Holographic Lamination",
      "Value-adding Finishes": "Spot UV, Foil Stamping, Embossing",
      "Technical Finishes": "Drip-off, Matt and Gloss, Metallic, Online UV, Aqueous coating"
    }
  },
  {
    id: "hot-seal-blisters",
    title: "Hot Seal Blisters",
    category: "Blisters",
    desc: "Traditional heat-sealed blister packs for secure and visible product display.",
    fullDesc: "Hot seal blister packaging is a widely used and reliable method for retail products. A thermoformed plastic blister is heat-sealed to a specially coated backing card, providing a secure, tamper-evident package that showcases the product.",
    img: "/assets/hot-seal-blisters.png",
    gallery: ["/assets/hot-seal-blisters.png", "/assets/hot-seal-blisters-mockup.png"],
    features: [
      "Strong and durable seal",
      "Excellent product visibility",
      "Cost-effective retail packaging",
      "Deters theft and tampering",
      "Peg hole options for retail hanging"
    ],
    specifications: {
      "Paper Quality": "SBS, Duplex",
      "Standard Finishes": "Gloss Lamination",
      "Value-adding Finishes": "Foil Stamping, Embossing",
      "Technical Finishes": "Online UV, Aqueous coating"
    }
  },
  {
    id: "pouches",
    title: "Pouches",
    category: "Pouches",
    desc: "Versatile flexible packaging solutions including stand-up and flat pouches.",
    fullDesc: "Our flexible packaging pouches are available in various formats such as stand-up pouches, flat pouches, and spout pouches. They offer excellent barrier properties to preserve freshness and extend the shelf life of food and non-food products.",
    img: "/assets/adb-pouches.png",
    gallery: ["/assets/adb-pouches.png", "/assets/adb-pouches.png"],
    features: [
      "Excellent moisture and oxygen barrier",
      "Lightweight and space-saving",
      "Customizable with zippers, tear notches, and spouts",
      "High-impact graphic printing",
      "Available in multi-layer laminates"
    ],
    specifications: {
      "MOQ": "5000 Pouches",
      "Material": "PET/PE, BOPP/PE, Aluminum Foil laminates",
      "Standard Finishes": "Matt Finish, Gloss Finish, Holographic",
      "Value-adding Finishes": "Spot UV, Foil Stamping, Clear Window",
      "Types": "Stand-up, Three-side seal, Center seal, Spout Pouches",
      "Printing": "Rotogravure up to 9 colors"
    }
  },
  {
    id: "canister-boxes",
    title: "Canister Boxes",
    category: "Boxes",
    desc: "Cylindrical composite cans for premium packaging of tea, coffee, and gifts.",
    fullDesc: "Composite canister boxes (paper tubes) offer a unique and premium packaging alternative to traditional square boxes. Ideal for dry foods, cosmetics, and promotional items, providing a distinct shelf appeal.",
    img: "/assets/adb-canister.png",
    gallery: ["/assets/adb-canister.png", "/assets/canister_gallery_1.png", "/assets/canister_gallery_2.png"],
    showcaseImages: ["/assets/canister-feature-1.png", "/assets/canister-feature-2.png", "/assets/canister-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Premium Cylindrical Design",
        description: "Stand out on the shelf with unique paper tube canister packaging. Perfect for premium teas, coffees, cosmetics, and luxury gifts.",
        highlights: ["Distinctive shelf appeal", "Sturdy paper construction", "Food-safe inner linings"]
      },
      {
        title: "Airtight & Secure",
        description: "Designed to keep your products fresh. Our canisters can be fitted with aluminum foils, easy-peel lids, and secure caps for maximum protection.",
        highlights: ["Moisture and odor barriers", "Metal or plastic caps", "Tamper-evident sealing"]
      },
      {
        title: "Bespoke Branding",
        description: "Wrap your brand around a 360-degree canvas. We provide high-quality label wrapping and direct printing with luxury finishes.",
        highlights: ["360-degree printable surface", "Foil stamping and embossing", "Matte and gloss lamination"]
      }
    ],
    features: [
      "Unique cylindrical shape",
      "Eco-friendly paper construction",
      "Airtight inner lining options available",
      "Custom printed outer label",
      "Metal, plastic, or paper lid options"
    ],
    specifications: {
      "MOQ": "2000 Canisters",
      "Paper Quality": "Kraft Board, Art Paper Wrap, Textured Paper",
      "Standard Finishes": "Matt Lamination, Gloss Lamination, Velvet Lamination",
      "Value-adding Finishes": "Foil Stamping, Spot UV, Embossing, Debossing",
      "Diameter": "Customizable (50mm - 150mm)",
      "Lid Type": "Tinplate, Plastic, Paper cap"
    }
  },
  {
    id: "promotional-tape-roll",
    title: "Promotional Tape Roll",
    category: "Tapes",
    desc: "Custom printed packaging tape to boost brand visibility on every shipment.",
    fullDesc: "Turn your shipping cartons into a marketing tool with our custom printed promotional tape. High-quality BOPP tape printed with your company logo, handling instructions, or promotional messages ensures secure sealing and brand recognition.",
    img: "/assets/promotional-tape-roll.png",
    gallery: ["/assets/promotional-tape-roll.png", "/assets/promotional-tape-roll-mockup.png"],
    features: [
      "Enhances brand visibility",
      "Strong adhesion for secure sealing",
      "Provides tamper evidence",
      "Customized with up to 3 colors",
      "Available in various widths"
    ],
    specifications: {
      "MOQ": "500 Rolls",
      "Material": "BOPP with Acrylic/Hot-melt adhesive",
      "Standard Finishes": "Gloss Finish, Matt Finish",
      "Width": "48mm, 72mm",
      "Length": "65m or custom",
      "Printing": "Custom brand logo up to 3 colors"
    }
  },
  {
    id: "corrugated-boxes",
    title: "Corrugated Boxes",
    category: "Boxes",
    desc: "Structurally strong, high-impact, printable E-flute boxes built to protect, ship, and impress.",
    fullDesc: "Structurally strong, high-impact, printable E-flute boxes built to protect, ship, and impress. Perfect for e-commerce, B2B logistics, and heavy retail products.",
    img: "/assets/adb-corrugated.png",
    gallery: ["/assets/adb-corrugated.png", "/assets/adb-corrugated.png"],
    features: [
      "High crush resistance and stacking strength",
      "100% recyclable and eco-friendly",
      "Available in Single, Double, and Triple Wall",
      "Custom printing options available for branding",
      "Shipped flat to save storage space"
    ],
    specifications: {
      "MOQ": "2000 Sheets",
      "Structure": "3 Ply, 4 Ply, 5 Ply",
      "Standard Finishes": "Matt Lamination, Gloss Lamination, Velvet Lamination, Holographic Lamination",
      "Value-adding Finishes": "Spot UV, Foil Stamping, Embossing, PVC Window",
      "Technical Finishes": "Drip-off, Matt and Gloss, Metallic, Aqueous coating, Online UV"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
