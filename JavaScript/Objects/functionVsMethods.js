// Scenario: Add a method that returns the user's full name.

const user = {
  firstName: "Luigi",
  lastName: "Mangione",
  age: 26,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // "Luigi Mangione"

// Edge cases
// Edge Case Handling - What if firstName or lastName were missing?
getFullName() {
  // Defensive programming (for production code)
  if (!this.firstName || !this.lastName) {
    return "Name not available";
  }
  return `${this.firstName} ${this.lastName}`;
}

// But for interview/learning purposes, your solution is perfect! Interviewers want to see you solve the core problem first, then you can mention edge cases if they ask.


const getNameFunction = user.getFullName;
console.log(getNameFunction()); // What will this print?













// ⚡ Problem 2: Slightly Harder - Shopping Cart with Helper Function
// Scenario: Create a shopping cart object with methods to add items and calculate the total. Also create a standalone function that applies a discount.
// Input:
// javascriptconst cart = {
//   items: [],
//   // Add your methods here
// };

// Standalone function to apply discount
// Your code here
// Expected Behavior:
// javascriptcart.addItem("Laptop", 1000);
// cart.addItem("Mouse", 25);
// cart.addItem("Keyboard", 75);

// console.log(cart.getTotal()); // 1100

// const discountedTotal = applyDiscount(cart.getTotal(), 10);
// console.log(discountedTotal); // 990 (10% off)
// Your Tasks:

// Create an addItem(name, price) method that adds items to the cart
// Create a getTotal() method that returns the sum of all prices
// Create a standalone function applyDiscount(total, percentage) that calculates the discounted price