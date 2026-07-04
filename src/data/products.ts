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
}

export const products: Product[] = [
  {
    id: "mono-cartons",
    title: "Mono Cartons",
    category: "Cartons",
    desc: "High-quality printed folding cartons for retail and product packaging.",
    fullDesc: "Our mono cartons are crafted from premium paperboard, offering exceptional printability and structural integrity. Ideal for pharmaceuticals, cosmetics, food, and FMCG products, providing an attractive retail presence.",
    img: "/assets/mono-cartons.png",
    gallery: ["/assets/mono-cartons.png"],
    features: [
      "High-quality offset printing",
      "Various finishes (Gloss, Matte, UV, Embossing)",
      "Customizable shapes and die-cuts",
      "Lightweight and cost-effective",
      "Eco-friendly and recyclable"
    ],
    specifications: {
      "Material": "SBS / FBB / Greyback Paperboard",
      "Thickness": "200 - 450 GSM",
      "Printing": "Up to 8 colors + coating",
      "Finishing": "Lamination, Foiling, Spot UV"
    }
  },
  {
    id: "corrugated-boxes",
    title: "Corrugated Boxes",
    category: "Boxes",
    desc: "Strong, durable & customizable boxes for safe packaging of goods of all sizes.",
    fullDesc: "Our heavy-duty corrugated boxes are engineered to provide maximum protection for your products during transit, storage, and handling. Manufactured from high-quality kraft paper, these boxes offer superior stacking strength and crush resistance.",
    img: "/assets/corrugated-boxes.png",
    gallery: ["/assets/corrugated-boxes.png"],
    features: [
      "High crush resistance and stacking strength",
      "100% recyclable and eco-friendly",
      "Available in Single, Double, and Triple Wall",
      "Custom printing options available for branding",
      "Shipped flat to save storage space"
    ],
    specifications: {
      "Material": "Kraft Paper / Fluting Medium",
      "Flute Types": "A, B, C, E, or Double-wall",
      "Bursting Strength": "10 - 45 kg/cm²"
    }
  },
  {
    id: "rigid-boxes",
    title: "Rigid Boxes",
    category: "Boxes",
    desc: "Premium, sturdy packaging for luxury items and gifts.",
    fullDesc: "Elevate your brand with our luxury rigid boxes. Made from thick, high-density board wrapped in premium paper, these boxes offer a superior unboxing experience. Perfect for jewelry, electronics, cosmetics, and premium gifting.",
    img: "/assets/rigid-boxes.png",
    gallery: ["/assets/rigid-boxes.png"],
    features: [
      "Luxurious look and premium feel",
      "Extremely durable and structural integrity",
      "Custom inserts available (Foam, Velvet, Cardboard)",
      "Magnetic closure options",
      "High-end finishing options"
    ],
    specifications: {
      "Material": "High-density rigid board (1-3mm)",
      "Wrapping": "Art paper, textured paper, leatherette",
      "Finishing": "Hot stamping, debossing, spot UV"
    }
  },
  {
    id: "self-adhesive-labels",
    title: "Self Adhesive Labels",
    category: "Labels",
    desc: "Custom printed stickers and labels for product branding and identification.",
    fullDesc: "High-quality self-adhesive labels available in rolls and sheets. We offer a wide range of face materials and adhesives suitable for various applications, including food packaging, cosmetics, logistics, and industrial use.",
    img: "/assets/self-adhesive-labels.png",
    gallery: ["/assets/self-adhesive-labels.png"],
    features: [
      "Vibrant, high-resolution printing",
      "Various shapes and sizes",
      "Water-resistant and oil-resistant options",
      "Strong adhesion for different surfaces",
      "Available on rolls for auto-dispensing"
    ],
    specifications: {
      "Material": "Paper, BOPP, PE, PET",
      "Adhesive": "Hot-melt, Acrylic, Removable",
      "Format": "Rolls or Sheets"
    }
  },
  {
    id: "cold-seal-blisters",
    title: "Cold Seal Blisters",
    category: "Blisters",
    desc: "Innovative blister packaging sealing without heat, protecting sensitive products.",
    fullDesc: "Cold seal blister packaging uses a cohesive coating that only sticks to itself under pressure, eliminating the need for heat during the sealing process. This is ideal for heat-sensitive products like chocolates, medical devices, and specific cosmetics.",
    img: "/assets/cold-seal-blisters.png",
    gallery: ["/assets/cold-seal-blisters.png"],
    features: [
      "No heat required for sealing",
      "Protects heat-sensitive items",
      "Fast and efficient packaging process",
      "Clear visibility of the product",
      "Tamper-evident packaging"
    ],
    specifications: {
      "Material": "PVC, PET with Cold Seal Coating",
      "Sealing Method": "Pressure only",
      "Application": "Food, Pharma, Consumer Goods"
    }
  },
  {
    id: "hot-seal-blisters",
    title: "Hot Seal Blisters",
    category: "Blisters",
    desc: "Traditional heat-sealed blister packs for secure and visible product display.",
    fullDesc: "Hot seal blister packaging is a widely used and reliable method for retail products. A thermoformed plastic blister is heat-sealed to a specially coated backing card, providing a secure, tamper-evident package that showcases the product.",
    img: "/assets/hot-seal-blisters.png",
    gallery: ["/assets/hot-seal-blisters.png"],
    features: [
      "Strong and durable seal",
      "Excellent product visibility",
      "Cost-effective retail packaging",
      "Deters theft and tampering",
      "Peg hole options for retail hanging"
    ],
    specifications: {
      "Blister Material": "PVC, PET, HIPS",
      "Backing": "Blister coated duplex board",
      "Sealing Method": "Heat and Pressure"
    }
  },
  {
    id: "pouches",
    title: "Pouches",
    category: "Pouches",
    desc: "Versatile flexible packaging solutions including stand-up and flat pouches.",
    fullDesc: "Our flexible packaging pouches are available in various formats such as stand-up pouches, flat pouches, and spout pouches. They offer excellent barrier properties to preserve freshness and extend the shelf life of food and non-food products.",
    img: "/assets/pouches-new.png",
    gallery: ["/assets/pouches-new.png"],
    features: [
      "Excellent moisture and oxygen barrier",
      "Lightweight and space-saving",
      "Customizable with zippers, tear notches, and spouts",
      "High-impact graphic printing",
      "Available in multi-layer laminates"
    ],
    specifications: {
      "Material": "PET/PE, BOPP/PE, Aluminum Foil laminates",
      "Types": "Stand-up, Three-side seal, Center seal",
      "Printing": "Rotogravure up to 9 colors"
    }
  },
  {
    id: "canister-boxes",
    title: "Canister Boxes",
    category: "Boxes",
    desc: "Cylindrical composite cans for premium packaging of tea, coffee, and gifts.",
    fullDesc: "Composite canister boxes (paper tubes) offer a unique and premium packaging alternative to traditional square boxes. Ideal for dry foods, cosmetics, and promotional items, providing a distinct shelf appeal.",
    img: "/assets/canister-boxes.png",
    gallery: ["/assets/canister-boxes.png"],
    features: [
      "Unique cylindrical shape",
      "Eco-friendly paper construction",
      "Airtight inner lining options available",
      "Custom printed outer label",
      "Metal, plastic, or paper lid options"
    ],
    specifications: {
      "Material": "Kraft paper tube with art paper wrap",
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
    gallery: ["/assets/promotional-tape-roll.png"],
    features: [
      "Enhances brand visibility",
      "Strong adhesion for secure sealing",
      "Provides tamper evidence",
      "Customized with up to 3 colors",
      "Available in various widths"
    ],
    specifications: {
      "Material": "BOPP with Acrylic/Hot-melt adhesive",
      "Width": "48mm, 72mm",
      "Length": "65m or custom",
      "Printing": "Custom brand logo/text"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
