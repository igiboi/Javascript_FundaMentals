// ============================================
// ADVANCED OBJECT CHALLENGES
// ============================================

// These challenges are harder and test your understanding
// of classes, constructors, prototypes, and complex object manipulation

console.log("=== ADVANCED OBJECT CHALLENGES ===\n");

// ============================================
// CHALLENGE 1: Create a Book Class
// ============================================

console.log("=== CHALLENGE 1: Book Class ===");
// Create a Book class with:
// - Constructor: takes title, author, pages, isRead (default false)
// - Method: read() - sets isRead to true, returns "You finished reading [title]"
// - Method: getSummary() - returns "[title] by [author], [pages] pages"

// YOUR SOLUTION HERE:


// TESTS:
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book2 = new Book("1984", "George Orwell", 328, true);
console.log("Test 1:", book1.title === "The Hobbit" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", book1.isRead === false ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", book1.read() === "You finished reading The Hobbit" ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", book1.isRead === true ? "✓ PASS" : "✗ FAIL");
console.log("Test 5:", book2.getSummary() === "1984 by George Orwell, 328 pages" ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 2: Library System
// ============================================

console.log("\n=== CHALLENGE 2: Library System ===");
// Create a Library class with:
// - Constructor: initializes empty books array
// - Method: addBook(book) - adds a Book to the library
// - Method: getUnreadBooks() - returns array of books where isRead is false
// - Method: getTotalPages() - returns sum of pages from all books

// YOUR SOLUTION HERE:


// TESTS:
const library = new Library();
const book3 = new Book("Harry Potter", "J.K. Rowling", 400);
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 200);
const book5 = new Book("To Kill a Mockingbird", "Harper Lee", 324, true);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
const unread = library.getUnreadBooks();
console.log("Test 1:", unread.length === 2 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", library.getTotalPages() === 924 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 3: User Class with Getters/Setters
// ============================================

console.log("\n=== CHALLENGE 3: User with Getters/Setters ===");
// Create a User class with:
// - Constructor: username, email
// - Getter: email - returns the email
// - Setter: email - validates email has "@" and ".", otherwise console.log error
// - Method: getDisplayName() - returns "@username"

// YOUR SOLUTION HERE:


// TESTS:
const user1 = new User("john_dev", "john@example.com");
console.log("Test 1:", user1.email === "john@example.com" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", user1.getDisplayName() === "@john_dev" ? "✓ PASS" : "✗ FAIL");
user1.email = "invalid";  // Should show error
user1.email = "valid@email.com";  // Should work
console.log("Test 3:", user1.email === "valid@email.com" ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 4: Temperature Converter (Static Methods)
// ============================================

console.log("\n=== CHALLENGE 4: Temperature Converter ===");
// Create a Temperature class with STATIC methods:
// - celsiusToFahrenheit(celsius) - returns (celsius * 9/5) + 32
// - fahrenheitToCelsius(fahrenheit) - returns (fahrenheit - 32) * 5/9
// - isFreezingCelsius(celsius) - returns true if celsius <= 0

// YOUR SOLUTION HERE:


// TESTS (Notice we call on the class, not an instance!)
console.log("Test 1:", Temperature.celsiusToFahrenheit(0) === 32 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", Temperature.celsiusToFahrenheit(100) === 212 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", Temperature.fahrenheitToCelsius(32) === 0 ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", Temperature.isFreezingCelsius(-5) === true ? "✓ PASS" : "✗ FAIL");
console.log("Test 5:", Temperature.isFreezingCelsius(10) === false ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 5: Inheritance - Vehicle System
// ============================================

console.log("\n=== CHALLENGE 5: Vehicle Inheritance ===");
// Create a Vehicle parent class with:
// - Constructor: brand, model, year
// - Method: getInfo() - returns "year brand model"
// - Method: start() - returns "brand model is starting"
//
// Create a Car child class that extends Vehicle:
// - Constructor: brand, model, year, doors
// - Override start() - returns "brand model's engine is starting"
// - Method: honk() - returns "Beep beep!"
//
// Create a Motorcycle child class that extends Vehicle:
// - Constructor: brand, model, year, hasSidecar (boolean)
// - Override start() - returns "brand model is roaring to life!"

// YOUR SOLUTION HERE:


// TESTS:
const car = new Car("Toyota", "Camry", 2020, 4);
const bike = new Motorcycle("Harley", "Davidson", 2019, false);
console.log("Test 1:", car.getInfo() === "2020 Toyota Camry" ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", car.start() === "Toyota Camry's engine is starting" ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", car.honk() === "Beep beep!" ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", car.doors === 4 ? "✓ PASS" : "✗ FAIL");
console.log("Test 5:", bike.start() === "Harley Davidson is roaring to life!" ? "✓ PASS" : "✗ FAIL");
console.log("Test 6:", bike.hasSidecar === false ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 6: Shopping Cart Class
// ============================================

console.log("\n=== CHALLENGE 6: Shopping Cart ===");
// Create a ShoppingCart class with:
// - Constructor: initializes empty items array
// - Method: addItem(name, price, quantity) - adds object to items array
// - Method: removeItem(name) - removes item from array by name
// - Method: getTotal() - returns sum of (price * quantity) for all items
// - Method: getItemCount() - returns total quantity of all items
// - Getter: isEmpty - returns true if no items in cart

// YOUR SOLUTION HERE:


// TESTS:
const cart = new ShoppingCart();
cart.addItem("Apple", 2, 5);
cart.addItem("Banana", 1, 10);
cart.addItem("Orange", 3, 3);
console.log("Test 1:", cart.getTotal() === 29 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", cart.getItemCount() === 18 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", cart.isEmpty === false ? "✓ PASS" : "✗ FAIL");
cart.removeItem("Banana");
console.log("Test 4:", cart.getTotal() === 19 ? "✓ PASS" : "✗ FAIL");
console.log("Test 5:", cart.getItemCount() === 8 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 7: Task Manager
// ============================================

console.log("\n=== CHALLENGE 7: Task Manager ===");
// Create a Task class with:
// - Constructor: title, priority (default "medium")
// - Property: completed (default false)
// - Method: complete() - sets completed to true
//
// Create a TaskManager class with:
// - Constructor: initializes empty tasks array
// - Method: addTask(task) - adds a Task to the array
// - Method: getCompletedTasks() - returns array of completed tasks
// - Method: getPendingTasks() - returns array of incomplete tasks
// - Method: getHighPriorityTasks() - returns array of tasks with priority "high"

// YOUR SOLUTION HERE:


// TESTS:
const task1 = new Task("Learn Objects", "high");
const task2 = new Task("Practice coding", "high");
const task3 = new Task("Take a break", "low");
task1.complete();

const manager = new TaskManager();
manager.addTask(task1);
manager.addTask(task2);
manager.addTask(task3);

console.log("Test 1:", manager.getCompletedTasks().length === 1 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", manager.getPendingTasks().length === 2 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", manager.getHighPriorityTasks().length === 2 ? "✓ PASS" : "✗ FAIL");

// ============================================
// CHALLENGE 8: Bank Account with Private Balance
// ============================================

console.log("\n=== CHALLENGE 8: Bank Account ===");
// Create a BankAccount class with:
// - Constructor: owner, initialBalance
// - Private property: _balance (use underscore convention)
// - Getter: balance - returns formatted "$XXX.XX"
// - Method: deposit(amount) - adds to balance if amount > 0
// - Method: withdraw(amount) - subtracts if sufficient funds, returns true/false
// - Method: transfer(amount, otherAccount) - withdraw from this, deposit to other

// YOUR SOLUTION HERE:


// TESTS:
const account1 = new BankAccount("Alice", 1000);
const account2 = new BankAccount("Bob", 500);
console.log("Test 1:", account1.balance === "$1000.00" ? "✓ PASS" : "✗ FAIL");
account1.deposit(200);
console.log("Test 2:", account1.balance === "$1200.00" ? "✓ PASS" : "✗ FAIL");
const success = account1.withdraw(300);
console.log("Test 3:", success === true && account1.balance === "$900.00" ? "✓ PASS" : "✗ FAIL");
const failed = account1.withdraw(10000);
console.log("Test 4:", failed === false ? "✓ PASS" : "✗ FAIL");
account1.transfer(100, account2);
console.log("Test 5:", account1.balance === "$800.00" ? "✓ PASS" : "✗ FAIL");
console.log("Test 6:", account2.balance === "$600.00" ? "✓ PASS" : "✗ FAIL");

// ============================================
// BONUS CHALLENGE: Game Character System
// ============================================

console.log("\n=== BONUS CHALLENGE: Game Characters ===");
// Create a Character parent class with:
// - Constructor: name, health (default 100), attackPower (default 10)
// - Method: attack(target) - reduces target's health by this.attackPower
// - Method: isAlive() - returns true if health > 0
//
// Create a Warrior child class:
// - Constructor: name, sets attackPower to 15
// - Method: rage() - doubles attackPower for one turn, then resets
//
// Create a Mage child class:
// - Constructor: name, sets attackPower to 20, health to 80
// - Property: mana (default 100)
// - Method: castSpell(target) - costs 30 mana, does 25 damage

// YOUR SOLUTION HERE:


// TESTS:
const warrior = new Warrior("Conan");
const mage = new Mage("Gandalf");
console.log("Test 1:", warrior.health === 100 ? "✓ PASS" : "✗ FAIL");
console.log("Test 2:", warrior.attackPower === 15 ? "✓ PASS" : "✗ FAIL");
console.log("Test 3:", mage.health === 80 ? "✓ PASS" : "✗ FAIL");
console.log("Test 4:", mage.mana === 100 ? "✓ PASS" : "✗ FAIL");
warrior.attack(mage);
console.log("Test 5:", mage.health === 65 ? "✓ PASS" : "✗ FAIL");
mage.castSpell(warrior);
console.log("Test 6:", warrior.health === 75 ? "✓ PASS" : "✗ FAIL");
console.log("Test 7:", mage.mana === 70 ? "✓ PASS" : "✗ FAIL");
console.log("Test 8:", warrior.isAlive() === true ? "✓ PASS" : "✗ FAIL");

// ============================================
// FINAL SUMMARY
// ============================================

console.log("\n========================================");
console.log("Advanced Challenges Complete!");
console.log("These test your understanding of:");
console.log("- Classes and constructors");
console.log("- Inheritance with extends/super");
console.log("- Getters and setters");
console.log("- Static methods");
console.log("- Complex object manipulation");
console.log("========================================");
