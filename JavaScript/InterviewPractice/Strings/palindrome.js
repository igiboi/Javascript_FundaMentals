// Problem: Write a function called isPalindrome that takes a string as a parameter.
// Return true if the string is a palindrome (reads the same forwards and backwards), false if not.
// Example: isPalindrome("racecar") => true
// Example: isPalindrome("hello") => false

const str1 = "racecar";
const str2 = "hello";

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

result1 = isPalindrome(str1);
result2 = isPalindrome(str2);

console.log(result1);
console.log(result2);