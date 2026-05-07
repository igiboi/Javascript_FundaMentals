// Problem: Access and update nested object properties.
// 1. Log the user's city to the console.
// 2. Update the user's age to 26.
// 3. Add a new property "isLoggedIn" set to true.
// 4. Log the entire user object to the console.

const user = {
  name: "Luigi",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};


console.log(user.address.city); // New York

user.age = 26;
user.isLoggedIn = true;

console.log(user);