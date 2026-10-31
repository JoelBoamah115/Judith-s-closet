import { Product } from "./types";

export const PRODUCTS: Product[] = [
  // --- MEN'S COLLECTION ---
  {
    id: "jc-men-01",
    name: "Tailored Camel Wool Overcoat",
    slug: "tailored-camel-wool-overcoat",
    category: "men",
    subCategory: "Outerwear",
    price: 1350,
    originalPrice: 1550,
    description: "An impeccably tailored single-breasted overcoat cut from a heavyweight wool-cashmere blend. Features structured peak lapels, horn button fastenings, and a silky cupro lining designed for effortless layering over suiting.",
    details: [
      "80% Virgin Wool, 20% Cashmere",
      "Single-breasted button front",
      "Hand-finished pick stitching",
      "Internal chest welt pockets",
      "Made for timeless winter & evening elegance"
    ],
    fabric: "Virgin Wool & Cashmere Blend",
    care: "Dry clean only by garment specialist",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Camel Tan", hex: "#C19A6B" },
      { name: "Espresso Brown", hex: "#25211F" },
      { name: "Charcoal", hex: "#363636" }
    ],
    featured: true,
    newArrival: true,
    bestseller: true
  },
  {
    id: "jc-men-02",
    name: "Sartorial Italian Cotton Shirt",
    slug: "sartorial-italian-cotton-shirt",
    category: "men",
    subCategory: "Shirts",
    price: 480,
    description: "Woven in high-twist 120s two-ply Egyptian cotton, this sartorial shirt combines an elegant spread collar with mother-of-pearl buttons. Crisp, breathable, and designed for commanding boardrooms or relaxed evenings.",
    details: [
      "100% Extra-Long Staple Cotton",
      "Reinforced collar stays",
      "French placket with mother-of-pearl buttons",
      "Back darts for a clean tapered silhouette"
    ],
    fabric: "100% Giza Egyptian Cotton",
    care: "Machine wash cold delicate or dry clean. Warm iron",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Crisp White", hex: "#FFFFFF" },
      { name: "Sky Azure", hex: "#A8C5DA" },
      { name: "Burgundy Pin", hex: "#641526" }
    ],
    featured: true,
    newArrival: false,
    bestseller: true
  },
  {
    id: "jc-men-03",
    name: "Pleated Linen-Cotton Trousers",
    slug: "pleated-linen-cotton-trousers",
    category: "men",
    subCategory: "Trousers",
    price: 520,
    description: "Relaxed sophistication. These double forward pleated trousers offer a high-rise waist with extended tab closure, side adjusters, and a gentle taper that drapes naturally over loafers.",
    details: [
      "55% Linen, 45% Organic Cotton",
      "Side metal tab adjusters (belt-free silhouette)",
      "Double forward pleats",
      "Deep slash pockets and buttoned rear welt pockets"
    ],
    fabric: "Breathable Linen-Cotton Weave",
    care: "Gentle machine wash inside out, line dry in shade",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Warm Champagne", hex: "#E8DFD2" },
      { name: "Espresso", hex: "#25211F" },
      { name: "Olive Sage", hex: "#556B2F" }
    ],
    featured: false,
    newArrival: true,
    bestseller: false
  },
  {
    id: "jc-men-04",
    name: "Double-Breasted Velvet Dinner Jacket",
    slug: "double-breasted-velvet-dinner-jacket",
    category: "men",
    subCategory: "Tailoring",
    price: 1550,
    originalPrice: 1750,
    description: "Crafted for unforgettable galas and celebratory occasions, this dinner jacket features lustrous deep burgundy cotton velvet with silk satin peak lapels and covered buttons.",
    details: [
      "Deep wine cotton velvet with high sheen",
      "Silk duchess satin peak lapels",
      "Six-button double breasted closure",
      "Full burgundy jacquard lining"
    ],
    fabric: "100% Cotton Velvet with Pure Silk Accents",
    care: "Specialist dry clean only",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    colors: [
      { name: "Royal Burgundy", hex: "#641526" },
      { name: "Midnight Black", hex: "#151515" }
    ],
    featured: true,
    newArrival: true,
    bestseller: true
  },
  {
    id: "jc-men-05",
    name: "Merino Roll-Neck Knit Sweater",
    slug: "merino-roll-neck-knit-sweater",
    category: "men",
    subCategory: "Knitwear",
    price: 680,
    description: "Finely spun from superfine Australian extrafine merino wool. Designed with ribbed cuffs and hem for a streamlined fit under blazers or worn solo with tailored trousers.",
    details: [
      "100% Extrafine Merino Wool (19.5 micron)",
      "Ribbed roll neckline, cuffs and hem",
      "Thermal regulating and exceptionally soft against skin",
      "Seamless garment construction"
    ],
    fabric: "Superfine Merino Wool",
    care: "Hand wash cold with wool detergent, dry flat",
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Mocha Brown", hex: "#80664E" },
      { name: "Ivory Ecru", hex: "#F8F5F0" },
      { name: "Obsidian", hex: "#1F1F1F" }
    ],
    featured: false,
    newArrival: false,
    bestseller: false
  },
  {
    id: "jc-men-06",
    name: "Handcrafted Chelsea Boots in Burnished Calfskin",
    slug: "handcrafted-chelsea-boots-burnished-calfskin",
    category: "men",
    subCategory: "Footwear",
    price: 920,
    description: "Goodyear-welted Chelsea boots built from full-grain calf leather with an artisan hand-burnished finish. Durable leather sole injected with rubber grip inserts for all-weather confidence.",
    details: [
      "Full-grain burnished calfskin upper",
      "Goodyear welted resolable construction",
      "Elasticated side gussets and dual pull tabs",
      "Leather lining with padded footbed"
    ],
    fabric: "Full-Grain Italian Calfskin",
    care: "Polish with natural beeswax cream and store with cedar shoe trees",
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["41", "42", "43", "44", "45"],
    colors: [
      { name: "Burnished Mocha", hex: "#5C4033" },
      { name: "Onyx Black", hex: "#111111" }
    ],
    featured: false,
    newArrival: true,
    bestseller: true
  },
  {
    id: "jc-men-07",
    name: "Heritage Double-Breasted Trench Coat",
    slug: "heritage-double-breasted-trench-coat",
    category: "men",
    subCategory: "Outerwear",
    price: 1250,
    description: "An enduring icon of masculine style. Cut from water-repellent gabardine with traditional epaulettes, storm flap, horn buckles, and a belted waist that flatters any physique.",
    details: [
      "Water-repellent cotton gabardine weave",
      "Raglan sleeves for optimal movement",
      "Buckled belt and wrist cuffs",
      "Signature custom jacquard lining"
    ],
    fabric: "Heavyweight Cotton Gabardine",
    care: "Dry clean only",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Khaki Stone", hex: "#D2B48C" },
      { name: "Espresso", hex: "#25211F" }
    ],
    featured: true,
    newArrival: false,
    bestseller: false
  },
  {
    id: "jc-men-08",
    name: "Classic Silk-Blend Evening Knit Polo",
    slug: "classic-silk-blend-evening-knit-polo",
    category: "men",
    subCategory: "Shirts",
    price: 490,
    description: "Combining the breathability of combed cotton with the natural sheen and lightness of mulberry silk. Styled with an open resort collar and fine rib trims.",
    details: [
      "70% Combed Cotton, 30% Mulberry Silk",
      "Open spread camp collar without buttons",
      "Ribbed hem designed to rest cleanly at hip",
      "Lightweight 16-gauge knit"
    ],
    fabric: "Cotton-Mulberry Silk Blend",
    care: "Hand wash cold, dry flat in shade",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Mocha Brown", hex: "#80664E" },
      { name: "Burgundy", hex: "#641526" },
      { name: "Ecru Ivory", hex: "#F8F5F0" }
    ],
    featured: false,
    newArrival: true,
    bestseller: false
  },

  // --- WOMEN'S COLLECTION ---
  {
    id: "jc-women-01",
    name: "Champagne Silk Bias Slip Gown",
    slug: "champagne-silk-bias-slip-gown",
    category: "women",
    subCategory: "Dresses",
    price: 980,
    originalPrice: 1150,
    description: "Sculpted on the bias to caress every contour with liquid ease. Cut from 22-momme pure mulberry silk in glowing warm champagne, finished with delicate French rouleau straps and a low-cut back.",
    details: [
      "100% Grade 6A Mulberry Silk (22 Momme)",
      "Bias-cut architecture for liquid drape",
      "Adjustable micro rouleau shoulder straps",
      "Floor-grazing hemline with subtle puddle train"
    ],
    fabric: "Pure Mulberry Silk Charmeuse",
    care: "Dry clean or gentle hand wash with silk detergent",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Warm Champagne", hex: "#E8DFD2" },
      { name: "Burgundy Wine", hex: "#641526" },
      { name: "Midnight Black", hex: "#111111" }
    ],
    featured: true,
    newArrival: true,
    bestseller: true
  },
  {
    id: "jc-women-02",
    name: "Structured Burgundy Cape Blazer",
    slug: "structured-burgundy-cape-blazer",
    category: "women",
    subCategory: "Tailoring",
    price: 1120,
    description: "An arresting statement piece defining modern power dressing. Features sculpted shoulder pads with flowing split cape sleeves that reveal the arms, cut in Judith's signature rich burgundy wool crepe.",
    details: [
      "Premium heavyweight wool-crepe blend",
      "Split sleeve cape design with internal arm openings",
      "Satin peaked lapels and single horn button closure",
      "Tone-on-tone burgundy silk lining"
    ],
    fabric: "Wool Crepe with Satin Accents",
    care: "Dry clean only",
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Deep Burgundy", hex: "#641526" },
      { name: "Ivory Pearl", hex: "#F8F5F0" }
    ],
    featured: true,
    newArrival: true,
    bestseller: true
  },
  {
    id: "jc-women-03",
    name: "Tailored Wide-Leg Ivory Trousers",
    slug: "tailored-wide-leg-ivory-trousers",
    category: "women",
    subCategory: "Trousers",
    price: 540,
    description: "The epitome of understated luxury. These high-waisted wide-leg trousers feature structured front knife pleats, invisible waistband stitching, and a fluid floor-skimming silhouette.",
    details: [
      "Heavyweight viscose-linen drape blend (opaque & fully lined)",
      "High-rise fitted waistband with internal hook fastening",
      "Functional deep side slip pockets",
      "Full wide leg with generous turn-up hem"
    ],
    fabric: "Fluid Viscose & Linen Blend with Cotton Lining",
    care: "Dry clean recommended",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Soft Ivory", hex: "#F8F5F0" },
      { name: "Mocha Brown", hex: "#80664E" },
      { name: "Espresso", hex: "#25211F" }
    ],
    featured: false,
    newArrival: false,
    bestseller: true
  },
  {
    id: "jc-women-04",
    name: "Draped Satin Cocktail Midi Dress",
    slug: "draped-satin-cocktail-midi-dress",
    category: "women",
    subCategory: "Dresses",
    price: 790,
    description: "Asymmetrical gathering at the hip cascades into a dramatic front slit. Rendered in liquid satin with an asymmetrical cowl neckline that frames the collarbone with graceful elegance.",
    details: [
      "Heavyweight high-sheen satin",
      "Asymmetrical cowl neck",
      "Flattering gathered side ruching",
      "Concealed rear zip closure"
    ],
    fabric: "High-Grade Stretch Silk Satin",
    care: "Dry clean or hand wash cold inside out",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Mocha Brown", hex: "#80664E" },
      { name: "Warm Champagne", hex: "#E8DFD2" },
      { name: "Burgundy", hex: "#641526" }
    ],
    featured: true,
    newArrival: true,
    bestseller: false
  },
  {
    id: "jc-women-05",
    name: "Cashmere Turtleneck Sweater",
    slug: "cashmere-turtleneck-sweater",
    category: "women",
    subCategory: "Knitwear",
    price: 650,
    description: "Spun from 100% two-ply Mongolian cashmere. An everyday indulgence featuring a relaxed dropped shoulder, wide ribbed cuffs, and an easy high neckline that never constricts.",
    details: [
      "100% Grade-A Mongolian Cashmere",
      "Medium weight 12-gauge knit",
      "Subtle side hem slits for easy French-tuck styling",
      "Ultra-soft anti-pilling yarn"
    ],
    fabric: "100% Pure Cashmere",
    care: "Hand wash cold with wool shampoo, reshape and dry flat",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Warm Oatmeal", hex: "#E8DFD2" },
      { name: "Ivory", hex: "#F8F5F0" },
      { name: "Espresso", hex: "#25211F" }
    ],
    featured: false,
    newArrival: false,
    bestseller: true
  },
  {
    id: "jc-women-06",
    name: "Sculpted Asymmetrical Evening Column Gown",
    slug: "sculpted-asymmetrical-evening-column-gown",
    category: "women",
    subCategory: "Dresses",
    price: 1350,
    originalPrice: 1600,
    description: "A showstopping red-carpet creation. Crafted in sculptural heavy crepe with an architectural one-shoulder drape and a fitted column silhouette culminating in a side sweep train.",
    details: [
      "Architectural one-shoulder neckline with pleated shoulder fold",
      "Internal corsetry boning for flawless posture and fit",
      "High side split designed for fluid movement",
      "Hidden side zip closure"
    ],
    fabric: "Bonded Italian Heavy Crepe",
    care: "Specialist dry clean only",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Burgundy Noir", hex: "#641526" },
      { name: "Pure Ivory", hex: "#F8F5F0" }
    ],
    featured: true,
    newArrival: true,
    bestseller: true
  },

  // --- ACCESSORIES COLLECTION ---
  {
    id: "jc-acc-01",
    name: "Artisan Structured Leather Box Bag",
    slug: "artisan-structured-leather-box-bag",
    category: "accessories",
    subCategory: "Bags",
    price: 680,
    description: "Meticulously handcrafted in full-grain vegetable-tanned leather. Features gold-plated Judith's Closet hardware, suede microfiber lining, and a detachable shoulder strap.",
    details: [
      "Full-grain calfskin leather",
      "24K Gold-toned protective feet and push-lock clasp",
      "Removable & adjustable leather crossbody strap",
      "Dual interior compartments with zipped card slot"
    ],
    fabric: "Vegetable-Tanned Italian Leather",
    care: "Wipe with soft cloth, apply leather conditioner periodically",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Espresso Brown", hex: "#25211F" },
      { name: "Burgundy Wine", hex: "#641526" },
      { name: "Champagne Nude", hex: "#E8DFD2" }
    ],
    featured: true,
    newArrival: true,
    bestseller: true
  },
  {
    id: "jc-acc-02",
    name: "Printed Mulberry Silk Twill Scarf",
    slug: "printed-mulberry-silk-twill-scarf",
    category: "accessories",
    subCategory: "Scarves",
    price: 320,
    description: "A 90x90cm square silk scarf with hand-rolled and hand-stitched edges. Adorned with bespoke geometric and equestrian-inspired motifs in rich mocha, burgundy, and gold champagne.",
    details: [
      "100% Pure Mulberry Silk Twill (16 Momme)",
      "Traditional hand-rolled artisanal hem",
      "Dimensions: 90 cm x 90 cm (35.4 in x 35.4 in)",
      "Vibrant colorfast dyes with gentle sheen"
    ],
    fabric: "100% Mulberry Silk Twill",
    care: "Dry clean or hand wash cold with silk detergent",
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1200&auto=format&fit=crop"
    ],
    sizes: ["90x90 cm"],
    colors: [
      { name: "Burgundy & Champagne", hex: "#641526" },
      { name: "Espresso & Mocha", hex: "#80664E" }
    ],
    featured: false,
    newArrival: true,
    bestseller: false
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id || p.slug === id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: "men" | "women" | "accessories" | "all"): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.newArrival);
}
