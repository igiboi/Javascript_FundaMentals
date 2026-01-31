function longWord(words) {
  let longestWord = words[0];
  for (let word of words) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(longWord(["hi", "hello", "amazing", "yo"])); // amazing