// ============================================================
// Maps & WeakMaps — Notes + Real-World Scenarios
// ============================================================


// ─────────────────────────────────────────────────────────────
// WHAT IS A MAP?
// ─────────────────────────────────────────────────────────────
// A Map is a built-in object that stores key-value pairs.
// The key difference from a plain object: keys can be ANY type —
// strings, numbers, booleans, objects, functions, arrays.

// Plain object — keys always get converted to strings:
const obj = {};
const keyA = { id: 1 };
const keyB = { id: 2 };

obj[keyA] = "value A";
obj[keyB] = "value B";

console.log(obj);
// { "[object Object]": "value B" }
// keyB overwrote keyA — they both became the same string key


// Map — uses the actual reference as the key, no conversion:
const map = new Map();

map.set(keyA, "value A");
map.set(keyB, "value B");

console.log(map);
// Map(2) { {id:1} => "value A", {id:2} => "value B" }
// Both keys are preserved separately


// ─────────────────────────────────────────────────────────────
// CREATING A MAP
// ─────────────────────────────────────────────────────────────
// Two ways: empty Map with .set(), or initialized with values
// 1.) empty Map with .set()
const myFirstMap = new Map();

myFirstMap.set({ type: 'deciduous' }, 'Maple tree');
myFirstMap.set([1, 2], 'Pine tree');
myFirstMap.set(42, 'Oak tree');
myFirstMap.set(true, 'Birch tree');
myFirstMap.set(function () {
  return "I'm a function key";
}, "Willow tree");

console.log(myFirstMap);

// 2.) initialized with values
const myTreesMap = new Map([
  [{ type: "deciduous" }, "Maple tree"],
  [["forest", "grove"], "Pine tree"],
  [42, "Oak tree"],
  [true, "Birch tree"],
  [
    function () {
      return "I am a function key";
    },
    "Willow tree",
  ],
]);

// ─────────────────────────────────────────────────────────────
// MAP METHODS
// ─────────────────────────────────────────────────────────────
// .set(key, value)         — add a key-value pair
// .get(key)                — retrieve value by key
// .has(key)                — check if key exists
// .delete(key)             — remove a key-value pair
// .clear()                 — remove all entries
// .size                    — number of entries (property, no parentheses)
// .forEach((value, key))   — iterate over entries (value first, then key)
// .entries()               — returns a MapIterator of [key, value] pairs
// .keys()                  — returns a MapIterator of just the keys
// .values()                — returns a MapIterator of just the values

// .set(key, value)
const userScores = new Map();
const luigi = { name: "Luigi" };
const mario = { name: "Mario" };

userScores.set(luigi, "score: 1");
userScores.set(mario, "score: 5");

console.log(userScores)
// output:
/*
Map(2) {
  { name: 'Luigi' } => 'score: 1',
  { name: 'Mario' } => 'score: 5'
}
*/

// .get(key)
console.log(userScores.get(luigi)); // score 1 

//.has(key)
console.log(userScores.has(mario)); // true

// .delete(key) — remove a key-value pair
userScores.delete(mario);
console.log(userScores.has(mario)); // false — mario is gone

// .size — number of entries (property, no parentheses)
console.log(userScores.size); // 1 — only luigi remains

// .forEach((value, key)) — iterate over entries (value first, then key)
userScores.forEach((value, key) => {
  console.log(key.name, value); // Luigi score: 1
});

// .entries() — returns a MapIterator of [key, value] pairs
console.log(userScores.entries()); // MapIterator { [ { name: 'Luigi' }, 'score: 1' ] }

// .clear() — remove all entries
userScores.clear();
console.log(userScores.size); // 0


// ─────────────────────────────────────────────────────────────
// WHAT IS A WEAKMAP?
// ─────────────────────────────────────────────────────────────
// Keys must be objects — values can be any type
// Keys are weakly referenced — garbage collected when no other reference exists
// Not iterable — no forEach, no size property
const myWeakMap = new WeakMap();
const node1 = { id: "header" };
const node2 = { id: "footer" };

myWeakMap.set(node1, "I am a weak header");
myWeakMap.set(node2, "I am a weak footer");

console.log(myWeakMap.get(node1)); // I am a weak header

console.log(myWeakMap.has(node2)); // true

