// ============================================================
// Word Frequency Counter — Plain Object version
// ============================================================
// Given an array of words, return a plain object where each
// key is a word and the value is how many times it appears.
// Then use that object to return only the words that appear
// more than once.

const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// Expected object:
// { apple: 3, banana: 2, cherry: 1 }
//
// Words appearing more than once:
// ["apple", "banana"]

function wordFrequency(arr) {
  return arr.reduce((frequencyObject, word) => {
    frequencyObject[word] = (frequencyObject[word] || 0) + 1;
    return frequencyObject;
  }, {})
}

function getRepeatedWords(freqObj) {
  const filtered = Object.entries(freqObj) // [["apple", 3], ["banana", 2], ["cherry", 1]]
    .filter(([_, value]) => value > 1)
    .map(([key, _]) => key);
  
  return filtered;
}

const freqObj = wordFrequency(words);
console.log(getRepeatedWords(freqObj));
// Expected: ["apple", "banana"]
