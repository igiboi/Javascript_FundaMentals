let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1');   // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map.get(1)); // num1
console.log(map.get('1')); //str1
console.log(map.size); // 3

// Although map[key] also works, e.g.we can set map[key] = 2,
// this is treating map as a plain JavaScript object,
// so it implies all corresponding limitations(only string / symbol keys and so on).

// So we should use map methods: set, get and so on.

// Map can also use objects as keys 
let Luigi = { name: 'Luigi' };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// Luigi is the key for the map
visitsCountMap.set(Luigi, 123);

console.log(visitsCountMap.get(Luigi)) // 123

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