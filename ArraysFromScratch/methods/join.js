// join is an array method
Array.join(seperator);

// it returns a string made by gluing together all elements of the array.

// how it works
// it takes element of the array
// inserts the separator string between them
// returns the new string

// parameters
// separator (optional) what you want between each element
// by default uses ","
// can be any string("-", " ", "", "---", etc)

// Examples
const letters = ["a", "b", "c"];

const joinLetters = letters.join();

console.log(joinLetters); // a,b,c

const joinDash = letters.join('-');

console.log(joinDash); // a-b-c

const hello = ['h', 'e', 'l', 'l', 'o'];

const joinHello = hello.join("");

console.log(joinHello); // hello

const words = ['Learning', 'join', 'is', 'fun'];

const joinWords = words.join(' ');

console.log(joinWords); // "Learning join is fun"

const letterDash = ['a', 'b', 'c', 'd'];

const dashSeparated = letterDash.join('-');

console.log(dashSeparated); // a-b-c-d

const chars = ['J', 'S'];

const joinChars = chars.join('');

console.log(joinChars);