function countVowels(string) {
  const vowels = "aeiou";
  let count = 0;

  for (const letter of string.toLowerCase()) {
    if (vowels.includes(letter)) count++;
  }
  return count;
}


