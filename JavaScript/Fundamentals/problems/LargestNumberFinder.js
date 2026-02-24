// ============================================
// PROBLEM: Return the largest number from each sub-array
// INPUT: [[4, 5, 1], [13, 27, 18], [32, 35, 37]]
// OUTPUT: [5, 27, 37]
// ============================================

// Version 1: Imperative (nested loops)
function largestOfAll_v1(arrays) {
  const largestNumbers = [];

  for (const subArray of arrays) {
    let largestInSubArray = subArray[0];

    for (const number of subArray) {
      if (number > largestInSubArray) {
        largestInSubArray = number;
      }
    }
    largestNumbers.push(largestInSubArray);
  }
  return largestNumbers;
}

// Version 2: Functional (map + Math.max)
function largestOfAll_v2(arrays) {
  return arrays.map(subArray => Math.max(...subArray));
}

// ============================================
// 🎓 LEARNING BREAKDOWN: Version 2 Explained
// ============================================

/*
Let's break down this ONE line:
  return arrays.map(subArray => Math.max(...subArray));

This replaces 13 lines of loops! Let's understand WHY and HOW.
*/

// CONCEPT 1: What is .map()?
// ----------------------------------------
// map() is an ARRAY METHOD that transforms each item in an array
// It creates a NEW array with the transformed items

// Simple example:
const simpleNumbers = [1, 2, 3];
const doubled = simpleNumbers.map(num => num * 2);
// Result: [2, 4, 6]
// Translation: "For each num, multiply it by 2"

// CONCEPT 2: Arrow Functions (=>)
// ----------------------------------------
// This is shorthand for writing functions

// Old way (you might be familiar with):
function double(num) {
  return num * 2;
}

// Arrow function way (ES6+):
const doubleArrow = (num) => num * 2;

// Even shorter (one parameter, no curly braces):
const doubleShorter = num => num * 2;

// They're the SAME thing! Arrow functions are just shorter syntax.

// CONCEPT 3: The Spread Operator (...)
// ----------------------------------------
// The ... "unpacks" or "spreads" an array into individual items

const myArray = [4, 5, 1];

// WITHOUT spread:
console.log(myArray);        // Output: [4, 5, 1] (still an array)

// WITH spread:
console.log(...myArray);     // Output: 4 5 1 (individual numbers)

// Why does this matter? Because Math.max() needs individual numbers:
Math.max([4, 5, 1]);         // ❌ Returns NaN (doesn't work with arrays)
Math.max(...[4, 5, 1]);      // ✅ Returns 5 (works!)
// Same as writing: Math.max(4, 5, 1)

// CONCEPT 4: Putting It All Together
// ----------------------------------------
// Let's trace through Version 2 step-by-step

function largestOfAll_v2_EXPLAINED(arrays) {
  // Step 1: arrays.map() loops through each subArray
  // Step 2: For EACH subArray, we run this arrow function:
  //         subArray => Math.max(...subArray)
  // Step 3: Math.max(...subArray) spreads the array and finds the max
  // Step 4: map() collects all the max values into a new array
  // Step 5: We return that new array

  return arrays.map(subArray => Math.max(...subArray));
}

// Let's trace with real data:
// Input: [[4, 5, 1], [13, 27, 18], [32, 35, 37]]

// First iteration:
//   subArray = [4, 5, 1]
//   Math.max(...[4, 5, 1]) = Math.max(4, 5, 1) = 5

// Second iteration:
//   subArray = [13, 27, 18]
//   Math.max(...[13, 27, 18]) = Math.max(13, 27, 18) = 27

// Third iteration:
//   subArray = [32, 35, 37]
//   Math.max(...[32, 35, 37]) = Math.max(32, 35, 37) = 37

// map() collects: [5, 27, 37] ← This is what gets returned!

// VISUAL COMPARISON: Version 1 vs Version 2
// ----------------------------------------

// Version 1 (What you're used to):
function v1_stepByStep(arrays) {
  const results = [];                    // Create empty array

  for (const subArray of arrays) {       // Loop through each subArray
    let largest = subArray[0];           // Start with first number

    for (const num of subArray) {        // Loop through each number
      if (num > largest) {               // Compare
        largest = num;                   // Update if bigger
      }
    }

    results.push(largest);               // Add to results array
  }

  return results;                        // Return the array
}

// Version 2 (Functional approach):
function v2_oneLiner(arrays) {
  return arrays.map(subArray => Math.max(...subArray));
  // Translation: "Transform each subArray into its maximum value"
}

// Both do THE EXACT SAME THING! Version 2 is just more concise.

// WHY use Version 2?
// ----------------------------------------
// 1. Less code = fewer bugs
// 2. Easier to read once you know map()
// 3. No manual state management (no results array to manage)
// 4. This is how React code is written (you'll see map() EVERYWHERE)
// 5. Modern JavaScript convention

// WHY did you learn Version 1 first?
// ----------------------------------------
// 1. You need to understand loops to understand map()
// 2. map() is just a loop under the hood!
// 3. Sometimes you NEED loops for complex logic
// 4. Understanding both makes you a better developer

// PRACTICE CHALLENGE:
// ----------------------------------------
// Can you write a function that doubles each number in each subArray?
// Input: [[1, 2], [3, 4]]
// Output: [[2, 4], [6, 8]]
//
// Hint: You'll need map() TWICE (once for outer array, once for inner arrays)
// Try it below!

// YOUR SOLUTION: ✅ CORRECT!
function doubleSubArray(array) {
  return array.map(subArray => subArray.map(element => element * 2));
  //              ↑ OUTER map             ↑ INNER map
  // Outer: loops through each subArray
  // Inner: loops through each element in the subArray
}

