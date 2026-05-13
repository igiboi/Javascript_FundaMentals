/*
  Phase 3: Arrays + Objects Combined
  ------------------------------------
  These problems combine everything from Phase 1 and 2.
  This is the level of problems you will see in interviews.
*/

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999, inStock: true },
  { id: 2, name: "Phone", category: "Electronics", price: 699, inStock: false },
  { id: 3, name: "Shirt", category: "Clothing", price: 29, inStock: true },
  { id: 4, name: "Pants", category: "Clothing", price: 49, inStock: true },
  { id: 5, name: "Headphones", category: "Electronics", price: 199, inStock: true },
  { id: 6, name: "Jacket", category: "Clothing", price: 89, inStock: false }
];

// ---- PROBLEM 1 ----
// Only some products are available to buy. Return the ones that are.
// Expected output: array of 4 full product objects
const inStock = products.filter(product => product.inStock);
console.log(inStock);


// ---- PROBLEM 2 ----
// You need to display a price list. Return a new array where each item
// only contains what is needed for display.
// Expected output: [{ name: "Laptop", price: 999 }, { name: "Phone", price: 699 }, ...]
const namedPrice = products.map(product => ({ name: product.name, price: product.price }));
console.log(namedPrice);


// ---- PROBLEM 3 ----
// A user clicked on product with id 3. Return that product.
// Expected output: { id: 3, name: "Shirt", category: "Clothing", price: 29, inStock: true }
// your code here

const findProduct = products.find(product => product.id === 3);

console.log(findProduct);


// ---- PROBLEM 4 ----
// Display products from cheapest to most expensive.
// Expected output: products array sorted by price ascending
// skipped — revisit .sort() with a compare function later


// ---- PROBLEM 5 ----
// Calculate the total value of all products in the store.
// Expected output: 2064
// your code here

const total = products.reduce((acc, curr) => acc + curr.price, 0);

console.log(total)


// ---- PROBLEM 6 ----
// A customer wants to know the total price of Electronics that are currently available.
// Expected output: 1198
// your code here


const totalElectronics = products
  .filter((product) => product.category === "Electronics" && product.inStock)
  .reduce((total, curr) => total + curr.price, 0);

console.log(totalElectronics);