// Problem: Write a function called mostFrequentChar that takes a string as a parameter.
// Return the character that appears the most times in the string.
// Example: mostFrequentChar("hello") => "l"
// Example: mostFrequentChar("javascript") => "a"

const str1 = "hello";
const str2 = "javascript";

function mostFrequentChar(str) {
  const charCount = str
    .split("")
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, 
    {});
    
  let highestChar = "";
  let countChar = 0;
  
  for (const key in charCount) {
  if (charCount[key] > countChar) {
    countChar = charCount[key];
    highestChar = key;
  }

  }
  return highestChar;

}

const result1 = mostFrequentChar(str1);
const result2 = mostFrequentChar(str2);

console.log(result1); // l
console.log(result2); // a