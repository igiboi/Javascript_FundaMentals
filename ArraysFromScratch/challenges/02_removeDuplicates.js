'use strict';
const assert = require('assert');

/**
 * Remove duplicates from an array while preserving order.
 * - Return a NEW array.
 * - Treat values strictly equal (===) as duplicates.
 * - Bonus: support arrays of objects by a key selector (optional second arg: getKey).
 *   If provided, values with same getKey(item) are considered duplicates.
 * Hints: `Set`, `includes`, `findIndex`, `map`.
 */
function removeDuplicates(arr, getKey) {
  // TODO
  // return [...]
}

// Tests
assert.deepStrictEqual(removeDuplicates([1,1,2,3,3,3,2,4]), [1,2,3,2,4]);
assert.deepStrictEqual(removeDuplicates(['a','a','b','A']), ['a','b','A']);
const users = [
  {id: 1, name: 'A'},
  {id: 1, name: 'A (dup)'},
  {id: 2, name: 'B'},
  {id: 2, name: 'B (dup)'},
];
assert.deepStrictEqual(removeDuplicates(users, u=>u.id).map(u=>u.id), [1,2]);

console.log("All tests passed");
module.exports = removeDuplicates;
