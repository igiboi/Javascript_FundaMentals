const number = [1, 2, 3];
const copy = [...number];

console.log(copy); // [1, 2, 3]

// Merging arrays 
const first = [1, 2];
const second = [3, 4];
const merged = [...first, ...second];

console.log(merged);

// Example 3: Adding values
const arr = [2, 3, 4];
const newArr = [1, ...arr, 5];

console.log(newArr);

// Part 2: Objects

// Copying an object
const user = { name: "Luigi", role: "developer" };
const copyUser = { ...user }; // { name: "Luigi", role: "developer" }

// Merging Object
const defaults = { theme: "dark", showSidebar: true };
const overrides = { theme: "light" };

const settings = { ...defaults, ...overrides };

console.log(settings); // { theme: "light", showSidebar: true }


// Flatten arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const flattenArray = [ ...arr1, ...arr2, ...arr3 ];

console.log(flattenArray);