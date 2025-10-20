const users = [
  { id: 1, name: "Alice" },
  { id: 5, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// filter() returns an ARRAY (even if just one match)
const withFilter = users.filter((user) => user.id === 5);
// Result: [{ id: 5, name: 'Bob' }]  ← Array with one item

// find() returns the ITEM directly (or undefined)
const withFind = users.find((user) => user.id === 5);
// Result: { id: 5, name: 'Bob' }  ← Just the object!

// When to Use Each
// Use filter() when you might get multiple matches:

("Get all users over 18");
("Get all products in stock");
("Get all completed tasks");

// Use find() when you want the first match only:

("Get the user with id 5");
("Get the product named 'Laptop'");
("Get the first admin user");

// What if Nothing Matches?
// javascriptconst user = users.find(user => user.id === 999);
// console.log(user); // undefined
// find() returns undefined if no match is found. This is important for error handling!

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
];

// Find the product with name 'Mouse'
// Find the first product that costs less than $100
const findMouse = products
    .find(product => product.name === 'Mouse');

const mouseName = findMouse.name;

console.log(findMouse); // { id: 2, name: 'Mouse', price: 25 }
console.log(mouseName); // Mouse
