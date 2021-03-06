export interface Smartphone {
  id: number;
  ram: string;
  price: number;
  battery: string;
  camera: string;
  color: string;
  title: string;
  storage: string;
  imageUrl: string;
  description: string;
  brand: string;
}

export const Smartphones: Smartphone[] = [
  {
    id: 1,
    ram: "4Gb",

    price: 1099,

    battery: "4500mAh",
    camera: "12mp+12mp+5mp",
    color: "Grey /Gold /Balck",
    title: "iphone 11 pro",
    storage: "64/128/256 Gb",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1586586488946",
    description:
      "Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.",

    brand: "Apple",
  },
  {
    id: 2,
    battery: "4500mAh",
    camera: "108mp+12mp+5mp",

    price: 1299,

    ram: "12Gb",
    color: "Grey /Gold /Balck",

    title: "Note20 Ultra ",
    storage: "128/256/512 Gb",
    imageUrl:
      "https://deviceloop.com/wp-content/uploads/2020/07/SAMSUNG-GALAXY-NOTE-20-ULTRA-BRONZE-FRONT-WITH-SPEN-e1595883816861.jpg",
    description:
      "The minimal design features a metal body elevated by exquisite details and transcendent colors and durable Corning® Gorilla® Glass Victus™ — the toughest Gorilla Glass ever in a smartphone.1, 2 Each Galaxy Note20 and Note20 Ultra is complemented by a matching S Pen.",

    brand: "Samsung",
  },
  {
    id: 3,

    price: 899,

    battery: "4500mAh",
    camera: "64mp+16mp+5mp",

    ram: "12Gb",
    color: "Grey /Gold /Balck",

    title: "OnePlus 8 Pro ",
    storage: "128/256 Gb",
    imageUrl:
      "https://cdn.homeshopping.pk/product_images/l/555/1__05147_zoom.jpg",
    description:
      "The OnePlus 8 Pro's Fluid Engine ensures onscreen content flows seamlessly from one frame to the next, while innovative MEMC technology provides even smoother motion. Paired with a brilliant 6.78' QHD+ display* and 120 Hz refresh rate, it's love at first swipe.",

    brand: "OnePlus",
  },
  {
    id: 4,

    price: 1341,

    battery: "4500mAh",
    camera: "64mp+12mp+8mp",

    ram: "12Gb",
    color: "Grey /Gold /Balck",

    title: "Oppo Find X2 Pro ",
    storage: "128/256 Gb",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91sscTRuOzL._AC_SL1500_.jpg",
    description:
      "We’ve boosted the screen refresh rate from 60Hz to 120Hz for smoother, clearer motion that’s easier on the eyes. And thanks to a touch sampling rate of up to 240Hz, every touch gets an instant and accurate response.Find X2 series brings visuals to life with over 1 billion colours (8+2-bit) – 64 times the typical number (8-bit). Now, colour transitions look smooth, and every detail shines through in natural, lifelike vibrancy.",

    brand: "Oppo",
  },
];
