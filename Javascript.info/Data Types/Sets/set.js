function removeDuplicates(arr) {
    const uniqueSet = new Set(arr); // Removes duplicates automatically
    
    return uniqueSet.size < arr.length;

}


function unique(arr) {

    return [...new Set(arr)];
}

function countWords(feedbackArray) {
  const map = new Map();

  for (const sentence of feedbackArray) {
    const words = sentence.toLowerCase().split(' ');

    for (const word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  }

  return map;
}