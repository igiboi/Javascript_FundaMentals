/*
How it works
flat() takes a nested array and flattens it into a single array.


[1, [2, 3], [4, 5]].flat()
// [1, 2, 3, 4, 5]
By default it only goes one level deep. If you have deeper nesting, 
pass a depth argument:


[1, [2, [3, [4]]]].flat(1)  // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2)  // [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity)  // [1, 2, 3, 4]
Infinity flattens no matter how deep the nesting goes.

*/


/*
Here's your problem:

You have an array of orders, where each order contains an array of items.
 Return a single flat array of all items across all orders.
*/

const orders = [
  { id: 1, items: ["apple", "banana"] },
  { id: 2, items: ["milk", "bread", "eggs"] },
  { id: 3, items: ["coffee"] },
];


const allOrders = orders
  .map(order => order.items)
  .flat();

console.log(allOrders);


/*
One thing worth knowing — this pattern of map then flat is so common 
that JavaScript has a built-in shortcut for it called flatMap:

const allOrders = orders.flatMap(order => order.items);
*/