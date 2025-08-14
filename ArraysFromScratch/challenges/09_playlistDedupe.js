'use strict';
const assert = require('assert');

/**
 * Given an array of track objects:
 * { id, title, artist, addedAt } where addedAt is ISO date string.
 * - Remove duplicate tracks by `id`, keeping the MOST RECENT (largest addedAt).
 * - Return tracks sorted by `addedAt` DESC (newest first).
 * - Do not mutate original array.
 * Hints: `reduce` to keep best by id, `Object.values`, `sort`.
 */
function playlistDedupe(tracks) {
  // TODO
  // return []
}

// Tests
const tracks = [
  { id: 'x', title: 'Song X', artist: 'A', addedAt: '2025-08-10T10:00:00Z' },
  { id: 'y', title: 'Song Y', artist: 'B', addedAt: '2025-08-11T10:00:00Z' },
  { id: 'x', title: 'Song X (dup)', artist: 'A', addedAt: '2025-08-12T10:00:00Z' },
];
const out = playlistDedupe(tracks);
assert.deepStrictEqual(out.map(t=>t.id), ['x','y']);
assert.ok(out[0].addedAt > out[1].addedAt);

console.log("All tests passed");
module.exports = playlistDedupe;
