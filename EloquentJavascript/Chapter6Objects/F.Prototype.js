let library = {
  isAvailable: true,
  location: 'Main Branch',
};

function Book(title) {
  this.title = title;
}

// Link prototype: Book instances will inherit from library
Book.prototype = library;

let book1 = new Book('Eloquent JavaScript');

// Let's test inheritance
console.log(book1.title); // "Eloquent JavaScript" (own property)
console.log(book1.isAvailable); // true (inherited from library)
console.log(book1.location); // "Main Branch" (inherited)

let book2 = new Book('Data Structures');

console.log(book2.title);


function Car(brand, year) {
    this.brand = brand;
    this.year = year;
    this.describe = function () {
        console.log(`${this.brand} from ${this.year}`);
    };
}

let Luigi = new Car("Toyota", 2020);
Luigi.describe(); // Toyota from 2020
console.log(Luigi.brand); // Toyota

let anotherCar = new Luigi.constructor("Honda", 2022);

anotherCar.describe(); // Honda from 2022

console.log(anotherCar.brand); // Honda

// Exercise 1
function Rabbit() { }
Rabbit.prototype = { eats: true };
let rabbit = new Rabbit();

// rabbit is created.

// Internally, it has [[Prototype]] pointing to the object { eats: true }.
