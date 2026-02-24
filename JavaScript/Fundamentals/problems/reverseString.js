function reverseString(string) {
  if (typeof string !== "string") return "";

  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}


// approach 2: Forward looping with prepend each character to the front

function reverseString2(string) {
  if (typeof string !== "string") return "";

  let result = "";

  for (let i = 0; i < string.length; i++) {
    result = string[i] + result; // add to the FRONT instead of the back
  }
  return result;
}


function reverseStringMethods(string) {
  return string
  .split("")  //  → ["H", "e", "l", "l", "o"]   // string → array of characters
  .reverse()  //  → ["o", "l", "l", "e", "H"]   // reverses the array in place
  .join("")    // "olleH"                      // array → string (no separator)
}

let reverseMethods = reverseStringMethods("Hello");
console.log(reverseMethods);