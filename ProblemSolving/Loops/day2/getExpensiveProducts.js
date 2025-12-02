/* 
a function that recieves two parameters, first one array of objects, second one mininumPrice
depending on the value of minimumPrice, the function returns the name and price whatever is 


getExpensiveProducts([
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
], 50));
// Expected: [{ name: "Laptop", price: 999 }, { name: "Keyboard", price: 75 }]

TOOLS:
- for loop to loop through from start number up to including end number 
- console.log to print each number


*/

function getExpensiveProducts(products, minPrice) {
  let result = [];

  for (let product of products) {
    if (product.price >= minPrice) {
      result.push(product); // we juist need item to push the whole object
    }
  }

  return result;
}


console.log("Test 1:", getExpensiveProducts([
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
], 50));
// Expected: [{ name: "Laptop", price: 999 }, { name: "Keyboard", price: 75 }]

console.log("Test 2:", getExpensiveProducts([
  { name: "Apple", price: 1.50 },
  { name: "Steak", price: 12.99 }
], 5));
// Expected: [{ name: "Steak", price: 12.99 }]