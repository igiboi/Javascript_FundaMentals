/*
================================================================================
THE 7-STEP FORMULA FOR WRITING CODE FROM SCRATCH
================================================================================

STEP 1: RESTATE: create a function that takes a word and checks each letter if that vowels exist in our system 
we accumulate each count and print out each letter that we found word. 

STEP 2: INPUTS/OUTPUTS

when given a word, we print out the accumulated number for all the vowels we found in the string 
and print each vowel we found

STEP 3: EXAMPLE

countVowels("hello")           // returns: 2  (e, o)
countVowels("JavaScript")      // returns: 3  (a, a, i)
countVowels("aeiou")           // returns: 5
countVowels("sky")             // returns: 1  (y is NOT a vowel)
countVowels("HELLO WORLD")     // returns: 3  (E, O, O)
countVowels("xyz")             // returns: 0

STEP 4: TOOLS
- for loops to loop through the word and compare to a array of vowels 
- a count variable to hold accumulated number
- includes method 

     
STEP 5: PSEUDOCODE
What is the first thing our code needs to do?

function countVowels(word) 
  let count = 0;
  let vowels = "aeiou";
  let foundVowels = []
  for (let letter of word)
     if (letter.includes(vowels))
        count++;
        foundVowels.push(letter)
   return { count  foundVowels}


STEP 6: CODE
function (start, end) {
  if (typeof start && typeof end != Number) {
    return console.log("Please be a number");
  }
}


STEP 7: TEST
 */


function countVowels(word) {
  let count = 0;
  let vowels = "aeiou";
  let foundVowels = [];

  for (let letter of word) {
    if (vowels.includes(letter.toLowerCase())) {
      count++;
      foundVowels.push(letter);
    }
  }
   
  return { count, foundVowels };
}

// Test all cases
console.log(countVowels("hello"));        
// { count: 2, foundVowels: ['e', 'o'] } ✅

console.log(countVowels("JavaScript"));   
// { count: 3, foundVowels: ['a', 'a', 'i'] } ✅

console.log(countVowels("HELLO WORLD"));  
// { count: 3, foundVowels: ['E', 'O', 'O'] } ✅