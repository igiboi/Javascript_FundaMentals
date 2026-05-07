// Problem: Check if a key exists in an object.
// 1. Check if "name" exists in the user object using the "in" operator.
// 2. Check if "email" exists in the user object using the "in" operator.
// 3. Write a function called hasKey that takes an object and a key as parameters.
//    Return true if the key exists, false if not.
// Example: hasKey(user, "name") => true
// Example: hasKey(user, "email") => false

const user = {
  name: "Luigi",
  age: 25,
  city: "New York",
};

console.log("name" in user);
console.log("email" in user);

function hasKey(obj, key) {
  return (key in obj);
}

const result = hasKey(user, "name")

console.log(result);