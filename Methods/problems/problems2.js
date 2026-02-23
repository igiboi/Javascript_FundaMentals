const products = [
  { name: "Apple", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Broccoli", category: "vegetable" },
  { name: "Milk", category: "dairy" },
];

function groupByCategory(products) {
  const result = {};
  for (const product of products) {
    if (result[product.category] === undefined) {
      result[product.category] = [];
    }
  result[product.category].push(product.name);
  }
  return result;
}

console.log(groupByCategory(products));