// Problem: Write a function called charCount that takes a string as a parameter.
// Return an object where each key is a character and the value is the number of times it appears.
// Example: charCount("hello") => { h: 1, e: 1, l: 2, o: 1 }

const str = "hello";

function charCount(str) {
 return str
  .split("")
  .reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
}

console.log(charCount(str));