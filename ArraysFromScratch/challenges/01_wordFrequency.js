'use strict';
const assert = require('assert');

/**
 * Count word frequency in a string.
 * - Normalize: lowercase, strip punctuation (keep apostrophes within words like don't).
 * - Split on whitespace.
 * - Return a Map<string, number> (or a plain object if you prefer, tests accept both).
 * - Ignore empty tokens.
 * Hints: `toLowerCase`, `replace`, `split`, `for...of`, `Map`, `has`, `set`.
 */
function wordFrequency(text) {
  // TODO: implement
  // return new Map([...]);
}

function toPlainObject(freq) {
  if (freq instanceof Map) {
    return Object.fromEntries(freq);
  }
  return freq;
}

// Tests
const input = "Hello, hello! Don't stop, don't stop the beat. HELLO?";
const out = toPlainObject(wordFrequency(input));
assert.strictEqual(out['hello'], 3);
assert.strictEqual(out["don't"], 2);
assert.strictEqual(out['stop'], 2);
assert.strictEqual(out['the'], 1);
assert.strictEqual(out['beat'], 1);

console.log("All tests passed");
module.exports = wordFrequency;
