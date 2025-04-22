function aclean(arr) {
  const map = new Map();

  // Process each word in the array.
  for (let word of arr) {
    // Normalize the word: convert to lowercase, split into characters,
    // sort them, and join them back together. This produces a signature.
    const sorted = word.toLowerCase().split('').sort().join('');
 
    // If the signature already exists in the map, increment its count.
    if (map.has(sorted)) {
      map.get(sorted).count++;
    } else {
      // Otherwise, add a new entry with the word as the representative
      // and initialize its count to 1.
      map.set(sorted, { word, count: 1 });
    }
  }

  // Log the results: each anagram signature, its representative word, and count.
  for (const [signature, data] of map.entries()) {
    console.log(
      `Anagram group [${signature}]: representative word "${data.word}", count: ${data.count}`
    );
  }

  // Return the unique words (one per anagram group).
  return Array.from(map.values()).map((item) => item.word);
}

// Test the function:
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log('Unique words from anagram groups:', aclean(arr));
