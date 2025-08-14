let map = new Map();

map.set('1', 'str1'); // (a string key, value(str1))
map.set(1, 'num1');   // (a numeric key, value(num1))
map.set(true, 'bool1'); // (a boolean key, value(bool1))

console.log(map.get(1)); // num1
console.log(map.get('1')); //str1
console.log(map.size); // 3

// Although map[key] also works, e.g.we can set map[key] = 2,
// this is treating map as a plain JavaScript object,
// so it implies all corresponding limitations(only string / symbol keys and so on).

// So we should use map methods: set, get and so on.

// Map can also use objects as keys 
let Luigi = { name: 'Luigi' };
let Bruno = { name: 'Bruno' };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// Luigi is the key for the map
visitsCountMap.set(Luigi, 123);
visitsCountMap.set(Bruno, 23);

console.log(visitsCountMap.get(Luigi)); // 123
console.log(visitsCountMap.get(Bruno));
// Using objects as keys is one of the most notable and important Map features.
// The same does not count for Object.String as a key in Object is fine,
// but we can’t use another Object as a key in Object.

let key1 = { id: 1 };
let key2 = { id: 2 };

let obj = {};
obj[key1] = 'Value for key1';
obj[key2] = 'Value for key2';

console.log(obj); // { "[object Object]": "Value for key2" }

// Map Advantes
let keyMap1 = { id: 1 };
let keyMap2 = { id: 2 };

let mapKeys = new Map();
mapKeys.set(key1, 'Value for key1');
mapKeys.set(key2, 'Value for key2');

console.log(mapKeys.get(key1)); // Value for key1
console.log(mapKeys.get(key2)); // Value for key2

// How Map compares keys
// To test keys for equivalence, Map uses the algorithm SameValueZero.
// It is roughly the same as strict equality ===,
// but the difference is that NaN is considered equal to NaN.
// So NaN can be used as the key as well.

// This algorithm can’t be changed or customized.

// Chaining
// Every map.set call returns the map itself, so we can "chain" the calls:
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

// Iteration over Map
// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// iterate over keys (vegetables)
for (let vegetables of recipeMap.keys()) {
    console.log(vegetables); // cucumber, tomatoes, onions
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

for (let entry of recipeMap) {
    console.log(entry); // ['cucumber', 500];
}

// runs the function for each (key, value) pair
recipeMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})

let mapPractice = new Map();

mapPractice.set('fruit', 'banana');

console.log(mapPractice.get('fruit')); // banana

// Given a string, count the frequency of each word using a Map.

const text = "hello world hello map";

function countWords(str) {
    const words = str.split('');
    const wordMap = new Map();

    for (const word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }
    return wordMap; 
}

console.log(countWords('hello'));
// Expected Output: Map { 'hello' => 2, 'world' => 1, 'map' => 1 }


function nonRepeatingWords(str) {
  const words = str.split(' ');
  const wordMap = new Map();

  // First pass: count word frequencies
  for (const word of words) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }
  // Second pass: find the first non-repeating word
  for (const word of words) {
    if (wordMap.get(word) === 1) {
      return word;
    }
  }

  return null; // if all words repeat
}


function frequeyncyWord(arr) {
  const wordMap = new Map();
  const result = [];

  for (const item of arr) {
    if (!wordMap.has(item)) {
      result.push(item);
      wordMap.set(item, true); // ✅ mark as seen
    }
  }
}
