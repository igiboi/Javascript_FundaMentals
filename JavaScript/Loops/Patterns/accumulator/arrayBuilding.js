/*
PATTERN: Accumulator (Array Building)
DESCRIPTION: Building a new array from elements
WHEN TO USE: When you need to transform, filter, or collect items into a new array

KEY POINTS:
- Start value: [] (empty array)
- Operation: .push() (add to array)
- Return: After the loop completes
*/

// PROBLEM: Double every number in the array
function doubleNumbers(numbers) {
  // Your code here
  let result = [];

  for (let number of numbers) {
    result.push(number * 2);
  }
  return result;
}

// TEST CASES
console.log(doubleNumbers([1, 2, 3])); // Expected: [2, 4, 6]
console.log(doubleNumbers([5, 10, 15])); // Expected: [10, 20, 30]
console.log(doubleNumbers([0, -1, 7])); // Expected: [0, -2, 14]
console.log(doubleNumbers([])); // Expected: []
