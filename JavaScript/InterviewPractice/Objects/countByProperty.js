/*
  Problem: Count Items by Property
  ----------------------------------
  Write a function called countByProperty that takes an array of objects
  and a key name, and returns an object where each property is a unique
  value of that key, and the value is how many times it appears.

  Examples:
    const animals = [
      { name: "Lion", type: "mammal" },
      { name: "Eagle", type: "bird" },
      { name: "Shark", type: "fish" },
      { name: "Tiger", type: "mammal" },
      { name: "Parrot", type: "bird" },
      { name: "Whale", type: "mammal" }
    ];

    countByProperty(animals, "type")
    // { mammal: 3, bird: 2, fish: 1 }
*/

const animals = [
  { name: "Lion", type: "mammal" },
  { name: "Eagle", type: "bird" },
  { name: "Shark", type: "fish" },
  { name: "Tiger", type: "mammal" },
  { name: "Parrot", type: "bird" },
  { name: "Whale", type: "mammal" }
];

function countByProperty(arr, key) {
  // your code here
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = (acc[curr[key]] || 0) + 1
    return acc;
  }, {});
}

console.log(countByProperty(animals, "type")); // expected: { mammal: 3, bird: 2, fish: 1 }
