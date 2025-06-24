// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(input) {
  return input
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      // word.slice(1) returns the rest of the word starting from index 1 (i.e., excluding the first character).
    )
    .join(''); // // joins ['my', 'Long', 'Word'] into 'myLongWord
};