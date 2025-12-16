// Scenario 1
function execute(callback) {
  return callback(10);
}

const result1 = execute(function (x) {
  x + 5; // <-- no return so it is 15 but it throws it away.
});

console.log("Result 1:", result1);

// Scenario 2
const scores = [];

function processScores(numbers, callback) {
  for (let i = 0; i < numbers.length; i++) {
    callback(numbers[i]);
  }
}

processScores([85, 90, 78], function (score) {
  return score + 5;
});

console.log("Scores:", scores);

// Scenario 3
function transform(numbers, callback) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    const value = callback(numbers[i]);
    results.push(value);
  }
  return results;
}

const result3 = transform([1, 2, 3], function (n) {
  return n * 10;
});

console.log("Result 3:", result3);



const results = [];

function applyToEach(numbers, callback) {
  for (let i = 0; i < numbers.length; i++) {
    callback(numbers[i]);
  }
}

applyToEach([1, 2, 3], function (n) {
  return n * 2; // ← Added return!
});

console.log(results);

function transform(numbers, callback) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const value = callback(numbers[i]);  // ← CAPTURES return value
    newArray.push(value);
  }
  return newArray;
}

const doubled = transform([1, 2, 3], function(n) {
  return n * 2;  // ← Return is used now!
});

console.log(doubled);  // [2, 4, 6]