/*
  ============================================
  CLOSURES — Notes & Reference
  ============================================
*/


// ---- WHAT IS A CLOSURE? ----
// A closure is when an inner function remembers the variables from its
// outer (enclosing) scope, even after that outer function has finished running.

// In other words: the inner function "closes over" the variables around it
// and keeps them alive.

// ---- VISUAL BREAKDOWN ----
//
//  function makeCounter() {
//  │
//  │   let count = 0;          ← count lives HERE, in makeCounter's scope
//  │
//  │   return function() {     ← this inner function is created inside makeCounter
//  │   │
//  │   │   count++;            ← inner function reaches UP and grabs count
//  │   │   return count;
//  │   │
//  │   └── }                   ← when this function is returned, it takes count with it
//  │                              (like packing it in a backpack)
//  └── }
//
//  const counter = makeCounter();
//  ↑
//  makeCounter() has NOW FINISHED running.
//  Normally, count would be gone. Garbage collected. Dead.
//
//  But counter still holds a reference to that inner function —
//  and that inner function still has count in its backpack.
//
//  counter(); // 1  ← count is still there. still 0, now becomes 1.
//  counter(); // 2  ← same count. now becomes 2.
//  counter(); // 3  ← same count. now becomes 3.
//
//  count never resets because makeCounter() only ran ONCE.
//  The inner function was created once, and it closed over ONE count variable.
//  Every call to counter() is using that same variable.
//
//  Compare this to calling makeCounter() twice:
//
//  const counterA = makeCounter(); // creates its OWN count = 0
//  const counterB = makeCounter(); // creates a SEPARATE count = 0
//
//  counterA(); // 1
//  counterA(); // 2
//  counterB(); // 1  ← counterB has no idea counterA exists. separate backpack.


// ---- WHY DOES THIS MATTER? ----
// Closures let you:
//   1. Keep data private (can't be accessed from outside)
//   2. Preserve state between function calls (without using global variables)
//   3. Create factory functions — functions that generate other functions


// ---- EXAMPLE 1: Basic closure ----
function makeCounter() {
  let count = 0; // this variable is "closed over" by the inner function

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// KEY POINT: count does NOT reset on each call.
// makeCounter() ran once and finished — but the inner function
// still holds a reference to count in its closure.
// Each call to counter() uses the SAME count variable.


// ---- EXAMPLE 2: Private data ----
// count is completely inaccessible from outside — you can only interact
// with it through the returned function. This is how closures enforce privacy.

// console.log(count); // ❌ ReferenceError: count is not defined

// WHY is count private?
// count was declared inside makeCounter(). That means it only exists
// inside that function's scope. Nothing outside can reach in and touch it.
//
// The ONLY way to interact with count is through the inner function
// that makeCounter returned — and even then, you can only increment it.
// You can't read it directly, you can't reset it, you can't set it to
// whatever you want. The closure controls all access.
//
// This is exactly how private state works in JavaScript.
// There is no "private" keyword here — the scope rules enforce it naturally.
//
// Visual:
//
//  makeCounter() scope
//  ┌──────────────────────────────┐
//  │  let count = 0               │  ← only visible in here
//  │                              │
//  │  inner function              │  ← can see count (it's in the same scope)
//  └──────────────────────────────┘
//           ↑
//           outside code CANNOT reach in here
//           counter() is the only door — and it only lets you increment
//
// Compare this to a global variable:
//
//  let count = 0; // ← anyone can read it, change it, reset it, break it
//
//  function increment() {
//    count++;
//  }
//
//  count = 999; // ← any code anywhere can do this. no protection at all.
//
// With a closure, that can't happen. count is locked inside makeCounter's scope.
// This is one of the main reasons closures matter in real applications.


// ---- EXAMPLE 3: Factory function ----
// A factory function uses closures to create customized functions.

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// double and triple each closed over a DIFFERENT multiplier value.
// They are independent — changing one does not affect the other.


// ---- MENTAL MODEL ----
// Think of a closure as a function with a backpack.
// When the inner function is created, it packs up any variables
// from the surrounding scope into that backpack.
// It carries that backpack with it wherever it goes,
// even after the outer function is done.


// ---- COMMON INTERVIEW QUESTIONS & ANSWERS ----
// Read these, cover the answers, and quiz yourself out loud.


// Q1: What is a closure?
// A: A closure is when an inner function remembers the variables from its
//    outer function's scope, even after that outer function has finished executing.


// Q2: Why doesn't the variable reset to its initial value on every call?
// A: Because JavaScript's garbage collector only destroys variables when nothing
//    references them anymore. The inner function still holds a reference to that
//    variable, so the garbage collector keeps it alive. Since the outer function
//    only runs once, only one variable is ever created — every call to the
//    returned function uses that same variable.


// Q3: How do closures enable private state?
// A: The variable is declared inside the outer function's scope. Scope rules
//    prevent anything outside from reaching in and touching it directly.
//    The only way to interact with it is through the inner function that was
//    returned. You control exactly what that function allows — read, mutate, etc.


// Q4: What is a factory function?
// A: A function that returns another function, where each returned function
//    closes over its own private copy of the outer variables. That's what makes
//    each returned function independent — they each have their own closure scope.


// Q5: What is the classic loop + closure gotcha?
// A: Covered in drills — when you create functions inside a loop using var,
//    all functions share the same variable instead of each closing over
//    their own copy. Fix: use let (block-scoped) or wrap in an IIFE.
