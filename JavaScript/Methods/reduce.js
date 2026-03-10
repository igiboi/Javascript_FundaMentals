const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Use reduce to return an object that counts how many times each word appears
// Expected output: { apple: 3, banana: 2, orange: 1 }

// Use reduce to return an object that counts how many times each word appears
// Expected output: { apple: 3, banana: 2, orange: 1 }

words.reduce((acc, curr) => {
  if (acc[curr]) {
    // increment
    acc[curr]++
  } else {
    // set to 1
    acc[curr] = 1
  }
  return acc;
}, {})
