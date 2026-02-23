// Higher-order function 
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i)); // Callback transforms each element
  }
  return result;
}

// Now use it with DIFFERENT callbacks (infinite flexibility)
const numbers = [1, 2, 3, 4];

const doubled = myMap(numbers, n => n * 2);
console.log(doubled); //[ 2, 4, 6, 8 ]

const squared = myMap(numbers, n => n * n);
console.log(squared); //[ 1, 4, 9, 16 ]

const withIndex = myMap(numbers, (n, i) => `${i}: ${n}`);
console.log(withIndex); // ["0: 1", "1: 2", "2: 3", "3: 4"]


function doubleAll(numbers) {
  return numbers.map(number => number * 2);
}

console.log(doubleAll([1, 2, 3, 4]));  // Expected: [2, 4, 6, 8]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

function getNames(users) {
  return users.map(user => user.name);
}

console.log(getNames(users));  // Expected: ["Alice", "Bob", "Charlie"]


function formatPrices(prices) {
  return prices.map(price => "$" + price + ".00");
}

console.log(formatPrices([10, 20, 5]));  // Expected: ["$10.00", "$20.00", "$5.00"]