let obj = {}; 
//shorthand for let obj = new Object();


console.log(obj);              // shows: {}
console.log(obj.toString());   // shows: "[object Object]"
console.log(String(obj));      // also "[object Object]"
console.log(Object.getPrototypeOf(obj)); // shows Object.prototype

Object.getPrototypeOf(obj) === Object.prototype; // true


console.log(obj.toString());   // shows: "[object Object]"
//comes from 
Object.prototype.toString;

// 🧠 So even an “empty” object is actually full of capabilities — thanks to its prototype.
// It looks like this:

// obj (your empty object)
//   ⬆️ [[Prototype]] (internal link)
// Object.prototype {
//   toString() { [native code] },
//   hasOwnProperty() { [native code] },
//   ...
// }

// Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.


Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
}

function f() {
    console.log("Hello");
}

f.defer(1000)

