// src/data/products.js

// Import toate imaginile
import lapteEco from '../assets/images/products/dairy/naturepromise.jpg';
import iaurt from '../assets/images/products/dairy/iaurt.jpg';
import branza from '../assets/images/products/dairy/branza.jpg';
import pieptPui from '../assets/images/products/meat/piept-pui.jpg';
import muschiVita from '../assets/images/products/meat/muschi-vita.jpg';
import rosii from '../assets/images/products/vegetables/rosii.jpg';
import castraveti from '../assets/images/products/vegetables/castraveti.jpg';

export const dairyProducts = [
  {
    id: 1,
    name: "Lapte Eco 3.5%",
    price: "8,99",
    unit: "lei",
    image: lapteEco,
    category: "dairy"
  },
  {
    id: 2,
    name: "Iaurt Natural 2%",
    price: "12,09",
    unit: "lei",
    image: iaurt,
    category: "dairy"
  },
  {
    id: 3,
    name: "Brânză de vaci",
    price: "15,50",
    unit: "lei",
    image: branza,
    category: "dairy"
  }
];

export const meatProducts = [
  {
    id: 1,
    name: "Piept de pui",
    price: "28,99",
    unit: "lei",
    image: pieptPui,
    category: "meat"
  },
  {
    id: 2,
    name: "Muschi de vită",
    price: "89,90",
    unit: "lei",
    image: muschiVita,
    category: "meat"
  }
];

export const vegetableProducts = [
  {
    id: 1,
    name: "Roșii Bio",
    price: "7,50",
    unit: "lei",
    image: rosii,
    category: "vegetables"
  },
  {
    id: 2,
    name: "Castraveți",
    price: "6,20",
    unit: "lei",
    image: castraveti,
    category: "vegetables"
  }
];