console.log(myWeakMap.delete(node2)); // true

console.log(myWeakMap);

// ─────────────────────────────────────────────────────────────
// MAP vs WEAKMAP — QUICK REFERENCE
// ─────────────────────────────────────────────────────────────
/*
  Feature        Map                          WeakMap
  ─────────────────────────────────────────────────────
  Key types      Any type                     Objects only
  Iteration      forEach, keys, values,       Not iterable
                 entries
  size property  Yes                          No
  Memory         Strong references            Weak references
  Use case       General key-value storage    Attach data to objects
                                              without memory leaks
*/


// ─────────────────────────────────────────────────────────────
// MAP vs PLAIN OBJECT — WHEN TO USE WHICH
// ─────────────────────────────────────────────────────────────
/*
  Use a Map when:
  - Keys are not strings (objects, numbers, booleans, functions)
  - You're dynamically adding and removing entries at runtime
  - You need fast .has() and .delete() lookups on a growing collection

  Use a plain object when:
  - Keys are strings and the structure is known upfront (user profile, config)
  - You need to send data to an API — JSON.stringify() doesn't work on Maps
  - You're representing one specific thing, not a dynamic collection
*/


// ─────────────────────────────────────────────────────────────
// WHICH TOOL DO I REACH FOR? — REAL WORLD SCENARIOS
// ─────────────────────────────────────────────────────────────
// For each scenario, decide: plain object, Map, or array method?
// Answer below each one before reading the solution.

// SCENARIO 1
// You're building a navigation menu. Each item has a label, url,
// and isActive flag. You need to send it to an API.
// Tool: Plain Object
// Why: Because when we send it through the api they need to use JSON.stringify()

// SCENARIO 2
// A user can select multiple filters on a product page (size, color, brand).
// Filters get added and removed as they click.
// You need to check instantly if a filter is already applied.
// Tool: Map (or Set if filters have no extra data)
// Why: .has() is O(1) — instant lookup regardless of how many filters are applied.
//      Use Map if each filter stores extra data (e.g. label, count).
//      Use Set if you only need to track presence.

// SCENARIO 3
// You have a list of 500 orders and you need to find the total
// revenue from only the completed ones.
// Tool: array
// Why:  array method (.filter() + .reduce()). You filter down to completed orders, 
// then reduce to sum the revenue.

// SCENARIO 4
// You're tracking how many times each page on a website has been visited.
// Pages get added dynamically as users navigate.
// Tool: Map
// Why: entries are added dynamically at runtime, and you need fast lookups to update the count
// on each visit. A plain object could work here since URLs are strings, but
// Map is cleaner for dynamic collections you're constantly updating.


// ─────────────────────────────────────────────────────────────
// INTERVIEW Q&A
// ─────────────────────────────────────────────────────────────
/*
  Q1: What is a Map in JavaScript, and how does it differ from a plain object?
  A: Map is a built-in object that uses the actual reference in memory as the key,
     whereas a plain object converts any object key into the string "[object Object]",
     causing collisions. I'd use a Map when keys are dynamic or non-string, and a
     plain object when the structure is known upfront and needs to be sent as JSON.

  Q2: When would you use a WeakMap over a Map?
  A: I'd use a WeakMap when I want to attach data to a DOM node and still allow it
     to be garbage collected when it's removed. For example, tracking how many times
     a button has been clicked — store it in a WeakMap with the button as the key.
     When the button is removed from the DOM and no other references hold it, the
     WeakMap releases it automatically. A regular Map would keep a strong reference,
     causing a memory leak.

  Q3: Why can't you iterate over a WeakMap?
  A: Because the garbage collector can remove entries at any time. Iterating over
     something that can change under you would be unreliable, so the language
     deliberately does not support iteration on WeakMap.

  Q4: You have an array of user objects and need to look up a user by ID as fast
      as possible. How would you structure the data?
  A: I'd convert the array into a Map using .reduce(), with the user ID as the key
     and the full user object as the value. That way every lookup is O(1) instead
     of O(n) scanning the array each time.

     const userMap = users.reduce((accumulator, user) => {
       accumulator.set(user.id, user);
       return accumulator;
     }, new Map());

     userMap.get(1); // instant lookup by ID
*/
