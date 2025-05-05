function filter(array, test) {
  let passed = []; // 1. Start with an empty result array
  for (let element of array) {
    // 2. For each element in the input array...
    if (test(element)) {
      //    — call the `test` function on it
      passed.push(element); //    — if `test` returns true, add it to `passed`
    }
  }
  return passed; // 3. After checking all, return the new array
}

const numbers = [10, 15, 20, 25, 30];

// Your turn: use .filter()
const result = numbers.filter(number => number > 20);

console.log(result);
// Expected output: [25, 30]

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Your turn: use .filter()
const longFruits = fruits.filter(fruit => fruit.length > 5);

console.log(longFruits);
// Expected output: ['banana', 'cherry']

const numbersEven = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbersEven.filter(number => number % 2 === 0);

console.log(even);
// Expected output: [2, 4, 6, 8]
