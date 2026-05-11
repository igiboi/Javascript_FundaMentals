/*
  Problem: Filter Objects by Property Value
  -------------------------------------------
  Write a function called filterByProperty that takes an array of objects,
  a key name, and a value, and returns a new array with only the objects
  where that key matches that value.

  Examples:
    const products = [
      { name: "Laptop", category: "Electronics", price: 999 },
      { name: "Phone", category: "Electronics", price: 699 },
      { name: "Shirt", category: "Clothing", price: 29 },
      { name: "Pants", category: "Clothing", price: 49 },
      { name: "Headphones", category: "Electronics", price: 199 }
    ];

    filterByProperty(products, "category", "Electronics")
    // [
    //   { name: "Laptop", category: "Electronics", price: 999 },
    //   { name: "Phone", category: "Electronics", price: 699 },
    //   { name: "Headphones", category: "Electronics", price: 199 }
    // ]

    filterByProperty(products, "category", "Clothing")
    // [
    //   { name: "Shirt", category: "Clothing", price: 29 },
    //   { name: "Pants", category: "Clothing", price: 49 }
    // ]
*/

const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Phone", category: "Electronics", price: 699 },
  { name: "Shirt", category: "Clothing", price: 29 },
  { name: "Pants", category: "Clothing", price: 49 },
  { name: "Headphones", category: "Electronics", price: 199 }
];

function filterByProperty(arr, key, value) {
  // your code here
  return arr.filter(product => product[key] === value);
}

console.log(filterByProperty(products, "category", "Electronics"));
console.log(filterByProperty(products, "category", "Clothing"));
