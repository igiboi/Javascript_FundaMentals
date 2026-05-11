/*
  Problem: Flatten a Nested Array
  ---------------------------------
  Write a function called flattenArray that takes an array
  that may contain nested arrays and returns a single flat array
  with all values.

  Only one level of nesting guaranteed for now.

  Examples:
    flattenArray([1, [2, 3], [4, 5]])         // [1, 2, 3, 4, 5]
    flattenArray([[1, 2], [3, 4], [5, 6]])    // [1, 2, 3, 4, 5, 6]
    flattenArray([1, 2, 3])                   // [1, 2, 3]
    flattenArray([[1, [2]], 3])               // [1, [2], 3]
*/

function flattenArray(arr) {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const value of element) {
        result.push(value);
      }
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, 3], [4, 5]]));        // expected: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));   // expected: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, 2, 3]));                  // expected: [1, 2, 3]
console.log(flattenArray([[1, [2]], 3]));               // expected: [1, [2], 3]
