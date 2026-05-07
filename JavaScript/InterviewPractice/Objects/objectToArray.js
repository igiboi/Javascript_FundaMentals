// Problem: Convert an object to an array and back.
// 1. Use Object.keys() to get an array of all keys.
// 2. Use Object.values() to get an array of all values.
// 3. Use Object.entries() to get an array of [key, value] pairs.
// 4. Convert the entries array back into an object using Object.fromEntries().

const user = {
  name: "Luigi",
  age: 25,
  city: "New York",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const entries = Object.entries(user);

const fromEntries = Object.fromEntries(entries);

console.log(fromEntries);

console.log("name" in user);
console.log("email" in user);
