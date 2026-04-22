/*

You have an array of product arrays grouped by category.
 Return a single flat array of all product names that 
 start with the letter "S".

 Expected output:

["Shoes", "Socks", "Shirt", "Scarf"]
*/

const categories = [
  ["Shoes", "Socks", "Hat"],
  ["Shirt", "Pants"],
  ["Scarf", "Gloves", "Belt"],
];


function findProduct(categories) {
  return categories
    .flat()
    .filter(product => product[0] === "S");
  
};

const result = findProduct(categories);

console.log(result);