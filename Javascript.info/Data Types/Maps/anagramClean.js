function aclean(arr) {
  const map = new Map();

  for (let word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('');
 
    if (map.has(sorted)) {
      map.get(sorted).count++;
    } else {

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
