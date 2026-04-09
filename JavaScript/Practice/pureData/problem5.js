const orders = [
  { product: "Keyboard", quantity: 3, price: 49 },
  { product: "Monitor", quantity: 1, price: 299 },
  { product: "Mouse", quantity: 5, price: 29 },
  { product: "Headphones", quantity: 2, price: 89 },
];


/*
function that returns total of quantity * price
*/

function getTotalRevenue(orders) {
  return orders
    .reduce((accumulate, currentValue) =>
      accumulate
      + (currentValue.quantity * currentValue.price), 0)
}

const result = getTotalRevenue(orders);

console.log(result);