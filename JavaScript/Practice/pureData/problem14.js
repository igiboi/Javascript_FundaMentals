/*
You have an array of orders. Return the total revenue 
from orders where the quantity is greater than 2.

*/

const orders = [
  { product: "Apple", price: 1.5, quantity: 5 },
  { product: "Bread", price: 3.0, quantity: 1 },
  { product: "Milk", price: 2.5, quantity: 3 },
  { product: "Eggs", price: 4.0, quantity: 2 },
  { product: "Cheese", price: 6.0, quantity: 4 },
];

function totalRevenue(orders) {
  return orders
    .filter(product => product.quantity > 2)
    .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
}

const result = totalRevenue(orders);

console.log(result);