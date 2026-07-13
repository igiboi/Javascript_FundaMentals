"use strict";

// PRACTICE: inheritance + super() from scratch (no peeking)
// Run with:  node inheritance.js

// 1. Parent class: Vehicle
//    - constructor takes (brand, year), assign both with `this`

// 2. Child class: Car extends Vehicle
//    - constructor takes (brand, year, numDoors)
//    - call super(brand, year) FIRST
//    - then assign this.numDoors
//    - add a method honk() that logs "Honk! Honk!"

// 3. Create a Car instance: brand "Toyota", year 2020, 4 doors

// 4. Log myCar.brand, myCar.year, myCar.numDoors, and call myCar.honk()
//    Predict the output BEFORE you run it.

// ---- Write your code below ----
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(brand, year, numDoors) {
    super(brand, year);
    this.numDoors = numDoors;
  }
  honk() {
    console.log("Honk! Honk!");
  }
}

const myCar = new Car("Toyota", 2020, 4);

console.log(myCar.brand);
console.log(myCar.year);
console.log(myCar.numDoors);
myCar.honk();