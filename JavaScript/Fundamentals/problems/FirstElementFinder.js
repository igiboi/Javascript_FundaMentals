/**
 * Finds the first element in the array for which the predicate returns true.
 * @param {Array} array - The array to search through
 * @param {Function} predicate - The test function that returns true for matching elements
 * @returns {*} The first element that passes the test, or undefined if none pass
 */
function findElement(array, predicate) {
  for (const element of array) {
    if (predicate(element)) {
      return element;
    }
  }
  return undefined;
}

// Test 1: Description of what you're testing
console.log("Test 1: Find first even number");
const result1 = findElement([1, 3, 5, 8], (num) => num % 2 === 0);
console.log("Expected: 8");
console.log("Got:", result1);
console.log("Pass:", result1 === 8);
console.log("---");

// Test 2: if it is undefined
console.log("Test 2: returns undefined");
const result2 = findElement([1, 3, 5, 9], (num) => num % 2 === 0);
console.log("Expected: undefined");
console.log("Got:", result2);
console.log("Pass:", result2 === undefined);
console.log("---");


// Test 3: Find first long string
console.log("Test 3: Find first string longer than 5 characters");
const result3 = findElement(["cat", "dog", "elephant"], (str) => str.length > 5);
console.log("Expected: elephant");  // What should it find?
console.log("Got:", result3);
console.log("Pass:", result3 === "elephant");  // Same answer
console.log("---");


// Test 4: Find first element when it's at the beginning
console.log("Test 4: Returns furs element when it matches");  // Write a description
const result4 = findElement([2, 4, 6, 8], (num) => num % 2 === 0);
console.log("Expected: 2");  // What should it return?
console.log("Got:", result4);
console.log("Pass:", result4 === 2);
console.log("---");
