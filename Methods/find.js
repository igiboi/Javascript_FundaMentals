const users = [
  { id: 1, name: "Alice", age: 25, city: "NYC" },
  { id: 2, name: "Bob", age: 30, city: "LA" },
  { id: 3, name: "Carol", age: 28, city: "NYC" },
];

// Find the first user from NYC

const nycUser = users.find(user => user.city === "NYC");
const overTwentySix = users.find(user => user.age < 26);

console.log(nycUser);
console.log(overTwentySix);