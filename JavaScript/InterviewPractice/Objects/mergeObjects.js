// Problem: Write a function called mergeObjects that takes two objects as parameters.
// Return a new object that combines all properties from both objects.
// If both objects have the same key, the second object's value should win.
// Example: mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }) => { a: 1, b: 3, c: 4 }

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

function mergeObjects(obj1, obj2) {
  const merged = { ...obj1, ...obj2 }
  
  return merged; 
}

const result = mergeObjects(obj1, obj2);

console.log(result);