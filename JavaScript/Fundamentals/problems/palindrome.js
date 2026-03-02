function isPalindrome(string) {
  // clean the string (lowercase, remove spaces)
  const normalized = string.toLowerCase().replace(/[^a-z]/g, "");
  
  // reverse the cleaned string
  const reverseString = normalized.split("").reverse().join("");
  
  // compare original cleaned string to reversed string
  return normalized === reverseString;
}

const checkPalindrome = isPalindrome("racecar");

console.log(checkPalindrome);