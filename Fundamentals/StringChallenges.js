function getLastChar(str) {
  const lastChar = str[str.length - 1];

  return lastChar;
}

console.log(getLastChar('Luigi')); // i

function capitalize(str) {
  const firstChar = str[0].toUpperCase();
  const restOfChar = str.slice(1);
// template literal strings
  return firstChar + restOfChar;
}

console.log(capitalize('john'));

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString('hello'));

//convert string into array 

function countVowels(str) {
  const vowels = 'aeiou';

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}
// reduce method
// turn string into array 
// filter method 
console.log(countVowels('javascript'));


// Palindrome Checker
// Check if a string reads the same backward.

// Practice: combine reversal logic + comparison.

// isPalindrome("racecar"); // tru
// isPalindrome("hello");   // false
function palindrome(str) {
  // 1) Normalize: lowercase + remove non-alphanumerics
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // 2) Reverse the cleaned string
  const reversed = cleaned.split("").reverse().join("");

  // 3) Compare
  return cleaned === reversed;
}

console.log(palindrome("raCeCar"));                 // true
console.log(palindrome("A man, a plan, a canal: Panama")); // true
console.log(palindrome("hello"));                   // false



// Find First Unique Character
// Return the first character that doesn’t repeat.

// Practice: nested loops or maps.

// firstUniqueChar("swiss"); // "w"