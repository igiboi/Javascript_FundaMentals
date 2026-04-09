/*
Write a function getAveragePriceByCategory that returns 
an object where each key is a category and 
the value is the average price of products in that category.

Expected output:

{ Electronics: 732.33, Furniture: 350 }

*/

const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "Phone", category: "Electronics", price: 699 },
  { name: "Desk", category: "Furniture", price: 450 },
  { name: "Chair", category: "Furniture", price: 250 },
  { name: "Tablet", category: "Electronics", price: 499 },
];


function getAveragePriceByCategory(products) {
  const totals = products.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = { total: 0, count: 0 };
    acc[curr.category].total += curr.price;
    acc[curr.category].count += 1;
    return acc;
  }, {});

  console.log(totals);

  return Object.keys(totals).reduce((acc, category) => {
    acc[category] =
      Math.round((totals[category].total / totals[category].count) * 100) / 100;
    return acc;
  }, {});
}


const result = getAveragePriceByCategory(products);

console.log(result);