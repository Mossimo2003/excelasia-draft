import { Product } from "@/types/product";

/**
 * Complete product catalog for Excel Asia Technologies Inc.
 * All products are categorized according to company's product lines
 */
export const products: Product[] = [
  // BASIC INDUSTRIAL CHEMICALS
  {
    id: "bic-001",
    name: "Acetone",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 1250.00,
    description: "High-purity acetone for industrial applications, solvent and cleaning purposes.",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    id: "bic-002",
    name: "Hydrochloric Acid",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 850.00,
    description: "Industrial grade hydrochloric acid for pH adjustment and chemical processing.",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    id: "bic-003",
    name: "Caustic Soda (Liquid)",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 950.00,
    description: "Sodium hydroxide solution for chemical manufacturing and pH control.",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    id: "bic-004",
    name: "Sulfuric Acid",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 1100.00,
    description: "Concentrated sulfuric acid for industrial processes and chemical synthesis.",
    image: "/placeholder.svg",
    isFeatured: true,
  },
  {
    id: "bic-005",
    name: "Acetic Acid",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 980.00,
    description: "Glacial acetic acid for chemical production and pH adjustment.",
    image: "/placeholder.svg",
  },
  {
    id: "bic-006",
    name: "Citric Acid",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 750.00,
    description: "Food and industrial grade citric acid.",
    image: "/placeholder.svg",
  },
  {
    id: "bic-007",
    name: "Nitric Acid",
    category: "BASIC INDUSTRIAL CHEMICALS",
    price: 1200.00,
    description: "High purity nitric acid for industrial applications.",
    image: "/placeholder.svg",
  },

  // INDUSTRIAL CHEMICAL CLEANING
  {
    id: "icc-001",
    name: "Excel 301 (Inhibited Acid Liquid Descaler)",
    category: "INDUSTRIAL CHEMICAL CLEANING",
    price: 2500.00,
    description: "Effective liquid descaler for removing scale and deposits from industrial equipment.",
    image: "/placeholder.svg",
  },
  {
    id: "icc-002",
    name: "Excel 315 (Inhibited Acid Liquid Descaler)",
    category: "INDUSTRIAL CHEMICAL CLEANING",
    price: 2600.00,
    description: "Advanced formula liquid descaler for tough scale removal.",
    image: "/placeholder.svg",
  },
  {
    id: "icc-003",
    name: "Excel 317 (Inhibited Acid Paste)",
    category: "INDUSTRIAL CHEMICAL CLEANING",
    price: 2800.00,
    description: "Paste descaler for vertical surfaces and hard-to-reach areas.",
    image: "/placeholder.svg",
  },
  {
    id: "icc-004",
    name: "Excel 321 (Inhibited Acid Powder)",
    category: "INDUSTRIAL CHEMICAL CLEANING",
    price: 2400.00,
    description: "Powder descaler for mixing custom concentrations.",
    image: "/placeholder.svg",
  },
  {
    id: "icc-005",
    name: "Excel 319 (Inhibited Base Degreaser)",
    category: "INDUSTRIAL CHEMICAL CLEANING",
    price: 2300.00,
    description: "Alkaline degreaser for removing oils and greases from equipment.",
    image: "/placeholder.svg",
  },

  // SPECIALTY CHEMICALS
  {
    id: "sc-001",
    name: "Excel 101 Refinery Filter Clay (Activated)",
    category: "SPECIALTY CHEMICALS",
    price: 3500.00,
    description: "Activated clay for refinery filtration processes.",
    image: "/placeholder.svg",
  },
  {
    id: "sc-002",
    name: "Excel 102 Mold Release Agent",
    category: "SPECIALTY CHEMICALS",
    price: 1800.00,
    description: "High-performance mold release agent for manufacturing processes.",
    image: "/placeholder.svg",
  },
  {
    id: "sc-003",
    name: "Excel 103 Defoamer",
    category: "SPECIALTY CHEMICALS",
    price: 1650.00,
    description: "Industrial defoamer for controlling foam in various processes.",
    image: "/placeholder.svg",
  },

  // MAINTENANCE CHEMICALS
  {
    id: "mc-001",
    name: "Oil Additive",
    category: "MAINTENANCE CHEMICALS",
    price: 1200.00,
    description: "Performance-enhancing oil additive for machinery.",
    image: "/placeholder.svg",
  },
  {
    id: "mc-002",
    name: "Solvent Degreaser",
    category: "MAINTENANCE CHEMICALS",
    price: 980.00,
    description: "Powerful solvent-based degreaser for industrial cleaning.",
    image: "/placeholder.svg",
  },
  {
    id: "mc-003",
    name: "All Purpose Degreaser",
    category: "MAINTENANCE CHEMICALS",
    price: 850.00,
    description: "Versatile degreaser for various industrial applications.",
    image: "/placeholder.svg",
  },
  {
    id: "mc-004",
    name: "Penetrating Oil",
    category: "MAINTENANCE CHEMICALS",
    price: 750.00,
    description: "High-performance penetrating oil for loosening rusted parts.",
    image: "/placeholder.svg",
  },

  // INSTITUTIONAL PRODUCTS
  {
    id: "ip-001",
    name: "Liquid Hand Soap",
    category: "INSTITUTIONAL PRODUCTS",
    price: 350.00,
    description: "Gentle liquid hand soap for institutional use.",
    image: "/placeholder.svg",
  },
  {
    id: "ip-002",
    name: "Transparent Soap",
    category: "INSTITUTIONAL PRODUCTS",
    price: 280.00,
    description: "Premium transparent soap bars.",
    image: "/placeholder.svg",
  },
  {
    id: "ip-003",
    name: "Hand and Body Lotion",
    category: "INSTITUTIONAL PRODUCTS",
    price: 420.00,
    description: "Moisturizing lotion for institutional facilities.",
    image: "/placeholder.svg",
  },
  {
    id: "ip-004",
    name: "Shampoo",
    category: "INSTITUTIONAL PRODUCTS",
    price: 380.00,
    description: "Quality shampoo for institutional use.",
    image: "/placeholder.svg",
  },
  {
    id: "ip-005",
    name: "Multi-Purpose Powder Detergent",
    category: "INSTITUTIONAL PRODUCTS",
    price: 450.00,
    description: "Effective powder detergent for various cleaning tasks.",
    image: "/placeholder.svg",
  },
  {
    id: "ip-006",
    name: "Laundry Detergent",
    category: "INSTITUTIONAL PRODUCTS",
    price: 480.00,
    description: "Industrial-strength laundry detergent.",
    image: "/placeholder.svg",
  },

  // ION EXCHANGE RESINS
  {
    id: "ier-001",
    name: "Strong Cation Resin",
    category: "ION EXCHANGE RESINS",
    price: 5500.00,
    description: "High-capacity strong cation exchange resin for water treatment.",
    image: "/placeholder.svg",
  },
  {
    id: "ier-002",
    name: "Strong Anion Resin",
    category: "ION EXCHANGE RESINS",
    price: 5800.00,
    description: "Strong anion exchange resin for deionization systems.",
    image: "/placeholder.svg",
  },
  {
    id: "ier-003",
    name: "Weak Cation Resin",
    category: "ION EXCHANGE RESINS",
    price: 4800.00,
    description: "Weak cation exchange resin for specific applications.",
    image: "/placeholder.svg",
  },
  {
    id: "ier-004",
    name: "Weak Anion Resin",
    category: "ION EXCHANGE RESINS",
    price: 5000.00,
    description: "Weak anion exchange resin for water softening.",
    image: "/placeholder.svg",
  },

  // COAGULANTS/POLYELECTROLYTE
  {
    id: "cp-001",
    name: "Excelfloc C-944 (Cationic)",
    category: "COAGULANTS/POLYELECTROLYTE",
    price: 3200.00,
    description: "Cationic coagulant aid for water and wastewater treatment.",
    image: "/placeholder.svg",
  },
  {
    id: "cp-002",
    name: "Excelfloc An-091 (Anionic)",
    category: "COAGULANTS/POLYELECTROLYTE",
    price: 3100.00,
    description: "Anionic coagulant aid for clarification processes.",
    image: "/placeholder.svg",
  },
  {
    id: "cp-003",
    name: "Excelfloc NI-307 505 (Nonionic)",
    category: "COAGULANTS/POLYELECTROLYTE",
    price: 2900.00,
    description: "Nonionic coagulant aid for specialized applications.",
    image: "/placeholder.svg",
  },

  // ANALYTICAL REAGENT
  {
    id: "ar-001",
    name: "Hydrochloric Acid (Analytical Grade)",
    category: "ANALYTICAL REAGENT",
    price: 1200.00,
    description: "High purity hydrochloric acid for analytical work.",
    image: "/placeholder.svg",
  },
  {
    id: "ar-002",
    name: "Sodium Nitrite",
    category: "ANALYTICAL REAGENT",
    price: 950.00,
    description: "Analytical grade sodium nitrite reagent.",
    image: "/placeholder.svg",
  },
  {
    id: "ar-003",
    name: "Nitric Acid (Analytical Grade)",
    category: "ANALYTICAL REAGENT",
    price: 1350.00,
    description: "Ultra pure nitric acid for laboratory analysis.",
    image: "/placeholder.svg",
  },
  {
    id: "ar-004",
    name: "Potassium Chloride",
    category: "ANALYTICAL REAGENT",
    price: 800.00,
    description: "Analytical grade potassium chloride.",
    image: "/placeholder.svg",
  },
  {
    id: "ar-005",
    name: "Buffer Solution",
    category: "ANALYTICAL REAGENT",
    price: 680.00,
    description: "Calibrated buffer solutions for pH measurement.",
    image: "/placeholder.svg",
  },
  {
    id: "ar-006",
    name: "Acetone (Analytical Grade)",
    category: "ANALYTICAL REAGENT",
    price: 1400.00,
    description: "High purity acetone for analytical applications.",
    image: "/placeholder.svg",
  },
  {
    id: "ar-007",
    name: "Sodium Hydroxide (Analytical Grade)",
    category: "ANALYTICAL REAGENT",
    price: 1100.00,
    description: "Analytical grade sodium hydroxide solution.",
    image: "/placeholder.svg",
  },
];

/**
 * Get featured products for homepage display
 */
export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isFeatured);
};

/**
 * Get products by category
 */
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

/**
 * Search products by name or description
 */
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery)
  );
};
