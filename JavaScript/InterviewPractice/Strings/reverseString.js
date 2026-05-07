/*
  Problem: Reverse a String
  -------------------------
  Write a function called reverseString that takes a string
  and returns it reversed.

  Constraint: you cannot use the built-in .reverse() method.

  Examples:
    reverseString("hello")      // "olleh"
    reverseString("JavaScript") // "tpircSavaJ"
    reverseString("a")          // "a"
*/

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));       // expected: "olleh"
console.log(reverseString("JavaScript"));  // expected: "tpircSavaJ"
console.log(reverseString("a"));           // expected: "a"
