const inventory = [];

function findProductIndex(name) {
  return inventory.findIndex((product) => product.name === name.toLowerCase());
}

function addProduct(product) {
  const normalizedName = product.name.toLowerCase();
  const index = findProductIndex(normalizedName);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${normalizedName} quantity updated`);
  } else {
    inventory.push({ name: normalizedName, quantity: product.quantity });
    console.log(`${normalizedName} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const normalizedName = name.toLowerCase();
  const index = findProductIndex(normalizedName);
  if (index === -1) {
    console.log(`${normalizedName} not found`);
    return;
  }
  const product = inventory[index];
  // nested conditionals
  if (quantity > product.quantity) {
    console.log(
      `Not enough ${normalizedName} available, remaining pieces: ${product.quantity}`,
    );
  } else {
    product.quantity -= quantity;
    if (product.quantity === 0) {
      inventory.splice(index, 1);
    } else {
      console.log(`Remaining ${normalizedName} pieces: ${product.quantity}`);
    }
  }
}
