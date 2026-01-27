/*
PATTERN: Accumulator (Conditional)
DESCRIPTION: Only accumulate items that meet a condition
WHEN TO USE: When you need to sum/count/collect only certain items

KEY POINTS:
- Same setup as regular accumulator
- Add an if statement inside the loop
- Only accumulate when condition is true
*/

// PROBLEM: Sum only the even numbers
function sumEvens(numbers) {
  // Your code here
  let result = 0;

  for (let number of numbers) {
    if (number % 2 === 0) {
      result += number;
    }
  }

  return result;
}

// TEST CASES
console.log(sumEvens([1, 2, 3, 4, 5, 6])); // Expected: 12 (2+4+6)
console.log(sumEvens([1, 3, 5, 7])); // Expected: 0 (no evens)
console.log(sumEvens([2, 4, 6])); // Expected: 12 (all evens)
console.log(sumEvens([])); // Expected: 0
