'use strict'; // optional but useful for strict behavior
 
let user = {
  name: 'Luigi',
  age: 30,
};

Object.defineProperty(user, 'name', {
  value: 'Luigi',
  writable: false,
  enumerable: false,
  configurable: true,
});

user.name = 'Mario'; // silently fails in non-strict mode, error in strict mode 


let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(user.name); // Luigi ✅
console.log(JSON.stringify(descriptor, null, 2));
//
// Output
// {
//   "value": "Luigi",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }

// Object properties, besides value have three special attributes (flags)

// 1.) writable - if true, the value can be chagned, otherwise its read-only

// 2.) enumerable - if true, then listed in loops, otherwise not listed.

// 3.) configurable - if true, the property can be deleted and these attributes can be modified, otherwise not

// to get flags use - let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// to change the flags, we can use Object.defineProperty

// syntax: Object.defineProperty(obj, propertyName, descriptor)