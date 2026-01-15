// Higher-order function 
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i)); // Callback transforms each element
  }
  return result;
}

// Now use it with DIFFERENT callbacks (infinite flexibility)
const numbers = [1, 2, 3, 4];

const doubled = myMap(numbers, n => n * 2);
console.log(doubled); //[ 2, 4, 6, 8 ]

const squared = myMap(numbers, n => n * n);
console.log(squared); //[ 1, 4, 9, 16 ]

const withIndex = myMap(numbers, (n, i) => `${i}: ${n}`);
console.log(withIndex); // ["0: 1", "1: 2", "2: 3", "3: 4"]