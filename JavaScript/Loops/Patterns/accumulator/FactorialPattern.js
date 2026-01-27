/*
PATTERN: Accumulator (Product)
DESCRIPTION: Multiplying numbers together
WHEN TO USE: When you need to calculate a product, factorial, or compound value

KEY POINTS:
- Start value: 1 (because 1 * anything = that thing)
- Operation: *= (multiplication)
- Return: After the loop completes
*/

// PROBLEM: Calculate the product of all numbers in an array
function productArray(numbers) {
  // Your code here
  let result = 1;

  for (let number of numbers) {
    result *= number;
  }

  return result;
}

// TEST CASES
console.log(productArray([1, 2, 3, 4])); // Expected: 24
console.log(productArray([5, 5, 5])); // Expected: 125
console.log(productArray([10, 0, 5])); // Expected: 0
console.log(productArray([])); // Expected: 1 (empty product)
