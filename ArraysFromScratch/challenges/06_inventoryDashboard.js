'use strict';
const assert = require('assert');

/**
 * Given products:
 * [
 *  { sku:'A', price: 10, stock: 5, category: 'books' },
 *  { sku:'B', price: 20, stock: 0, category: 'games' },
 * ]
 * Return an object:
 * {
 *   totalSkus,
 *   inStockSkus,            // count with stock > 0
 *   outOfStockSkus,         // count with stock === 0
 *   categories,             // array of unique category names (sorted)
 *   totalValueInStock,      // sum(price * stock) across in-stock
 *   hasAnyFreebies,         // true if any price === 0
 *   allHaveSku,             // true if every product has non-empty sku string
 * }
 * Hints: `map`, `filter`, `reduce`, `some`, `every`, `new Set()`, spread.
 */
function inventoryDashboard(products) {
  // TODO
  // return { ... }
}

// Tests
const products = [
  { sku:'A', price: 10, stock: 5, category: 'books' },
  { sku:'B', price: 20, stock: 0, category: 'games' },
  { sku:'C', price: 0,  stock: 3, category: 'books' },
];
const dash = inventoryDashboard(products);
assert.deepStrictEqual(Object.keys(dash).sort(), [
  'allHaveSku','categories','hasAnyFreebies','inStockSkus','outOfStockSkus','totalSkus','totalValueInStock'
].sort());
assert.strictEqual(dash.totalSkus, 3);
assert.strictEqual(dash.inStockSkus, 2);
assert.strictEqual(dash.outOfStockSkus, 1);
assert.deepStrictEqual(dash.categories, ['books','games']);
assert.strictEqual(dash.totalValueInStock, 10*5 + 0*3);
assert.strictEqual(dash.hasAnyFreebies, true);
assert.strictEqual(dash.allHaveSku, true);

console.log("All tests passed");
module.exports = inventoryDashboard;
