// This is the combine function, which checks for even numbers and sums them.
function sumEvenNumbersCombine(current, element) {
  if (element % 2 === 0) {
    return current + element; // If the element is even, add it to the accumulator
  }
  return current; // If the element is odd, just return the current value (no change)
}

// Your `reduce` function, as provided earlier
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

// This function calls the `reduce` function, passing `sumEvenNumbersCombine` as the combine function
function sumEvenNumbers(array) {
  return reduce(array, sumEvenNumbersCombine, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 (2 + 4 + 6)
console.log(sumEvenNumbers([10, 15, 20, 25]));   // Output: 30 (10 + 20)
console.log(sumEvenNumbers([1, 3, 5, 7]));       // Output: 0 (no even numbers)