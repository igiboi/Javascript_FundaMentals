// Prototypes allow objects to share methods without duplicating them.
// They form a chain of lookup so an object can “inherit” properties from another.

let rabbitProto = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(rabbitProto);

killerRabbit.type = "killer";

killerRabbit.speak("SKKKRRRRTTT");

// The killer rabbit says 'SKKKRRRRTTT'


// Example of how property chain lookup works
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

// Link rabbit to animal
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps); // → true (found on rabbit)
console.log(rabbit.eats);  // → true (found on prototype: animal)
console.log(rabbit.toString); // → function (from Object.prototype)

// rabbit --> animal --> Object.prototype --> null

console.log(Object.getPrototypeOf(rabbit) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// You can use Object.create to create an object with a specific prototype.

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak('I am fear and darkness');

let looneyTunes = {
    eats: true
};

// let bugsBunny = {
//     jumps: true
// };

// deprecated: bugsBunny.__proto__ = looneyTunes;
//Latest way
let bugsBunny = Object.create(looneyTunes);
bugsBunny.jumps = true;

console.log(bugsBunny.eats , 'eats');
console.log(bugsBunny); // { jumps: true }

// other way to add
let animals = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbits = Object.create(animals);
rabbits.scream = "yayayayay";

let longEar = Object.create(rabbits);
longEar.earLenght = 10;

console.log(rabbits.scream);
console.log(longEar.eats);

// walk is taken from the prototype
rabbits.walk(); // → "Animal walk"

// Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit, and then in animal.

// for..in loop iterates over inehrited properties
for (let prop in rabbits) {
    let isOwn = rabbits.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}

// The value of this is always the object before the dot, regardless of where the method is defined.

// Example:
// rabbit.eat();     // this = rabbit
// animal.eat();     // this = animal
// ✅ Why this matters:
// This allows shared methods (like eat) to act on the calling object, not the one where the method lives.

// It’s how prototypes support behavior reuse across many different objects, each with their own state.

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food); // pushes into *this* object's stomach
  }
};

let speedy = Object.create(hamster);
speedy.stomach = []; // 🔥 own stomach (not shared)

let lazy = Object.create(hamster);
lazy.stomach = [];   // 🔥 own stomach (not shared)

// Feed speedy
speedy.eat("apple");

console.log(speedy.stomach); // ✅ ["apple"]
console.log(lazy.stomach);   // ✅ [] — NOT shared!
