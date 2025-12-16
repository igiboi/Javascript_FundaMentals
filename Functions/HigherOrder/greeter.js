function greeter(greeting) {
  function greet(name) {
    console.log(`${greeting} ${name}`);
  }
  return greet;
}


const sayHello = greeter("Hello");
const sayHi = greeter("Hi");

sayHello("Luigi");  // Should log: "Hello Luigi"
sayHi("Luigi");     // Should log: "Hi Luigi"