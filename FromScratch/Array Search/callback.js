// You give your number to a pizza place (the callback), and when the pizza is ready, they call you back.

function sayHi(name) {
    console.log("Hi" + name);
}

// callback === sayHi (so it's a reference to the function sayHi)
function greetUser(callback) {
  const user = 'Luigi';

  // Now we call the callback function (which is sayHi)
  // So this line ↓ becomes:
  // sayHi("Luigi")
  callback(user);
}

greetUser(sayHi);


// [Empty]    ← Initial state

// [greetUser]  ← greetUser(sayHi) is called

// [greetUser]
// [sayHi]     ← sayHi("Luigi") is called inside greetUser

// 🖨️ Hi Luigi   ← sayHi runs and prints

// [sayHi]    ← sayHi finishes and is popped

// [greetUser]    ← greetUser finishes and is popped

// [Empty]   ← Program done