"use strict";

// ============================================================
// `this` has 3 situations. The value depends on WHERE/HOW it's used.
// ============================================================

// -------- CASE 1: inside an object METHOD --------
// this = the object left of the dot (the thing you called it on)
const dog = {
  name: "Gino",
  bark() {
    console.log("CASE 1 - method:", this.name); // this = dog
  },
};
dog.bark(); // "Gino"  ← this is `dog`


// -------- CASE 2: a STANDALONE function --------
// this = undefined (in strict mode) or the global object (non-strict)
function standalone() {
  console.log("CASE 2 - standalone:", this); // no object left of a dot
}
standalone(); // undefined (strict mode)


// -------- CASE 3: an ARROW function --------
// this = inherited from WHERE it's written, not who calls it.
// Watch it BREAK when used as a method:
const cat = {
  name: "Whiskers",
  meow: () => {
    // arrow inherits `this` from the outer scope (here: the file/module top),
    // NOT from `cat`. So this.name is not "Whiskers".
    console.log("CASE 3 - arrow as method:", this.name); // {} or undefined, NOT cat
  },
};
cat.meow(); // does NOT print "Whiskers" — arrow ignored `cat`
