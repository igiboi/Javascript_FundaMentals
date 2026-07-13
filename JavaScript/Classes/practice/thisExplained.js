// ============================================================
// Understanding: this.property = parameter
// I renamed the parameter so you can SEE the two are different.
// ============================================================

class Dessert {
  // "input" is the PARAMETER — the value handed in. Temporary.
  constructor(input) {
    // this.hasPeanuts is the PROPERTY — a slot on the new object. Permanent.
    this.hasPeanuts = input;
    //   ▲ property        ▲ parameter
    // "take the value in `input` and store it on the object as `hasPeanuts`"
  }
}

// Create an object, passing `true` as the argument.
const cake = new Dessert(true);

// The parameter `input` is GONE now (it only lived inside the constructor).
// But the property stuck to the object:
console.log(cake.hasPeanuts); // true

// Make another one with a different value:
const cookie = new Dessert(false);
console.log(cookie.hasPeanuts); // false

// Each object kept its OWN value:
console.log(cake.hasPeanuts);   // true
console.log(cookie.hasPeanuts); // false
