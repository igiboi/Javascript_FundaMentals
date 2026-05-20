const words = ["cat", "dog", "cat", "bird", "dog", "fish", "cat"];

function findDuplicateWordsObjects(words) {
  const wordCount = words.reduce((wordObject, word) => {
    wordObject[word] = (wordObject[word] || 0) + 1;
    return wordObject;
  }, {});

  const filtered = Object.entries(wordCount)
    .filter(([_, value]) => value > 1)
    .map(([key, _]) => key);
  
  return filtered;
}


console.log(findDuplicateWordsObjects(words));
// Expected output:
// ["cat", "dog"]


function findDuplicateWordsMap(words) {
  const wordCount = words.reduce((wordMap, word) => {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
    return wordMap;
  }, new Map());

  const filtered = [...wordCount.entries()]
    .filter(([_, value]) => value > 1)
    .map(([key, _]) => key);

  return filtered;
}

console.log(findDuplicateWordsMap(words));
// Expected output:
// ["cat", "dog"]

function findDuplicateWordsSet(words) {
  const seen = new Set();
  const duplicates = new Set();

  words.forEach((word) => {
    if (seen.has(word)) {
      duplicates.add(word);
    } else {
      seen.add(word);
    } 
  });
  return [...duplicates];
}

console.log(findDuplicateWordsSet(words));
// Expected output:
// ["cat", "dog"]