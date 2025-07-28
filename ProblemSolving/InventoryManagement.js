let inventory = [
  { name: 'apple', quantity: 3 },
  { name: 'banana', quantity: 5 },
  { name: 'orange', quantity: 2 },
];

function findProductIndex(productName) {
    for (let i = 0; i < inventory.length; i++) {

     let inventoryName = inventory[i].name.toLowerCase();

    if (productName.toLowerCase() === inventoryName ) {
      return i;
    }
  }
  return -1;
}

console.log(findProductIndex("banana")); // ➞ 1

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity: product.quantity });
    console.log(`${name} added to inventory`);
  }
}


function repeatStringNumTimes(str, num) {
  if (num <= 0) return ""; // handle edge case early

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str; // build up the final string
  }

  return result;
}