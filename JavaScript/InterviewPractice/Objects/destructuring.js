// Destructuring — pulling properties out of an object into variables.
// 1. Destructure "name" and "age" from the user object into separate variables.
// 2. Log both variables to the console.
// 3. Destructure "city" from the address object using nested destructuring.
// 4. Destructure "name" but rename it to "username".

const user = {
  name: "Luigi",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  name: username,
  age,
  address: { city },
} = user;

console.log(age); // 25
console.log(username); // Luigi
console.log(city);