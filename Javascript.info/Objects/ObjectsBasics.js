// A basic object literal with two properties:
const person = {
    name: "Luigi",
    age: 30
}

console.log(person.name); // Luigi
console.log(person.age); // 30


// Computed properties 
// You can use bracket notation in the literal to compute a key at runtime:

let prop = "score";

const stats = {
    [prop]: 100,
    ["level" + 1]: "beginner"
};

console.log(stats.score); // 100
console.log(stats.level1); // beginner

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5
};

console.log(bag.appleComputers); // 5

// Property value shorthand
const x = 10,
  y = 20;
const point = { x, y }; // same as { x: x, y: y }

const calculator = {
  add(a, b) {
    return a + b;
  }, // shorthand for add: function(a,b){…}
};

// let user = { name: "Luigi", age: 30 };

// console.log("age" in user); // true

let animal = {
    name: "Berthum",
    age: 18,
    isGoodBoy: true
};

for (let key in animal) {
    // keys
    console.log(key); // name, age, isGoodBoy
    // values for the keys
     console.log(animal[key]); // Berthum, 18, true
}
