let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length); // 2

console.log(someUsers); // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]