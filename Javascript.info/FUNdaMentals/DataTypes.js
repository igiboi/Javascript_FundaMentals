// 1. Number, number type represents both integer and flaoting point numbers
let n = 123;

// NaN, result of incorrect or an undefined mathematical operation

// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN

// 2. BigInt
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// 3. String
let str = 'Hello';
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`

// Backticks are “extended functionality” quotes.
// They allow us to embed variables and expressions into a string by wrapping them in ${…},
// for example:

let name = "John";

console.log(`Hello, ${name}!`) // Hello, John!

// The expression inside ${…} is evaluated and the result becomes a part of the string. 
// We can put anything in there: a variable like name or an arithmetical expression
//  like 1 + 2 or something more complex.