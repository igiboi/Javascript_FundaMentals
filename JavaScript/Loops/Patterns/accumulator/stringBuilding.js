/*
PATTERN: Accumulator (String Building)
DESCRIPTION: Concatenating strings together
WHEN TO USE: When you need to build a string piece by piece

KEY POINTS:
- Start value: "" (empty string)
- Operation: += (concatenation)
- Return: After the loop completes
*/

// PROBLEM: Join all words with a space between them
function joinWords(words) {
  // Your code here
  let result = '';

 for (let word of words) {
   if (result === "") {
     result = word;
   } else {
     result = result + " " + word;
   }
  }
  return result;
}

// TEST CASES
console.log(joinWords(["Hello", "World"])); // Expected: "Hello World"
console.log(joinWords(["I", "love", "JavaScript"])); // Expected: "I love JavaScript"
console.log(joinWords(["Solo"])); // Expected: "Solo"
console.log(joinWords([])); // Expected: ""
