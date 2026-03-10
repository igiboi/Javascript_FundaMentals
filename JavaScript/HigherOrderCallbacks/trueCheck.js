/*
 * Lab: All-True Property Validator
 *
 * Problem Statement:
 * Test a specific property of each object in an array to see if it always
 * has a truthy value. Given an array of objects and a property name, return
 * true if every object has a truthy value for that property, false otherwise.
 *
 * Examples:
 *   truthCheck([{name: "Quincy"}, {name: "Naomi"}, {name: "Camperbot"}], "name")
 *   → true  (all names are non-empty strings, which are truthy)
 *
 *   truthCheck([{role: "Founder"}, {role: ""}, {role: "Bot"}], "role")
 *   → false  (empty string "" is falsy, so not all values are truthy)
 *
 * User Stories:
 * - You should have a function named truthCheck
 * - truthCheck takes two arguments: an array of objects and a string (property name)
 * - The function should return true if the property has a truthy value in ALL objects
 * - The function should return false if any object has a falsy value for that property
 */

function truthCheck(collection, pre) {
  // .every() is the right higher-order function here because we need ALL elements
  // to pass a condition — not just some. It returns true only if the callback
  // returns truthy for every element. The moment one fails, it stops and returns false.
  // Arrow function syntax: obj => obj[pre]
  // This is identical to writing: function(obj) { return obj[pre]; }
  // When an arrow function has no curly braces, it implicitly returns the expression.
  // obj represents each object in the array, one at a time (e.g. {name: "Quincy", role: "Founder"})
  //
  // We use bracket notation — obj[pre] — instead of dot notation — obj.pre —
  // because pre is a variable holding a string like "name" or "role".
  // Dot notation would look for a property literally named "pre", which doesn't exist.
  // Bracket notation evaluates the variable and looks up the property dynamically.
  //
  // We return the value directly without an explicit === true check.
  // .every() evaluates the return value as a boolean automatically,
  // so truthy values (non-empty strings, numbers, objects) pass,
  // and falsy values ("", 0, null, undefined, false) fail.
  return collection.every(obj => obj[pre]);
}
