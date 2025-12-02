function findOldestPerson(people) {
  let oldestPerson = null;

  for (let person of people) {
if (oldestPerson === null || person.age > oldestPerson.age) {
  // Use > not >=
  // ❌ BAD (returns last in tie)
  // if (person.age >= oldestPerson.age)
  // if (person.age > oldestPerson.age)
  // ✅ GOOD (returns first in tie)
  
      oldestPerson = person;
}
  }

  return oldestPerson;
}

console.log(
  "Test 1:",
  findOldestPerson([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 45 },
    { name: "Charlie", age: 25 },
  ])
);
// Expected: { name: "Bob", age: 45 }

console.log(
  "Test 2:",
  findOldestPerson([
    { name: "John", age: 50 },
    { name: "Jane", age: 60 },
    { name: "Jack", age: 40 },
  ])
);
// Expected: { name: "Jane", age: 60 }

console.log("Test 3:", findOldestPerson([{ name: "Solo", age: 100 }]));
// Expected: { name: "Solo", age: 100 }

console.log(
  "Test 4:",
  findOldestPerson([
    { name: "Amy", age: 30 },
    { name: "Ben", age: 30 },
  ])
);
// Expected: { name: "Amy", age: 30 }
