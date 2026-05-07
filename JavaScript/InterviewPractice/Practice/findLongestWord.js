/*
Problem: Find the longest word in a sentence

Write a function called findLongestWord that takes a string like "I love JavaScript" 
and returns the longest word as a string.


findLongestWord("I love JavaScript") // "JavaScript"
findLongestWord("The quick brown fox") // "quick"

*/

function findLongestWord(sentence) {

  const words = sentence.split(" ");
  
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;

}

const result = findLongestWord("I love JavaScript");

console.log(result);