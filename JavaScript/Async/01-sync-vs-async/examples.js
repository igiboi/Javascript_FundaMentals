// sync vs async — runnable examples
// Rule: PREDICT the output in the comment BEFORE you run `node examples.js`.

// ── Example 1: pure synchronous ───────────────────────────────
console.log("A");
console.log("B");
console.log("C");
// Predict order: ______


// ── Example 2: one async hand-off ─────────────────────────────
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Predict order: ______
// Why does 2 land where it does? ______


// ── Example 3: the "0ms is a lie" test ────────────────────────
setTimeout(() => console.log("first?"), 0);
console.log("actually first");
// Predict order: ______
// One-line reason: ______
