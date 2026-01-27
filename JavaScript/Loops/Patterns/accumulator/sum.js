/*
PATTERN: Accumulator (Sum)
DESCRIPTION: Adding numbers together to build a total
WHEN TO USE: When you need to calculate a sum, count, or total

KEY POINTS:
- Start value: 0 (because 0 + anything = that thing)
- Operation: += (addition)
- Return: After the loop completes
*/

// PROBLEM: Sum all numbers in an array
function sumArray(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  // 4. Return the result
  return result;
}

// TEST CASES
console.log(sumArray([1, 2, 3, 4, 5])); // Expected: 15
console.log(sumArray([10, 20, 30])); // Expected: 60
console.log(sumArray([])); // Expected: 0
console.log(sumArray([-5, 5])); // Expected: 0

