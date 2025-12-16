// 1. FUNCTION DECLARATION
function add(a, b) {
  return a + b;
}

// 2. FUNCTION EXPRESSION
const add = function (a, b) {
  return a + b;
};

// 3. ARROW FUNCTION (long form)
const add = (a, b) => {
  return a + b;
};

// 4. ARROW FUNCTION (concise - implicit return)
const add = (a, b) => a + b;

// Exercise 1: Predict the behavior

console.log(typeof declaredFunc); // Function[function]
console.log(typeof expressionFunc); //  // ERROR! Cannot access 'expressionFunc' before initialization
console.log(typeof arrowFunc); // Cannot access 'arrowFunc' before initialization

function declaredFunc() {
  return "I'm declared!";
}

const expressionFunc = function () {
  return "I'm an expression!";
};

const arrowFunc = () => "I'm an arrow!";