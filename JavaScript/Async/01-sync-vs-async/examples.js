// sync vs async — runnable examples
// Rule: PREDICT the output in the comment BEFORE you run `node examples.js`.

// ── Example 1: pure synchronous ───────────────────────────────
console.log("A");
console.log("B");
console.log("C");
// Predict order: A, B, C


// ── Example 2: one async hand-off ─────────────────────────────
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Predict order: 1, 3, 2
// Why does 2 land where it does? 
// setTimeout's callback is handed to the Web APIs, 
// so JS doesn't wait — it finishes all synchronous code first. 
// Only when the call stack is empty does the event loop pull the callback 
// from the callback queue and run it.



// ── Example 3: the "0ms is a lie" test ────────────────────────
setTimeout(() => console.log("first?"), 0);
console.log("actually first");
// Predict order: actually first, first? 
// One-line reason: 
// setTimeout's callback is handed to the Web APIs, 
// so JS doesn't wait — it finishes all synchronous code first. 
// Only when the call stack is empty does the event loop pull the callback 
// from the callback queue and run it.
