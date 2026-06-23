// ============================================================
// Word Frequency Counter
// ============================================================
// Given an array of words, return a Map where each key is a
// word and the value is how many times it appears.
// Then use that Map to return only the words that appear
// more than once.

const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// Expected Map:
// Map { "apple" => 3, "banana" => 2, "cherry" => 1 }
//
// Words appearing more than once:
// ["apple", "banana"]

// need to count up each word then once we have the map we turn it into 
// than array so I can filter and user map 

function wordFrequency(words) {
  return words.reduce((wordMap, word) => {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
    return wordMap;
  }, new Map());
}

function getRepeatedWords(freqMap) {
  const filtered = [...freqMap.entries()]
    .filter(([_, value]) => value > 1)
    .map(([key, _]) => key);
  
  return filtered;
}



const freqMap = wordFrequency(words);
console.log(getRepeatedWords(freqMap));
// Expected: ["apple", "banana"]



// function wordFrequency(arr) {
//   return arr.reduce((frequencyMap, word) => {
//     frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
//     return frequencyMap;
//   }, new Map());
// }

// function getRepeatedWords(frequencyMap) {
//   const filtered = [...frequencyMap.entries()]
//     .filter(([_, value]) => value > 1)
//     .map(([key, _]) => key);

//   return filtered;
// }
