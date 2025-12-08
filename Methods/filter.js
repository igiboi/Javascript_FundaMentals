// Given an array of products with prices, return only products
// that cost between $10 and $50 (inclusive)
const products = [
  { name: "shirt", price: 25 },
  { name: "shoes", price: 80 },
  { name: "hat", price: 15 },
  { name: "socks", price: 8 },
];

// Your goal: filter to get products in price range
// we get an array of product and return an object of products that 
// cost between 10 and 50 (inclusive)
// how should the output look?

// filter is correct here - you want multiple results
const inRange = products.filter(p => p.price >= 10 && p.price <= 50);

console.log(inRange);