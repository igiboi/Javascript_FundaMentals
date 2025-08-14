'use strict';
const assert = require('assert');

/**
 * Parse tiny HTTP access logs (one per line) like:
 *   "2025-08-14 GET /api/users 200 123ms"
 * Return:
 * {
 *   requestsByMethod: { GET: n, POST: n, ... },
 *   avgLatencyMs: number,          // across all lines
 *   slowestPath: string,           // path with highest avg latency
 *   successRate: number            // % of lines with 2xx status
 * }
 * Hints: `split`, `trim`, `reduce`, numeric casts, grouping.
 */
function logParser(text) {
  // TODO
  // return {}
}

// Tests
const logs = [
  "2025-08-14 GET /api/users 200 123ms",
  "2025-08-14 POST /api/users 201 99ms",
  "2025-08-14 GET /api/users 503 210ms",
  "2025-08-14 GET /api/health 200 10ms",
].join("\n");
const stats = logParser(logs);
const keys = Object.keys(stats).sort();
assert.deepStrictEqual(keys, ['avgLatencyMs','requestsByMethod','slowestPath','successRate'].sort());
assert.strictEqual(stats.requestsByMethod.GET, 3);
assert.strictEqual(stats.requestsByMethod.POST, 1);
assert.strictEqual(Math.round(stats.avgLatencyMs), 111);
assert.strictEqual(stats.slowestPath, '/api/users');
assert.strictEqual(Math.round(stats.successRate), 75);

console.log("All tests passed");
module.exports = logParser;
