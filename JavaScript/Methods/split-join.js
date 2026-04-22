/* 
split() — turns a string into an array, splitting on a 
delimiter you specify:

"hello world".split(" ")    // ["hello", "world"]
"a,b,c".split(",")          // ["a", "b", "c"]
"hello".split("")           // ["h", "e", "l", "l", "o"]


join() — turns an array into a string, joining with a 
separator you specify:

["hello", "world"].join(" ")   // "hello world"
["a", "b", "c"].join(",")      // "a,b,c"
["h", "i"].join("")            // "hi"
*/

const sentence = "the quick brown fox";

const reverseOrder =
  sentence.split(" ").reverse().join(" ");

console.log(reverseOrder);
