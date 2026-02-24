function frankenSplice(arr1, arr2, n) {
  // Step 1: Create a new array (to avoid mutation)
  let result = [];
  // Step 2: Get elements before index n
  for (let i = 0; i < n; i++) {
    // Do something with arr2[i]
    result.push(arr2[i]);
  }
  // Step 3: Add ALL elements from arr1
  result.push(...arr1);
  // Step 4: Add elements from arr2 FROM index n onward
  for (let i = n; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  // Step 5: Return the new array
  return result;
}

// Test 1: Insert array in middle
console.log("Test 1: Insert array in middle");
const result1 = frankenSplice([1, 2, 3], [4, 5], 1);
console.log("Expected:", [4, 1, 2, 3, 5]);
console.log("Got:", result1);
console.log("Pass:", JSON.stringify(result1) === JSON.stringify([4, 1, 2, 3, 5]));
console.log("---");

// Test 2: Insert numbers into array with strings
console.log("Test 2: Insert numbers into array with strings");
const result2 = frankenSplice([1, 2], ["a", "b"], 1);
console.log("Expected:", ["a", 1, 2, "b"]);
console.log("Got:", result2);
console.log("Pass:", JSON.stringify(result2) === JSON.stringify(["a", 1, 2, "b"]));
console.log("---");

// Test 3: Insert into middle of longer array
console.log("Test 3: Insert into middle of longer array");
const result3 = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
console.log("Expected:", ["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
console.log("Got:", result3);
console.log("Pass:", JSON.stringify(result3) === JSON.stringify(["head", "shoulders", "claw", "tentacle", "knees", "toes"]));
console.log("---");

// Test 4: Insert into empty array at index 0
console.log("Test 4: Insert into empty array at index 0");
const result4 = frankenSplice([1, 2, 3, 4], [], 0);
console.log("Expected:", [1, 2, 3, 4]);
console.log("Got:", result4);
console.log("Pass:", JSON.stringify(result4) === JSON.stringify([1, 2, 3, 4]));
console.log("---");
