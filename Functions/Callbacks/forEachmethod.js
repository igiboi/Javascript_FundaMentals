function printNumber(index, num) {
  console.log(`${index}: ${num}`);
}

function myForEach(numbers, callback) {
  for (let i = 0; i < numbers.length; i++) {
    callback(i, numbers[i], );
  }
}

// Now use it
const fruits = ["apple", "banana", "cherry"];

myForEach(fruits, (fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

