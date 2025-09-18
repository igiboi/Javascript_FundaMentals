const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a'));     // 1
console.log(map.has('c'));     // false

for (const [key, value] of map) {
    console.log(key, value);
}

// Level 2 
function countChars(str) {
    const map = new Map();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    return map; 
}

console.log(countChars("Hello"));


function groupWordsByLength(words) {
  const map = new Map();
  

  for (const word of words) {
    const len = word.length;

    if (map.has(len)) {
      // Already have this length → push to array
      map.get(len).push(word);
    } else {
      // New length → create array
      map.set(len, [word]); 
    }
  }

  return map;
}
  


function countFirstLetters(words) {
  const map = new Map();

  for (const word of words) {
    const firstLetter = word[0];
    map.set(firstLetter, (map.get(firstLetter) || 0) + 1);
  }

  return map;
}

console.log(countFirstLetters(['cat', 'camel', 'dog', 'duck', 'deer']));


function groupWordsByFirstLetter(words) {
  const map = new Map();

  for (const word of words) {
    const firstLetter = word[0];

    if (map.has(firstLetter)) {
      // Add to the existing group
      map.get(firstLetter).push(word);
    } else {
      // Create a new group
      map.set(firstLetter, [word]);
    }
  }

  return map;
}
  

function groupByParity(nums) {
  const map = new Map();

  for (const num of nums) {
    const key = num % 2 === 0 ? 'even' : 'odd';

    if (map.has(key)) {
        map.get(key).push(num);
    } else {
        map.set(key, [num]);
    }
  }

  return map;
}
  

function unique(arr) {
    const words = arr.split(' ');
    const map = new Map();

    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    for (const word of map) {
        console.log(word);
    }
}

const sampleSentence = 'JavaScript is fun and JavaScript is powerful and fun';
console.log(unique(sampleSentence));