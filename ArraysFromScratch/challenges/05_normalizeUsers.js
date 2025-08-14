'use strict';
const assert = require('assert');

/**
 * Parse a CSV-like string of users and normalize:
 * Input example (note inconsistent casing/whitespace):
 *   " id, Name , Email \n 1,  Alice , ALICE@example.com \n2,Bob,bob@example.com  \n"
 * Return array of { id: number, name: string, email: string } sorted by id.
 * - Trim fields, lowercase email, capitalize name (first letter upper, rest lower).
 * - Skip rows with missing fields.
 * - Ignore empty lines.
 * Hints: `split('\\n')`, `map`, `filter`, `slice`, `toLowerCase`, `trim`.
 */
function normalizeUsers(csvText) {
  // TODO
  // return []
}

// Tests
const csv = " id, Name , Email \n 1,  Alice , ALICE@example.com \n2,Bob,bob@example.com  \n \n3, , no@x.com";
const rows = normalizeUsers(csv);
assert.deepStrictEqual(rows, [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
]);

console.log("All tests passed");
module.exports = normalizeUsers;
