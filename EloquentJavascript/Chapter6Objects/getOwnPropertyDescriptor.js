
let user = {
  name: 'Luigi',
  age: 30,
};

user.name = 'Mario';

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(user.name); // Luigi ✅
console.log(JSON.stringify(descriptor, null, 2));
// {
//   "value": "Luigi",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }
