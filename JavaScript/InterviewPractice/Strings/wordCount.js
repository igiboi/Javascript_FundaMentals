// Problem: Write a function called wordCount that takes a string as a parameter.
// Return an object where each key is a word and the value is the number of times it appears.
// Example: wordCount("the cat sat on the mat the cat") => { the: 3, cat: 2, sat: 1, on: 1, mat: 1 }

const str = "the cat sat on the mat the cat";

function wordCount(str) {
  return str
    .split(" ")
    .reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr]++;
      }
      return acc;
    }, {});
}

console.log(wordCount(str));

function wordCount(str) {
  return str.split(" ").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

