function showMessage(from, message) { // from and message → parameters
  console.log(from + ': ' + message);
}

showMessage('Ann', 'Hello'); // 'Ann' and 'Hello' → arguments


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}

// Using OR || (the shortest variant):

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


// function expression 
let sayHi = function () {
  alert('Hello');
};


const readline = require('readline');

function ask(question, yes, no) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`${question} (yes/no): `, (answer) => {
    if (answer.toLowerCase() === 'yes') {
      yes();
    } else {
      no();
    }
    rl.close();
  });
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

// usage
ask("Do you agree?", showOk, showCancel);
