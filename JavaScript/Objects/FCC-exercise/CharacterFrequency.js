/*
Character Frequency

Given a string, return an object (JavaScript) 
mapping each character to the number of times it appears.

Output: 

getFrequency("test") should return {t: 2, e: 1, s: 1}.

getFrequency("mississippi") should return {m: 1, i: 4, s: 4, p: 2}.

*/

function getFrequency(str) {
  return str
    .split("")
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
}

// str = "test"

// Step 1: .split("")
// ["t", "e", "s", "t"]

// Step 2: .reduce((acc, curr) => 
// { acc[curr] = (acc[curr] || 0) + 1; return acc; }, {})

// Initial value: acc = {}

// Iteration 1: curr = "t"
//   acc["t"] = (undefined || 0) + 1 = 1
//   acc = { t: 1 }

// Iteration 2: curr = "e"
//   acc["e"] = (undefined || 0) + 1 = 1
//   acc = { t: 1, e: 1 }

// Iteration 3: curr = "s"
//   acc["s"] = (undefined || 0) + 1 = 1
//   acc = { t: 1, e: 1, s: 1 }

// Iteration 4: curr = "t"
//   acc["t"] = (1 || 0) + 1 = 2   <-- "t" already exists, 
// so acc["t"] is 1, not undefined
//   acc = { t: 2, e: 1, s: 1 }

// Final return: { t: 2, e: 1, s: 1 }

console.log(getFrequency("test"));        // { t: 2, e: 1, s: 1 }
console.log(getFrequency("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(getFrequency("hello world")); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
