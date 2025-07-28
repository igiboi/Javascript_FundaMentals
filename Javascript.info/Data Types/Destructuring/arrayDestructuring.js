// we have an array with a name and surname
let arr = ['John', 'Smith'];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName);

// Skipping elements
const [first, , third] = [10, 20, 30];
console.log(third); // 30

const [x = 5, y = 10] = [1];
console.log(x, y); // 1 10

const user = { name: 'Luigi', age: 25 };
const { name, age } = user;
console.log(name); // Luigi

// Renaming:
const { name: userName } = user;
console.log(userName); // 'Luigi'


// The rest
let [name1, name2] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(name1); // Julius
console.log(name2); // Caesar

let [name1Rest, name2Rest, ...rest] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2