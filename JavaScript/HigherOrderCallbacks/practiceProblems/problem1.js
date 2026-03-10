const numbers = [3, 7, 2, 9, 4, 6, 1, 8, 5];

// Problem 1 - Filter numbers greater than 5
function numbersGreaterThanFive(array) {
  return array.filter((number) => number > 5);
}
console.log(numbersGreaterThanFive(numbers));

// Problem 2 - Multiply every number by 3
function multiplyByThree(array) {
  return array.map((number) => number * 3);
}
console.log(multiplyByThree(numbers));

// Problem 3 - Filter numbers greater than 4, then multiply each by 2
// Expected: [14, 18, 12, 16, 10]
function filterAndDouble(array) {
  return array
    .filter((number) => number > 4)
    .map((number) => number * 2);
}
console.log(filterAndDouble(numbers));


const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 32, active: true },
  { name: "Diana", age: 15, active: true },
  { name: "Eve", age: 28, active: false },
];

function getActiveAdults(users) {
  return users
    .filter((user) => user.active && user.age >= 18)
    .map((user) => user.name);
}

console.log(getActiveAdults(users));

// Problem 5
function getTotalAge(users) {
  return users.reduce((accumulate, currentValue) => accumulate + currentValue.age, 0);
}

console.log(getTotalAge(users));

// Problem 6
function groupByStatus(users) {
  return users.reduce((accumulate, user) => {
    if (user.active) {
      accumulate.active.push(user.name);
    } else {
      accumulate.inactive.push(user.name);
    }
    return accumulate;
  }, { active: [], inactive: [] });
}

console.log(groupByStatus(users));

// Problem 7 
function allAdults(users) {
  return users.every((user) => user.age >= 18);
}

function anyInactive(users) {
  return users.some((user) => !user.active);
}