'use strict';
const assert = require('assert');

/**
 * Merge two sorted arrays (ascending) into a new sorted array.
 * - Linear time, O(n+m) using two pointers.
 * - Stable (keep left-to-right order for equal elements).
 * - Does NOT mutate inputs.
 * Hints: `while` with i, j; push smaller; then push remainder.
 */
function mergeSortedArrays(a, b) {
  // TODO
  // return [...]
}

// Tests
assert.deepStrictEqual(mergeSortedArrays([1,3,5], [2,4,6]), [1,2,3,4,5,6]);
assert.deepStrictEqual(mergeSortedArrays([], [1,2]), [1,2]);
assert.deepStrictEqual(mergeSortedArrays([0,2,2], [2,3]), [0,2,2,2,3]);

console.log("All tests passed");
module.exports = mergeSortedArrays;
