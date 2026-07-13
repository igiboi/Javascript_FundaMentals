// ==========================================================
// PRACTICE: Your first class from scratch (no peeking!)
// Goal: cement class / constructor / this / method / new / instance
// ==========================================================

// 1. Define a class called Car
//    - constructor takes two parameters: make and model
//    - assign both to the instance using `this`

// 2. Add a method called drive()
//    - it logs: "The <make> <model> is driving"
//    - use a template literal with this.make and this.model

// 3. Create TWO instances with `new`
//    - e.g. a Toyota Corolla and a Honda Civic

// 4. Call drive() on both instances


// ---- Write your code below ----
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`The ${this.make} ${this.model} is driving`);
  }
}

const honda = new Car("Honda", "Hatchback");
const toyota = new Car("Toyota", "Prius");

honda.drive(); // The Honda Hatchback is driving

toyota.drive(); // The Toyota Prius is driving