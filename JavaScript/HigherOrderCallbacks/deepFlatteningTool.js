/*
 * Lab: Deep Flattening Tool
 *
 * Problem Statement:
 * Implement an array flattening algorithm that turns a nested array of any
 * depth into a single, one-dimensional array. The process extracts all
 * elements in order, unwrapping only arrays. Other types are left unchanged.
 *
 * Examples:
 *   [[1], [], [2, [3]]]         → [1, 2, 3]
 *   [1, {"foo": "bar"}, [2]]    → [1, {"foo": "bar"}, 2]
 *   ["baz", [1, 2], {}]         → ["baz", 1, 2, {}]
 *
 * User Stories:
 * - You should have a function named steamrollArray
 * - steamrollArray should accept one argument: a nested array
 * - The function should flatten the nested array, accounting for varying levels of nesting
 * - Your solution should not use Array.prototype.flat() or Array.prototype.flatMap()
 * - Global variables should not be used
 */

function steamrollArray(array) {
  // We declare result with `let` because we reassign it later using .concat()
  let result = [];

  // Loop through each element in the array one at a time
  for (let element of array) {

    if (Array.isArray(element)) {
      // If the element is itself an array, we recurse — call steamrollArray again
      // on that nested array. We use Array.isArray() instead of typeof because
      // typeof [] returns "object", not "array", so it's not reliable here.
      //
      // We don't know how deep the nesting goes, so instead of handling each
      // level manually, we let the function call itself and trust that it will
      // keep going deeper until it hits non-array elements.
      const flattened = steamrollArray(element);

      // .concat() merges two arrays into a new one without mutating either.
      // We reassign result because .concat() doesn't modify in place —
      // it returns a new array.
      result = result.concat(flattened);

    } else {
      // Base case: if the element is not an array (number, string, object, etc.),
      // there's nothing left to unwrap — push it directly into result.
      // This is what stops the recursion from going deeper.
      result.push(element);
    }
  }

  // Return the fully flattened result. This return value is critical —
  // it's what gets captured by the recursive calls above.
  return result;
}
