// .1)
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } 
    return 'odd';
}

console.log(isEvenOrOdd(22)); // even
console.log(isEvenOrOdd(7)); // odd

// 2.) 
function maxOfTwo(a, b) {
    // return the bigger of the two numbers
    if (a > b) {
        return a;
    }

    return b;
}

console.log(maxOfTwo(55, 9));

console.log(maxOfTwo(55, 1230));


const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + amount * taxRate;
};

console.log(calculateTotal(100));

function exampleFunction() {
    return 'Hello';
    return 'World';
}

console.log(exampleFunction());


const developer = 'Jessica';

function greet() {
  console.log('Hello, ' + developer);
}

console.log(greet());

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(0, 0) + 10);


const sum = (num1, num2) => num1 + num2;
console.log(sum(0, 0) + num2);

const divideTwoNumbers = (num1, num2) => num1 / num2;
console.log(divideTwoNumbers(3, 0)); 