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


const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Mouse", price: 29, inStock: false },
  { name: "Monitor", price: 399, inStock: true },
  { name: "Keyboard", price: 79, inStock: true },
  { name: "Headphones", price: 199, inStock: false },
];

function getInStockPrice(products) {
  return products
    .filter((item) => item.inStock)
    .reduce((accumulate, product) => accumulate + product.price, 0);
}

console.log(getInStockPrice(products));

function getDiscountNames(products) {
  return products
    .filter((item) => item.inStock && item.price > 100)
    .map((product) => `${product.name}: $${(product.price * 0.9).toFixed(2)}`);
}

console.log(getDiscountNames(products));


// Problem 10 
const orders = [
  { id: 1, customer: "Alice", items: ["book", "pen", "notebook"], total: 45 },
  { id: 2, customer: "Bob", items: ["laptop", "mouse"], total: 1200 },
  { id: 3, customer: "Alice", items: ["eraser"], total: 5 },
  { id: 4, customer: "Charlie", items: ["book", "highlighter"], total: 30 },
  { id: 5, customer: "Bob", items: ["keyboard"], total: 150 },
];

function getCustomerTotal(orders, customerName) {
  return orders
    .filter((order) => order.customer === customerName)
    .reduce((acc, order) => acc + order.total, 0);
}

console.log(getCustomerTotal(orders));

function getAllItems(orders) {
  return orders
    .reduce((accumulate, order) => accumulate.concat(order.items), [])
}

console.log(getAllItems(orders));


// Frequency Counter
function getTheMostOrderedItem(orders) {
  const allItems = orders
    .reduce((accumulate, order) => accumulate.concat(order.items), []);
  
  const frequency = allItems.reduce((accumulate, item) => {
    accumulate[item] = (accumulate[item] || 0) + 1; // increment or initialize
    return accumulate;
  }, {});
  
  return Object.keys(frequency)
    .reduce((accumulate, item) => { return frequency[accumulate] > frequency[item] ? accumulate : item }, Object.keys(frequency)[0]);
 
}