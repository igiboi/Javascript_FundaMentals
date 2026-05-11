/*
  Problem: Convert Array to Lookup Object
  -----------------------------------------
  Write a function called arrayToObject that takes an array of objects
  and a key name, and returns an object where each item is indexed
  by the value of that key. This is useful for fast lookups.

  Examples:
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Carol" }
    ];

    arrayToObject(users, "id")
    // {
    //   1: { id: 1, name: "Alice" },
    //   2: { id: 2, name: "Bob" },
    //   3: { id: 3, name: "Carol" }
    // }

  Note: instead of pushing into an array or counting,
  you are storing the whole object directly at that key.
*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" }
];

function arrayToObject(arr, key) {
  // your code here
  return arr.reduce((accumulative, current) => {
    accumulative[current[key]] = current;
    return accumulative;
  }, {})
}

console.log(arrayToObject(users, "id"));
