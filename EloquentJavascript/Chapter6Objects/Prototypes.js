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
