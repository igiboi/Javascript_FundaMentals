//Objects are heavier than primitives. They require additional resources to suppor the internal machinery

let str = "Hello";
str.toUpperCase(); // "HELLO"

// JavaScript performs something under the hood:

// 1. Boxing:
// When you call a method on a primitive ("Hello".toUpperCase()), JavaScript wraps the primitive ina  special object wrapper

// so internally, its like:

new String(str).toUpperCase();

// Calls the .toUpperCase() method on that wrapper

// Returns the result

// Discards the wrapper

// You never see this happening — it’s automatic — but it lets you use object-like behavior on primitives.

// You can call methods, but you can’t add properties like this:

str.custom = "nope"; // ❌ doesn't work — it's ignored
// Because the wrapper is temporary, it’s like writing on water — it disappears instantly.