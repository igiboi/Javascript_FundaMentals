function mutation(array) {
  const firstWord = array[0].toLowerCase();
  const secondWord = array[1].toLowerCase();

  for (let letters of secondWord) {
    if (!firstWord.includes(letters)) {
      // Notice the ! (NOT)
      return false; // Found a letter that doesn't exist
    }
    // Don't return true here - keep checking all letters
  }

  return true; // All letters passed the test!
}
