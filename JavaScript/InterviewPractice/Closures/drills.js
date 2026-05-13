/*
  ============================================
  CLOSURES — Practice Drills
  ============================================
  Work through these in order.
  Each one builds on the last.
*/


// ---- DRILL 1 ----
// Create a function called makeGreeter that takes a name parameter.
// It should return a function that, when called, returns "Hello, [name]!"
// Example:
//   const greetLuigi = makeGreeter("Luigi");
//   greetLuigi(); // "Hello, Luigi!"
// your code here

function makeGreeter(name) {
  return function() {
    return `Hello, ${name}!`;
  }
}

const greetLuigi = makeGreeter("Luigi");
console.log(greetLuigi()); // "Hello, Luigi!"
  
const greetMario = makeGreeter("Mario");
console.log(greetMario()); 
   

// ---- DRILL 2 ----
// Create a function called makeCounter that takes a starting number.
// It should return a function that increments and returns the count each time it's called.
// Example:
//   const countFromFive = makeCounter(5);
//   countFromFive(); // 6
//   countFromFive(); // 7
//   countFromFive(); // 8
// your code here
function makeCounter(startingNumber) {
  return function () {
    startingNumber++;
    return startingNumber;
  }
}

const countFromFive = makeCounter(5);
console.log(countFromFive()); // 6
console.log(countFromFive()); // 7
console.log(countFromFive()); // 8

// ---- DRILL 3 ----
// Create a function called makeAdder that takes a number x.
// It should return a function that takes a number y and returns x + y.
// Example:
//   const addTen = makeAdder(10);
//   addTen(3);  // 13
//   addTen(7);  // 17
// your code here
function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

const addTen = makeAdder(10);
console.log(addTen(3));
console.log(addTen(7));

// ---- DRILL 4 ----
// Create a function called makeLogger that takes a prefix string.
// It should return a function that takes a message and logs "[prefix]: [message]"
// Example:
//   const logError = makeLogger("ERROR");
//   logError("something went wrong"); // logs "ERROR: something went wrong"
//   const logInfo = makeLogger("INFO");
//   logInfo("server started");        // logs "INFO: server started"
// your code here
function makeLogger(string) {
  return function (string2) {
    return `${string}: ${string2}`;
    }
}

const logError = makeLogger("ERROR");
console.log(logError("something went wrong")); // logs "ERROR: something went wrong"
const logInfo = makeLogger("INFO");
console.log(logInfo("server started"));        // logs "INFO: server started"

// ---- DRILL 5 (challenge) ----
// Create a function called makeBankAccount that takes an initial balance.
// It should return an object with two methods: deposit(amount) and getBalance().
// The balance should not be directly accessible from outside.
// Example:
//   const account = makeBankAccount(100);
//   account.deposit(50);
//   account.getBalance(); // 150
// your code here

/*
makeBankAccount scope
┌─────────────────────────────────┐
│  initialBalance = 100           │
│                                 │
│  deposit()  ←──┐                │
│                ├── both share   │
│  getBalance() ←┘   the same     │
│                    variable     │
└─────────────────────────────────┘
        ↑
        outside cannot touch initialBalance directly
        only deposit() and getBalance() can
*/

function makeBankAccount(initialBalance) {
  return {
    
    deposit(amount) {
      return initialBalance = initialBalance + amount; // mutate it
    },

    getBalance() {
      return initialBalance;

    }
  }
}

const account = makeBankAccount(100);
console.log(account.deposit(50));
console.log(account.getBalance());