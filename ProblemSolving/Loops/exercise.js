/* find all the positive numbers in the array and then add up all the positive numbers together */


function sumPositives(arr) {
  let total = 0;

  for (let number of arr) {
    if (number > 0) {
      total += number;
    }
  }
  return total;
} 

console.log(sumPositives([1, 2, 3, 4, 5]));
console.log(sumPositives([1, -4, 7, 12]));
console.log(sumPositives([-1, -2, -3]));
console.log(sumPositives([5, 0, 10]));



function getAdultNames(people) {
  let result = [];

  for (let person of people) {
    if (person.age >= 18) {
      result.push(person.name);
    }
  }
  return result;
}

console.log(
  getAdultNames([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 25 },
  ])
);

console.log(
  getAdultNames([
    { name: "John", age: 17 },
    { name: "Jane", age: 18 },
  ])
);

function getTotalPrice(cart) {
  let totalprice = 0;

  for (let item of cart) {
    let itemTotal = item.quantity * item.price;
    totalprice += itemTotal;
  }
  return totalprice;
}

console.log(
  getTotalPrice([
    { name: "Apple", price: 1.5, quantity: 3 },
    { name: "Banana", price: 0.75, quantity: 2 },
  ])
);

console.log(getTotalPrice([{ name: "Book", price: 12.99, quantity: 5 }]));