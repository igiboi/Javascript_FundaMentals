// ==========================================
// BROKEN VERSION (Mutates Original Array)
// ==========================================

const { use } = require("react");

console.log("=== BROKEN VERSION (Mutates Original) ===");

function addExpenseBroken(expenses, newExpense) {
  // ❌ PROBLEM: push() modifies the original array that was passed in
  // This is called "mutation" - we're changing the array in memory
  expenses.push(newExpense);

  // We return the same array (not a new one)
  // Since arrays are non-primitives, we're returning a REFERENCE to the same array
  return expenses;
}

// Create an array with one expense object
const myExpensesBroken = [{ id: 1, amount: 50 }];

// Call the function, passing in our array
// IMPORTANT: We're passing a REFERENCE to the array, not a copy
const updatedExpensesBroken = addExpenseBroken(myExpensesBroken, {
  id: 2,
  amount: 30,
});

// Both variables point to the SAME array in memory
// Think: Both people have the same Google Doc link
console.log("Same reference?", myExpensesBroken === updatedExpensesBroken);
// true - They're literally the same array object

// The original array was modified inside the function
// We now have 2 expenses instead of 1
console.log("Original length:", myExpensesBroken.length);
// 2 (we wanted this to stay 1!)

// The original array now has both expenses
// This is a side effect - we changed data we didn't mean to change
console.log("Original array:", myExpensesBroken);
// [ { id: 1, amount: 50 }, { id: 2, amount: 30 } ]

// The returned array is the SAME array (same reference)
console.log("Returned array:", updatedExpensesBroken);
// [ { id: 1, amount: 50 }, { id: 2, amount: 30 } ]

// ==========================================
// FIXED VERSION (Returns New Array)
// ==========================================

console.log("\n=== FIXED VERSION (Doesn't Mutate) ===");

function addExpenseFixed(expenses, newExpense) {
  // ✅ SOLUTION: Use spread operator to create a NEW array
  // What happens here:
  // 1. [...expenses] creates a NEW array and copies all elements from expenses
  // 2. We then add newExpense to the end of this NEW array
  // 3. The original expenses array is never touched
  // Think: We're making a photocopy of the list and adding to the copy
  return [...expenses, newExpense];

  // Alternative solutions that do the same thing:
  // return expenses.concat(newExpense);  // concat also returns new array
  // return expenses.slice().concat(newExpense);  // slice() copies, then concat adds
}

// Create an array with one expense object
const myExpensesFixed = [{ id: 1, amount: 50 }];

// Call the function, passing in our array
// The function will NOT modify this array
const updatedExpensesFixed = addExpenseFixed(myExpensesFixed, {
  id: 2,
  amount: 30,
});

// These are now two DIFFERENT arrays in memory
// myExpensesFixed points to the original array
// updatedExpensesFixed points to a NEW array
// Think: Two separate Google Docs, not a shared link
console.log("Same reference?", myExpensesFixed === updatedExpensesFixed);
// false - They're different array objects

// The original array was NOT modified
// It still has only 1 expense
console.log("Original length:", myExpensesFixed.length);
// 1 ✅ (original preserved!)

// The original array is unchanged - still has only the first expense
// This is what we want - no unexpected side effects
console.log("Original array:", myExpensesFixed);
// [ { id: 1, amount: 50 } ]

// The returned array is a NEW array with both expenses
// This is a fresh array created inside the function
console.log("Returned array:", updatedExpensesFixed);
// [ { id: 1, amount: 50 }, { id: 2, amount: 30 } ]

// ==========================================
// KEY CONCEPTS DEMONSTRATED
// ==========================================

/*
1. MUTATION vs IMMUTABILITY
   - Mutation: Changing the original data (BAD for predictable code)
   - Immutability: Creating new data instead of changing old (GOOD practice)

2. PASS BY REFERENCE (Non-Primitives)
   - When you pass an array/object to a function, you pass the REFERENCE
   - The function can modify the original if you're not careful
   - Like sharing a Google Doc link vs. sending a copy

3. SPREAD OPERATOR [...array]
   - Creates a NEW array
   - Copies all elements from the original
   - Original array remains untouched
   - Like making a photocopy

4. WHY THIS MATTERS
   - Prevents bugs where data changes unexpectedly
   - Makes code predictable and easier to debug
   - Follows functional programming best practices
   - Critical for React/modern JavaScript (state management)

5. REAL-WORLD ANALOGY
   BROKEN VERSION:
   - You give someone your notebook
   - They write in it
   - Your original notebook is changed
   
   FIXED VERSION:
   - You photocopy your notebook
   - They write in the photocopy
   - Your original notebook is safe
*/


// Internal expense data (should stay protected)
const expenses = [
  { id: 1, amount: 50, category: 'food' },
  { id: 2, amount: 30, category: 'transport' }
];

// Current implementation (has a bug!)
function getExpenses() {
  return [...expenses]; // shallow copy, but objects inside are still references
}

// User gets expenses
const userExpenses = getExpenses();

// User accidentally modifies the data
userExpenses.push({ id: 3, amount: 100, category: 'entertainment' });

// What happened to the original expenses array?
console.log(expenses.length); // What will this log?
console.log(expenses);
console.log(userExpenses.length);
console.log(userExpenses);