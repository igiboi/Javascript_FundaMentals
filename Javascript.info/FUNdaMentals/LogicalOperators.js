// Four logical Operators
// 1. || (OR)
// 2. && (AND)
// 3. !(NOT)
// 4. ?? (Nullish Coalescing)

// || (OR)
console.log(true || true); // true

console.log(false || true); // true

console.log(true || false);  // true

console.log(false || false); // false

// As we can see, the result is always true except for the case when both operands are false.

// For instance, the number 1 is treated as true, the number 0 as false:

// if (1 || 0) { // works just like if( true || false )
//   alert('truthy!');
// }

let hour = 12;
let weekend = true;

if (hour < 10 || hour > 18 || weekend) {
    console.log('The office is closed.');
}
    
//   OR "||" finds the first truthy value
// The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

// The extended algorithm works as follows.

// Given multiple OR’ed values:

// result = value1 || value2 || value3;
// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

// && (AND)

// In classical programming, AND returns true if both operands are truthy and false otherwise:
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false