const map = new Map();
map.set('a', 1);
map.set('b', 2);

console.log(map.get('a')); // 1
console.log(map.has('c')); // false

// Pattern 2: Counting (Key -> Number)
// When you want to count how many times something appears (characters, words, etc.)
map.set(char, (map.get(char) || 0) + 1);

// You used this in:
// countChars

// countFirstLetters

// unique

// 🧠 Mental model:
// “I’m tracking how many times each thing has shown up. If I’ve seen it before, I increment the count. If not, I start at 1.”

function countWords(str) {
  const wordMap = new Map();
  const words = str.split(' ');

  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }

  return wordMap;
}

console.log(countWords('I love javascript and I love maps'));


// Grouping
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
    
console.log(groupWordsByLength(['cat', 'hi', 'hello', 'bat', 'code', 'go']));

function groupNumbersByRange(nums) {
  const map = new Map();

  for (const num of nums) {
    let key;

    if (num < 10) {
      key = 'small';
    } else if (num >= 10 && num < 100) {
      key = 'medium';
    } else {
      key = 'large';
    }

    if (map.has(key)) {
      map.get(key).push(num); // 👈 add number to existing group
    } else {
      map.set(key, [num]); // 👈 start a new group with this number
    }
  }

  return map;
}

function groupWordsFirstLetter(words) {
  const map = new Map();

  for (const word of words) {
    const firstLetter = word[0];

    if (map.has(firstLetter)) {
      map.get(firstLetter).push(word);
    } else {
      map.set(firstLetter, [word]);
    }
  }

  return map;
}

function groupByParity(numbers) {
  const map = new Map();

  for (const number of numbers) {
    const key = number % 2 === 0 ? 'even' : 'odd';

    if (map.has(key)) {
      map.get(key).push(number); // 👈 get the array and push into it
    } else {
      map.set(key, [number]); // 👈 start a new array
    }
  }

  return map;
}

function groupByWordLength(str) {
  const map = new Map();

  for (const word of str) {
    const len = word.length;

    let key;

    if (key < 4) {
      key = 'small';
    }
  }
}


function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('hello')); // Output: 2

function countVowelsForOf(arr) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const word of arr) {
    for (const letter of word) {
      if (vowels.includes(letter.toLowerCase())) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVowelsForOf(['hello', 'world', 'javascript'])); // Output: 7


function countLetters(str) {
  const wordMap = new Map();
  const word = str.toLowerCase().split('');

  for (const letter of word) {
    wordMap.set(letter, (wordMap.get(letter) || 0) + 1);
  }

  return wordMap;
}