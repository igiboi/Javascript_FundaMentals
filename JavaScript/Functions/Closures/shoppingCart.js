function createShoppingCart() {
  let items = [];

  return {
    addItem(name, price) {
      items.push({ name, price }); // creates an object
    },

    getTotal() {
      return items.reduce((acc, item) => acc + item.price, 0);
    },

    removeItem(name) {
      const index = items.findIndex((item) => item.name === name);
      if (index !== -1) {
        // Make sure item exists
        items.splice(index, 1); // starting at index and remove 1 item
      }
    },

    getItems() {
      return [...items];
    }
  };
}


const myCart = createShoppingCart();
myCart.addItem("Apple", 1.5);
myCart.addItem("Banana", 0.75);
myCart.addItem("Orange", 2.0);

console.log(myCart.getItems());
console.log(myCart.getTotal());

myCart.removeItem("Banana");
console.log(myCart.getTotal());