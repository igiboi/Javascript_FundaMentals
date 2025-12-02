/* 

RESTATE: 
  given an array of person objects. Each person has a name and age
    return an array of ONLY the names of people.age >= 18

INPUTS/OUTPUTS:

  getAdultNames([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 25 }
  ])
  // returns: ["Alice", "Charlie"]


TOOLS:
- variable for new array
- for loop to loop through the array 
- if (people.age >= 18)
- newArray.push(person.name)

     
PSEUDOCODE:

function getAdultNames(people) {
  let eighteenOrOlder = [];
  for (let person of people) {
    if (person.age >= 18) {
      eighteenOrOlder.push(person.name);
    }
  }
  return eighteenOrOlder
}


 */


function getAdultNames(people) {
  let eighteenOrOlder = [];
  for (let person of people) {
    if (person.age >= 18) {
      eighteenOrOlder.push(person.name);
    }
  }
  return eighteenOrOlder;
}


console.log("Test 1:", getAdultNames([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 25 }
]));
// Expected: ["Alice", "Charlie"]

console.log("Test 2:", getAdultNames([
  { name: "John", age: 17 },
  { name: "Jane", age: 18 },
  { name: "Jack", age: 20 }
]));
// Expected: ["Jane", "Jack"]

console.log("Test 3:", getAdultNames([
  { name: "Kid", age: 10 }
]));
// Expected: []

console.log("Test 4:", getAdultNames([]));
// Expected: []

console.log("Test 5:", getAdultNames([
  { name: "Sarah", age: 18 },
  { name: "Mike", age: 18 }
]));
// Expected: ["Sarah", "Mike"]