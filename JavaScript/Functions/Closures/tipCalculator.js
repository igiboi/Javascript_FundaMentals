// Requirements:
// 1. Calculate tip based on bill amount and service quality
// 2. Split the total among people
// 3. Return breakdown

// Service quality determines tip percentage:
// 'excellent' → 20%
// 'good' → 15%
// 'okay' → 10%

// Build these functions:
function getTipPercentage(serviceQuality) {
  // Your code
}

function calculateTip(billAmount, tipPercentage) {
  // Your code
}

function calculateTotal(billAmount, tip) {
  // Your code
}

function splitBill(total, numberOfPeople) {
  // Your code
}

function formatCurrency(amount) {
  // Your code
}

// Final function that uses all of them:
function calculateBillBreakdown(billAmount, serviceQuality, numberOfPeople) {
  // Your code
  // Should return: { billAmount, tip, total, perPerson }
}

// Test it:
calculateBillBreakdown(100, "excellent", 4);
// Should return something like:
// { billAmount: '$100.00', tip: '$20.00', total: '$120.00', perPerson: '$30.00' }
