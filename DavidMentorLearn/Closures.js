// PART 3
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
console.log(counter());
console.log(counter());

// ✅ Why Closures Are Useful
// Data privacy (like private variables)

// Partial application or function factories

// Event handlers that need access to outer state

// const vault = createSecretVault("open-sesame", "Luigi's hidden message");

// console.log(vault.getSecret("wrong"));       // "Access denied!"
// console.log(vault.getSecret("open-sesame")); // "Luigi's hidden message"

// When called, the function body sees the environment in which it was created,
// not the environment in which it is called.

// Exercises
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(10, 5));

function minTernary(a, b) {
    return a < b ? a : b;
}

console.log(minTernary(20, 340));



function countBs(str) {
  return countChar(str, 'B');
}

function countChar(text, targetChar) {
  let count = 0;

  for (const char of text) {
    if (char === targetChar) {
      count++;
    }
  }

  return count;
}
  


console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


function exampleFunction() {
  return "Hello";
  return "World!";
};

exampleFunction();


const developer = 'Jessica';

function greet() {
  console.log('Hello, ' + developer);
}

console.log(greet());


const sum = (num1, num2) => num1 + num2
console.log(sum(0, 0) + 10);

const numbers = [1, 2, 3];
console.log(numbers[10]);