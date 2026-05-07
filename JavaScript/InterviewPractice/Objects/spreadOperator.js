// Spread operator on objects.
// 1. Create a copy of the user object called updatedUser using the spread operator.
// 2. Override the age to 26 in the copy without mutating the original.
// 3. Add a new property "isLoggedIn" set to true in the copy.
// 4. Log both user and updatedUser to confirm the original was not mutated.

const user = {
  name: "Luigi",
  age: 25,
  city: "New York",
};

const updatedUser = { ...user, age: 26, isLoggedIn: true };

updatedUser.age = 26;
updatedUser.isLoggedIn = true; 

console.log(user);
console.log(updatedUser);