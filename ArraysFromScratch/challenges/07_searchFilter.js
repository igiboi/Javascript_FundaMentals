'use strict';
const assert = require('assert');

/**
 * Search a collection (iterable) of items for those whose `title` or `tags` contain a query.
 * - `items` can be ANY iterable (Array, Set, Map values(), generator, etc.)
 * - Case-insensitive match.
 * - Return an array of matching items, preserving original iteration order.
 * Hints: accept (items, query) and use `for...of items` to iterate.
 */
function searchFilter(items, query) {
  // TODO
  // return []
}

// Tests
const items = [
  { id: 1, title: 'JavaScript Basics', tags: ['js','fundamentals'] },
  { id: 2, title: 'Advanced CSS', tags: ['css'] },
  { id: 3, title: 'Arrays & Iterables', tags: ['js','arrays'] },
];
const setItems = new Set(items);

assert.deepStrictEqual(searchFilter(items, 'js').map(x=>x.id), [1,3]);
assert.deepStrictEqual(searchFilter(setItems, 'ADV').map(x=>x.id), [2]);

console.log("All tests passed");
module.exports = searchFilter;
