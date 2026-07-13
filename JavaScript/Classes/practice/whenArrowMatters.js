"use strict";

// A shopping cart that reminds you what's inside after a delay.
// This is where arrow-vs-regular `this` ACTUALLY bites you.

// ---------- BROKEN version: regular function callback ----------
const cartBroken = {
  owner: "Luigi",
  remind() {
    // `this` here = cartBroken (good, it's a normal method call)
    setTimeout(function () {
      // but THIS inner regular function gets its OWN `this` (undefined),
      // so this.owner blows up.
      console.log("BROKEN:", this.owner);
    }, 100);
  },
};

// ---------- FIXED version: arrow callback ----------
const cartFixed = {
  owner: "Luigi",
  remind() {
    // `this` here = cartFixed
    setTimeout(() => {
      // arrow has NO own `this`, so it borrows remind's `this` = cartFixed.
      // this.owner correctly = "Luigi"
      console.log("FIXED:", this.owner);
    }, 200);
  },
};

cartBroken.remind(); // will error / print undefined
cartFixed.remind();  // prints "Luigi"
