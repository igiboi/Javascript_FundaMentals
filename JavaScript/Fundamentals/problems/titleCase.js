/*
titleCase("hello world")           // "Hello World"
titleCase("the quick brown fox")   // "The Quick Brown Fox"
titleCase("javascript is fun")     // "Javascript Is Fun"
titleCase("a")                     // "A"

function receives a string of words and we upperCase the first letter 
we isolate each word into its own array 
string[0].toUpperCase() and then join the rest of the word inside that array
then turn it back into string to join 
function titleCase(string) {

}

*/

function titleCase(sentence) {
  // 1. split the sentence into an array of words
  const sentenceArray = sentence.split(" ");
  const result = [];
  // 2. loop through each word
  for (const word of sentenceArray) {
    // 3. capitalize word[0] + grab the rest of the word
     result.push(word[0].toUpperCase() + word.slice(1));
  }
  // 4. put it all back together
  return result.join(" ");
}


const capitlizeWords = titleCase("hello world"); 
console.log(capitlizeWords);