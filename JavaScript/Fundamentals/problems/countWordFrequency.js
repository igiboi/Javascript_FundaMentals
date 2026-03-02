function wordFrequency(words) {
  let result = {};

  for (let word of words.split(" ")) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }

  }
  return result;
}

// version 2
function wordFrequency(words) {
  const result = new Map();

  for (const word of words.split(" ")) {
    result.set(word, (result.get(word) || 0) + 1);
  }
  return result;
}
