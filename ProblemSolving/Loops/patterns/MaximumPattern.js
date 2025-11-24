/* 
Maxium Pattern:

let best = initialValue;

for (let item of items) {
  if (item is better than best) {
    best = item;
  }
}

return best;

Problem: 
  
  a function that takes an array of strings and returns the longest word
  if there is a tie for the longest word, we pick the first one. 


Input/Output:

  findLongestWord(["hi", "hello", "hey"])              // returns: "hello"
  findLongestWord(["JavaScript", "Python", "Ruby"])    // returns: "JavaScript"
  findLongestWord(["cat", "dog", "elephant", "bee"])   // returns: "elephant"
  findLongestWord(["test"])                            // returns: "test"
  findLongestWord(["same", "size"])                    // returns: "same" (first one in tie)
  findLongestWord([])                                  // returns: "" (empty string)

Tools:
  - for loop to loop through array
  - .length, to check how long
  - comparison, to compare if that length is bigger than the other then replace it
  - a variable to hold the longest word 


  Using > (not >=):

Only updates when finding something LONGER
In a tie, keeps the first one (doesn't replace)


  PsuedoCode: 

  function findLongestWord(array) {
    let longestWord = '';

    for (let word of array) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord; 
  }


*/

function findLongestWord(array) {
  let longestWord = "";

  for (let word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord(["hi", "hello", "hey"]));     // "hello" ✅
console.log(findLongestWord(["same", "size"]));            // "same" ✅
console.log(findLongestWord(["cat", "dog", "elephant"]));  // "elephant" ✅