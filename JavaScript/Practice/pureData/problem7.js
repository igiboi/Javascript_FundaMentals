const orders = [
  { id: 1, customer: "Alice", status: "completed", amount: 120 },
  { id: 2, customer: "Bob", status: "pending", amount: 75 },
  { id: 3, customer: "Alice", status: "completed", amount: 200 },
  { id: 4, customer: "Charlie", status: "completed", amount: 90 },
  { id: 5, customer: "Bob", status: "cancelled", amount: 50 },
];

/*
function returns an object where key is a customer name and the value
is the total amount spent on completed orders only 


Output: { Alice: 320, Bob: 0, Charlie: 90 }

*/


function getTotalByCustomer(orders) {
  const customers = [...new Set(orders.map((order) => order.customer))];
 
  const initial = customers.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  return orders
    .filter((order) => order.status === "completed")
    .reduce((acc, curr) => {
      acc[curr.customer] = (acc[curr.customer] || 0) + curr.amount;
      return acc;
    }, initial);
}



/*

function getTotalByCustomer(orders) {
  // Step 1: Extract unique customer names from the orders array
  // using map to derive a list of names, and Set to remove duplicates
  const customers = [...new Set(orders.map((order) => order.customer))];

  // Step 2: Build the initial accumulator object using reduce
  // each unique customer name becomes a key with a starting value of 0
  const initial = customers.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  // Step 3: Filter orders to completed status only
  // then reduce into an object, using initial as the starting accumulator
  // so every customer is present in the result even with no completed orders
  return orders
    .filter((order) => order.status === "completed")
    .reduce((acc, curr) => {
      acc[curr.customer] = (acc[curr.customer] || 0) + curr.amount;
      return acc;
    }, initial);
}


And here's how you'd say it out loud in an interview:

"I first used map to derive a list of customer names from the orders array, 
then wrapped it in a Set to remove duplicates. I then used reduce to build 
an initial accumulator object where each unique customer starts at zero. 
Finally I filtered the orders down to completed status only and reduced them 
into that initial object, adding each order's amount to the corresponding customer key. 
This ensures every customer appears in the result even if they had no completed orders."

*/