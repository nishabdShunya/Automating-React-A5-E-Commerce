import theDivisionBell from "./assets/the_division_bell.jpg";
import theEndlessRiver from "./assets/the_endless_river.jpg";
import obscuredByClouds from "./assets/obscured_by_clouds.jpg";
import theDarkSideOfMoon from "./assets/the_dark_side_of_moon.jpg";
import meddle from "./assets/meddle.jpg";
import animals from "./assets/animals.jpg";
import tshirt from "./assets/pf_tshirt.jpg";
import coffeeMug from "./assets/pf_coffee_mug.png";
import wallet from "./assets/pf_wallet.jpg";
import rahul from "./assets/pr_rahul.png";
import neha from "./assets/pr_neha.png";
import amit from "./assets/pr_amit.png";
import priya from "./assets/pr_priya.png";
import sandeep from "./assets/pr_sandeep.png";

export const DUMMY_ALBUMS = [
  {
    id: "a1",
    title: "The Division Bell",
    price: 10,
    imageSrc: theDivisionBell,
  },
  {
    id: "a2",
    title: "The Endless Mirror",
    price: 15,
    imageSrc: theEndlessRiver,
  },
  {
    id: "a3",
    title: "Obscured By Clouds",
    price: 7,
    imageSrc: obscuredByClouds,
  },
  {
    id: "a4",
    title: "The Dark Side of Moon",
    price: 9,
    imageSrc: theDarkSideOfMoon,
  },
  {
    id: "a5",
    title: "Meddle",
    price: 12,
    imageSrc: meddle,
  },
  {
    id: "a6",
    title: "Animals",
    price: 19,
    imageSrc: animals,
  },
];

export const DUMMY_MERCHANDISE = [
  {
    id: "m1",
    title: "T-Shirt",
    price: 15,
    imageSrc: tshirt,
  },
  {
    id: "m2",
    title: "Coffee Mug",
    price: 7,
    imageSrc: coffeeMug,
  },
  {
    id: "m3",
    title: "Wallet",
    price: 11,
    imageSrc: wallet,
  },
];

export const ALL_PRODUCTS = [...DUMMY_ALBUMS, ...DUMMY_MERCHANDISE];

export const DUMMY_CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Rahul Sharma",
    review:
      "I recently purchased this product and I am incredibly impressed. The quality is top-notch, and the performance exceeds my expectations. It's a great investment, and I highly recommend it to others. The customer service was also excellent, providing me with quick and helpful responses to my inquiries.",
    photo: rahul,
  },
  {
    id: 2,
    name: "Neha Kapoor",
    review:
      "I had a wonderful experience with this company. The service was exceptional, with lightning-fast delivery and incredibly helpful customer support. The product itself is of high quality, and I appreciate the attention to detail in its design. Overall, I am a satisfied customer and will definitely consider purchasing from them again in the future.",
    photo: neha,
  },
  {
    id: 3,
    name: "Amit Singh",
    review:
      "I recently bought this product, and I must say, it offers impressive features at a reasonable price point. The functionality is superb, and I am thoroughly satisfied with my purchase. The company has done an excellent job in delivering a product that meets and exceeds user expectations. I would happily recommend this to my friends and family.",
    photo: amit,
  },
  {
    id: 4,
    name: "Priya Patel",
    review:
      "The user interface of this product is incredibly easy to navigate. I was pleasantly surprised by its simplicity and efficiency. The product not only met but exceeded my expectations. The build quality is remarkable, and I can see it lasting for a long time. I'm extremely pleased with my purchase and would highly recommend it to others.",
    photo: priya,
  },
  {
    id: 5,
    name: "Sandeep Verma",
    review:
      "I encountered a minor issue with the product, but the support team was quick to respond and resolved the issue promptly. Their customer service is excellent, and I appreciate the dedication to customer satisfaction. Despite the initial hiccup, I am happy with the product and the overall service provided by the company.",
    photo: sandeep,
  },
];
