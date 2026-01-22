function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  // Step 1: Split the sentence into an array of "words" using space as a separator
  // This will create empty strings if there are multiple spaces between words
  const wordsArray = sentence.split(" ");

  // Step 2: Filter out any empty strings caused by extra spaces
  const filteredWords = wordsArray.filter((word) => word !== "");

  // Step 3: Count the number of words
  // The length of the filtered array represents the total number of actual words
  const count = filteredWords.length;

  // Step 4: Return the total count
  // This sends the total number of words back to whoever called the function
  return count;
}
