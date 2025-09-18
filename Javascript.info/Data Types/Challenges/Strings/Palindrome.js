function isPalindrome(s) {
    const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    reversed = normalized.split('').reverse().join('');
    return normalized === reversed
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("0P")); // false
console.log(isPalindrome("1a2A1")); // true