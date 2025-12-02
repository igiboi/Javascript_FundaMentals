/* 

RESTATE: 
  Receive an array of items(object), 
  each object has property name of name, price, and quantity
    Calculate the total cost of all the items in the cart

Formula: totalPrice = price × quantity for each item, then sum them all up.

INPUTS/OUTPUTS:
  getTotalPrice([
    { name: "Apple", price: 1.50, quantity: 3 },
    { name: "Banana", price: 0.75, quantity: 2 }
  ])
  // Apple: 1.50 × 3 = 4.50
  // Banana: 0.75 × 2 = 1.50
  // Total: 4.50 + 1.50 = 6.00
  // returns: 6.00

TOOLS:
  let totalPrice = price × quantity;
  let totalSum = 0;

  for loop to traverse through the array of objects

     
CODE:
 */

function getTotalPrice(items) {
  let totalSum = 0;

  for (let item of items) {
    let totalPrice = item.price * item.quantity;
    totalSum += totalPrice;
  }

  return totalSum;
}


// STEP 7: TEST
console.log("Test 1:", getTotalPrice([
  { name: "Apple", price: 1.50, quantity: 3 },
  { name: "Banana", price: 0.75, quantity: 2 }
]));
// Expected: 6.00

console.log("Test 2:", getTotalPrice([
  { name: "Laptop", price: 999.99, quantity: 1 },
  { name: "Mouse", price: 25.50, quantity: 2 },
  { name: "Keyboard", price: 75.00, quantity: 1 }
]));
// Expected: 1125.99

console.log("Test 3:", getTotalPrice([
  { name: "Book", price: 12.99, quantity: 5 }
]));
// Expected: 64.95

console.log("Test 4:", getTotalPrice([]));
// Expected: 0