const rawInput = ["  Hello ", "world", "  ", "", "JavaScript", "  FOO  ", ""];

/* 
Write a function cleanInput that returns only the non-empty strings,
trimmed of whitepsace and converted to lowercase

Expected: cleanInput(rawInput) → ["hello", "world", "javascript", "foo"]
*/


/*
cleanInput is a function that takes one parameter rawInput, 
which is an array of strings.
The function has a direct return statement that method chains 
.map() and .filter() on rawInput.
First, .map() is called with a callback function that receives
each string, trims its whitespace with .trim(), and converts it 
to lowercase with .toLowerCase(). .map() collects each transformed 
string and returns a new array.
.filter() is then called on that new array. Its callback uses 
JavaScript's truthiness rules an empty string is falsy, so 
.filter() removes it. Any non-empty string is truthy, so it stays. 
.filter() returns a new array of only the valid strings.

*/

function cleanInput(rawInput) {
  return rawInput
    .map((input) => input.trim().toLowerCase())
    .filter((input) => input);
}