// 🎓 WHY THIS IS IMPORTANT:
// This nested map() pattern is EVERYWHERE in React for:
// - Rendering lists of lists (like nested menus)
// - Transforming nested API data
// - Building complex UI components

// ============================================
// 🎤 HOW TO EXPLAIN YOUR CODE (Interview-Ready)
// ============================================

/*
EXPLAINING doubleSubArray - Version 3 (Detailed but Easy):

"This function takes a 2D array and returns a new 2D array with all values
doubled. Let me walk through how it works:

The outer map method iterates through each sub-array in the input array.
For each iteration, it returns the result of an inner map operation on that
sub-array.

The inner map takes each element and applies the transformation of multiplying
it by 2.

The outer map collects these transformed sub-arrays into a new 2D array, which
is then returned.

This uses a functional programming approach—there are no mutations, no side
effects, just pure data transformation. The original array remains unchanged
because map creates new arrays rather than modifying existing ones."

KEY VOCABULARY I'M USING:
- "iterate/iterates" instead of "loop through"
- "returns the result" instead of "gives back"
- "applies the transformation" instead of "changes"
- "collects into" instead of "puts in"
- "functional programming approach" - shows I understand the paradigm
- "no mutations, no side effects" - shows I understand immutability
- "pure data transformation" - advanced concept
*/

// ============================================
// 🎤 EXPLAINING largestOfAll_v2 (Practice This!)
// ============================================

/*
TEMPLATE - Fill this in and practice out loud:

"This function takes a 2D array and returns an array containing the largest
number from each sub-array.

The map method iterates over each sub-array in the input array. For each
sub-array, I use the spread operator (...) to unpack the array into individual
arguments that Math.max can accept.

Math.max takes multiple number arguments and returns the largest one. Since
Math.max doesn't work with arrays directly, the spread operator is essential—it
converts [4, 5, 1] into Math.max(4, 5, 1).

The map method collects each maximum value into a new array, which is returned
as the final result.

This functional approach is more concise than nested loops and maintains
immutability by creating a new array rather than modifying the original data."

TRY IT YOURSELF - Say this out loud 3 times to build muscle memory!
*/

// ============================================
// 🎤 COMPARING v1 vs v2 (Show Your Expertise)
// ============================================

/*
WHEN ASKED: "Why did you choose the functional approach over loops?"

ANSWER:
"Both approaches solve the problem correctly, but I prefer the functional
approach with map for several reasons:

First, it's more declarative. Instead of describing HOW to loop through
indices and manage state, I'm describing WHAT transformation I want—find the
maximum of each sub-array.

Second, it's more maintainable. There's less code, which means fewer
opportunities for bugs. I don't have to manage a results array or worry about
loop conditions.

Third, it's more composable. If requirements change, I can easily chain
additional array methods like filter or reduce without restructuring the code.

Finally, this functional style is the convention in modern JavaScript and
React development, so it'll be more familiar to other developers on the team.

That said, I understand the imperative approach with loops is sometimes
necessary for complex logic or performance-critical code. Understanding both
approaches makes me a more versatile developer."

THIS SHOWS:
✅ Technical knowledge (declarative vs imperative)
✅ Code quality awareness (maintainability, bugs)
✅ Team collaboration mindset (conventions, familiarity)
✅ Balanced perspective (knowing when loops are better)
*/

// ============================================
// 📝 PRACTICE SCRIPT - READ THIS DAILY
// ============================================

/*
STEP 1: Point to your code
"Let me walk through this function line by line."

STEP 2: Describe the input/output
"It takes [describe input] and returns [describe output]."

STEP 3: Explain the approach
"I use [method/technique] to [describe what you're doing]."

STEP 4: Explain key concepts
"The [concept like spread operator] is necessary because [reason]."

STEP 5: Describe the result
"This [returns/produces/creates] [the output], and maintains [benefit like
immutability]."

STEP 6: (Optional) Explain why
"I chose this approach because [readability/performance/convention]."
*/

// ============================================
// 🎯 VOCABULARY CHEAT SHEET
// ============================================

/*
WHEN YOU SAY...              SAY THIS INSTEAD:
"loop through"          →    "iterate over"
"go through each"       →    "traverse" / "iterate through"
"change"                →    "transform" / "mutate"
"make a new array"      →    "return a new array" / "create a new array"
"give back"             →    "return"
"put in"                →    "collect into" / "accumulate into"
"break apart"           →    "unpack" / "spread" / "destructure"
"the ... thing"         →    use specific term: "method", "operator", "function"

ACTION VERBS TO USE:
✅ iterate, traverse, transform, return, collect, apply, evaluate,
   produce, invoke, compose, chain

CONCEPTS TO MENTION:
✅ immutability, pure function, side effects, declarative vs imperative,
   functional programming, higher-order function (map is one!)
*/

// ============================================
// TESTING SECTION
// ============================================
const testData = [
  [4, 5, 1],
  [13, 27, 18],
  [32, 35, 37],
  [32, 35, 37, 39],
];

console.log("=== Testing All Versions ===");
console.log("Expected:", [5, 27, 37, 39]);
console.log("V1 Result:", largestOfAll_v1(testData));
console.log("V2 Result:", largestOfAll_v2(testData));

console.log("\n=== Practice Challenge: Double Each Number ===");
console.log("Input:", [[1, 2], [3, 4]]);
console.log("Output:", doubleSubArray([[1, 2], [3, 4]]));
console.log("Expected:", [[2, 4], [6, 8]]);

// Test edge cases
console.log("\n=== Edge Cases ===");
console.log("Single item arrays:", largestOfAll_v1([[1], [2], [3]]));
console.log(
  "Negative numbers:",
  largestOfAll_v1([
    [-1, -5, -3],
    [10, 5],
  ]),
);
