// Task 1

const { use } = require("react");

// Create an empty object user.
const user = {};

// Add the property name with the value John.
user.name = 'John';

// Add the property surname with the value Smith.
user.surName = "Smith";

// Change the value of the name to Pete.
user.name = 'Pete';

// Remove the property name from the object.
delete user.name;

// Task 2 - Check for emptiness

// write a function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

const checkIfEmpty = isEmpty(user);

console.log(checkIfEmpty); // false

// Task 3

// write code to sum all salaries and store in the variable sum. Should be 390
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumAllSalaries(obj) {
    let sum = 0;

    for (let key in obj) {
        // sum = sum + obj[key]; 
        // or
        sum += obj[key];
    }
    return sum;
}

console.log(sumAllSalaries(salaries));

// Task 4

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumber(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumber(menu)); 

// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

const animals = {};

animals['name'] = 'fluffles';

console.log(animals.name); // fluffles


const userProfile = {
  name: 'Luigi',
  age: 28,
};

let clone = Object.assign({}, userProfile);

clone.age = 30;

clone.age = 30;

console.log(clone);

// spread syntax 
let cloneSpread = { ...userProfile };


const user = {
  name: 'Luigi',
  preferences: {
    theme: 'light',
    fontSize: 14,
  },
};

let cloneStructured = structuredClone(user);

cloneStructured.preferences.theme = 'dark';

console.log(cloneStructured.preferences.theme);
console.log(user.preferences.theme);