function greet(name, age) {
  if (typeof name !== 'string' || typeof age !== 'number') {
    return 'Invalid input';
  }

  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet(10, 'Luigi')); // "Invalid input"
console.log(greet('Luigi', 25)); // "Hello, my name is Luigi and I am 25 years old."

//2 
function safeDivide(a, b) {
    if (b === 0) {
      return  'Cannot divide by zero';
    }

    return a / b;
}

console.log(safeDivide(7, 0));

// 3 
function evenOrOddNoMod(n) {
    
}