/* 
Problem: Given an array of product objects, return the total price of all products 

examples 

sumPrices([
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
])
// returns: 1099

sumPrices([
  { name: "Apple", price: 1.50 },
  { name: "Banana", price: 0.75 }
])
// returns: 2.25

sumPrices([])
// returns: 0

sumPrices([
  { name: "Book", price: 12.99 }
])
// returns: 12.99


 TRACE by hand 

 function sumPrices(products)
 we have a function that receives an array of objects 
 and we need to accumulate all the prices 
 this is a accumulate pattern so we need this 

 function accumulatePattern(items) {
  let total = 0;
  for (let item of items) {
    total += value;
  }
  return total;
}

*/

function sumPrices(products) {
  let totalPrice = 0;

  for (let product of products) {
    totalPrice += product.price;
  }

  return totalPrice;
}

console.log("Test 1:", sumPrices([
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
]));
// Expected: 1099

console.log("Test 2:", sumPrices([
  { name: "Apple", price: 1.50 },
  { name: "Banana", price: 0.75 }
]));
// Expected: 2.25

console.log("Test 3:", sumPrices([]));
// Expected: 0

console.log("Test 4:", sumPrices([
  { name: "Book", price: 12.99 }
]));
// Expected: 12.99