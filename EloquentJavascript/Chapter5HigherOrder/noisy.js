function noisy(f) {
  // f is Math.min here, because that’s what we passed in
  console.log('is f === Math.min?', f === Math.min); // → true

  return (...args) => {
    console.log('calling with', args);
    let result = f(...args); // f(...) is Math.min(...)
    console.log('called with', args, ', returned', result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// Logs:
// → is f === Math.min? true
// → args is [3, 2, 1] = calling with [3, 2, 1]
// → f(...args) becomes Math.min(3, 2, 1) → which returns 1 = called with [3, 2, 1] , returned 1


// how (...args) behave

//Parameter side, Collect args into an array
// function sum(...nums) {}

// Spreading array into separate arguments	
// Call side	sum(...[1, 2, 3])


// 1. Parameter side ((...args)) → COLLECTS into an array
function example(...args) {
  console.log(args);
}

example(5, 10, 15);
// Output: [5, 10, 15]

// 2. Call side (f(...args)) → SPREADS items out
// Math.min(...args);

// is the same as
// Math.min(5, 10, 15);


// Examples - Collecting arguments

// This is a function definition.
// ...nums is collecting arguments into an array.\

//If you see function (...) — or (...) => {...} ➔ you're in definition ➔ COLLECT mode.

function printArgs(...args) {
  console.log(args);
}

printArgs(1, 2, 3); // [1, 2, 3]
printArgs('a', 'b'); // ['a', 'b']
printArgs();        // []


// Example - Spread arguments

// If you see functionName(...something) ➔ you're in calling ➔ SPREAD mode.\

add(...[1, 2, 3]); // output: (1, 2, 3)

shout(...['hi', 'there']); // output: ("hi", "there")


//  If you want to accept any number of arguments (COLLECT)
// You must collect if you want users to call your function freely:

function sumAll(...nums) {
  console.log('nums:', nums);
  return nums.reduce((a, b) => a + b, 0);
}

// Example 1: Normal call
sumAll(1, 2, 3); 
// nums = [1,2,3]
// No spread needed when calling — just passing arguments

// Example 2: Spreading array
const numbers = [4,5,6];
sumAll(...numbers);
// nums = [4,5,6]
// Using spread operator because we already have an array