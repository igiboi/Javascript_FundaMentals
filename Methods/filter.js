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


// Custom Filter

// Higher-order function 
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// Different callbacks = different filtering rules


function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));   // ?
console.log(triple(5));   // ?
console.log(double(10));  // ?


function outerFunction() {
  const message = "Hello";  // Variable in outer scope
  
  function innerFunction() {
    return message;  // Inner function "remembers" message
  }
  
  return innerFunction;
}

const myFunction = outerFunction();  // outerFunction finishes
myFunction;  // "Hello" - But inner function still remembers message!

console.log(myFunction());