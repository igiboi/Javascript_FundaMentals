// split is a string method
str.split(separator, limit);
// it returns an array of substrings

// what it can do
// break text into smaller chunk (letters, words, etc.)
// clean or reformat data (like turning CSV "a,b,c" into an array)
// parse structured strings
// prepare strings for algorithms (like counting words, reversing letters)

// parameters

// 1. separator → what you want to cut on
// string (",", " ", "na")
// regex (/\s+/)
// if omitted → returns [str] (no split)

// 2. limit → max number of pieces to return
// e.g. split(",", 2) → cuts only twice


// 🔹 Core Situations (best use cases)

// by character: "hello".split("") → ["h","e","l","l","o"]

// by word: "one two three".split(" ") → ["one","two","three"]

// by line: "line1\nline2".split("\n") → ["line1","line2"]

// by custom marker: "a|b|c".split("|") → ["a","b","c"]

// limit results: "a,b,c,d".split(",", 2) → ["a","b"]


const data = "apple,banana,cherry";
console.log(data.split(","));
['apple', 'banana', 'cherry'];

const word = "hello";
console.log(word.split("")); 
// → ["h", "e", "l", "l", "o"]

// problem 1 
const str = "I am learning split";

const splitIntoWords = str.split(' ');

console.log(splitIntoWords);

// problem 2

const str2 = "JavaScript";

const splitIntoLetters = str2.split('');

console.log(splitIntoLetters);

// problem 3 
const data3 = 'apple,banana,cherry';

const splitIntoItems = data3.split(',');

console.log(splitIntoItems);

// problem 4
const str4 = "I love JS";

const extraSpaces = str4.split(" ");

console.log(extraSpaces); // [ 'I', 'love', 'JS' ]


// problem 5
const noSeparator = 'hello';

const checkForSeperator = noSeparator.split(',');

console.log(checkForSeperator); // [ 'hello' ]

// problem 6 
const alpha = 'a, b, c';

const limit = alpha.split(',', 2);

console.log(limit);
