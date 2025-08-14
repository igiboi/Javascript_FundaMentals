'use strict';
const assert = require('assert');

/**
 * Split an array into chunks of size `size`.
 * - Last chunk may be shorter.
 * - Throw if size <= 0.
 * Hints: for-loop stepping by size, or slice in a loop.
 */
function chunkArray(arr, size) {
  // TODO
  // return [...]
}

// Tests
assert.deepStrictEqual(chunkArray([1,2,3,4,5], 2), [[1,2],[3,4],[5]]);
assert.deepStrictEqual(chunkArray([1,2,3], 3), [[1,2,3]]);

let threw = false;
try { chunkArray([1,2], 0); } catch (e) { threw = true; }
assert.ok(threw);

console.log("All tests passed");
module.exports = chunkArray;
