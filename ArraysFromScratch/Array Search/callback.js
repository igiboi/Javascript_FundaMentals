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

function processOrder(orderNumber, callback) {
  console.log(`processing order ${orderNumber}`);
  callback();
}

function sayOrder() {
  console.log(`Order processed`)
}


console.log(processOrder(26, sayOrder));


/// fetching data

function fetchData(api, callback) {
  console.log(`Fetching from ${api}...`);

  setTimeout(function () {
    const fakeData = { name: "Luigi", job: "Developer" };
    callback(fakeData);
  }, 2000); // 2 seconds delay
}


fetchData('https://api.com/user', function (data) {
  console.log('Received:', data);
});

// Factory Functions 

// function multiplyBy(factor) {
//   return function (number) {
//     return number * factor;
//   }
// }

// let double = multiplyBy(2);


// let double = function (number) {
//   return number * 2;
// };


let triple = multiplyBy(3);

console.log(double(5)); // 10 because 5 * 2