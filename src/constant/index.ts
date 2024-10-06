import { TBabyProduct } from "@/types";

export const babyProducts: TBabyProduct[] = [
  {
    id: 1,
    name: "Pampers Baby-Dry Diapers",
    category: "Diapers",
    price: 25.99,
    rating: 4.8,
    reviews: 1200,
    stock: true,
    description: "Trusted overnight protection with 3 absorbent layers.",
    brand: "Pampers",
    ageRange: "0-12 months",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-diaper-isolated_53876-128184.jpg",
  },
  {
    id: 2,
    name: "Johnson's Baby Lotion",
    category: "Skin Care",
    price: 6.49,
    rating: 4.7,
    reviews: 950,
    stock: true,
    description: "Clinically proven mildness for baby’s delicate skin.",
    brand: "Johnson's",
    ageRange: "0+ months",
    imageUrl:
      "https://img.freepik.com/free-photo/white-baby-cosmetics-bottles-with-towel_144627-21465.jpg",
  },
  {
    id: 3,
    name: "Graco Pack 'n Play Playard",
    category: "Baby Gear",
    price: 89.99,
    rating: 4.6,
    reviews: 450,
    stock: false,
    description: "Portable playard with bassinet and changing station.",
    brand: "Graco",
    ageRange: "0-2 years",
    imageUrl:
      "https://img.freepik.com/free-photo/wooden-baby-crib-against-wall_23-2149269843.jpg",
  },
  {
    id: 4,
    name: "Gerber Organic Baby Food",
    category: "Food",
    price: 15.99,
    rating: 4.9,
    reviews: 320,
    stock: true,
    description: "Organic puree variety pack, ideal for first foods.",
    brand: "Gerber",
    ageRange: "6+ months",
    imageUrl:
      "https://img.freepik.com/free-photo/organic-healthy-baby-food-banana-apple-puree_144627-12388.jpg",
  },
  {
    id: 5,
    name: "Fisher-Price Deluxe Infant-to-Toddler Rocker",
    category: "Toys",
    price: 45.99,
    rating: 4.5,
    reviews: 890,
    stock: true,
    description:
      "Adjustable seat grows with your baby for rocking and feeding.",
    brand: "Fisher-Price",
    ageRange: "0-3 years",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-diaper-isolated_53876-128184.jpg",
  },
  {
    id: 6,
    name: "BabyBjörn Baby Carrier Mini",
    category: "Baby Gear",
    price: 79.99,
    rating: 4.7,
    reviews: 670,
    stock: true,
    description: "Soft, small, and simple to use, perfect for newborns.",
    brand: "BabyBjörn",
    ageRange: "0-12 months",
    imageUrl:
      "https://img.freepik.com/free-photo/baby-sling-mother-carrying-newborn-baby-wrap-carrier_1150-7854.jpg",
  },
  {
    id: 7,
    name: "Huggies Natural Care Baby Wipes",
    category: "Diapers & Wipes",
    price: 15.99,
    rating: 4.9,
    reviews: 5000,
    stock: true,
    description:
      "Plant-based wipes with 99% purified water for sensitive skin.",
    brand: "Huggies",
    ageRange: "0+ months",
    imageUrl:
      "https://img.freepik.com/free-photo/baby-wipes-isolated_23-2148653290.jpg",
  },
];

export const faqData = [
  {
    question: "What is the recommended age for using your baby products?",
    answer:
      "Our baby products are designed for newborns up to 3 years old. However, each product comes with specific guidelines for the recommended age range.",
  },
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes, our products are dermatologically tested and safe for babies with sensitive skin. We use hypoallergenic and non-toxic ingredients.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we will send you a tracking number via email. You can use this number to track your package on our website or through the carrier’s site.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all products. Items must be unused and in their original packaging. Please contact our support team to initiate a return.",
  },
];
