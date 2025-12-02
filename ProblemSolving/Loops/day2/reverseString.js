/* 

Problem: we receive a string and reverse it 

reverseString("hello")        // returns: "olleh"
reverseString("JavaScript")   // returns: "tpircSavaJ"
reverseString("12345")        // returns: "54321"
reverseString("a")            // returns: "a"
reverseString("")             // returns: ""
reverseString("racecar")      // returns: "racecar" (palindrome!)

tools: 
  for loop to through the string
  we take 

*/

function reverseString(str) {
  let result = "";

  for (let char of str) {
    result = char + result; // this adds it to the front
  }
  /*
result = char + result;
result = "A" + "";
result = "A"
```

**Visual:**
```
char goes here → [A] + [] ← result was here
                 [A]      ← New result

result = char + result;
result = "B" + "A";  // result currently holds "A"
result = "BA"
```

**Visual:**
```
char goes here → [B] + [A] ← result was here
                 [BA]      ← New result
*/

  return result;
}


console.log("Test 1:", reverseString("hello"));
// Expected: "olleh"

console.log("Test 2:", reverseString("JavaScript"));
// Expected: "tpircSavaJ"

console.log("Test 3:", reverseString("12345"));
// Expected: "54321"

console.log("Test 4:", reverseString("a"));
// Expected: "a"

console.log("Test 5:", reverseString(""));
// Expected: ""

console.log("Test 6:", reverseString("racecar"));
// Expected: "racecar"