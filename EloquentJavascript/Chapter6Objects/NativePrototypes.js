let obj = {}; 
//shorthand for let obj = new Object();


console.log(obj);              // shows: {}
console.log(obj.toString());   // shows: "[object Object]"
console.log(String(obj));      // also "[object Object]"
console.log(Object.getPrototypeOf(obj)); // shows Object.prototype

Object.getPrototypeOf(obj) === Object.prototype; // true

