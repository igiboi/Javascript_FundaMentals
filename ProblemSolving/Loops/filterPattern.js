/*
================================================================================
THE 7-STEP FORMULA FOR WRITING CODE FROM SCRATCH
================================================================================
Use this EVERY time you see a problem. Make it automatic.

STEP 1: RESTATE THE PROBLEM
- Ask: "What am I actually being asked to do?"
- Write it in your own simple words
- Example: "I need to return a new array of even numbers"

STEP 2: IDENTIFY INPUTS AND OUTPUTS
- Ask: "What goes in? What comes out?"
- Write it down:
  // Input: recieve an array of numbers 
  // Output: return a new array of numberse

STEP 3: WALK THROUGH A SIMPLE EXAMPLE
- Ask: "If I did this by hand, what steps would I take?"
- Example: getEvens([1, 2, 3, 4, 5]) 
  Step 1: loop through the array
  Step 2: check if the element is even 
  Step 3: if true push it to the new array
  Step 4: keep the loop going until the end of the array
  Step 5: return the new array
  step 6: stop

STEP 4: IDENTIFY THE PATTERN
- Ask: "What pattern does this match?"
- Common patterns:
  🔁 Need to repeat? → Loop
  ✅ Need to decide? → Conditional (if/else)
  📦 Working with list? → Array + Loop
  🎯 Building result? → Accumulator
  🔍 Looking for item? → Find pattern
  🧹 Keep some items? → Filter pattern
  🔄 Change each item? → Transform pattern

  - I will need a loop
  - I will need a variable to hold the new array

STEP 5: WRITE PSEUDOCODE (Plain English)
- Ask: "What are the exact steps?"
- Example:
  loop through the array 
  Keep going until reach end of array
  For each number:
    - check if element is even
    - push the element to a new array
    - keep going until reach end of array

STEP 6: TRANSLATE TO CODE (One line at a time)
- Take each pseudocode line and write JavaScript
- Don't write everything at once
- Build incrementally

function getEven(numbers) {
  let result = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
}

STEP 7: TEST AND DEBUG
- Run with the examples
- Try edge cases
- If broken, add console.log() to see what's happening

*/
function getEvens(numbers) {
  let result = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
}

const resultOne = getEvens([1, 2, 3, 4, 5]);
console.log(resultOne); // returns: [2, 4]

const resultTwo = getEvens([10, 15, 20, 25]);
console.log(resultTwo); // returns: [10, 20]

const resultThree = getEvens([1, 3, 5]);
console.log(resultThree); // returns: []

const resultFour = getEvens([2, 4, 6, 8]);
console.log(resultFour); // returns: [2, 4, 6, 8]