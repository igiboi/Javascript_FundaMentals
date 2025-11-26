/* 
Problem: 

  given an array of words and minimum length, 
  return an array of all the words that are at least that length

INPUT/OUTPUT:
  getLongestWords(["cat", "elephant", "dog", "tiger"], 4)
  // returns: ["elephant", "tiger"]
  // (only words with 4+ letters)

  getLongestWords(["hi", "hello", "hey", "greetings"], 5)
  // returns: ["hello", "greetings"]

  getLongestWords(["a", "bb", "ccc"], 5)
  // returns: []

  getLongestWords(["test"], 3)
  // returns: ["test"]
  ```

Step by step
  Input: ["cat", "elephant", "dog", "tiger"], minLength = 4
  Expected Output: ["elephant", "tiger"]

Why?

Step 1: 

  "cat" has 3 letters -> 3 is less than 4 =  Don't include
  "elephant" has 8 letters -> 8 is greater than 4 = include in the new array 
  "dog" has 3 letters -> 3 is less than 4 = Don't include
  "tiger" has 5 letters -> 5 is greater than 4 = include in the new array

  Result: ["elephant", "tiger"] 

Step 2: Trace by hand 
I start with: 
- words = ["cat", "elephant", "dog", "tiger"]
- minLength = 4
- I need to create: variable that holds new array to collect all the words that pass the comparison
let result = [];

we need to create a for loop to loop through the array
for (let word of words) {
  we if statement to compare the word.length to the minLegth 
  if (word.lenght >= minLength) {
    result.push(word);
  }

}

return result

*/

function getLongestWords(words, minLength) {
  let result = [];

  for (let word of words) {
    if (word.length >= minLength) {
      result.push(word);
    }
  }
  return result;
}


// Test cases with console.log
console.log("Test 1:", getLongestWords(["cat", "elephant", "dog", "tiger"], 4));
// Expected: ["elephant", "tiger"]

console.log("Test 2:", getLongestWords(["hi", "hello", "hey", "greetings"], 5));
// Expected: ["hello", "greetings"]

console.log("Test 3:", getLongestWords(["a", "bb", "ccc"], 5));
// Expected: []

console.log("Test 4:", getLongestWords(["test"], 3));
// Expected: ["test"]
