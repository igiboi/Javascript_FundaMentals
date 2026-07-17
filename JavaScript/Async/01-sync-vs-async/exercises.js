// sync vs async — exercises
// Solve these yourself first. Write your answer, then run `node exercises.js` to check.

// ── Exercise 1: Predict, then verify ──────────────────────────
// Write down the output order in the comment BEFORE running.
// Predicted order: ______
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");


// ── Exercise 2: Make it print in a specific order ─────────────
// GOAL: make this log exactly ->  one  two  three
// You may ONLY add a setTimeout(..., 0) around ONE of the logs.
// Which one, and why does that work?
console.log("one");
console.log("two");
console.log("three");


// ── Exercise 3: Explain in words (no code) ────────────────────
// A page fetches 500 users from an API. The request takes 2 seconds.
// Q1: In SYNChronous code, what happens to the UI during those 2s?
// A1:
// Q2: In ASYNChronous code, what happens to the UI during those 2s?
// A2:
// Q3: Does async make the request itself FASTER? Yes/No + one line why.
// A3:
