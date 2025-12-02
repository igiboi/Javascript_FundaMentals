function averageAge(people) {
  if (people.length === 0) {
    return 0; // Or return null, or return "No data" - your choice!
  }

  let totalAge = 0;

  for (let person of people) {
    totalAge += person.age;
  }

  return totalAge / people.length; // use .length to count how many people there are
}

console.log(
  "Test 1:",
  averageAge([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 40 },
  ])
);
// Expected: 30

console.log(
  "Test 2:",
  averageAge([
    { name: "John", age: 25 },
    { name: "Jane", age: 35 },
  ])
);
// Expected: 30

console.log("Test 3:", averageAge([{ name: "Solo", age: 50 }]));
// Expected: 50

console.log("Test 4:", averageAge([]));
// Expected: 0
