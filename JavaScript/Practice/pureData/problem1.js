/*
Problem 1

You have an array of product objects. Each product has a name (string)
and a price (number). Write a function getAffordableProducts that
takes the array and a maxPrice number, and returns an array of
product names (strings only) where the price is less than or equal 
to maxPrice.

*/

const products = [
  { name: "Keyboard", price: 49 },
  { name: "Monitor", price: 299 },
  { name: "Mouse", price: 29 },
  { name: "Headphones", price: 89 },
  { name: "Webcam", price: 65 },
];


/*
Structure on writing 

what the function takes → what the chain does → 
what each method's callback does → what gets returned


"getAffordableProducts is a function that takes two parameters productsArray,
 which is an array of objects, and maxPrice, which is a number.
The function has a direct return statement that method chains
 .filter() and .map() on productsArray.
First, .filter() is called with a callback function that receives each product object 
and returns true if product.price is less than or equal to maxPrice. 
.filter() collects every item where the callback returned true and
 returns them as a new array.
.map() is then called on that filtered array. Its callback function 
receives each product object and returns just the name property. 
.map() transforms each object into a string and returns a new array of those strings.
The result of the entire chain an array of product name strings is 
what the function returns to the caller."
*/
function getAffordableProducts(productsArray, maxPrice) {
  return productsArray
    .filter((product) => product.price <= maxPrice)
    .map((product) => product.name)
}

const result = getAffordableProducts(products, 65);

console.log(result);