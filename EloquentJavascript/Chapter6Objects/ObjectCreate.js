// There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

// Add method dictionary.toString() into it, that should return a comma-delimited list of keys. 
// Your toString should not show up in for..in over the object.

// Here’s how it should work:


let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
    value() {
        return Object.keys(this).join(",");
    },
    enumerable: false
})


// Add some entries
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // Will be treated as a regular key
dictionary.banana = "Banana";

// Test output
for (let key in dictionary) {
  console.log(key); // should NOT show 'toString'
}

console.log(dictionary.toString()); // apple,__proto__,banana






// 🧪 EXERCISE 1: Inheriting with Object.create
// Task:
// Create an object animal with a method walk()
const animal = {
  walk() {
    return `${this.name} is walking`;
  },
};

// Create another object dog that inherits from animal
const dog = Object.create(animal);

// Give dog a name property
dog.name = 'doggo';

// Call dog.walk() and observe the output
console.log(dog.walk()); // doggo is walking


const original = Object.create(null);

Object.defineProperty(original, "id", {
  value: 42,
  enumerable: false
});

original.sayHi = function () {
  return `Hi, ID is ${this.id}`;
};

// Clone attempt
const clone = Object.create(
  Object.getPrototypeOf(original),
  Object.getOwnPropertyDescriptors(original)
);

// Test
console.log(clone.sayHi()); // Hi, ID is 42
console.log(Object.keys(clone)); // [ 'sayHi' ]
