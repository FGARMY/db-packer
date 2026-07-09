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
    showcaseImages: ["/assets/rigid-feature-1.png", "/assets/rigid-feature-2.png", "/assets/rigid-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Luxurious Unboxing Experience",
        description: "Leave a lasting impression from the first touch. Our premium rigid boxes are crafted to provide a high-end unboxing experience that elevates the perceived value of your product.",
        highlights: ["Luxurious look and premium feel", "Perfect for high-end gifting", "Enhances brand prestige"]
      },
      {
        title: "Unmatched Structural Integrity",
        description: "Beauty meets strength. Constructed from highly durable materials, these boxes offer extreme structural integrity to protect your most valuable items without compromising on style.",
        highlights: ["Extremely durable construction", "Protects fragile and premium items", "Long-lasting keepsake quality"]
      },
      {
        title: "Tailored Customization",
        description: "Designed exactly to your specifications. From custom foam or velvet inserts to elegant magnetic closures and specialized finishing options, we bring your vision to life.",
        highlights: ["Custom inserts (Foam, Velvet, Cardboard)", "Magnetic closure options", "High-end finishing options"]
      }
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
    showcaseImages: ["/assets/self-label-feature-1.png", "/assets/self-label-feature-2.png", "/assets/self-label-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Vibrant High-Resolution Prints",
        description: "Capture attention instantly. Our self-adhesive labels are printed using state-of-the-art technology to ensure vibrant colors and sharp, easily readable text for your branding.",
        highlights: ["Vibrant, high-resolution printing", "Clear product identification", "Available in various shapes and sizes"]
      },
      {
        title: "Durable & Resistant",
        description: "Built for tough environments. We offer specialized face materials and coatings that provide excellent resistance against water, oils, and general wear and tear.",
        highlights: ["Water-resistant options", "Oil and smudge resistant", "Long-lasting durability"]
      },
      {
        title: "Strong & Reliable Adhesion",
        description: "Sticks where you need it to. With options for hot-melt, acrylic, and removable adhesives, our labels bond securely to a vast array of packaging surfaces.",
        highlights: ["Strong adhesion for different surfaces", "Removable options available", "Perfect for auto-dispensing rolls"]
      }
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
    showcaseImages: ["/assets/cold-feature-1.png", "/assets/cold-feature-2.png", "/assets/cold-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Heat-Free Sealing",
        description: "Perfect for temperature-sensitive products. Our cold seal technology provides a secure closure without the need for heat, preserving the integrity of your items.",
        highlights: ["Protects heat-sensitive items", "Fast and efficient process", "Energy-saving packaging"]
      },
      {
        title: "Crystal Clear Visibility",
        description: "Showcase your products with brilliant clarity. The transparent blister allows customers to see exactly what they're getting, building trust and appeal.",
        highlights: ["Excellent product visibility", "Tamper-evident protection", "Enhances retail display"]
      },
      {
        title: "Customizable Backing Cards",
        description: "Maximize your branding real estate. Our backing cards offer high-quality printing surfaces for vibrant graphics, instructions, and marketing messages.",
        highlights: ["Vibrant full-color printing", "Various finishes available", "Eco-friendly options"]
      }
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
    gallery: ["/assets/hot-seal-blisters.png", "/assets/hot-seal-blisters-mockup.png", "/assets/hot-gallery-3.png", "/assets/hot-gallery-4.png"],
    showcaseImages: ["/assets/hot-feature-1.png", "/assets/hot-feature-2.png", "/assets/hot-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Secure Heat Sealing",
        description: "Ensure your products are completely secure. Our hot seal blister technology creates an exceptionally strong bond between the blister and the backing card, offering reliable tamper-evidence.",
        highlights: ["Strong and durable seal", "Cost-effective retail packaging", "Deters theft and tampering"]
      },
      {
        title: "High Retail Visibility",
        description: "Maximize your product's appeal on the shelf. The thermoformed plastic blister offers brilliant clarity while securely encasing the product for consumers to see.",
        highlights: ["Excellent product visibility", "Peg hole options for hanging", "Enhances brand perception"]
      },
      {
        title: "Premium Backing Cards",
        description: "Deliver a strong brand message. Our backing cards use specially coated materials to ensure vibrant graphics and essential product information are displayed flawlessly.",
        highlights: ["High-quality coated materials", "Vibrant full-color printing", "Value-adding finishes available"]
      }
    ],
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
    gallery: ["/assets/adb-pouches.png", "/assets/pouch-feature-1.png", "/assets/pouch-gallery-3.png", "/assets/pouch-gallery-4.png"],
    showcaseImages: ["/assets/pouch-feature-1.png", "/assets/pouch-feature-2.png", "/assets/pouch-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Superior Barrier Protection",
        description: "Keep your products fresh for longer. Our pouches are constructed with high-quality multi-layer laminates that provide excellent moisture and oxygen barriers, significantly extending shelf life.",
        highlights: ["Excellent moisture and oxygen barrier", "Preserves freshness and flavor", "Available in multi-layer laminates"]
      },
      {
        title: "Flexible & Space-Saving",
        description: "Optimize your logistics. Pouches are incredibly lightweight and flexible, dramatically reducing shipping costs and storage space compared to traditional rigid containers.",
        highlights: ["Lightweight packaging format", "Reduces shipping and storage costs", "Space-saving flat shipment"]
      },
      {
        title: "Ultimate Convenience",
        description: "Enhance user experience with added functionality. We offer a range of customizations including resealable zippers, tear notches, and spouts for effortless opening and pouring.",
        highlights: ["Resealable zipper options", "Easy-open tear notches", "Spout fitments available"]
      }
    ],
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
    gallery: ["/assets/adb-canister.png", "/assets/canister_gallery_1.png", "/assets/canister_gallery_2.png", "/assets/canister-gallery-4.png"],
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
    gallery: ["/assets/promotional-tape-roll.png", "/assets/promotional-tape-roll-mockup.png", "/assets/tape-gallery-3.png", "/assets/tape-gallery-4.png"],
    showcaseImages: ["/assets/tape-feature-1.png", "/assets/tape-feature-2.png", "/assets/promotional-tape-roll-mockup.png"],
    showcaseFeatures: [
      {
        title: "Boost Brand Visibility",
        description: "Turn every shipped package into a marketing opportunity. Custom printed promotional tape puts your logo and brand messaging right in front of your customers before they even open the box.",
        highlights: ["High-visibility custom printing", "Available in up to 3 colors", "Professional unboxing experience"]
      },
      {
        title: "Secure & Tamper-Evident",
        description: "Protect your shipments. Our high-quality BOPP tape with strong adhesion ensures your cartons stay sealed throughout transit, while custom prints make tampering immediately obvious.",
        highlights: ["Strong acrylic or hot-melt adhesion", "Provides reliable tamper evidence", "Reduces risk of theft"]
      },
      {
        title: "Versatile & Custom Sized",
        description: "We provide tape rolls tailored to your operational needs. Available in multiple widths and lengths, ensuring perfect compatibility with your manual or automated dispensers.",
        highlights: ["Available in 48mm and 72mm widths", "Standard 65m or custom lengths", "Fits standard tape dispensers"]
      }
    ],
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
    gallery: ["/assets/adb-corrugated.png", "/assets/corrugated-feature-1.png", "/assets/corrugated-gallery-3.png", "/assets/corrugated-gallery-4.png"],
    showcaseImages: ["/assets/corrugated-feature-1.png", "/assets/corrugated-feature-2.png", "/assets/corrugated-feature-3.png"],
    showcaseFeatures: [
      {
        title: "Maximum Structural Integrity",
        description: "Built to withstand the toughest logistics. Our corrugated boxes are engineered with high-quality fluting to ensure superior crush resistance and stacking strength.",
        highlights: ["High crush resistance", "Superior stacking strength", "Ideal for B2B and e-commerce"]
      },
      {
        title: "Eco-Friendly & Sustainable",
        description: "Commit to a greener future. Our corrugated packaging is 100% recyclable, biodegradable, and made from sustainably sourced materials.",
        highlights: ["100% recyclable material", "Eco-friendly production", "Reduces carbon footprint"]
      },
      {
        title: "Custom Printed Branding",
        description: "Your shipping box is your customer's first physical interaction. We offer high-quality custom printing directly on the corrugated surface to make a lasting impression.",
        highlights: ["High-impact graphic printing", "Inside-out custom printing", "Enhances unboxing experience"]
      }
    ],
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
