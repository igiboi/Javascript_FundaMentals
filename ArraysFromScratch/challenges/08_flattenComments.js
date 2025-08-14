'use strict';
const assert = require('assert');

/**
 * Flatten a nested comment tree into a flat array (preorder).
 * Each node: { id, text, replies: Comment[] }
 * Return array of ids in traversal order.
 * Hints: recursion with for...of; OR using `flatMap` cleverly.
 */
function flattenComments(root) {
  // TODO
  // return []
}

// Tests
const thread = {
  id: 1, text: 'root', replies: [
    { id: 2, text: 'child A', replies: [] },
    { id: 3, text: 'child B', replies: [
      { id: 4, text: 'grandchild', replies: [] }
    ] }
  ]
};
assert.deepStrictEqual(flattenComments(thread), [1,2,3,4]);

console.log("All tests passed");
module.exports = flattenComments;
